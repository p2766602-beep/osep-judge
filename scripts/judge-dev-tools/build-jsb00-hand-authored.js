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
    add, div, round, gt, lt, not_, join, repeat, ifElse
} = require('./hand-author-builder.js');

const OUT_DIR = path.join(__dirname, 'hand-authored-answers', 'JSB00');
fs.mkdirSync(OUT_DIR, {recursive: true});

function writeTask(taskId, {variables, blocks}) {
    const outPath = path.join(OUT_DIR, `${taskId}.json`);
    fs.writeFileSync(outPath, JSON.stringify({variables, blocks}, null, 2), 'utf8');
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
