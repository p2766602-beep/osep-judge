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
    mod_, equals, length_, letterOf
} = require('./hand-author-builder.js');

const OUT_DIR = path.join(__dirname, 'hand-authored-answers', 'JSA00');
fs.mkdirSync(OUT_DIR, {recursive: true});

function writeTask(taskId, {variables, blocks}) {
    const outPath = path.join(OUT_DIR, `${taskId}.json`);
    fs.writeFileSync(outPath, JSON.stringify({variables, blocks}, null, 2), 'utf8');
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
