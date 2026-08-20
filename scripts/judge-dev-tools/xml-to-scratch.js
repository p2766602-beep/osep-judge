// 通用轉換器：把BlocklyYdws starterXml（Blockly積木XML）轉成真正的Scratch project.json
// blocks結構，取代逐題手動照抄build-m0-01-sb3.js的作法。
//
// 只支援BlocklyYdws實際會用到的Blockly積木子集（見下方SUPPORTED_TYPES），遇到不認識的
// 積木類型會直接丟錯，不會靜默產生錯誤的評分引擎答案——呼叫端（build-m0-course-sb3.js）
// 會把單題轉換失敗當成「這題沒有示範解答」處理，不影響其他題目。
//
// 2026-08-20擴充（114J/114E上架）：新增迴圈（controls_for/controls_repeat_ext/
// controls_whileUntil）、邏輯（logic_negate/logic_operation/logic_boolean/logic_ternary）、
// 字串（text_charAt/text_length）、數學（math_single）、清單（lists_create_with/
// lists_repeat/lists_getIndex/lists_setIndex/lists_indexOf）支援。
//
// 清單模型不相容問題：Blockly的清單是「值」（可以指定給一般變數、當運算元傳遞），Scratch的
// 清單是「舞台/角色層級具名資料結構」（沒有清單值插槽）。這裡採用的策略是：掃描XML找出
// 「哪些Blockly變數實際被當清單用」（被lists_create_with/lists_repeat賦值，或被lists_get
// /setIndex/indexOf/length讀取），把這些變數1:1對應成同名的Scratch原生清單；
// lists_create_with/lists_repeat在「直接賦值給清單變數」的統計上是唯一實際出現的用法
// （已用完整語料驗證），轉換成「先清空清單、再逐一add」的原生清單積木序列。
//
// logic_ternary（三元運算子）沒有對應的Scratch reporter積木，用「hoist成暫時變數」手法：
// 在目前這個statement之前插入一個if/else積木，依條件把THEN或ELSE的值存進一個新增的暫時
// 變數，三元運算子本身在原本的位置換成讀取這個暫時變數。這個手法透過ctx.pending佇列實作，
// 支援任意巢狀（例如三元運算式包三元運算式），也用同一套機制處理lists_create_with/
// lists_repeat剛好出現在「不是清單變數直接賦值」的位置時的例外狀況（目前語料沒有這種情況，
// 遇到會直接丟錯，不會靜默猜測）。
//
// 刻意不支援（語料掃描確認只影響114ETaichung這一份課程檔的少數幾題，直接丟錯讓那幾題
// 沒有示範解答，不值得為了個位數題目擴充轉換器）：text_getSubstring、text_prompt_ext、
// controls_flow_statements（break/continue）、math_constrain。

const SUPPORTED_TYPES = new Set([
    'event_whenflagclicked', 'interaction_ask_and_wait', 'interaction_answer', 'interaction_say',
    'variables_set', 'variables_get', 'text', 'math_number', 'text_join', 'math_arithmetic',
    'math_round', 'math_modulo', 'logic_compare', 'controls_if',
    'controls_for', 'controls_repeat_ext', 'controls_whileUntil',
    'logic_negate', 'logic_operation', 'logic_boolean', 'logic_ternary',
    'text_charAt', 'text_length', 'math_single',
    'lists_create_with', 'lists_repeat', 'lists_getIndex', 'lists_setIndex', 'lists_indexOf', 'lists_length'
]);

// ---- 極簡XML解析器（只處理本專案starterXml實際用到的語法子集：巢狀標籤/屬性/文字內容） ----

function decodeEntities(s) {
    return s
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, '\'')
        .replace(/&#39;/g, '\'')
        .replace(/&amp;/g, '&');
}

function parseAttrs(attrStr) {
    const attrs = {};
    const re = /([a-zA-Z0-9_:-]+)\s*=\s*"([^"]*)"/g;
    let m;
    while ((m = re.exec(attrStr || ''))) attrs[m[1]] = decodeEntities(m[2]);
    return attrs;
}

function parseXml(xmlStr) {
    const tagRe = /<([a-zA-Z0-9_]+)((?:\s+[a-zA-Z0-9_:-]+\s*=\s*"[^"]*")*)\s*(\/?)>|<\/([a-zA-Z0-9_]+)\s*>/g;
    const root = {tag: '#root', attrs: {}, children: [], text: ''};
    const stack = [root];
    let lastIndex = 0;
    let m;
    while ((m = tagRe.exec(xmlStr))) {
        const textBefore = xmlStr.slice(lastIndex, m.index);
        if (textBefore) stack[stack.length - 1].text += decodeEntities(textBefore);
        lastIndex = tagRe.lastIndex;
        if (m[4]) {
            stack.pop();
        } else {
            const node = {tag: m[1], attrs: parseAttrs(m[2]), children: [], text: ''};
            stack[stack.length - 1].children.push(node);
            if (!m[3]) stack.push(node);
        }
    }
    if (stack.length !== 1) {
        throw new Error(`XML解析失敗：標籤未正確關閉（剩餘 ${stack.map(n => n.tag).join(' > ')}）`);
    }
    return root.children[0];
}

// ---- XML樹輔助函式 ----

const childByTag = (el, tag) => (el.children || []).find(c => c.tag === tag);
const childrenByTag = (el, tag) => (el.children || []).filter(c => c.tag === tag);
const namedChild = (el, tag, name) => (el.children || []).find(c => c.tag === tag && c.attrs.name === name);
const fieldText = (el, name) => {
    const f = namedChild(el, 'field', name);
    return f ? f.text : '';
};
const blockChild = (el) => childByTag(el, 'block');

// ---- 前置掃描：找出「實際被當清單用」的Blockly變數id ----
//
// 判定規則（已用114J/114E全部starterXml驗證，這是語料裡實際出現的唯一模式）：
// (a) 被variables_set賦值、且VALUE子積木是lists_create_with或lists_repeat；
// (b) 被lists_getIndex/lists_indexOf/lists_length的VALUE欄位、或lists_setIndex的LIST
//     欄位參照（欄位內容固定是一個variables_get）。
function walkAllBlocks(el, visit) {
    if (!el || !el.children) return;
    for (const child of el.children) {
        if (child.tag === 'block') {
            visit(child);
        }
        walkAllBlocks(child, visit);
    }
}

function collectListVars(xmlRoot) {
    const listVars = new Set();
    walkAllBlocks(xmlRoot, (blockEl) => {
        if (blockEl.attrs.type === 'variables_set') {
            const valueEl = namedChild(blockEl, 'value', 'VALUE');
            const inner = valueEl && blockChild(valueEl);
            if (inner && (inner.attrs.type === 'lists_create_with' || inner.attrs.type === 'lists_repeat')) {
                const varField = namedChild(blockEl, 'field', 'VAR');
                if (varField) listVars.add(varField.attrs.id);
            }
        }
        if (blockEl.attrs.type === 'lists_getIndex' || blockEl.attrs.type === 'lists_indexOf' || blockEl.attrs.type === 'lists_length') {
            const valueEl = namedChild(blockEl, 'value', 'VALUE');
            const inner = valueEl && blockChild(valueEl);
            if (inner && inner.attrs.type === 'variables_get') {
                const varField = namedChild(inner, 'field', 'VAR');
                if (varField) listVars.add(varField.attrs.id);
            }
        }
        if (blockEl.attrs.type === 'lists_setIndex') {
            const listEl = namedChild(blockEl, 'value', 'LIST');
            const inner = listEl && blockChild(listEl);
            if (inner && inner.attrs.type === 'variables_get') {
                const varField = namedChild(inner, 'field', 'VAR');
                if (varField) listVars.add(varField.attrs.id);
            }
        }
    });
    return listVars;
}

// ---- 轉換context ----

function createCtx(variables, listVars) {
    let counter = 1;
    return {
        blocks: {},
        variables,
        lists: {},
        listVars,
        pending: [],
        tempCounter: 1,
        nextId() { return `b${counter++}`; },
        newTempVar(prefix) {
            const id = `__${prefix}${this.tempCounter}`;
            const name = `__${prefix}${this.tempCounter}`;
            this.tempCounter += 1;
            this.variables[id] = [name, ''];
            return {id, name};
        },
        ensureList(varId, varName) {
            if (!this.lists[varId]) this.lists[varId] = [varName, []];
            return varId;
        }
    };
}

// 從「某個value欄位裡包的variables_get」直接取出清單變數的{id, name}，不透過convertValueBlock
// （清單本身在Scratch裡不是可以塞進插槽的值，必須直接用LIST欄位參照）。
function listVarFromValueSlot(parentEl, slotName, ctx, blockTypeForError) {
    const valueEl = namedChild(parentEl, 'value', slotName);
    const inner = valueEl && blockChild(valueEl);
    if (!inner || inner.attrs.type !== 'variables_get') {
        throw new Error(`${blockTypeForError}的${slotName}欄位不是預期的variables_get（清單只支援直接參照清單變數）`);
    }
    const varField = namedChild(inner, 'field', 'VAR');
    const varId = varField.attrs.id;
    if (!ctx.listVars.has(varId)) {
        throw new Error(`${blockTypeForError}參照到的變數「${varField.text}」沒有被判定為清單變數`);
    }
    ctx.ensureList(varId, varField.text);
    return {id: varId, name: varField.text};
}

// ---- value（reporter）轉換：回傳Scratch input陣列格式 ----

function convertValueBlock(blockEl, parentId, ctx) {
    const type = blockEl.attrs.type;
    if (!SUPPORTED_TYPES.has(type)) {
        throw new Error(`不支援的積木類型（value）：${type}`);
    }

    if (type === 'text') {
        return [1, [10, fieldText(blockEl, 'TEXT')]];
    }
    if (type === 'math_number') {
        return [1, [4, fieldText(blockEl, 'NUM')]];
    }
    if (type === 'interaction_answer') {
        const id = ctx.nextId();
        ctx.blocks[id] = {
            opcode: 'sensing_answer', next: null, parent: parentId,
            inputs: {}, fields: {}, shadow: false, topLevel: false
        };
        return [2, id];
    }
    if (type === 'variables_get') {
        const varField = namedChild(blockEl, 'field', 'VAR');
        const id = ctx.nextId();
        ctx.blocks[id] = {
            opcode: 'data_variable', next: null, parent: parentId,
            inputs: {}, fields: {VARIABLE: [varField.text, varField.attrs.id]},
            shadow: false, topLevel: false
        };
        return [2, id];
    }
    if (type === 'math_arithmetic') {
        const opMap = {ADD: 'operator_add', MINUS: 'operator_subtract', MULTIPLY: 'operator_multiply', DIVIDE: 'operator_divide'};
        const opcode = opMap[fieldText(blockEl, 'OP')];
        if (!opcode) throw new Error(`math_arithmetic未知OP：${fieldText(blockEl, 'OP')}`);
        const id = ctx.nextId();
        const node = {opcode, next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.NUM1 = convertValueInput(blockEl, 'A', id, ctx);
        node.inputs.NUM2 = convertValueInput(blockEl, 'B', id, ctx);
        return [2, id];
    }
    if (type === 'math_round') {
        const op = fieldText(blockEl, 'OP');
        const id = ctx.nextId();
        if (op === 'ROUND') {
            const node = {opcode: 'operator_round', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
            ctx.blocks[id] = node;
            node.inputs.NUM = convertValueInput(blockEl, 'NUM', id, ctx);
        } else {
            const mathOp = op === 'ROUNDDOWN' ? 'floor' : op === 'ROUNDUP' ? 'ceiling' : null;
            if (!mathOp) throw new Error(`math_round未知OP：${op}`);
            const node = {opcode: 'operator_mathop', next: null, parent: parentId, inputs: {}, fields: {OPERATOR: [mathOp, null]}, shadow: false, topLevel: false};
            ctx.blocks[id] = node;
            node.inputs.NUM = convertValueInput(blockEl, 'NUM', id, ctx);
        }
        return [2, id];
    }
    if (type === 'math_modulo') {
        const id = ctx.nextId();
        const node = {opcode: 'operator_mod', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.NUM1 = convertValueInput(blockEl, 'DIVIDEND', id, ctx);
        node.inputs.NUM2 = convertValueInput(blockEl, 'DIVISOR', id, ctx);
        return [2, id];
    }
    if (type === 'math_single') {
        const op = fieldText(blockEl, 'OP');
        const opMap = {ABS: 'abs', ROOT: 'sqrt'};
        const mathOp = opMap[op];
        if (!mathOp) throw new Error(`math_single未知OP：${op}`);
        const id = ctx.nextId();
        const node = {opcode: 'operator_mathop', next: null, parent: parentId, inputs: {}, fields: {OPERATOR: [mathOp, null]}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.NUM = convertValueInput(blockEl, 'NUM', id, ctx);
        return [2, id];
    }
    if (type === 'text_length') {
        const id = ctx.nextId();
        const node = {opcode: 'operator_length', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.STRING = convertValueInput(blockEl, 'VALUE', id, ctx);
        return [2, id];
    }
    if (type === 'text_charAt') {
        const where = fieldText(blockEl, 'WHERE');
        if (where !== 'FROM_START') throw new Error(`text_charAt只支援WHERE=FROM_START（實際：${where}）`);
        const id = ctx.nextId();
        const node = {opcode: 'operator_letter_of', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.LETTER = convertValueInput(blockEl, 'AT', id, ctx);
        node.inputs.STRING = convertValueInput(blockEl, 'VALUE', id, ctx);
        return [2, id];
    }
    if (type === 'logic_boolean') {
        const val = fieldText(blockEl, 'BOOL');
        const id = ctx.nextId();
        const node = {opcode: 'operator_equals', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.OPERAND1 = [1, [10, '1']];
        node.inputs.OPERAND2 = [1, [10, val === 'TRUE' ? '1' : '0']];
        return [2, id];
    }
    if (type === 'logic_negate') {
        const id = ctx.nextId();
        const node = {opcode: 'operator_not', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.OPERAND = convertValueInput(blockEl, 'BOOL', id, ctx);
        return [2, id];
    }
    if (type === 'logic_operation') {
        const op = fieldText(blockEl, 'OP');
        const opcode = op === 'AND' ? 'operator_and' : op === 'OR' ? 'operator_or' : null;
        if (!opcode) throw new Error(`logic_operation未知OP：${op}`);
        const id = ctx.nextId();
        const node = {opcode, next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.OPERAND1 = convertValueInput(blockEl, 'A', id, ctx);
        node.inputs.OPERAND2 = convertValueInput(blockEl, 'B', id, ctx);
        return [2, id];
    }
    if (type === 'logic_compare') {
        const op = fieldText(blockEl, 'OP');
        const opMap = {EQ: 'operator_equals', GT: 'operator_gt', LT: 'operator_lt'};
        // Scratch沒有原生>=/<=/!=積木，GTE(a,b)=NOT(LT(a,b))、LTE(a,b)=NOT(GT(a,b))、
        // NEQ(a,b)=NOT(EQ(a,b))，用operator_not包一層等價運算子組出來。
        if (op === 'GTE' || op === 'LTE' || op === 'NEQ') {
            const innerOpcode = op === 'GTE' ? 'operator_lt' : op === 'LTE' ? 'operator_gt' : 'operator_equals';
            const innerId = ctx.nextId();
            const notId = ctx.nextId();
            const notNode = {opcode: 'operator_not', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
            ctx.blocks[notId] = notNode;
            const innerNode = {opcode: innerOpcode, next: null, parent: notId, inputs: {}, fields: {}, shadow: false, topLevel: false};
            ctx.blocks[innerId] = innerNode;
            innerNode.inputs.OPERAND1 = convertValueInput(blockEl, 'A', innerId, ctx);
            innerNode.inputs.OPERAND2 = convertValueInput(blockEl, 'B', innerId, ctx);
            notNode.inputs.OPERAND = [2, innerId];
            return [2, notId];
        }
        const opcode = opMap[op];
        if (!opcode) throw new Error(`logic_compare未知OP：${op}`);
        const id = ctx.nextId();
        const node = {opcode, next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.OPERAND1 = convertValueInput(blockEl, 'A', id, ctx);
        node.inputs.OPERAND2 = convertValueInput(blockEl, 'B', id, ctx);
        return [2, id];
    }
    if (type === 'logic_ternary') {
        // Scratch沒有三元運算子reporter，hoist成：目前statement之前插入一個if/else，
        // 依IF條件把THEN或ELSE的值存進一個新增的暫時變數，這裡回傳讀取該暫時變數的值。
        // 見檔案開頭註解「logic_ternary」段落。
        const tmp = ctx.newTempVar('ternary');
        const ifElseId = ctx.nextId();
        const setThenId = ctx.nextId();
        const setElseId = ctx.nextId();
        const condInput = convertValueInput(blockEl, 'IF', ifElseId, ctx);
        const thenInput = convertValueInput(blockEl, 'THEN', setThenId, ctx);
        const elseInput = convertValueInput(blockEl, 'ELSE', setElseId, ctx);
        ctx.pending.push((parentIdForFirst) => {
            ctx.blocks[ifElseId] = {
                opcode: 'control_if_else', next: null, parent: parentIdForFirst,
                inputs: {CONDITION: condInput, SUBSTACK: [2, setThenId], SUBSTACK2: [2, setElseId]},
                fields: {}, shadow: false, topLevel: false
            };
            ctx.blocks[setThenId] = {
                opcode: 'data_setvariableto', next: null, parent: ifElseId,
                inputs: {VALUE: thenInput}, fields: {VARIABLE: [tmp.name, tmp.id]}, shadow: false, topLevel: false
            };
            ctx.blocks[setElseId] = {
                opcode: 'data_setvariableto', next: null, parent: ifElseId,
                inputs: {VALUE: elseInput}, fields: {VARIABLE: [tmp.name, tmp.id]}, shadow: false, topLevel: false
            };
            return {firstId: ifElseId, lastId: ifElseId};
        });
        const readId = ctx.nextId();
        ctx.blocks[readId] = {
            opcode: 'data_variable', next: null, parent: parentId,
            inputs: {}, fields: {VARIABLE: [tmp.name, tmp.id]}, shadow: false, topLevel: false
        };
        return [2, readId];
    }
    if (type === 'lists_getIndex') {
        const mode = fieldText(blockEl, 'MODE');
        const where = fieldText(blockEl, 'WHERE');
        if (where !== 'FROM_START') {
            throw new Error(`lists_getIndex只支援WHERE=FROM_START（實際：${where}）`);
        }
        const list = listVarFromValueSlot(blockEl, 'VALUE', ctx, 'lists_getIndex');
        if (mode === 'GET') {
            const id = ctx.nextId();
            const node = {opcode: 'data_itemoflist', next: null, parent: parentId, inputs: {}, fields: {LIST: [list.name, list.id]}, shadow: false, topLevel: false};
            ctx.blocks[id] = node;
            node.inputs.INDEX = convertValueInput(blockEl, 'AT', id, ctx);
            return [2, id];
        }
        if (mode === 'GET_REMOVE') {
            // 取出並移除（例如「搶位子」這種一取用就從清單刪掉的題目）：Scratch沒有
            // 單一積木同時做到，hoist成：先把該索引的值存進暫時變數，再刪掉該索引，
            // 這裡回傳讀取暫時變數的值。AT會被轉換兩次（一次給取值、一次給刪除）——
            // AT只是索引運算式，兩次轉換之間沒有任何東西會改變它的值，是安全的。
            const tmp = ctx.newTempVar('getremove');
            const setId = ctx.nextId();
            const getId = ctx.nextId();
            const delId = ctx.nextId();
            const atForGet = convertValueInput(blockEl, 'AT', getId, ctx);
            const atForDel = convertValueInput(blockEl, 'AT', delId, ctx);
            ctx.pending.push((parentIdForFirst) => {
                ctx.blocks[getId] = {opcode: 'data_itemoflist', next: null, parent: setId, inputs: {INDEX: atForGet}, fields: {LIST: [list.name, list.id]}, shadow: false, topLevel: false};
                ctx.blocks[setId] = {opcode: 'data_setvariableto', next: delId, parent: parentIdForFirst, inputs: {VALUE: [2, getId]}, fields: {VARIABLE: [tmp.name, tmp.id]}, shadow: false, topLevel: false};
                ctx.blocks[delId] = {opcode: 'data_deleteoflist', next: null, parent: setId, inputs: {INDEX: atForDel}, fields: {LIST: [list.name, list.id]}, shadow: false, topLevel: false};
                return {firstId: setId, lastId: delId};
            });
            const readId = ctx.nextId();
            ctx.blocks[readId] = {opcode: 'data_variable', next: null, parent: parentId, inputs: {}, fields: {VARIABLE: [tmp.name, tmp.id]}, shadow: false, topLevel: false};
            return [2, readId];
        }
        throw new Error(`lists_getIndex只支援MODE=GET或GET_REMOVE（實際：${mode}）`);
    }
    if (type === 'lists_indexOf') {
        const end = fieldText(blockEl, 'END');
        if (end !== 'FIRST') throw new Error(`lists_indexOf只支援END=FIRST（實際：${end}）`);
        const list = listVarFromValueSlot(blockEl, 'VALUE', ctx, 'lists_indexOf');
        const id = ctx.nextId();
        const node = {opcode: 'data_itemnumoflist', next: null, parent: parentId, inputs: {}, fields: {LIST: [list.name, list.id]}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.ITEM = convertValueInput(blockEl, 'FIND', id, ctx);
        return [2, id];
    }
    if (type === 'lists_length') {
        const list = listVarFromValueSlot(blockEl, 'VALUE', ctx, 'lists_length');
        const id = ctx.nextId();
        ctx.blocks[id] = {opcode: 'data_lengthoflist', next: null, parent: parentId, inputs: {}, fields: {LIST: [list.name, list.id]}, shadow: false, topLevel: false};
        return [2, id];
    }
    if (type === 'text_join') {
        const mutation = childByTag(blockEl, 'mutation');
        const n = parseInt(mutation.attrs.items, 10);
        const addEls = [];
        for (let i = 0; i < n; i++) {
            const v = namedChild(blockEl, 'value', `ADD${i}`);
            if (!v) throw new Error(`text_join缺少ADD${i}`);
            addEls.push(v);
        }
        const buildChain = (idx, chainParentId) => {
            if (idx === addEls.length - 1) {
                return convertValueFromValueEl(addEls[idx], chainParentId, ctx);
            }
            const id = ctx.nextId();
            const node = {opcode: 'operator_join', next: null, parent: chainParentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
            ctx.blocks[id] = node;
            node.inputs.STRING1 = convertValueFromValueEl(addEls[idx], id, ctx);
            node.inputs.STRING2 = buildChain(idx + 1, id);
            return [2, id];
        };
        if (addEls.length === 0) return [1, [10, '']];
        if (addEls.length === 1) return convertValueFromValueEl(addEls[0], parentId, ctx);
        return buildChain(0, parentId);
    }

    throw new Error(`convertValueBlock未處理的積木類型：${type}`);
}

function convertValueFromValueEl(valueEl, parentId, ctx) {
    const inner = blockChild(valueEl);
    if (!inner) return [1, [10, '']];
    return convertValueBlock(inner, parentId, ctx);
}

function convertValueInput(parentEl, name, parentId, ctx) {
    const valueEl = namedChild(parentEl, 'value', name);
    if (!valueEl) return [1, [10, '']];
    return convertValueFromValueEl(valueEl, parentId, ctx);
}

// ---- statement（積木鏈）轉換 ----

function statementStart(parentEl, name) {
    const stmtEl = namedChild(parentEl, 'statement', name);
    return stmtEl ? blockChild(stmtEl) : null;
}

function convertControlsIf(el, id, parentId, ctx) {
    const mutation = childByTag(el, 'mutation');
    const elseifCount = mutation && mutation.attrs.elseif ? parseInt(mutation.attrs.elseif, 10) : 0;
    const hasElse = !!(mutation && mutation.attrs.else === '1');

    const build = (i, levelId, levelParentId) => {
        const isLast = i === elseifCount;
        const useElseSlot = !isLast || hasElse;
        const node = {
            opcode: useElseSlot ? 'control_if_else' : 'control_if',
            next: null, parent: levelParentId,
            inputs: {}, fields: {}, shadow: false, topLevel: false
        };
        ctx.blocks[levelId] = node;
        node.inputs.CONDITION = convertValueInput(el, `IF${i}`, levelId, ctx);
        const substack1Start = statementStart(el, `DO${i}`);
        const substack1Id = substack1Start ? convertStatementChain(substack1Start, levelId, ctx) : null;
        if (substack1Id) node.inputs.SUBSTACK = [2, substack1Id];

        if (useElseSlot) {
            let substack2Id;
            if (!isLast) {
                substack2Id = ctx.nextId();
                build(i + 1, substack2Id, levelId);
            } else {
                const elseStart = statementStart(el, 'ELSE');
                substack2Id = elseStart ? convertStatementChain(elseStart, levelId, ctx) : null;
            }
            if (substack2Id) node.inputs.SUBSTACK2 = [2, substack2Id];
        }
        return levelId;
    };

    build(0, id, parentId);
    return id;
}

// repeat_until积木本身 + body。回傳這個loop積木自己的id（loop在上層chain裡是單一節點，
// body是它的SUBSTACK，跟chain的next鏈無關）。
function buildRepeatUntil(id, parentId, conditionInput, bodyStartEl, ctx) {
    const node = {opcode: 'control_repeat_until', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
    ctx.blocks[id] = node;
    node.inputs.CONDITION = conditionInput;
    const bodyId = bodyStartEl ? convertStatementChain(bodyStartEl, id, ctx) : null;
    if (bodyId) node.inputs.SUBSTACK = [2, bodyId];
    return id;
}

function buildStatementNode(el, id, parentId, ctx) {
    const type = el.attrs.type;
    if (!SUPPORTED_TYPES.has(type)) {
        throw new Error(`不支援的積木類型（statement）：${type}`);
    }

    if (type === 'event_whenflagclicked') {
        ctx.blocks[id] = {
            opcode: 'event_whenflagclicked', next: null, parent: null,
            inputs: {}, fields: {}, shadow: false, topLevel: true,
            x: parseInt(el.attrs.x || '40', 10), y: parseInt(el.attrs.y || '40', 10)
        };
        return id;
    }
    if (type === 'interaction_ask_and_wait') {
        const node = {opcode: 'sensing_askandwait', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.QUESTION = convertValueInput(el, 'TEXT', id, ctx);
        return id;
    }
    if (type === 'interaction_say') {
        const node = {opcode: 'looks_say', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.MESSAGE = convertValueInput(el, 'TEXT', id, ctx);
        return id;
    }
    if (type === 'variables_set') {
        const varField = namedChild(el, 'field', 'VAR');
        const valueEl = namedChild(el, 'value', 'VALUE');
        const inner = valueEl && blockChild(valueEl);
        const varId = varField.attrs.id;

        // 清單建立：lists_create_with / lists_repeat 直接賦值給清單變數，展開成
        // 「清空清單」+「逐一add」(create_with，編譯期已知N筆) 或
        // 「清空清單」+「repeat N次 add」(lists_repeat，N是執行期才知道的值)。
        if (inner && inner.attrs.type === 'lists_create_with' && ctx.listVars.has(varId)) {
            ctx.ensureList(varId, varField.text);
            const clearId = id;
            ctx.blocks[clearId] = {opcode: 'data_deletealloflist', next: null, parent: parentId, inputs: {}, fields: {LIST: [varField.text, varId]}, shadow: false, topLevel: false};
            const mutation = childByTag(inner, 'mutation');
            const n = parseInt(mutation.attrs.items, 10);
            let tailId = clearId;
            for (let i = 0; i < n; i++) {
                const addEl = namedChild(inner, 'value', `ADD${i}`);
                const addId = ctx.nextId();
                const itemInput = addEl ? convertValueFromValueEl(addEl, addId, ctx) : [1, [10, '']];
                ctx.blocks[addId] = {opcode: 'data_addtolist', next: null, parent: tailId, inputs: {ITEM: itemInput}, fields: {LIST: [varField.text, varId]}, shadow: false, topLevel: false};
                ctx.blocks[tailId].next = addId;
                tailId = addId;
            }
            return tailId;
        }
        if (inner && inner.attrs.type === 'lists_repeat' && ctx.listVars.has(varId)) {
            ctx.ensureList(varId, varField.text);
            const clearId = id;
            ctx.blocks[clearId] = {opcode: 'data_deletealloflist', next: null, parent: parentId, inputs: {}, fields: {LIST: [varField.text, varId]}, shadow: false, topLevel: false};
            const itemInput = convertValueInput(inner, 'ITEM', clearId, ctx);
            const numInput = convertValueInput(inner, 'NUM', clearId, ctx);
            const repeatId = ctx.nextId();
            const addId = ctx.nextId();
            ctx.blocks[addId] = {opcode: 'data_addtolist', next: null, parent: repeatId, inputs: {ITEM: itemInput}, fields: {LIST: [varField.text, varId]}, shadow: false, topLevel: false};
            ctx.blocks[repeatId] = {opcode: 'control_repeat', next: null, parent: clearId, inputs: {TIMES: numInput, SUBSTACK: [2, addId]}, fields: {}, shadow: false, topLevel: false};
            ctx.blocks[clearId].next = repeatId;
            return repeatId;
        }

        const node = {
            opcode: 'data_setvariableto', next: null, parent: parentId,
            inputs: {}, fields: {VARIABLE: [varField.text, varId]}, shadow: false, topLevel: false
        };
        ctx.blocks[id] = node;
        node.inputs.VALUE = convertValueInput(el, 'VALUE', id, ctx);
        return id;
    }
    if (type === 'lists_setIndex') {
        const mode = fieldText(el, 'MODE');
        const where = fieldText(el, 'WHERE');
        const list = listVarFromValueSlot(el, 'LIST', ctx, 'lists_setIndex');
        // MODE=INSERT/WHERE=LAST：插在最後面＝附加到清單尾端，直接對應Scratch的
        // data_addtolist（不需要INDEX，這個組合的XML本來就沒有AT欄位）。
        if (mode === 'INSERT' && where === 'LAST') {
            const node = {opcode: 'data_addtolist', next: null, parent: parentId, inputs: {}, fields: {LIST: [list.name, list.id]}, shadow: false, topLevel: false};
            ctx.blocks[id] = node;
            node.inputs.ITEM = convertValueInput(el, 'TO', id, ctx);
            return id;
        }
        if (mode !== 'SET' || where !== 'FROM_START') {
            throw new Error(`lists_setIndex只支援MODE=SET/WHERE=FROM_START或MODE=INSERT/WHERE=LAST（實際：${mode}/${where}）`);
        }
        const node = {opcode: 'data_replaceitemoflist', next: null, parent: parentId, inputs: {}, fields: {LIST: [list.name, list.id]}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.INDEX = convertValueInput(el, 'AT', id, ctx);
        node.inputs.ITEM = convertValueInput(el, 'TO', id, ctx);
        return id;
    }
    if (type === 'controls_if') {
        return convertControlsIf(el, id, parentId, ctx);
    }
    if (type === 'controls_repeat_ext') {
        const node = {opcode: 'control_repeat', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.TIMES = convertValueInput(el, 'TIMES', id, ctx);
        const bodyStart = statementStart(el, 'DO');
        const bodyId = bodyStart ? convertStatementChain(bodyStart, id, ctx) : null;
        if (bodyId) node.inputs.SUBSTACK = [2, bodyId];
        return id;
    }
    if (type === 'controls_whileUntil') {
        const mode = fieldText(el, 'MODE');
        const bodyStart = statementStart(el, 'DO');
        if (mode === 'UNTIL') {
            const condInput = convertValueInput(el, 'BOOL', id, ctx);
            return buildRepeatUntil(id, parentId, condInput, bodyStart, ctx);
        }
        if (mode === 'WHILE') {
            // repeat until NOT(condition) == repeat while condition
            const notId = ctx.nextId();
            const notNode = {opcode: 'operator_not', next: null, parent: id, inputs: {}, fields: {}, shadow: false, topLevel: false};
            ctx.blocks[notId] = notNode;
            notNode.inputs.OPERAND = convertValueInput(el, 'BOOL', notId, ctx);
            return buildRepeatUntil(id, parentId, [2, notId], bodyStart, ctx);
        }
        throw new Error(`controls_whileUntil未知MODE：${mode}`);
    }
    if (type === 'controls_for') {
        const varField = namedChild(el, 'field', 'VAR');
        const byEl = namedChild(el, 'value', 'BY');
        const byInner = byEl && blockChild(byEl);
        if (!byInner || byInner.attrs.type !== 'math_number') {
            throw new Error('controls_for只支援BY是常數（math_number）的情況');
        }
        const byNum = parseFloat(fieldText(byInner, 'NUM'));
        const ascending = byNum >= 0;

        // setVar(i, FROM)
        const initId = id;
        const initNode = {opcode: 'data_setvariableto', next: null, parent: parentId, inputs: {}, fields: {VARIABLE: [varField.text, varField.attrs.id]}, shadow: false, topLevel: false};
        ctx.blocks[initId] = initNode;
        initNode.inputs.VALUE = convertValueInput(el, 'FROM', initId, ctx);

        // repeat_until (ascending ? i > TO : i < TO)
        const loopId = ctx.nextId();
        const cmpId = ctx.nextId();
        const cmpLeftId = ctx.nextId();
        ctx.blocks[cmpLeftId] = {opcode: 'data_variable', next: null, parent: cmpId, inputs: {}, fields: {VARIABLE: [varField.text, varField.attrs.id]}, shadow: false, topLevel: false};
        const cmpNode = {opcode: ascending ? 'operator_gt' : 'operator_lt', next: null, parent: loopId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[cmpId] = cmpNode;
        cmpNode.inputs.OPERAND1 = [2, cmpLeftId];
        cmpNode.inputs.OPERAND2 = convertValueInput(el, 'TO', cmpId, ctx);

        const bodyStart = statementStart(el, 'DO');
        const loopNode = {opcode: 'control_repeat_until', next: null, parent: initId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[loopId] = loopNode;
        loopNode.inputs.CONDITION = [2, cmpId];
        const bodyFirstId = bodyStart ? convertStatementChain(bodyStart, loopId, ctx) : null;

        // increment：setVar(i, i + BY)，接在body鏈的最後面
        const incId = ctx.nextId();
        const incLeftId = ctx.nextId();
        ctx.blocks[incLeftId] = {opcode: 'data_variable', next: null, parent: incId, inputs: {}, fields: {VARIABLE: [varField.text, varField.attrs.id]}, shadow: false, topLevel: false};
        const addId = ctx.nextId();
        ctx.blocks[addId] = {
            opcode: 'operator_add', next: null, parent: incId,
            inputs: {NUM1: [2, incLeftId], NUM2: convertValueInput(el, 'BY', incId, ctx)},
            fields: {}, shadow: false, topLevel: false
        };
        ctx.blocks[incId] = {
            opcode: 'data_setvariableto', next: null, parent: bodyFirstId || loopId,
            inputs: {VALUE: [2, addId]}, fields: {VARIABLE: [varField.text, varField.attrs.id]}, shadow: false, topLevel: false
        };
        if (bodyFirstId) {
            // 找body鏈最後一個節點，接上incId
            let tail = bodyFirstId;
            while (ctx.blocks[tail].next) tail = ctx.blocks[tail].next;
            ctx.blocks[tail].next = incId;
            ctx.blocks[incId].parent = tail;
            loopNode.inputs.SUBSTACK = [2, bodyFirstId];
        } else {
            loopNode.inputs.SUBSTACK = [2, incId];
        }

        ctx.blocks[initId].next = loopId;
        return loopId;
    }

    throw new Error(`buildStatementNode未處理的積木類型：${type}`);
}

function convertStatementChain(startEl, parentId, ctx) {
    if (!startEl) return null;
    // ctx.pending是共用欄位，這個函式會遞迴呼叫自己（if/for/while/repeat的body、
    // controls_if的DO/ELSE都是透過這裡遞迴），一定要在進入時保存呼叫端當下累積到一半的
    // pending、離開時還原，不然巢狀迴圈/條件式的body處理完會把外層還沒drain的pending
    // 洗掉或（更糟）把body內已經drain過的closure殘留下來被外層誤重複執行一次，
    // 產生錯誤的.next連結甚至讓積木圖出現環（曾經實測撞到RangeError: Maximum call
    // stack size exceeded，根因就是這個狀態外洩）。
    const savedPending = ctx.pending;
    let firstId = null;
    let prevTailId = null;
    let el = startEl;
    while (el) {
        ctx.pending = [];
        const mainId = ctx.nextId();
        const groupParent = prevTailId || parentId;
        const mainTailId = buildStatementNode(el, mainId, groupParent, ctx) || mainId;

        // 把這個statement轉換過程中累積的pending pre-statement（例如logic_ternary
        // hoist出來的if/else）接在mainId前面。
        let groupFirstId = mainId;
        let chainCursor = groupParent;
        let priorId = null;
        for (const builder of ctx.pending) {
            const built = builder(chainCursor);
            if (priorId === null) {
                groupFirstId = built.firstId;
            } else {
                ctx.blocks[priorId].next = built.firstId;
            }
            priorId = built.lastId;
            chainCursor = built.lastId;
        }
        if (priorId !== null) {
            ctx.blocks[priorId].next = mainId;
            ctx.blocks[mainId].parent = priorId;
        }

        if (firstId === null) firstId = groupFirstId;
        if (prevTailId !== null) {
            ctx.blocks[prevTailId].next = groupFirstId;
        }
        prevTailId = mainTailId;

        const nextWrapper = childByTag(el, 'next');
        el = nextWrapper ? blockChild(nextWrapper) : null;
    }
    ctx.pending = savedPending;
    return firstId;
}

// ---- 對外主函式 ----

/**
 * 把一份starterXml轉成Scratch sprite target需要的{variables, blocks, lists}。
 * @param {string} xmlString BlocklyYdws starterXml字串
 * @returns {{variables: Object, blocks: Object, lists: Object}}
 */
function convertStarterXml(xmlString) {
    const xmlRoot = parseXml(xmlString);
    const variables = {};
    const varsEl = childByTag(xmlRoot, 'variables');
    if (varsEl) {
        childrenByTag(varsEl, 'variable').forEach(v => {
            variables[v.attrs.id] = [v.text, ''];
        });
    }
    const listVars = collectListVars(xmlRoot);
    const ctx = createCtx(variables, listVars);
    const topBlock = blockChild(xmlRoot);
    if (!topBlock) throw new Error('starterXml沒有任何頂層積木');
    convertStatementChain(topBlock, null, ctx);
    return {variables, blocks: ctx.blocks, lists: ctx.lists};
}

module.exports = {parseXml, convertStarterXml};
