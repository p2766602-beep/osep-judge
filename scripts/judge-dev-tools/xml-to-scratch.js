// 通用轉換器：把BlocklyYdws starterXml（Blockly積木XML）轉成真正的Scratch project.json
// blocks結構，取代逐題手動照抄build-m0-01-sb3.js的作法。
//
// 只支援BlocklyYdws M0系列題目實際會用到的積木子集（見下方SUPPORTED_TYPES），遇到不認識的
// 積木類型會直接丟錯，不會靜默產生錯誤的評分引擎答案。
//
// 對照表：
//   event_whenflagclicked  -> event_whenflagclicked（同名）
//   interaction_ask_and_wait -> sensing_askandwait（TEXT input -> QUESTION）
//   interaction_answer     -> sensing_answer
//   interaction_say        -> looks_say（TEXT input -> MESSAGE）
//   variables_set/get      -> data_setvariableto / data_variable
//   text                   -> 純文字shadow（primitive type 10）
//   math_number             -> 純數字shadow（primitive type 4）
//   text_join（N個ADD，mutation items=N）-> 攤平成N-1個operator_join的右結合鏈
//   math_arithmetic（OP:ADD/MINUS/MULTIPLY/DIVIDE）-> operator_add/subtract/multiply/divide
//   math_round（OP:ROUND）  -> operator_round
//   math_round（OP:ROUNDDOWN/ROUNDUP）-> operator_mathop（OPERATOR:floor/ceiling）
//   math_modulo             -> operator_mod
//   logic_compare（OP:EQ/GT/LT）-> operator_equals/gt/lt
//   controls_if（含elseif/else mutation）-> 巢狀control_if / control_if_else鏈

const SUPPORTED_TYPES = new Set([
    'event_whenflagclicked', 'interaction_ask_and_wait', 'interaction_answer', 'interaction_say',
    'variables_set', 'variables_get', 'text', 'math_number', 'text_join', 'math_arithmetic',
    'math_round', 'math_modulo', 'logic_compare', 'controls_if'
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

// ---- 轉換context ----

function createCtx() {
    let counter = 1;
    return {
        blocks: {},
        nextId() { return `b${counter++}`; }
    };
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
    if (type === 'logic_compare') {
        const opMap = {EQ: 'operator_equals', GT: 'operator_gt', LT: 'operator_lt'};
        const opcode = opMap[fieldText(blockEl, 'OP')];
        if (!opcode) throw new Error(`logic_compare未知OP：${fieldText(blockEl, 'OP')}`);
        const id = ctx.nextId();
        const node = {opcode, next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.OPERAND1 = convertValueInput(blockEl, 'A', id, ctx);
        node.inputs.OPERAND2 = convertValueInput(blockEl, 'B', id, ctx);
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
        return;
    }
    if (type === 'interaction_ask_and_wait') {
        const node = {opcode: 'sensing_askandwait', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.QUESTION = convertValueInput(el, 'TEXT', id, ctx);
        return;
    }
    if (type === 'interaction_say') {
        const node = {opcode: 'looks_say', next: null, parent: parentId, inputs: {}, fields: {}, shadow: false, topLevel: false};
        ctx.blocks[id] = node;
        node.inputs.MESSAGE = convertValueInput(el, 'TEXT', id, ctx);
        return;
    }
    if (type === 'variables_set') {
        const varField = namedChild(el, 'field', 'VAR');
        const node = {
            opcode: 'data_setvariableto', next: null, parent: parentId,
            inputs: {}, fields: {VARIABLE: [varField.text, varField.attrs.id]}, shadow: false, topLevel: false
        };
        ctx.blocks[id] = node;
        node.inputs.VALUE = convertValueInput(el, 'VALUE', id, ctx);
        return;
    }
    if (type === 'controls_if') {
        convertControlsIf(el, id, parentId, ctx);
        return;
    }

    throw new Error(`buildStatementNode未處理的積木類型：${type}`);
}

function convertStatementChain(startEl, parentId, ctx) {
    if (!startEl) return null;
    let firstId = null;
    let prevId = null;
    let el = startEl;
    while (el) {
        const id = ctx.nextId();
        const parent = prevId || parentId;
        buildStatementNode(el, id, parent, ctx);
        if (firstId === null) firstId = id;
        if (prevId) ctx.blocks[prevId].next = id;
        prevId = id;
        const nextWrapper = childByTag(el, 'next');
        el = nextWrapper ? blockChild(nextWrapper) : null;
    }
    return firstId;
}

// ---- 對外主函式 ----

/**
 * 把一份starterXml轉成Scratch sprite target需要的{variables, blocks}。
 * @param {string} xmlString BlocklyYdws starterXml字串
 * @returns {{variables: Object, blocks: Object}}
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
    const ctx = createCtx();
    const topBlock = blockChild(xmlRoot);
    if (!topBlock) throw new Error('starterXml沒有任何頂層積木');
    convertStatementChain(topBlock, null, ctx);
    return {variables, blocks: ctx.blocks};
}

module.exports = {parseXml, convertStarterXml};
