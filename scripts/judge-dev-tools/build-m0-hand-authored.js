// 手寫M0系列（M0-03/M0-04/M0-05/M0-06）裡轉換器轉不動的示範解答。
// M0-04有6題跟JSA00/JSB00共用同一個task id、內容逐題比對完全相同，直接複製既有JSON，
// 不重新手寫，避免重工。
//
// 用法：node scripts/judge-dev-tools/build-m0-hand-authored.js

const fs = require('fs');
const path = require('path');
const {
    createBuilder, numShadow, textShadow, chain,
    whenFlagClicked, askAndWait, answer, say, setVar, getVar,
    add, sub, mul, div, round, floor_, abs_, gt, lt, not_, and_, or_, join,
    repeat, repeatUntil, if_, ifElse, mod_, equals,
    addToList, itemOfList, deleteAllOfList
} = require('./hand-author-builder.js');

function writeTask(courseFolder, taskId, b) {
    const outDir = path.join(__dirname, 'hand-authored-answers', courseFolder);
    fs.mkdirSync(outDir, {recursive: true});
    const outPath = path.join(outDir, `${taskId}.json`);
    fs.writeFileSync(outPath, JSON.stringify({variables: b.variables, blocks: b.blocks, lists: b.lists}, null, 2), 'utf8');
    console.log('寫入', outPath);
}

function copyExisting(fromCourseFolder, toCourseFolder, taskId) {
    const src = path.join(__dirname, 'hand-authored-answers', fromCourseFolder, `${taskId}.json`);
    const destDir = path.join(__dirname, 'hand-authored-answers', toCourseFolder);
    fs.mkdirSync(destDir, {recursive: true});
    const dest = path.join(destDir, `${taskId}.json`);
    fs.copyFileSync(src, dest);
    console.log('複製', src, '->', dest);
}

// ============ M0-03-Conditionals ============
const M03 = 'M0-03-Conditionals';

(function buildBSC01004() {
    const b = createBuilder();
    const AGE = b.addVariable('v_age', '年齡');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入年齡'));
    const setAge = setVar(b, flag, AGE, '年齡', answer(b, flag));

    const cond = id => or_(b, id,
        lt(b, id, getVar(b, id, AGE, '年齡'), numShadow(12)),
        not_(b, id, lt(b, id, getVar(b, id, AGE, '年齡'), numShadow(65))));
    const ifElseId = ifElse(b, flag, cond,
        p1 => [say(b, p1, textShadow('DISCOUNT'))],
        p2 => [say(b, p2, textShadow('NORMAL'))]);

    chain(b, [flag, ask1, setAge, ifElseId]);
    writeTask(M03, 'BSC01-004', b);
})();

(function buildBSC01007() {
    const b = createBuilder();
    const A = b.addVariable('v_a', 'A');
    const Bv = b.addVariable('v_b', 'B');
    const C = b.addVariable('v_c', 'C');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入第一邊'));
    const setA = setVar(b, flag, A, 'A', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入第二邊'));
    const setB = setVar(b, flag, Bv, 'B', answer(b, flag));
    const ask3 = askAndWait(b, flag, textShadow('請輸入第三邊'));
    const setC = setVar(b, flag, C, 'C', answer(b, flag));

    const cond = id => and_(b, id,
        and_(b, id,
            gt(b, id, add(b, id, getVar(b, id, A, 'A'), getVar(b, id, Bv, 'B')), getVar(b, id, C, 'C')),
            gt(b, id, add(b, id, getVar(b, id, A, 'A'), getVar(b, id, C, 'C')), getVar(b, id, Bv, 'B'))),
        gt(b, id, add(b, id, getVar(b, id, Bv, 'B'), getVar(b, id, C, 'C')), getVar(b, id, A, 'A')));
    const ifElseId = ifElse(b, flag, cond,
        p1 => [say(b, p1, textShadow('YES'))],
        p2 => [say(b, p2, textShadow('NO'))]);

    chain(b, [flag, ask1, setA, ask2, setB, ask3, setC, ifElseId]);
    writeTask(M03, 'BSC01-007', b);
})();

// ============ M0-04-LoopsAndSum ============
const M04 = 'M0-04-LoopsAndSum';

// 這6題跟JSA00/JSB00的同id題目逐題比對testCases完全一致，直接複製既有答案。
copyExisting('JSB00', M04, 'A-07-0');
copyExisting('JSB00', M04, 'A-06-0');
copyExisting('JSB00', M04, 'A-06-1');
copyExisting('JSB00', M04, 'A-07-1');
copyExisting('JSA00', M04, 'A-08-0');
copyExisting('JSA00', M04, 'A-08-1');
// 這兩題跟A-06-0/A-06-1計算邏輯完全相同（都是1加到N/1乘到N），只是換了題目ID跟測資數值，
// 同一套通用演算法本來就能算對任何合法輸入，不用重寫（M04自己的A-06-0/A-06-1已在上面複製過，
// 這裡用不同輸出檔名再複製一次，不會互相覆蓋）。
fs.copyFileSync(
    path.join(__dirname, 'hand-authored-answers', 'JSB00', 'A-06-0.json'),
    path.join(__dirname, 'hand-authored-answers', M04, 'JSL01-D02.json')
);
console.log('複製 JSB00/A-06-0.json ->', M04 + '/JSL01-D02.json');
fs.copyFileSync(
    path.join(__dirname, 'hand-authored-answers', 'JSB00', 'A-06-1.json'),
    path.join(__dirname, 'hand-authored-answers', M04, 'JSL01-P03.json')
);
console.log('複製 JSB00/A-06-1.json ->', M04 + '/JSL01-P03.json');

(function buildJSL01D01() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const sayId = say(b, parent, getVar(b, parent, I, 'i'));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [sayId, incI];
        });

    chain(b, [flag, ask1, setN, setI1, repeatId]);
    writeTask(M04, 'JSL01-D01', b);
})();

(function buildJSL01P01() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const SUM = b.addVariable('v_sum', '總和');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const addSum = setVar(b, parent, SUM, '總和', add(b, parent, getVar(b, parent, SUM, '總和'), getVar(b, parent, NUM, '數字')));
            return [ask2, setNum, addSum];
        });

    const sayId = say(b, flag, getVar(b, flag, SUM, '總和'));
    chain(b, [flag, ask1, setN, setSum0, repeatId, sayId]);
    writeTask(M04, 'JSL01-P01', b);
})();

(function buildJSL01P02() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const SUM = b.addVariable('v_sum', '總和');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const ifEven = if_(b, parent,
                id => equals(b, id, mod_(b, id, getVar(b, id, NUM, '數字'), numShadow(2)), numShadow(0)),
                p2 => [setVar(b, p2, SUM, '總和', add(b, p2, getVar(b, p2, SUM, '總和'), getVar(b, p2, NUM, '數字')))]);
            return [ask2, setNum, ifEven];
        });

    const sayId = say(b, flag, getVar(b, flag, SUM, '總和'));
    chain(b, [flag, ask1, setN, setSum0, repeatId, sayId]);
    writeTask(M04, 'JSL01-P02', b);
})();

// ============ M0-05-ListBasics ============
const M05 = 'M0-05-ListBasics';

(function buildJSA01D01() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const sayId = say(b, parent, getVar(b, parent, NUM, '數字'));
            return [ask2, setNum, sayId];
        });

    chain(b, [flag, ask1, setN, repeatId]);
    writeTask(M05, 'JSA01-D01', b);
})();

(function buildCount001() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setResult1 = setVar(b, flag, RESULT, '結果', numShadow(1));
    const setI2 = setVar(b, flag, I, 'i', numShadow(2));

    const repeatId = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)),
        parent => {
            const append = setVar(b, parent, RESULT, '結果', join(b, parent, getVar(b, parent, RESULT, '結果'), join(b, parent, textShadow(' '), getVar(b, parent, I, 'i'))));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [append, incI];
        });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setN, setResult1, setI2, repeatId, sayId]);
    writeTask(M05, 'count-001', b);
})();

(function buildCount002() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const RESULT = b.addVariable('v_result', '結果');
    const CUR = b.addVariable('v_cur', '目前號碼');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setCur1 = setVar(b, flag, CUR, '目前號碼', numShadow(1));

    const loopId = repeatUntil(b, flag,
        id => gt(b, id, getVar(b, id, CUR, '目前號碼'), getVar(b, id, N, 'N')),
        parent => {
            const appendIfElse = ifElse(b, parent,
                id => equals(b, id, getVar(b, id, RESULT, '結果'), textShadow('')),
                p1 => [setVar(b, p1, RESULT, '結果', getVar(b, p1, CUR, '目前號碼'))],
                p2 => [setVar(b, p2, RESULT, '結果', join(b, p2, getVar(b, p2, RESULT, '結果'), join(b, p2, textShadow(' '), getVar(b, p2, CUR, '目前號碼'))))]);
            const incCur = setVar(b, parent, CUR, '目前號碼', add(b, parent, getVar(b, parent, CUR, '目前號碼'), numShadow(2)));
            return [appendIfElse, incCur];
        });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setN, setResult0, setCur1, loopId, sayId]);
    writeTask(M05, 'count-002', b);
})();

(function buildCount003() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const RESULT = b.addVariable('v_result', '結果');
    const CUR = b.addVariable('v_cur', '目前秒數');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setCur = setVar(b, flag, CUR, '目前秒數', getVar(b, flag, S, 'S'));

    const loopId = repeatUntil(b, flag,
        id => lt(b, id, getVar(b, id, CUR, '目前秒數'), numShadow(0)),
        parent => {
            const appendIfElse = ifElse(b, parent,
                id => equals(b, id, getVar(b, id, RESULT, '結果'), textShadow('')),
                p1 => [setVar(b, p1, RESULT, '結果', getVar(b, p1, CUR, '目前秒數'))],
                p2 => [setVar(b, p2, RESULT, '結果', join(b, p2, getVar(b, p2, RESULT, '結果'), join(b, p2, textShadow(' '), getVar(b, p2, CUR, '目前秒數'))))]);
            const decCur = setVar(b, parent, CUR, '目前秒數', sub(b, parent, getVar(b, parent, CUR, '目前秒數'), numShadow(1)));
            return [appendIfElse, decCur];
        });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setS, setResult0, setCur, loopId, sayId]);
    writeTask(M05, 'count-003', b);
})();

(function buildCount004() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setResult10 = setVar(b, flag, RESULT, '結果', numShadow(10));
    const setI2 = setVar(b, flag, I, 'i', numShadow(2));

    const repeatId = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)),
        parent => {
            const append = setVar(b, parent, RESULT, '結果', join(b, parent, getVar(b, parent, RESULT, '結果'), join(b, parent, textShadow(' '), mul(b, parent, getVar(b, parent, I, 'i'), numShadow(10)))));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [append, incI];
        });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setN, setResult10, setI2, repeatId, sayId]);
    writeTask(M05, 'count-004', b);
})();

(function buildJSA01D02() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const SUM = b.addVariable('v_sum', '總和');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const addSum = setVar(b, parent, SUM, '總和', add(b, parent, getVar(b, parent, SUM, '總和'), getVar(b, parent, NUM, '數字')));
            return [ask2, setNum, addSum];
        });

    // 平均要用整數除法（無條件捨去），不是四捨五入
    const sayIdSum = say(b, flag, getVar(b, flag, SUM, '總和'));
    const sayIdAvg = say(b, flag, floor_(b, flag, div(b, flag, getVar(b, flag, SUM, '總和'), getVar(b, flag, N, 'N'))));
    chain(b, [flag, ask1, setN, setSum0, repeatId, sayIdSum, sayIdAvg]);
    writeTask(M05, 'JSA01-D02', b);
})();

(function buildJSA01D03() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const MAX = b.addVariable('v_max', '最大值');
    const MIN = b.addVariable('v_min', '最小值');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setMax0 = setVar(b, flag, MAX, '最大值', numShadow(-999999999));
    const setMin0 = setVar(b, flag, MIN, '最小值', numShadow(999999999));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const ifMax = if_(b, parent, id => gt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MAX, '最大值')),
                p2 => [setVar(b, p2, MAX, '最大值', getVar(b, p2, NUM, '數字'))]);
            const ifMin = if_(b, parent, id => lt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MIN, '最小值')),
                p2 => [setVar(b, p2, MIN, '最小值', getVar(b, p2, NUM, '數字'))]);
            return [ask2, setNum, ifMax, ifMin];
        });

    const sayIdMax = say(b, flag, getVar(b, flag, MAX, '最大值'));
    const sayIdMin = say(b, flag, getVar(b, flag, MIN, '最小值'));
    chain(b, [flag, ask1, setN, setMax0, setMin0, repeatId, sayIdMax, sayIdMin]);
    writeTask(M05, 'JSA01-D03', b);
})();

(function buildCount005() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const SUM = b.addVariable('v_sum', '總和');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const addSum = setVar(b, parent, SUM, '總和', add(b, parent, getVar(b, parent, SUM, '總和'), getVar(b, parent, I, 'i')));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [addSum, incI];
        });

    const sayId = say(b, flag, getVar(b, flag, SUM, '總和'));
    chain(b, [flag, ask1, setN, setSum0, setI1, repeatId, sayId]);
    writeTask(M05, 'count-005', b);
})();

(function buildCount006() {
    const b = createBuilder();
    const M = b.addVariable('v_m', 'M');
    const N = b.addVariable('v_n', 'N');
    const O = b.addVariable('v_o', 'O');
    const RESULT = b.addVariable('v_result', '結果');
    const CUR = b.addVariable('v_cur', '目前座標');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入起點M'));
    const setM = setVar(b, flag, M, 'M', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入終點N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const ask3 = askAndWait(b, flag, textShadow('請輸入跨度O'));
    const setO = setVar(b, flag, O, 'O', answer(b, flag));
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setCur = setVar(b, flag, CUR, '目前座標', getVar(b, flag, M, 'M'));

    const loopId = repeatUntil(b, flag,
        id => gt(b, id, getVar(b, id, CUR, '目前座標'), getVar(b, id, N, 'N')),
        parent => {
            const appendIfElse = ifElse(b, parent,
                id => equals(b, id, getVar(b, id, RESULT, '結果'), textShadow('')),
                p1 => [setVar(b, p1, RESULT, '結果', getVar(b, p1, CUR, '目前座標'))],
                p2 => [setVar(b, p2, RESULT, '結果', join(b, p2, getVar(b, p2, RESULT, '結果'), join(b, p2, textShadow(' '), getVar(b, p2, CUR, '目前座標'))))]);
            const incCur = setVar(b, parent, CUR, '目前座標', add(b, parent, getVar(b, parent, CUR, '目前座標'), getVar(b, parent, O, 'O')));
            return [appendIfElse, incCur];
        });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setM, ask2, setN, ask3, setO, setResult0, setCur, loopId, sayId]);
    writeTask(M05, 'count-006', b);
})();

(function buildCount007() {
    const b = createBuilder();
    const M = b.addVariable('v_m', 'M');
    const N = b.addVariable('v_n', 'N');
    const RESULT = b.addVariable('v_result', '結果');
    const CUR = b.addVariable('v_cur', '目前地磚');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入地磚總數M'));
    const setM = setVar(b, flag, M, 'M', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入倍數N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setCur = setVar(b, flag, CUR, '目前地磚', getVar(b, flag, N, 'N'));

    const loopId = repeatUntil(b, flag,
        id => gt(b, id, getVar(b, id, CUR, '目前地磚'), getVar(b, id, M, 'M')),
        parent => {
            const appendIfElse = ifElse(b, parent,
                id => equals(b, id, getVar(b, id, RESULT, '結果'), textShadow('')),
                p1 => [setVar(b, p1, RESULT, '結果', getVar(b, p1, CUR, '目前地磚'))],
                p2 => [setVar(b, p2, RESULT, '結果', join(b, p2, getVar(b, p2, RESULT, '結果'), join(b, p2, textShadow(' '), getVar(b, p2, CUR, '目前地磚'))))]);
            const incCur = setVar(b, parent, CUR, '目前地磚', add(b, parent, getVar(b, parent, CUR, '目前地磚'), getVar(b, parent, N, 'N')));
            return [appendIfElse, incCur];
        });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setM, ask2, setN, setResult0, setCur, loopId, sayId]);
    writeTask(M05, 'count-007', b);
})();

// ============ M0-06-MinMaxExtra ============
const M06 = 'M0-06-MinMaxExtra';

(function buildEXT01001() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const MAX = b.addVariable('v_max', '最大值');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setMax0 = setVar(b, flag, MAX, '最大值', numShadow(-999999999));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const ifMax = if_(b, parent, id => gt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MAX, '最大值')),
                p2 => [setVar(b, p2, MAX, '最大值', getVar(b, p2, NUM, '數字'))]);
            return [ask2, setNum, ifMax];
        });

    const sayId = say(b, flag, getVar(b, flag, MAX, '最大值'));
    chain(b, [flag, ask1, setN, setMax0, repeatId, sayId]);
    writeTask(M06, 'EXT01-001', b);
})();

(function buildEXT01002() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const MIN = b.addVariable('v_min', '最小值');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setMin0 = setVar(b, flag, MIN, '最小值', numShadow(999999999));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const ifMin = if_(b, parent, id => lt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MIN, '最小值')),
                p2 => [setVar(b, p2, MIN, '最小值', getVar(b, p2, NUM, '數字'))]);
            return [ask2, setNum, ifMin];
        });

    const sayId = say(b, flag, getVar(b, flag, MIN, '最小值'));
    chain(b, [flag, ask1, setN, setMin0, repeatId, sayId]);
    writeTask(M06, 'EXT01-002', b);
})();

(function buildEXT01003() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const MAX = b.addVariable('v_max', '最大值');
    const MIN = b.addVariable('v_min', '最小值');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setMax0 = setVar(b, flag, MAX, '最大值', numShadow(-999999999));
    const setMin0 = setVar(b, flag, MIN, '最小值', numShadow(999999999));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const ifMax = if_(b, parent, id => gt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MAX, '最大值')),
                p2 => [setVar(b, p2, MAX, '最大值', getVar(b, p2, NUM, '數字'))]);
            const ifMin = if_(b, parent, id => lt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MIN, '最小值')),
                p2 => [setVar(b, p2, MIN, '最小值', getVar(b, p2, NUM, '數字'))]);
            return [ask2, setNum, ifMax, ifMin];
        });

    const line = join(b, flag,
        join(b, flag, getVar(b, flag, MAX, '最大值'), textShadow(' ')),
        join(b, flag, join(b, flag, getVar(b, flag, MIN, '最小值'), textShadow(' ')), sub(b, flag, getVar(b, flag, MAX, '最大值'), getVar(b, flag, MIN, '最小值'))));
    const sayId = say(b, flag, line);
    chain(b, [flag, ask1, setN, setMax0, setMin0, repeatId, sayId]);
    writeTask(M06, 'EXT01-003', b);
})();

(function buildEXT01004() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const MAX = b.addVariable('v_max', '最大值');
    const POS = b.addVariable('v_pos', '位置');
    const I = b.addVariable('v_i', 'i');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setMax0 = setVar(b, flag, MAX, '最大值', numShadow(-999999999));
    const setPos0 = setVar(b, flag, POS, '位置', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const ifMax = if_(b, parent, id => gt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MAX, '最大值')),
                p2 => [
                    setVar(b, p2, MAX, '最大值', getVar(b, p2, NUM, '數字')),
                    setVar(b, p2, POS, '位置', getVar(b, p2, I, 'i'))
                ]);
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [ask2, setNum, ifMax, incI];
        });

    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, MAX, '最大值'), textShadow(' ')), getVar(b, flag, POS, '位置')));
    chain(b, [flag, ask1, setN, setMax0, setPos0, setI1, repeatId, sayId]);
    writeTask(M06, 'EXT01-004', b);
})();

(function buildEXT01005() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const MIN = b.addVariable('v_min', '最小值');
    const POS = b.addVariable('v_pos', '位置');
    const I = b.addVariable('v_i', 'i');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setMin0 = setVar(b, flag, MIN, '最小值', numShadow(999999999));
    const setPos0 = setVar(b, flag, POS, '位置', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const ifMin = if_(b, parent, id => lt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MIN, '最小值')),
                p2 => [
                    setVar(b, p2, MIN, '最小值', getVar(b, p2, NUM, '數字')),
                    setVar(b, p2, POS, '位置', getVar(b, p2, I, 'i'))
                ]);
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [ask2, setNum, ifMin, incI];
        });

    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, MIN, '最小值'), textShadow(' ')), getVar(b, flag, POS, '位置')));
    chain(b, [flag, ask1, setN, setMin0, setPos0, setI1, repeatId, sayId]);
    writeTask(M06, 'EXT01-005', b);
})();

(function buildEXT01006() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const MAX = b.addVariable('v_max', '最大值');
    const SECOND = b.addVariable('v_second', '第二高');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setMax0 = setVar(b, flag, MAX, '最大值', numShadow(-999999999));
    const setSecond0 = setVar(b, flag, SECOND, '第二高', numShadow(-999999999));

    const repeatId = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const outerIfElse = ifElse(b, parent,
                id => gt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MAX, '最大值')),
                p1 => [
                    setVar(b, p1, SECOND, '第二高', getVar(b, p1, MAX, '最大值')),
                    setVar(b, p1, MAX, '最大值', getVar(b, p1, NUM, '數字'))
                ],
                p2 => {
                    const innerIf = if_(b, p2,
                        id => and_(b, id,
                            gt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, SECOND, '第二高')),
                            lt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MAX, '最大值'))),
                        p3 => [setVar(b, p3, SECOND, '第二高', getVar(b, p3, NUM, '數字'))]);
                    return [innerIf];
                });
            return [ask2, setNum, outerIfElse];
        });

    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, MAX, '最大值'), textShadow(' ')), getVar(b, flag, SECOND, '第二高')));
    chain(b, [flag, ask1, setN, setMax0, setSecond0, repeatId, sayId]);
    writeTask(M06, 'EXT01-006', b);
})();

// EXT01-007＝相鄰最大差（2026-08-10：使用者確認原本這題跟EXT01-008標題對調了，
// 已在正本資料夾修正標題，這裡實作的邏輯本來就是對的，不用改）。
(function buildEXT01007() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const PREV = b.addVariable('v_prev', '前一個數字');
    const CUR = b.addVariable('v_cur', '目前數字');
    const MAXDIFF = b.addVariable('v_maxdiff', '最大差值');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入第一個數字'));
    const setPrev = setVar(b, flag, PREV, '前一個數字', answer(b, flag));
    const setMaxDiff0 = setVar(b, flag, MAXDIFF, '最大差值', numShadow(0));

    const repeatId = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)),
        parent => {
            const ask3 = askAndWait(b, parent, textShadow(''));
            const setCur = setVar(b, parent, CUR, '目前數字', answer(b, parent));
            const diffExpr = abs_(b, parent, sub(b, parent, getVar(b, parent, CUR, '目前數字'), getVar(b, parent, PREV, '前一個數字')));
            const ifBigger = if_(b, parent, id => gt(b, id, diffExpr, getVar(b, id, MAXDIFF, '最大差值')),
                p2 => [setVar(b, p2, MAXDIFF, '最大差值', abs_(b, p2, sub(b, p2, getVar(b, p2, CUR, '目前數字'), getVar(b, p2, PREV, '前一個數字'))))]);
            const advancePrev = setVar(b, parent, PREV, '前一個數字', getVar(b, parent, CUR, '目前數字'));
            return [ask3, setCur, ifBigger, advancePrev];
        });

    const sayId = say(b, flag, getVar(b, flag, MAXDIFF, '最大差值'));
    chain(b, [flag, ask1, setN, ask2, setPrev, setMaxDiff0, repeatId, sayId]);
    writeTask(M06, 'EXT01-007', b);
})();

// EXT01-008＝區間最大值（同上，標題已修正，邏輯不用改）。
(function buildEXT01008() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const L = b.addVariable('v_l', 'L');
    const R = b.addVariable('v_r', 'R');
    const I = b.addVariable('v_i', 'i');
    const MAX = b.addVariable('v_max', '最大值');
    const flag = whenFlagClicked(b);
    const clearList = deleteAllOfList(b, flag, NUMS, '數字清單');
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));

    const readNums = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const addId = addToList(b, parent, NUMS, '數字清單', getVar(b, parent, NUM, '數字'));
            return [ask2, setNum, addId];
        });

    const ask3 = askAndWait(b, flag, textShadow('請輸入L'));
    const setL = setVar(b, flag, L, 'L', answer(b, flag));
    const ask4 = askAndWait(b, flag, textShadow('請輸入R'));
    const setR = setVar(b, flag, R, 'R', answer(b, flag));
    const setMax0 = setVar(b, flag, MAX, '最大值', numShadow(-999999999));
    const setI = setVar(b, flag, I, 'i', getVar(b, flag, L, 'L'));

    const loopId = repeatUntil(b, flag,
        id => gt(b, id, getVar(b, id, I, 'i'), getVar(b, id, R, 'R')),
        parent => {
            const valAtI = itemOfList(b, parent, NUMS, '數字清單', getVar(b, parent, I, 'i'));
            const ifMax = if_(b, parent, id => gt(b, id, valAtI, getVar(b, id, MAX, '最大值')),
                p2 => [setVar(b, p2, MAX, '最大值', itemOfList(b, p2, NUMS, '數字清單', getVar(b, p2, I, 'i')))]);
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [ifMax, incI];
        });

    const sayId = say(b, flag, getVar(b, flag, MAX, '最大值'));
    chain(b, [flag, clearList, ask1, setN, readNums, ask3, setL, ask4, setR, setMax0, setI, loopId, sayId]);
    writeTask(M06, 'EXT01-008', b);
})();

console.log('\nM0-03/04/05/06 手寫示範解答全部完成。');
