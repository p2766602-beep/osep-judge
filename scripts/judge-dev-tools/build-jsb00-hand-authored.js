// 手寫JSB00裡3題用到迴圈的示範解答（A-05-0/A-06-0/A-07-0），因為xml-to-scratch.js
// 轉換器不支援Blockly的controls_for/controls_repeat_ext。直接用官方Scratch平台原生的
// control_repeat積木手寫，輸出成JSON放進hand-authored-answers/JSB00/，供
// build-m0-course-sb3.js優先讀取（見該檔案的HAND_AUTHORED_DIR判斷邏輯）。
//
// 用法：node scripts/judge-dev-tools/build-jsb00-hand-authored.js

const fs = require('fs');
const path = require('path');
const {
    createBuilder, numShadow, textShadow, chain,
    whenFlagClicked, askAndWait, answer, say, setVar, getVar,
    add, sub, mul, div, round, floor_, gt, lt, not_, join, repeat, ifElse, if_
} = require('./hand-author-builder.js');

const OUT_DIR = path.join(__dirname, 'hand-authored-answers', 'JSB00');
fs.mkdirSync(OUT_DIR, {recursive: true});

function writeTask(taskId, b) {
    const outPath = path.join(OUT_DIR, `${taskId}.json`);
    fs.writeFileSync(outPath, JSON.stringify({variables: b.variables, blocks: b.blocks, lists: b.lists}, null, 2), 'utf8');
    console.log('寫入', outPath);
}

// ---- A-06-0 連續加總(1加到N)：輸入N，計算1+2+...+N ----
(function buildA0601() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const SUM = b.addVariable('v_sum', '總和');
    const I = b.addVariable('v_i', 'i');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const repeatId = b.nextId();
    b.blocks[repeatId] = {
        opcode: 'control_repeat', next: null, parent: flag,
        inputs: {TIMES: getVar(b, repeatId, N, 'N')}, fields: {}, shadow: false, topLevel: false
    };
    const addSum = setVar(b, repeatId, SUM, '總和', add(b, repeatId, getVar(b, repeatId, SUM, '總和'), getVar(b, repeatId, I, 'i')));
    const incI = setVar(b, repeatId, I, 'i', add(b, repeatId, getVar(b, repeatId, I, 'i'), numShadow(1)));
    const bodyFirst = chain(b, [addSum, incI]);
    if (bodyFirst) b.blocks[repeatId].inputs.SUBSTACK = [2, bodyFirst];

    const sayId = say(b, flag, getVar(b, flag, SUM, '總和'));

    chain(b, [flag, ask1, setN, setSum0, setI1, repeatId, sayId]);
    writeTask('A-06-0', b);
})();

// ---- A-07-0 乘法表：輸入N，輸出 N*1 ~ N*9 空白分隔 ----
(function buildA0701() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    // 初始值＝N*1（跟迴圈裡的算法一致，避免特判i=1）
    const {mul} = require('./hand-author-builder.js');
    const setResult0 = setVar(b, flag, RESULT, '結果', mul(b, flag, getVar(b, flag, N, 'N'), numShadow(1)));
    const setI2 = setVar(b, flag, I, 'i', numShadow(2));

    const repeatId = b.nextId();
    b.blocks[repeatId] = {
        opcode: 'control_repeat', next: null, parent: flag,
        inputs: {TIMES: numShadow(8)}, fields: {}, shadow: false, topLevel: false
    };
    const term = mul(b, repeatId, getVar(b, repeatId, N, 'N'), getVar(b, repeatId, I, 'i'));
    const withSpace = join(b, repeatId, textShadow(' '), term);
    const appendResult = setVar(b, repeatId, RESULT, '結果', join(b, repeatId, getVar(b, repeatId, RESULT, '結果'), withSpace));
    const incI = setVar(b, repeatId, I, 'i', add(b, repeatId, getVar(b, repeatId, I, 'i'), numShadow(1)));
    const bodyFirst = chain(b, [appendResult, incI]);
    if (bodyFirst) b.blocks[repeatId].inputs.SUBSTACK = [2, bodyFirst];

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));

    chain(b, [flag, ask1, setN, setResult0, setI2, repeatId, sayId]);
    writeTask('A-07-0', b);
})();

// ---- A-05-0 三科成績計算：輸入N筆成績，輸出「總分 平均 及格/不及格」 ----
(function buildA0501() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const SUM = b.addVariable('v_sum', '總分');
    const SCORE = b.addVariable('v_score', '成績');
    const AVG = b.addVariable('v_avg', '平均');
    const LINE = b.addVariable('v_line', '輸出行');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入科目數N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總分', numShadow(0));

    const repeatId = b.nextId();
    b.blocks[repeatId] = {
        opcode: 'control_repeat', next: null, parent: flag,
        inputs: {TIMES: getVar(b, repeatId, N, 'N')}, fields: {}, shadow: false, topLevel: false
    };
    const askScore = askAndWait(b, repeatId, textShadow(''));
    const setScore = setVar(b, repeatId, SCORE, '成績', answer(b, repeatId));
    const addSum = setVar(b, repeatId, SUM, '總分', add(b, repeatId, getVar(b, repeatId, SUM, '總分'), getVar(b, repeatId, SCORE, '成績')));
    const bodyFirst = chain(b, [askScore, setScore, addSum]);
    if (bodyFirst) b.blocks[repeatId].inputs.SUBSTACK = [2, bodyFirst];

    const setAvg = setVar(b, flag, AVG, '平均', round(b, flag, div(b, flag, getVar(b, flag, SUM, '總分'), getVar(b, flag, N, 'N'))));

    const setLine1 = setVar(b, flag, LINE, '輸出行', getVar(b, flag, SUM, '總分'));
    const setLine2 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), textShadow(' ')));
    const setLine3 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), getVar(b, flag, AVG, '平均')));
    const setLine4 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), textShadow(' ')));

    const ifElseId = b.nextId();
    b.blocks[ifElseId] = {
        opcode: 'control_if_else', next: null, parent: flag,
        inputs: {CONDITION: not_(b, ifElseId, lt(b, ifElseId, getVar(b, ifElseId, AVG, '平均'), numShadow(60)))},
        fields: {}, shadow: false, topLevel: false
    };
    const thenSet = setVar(b, ifElseId, LINE, '輸出行', join(b, ifElseId, getVar(b, ifElseId, LINE, '輸出行'), textShadow('及格')));
    const elseSet = setVar(b, ifElseId, LINE, '輸出行', join(b, ifElseId, getVar(b, ifElseId, LINE, '輸出行'), textShadow('不及格')));
    b.blocks[ifElseId].inputs.SUBSTACK = [2, chain(b, [thenSet])];
    b.blocks[ifElseId].inputs.SUBSTACK2 = [2, chain(b, [elseSet])];

    const sayId = say(b, flag, getVar(b, flag, LINE, '輸出行'));

    chain(b, [flag, ask1, setN, setSum0, repeatId, setAvg, setLine1, setLine2, setLine3, setLine4, ifElseId, sayId]);
    writeTask('A-05-0', b);
})();

// ---- A-01-1 一起學習吧：兩個名字，輸出「A, B, 一起學習吧！」 ----
(function buildA0101() {
    const b = createBuilder();
    const NAME1 = b.addVariable('v_name1', '姓名一');
    const NAME2 = b.addVariable('v_name2', '姓名二');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入第一個名字'));
    const setName1 = setVar(b, flag, NAME1, '姓名一', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入第二個名字'));
    const setName2 = setVar(b, flag, NAME2, '姓名二', answer(b, flag));

    const line1 = join(b, flag, getVar(b, flag, NAME1, '姓名一'), textShadow(', '));
    const setLine1 = setVar(b, flag, NAME1, '姓名一', line1);
    const line2 = join(b, flag, getVar(b, flag, NAME1, '姓名一'), getVar(b, flag, NAME2, '姓名二'));
    const setLine2 = setVar(b, flag, NAME1, '姓名一', line2);
    const line3 = join(b, flag, getVar(b, flag, NAME1, '姓名一'), textShadow(', 一起學習吧！'));
    const setLine3 = setVar(b, flag, NAME1, '姓名一', line3);

    const sayId = say(b, flag, getVar(b, flag, NAME1, '姓名一'));
    chain(b, [flag, ask1, setName1, ask2, setName2, setLine1, setLine2, setLine3, sayId]);
    writeTask('A-01-1', b);
})();

// ---- A-02-1 數字平均：兩個數字四捨五入取平均 ----
(function buildA0201() {
    const b = createBuilder();
    const A = b.addVariable('v_a', 'A');
    const Bv = b.addVariable('v_b', 'B');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入第一個數'));
    const setA = setVar(b, flag, A, 'A', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入第二個數'));
    const setB = setVar(b, flag, Bv, 'B', answer(b, flag));

    const avg = round(b, flag, div(b, flag, add(b, flag, getVar(b, flag, A, 'A'), getVar(b, flag, Bv, 'B')), numShadow(2)));
    const sayId = say(b, flag, avg);
    chain(b, [flag, ask1, setA, ask2, setB, sayId]);
    writeTask('A-02-1', b);
})();

// ---- A-03-1 臺斤公斤大PK：比較兩個重量，輸出較大者+單位，相同輸出「一樣重」 ----
(function buildA0301() {
    const b = createBuilder();
    const M = b.addVariable('v_m', 'M');
    const N = b.addVariable('v_n', 'N');
    const MKG = b.addVariable('v_mkg', 'M換算公斤');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入台斤數M'));
    const setM = setVar(b, flag, M, 'M', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入公斤數N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    // 一台斤等於0.6公斤，比較前要先把M換算成公斤，不能直接比較兩個原始數字。
    const setMkg = setVar(b, flag, MKG, 'M換算公斤', mul(b, flag, getVar(b, flag, M, 'M'), numShadow(0.6)));

    const outerIfElse = ifElse(
        b, flag,
        id => gt(b, id, getVar(b, id, MKG, 'M換算公斤'), getVar(b, id, N, 'N')),
        p1 => [say(b, p1, join(b, p1, getVar(b, p1, M, 'M'), textShadow('台斤')))],
        p2 => {
            const innerIfElse = ifElse(
                b, p2,
                id => gt(b, id, getVar(b, id, N, 'N'), getVar(b, id, MKG, 'M換算公斤')),
                p3 => [say(b, p3, join(b, p3, getVar(b, p3, N, 'N'), textShadow('公斤')))],
                p4 => [say(b, p4, textShadow('一樣重'))]
            );
            return [innerIfElse];
        }
    );

    chain(b, [flag, ask1, setM, ask2, setN, setMkg, outerIfElse]);
    writeTask('A-03-1', b);
})();

// ---- A-04-1 成績等第：0~100分對應A/B/C/D/E ----
(function buildA0401() {
    const b = createBuilder();
    const SCORE = b.addVariable('v_score', '成績');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入成績'));
    const setScore = setVar(b, flag, SCORE, '成績', answer(b, flag));

    const ge = (parent, threshold) => not_(b, parent, lt(b, parent, getVar(b, parent, SCORE, '成績'), numShadow(threshold)));

    const chain80 = ifElse(
        b, flag,
        id => ge(id, 80),
        p1 => [say(b, p1, textShadow('A'))],
        p2 => {
            const chain70 = ifElse(
                b, p2,
                id => ge(id, 70),
                p3 => [say(b, p3, textShadow('B'))],
                p4 => {
                    const chain60 = ifElse(
                        b, p4,
                        id => ge(id, 60),
                        p5 => [say(b, p5, textShadow('C'))],
                        p6 => {
                            const chain50 = ifElse(
                                b, p6,
                                id => ge(id, 50),
                                p7 => [say(b, p7, textShadow('D'))],
                                p8 => [say(b, p8, textShadow('E'))]
                            );
                            return [chain50];
                        }
                    );
                    return [chain60];
                }
            );
            return [chain70];
        }
    );

    chain(b, [flag, ask1, setScore, chain80]);
    writeTask('A-04-1', b);
})();

// ---- A-05-1 第二、三件購物優惠：固定3件，第2件9折、第3件8折（無條件捨去），輸出定價總額/售價總額/優惠金額 ----
(function buildA0501B() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const P1 = b.addVariable('v_p1', '第一件');
    const P2 = b.addVariable('v_p2', '第二件');
    const P3 = b.addVariable('v_p3', '第三件');
    const D2 = b.addVariable('v_d2', '第二件折扣後');
    const D3 = b.addVariable('v_d3', '第三件折扣後');
    const TOTAL_ORIG = b.addVariable('v_total_orig', '定價總額');
    const TOTAL_DISC = b.addVariable('v_total_disc', '售價總額');
    const SAVINGS = b.addVariable('v_savings', '優惠金額');
    const LINE = b.addVariable('v_line', '輸出行');

    const flag = whenFlagClicked(b);
    const ask0 = askAndWait(b, flag, textShadow('請輸入件數N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const ask1 = askAndWait(b, flag, textShadow('請輸入第一件定價'));
    const setP1 = setVar(b, flag, P1, '第一件', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入第二件定價'));
    const setP2 = setVar(b, flag, P2, '第二件', answer(b, flag));
    const ask3 = askAndWait(b, flag, textShadow('請輸入第三件定價'));
    const setP3 = setVar(b, flag, P3, '第三件', answer(b, flag));

    const setD2 = setVar(b, flag, D2, '第二件折扣後', floor_(b, flag, mul(b, flag, getVar(b, flag, P2, '第二件'), numShadow(0.9))));
    const setD3 = setVar(b, flag, D3, '第三件折扣後', floor_(b, flag, mul(b, flag, getVar(b, flag, P3, '第三件'), numShadow(0.8))));

    const setTotalOrig = setVar(b, flag, TOTAL_ORIG, '定價總額', add(b, flag, add(b, flag, getVar(b, flag, P1, '第一件'), getVar(b, flag, P2, '第二件')), getVar(b, flag, P3, '第三件')));
    const setTotalDisc = setVar(b, flag, TOTAL_DISC, '售價總額', add(b, flag, add(b, flag, getVar(b, flag, P1, '第一件'), getVar(b, flag, D2, '第二件折扣後')), getVar(b, flag, D3, '第三件折扣後')));
    const setSavings = setVar(b, flag, SAVINGS, '優惠金額', sub(b, flag, getVar(b, flag, TOTAL_ORIG, '定價總額'), getVar(b, flag, TOTAL_DISC, '售價總額')));

    // 注意：testCases.expectedOutput實際是空白分隔的單行（例如"2124 1717 407"），
    // 不是換行分隔——雖然examples欄位顯示成三行，但評分依據的是testCases，要以它為準。
    const setLine1 = setVar(b, flag, LINE, '輸出行', getVar(b, flag, TOTAL_ORIG, '定價總額'));
    const setLine2 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), textShadow(' ')));
    const setLine3 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), getVar(b, flag, TOTAL_DISC, '售價總額')));
    const setLine4 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), textShadow(' ')));
    const setLine5 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), getVar(b, flag, SAVINGS, '優惠金額')));

    const sayId = say(b, flag, getVar(b, flag, LINE, '輸出行'));
    chain(b, [flag, ask0, setN, ask1, setP1, ask2, setP2, ask3, setP3, setD2, setD3, setTotalOrig, setTotalDisc, setSavings, setLine1, setLine2, setLine3, setLine4, setLine5, sayId]);
    writeTask('A-05-1', b);
})();

// ---- A-06-1 連續乘積(1*2*3...*N) ----
(function buildA0601B() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const PRODUCT = b.addVariable('v_product', '乘積');
    const I = b.addVariable('v_i', 'i');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setProduct1 = setVar(b, flag, PRODUCT, '乘積', numShadow(1));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const repeatId = repeat(
        b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const mulProduct = setVar(b, parent, PRODUCT, '乘積', mul(b, parent, getVar(b, parent, PRODUCT, '乘積'), getVar(b, parent, I, 'i')));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [mulProduct, incI];
        }
    );

    const sayId = say(b, flag, getVar(b, flag, PRODUCT, '乘積'));
    chain(b, [flag, ask1, setN, setProduct1, setI1, repeatId, sayId]);
    writeTask('A-06-1', b);
})();

// ---- A-07-1 跳繩比賽：N人跳繩次數加總 ----
(function buildA0701B() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const SUM = b.addVariable('v_sum', '總次數');
    const NUM = b.addVariable('v_num', '次數');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入人數N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總次數', numShadow(0));

    const repeatId = repeat(
        b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '次數', answer(b, parent));
            const addSum = setVar(b, parent, SUM, '總次數', add(b, parent, getVar(b, parent, SUM, '總次數'), getVar(b, parent, NUM, '次數')));
            return [ask2, setNum, addSum];
        }
    );

    const sayId = say(b, flag, getVar(b, flag, SUM, '總次數'));
    chain(b, [flag, ask1, setN, setSum0, repeatId, sayId]);
    writeTask('A-07-1', b);
})();
