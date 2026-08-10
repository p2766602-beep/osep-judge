// 手寫JSA00裡6題用到迴圈/字串處理的示範解答，因為xml-to-scratch.js轉換器不支援
// Blockly的controls_for/controls_repeat_ext/logic_boolean/logic_operation/text_length。
// 直接用官方Scratch平台原生積木手寫，輸出成JSON放進hand-authored-answers/JSA00/。
//
// 用法：node scripts/judge-dev-tools/build-jsa00-hand-authored.js

const fs = require('fs');
const path = require('path');
const {
    createBuilder, numShadow, textShadow, chain,
    whenFlagClicked, askAndWait, answer, say, setVar, getVar,
    add, sub, mul, div, round, gt, lt, not_, join, repeat, repeatUntil, if_, ifElse,
    mod_, equals, length_, letterOf, addToList, itemOfList, deleteAllOfList
} = require('./hand-author-builder.js');

const OUT_DIR = path.join(__dirname, 'hand-authored-answers', 'JSA00');
fs.mkdirSync(OUT_DIR, {recursive: true});

function writeTask(taskId, b) {
    const outPath = path.join(OUT_DIR, `${taskId}.json`);
    fs.writeFileSync(outPath, JSON.stringify({variables: b.variables, blocks: b.blocks, lists: b.lists}, null, 2), 'utf8');
    console.log('寫入', outPath);
}

// ---- A-08-0 查找最大值：第一行N，第二行N個數字，輸出最大值 ----
(function buildA0800() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const MAX = b.addVariable('v_max', '最大值');
    const NUM = b.addVariable('v_num', '數字');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setMax0 = setVar(b, flag, MAX, '最大值', numShadow(-999999999));

    const repeatId = repeat(
        b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const askNum = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const ifBigger = if_(
                b, parent,
                id => gt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MAX, '最大值')),
                p2 => [setVar(b, p2, MAX, '最大值', getVar(b, p2, NUM, '數字'))]
            );
            return [askNum, setNum, ifBigger];
        }
    );

    const sayId = say(b, flag, getVar(b, flag, MAX, '最大值'));
    chain(b, [flag, ask1, setN, setMax0, repeatId, sayId]);
    writeTask('A-08-0', b);
})();

// ---- A-09-0 判斷質數：輸入N，判斷是否質數，輸出Yes/No ----
(function buildA0900() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const IS_PRIME = b.addVariable('v_isprime', '是質數');
    const I = b.addVariable('v_i', 'i');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));

    const mainIfElse = ifElse(
        b, flag,
        id => lt(b, id, getVar(b, id, N, 'N'), numShadow(2)),
        p1 => [setVar(b, p1, IS_PRIME, '是質數', numShadow(0))],
        p2 => {
            const setPrime1 = setVar(b, p2, IS_PRIME, '是質數', numShadow(1));
            const setI2 = setVar(b, p2, I, 'i', numShadow(2));
            const repeatId = repeat(
                b, p2,
                id => sub(b, id, getVar(b, id, N, 'N'), numShadow(2)),
                parent => {
                    const ifDivisible = if_(
                        b, parent,
                        id => equals(b, id, mod_(b, id, getVar(b, id, N, 'N'), getVar(b, id, I, 'i')), numShadow(0)),
                        p3 => [setVar(b, p3, IS_PRIME, '是質數', numShadow(0))]
                    );
                    const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
                    return [ifDivisible, incI];
                }
            );
            return [setPrime1, setI2, repeatId];
        }
    );

    const sayIfElse = ifElse(
        b, flag,
        id => equals(b, id, getVar(b, id, IS_PRIME, '是質數'), numShadow(1)),
        p1 => [say(b, p1, textShadow('Yes'))],
        p2 => [say(b, p2, textShadow('No'))]
    );

    chain(b, [flag, ask1, setN, mainIfElse, sayIfElse]);
    writeTask('A-09-0', b);
})();

// ---- A-10-0 多科成績計算：跟A-05-0同一套算法，只是題目情境換了 ----
(function buildA1000() {
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

    const repeatId = repeat(
        b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const askScore = askAndWait(b, parent, textShadow(''));
            const setScore = setVar(b, parent, SCORE, '成績', answer(b, parent));
            const addSum = setVar(b, parent, SUM, '總分', add(b, parent, getVar(b, parent, SUM, '總分'), getVar(b, parent, SCORE, '成績')));
            return [askScore, setScore, addSum];
        }
    );

    const setAvg = setVar(b, flag, AVG, '平均', round(b, flag, div(b, flag, getVar(b, flag, SUM, '總分'), getVar(b, flag, N, 'N'))));
    const setLine1 = setVar(b, flag, LINE, '輸出行', getVar(b, flag, SUM, '總分'));
    const setLine2 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), textShadow(' ')));
    const setLine3 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), getVar(b, flag, AVG, '平均')));
    const setLine4 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), textShadow(' ')));

    const passIfElse = ifElse(
        b, flag,
        id => not_(b, id, lt(b, id, getVar(b, id, AVG, '平均'), numShadow(60))),
        p1 => [setVar(b, p1, LINE, '輸出行', join(b, p1, getVar(b, p1, LINE, '輸出行'), textShadow('及格')))],
        p2 => [setVar(b, p2, LINE, '輸出行', join(b, p2, getVar(b, p2, LINE, '輸出行'), textShadow('不及格')))]
    );

    const sayId = say(b, flag, getVar(b, flag, LINE, '輸出行'));
    chain(b, [flag, ask1, setN, setSum0, repeatId, setAvg, setLine1, setLine2, setLine3, setLine4, passIfElse, sayId]);
    writeTask('A-10-0', b);
})();

// ---- A-11-0 計算字元出現次數：第一行字串S，第二行字元C，輸出C在S中出現次數 ----
(function buildA1100() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const C = b.addVariable('v_c', 'C');
    const COUNT = b.addVariable('v_count', '次數');
    const I = b.addVariable('v_i', 'i');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入字串'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入字元'));
    const setC = setVar(b, flag, C, 'C', answer(b, flag));
    const setCount0 = setVar(b, flag, COUNT, '次數', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const repeatId = repeat(
        b, flag,
        id => length_(b, id, getVar(b, id, S, 'S')),
        parent => {
            const ifMatch = if_(
                b, parent,
                id => equals(b, id, letterOf(b, id, getVar(b, id, I, 'i'), getVar(b, id, S, 'S')), getVar(b, id, C, 'C')),
                p2 => [setVar(b, p2, COUNT, '次數', add(b, p2, getVar(b, p2, COUNT, '次數'), numShadow(1)))]
            );
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [ifMatch, incI];
        }
    );

    const sayId = say(b, flag, getVar(b, flag, COUNT, '次數'));
    chain(b, [flag, ask1, setS, ask2, setC, setCount0, setI1, repeatId, sayId]);
    writeTask('A-11-0', b);
})();

// ---- A-12-0 簡易密碼轉換：每個字母往後移2位（z->b），輸入一個單字 ----
(function buildA1200() {
    const b = createBuilder();
    const ALPHA = b.addVariable('v_alpha', '字母表');
    const WORD = b.addVariable('v_word', '單字');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');
    const CH = b.addVariable('v_ch', '字元');
    const POS = b.addVariable('v_pos', '位置');
    const FOUND = b.addVariable('v_found', '找到位置');
    const NEWPOS = b.addVariable('v_newpos', '新位置');

    const flag = whenFlagClicked(b);
    const setAlpha = setVar(b, flag, ALPHA, '字母表', textShadow('abcdefghijklmnopqrstuvwxyz'));
    const ask1 = askAndWait(b, flag, textShadow('請輸入單字'));
    const setWord = setVar(b, flag, WORD, '單字', answer(b, flag));
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const outerRepeat = repeat(
        b, flag,
        id => length_(b, id, getVar(b, id, WORD, '單字')),
        parent => {
            const setCh = setVar(b, parent, CH, '字元', letterOf(b, parent, getVar(b, parent, I, 'i'), getVar(b, parent, WORD, '單字')));
            const setPos1 = setVar(b, parent, POS, '位置', numShadow(1));
            const setFound0 = setVar(b, parent, FOUND, '找到位置', numShadow(1));

            const innerRepeat = repeat(
                b, parent,
                id => numShadow(26),
                p2 => {
                    const ifMatch = if_(
                        b, p2,
                        id => equals(b, id, letterOf(b, id, getVar(b, id, POS, '位置'), getVar(b, id, ALPHA, '字母表')), getVar(b, id, CH, '字元')),
                        p3 => [setVar(b, p3, FOUND, '找到位置', getVar(b, p3, POS, '位置'))]
                    );
                    const incPos = setVar(b, p2, POS, '位置', add(b, p2, getVar(b, p2, POS, '位置'), numShadow(1)));
                    return [ifMatch, incPos];
                }
            );

            // newPos = ((found - 1 + 2) mod 26) + 1
            const setNewPos = setVar(
                b, parent, NEWPOS, '新位置',
                add(b, parent,
                    mod_(b, parent,
                        add(b, parent, sub(b, parent, getVar(b, parent, FOUND, '找到位置'), numShadow(1)), numShadow(2)),
                        numShadow(26)),
                    numShadow(1))
            );
            const appendResult = setVar(b, parent, RESULT, '結果', join(b, parent, getVar(b, parent, RESULT, '結果'), letterOf(b, parent, getVar(b, parent, NEWPOS, '新位置'), getVar(b, parent, ALPHA, '字母表'))));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));

            return [setCh, setPos1, setFound0, innerRepeat, setNewPos, appendResult, incI];
        }
    );

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, setAlpha, ask1, setWord, setResult0, setI1, outerRepeat, sayId]);
    writeTask('A-12-0', b);
})();

// ---- A-13-0 二數的最大公因數：歐幾里得演算法（輾轉相除法） ----
(function buildA1300() {
    const b = createBuilder();
    const A = b.addVariable('v_a', 'A');
    const Bv = b.addVariable('v_b', 'B');
    const TEMP = b.addVariable('v_temp', '暫存');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入第一個數'));
    const setA = setVar(b, flag, A, 'A', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入第二個數'));
    const setB = setVar(b, flag, Bv, 'B', answer(b, flag));

    const loopId = repeatUntil(
        b, flag,
        id => equals(b, id, getVar(b, id, Bv, 'B'), numShadow(0)),
        parent => {
            const setTemp = setVar(b, parent, TEMP, '暫存', mod_(b, parent, getVar(b, parent, A, 'A'), getVar(b, parent, Bv, 'B')));
            const setA2 = setVar(b, parent, A, 'A', getVar(b, parent, Bv, 'B'));
            const setB2 = setVar(b, parent, Bv, 'B', getVar(b, parent, TEMP, '暫存'));
            return [setTemp, setA2, setB2];
        }
    );

    const sayId = say(b, flag, getVar(b, flag, A, 'A'));
    chain(b, [flag, ask1, setA, ask2, setB, loopId, sayId]);
    writeTask('A-13-0', b);
})();

// ---- A-08-1 查找最大值、最小值：讀N個數字，同時找最大最小，輸出"最大 最小"(空白分隔單行) ----
(function buildA0801B() {
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

    const repeatId = repeat(
        b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const ifMax = if_(
                b, parent,
                id => gt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MAX, '最大值')),
                p2 => [setVar(b, p2, MAX, '最大值', getVar(b, p2, NUM, '數字'))]
            );
            const ifMin = if_(
                b, parent,
                id => lt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MIN, '最小值')),
                p2 => [setVar(b, p2, MIN, '最小值', getVar(b, p2, NUM, '數字'))]
            );
            return [ask2, setNum, ifMax, ifMin];
        }
    );

    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, MAX, '最大值'), textShadow(' ')), getVar(b, flag, MIN, '最小值')));
    chain(b, [flag, ask1, setN, setMax0, setMin0, repeatId, sayId]);
    writeTask('A-08-1', b);
})();

// ---- A-09-1 找因數：輸入N，輸出N所有因數（空白分隔） ----
(function buildA0901B() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const repeatId = repeat(
        b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ifDivisible = if_(
                b, parent,
                id => equals(b, id, mod_(b, id, getVar(b, id, N, 'N'), getVar(b, id, I, 'i')), numShadow(0)),
                p2 => {
                    const appendIfElse = ifElse(
                        b, p2,
                        id => equals(b, id, getVar(b, id, RESULT, '結果'), textShadow('')),
                        p3 => [setVar(b, p3, RESULT, '結果', getVar(b, p3, I, 'i'))],
                        p4 => [setVar(b, p4, RESULT, '結果', join(b, p4, getVar(b, p4, RESULT, '結果'), join(b, p4, textShadow(' '), getVar(b, p4, I, 'i'))))]
                    );
                    return [appendIfElse];
                }
            );
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [ifDivisible, incI];
        }
    );

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setN, setResult0, setI1, repeatId, sayId]);
    writeTask('A-09-1', b);
})();

// ---- A-10-1 加權成績計算：讀N、N個成績(存清單)、N個權重，計算加權總分/平均/等第 ----
(function buildA1001() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const SCORE = b.addVariable('v_score', '成績');
    const SCORES = b.addList('v_scores', '成績清單');
    const I = b.addVariable('v_i', 'i');
    const WEIGHT = b.addVariable('v_weight', '權重');
    const WSUM = b.addVariable('v_wsum', '加權總分');
    const TOTAL_W = b.addVariable('v_totalw', '總權重');
    const AVG = b.addVariable('v_avg', '加權平均');
    const LINE = b.addVariable('v_line', '輸出行');

    const flag = whenFlagClicked(b);
    const clearScores = deleteAllOfList(b, flag, SCORES, '成績清單');
    const ask1 = askAndWait(b, flag, textShadow('請輸入科目數N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));

    // 第一輪：讀N個成績，存進清單（先存起來，因為要等第二輪讀到對應權重才能算加權分數）
    const readScores = repeat(
        b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setScore = setVar(b, parent, SCORE, '成績', answer(b, parent));
            const addId = addToList(b, parent, SCORES, '成績清單', getVar(b, parent, SCORE, '成績'));
            return [ask2, setScore, addId];
        }
    );

    // 第二輪：依序讀N個權重，搭配清單裡第i個成績計算加權總分與總權重
    const setWsum0 = setVar(b, flag, WSUM, '加權總分', numShadow(0));
    const setTotalW0 = setVar(b, flag, TOTAL_W, '總權重', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const readWeights = repeat(
        b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask3 = askAndWait(b, parent, textShadow(''));
            const setWeight = setVar(b, parent, WEIGHT, '權重', answer(b, parent));
            const scoreAtI = itemOfList(b, parent, SCORES, '成績清單', getVar(b, parent, I, 'i'));
            const addWsum = setVar(b, parent, WSUM, '加權總分', add(b, parent, getVar(b, parent, WSUM, '加權總分'), mul(b, parent, scoreAtI, getVar(b, parent, WEIGHT, '權重'))));
            const addTotalW = setVar(b, parent, TOTAL_W, '總權重', add(b, parent, getVar(b, parent, TOTAL_W, '總權重'), getVar(b, parent, WEIGHT, '權重')));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [ask3, setWeight, addWsum, addTotalW, incI];
        }
    );

    const setAvg = setVar(b, flag, AVG, '加權平均', round(b, flag, div(b, flag, getVar(b, flag, WSUM, '加權總分'), getVar(b, flag, TOTAL_W, '總權重'))));

    // 注意：testCases.expectedOutput是空白分隔單行（例如"240 80 A"），不是換行分隔。
    const setLine1 = setVar(b, flag, LINE, '輸出行', getVar(b, flag, WSUM, '加權總分'));
    const setLine2 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), textShadow(' ')));
    const setLine3 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), getVar(b, flag, AVG, '加權平均')));
    const setLine4 = setVar(b, flag, LINE, '輸出行', join(b, flag, getVar(b, flag, LINE, '輸出行'), textShadow(' ')));

    const gradeIfElse = ifElse(
        b, flag,
        id => not_(b, id, lt(b, id, getVar(b, id, AVG, '加權平均'), numShadow(80))),
        p1 => [setVar(b, p1, LINE, '輸出行', join(b, p1, getVar(b, p1, LINE, '輸出行'), textShadow('A')))],
        p2 => {
            const chain70 = ifElse(
                b, p2,
                id => not_(b, id, lt(b, id, getVar(b, id, AVG, '加權平均'), numShadow(70))),
                p3 => [setVar(b, p3, LINE, '輸出行', join(b, p3, getVar(b, p3, LINE, '輸出行'), textShadow('B')))],
                p4 => {
                    const chain60 = ifElse(
                        b, p4,
                        id => not_(b, id, lt(b, id, getVar(b, id, AVG, '加權平均'), numShadow(60))),
                        p5 => [setVar(b, p5, LINE, '輸出行', join(b, p5, getVar(b, p5, LINE, '輸出行'), textShadow('C')))],
                        p6 => [setVar(b, p6, LINE, '輸出行', join(b, p6, getVar(b, p6, LINE, '輸出行'), textShadow('D')))]
                    );
                    return [chain60];
                }
            );
            return [chain70];
        }
    );

    const sayId = say(b, flag, getVar(b, flag, LINE, '輸出行'));
    chain(b, [flag, clearScores, ask1, setN, readScores, setWsum0, setTotalW0, setI1, readWeights, setAvg, setLine1, setLine2, setLine3, setLine4, gradeIfElse, sayId]);
    writeTask('A-10-1', b);
})();

// ---- A-11-1 計算字元出現最多的次數：小寫字母字串，找出出現次數最多的字母次數 ----
(function buildA1101() {
    const b = createBuilder();
    const ALPHA = b.addVariable('v_alpha', '字母表');
    const S = b.addVariable('v_s', 'S');
    const I = b.addVariable('v_i', 'i');
    const J = b.addVariable('v_j', 'j');
    const CH = b.addVariable('v_ch', '字母');
    const COUNT = b.addVariable('v_count', '出現次數');
    const MAXCOUNT = b.addVariable('v_maxcount', '最大次數');

    const flag = whenFlagClicked(b);
    const setAlpha = setVar(b, flag, ALPHA, '字母表', textShadow('abcdefghijklmnopqrstuvwxyz'));
    const ask1 = askAndWait(b, flag, textShadow('請輸入字串'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const setMax0 = setVar(b, flag, MAXCOUNT, '最大次數', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    // 外層跑26個字母，內層跑一次S的每個字元比對次數，取最大值
    const outerRepeat = repeat(
        b, flag,
        () => numShadow(26),
        parent => {
            const setCh = setVar(b, parent, CH, '字母', letterOf(b, parent, getVar(b, parent, I, 'i'), getVar(b, parent, ALPHA, '字母表')));
            const setCount0 = setVar(b, parent, COUNT, '出現次數', numShadow(0));
            const setJ1 = setVar(b, parent, J, 'j', numShadow(1));

            const innerRepeat = repeat(
                b, parent,
                id => length_(b, id, getVar(b, id, S, 'S')),
                p2 => {
                    const ifMatch = if_(
                        b, p2,
                        id => equals(b, id, letterOf(b, id, getVar(b, id, J, 'j'), getVar(b, id, S, 'S')), getVar(b, id, CH, '字母')),
                        p3 => [setVar(b, p3, COUNT, '出現次數', add(b, p3, getVar(b, p3, COUNT, '出現次數'), numShadow(1)))]
                    );
                    const incJ = setVar(b, p2, J, 'j', add(b, p2, getVar(b, p2, J, 'j'), numShadow(1)));
                    return [ifMatch, incJ];
                }
            );

            const ifBigger = if_(
                b, parent,
                id => gt(b, id, getVar(b, id, COUNT, '出現次數'), getVar(b, id, MAXCOUNT, '最大次數')),
                p2 => [setVar(b, p2, MAXCOUNT, '最大次數', getVar(b, p2, COUNT, '出現次數'))]
            );
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));

            return [setCh, setCount0, setJ1, innerRepeat, ifBigger, incI];
        }
    );

    const sayId = say(b, flag, getVar(b, flag, MAXCOUNT, '最大次數'));
    chain(b, [flag, setAlpha, ask1, setS, setMax0, setI1, outerRepeat, sayId]);
    writeTask('A-11-1', b);
})();

// ---- A-12-1 動態密碼轉換：36字元密碼環，往前移動N個位置（N由輸入決定） ----
(function buildA1201() {
    const b = createBuilder();
    const ALPHA = b.addVariable('v_alpha', '字母表');
    const N = b.addVariable('v_n', 'N');
    const WORD = b.addVariable('v_word', '單字');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');
    const CH = b.addVariable('v_ch', '字元');
    const POS = b.addVariable('v_pos', '位置');
    const FOUND = b.addVariable('v_found', '找到位置');
    const NEWPOS = b.addVariable('v_newpos', '新位置');

    const flag = whenFlagClicked(b);
    const setAlpha = setVar(b, flag, ALPHA, '字母表', textShadow('abcdefghijklmnopqrstuvwxyz0123456789'));
    const ask1 = askAndWait(b, flag, textShadow('請輸入位移值N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入單字'));
    const setWord = setVar(b, flag, WORD, '單字', answer(b, flag));
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const outerRepeat = repeat(
        b, flag,
        id => length_(b, id, getVar(b, id, WORD, '單字')),
        parent => {
            const setCh = setVar(b, parent, CH, '字元', letterOf(b, parent, getVar(b, parent, I, 'i'), getVar(b, parent, WORD, '單字')));
            const setPos1 = setVar(b, parent, POS, '位置', numShadow(1));
            const setFound0 = setVar(b, parent, FOUND, '找到位置', numShadow(1));

            const innerRepeat = repeat(
                b, parent,
                () => numShadow(36),
                p2 => {
                    const ifMatch = if_(
                        b, p2,
                        id => equals(b, id, letterOf(b, id, getVar(b, id, POS, '位置'), getVar(b, id, ALPHA, '字母表')), getVar(b, id, CH, '字元')),
                        p3 => [setVar(b, p3, FOUND, '找到位置', getVar(b, p3, POS, '位置'))]
                    );
                    const incPos = setVar(b, p2, POS, '位置', add(b, p2, getVar(b, p2, POS, '位置'), numShadow(1)));
                    return [ifMatch, incPos];
                }
            );

            // newPos = mod(found - 1 - N, 36) + 1（Scratch的mod對負數會回傳非負餘數，往前位移
            // 超過字母表開頭時會自動從尾端接續，不用額外處理wraparound）
            const setNewPos = setVar(
                b, parent, NEWPOS, '新位置',
                add(b, parent,
                    mod_(b, parent,
                        sub(b, parent, sub(b, parent, getVar(b, parent, FOUND, '找到位置'), numShadow(1)), getVar(b, parent, N, 'N')),
                        numShadow(36)),
                    numShadow(1))
            );
            const appendResult = setVar(b, parent, RESULT, '結果', join(b, parent, getVar(b, parent, RESULT, '結果'), letterOf(b, parent, getVar(b, parent, NEWPOS, '新位置'), getVar(b, parent, ALPHA, '字母表'))));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));

            return [setCh, setPos1, setFound0, innerRepeat, setNewPos, appendResult, incI];
        }
    );

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, setAlpha, ask1, setN, ask2, setWord, setResult0, setI1, outerRepeat, sayId]);
    writeTask('A-12-1', b);
})();

// ---- A-13-1 最大公因數：N個整數的最大公因數（逐一累積歐幾里得演算法） ----
(function buildA1301() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const RUNNING_GCD = b.addVariable('v_running_gcd', '目前最大公因數');
    const NUM = b.addVariable('v_num', '數字');
    const A = b.addVariable('v_a', 'A');
    const Bv = b.addVariable('v_b', 'B');
    const TEMP = b.addVariable('v_temp', '暫存');

    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入個數N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setGcd0 = setVar(b, flag, RUNNING_GCD, '目前最大公因數', numShadow(0));

    const repeatId = repeat(
        b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            // gcd(0, x) = x，所以每次都用同一套輾轉相除法即可，不用特判第一筆
            const setA = setVar(b, parent, A, 'A', getVar(b, parent, RUNNING_GCD, '目前最大公因數'));
            const setB = setVar(b, parent, Bv, 'B', getVar(b, parent, NUM, '數字'));
            const innerLoop = repeatUntil(
                b, parent,
                id => equals(b, id, getVar(b, id, Bv, 'B'), numShadow(0)),
                p2 => {
                    const setTemp = setVar(b, p2, TEMP, '暫存', mod_(b, p2, getVar(b, p2, A, 'A'), getVar(b, p2, Bv, 'B')));
                    const setA2 = setVar(b, p2, A, 'A', getVar(b, p2, Bv, 'B'));
                    const setB2 = setVar(b, p2, Bv, 'B', getVar(b, p2, TEMP, '暫存'));
                    return [setTemp, setA2, setB2];
                }
            );
            const updateGcd = setVar(b, parent, RUNNING_GCD, '目前最大公因數', getVar(b, parent, A, 'A'));
            return [ask2, setNum, setA, setB, innerLoop, updateGcd];
        }
    );

    const sayId = say(b, flag, getVar(b, flag, RUNNING_GCD, '目前最大公因數'));
    chain(b, [flag, ask1, setN, setGcd0, repeatId, sayId]);
    writeTask('A-13-1', b);
})();
