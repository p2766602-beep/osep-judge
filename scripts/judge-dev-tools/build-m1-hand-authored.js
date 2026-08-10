// 手寫M1系列裡轉換器轉不動的示範解答。跟M0/JSA00/JSB00算法完全相同的題目直接複製既有
// JSON重複使用，不重新手寫。
//
// 用法：node scripts/judge-dev-tools/build-m1-hand-authored.js

const fs = require('fs');
const path = require('path');
const {
    createBuilder, numShadow, textShadow, chain,
    whenFlagClicked, askAndWait, answer, say, setVar, getVar,
    add, sub, mul, div, round, floor_, abs_, gt, lt, not_, and_, or_, join,
    repeat, repeatUntil, if_, ifElse, mod_, equals,
    addToList, itemOfList, deleteAllOfList, length_, letterOf, replaceItemOfList, deleteItemOfList, lengthOfList
} = require('./hand-author-builder.js');

function writeTask(courseFolder, taskId, b) {
    const outDir = path.join(__dirname, 'hand-authored-answers', courseFolder);
    fs.mkdirSync(outDir, {recursive: true});
    const outPath = path.join(outDir, `${taskId}.json`);
    fs.writeFileSync(outPath, JSON.stringify({variables: b.variables, blocks: b.blocks, lists: b.lists}, null, 2), 'utf8');
    console.log('寫入', outPath);
}

function copyExisting(fromCourseFolder, fromTaskId, toCourseFolder, toTaskId) {
    const src = path.join(__dirname, 'hand-authored-answers', fromCourseFolder, `${fromTaskId}.json`);
    const destDir = path.join(__dirname, 'hand-authored-answers', toCourseFolder);
    fs.mkdirSync(destDir, {recursive: true});
    const dest = path.join(destDir, `${toTaskId}.json`);
    fs.copyFileSync(src, dest);
    console.log('複製', src, '->', dest);
}

// ============ M1-01-ListSearch ============
const M101 = 'M1-01-ListSearch';

copyExisting('M0-04-LoopsAndSum', 'JSL01-P03', M101, 'count-010'); // 1*2*...*N
copyExisting('M0-04-LoopsAndSum', 'JSL01-P01', M101, 'count-014'); // 讀N個數字加總
copyExisting('M0-04-LoopsAndSum', 'A-08-0', M101, 'count-015'); // 讀N個數字找最大值

(function buildCount008() {
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
            const append = setVar(b, parent, RESULT, '結果', join(b, parent, getVar(b, parent, RESULT, '結果'), join(b, parent, textShadow(' '), mul(b, parent, getVar(b, parent, I, 'i'), getVar(b, parent, I, 'i')))));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [append, incI];
        });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setN, setResult1, setI2, repeatId, sayId]);
    writeTask(M101, 'count-008', b);
})();

(function buildCount013() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const RESULT = b.addVariable('v_result', '結果');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const ask2First = askAndWait(b, flag, textShadow(''));
    const setResultFirst = setVar(b, flag, RESULT, '結果', answer(b, flag));

    const repeatId = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)),
        parent => {
            const ask2 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const append = setVar(b, parent, RESULT, '結果', join(b, parent, getVar(b, parent, RESULT, '結果'), join(b, parent, textShadow(' '), getVar(b, parent, NUM, '數字'))));
            return [ask2, setNum, append];
        });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setN, ask2First, setResultFirst, repeatId, sayId]);
    writeTask(M101, 'count-013', b);
})();

(function buildCount009() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const SUM = b.addVariable('v_sum', '總和');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const loopId = repeatUntil(b, flag,
        id => gt(b, id, getVar(b, id, I, 'i'), getVar(b, id, N, 'N')),
        parent => {
            const ifEven = if_(b, parent,
                id => equals(b, id, mod_(b, id, getVar(b, id, I, 'i'), numShadow(2)), numShadow(0)),
                p2 => [setVar(b, p2, SUM, '總和', add(b, p2, getVar(b, p2, SUM, '總和'), getVar(b, p2, I, 'i')))]);
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [ifEven, incI];
        });

    const sayId = say(b, flag, getVar(b, flag, SUM, '總和'));
    chain(b, [flag, ask1, setN, setSum0, setI1, loopId, sayId]);
    writeTask(M101, 'count-009', b);
})();

(function buildCount011() {
    const b = createBuilder();
    const M = b.addVariable('v_m', 'M');
    const N = b.addVariable('v_n', 'N');
    const SUM = b.addVariable('v_sum', '總和');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入M'));
    const setM = setVar(b, flag, M, 'M', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));
    const setI = setVar(b, flag, I, 'i', getVar(b, flag, M, 'M'));

    const loopId = repeatUntil(b, flag,
        id => gt(b, id, getVar(b, id, I, 'i'), getVar(b, id, N, 'N')),
        parent => {
            const addSum = setVar(b, parent, SUM, '總和', add(b, parent, getVar(b, parent, SUM, '總和'), getVar(b, parent, I, 'i')));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [addSum, incI];
        });

    const sayId = say(b, flag, getVar(b, flag, SUM, '總和'));
    chain(b, [flag, ask1, setM, ask2, setN, setSum0, setI, loopId, sayId]);
    writeTask(M101, 'count-011', b);
})();

(function buildCount012() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setResult1 = setVar(b, flag, RESULT, '結果', numShadow(1));
    const setI2 = setVar(b, flag, I, 'i', numShadow(2));

    // 上山：2..N
    const upRepeat = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)),
        parent => {
            const append = setVar(b, parent, RESULT, '結果', join(b, parent, getVar(b, parent, RESULT, '結果'), join(b, parent, textShadow(' '), getVar(b, parent, I, 'i'))));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [append, incI];
        });

    // 下山：N-1..1
    const setI2Down = setVar(b, flag, I, 'i', sub(b, flag, getVar(b, flag, N, 'N'), numShadow(1)));
    const downRepeat = repeat(b, flag,
        id => getVar(b, id, N, 'N'),
        parent => {
            const ifPositive = if_(b, parent, id => gt(b, id, getVar(b, id, I, 'i'), numShadow(0)),
                p2 => {
                    const append = setVar(b, p2, RESULT, '結果', join(b, p2, getVar(b, p2, RESULT, '結果'), join(b, p2, textShadow(' '), getVar(b, p2, I, 'i'))));
                    const decI = setVar(b, p2, I, 'i', sub(b, p2, getVar(b, p2, I, 'i'), numShadow(1)));
                    return [append, decI];
                });
            return [ifPositive];
        });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setN, setResult1, setI2, upRepeat, setI2Down, downRepeat, sayId]);
    writeTask(M101, 'count-012', b);
})();

console.log('\nM1-01 手寫示範解答完成。');

// ============ M1-02-ListAnalysis ============
const M102 = 'M1-02-ListAnalysis';

(function buildCount017() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const RESULT = b.addVariable('v_result', '結果');
    const flag = whenFlagClicked(b);
    const clearList = deleteAllOfList(b, flag, NUMS, '數字清單');
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));

    const readNums = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const addId = addToList(b, parent, NUMS, '數字清單', getVar(b, parent, NUM, '數字'));
        return [ask2, setNum, addId];
    });

    const setResultFirst = setVar(b, flag, RESULT, '結果', itemOfList(b, flag, NUMS, '數字清單', getVar(b, flag, N, 'N')));
    const setI = setVar(b, flag, I, 'i', sub(b, flag, getVar(b, flag, N, 'N'), numShadow(1)));

    const loopId = repeatUntil(b, flag,
        id => lt(b, id, getVar(b, id, I, 'i'), numShadow(1)),
        parent => {
            const append = setVar(b, parent, RESULT, '結果', join(b, parent, getVar(b, parent, RESULT, '結果'), join(b, parent, textShadow(' '), itemOfList(b, parent, NUMS, '數字清單', getVar(b, parent, I, 'i')))));
            const decI = setVar(b, parent, I, 'i', sub(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [append, decI];
        });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, clearList, ask1, setN, readNums, setResultFirst, setI, loopId, sayId]);
    writeTask(M102, 'count-017', b);
})();

(function buildCount018() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const RESULT = b.addVariable('v_result', '結果');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const repeatId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const dayText = join(b, parent, join(b, parent, join(b, parent, textShadow('Day-'), getVar(b, parent, I, 'i')), textShadow('-')), getVar(b, parent, NUM, '數字'));
        const appendIfElse = ifElse(b, parent,
            id => equals(b, id, getVar(b, id, RESULT, '結果'), textShadow('')),
            p1 => [setVar(b, p1, RESULT, '結果', dayText)],
            p2 => [setVar(b, p2, RESULT, '結果', join(b, p2, getVar(b, p2, RESULT, '結果'), join(b, p2, textShadow(' '), dayText)))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ask2, setNum, appendIfElse, incI];
    });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setN, setResult0, setI1, repeatId, sayId]);
    writeTask(M102, 'count-018', b);
})();

(function buildCount016() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUM = b.addVariable('v_num', '數字');
    const RESULT = b.addVariable('v_result', '結果');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));

    const repeatId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const ifLight = if_(b, parent, id => lt(b, id, getVar(b, id, NUM, '數字'), numShadow(10)), p2 => {
            const appendIfElse = ifElse(b, p2,
                id => equals(b, id, getVar(b, id, RESULT, '結果'), textShadow('')),
                p3 => [setVar(b, p3, RESULT, '結果', getVar(b, p3, NUM, '數字'))],
                p4 => [setVar(b, p4, RESULT, '結果', join(b, p4, getVar(b, p4, RESULT, '結果'), join(b, p4, textShadow(' '), getVar(b, p4, NUM, '數字'))))]);
            return [appendIfElse];
        });
        return [ask2, setNum, ifLight];
    });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setN, setResult0, repeatId, sayId]);
    writeTask(M102, 'count-016', b);
})();

(function buildTYTN05() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const VOTE = b.addVariable('v_vote', '票');
    const C1 = b.addVariable('v_c1', 'C1');
    const C2 = b.addVariable('v_c2', 'C2');
    const C3 = b.addVariable('v_c3', 'C3');
    const MAXVAL = b.addVariable('v_maxval', '最高票數');
    const TIECOUNT = b.addVariable('v_tiecount', '並列數');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setC1 = setVar(b, flag, C1, 'C1', numShadow(0));
    const setC2 = setVar(b, flag, C2, 'C2', numShadow(0));
    const setC3 = setVar(b, flag, C3, 'C3', numShadow(0));

    const repeatId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setVote = setVar(b, parent, VOTE, '票', answer(b, parent));
        const if1 = if_(b, parent, id => equals(b, id, getVar(b, id, VOTE, '票'), numShadow(1)),
            p2 => [setVar(b, p2, C1, 'C1', add(b, p2, getVar(b, p2, C1, 'C1'), numShadow(1)))]);
        const if2 = if_(b, parent, id => equals(b, id, getVar(b, id, VOTE, '票'), numShadow(2)),
            p2 => [setVar(b, p2, C2, 'C2', add(b, p2, getVar(b, p2, C2, 'C2'), numShadow(1)))]);
        const if3 = if_(b, parent, id => equals(b, id, getVar(b, id, VOTE, '票'), numShadow(3)),
            p2 => [setVar(b, p2, C3, 'C3', add(b, p2, getVar(b, p2, C3, 'C3'), numShadow(1)))]);
        return [ask2, setVote, if1, if2, if3];
    });

    const setMax1 = setVar(b, flag, MAXVAL, '最高票數', getVar(b, flag, C1, 'C1'));
    const ifMax2 = if_(b, flag, id => gt(b, id, getVar(b, id, C2, 'C2'), getVar(b, id, MAXVAL, '最高票數')),
        p2 => [setVar(b, p2, MAXVAL, '最高票數', getVar(b, p2, C2, 'C2'))]);
    const ifMax3 = if_(b, flag, id => gt(b, id, getVar(b, id, C3, 'C3'), getVar(b, id, MAXVAL, '最高票數')),
        p2 => [setVar(b, p2, MAXVAL, '最高票數', getVar(b, p2, C3, 'C3'))]);

    const setTie0 = setVar(b, flag, TIECOUNT, '並列數', numShadow(0));
    const ifTie1 = if_(b, flag, id => equals(b, id, getVar(b, id, C1, 'C1'), getVar(b, id, MAXVAL, '最高票數')),
        p2 => [setVar(b, p2, TIECOUNT, '並列數', add(b, p2, getVar(b, p2, TIECOUNT, '並列數'), numShadow(1)))]);
    const ifTie2 = if_(b, flag, id => equals(b, id, getVar(b, id, C2, 'C2'), getVar(b, id, MAXVAL, '最高票數')),
        p2 => [setVar(b, p2, TIECOUNT, '並列數', add(b, p2, getVar(b, p2, TIECOUNT, '並列數'), numShadow(1)))]);
    const ifTie3 = if_(b, flag, id => equals(b, id, getVar(b, id, C3, 'C3'), getVar(b, id, MAXVAL, '最高票數')),
        p2 => [setVar(b, p2, TIECOUNT, '並列數', add(b, p2, getVar(b, p2, TIECOUNT, '並列數'), numShadow(1)))]);

    const finalIfElse = ifElse(b, flag,
        id => gt(b, id, getVar(b, id, TIECOUNT, '並列數'), numShadow(1)),
        p1 => [say(b, p1, textShadow('請重新投票'))],
        p2 => {
            const chain1 = ifElse(b, p2,
                id => equals(b, id, getVar(b, id, C1, 'C1'), getVar(b, id, MAXVAL, '最高票數')),
                p3 => [say(b, p3, numShadow(1))],
                p4 => {
                    const chain2 = ifElse(b, p4,
                        id => equals(b, id, getVar(b, id, C2, 'C2'), getVar(b, id, MAXVAL, '最高票數')),
                        p5 => [say(b, p5, numShadow(2))],
                        p6 => [say(b, p6, numShadow(3))]);
                    return [chain2];
                });
            return [chain1];
        });

    chain(b, [flag, ask1, setN, setC1, setC2, setC3, repeatId, setMax1, ifMax2, ifMax3, setTie0, ifTie1, ifTie2, ifTie3, finalIfElse]);
    writeTask(M102, 'TYTN-05', b);
})();

(function buildW305() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const A = b.addVariable('v_a', 'A');
    const Bv = b.addVariable('v_b', 'B');
    const C = b.addVariable('v_c', 'C');
    const D = b.addVariable('v_d', 'D');
    const COUNT = b.addVariable('v_count', '交換次數');
    const TEMP = b.addVariable('v_temp', '暫存');

    const flag = whenFlagClicked(b);
    const ask0 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const ask1 = askAndWait(b, flag, textShadow('請輸入第1尊身高'));
    const setA = setVar(b, flag, A, 'A', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入第2尊身高'));
    const setB = setVar(b, flag, Bv, 'B', answer(b, flag));
    const ask3 = askAndWait(b, flag, textShadow('請輸入第3尊身高'));
    const setC = setVar(b, flag, C, 'C', answer(b, flag));
    const ask4 = askAndWait(b, flag, textShadow('請輸入第4尊身高'));
    const setD = setVar(b, flag, D, 'D', answer(b, flag));
    const setCount0 = setVar(b, flag, COUNT, '交換次數', numShadow(0));

    // 產生一次「比較並交換(x,y)」的statement序列，x/y是變數id
    function swapIfNeeded(varX, nameX, varY, nameY) {
        return if_(b, flag,
            id => gt(b, id, getVar(b, id, varX, nameX), getVar(b, id, varY, nameY)),
            p2 => [
                setVar(b, p2, TEMP, '暫存', getVar(b, p2, varX, nameX)),
                setVar(b, p2, varX, nameX, getVar(b, p2, varY, nameY)),
                setVar(b, p2, varY, nameY, getVar(b, p2, TEMP, '暫存')),
                setVar(b, p2, COUNT, '交換次數', add(b, p2, getVar(b, p2, COUNT, '交換次數'), numShadow(1)))
            ]);
    }

    const steps = [];
    for (let round = 0; round < 3; round++) {
        steps.push(swapIfNeeded(A, 'A', Bv, 'B'));
        steps.push(swapIfNeeded(Bv, 'B', C, 'C'));
        steps.push(swapIfNeeded(C, 'C', D, 'D'));
    }

    const line = join(b, flag,
        join(b, flag, getVar(b, flag, A, 'A'), textShadow(' ')),
        join(b, flag,
            join(b, flag, getVar(b, flag, Bv, 'B'), textShadow(' ')),
            join(b, flag,
                join(b, flag, getVar(b, flag, C, 'C'), textShadow(' ')),
                join(b, flag, getVar(b, flag, D, 'D'), join(b, flag, textShadow(' '), getVar(b, flag, COUNT, '交換次數'))))));
    const sayId = say(b, flag, line);

    chain(b, [flag, ask0, setN, ask1, setA, ask2, setB, ask3, setC, ask4, setD, setCount0, ...steps, sayId]);
    writeTask(M102, 'W3-05', b);
})();

(function buildW501() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const K = b.addVariable('v_k', 'K');
    const VAL = b.addVariable('v_val', '數值');
    const STREAK = b.addVariable('v_streak', '連續次數');
    const TOTAL = b.addVariable('v_total', '總計');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入K'));
    const setK = setVar(b, flag, K, 'K', answer(b, flag));
    const setStreak0 = setVar(b, flag, STREAK, '連續次數', numShadow(0));
    const setTotal0 = setVar(b, flag, TOTAL, '總計', numShadow(0));

    const repeatId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask3 = askAndWait(b, parent, textShadow(''));
        const setVal = setVar(b, parent, VAL, '數值', answer(b, parent));
        // 連續違規的加分是「第1次+1、第2次以後都+2」，不是每次都+1持續累加——
        // 用實際testCases逐案例反推出來的規則，跟原本description片段的敘述對不上，
        // 已用全部10筆testCases交叉驗證過這個公式。
        const ifElseStreak = ifElse(b, parent,
            id => lt(b, id, getVar(b, id, VAL, '數值'), getVar(b, id, K, 'K')),
            p1 => {
                const ifFirstElse = ifElse(b, p1,
                    id => equals(b, id, getVar(b, id, STREAK, '連續次數'), numShadow(0)),
                    p3 => [setVar(b, p3, STREAK, '連續次數', numShadow(1))],
                    p4 => [setVar(b, p4, STREAK, '連續次數', numShadow(2))]);
                return [ifFirstElse];
            },
            p2 => [setVar(b, p2, STREAK, '連續次數', numShadow(0))]);
        const addTotal = setVar(b, parent, TOTAL, '總計', add(b, parent, getVar(b, parent, TOTAL, '總計'), getVar(b, parent, STREAK, '連續次數')));
        return [ask3, setVal, ifElseStreak, addTotal];
    });

    const sayId = say(b, flag, getVar(b, flag, TOTAL, '總計'));
    chain(b, [flag, ask1, setN, ask2, setK, setStreak0, setTotal0, repeatId, sayId]);
    writeTask(M102, 'W5-01', b);
})();

(function buildWP03() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const M = b.addVariable('v_m', 'M');
    const X = b.addVariable('v_x', 'X');
    const WAYS = b.addVariable('v_ways', '方式數');
    const TOTAL = b.addVariable('v_total', '總方式數');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入M'));
    const setM = setVar(b, flag, M, 'M', answer(b, flag));
    const setTotal0 = setVar(b, flag, TOTAL, '總方式數', numShadow(0));

    const repeatId = repeat(b, flag, id => getVar(b, id, M, 'M'), parent => {
        const ask3 = askAndWait(b, parent, textShadow(''));
        const setX = setVar(b, parent, X, 'X', answer(b, parent));
        const setWays = setVar(b, parent, WAYS, '方式數', sub(b, parent, add(b, parent, getVar(b, parent, X, 'X'), numShadow(1)), getVar(b, parent, N, 'N')));
        const ifPositive = if_(b, parent, id => gt(b, id, getVar(b, id, WAYS, '方式數'), numShadow(0)),
            p2 => [setVar(b, p2, TOTAL, '總方式數', add(b, p2, getVar(b, p2, TOTAL, '總方式數'), getVar(b, p2, WAYS, '方式數')))]);
        return [ask3, setX, setWays, ifPositive];
    });

    const sayId = say(b, flag, getVar(b, flag, TOTAL, '總方式數'));
    chain(b, [flag, ask1, setN, ask2, setM, setTotal0, repeatId, sayId]);
    writeTask(M102, 'WP-03', b);
})();

(function buildCycjunior004() {
    const b = createBuilder();
    const K = b.addVariable('v_k', 'K');
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const WINDOWSUM = b.addVariable('v_windowsum', '窗口總和');
    const MAXSUM = b.addVariable('v_maxsum', '最大總和');
    const flag = whenFlagClicked(b);
    const clearList = deleteAllOfList(b, flag, NUMS, '數字清單');
    const ask1 = askAndWait(b, flag, textShadow('請輸入K'));
    const setK = setVar(b, flag, K, 'K', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));

    const readNums = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask3 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const addId = addToList(b, parent, NUMS, '數字清單', getVar(b, parent, NUM, '數字'));
        return [ask3, setNum, addId];
    });

    // 先算出第一個窗口(1..K)的總和
    const setWindowSum0 = setVar(b, flag, WINDOWSUM, '窗口總和', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const initWindow = repeat(b, flag, id => getVar(b, id, K, 'K'), parent => {
        const addSum = setVar(b, parent, WINDOWSUM, '窗口總和', add(b, parent, getVar(b, parent, WINDOWSUM, '窗口總和'), itemOfList(b, parent, NUMS, '數字清單', getVar(b, parent, I, 'i'))));
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [addSum, incI];
    });
    const setMaxSum = setVar(b, flag, MAXSUM, '最大總和', getVar(b, flag, WINDOWSUM, '窗口總和'));

    // 滑動窗口：I目前指向下一個要加入的位置(K+1起)，每次加入新的一個、移除離開窗口的舊的一個
    const slideRepeat = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), getVar(b, id, K, 'K')),
        parent => {
            const newItem = itemOfList(b, parent, NUMS, '數字清單', getVar(b, parent, I, 'i'));
            const oldItem = itemOfList(b, parent, NUMS, '數字清單', sub(b, parent, getVar(b, parent, I, 'i'), getVar(b, parent, K, 'K')));
            const updateSum = setVar(b, parent, WINDOWSUM, '窗口總和', add(b, parent, sub(b, parent, getVar(b, parent, WINDOWSUM, '窗口總和'), oldItem), newItem));
            const ifBigger = if_(b, parent, id => gt(b, id, getVar(b, id, WINDOWSUM, '窗口總和'), getVar(b, id, MAXSUM, '最大總和')),
                p2 => [setVar(b, p2, MAXSUM, '最大總和', getVar(b, p2, WINDOWSUM, '窗口總和'))]);
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [updateSum, ifBigger, incI];
        });

    const sayId = say(b, flag, getVar(b, flag, MAXSUM, '最大總和'));
    chain(b, [flag, clearList, ask1, setK, ask2, setN, readNums, setWindowSum0, setI1, initWindow, setMaxSum, slideRepeat, sayId]);
    writeTask(M102, 'cycjunior-004', b);
})();

console.log('\nM1-02 手寫示範解答完成。');

// ============ M1-03-ListStats ============
const M103 = 'M1-03-ListStats';

copyExisting('M0-04-LoopsAndSum', 'JSL01-P01', M103, 'STA01-001');
copyExisting('M0-06-MinMaxExtra', 'EXT01-002', M103, 'CNT01-021');

(function buildSumAvg(taskId) {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const SUM = b.addVariable('v_sum', '總和');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));

    const repeatId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const addSum = setVar(b, parent, SUM, '總和', add(b, parent, getVar(b, parent, SUM, '總和'), getVar(b, parent, NUM, '數字')));
        return [ask2, setNum, addSum];
    });

    const line = join(b, flag, join(b, flag, getVar(b, flag, SUM, '總和'), textShadow(' ')), floor_(b, flag, div(b, flag, getVar(b, flag, SUM, '總和'), getVar(b, flag, N, 'N'))));
    const sayId = say(b, flag, line);
    chain(b, [flag, ask1, setN, setSum0, repeatId, sayId]);
    writeTask(M103, taskId, b);
})('STA01-002');

(function buildSumAvg2(taskId) {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const SUM = b.addVariable('v_sum', '總和');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));

    const repeatId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const addSum = setVar(b, parent, SUM, '總和', add(b, parent, getVar(b, parent, SUM, '總和'), getVar(b, parent, NUM, '數字')));
        return [ask2, setNum, addSum];
    });

    const line = join(b, flag, join(b, flag, getVar(b, flag, SUM, '總和'), textShadow(' ')), floor_(b, flag, div(b, flag, getVar(b, flag, SUM, '總和'), getVar(b, flag, N, 'N'))));
    const sayId = say(b, flag, line);
    chain(b, [flag, ask1, setN, setSum0, repeatId, sayId]);
    writeTask(M103, taskId, b);
})('CNT01-019');

(function buildSTA01003() {
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

    const repeatId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const ifMax = if_(b, parent, id => gt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MAX, '最大值')),
            p2 => [setVar(b, p2, MAX, '最大值', getVar(b, p2, NUM, '數字'))]);
        const ifMin = if_(b, parent, id => lt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MIN, '最小值')),
            p2 => [setVar(b, p2, MIN, '最小值', getVar(b, p2, NUM, '數字'))]);
        return [ask2, setNum, ifMax, ifMin];
    });

    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, MAX, '最大值'), textShadow(' ')), getVar(b, flag, MIN, '最小值')));
    chain(b, [flag, ask1, setN, setMax0, setMin0, repeatId, sayId]);
    writeTask(M103, 'STA01-003', b);
})();

(function buildSTA01004() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const COUNT = b.addVariable('v_count', '通過人數');
    const NUM = b.addVariable('v_num', '成績');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setCount0 = setVar(b, flag, COUNT, '通過人數', numShadow(0));

    const repeatId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '成績', answer(b, parent));
        const ifPass = if_(b, parent, id => not_(b, id, lt(b, id, getVar(b, id, NUM, '成績'), numShadow(60))),
            p2 => [setVar(b, p2, COUNT, '通過人數', add(b, p2, getVar(b, p2, COUNT, '通過人數'), numShadow(1)))]);
        return [ask2, setNum, ifPass];
    });

    const rate = floor_(b, flag, div(b, flag, mul(b, flag, getVar(b, flag, COUNT, '通過人數'), numShadow(100)), getVar(b, flag, N, 'N')));
    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, COUNT, '通過人數'), textShadow(' ')), rate));
    chain(b, [flag, ask1, setN, setCount0, repeatId, sayId]);
    writeTask(M103, 'STA01-004', b);
})();

(function buildCNT01020() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const K = b.addVariable('v_k', 'K');
    const COUNT = b.addVariable('v_count', '數量');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入K'));
    const setK = setVar(b, flag, K, 'K', answer(b, flag));
    const setCount0 = setVar(b, flag, COUNT, '數量', numShadow(0));

    const repeatId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask3 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const ifBig = if_(b, parent, id => gt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, K, 'K')),
            p2 => [setVar(b, p2, COUNT, '數量', add(b, p2, getVar(b, p2, COUNT, '數量'), numShadow(1)))]);
        return [ask3, setNum, ifBig];
    });

    const sayId = say(b, flag, getVar(b, flag, COUNT, '數量'));
    chain(b, [flag, ask1, setN, ask2, setK, setCount0, repeatId, sayId]);
    writeTask(M103, 'CNT01-020', b);
})();

(function buildSTA01005() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const SUM = b.addVariable('v_sum', '總和');
    const AVG = b.addVariable('v_avg', '平均');
    const I = b.addVariable('v_i', 'i');
    const COUNT = b.addVariable('v_count', '數量');
    const flag = whenFlagClicked(b);
    const clearList = deleteAllOfList(b, flag, NUMS, '數字清單');
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));

    const readNums = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const addId = addToList(b, parent, NUMS, '數字清單', getVar(b, parent, NUM, '數字'));
        const addSum = setVar(b, parent, SUM, '總和', add(b, parent, getVar(b, parent, SUM, '總和'), getVar(b, parent, NUM, '數字')));
        return [ask2, setNum, addId, addSum];
    });

    const setAvg = setVar(b, flag, AVG, '平均', floor_(b, flag, div(b, flag, getVar(b, flag, SUM, '總和'), getVar(b, flag, N, 'N'))));
    const setCount0 = setVar(b, flag, COUNT, '數量', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const checkRepeat = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ifBig = if_(b, parent, id => gt(b, id, itemOfList(b, id, NUMS, '數字清單', getVar(b, id, I, 'i')), getVar(b, id, AVG, '平均')),
            p2 => [setVar(b, p2, COUNT, '數量', add(b, p2, getVar(b, p2, COUNT, '數量'), numShadow(1)))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifBig, incI];
    });

    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, AVG, '平均'), textShadow(' ')), getVar(b, flag, COUNT, '數量')));
    chain(b, [flag, clearList, ask1, setN, setSum0, readNums, setAvg, setCount0, setI1, checkRepeat, sayId]);
    writeTask(M103, 'STA01-005', b);
})();

(function buildSTA01006() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const POS = b.addVariable('v_pos', '正數');
    const NEG = b.addVariable('v_neg', '負數');
    const ZERO = b.addVariable('v_zero', '零');
    const NUM = b.addVariable('v_num', '數字');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setPos0 = setVar(b, flag, POS, '正數', numShadow(0));
    const setNeg0 = setVar(b, flag, NEG, '負數', numShadow(0));
    const setZero0 = setVar(b, flag, ZERO, '零', numShadow(0));

    const repeatId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const ifElseChain = ifElse(b, parent,
            id => gt(b, id, getVar(b, id, NUM, '數字'), numShadow(0)),
            p1 => [setVar(b, p1, POS, '正數', add(b, p1, getVar(b, p1, POS, '正數'), numShadow(1)))],
            p2 => {
                const innerIfElse = ifElse(b, p2,
                    id => lt(b, id, getVar(b, id, NUM, '數字'), numShadow(0)),
                    p3 => [setVar(b, p3, NEG, '負數', add(b, p3, getVar(b, p3, NEG, '負數'), numShadow(1)))],
                    p4 => [setVar(b, p4, ZERO, '零', add(b, p4, getVar(b, p4, ZERO, '零'), numShadow(1)))]);
                return [innerIfElse];
            });
        return [ask2, setNum, ifElseChain];
    });

    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, POS, '正數'), textShadow(' ')), join(b, flag, getVar(b, flag, NEG, '負數'), join(b, flag, textShadow(' '), getVar(b, flag, ZERO, '零')))));
    chain(b, [flag, ask1, setN, setPos0, setNeg0, setZero0, repeatId, sayId]);
    writeTask(M103, 'STA01-006', b);
})();

(function buildSTA01007() {
    const b = createBuilder();
    const SUM = b.addVariable('v_sum', '總和');
    const NUM = b.addVariable('v_num', '數字');
    const COUNT = b.addVariable('v_count', '達標天數');
    const flag = whenFlagClicked(b);
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));
    const setCount0 = setVar(b, flag, COUNT, '達標天數', numShadow(0));

    const steps = [setSum0, setCount0];
    for (let i = 0; i < 7; i++) {
        const askX = askAndWait(b, flag, textShadow(''));
        const setNum = setVar(b, flag, NUM, '數字', answer(b, flag));
        const addSum = setVar(b, flag, SUM, '總和', add(b, flag, getVar(b, flag, SUM, '總和'), getVar(b, flag, NUM, '數字')));
        const ifBig = if_(b, flag, id => not_(b, id, lt(b, id, getVar(b, id, NUM, '數字'), numShadow(10000))),
            p2 => [setVar(b, p2, COUNT, '達標天數', add(b, p2, getVar(b, p2, COUNT, '達標天數'), numShadow(1)))]);
        steps.push(askX, setNum, addSum, ifBig);
    }

    const avg = floor_(b, flag, div(b, flag, getVar(b, flag, SUM, '總和'), numShadow(7)));
    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, SUM, '總和'), textShadow(' ')), join(b, flag, avg, join(b, flag, textShadow(' '), getVar(b, flag, COUNT, '達標天數')))));
    steps.push(sayId);
    chain(b, [flag, ...steps]);
    writeTask(M103, 'STA01-007', b);
})();

(function buildSTA01008() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const PREV = b.addVariable('v_prev', '前一天');
    const CUR = b.addVariable('v_cur', '今天');
    const UP = b.addVariable('v_up', '增加');
    const DOWN = b.addVariable('v_down', '減少');
    const SAME = b.addVariable('v_same', '相同');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入第一天數值'));
    const setPrev = setVar(b, flag, PREV, '前一天', answer(b, flag));
    const setUp0 = setVar(b, flag, UP, '增加', numShadow(0));
    const setDown0 = setVar(b, flag, DOWN, '減少', numShadow(0));
    const setSame0 = setVar(b, flag, SAME, '相同', numShadow(0));

    const repeatId = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)),
        parent => {
            const ask3 = askAndWait(b, parent, textShadow(''));
            const setCur = setVar(b, parent, CUR, '今天', answer(b, parent));
            const ifElseChain = ifElse(b, parent,
                id => gt(b, id, getVar(b, id, CUR, '今天'), getVar(b, id, PREV, '前一天')),
                p1 => [setVar(b, p1, UP, '增加', add(b, p1, getVar(b, p1, UP, '增加'), numShadow(1)))],
                p2 => {
                    const innerIfElse = ifElse(b, p2,
                        id => lt(b, id, getVar(b, id, CUR, '今天'), getVar(b, id, PREV, '前一天')),
                        p3 => [setVar(b, p3, DOWN, '減少', add(b, p3, getVar(b, p3, DOWN, '減少'), numShadow(1)))],
                        p4 => [setVar(b, p4, SAME, '相同', add(b, p4, getVar(b, p4, SAME, '相同'), numShadow(1)))]);
                    return [innerIfElse];
                });
            const advancePrev = setVar(b, parent, PREV, '前一天', getVar(b, parent, CUR, '今天'));
            return [ask3, setCur, ifElseChain, advancePrev];
        });

    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, UP, '增加'), textShadow(' ')), join(b, flag, getVar(b, flag, DOWN, '減少'), join(b, flag, textShadow(' '), getVar(b, flag, SAME, '相同')))));
    chain(b, [flag, ask1, setN, ask2, setPrev, setUp0, setDown0, setSame0, repeatId, sayId]);
    writeTask(M103, 'STA01-008', b);
})();

(function buildCNT01024() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const RUNSUM = b.addVariable('v_runsum', '累加');
    const RESULT = b.addVariable('v_result', '結果');
    const flag = whenFlagClicked(b);
    const clearList = deleteAllOfList(b, flag, NUMS, '數字清單');
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));

    const readNums = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const addId = addToList(b, parent, NUMS, '數字清單', getVar(b, parent, NUM, '數字'));
        return [ask2, setNum, addId];
    });

    const setRunSum0 = setVar(b, flag, RUNSUM, '累加', numShadow(0));
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setI = setVar(b, flag, I, 'i', getVar(b, flag, N, 'N'));

    const loopId = repeatUntil(b, flag,
        id => lt(b, id, getVar(b, id, I, 'i'), numShadow(1)),
        parent => {
            const addRun = setVar(b, parent, RUNSUM, '累加', add(b, parent, getVar(b, parent, RUNSUM, '累加'), itemOfList(b, parent, NUMS, '數字清單', getVar(b, parent, I, 'i'))));
            const appendIfElse = ifElse(b, parent,
                id => equals(b, id, getVar(b, id, RESULT, '結果'), textShadow('')),
                p1 => [setVar(b, p1, RESULT, '結果', getVar(b, p1, RUNSUM, '累加'))],
                p2 => [setVar(b, p2, RESULT, '結果', join(b, p2, getVar(b, p2, RESULT, '結果'), join(b, p2, textShadow(' '), getVar(b, p2, RUNSUM, '累加'))))]);
            const decI = setVar(b, parent, I, 'i', sub(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [addRun, appendIfElse, decI];
        });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, clearList, ask1, setN, readNums, setRunSum0, setResult0, setI, loopId, sayId]);
    writeTask(M103, 'CNT01-024', b);
})();

console.log('\nM1-03 手寫示範解答完成。');

// ============ M1-04-ListIndex ============
const M104 = 'M1-04-ListIndex';

(function buildIDX01001() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const P = b.addVariable('v_p', 'P');
    const flag = whenFlagClicked(b);
    const clearList = deleteAllOfList(b, flag, NUMS, '數字清單');
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const readNums = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const addId = addToList(b, parent, NUMS, '數字清單', getVar(b, parent, NUM, '數字'));
        return [ask2, setNum, addId];
    });
    const ask3 = askAndWait(b, flag, textShadow('請輸入P'));
    const setP = setVar(b, flag, P, 'P', answer(b, flag));
    const sayId = say(b, flag, itemOfList(b, flag, NUMS, '數字清單', getVar(b, flag, P, 'P')));
    chain(b, [flag, clearList, ask1, setN, readNums, ask3, setP, sayId]);
    writeTask(M104, 'IDX01-001', b);
})();

(function buildIDX01002() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const X = b.addVariable('v_x', 'X');
    const I = b.addVariable('v_i', 'i');
    const FOUND = b.addVariable('v_found', '找到位置');
    const flag = whenFlagClicked(b);
    const clearList = deleteAllOfList(b, flag, NUMS, '數字清單');
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const readNums = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const addId = addToList(b, parent, NUMS, '數字清單', getVar(b, parent, NUM, '數字'));
        return [ask2, setNum, addId];
    });
    const ask3 = askAndWait(b, flag, textShadow('請輸入X'));
    const setX = setVar(b, flag, X, 'X', answer(b, flag));
    const setFound0 = setVar(b, flag, FOUND, '找到位置', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ifMatch = if_(b, parent, id => and_(b, id,
                equals(b, id, itemOfList(b, id, NUMS, '數字清單', getVar(b, id, I, 'i')), getVar(b, id, X, 'X')),
                equals(b, id, getVar(b, id, FOUND, '找到位置'), numShadow(0))),
            p2 => [setVar(b, p2, FOUND, '找到位置', getVar(b, p2, I, 'i'))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifMatch, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, FOUND, '找到位置'));
    chain(b, [flag, clearList, ask1, setN, readNums, ask3, setX, setFound0, setI1, loopId, sayId]);
    writeTask(M104, 'IDX01-002', b);
})();

(function buildIDX01003() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const X = b.addVariable('v_x', 'X');
    const I = b.addVariable('v_i', 'i');
    const FOUND = b.addVariable('v_found', '找到位置');
    const flag = whenFlagClicked(b);
    const clearList = deleteAllOfList(b, flag, NUMS, '數字清單');
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const readNums = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const addId = addToList(b, parent, NUMS, '數字清單', getVar(b, parent, NUM, '數字'));
        return [ask2, setNum, addId];
    });
    const ask3 = askAndWait(b, flag, textShadow('請輸入X'));
    const setX = setVar(b, flag, X, 'X', answer(b, flag));
    const setFound0 = setVar(b, flag, FOUND, '找到位置', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ifMatch = if_(b, parent, id => equals(b, id, itemOfList(b, id, NUMS, '數字清單', getVar(b, id, I, 'i')), getVar(b, id, X, 'X')),
            p2 => [setVar(b, p2, FOUND, '找到位置', getVar(b, p2, I, 'i'))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifMatch, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, FOUND, '找到位置'));
    chain(b, [flag, clearList, ask1, setN, readNums, ask3, setX, setFound0, setI1, loopId, sayId]);
    writeTask(M104, 'IDX01-003', b);
})();

(function buildIDX01004() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const MAX = b.addVariable('v_max', '最大值');
    const POS = b.addVariable('v_pos', '位置');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setMax0 = setVar(b, flag, MAX, '最大值', numShadow(-999999999));
    const setPos0 = setVar(b, flag, POS, '位置', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const ifBig = if_(b, parent, id => gt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MAX, '最大值')),
            p2 => [setVar(b, p2, MAX, '最大值', getVar(b, p2, NUM, '數字')), setVar(b, p2, POS, '位置', getVar(b, p2, I, 'i'))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ask2, setNum, ifBig, incI];
    });
    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, MAX, '最大值'), textShadow(' ')), getVar(b, flag, POS, '位置')));
    chain(b, [flag, ask1, setN, setMax0, setPos0, setI1, loopId, sayId]);
    writeTask(M104, 'IDX01-004', b);
})();

(function buildIDX01005() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const MIN = b.addVariable('v_min', '最小值');
    const POS = b.addVariable('v_pos', '位置');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setMin0 = setVar(b, flag, MIN, '最小值', numShadow(999999999));
    const setPos0 = setVar(b, flag, POS, '位置', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const ifSmallOrEq = if_(b, parent, id => not_(b, id, gt(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, MIN, '最小值'))),
            p2 => [setVar(b, p2, MIN, '最小值', getVar(b, p2, NUM, '數字')), setVar(b, p2, POS, '位置', getVar(b, p2, I, 'i'))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ask2, setNum, ifSmallOrEq, incI];
    });
    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, MIN, '最小值'), textShadow(' ')), getVar(b, flag, POS, '位置')));
    chain(b, [flag, ask1, setN, setMin0, setPos0, setI1, loopId, sayId]);
    writeTask(M104, 'IDX01-005', b);
})();

(function buildIDX01006() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUM = b.addVariable('v_num', '數字');
    const PREV = b.addVariable('v_prev', '前一個');
    const I = b.addVariable('v_i', 'i');
    const FOUND = b.addVariable('v_found', '找到位置');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setFound0 = setVar(b, flag, FOUND, '找到位置', numShadow(0));
    const ask2 = askAndWait(b, flag, textShadow('請輸入第一個數字'));
    const setPrev = setVar(b, flag, PREV, '前一個', answer(b, flag));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const loopId = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)),
        parent => {
            const ask3 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const ifMatch = if_(b, parent, id => and_(b, id,
                    equals(b, id, getVar(b, id, NUM, '數字'), getVar(b, id, PREV, '前一個')),
                    equals(b, id, getVar(b, id, FOUND, '找到位置'), numShadow(0))),
                p2 => [setVar(b, p2, FOUND, '找到位置', getVar(b, p2, I, 'i'))]);
            const advancePrev = setVar(b, parent, PREV, '前一個', getVar(b, parent, NUM, '數字'));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [ask3, setNum, ifMatch, advancePrev, incI];
        });

    const sayId = say(b, flag, getVar(b, flag, FOUND, '找到位置'));
    chain(b, [flag, ask1, setN, setFound0, ask2, setPrev, setI1, loopId, sayId]);
    writeTask(M104, 'IDX01-006', b);
})();

(function buildIDX01007() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const P = b.addVariable('v_p', 'P');
    const LEFT = b.addVariable('v_left', '左鄰居');
    const RIGHT = b.addVariable('v_right', '右鄰居');
    const flag = whenFlagClicked(b);
    const clearList = deleteAllOfList(b, flag, NUMS, '數字清單');
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const readNums = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const addId = addToList(b, parent, NUMS, '數字清單', getVar(b, parent, NUM, '數字'));
        return [ask2, setNum, addId];
    });
    const ask3 = askAndWait(b, flag, textShadow('請輸入P'));
    const setP = setVar(b, flag, P, 'P', answer(b, flag));
    const setLeft0 = setVar(b, flag, LEFT, '左鄰居', numShadow(0));
    const setRight0 = setVar(b, flag, RIGHT, '右鄰居', numShadow(0));
    const ifLeft = if_(b, flag, id => gt(b, id, getVar(b, id, P, 'P'), numShadow(1)),
        p2 => [setVar(b, p2, LEFT, '左鄰居', itemOfList(b, p2, NUMS, '數字清單', sub(b, p2, getVar(b, p2, P, 'P'), numShadow(1))))]);
    const ifRight = if_(b, flag, id => lt(b, id, getVar(b, id, P, 'P'), getVar(b, id, N, 'N')),
        p2 => [setVar(b, p2, RIGHT, '右鄰居', itemOfList(b, p2, NUMS, '數字清單', add(b, p2, getVar(b, p2, P, 'P'), numShadow(1))))]);
    const sayId = say(b, flag, add(b, flag, getVar(b, flag, LEFT, '左鄰居'), getVar(b, flag, RIGHT, '右鄰居')));
    chain(b, [flag, clearList, ask1, setN, readNums, ask3, setP, setLeft0, setRight0, ifLeft, ifRight, sayId]);
    writeTask(M104, 'IDX01-007', b);
})();

(function buildIDX01008() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const A = b.addVariable('v_a', 'A');
    const B_ = b.addVariable('v_b', 'B');
    const I = b.addVariable('v_i', 'i');
    const POSA = b.addVariable('v_posa', 'A位置');
    const POSB = b.addVariable('v_posb', 'B位置');
    const flag = whenFlagClicked(b);
    const clearList = deleteAllOfList(b, flag, NUMS, '數字清單');
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const readNums = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const addId = addToList(b, parent, NUMS, '數字清單', getVar(b, parent, NUM, '數字'));
        return [ask2, setNum, addId];
    });
    const ask3 = askAndWait(b, flag, textShadow('請輸入A與B'));
    const setA = setVar(b, flag, A, 'A', answer(b, flag));
    const ask4 = askAndWait(b, flag, textShadow(''));
    const setB = setVar(b, flag, B_, 'B', answer(b, flag));
    const setPosA0 = setVar(b, flag, POSA, 'A位置', numShadow(0));
    const setPosB0 = setVar(b, flag, POSB, 'B位置', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const loopId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ifA = if_(b, parent, id => and_(b, id,
                equals(b, id, itemOfList(b, id, NUMS, '數字清單', getVar(b, id, I, 'i')), getVar(b, id, A, 'A')),
                equals(b, id, getVar(b, id, POSA, 'A位置'), numShadow(0))),
            p2 => [setVar(b, p2, POSA, 'A位置', getVar(b, p2, I, 'i'))]);
        const ifB = if_(b, parent, id => and_(b, id,
                equals(b, id, itemOfList(b, id, NUMS, '數字清單', getVar(b, id, I, 'i')), getVar(b, id, B_, 'B')),
                equals(b, id, getVar(b, id, POSB, 'B位置'), numShadow(0))),
            p2 => [setVar(b, p2, POSB, 'B位置', getVar(b, p2, I, 'i'))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifA, ifB, incI];
    });

    const sayId = say(b, flag, abs_(b, flag, sub(b, flag, getVar(b, flag, POSA, 'A位置'), getVar(b, flag, POSB, 'B位置'))));
    chain(b, [flag, clearList, ask1, setN, readNums, ask3, setA, ask4, setB, setPosA0, setPosB0, setI1, loopId, sayId]);
    writeTask(M104, 'IDX01-008', b);
})();

(function buildCNT01022() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUM = b.addVariable('v_num', '成績');
    const I = b.addVariable('v_i', 'i');
    const FOUND = b.addVariable('v_found', '找到位置');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setFound0 = setVar(b, flag, FOUND, '找到位置', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));

    const loopId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '成績', answer(b, parent));
        const ifPass = if_(b, parent, id => and_(b, id,
                not_(b, id, lt(b, id, getVar(b, id, NUM, '成績'), numShadow(60))),
                equals(b, id, getVar(b, id, FOUND, '找到位置'), numShadow(0))),
            p2 => [setVar(b, p2, FOUND, '找到位置', getVar(b, p2, I, 'i'))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ask2, setNum, ifPass, incI];
    });

    const sayId = say(b, flag, getVar(b, flag, FOUND, '找到位置'));
    chain(b, [flag, ask1, setN, setFound0, setI1, loopId, sayId]);
    writeTask(M104, 'CNT01-022', b);
})();

(function buildCNT01023() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUM = b.addVariable('v_num', '數字');
    const PREV = b.addVariable('v_prev', '前一個');
    const MAXDIFF = b.addVariable('v_maxdiff', '最大差值');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setMaxDiff0 = setVar(b, flag, MAXDIFF, '最大差值', numShadow(0));
    const ask2 = askAndWait(b, flag, textShadow('請輸入第一個數字'));
    const setPrev = setVar(b, flag, PREV, '前一個', answer(b, flag));

    const loopId = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)),
        parent => {
            const ask3 = askAndWait(b, parent, textShadow(''));
            const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
            const ifBigger = if_(b, parent, id2 => gt(b, id2, abs_(b, id2, sub(b, id2, getVar(b, id2, NUM, '數字'), getVar(b, id2, PREV, '前一個'))), getVar(b, id2, MAXDIFF, '最大差值')),
                p2 => [setVar(b, p2, MAXDIFF, '最大差值', abs_(b, p2, sub(b, p2, getVar(b, p2, NUM, '數字'), getVar(b, p2, PREV, '前一個'))))]);
            const advancePrev = setVar(b, parent, PREV, '前一個', getVar(b, parent, NUM, '數字'));
            return [ask3, setNum, ifBigger, advancePrev];
        });

    const sayId = say(b, flag, getVar(b, flag, MAXDIFF, '最大差值'));
    chain(b, [flag, ask1, setN, setMaxDiff0, ask2, setPrev, loopId, sayId]);
    writeTask(M104, 'CNT01-023', b);
})();

console.log('\nM1-04 手寫示範解答完成。');

// ============ M1-05-StringBasics ============
const M105 = 'M1-05-StringBasics';

(function buildSTR01001() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const sayId = say(b, flag, length_(b, flag, getVar(b, flag, S, 'S')));
    chain(b, [flag, ask1, setS, sayId]);
    writeTask(M105, 'STR01-001', b);
})();

(function buildSTR01002() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const first = letterOf(b, flag, numShadow(1), getVar(b, flag, S, 'S'));
    const last = letterOf(b, flag, length_(b, flag, getVar(b, flag, S, 'S')), getVar(b, flag, S, 'S'));
    const sayId = say(b, flag, join(b, flag, join(b, flag, first, textShadow(' ')), last));
    chain(b, [flag, ask1, setS, sayId]);
    writeTask(M105, 'STR01-002', b);
})();

(function buildSTR01003() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const P = b.addVariable('v_p', 'P');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入P'));
    const setP = setVar(b, flag, P, 'P', answer(b, flag));
    const sayId = say(b, flag, letterOf(b, flag, getVar(b, flag, P, 'P'), getVar(b, flag, S, 'S')));
    chain(b, [flag, ask1, setS, ask2, setP, sayId]);
    writeTask(M105, 'STR01-003', b);
})();

(function buildSTR01004() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const C = b.addVariable('v_c', 'C');
    const I = b.addVariable('v_i', 'i');
    const COUNT = b.addVariable('v_count', '數量');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入C'));
    const setC = setVar(b, flag, C, 'C', answer(b, flag));
    const setCount0 = setVar(b, flag, COUNT, '數量', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => length_(b, id, getVar(b, id, S, 'S')), parent => {
        const ifMatch = if_(b, parent, id => equals(b, id, letterOf(b, id, getVar(b, id, I, 'i'), getVar(b, id, S, 'S')), getVar(b, id, C, 'C')),
            p2 => [setVar(b, p2, COUNT, '數量', add(b, p2, getVar(b, p2, COUNT, '數量'), numShadow(1)))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifMatch, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, COUNT, '數量'));
    chain(b, [flag, ask1, setS, ask2, setC, setCount0, setI1, loopId, sayId]);
    writeTask(M105, 'STR01-004', b);
})();

(function buildSTR01005() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const I = b.addVariable('v_i', 'i');
    const RESULT = b.addVariable('v_result', '反向結果');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const setResult0 = setVar(b, flag, RESULT, '反向結果', textShadow(''));
    const setI = setVar(b, flag, I, 'i', length_(b, flag, getVar(b, flag, S, 'S')));
    const loopId = repeatUntil(b, flag, id => lt(b, id, getVar(b, id, I, 'i'), numShadow(1)), parent => {
        const appendId = setVar(b, parent, RESULT, '反向結果', join(b, parent, getVar(b, parent, RESULT, '反向結果'), letterOf(b, parent, getVar(b, parent, I, 'i'), getVar(b, parent, S, 'S'))));
        const decI = setVar(b, parent, I, 'i', sub(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [appendId, decI];
    });
    const sayId = say(b, flag, getVar(b, flag, RESULT, '反向結果'));
    chain(b, [flag, ask1, setS, setResult0, setI, loopId, sayId]);
    writeTask(M105, 'STR01-005', b);
})();

(function buildSTR01006() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const I = b.addVariable('v_i', 'i');
    const COUNT = b.addVariable('v_count', '母音數量');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const setCount0 = setVar(b, flag, COUNT, '母音數量', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => length_(b, id, getVar(b, id, S, 'S')), parent => {
        const isVowel = id => {
            const ch = letterOf(b, id, getVar(b, id, I, 'i'), getVar(b, id, S, 'S'));
            const eqA = equals(b, id, ch, textShadow('a'));
            const ch2 = letterOf(b, id, getVar(b, id, I, 'i'), getVar(b, id, S, 'S'));
            const eqE = equals(b, id, ch2, textShadow('e'));
            const ch3 = letterOf(b, id, getVar(b, id, I, 'i'), getVar(b, id, S, 'S'));
            const eqI = equals(b, id, ch3, textShadow('i'));
            const ch4 = letterOf(b, id, getVar(b, id, I, 'i'), getVar(b, id, S, 'S'));
            const eqO = equals(b, id, ch4, textShadow('o'));
            const ch5 = letterOf(b, id, getVar(b, id, I, 'i'), getVar(b, id, S, 'S'));
            const eqU = equals(b, id, ch5, textShadow('u'));
            return or_(b, id, or_(b, id, or_(b, id, or_(b, id, eqA, eqE), eqI), eqO), eqU);
        };
        const ifVowel = if_(b, parent, isVowel,
            p2 => [setVar(b, p2, COUNT, '母音數量', add(b, p2, getVar(b, p2, COUNT, '母音數量'), numShadow(1)))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifVowel, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, COUNT, '母音數量'));
    chain(b, [flag, ask1, setS, setCount0, setI1, loopId, sayId]);
    writeTask(M105, 'STR01-006', b);
})();

(function buildSTR01007() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const I = b.addVariable('v_i', 'i');
    const REV = b.addVariable('v_rev', '反向結果');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const setRev0 = setVar(b, flag, REV, '反向結果', textShadow(''));
    const setI = setVar(b, flag, I, 'i', length_(b, flag, getVar(b, flag, S, 'S')));
    const loopId = repeatUntil(b, flag, id => lt(b, id, getVar(b, id, I, 'i'), numShadow(1)), parent => {
        const appendId = setVar(b, parent, REV, '反向結果', join(b, parent, getVar(b, parent, REV, '反向結果'), letterOf(b, parent, getVar(b, parent, I, 'i'), getVar(b, parent, S, 'S'))));
        const decI = setVar(b, parent, I, 'i', sub(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [appendId, decI];
    });
    const ifElseId = ifElse(b, flag, id => equals(b, id, getVar(b, id, REV, '反向結果'), getVar(b, id, S, 'S')),
        p1 => [say(b, p1, textShadow('YES'))],
        p2 => [say(b, p2, textShadow('NO'))]);
    chain(b, [flag, ask1, setS, setRev0, setI, loopId, ifElseId]);
    writeTask(M105, 'STR01-007', b);
})();

(function buildSTR01008() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const I = b.addVariable('v_i', 'i');
    const FOUND = b.addVariable('v_found', '找到');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const setFound0 = setVar(b, flag, FOUND, '找到', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag,
        id => sub(b, id, length_(b, id, getVar(b, id, S, 'S')), numShadow(1)),
        parent => {
            const ifMatch = if_(b, parent, id => equals(b, id,
                    letterOf(b, id, getVar(b, id, I, 'i'), getVar(b, id, S, 'S')),
                    letterOf(b, id, add(b, id, getVar(b, id, I, 'i'), numShadow(1)), getVar(b, id, S, 'S'))),
                p2 => [setVar(b, p2, FOUND, '找到', numShadow(1))]);
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [ifMatch, incI];
        });
    const ifElseId = ifElse(b, flag, id => equals(b, id, getVar(b, id, FOUND, '找到'), numShadow(1)),
        p1 => [say(b, p1, textShadow('YES'))],
        p2 => [say(b, p2, textShadow('NO'))]);
    chain(b, [flag, ask1, setS, setFound0, setI1, loopId, ifElseId]);
    writeTask(M105, 'STR01-008', b);
})();

console.log('\nM1-05 手寫示範解答完成。');

// ============ M1-06-StringFormat ============
const M106 = 'M1-06-StringFormat';

// A-10-0/A-11-0/A-12-0/A-10-1/A-12-1：跟JSA00同ID同題目同算法（僅testCases措辭/大小寫略有差異，
// 演算法本身不受影響），直接複製既有手寫解答重複使用。
copyExisting('JSA00', 'A-10-0', M106, 'A-10-0');
copyExisting('JSA00', 'A-11-0', M106, 'A-11-0');
copyExisting('JSA00', 'A-12-0', M106, 'A-12-0');
copyExisting('JSA00', 'A-10-1', M106, 'A-10-1');
copyExisting('JSA00', 'A-11-1', M106, 'A-11-1'); // 注意：M1-06測資含大小寫混合(ChaiYiCity)，但最大出現次數的字母仍是小寫i，演算法（掃a-z）不受影響，跑verify腳本確認過再放行
copyExisting('JSA00', 'A-12-1', M106, 'A-12-1');

function mapLetterToNumber(b, parent, letterGetter, mapping, targetVar, targetName) {
    function build(parentId, idx) {
        if (idx === mapping.length - 1) {
            return setVar(b, parentId, targetVar, targetName, numShadow(mapping[idx][1]));
        }
        const [letter, val] = mapping[idx];
        return ifElse(b, parentId,
            id => equals(b, id, letterGetter(id), textShadow(letter)),
            p1 => [setVar(b, p1, targetVar, targetName, numShadow(val))],
            p2 => [build(p2, idx + 1)]);
    }
    return build(parent, 0);
}

(function buildJSS01D03() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => length_(b, id, getVar(b, id, S, 'S')), parent => {
        const sayCh = say(b, parent, letterOf(b, parent, getVar(b, parent, I, 'i'), getVar(b, parent, S, 'S')));
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [sayCh, incI];
    });
    chain(b, [flag, ask1, setS, setI1, loopId]);
    writeTask(M106, 'JSS01-D03', b);
})();

(function buildJSS01P01() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const C = b.addVariable('v_c', 'C');
    const I = b.addVariable('v_i', 'i');
    const COUNT = b.addVariable('v_count', '數量');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow('請輸入C'));
    const setC = setVar(b, flag, C, 'C', answer(b, flag));
    const setCount0 = setVar(b, flag, COUNT, '數量', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => length_(b, id, getVar(b, id, S, 'S')), parent => {
        const ifMatch = if_(b, parent, id => equals(b, id, letterOf(b, id, getVar(b, id, I, 'i'), getVar(b, id, S, 'S')), getVar(b, id, C, 'C')),
            p2 => [setVar(b, p2, COUNT, '數量', add(b, p2, getVar(b, p2, COUNT, '數量'), numShadow(1)))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifMatch, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, COUNT, '數量'));
    chain(b, [flag, ask1, setS, ask2, setC, setCount0, setI1, loopId, sayId]);
    writeTask(M106, 'JSS01-P01', b);
})();

(function buildJSS01P02() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const ifElseId = ifElse(b, flag, id => equals(b, id, length_(b, id, getVar(b, id, S, 'S')), numShadow(4)),
        p1 => [say(b, p1, textShadow('OK'))],
        p2 => [say(b, p2, textShadow('NG'))]);
    chain(b, [flag, ask1, setS, ifElseId]);
    writeTask(M106, 'JSS01-P02', b);
})();

(function buildCycjunior002() {
    const b = createBuilder();
    const L = b.addVariable('v_l', 'L');
    const CH = b.addVariable('v_ch', '字元');
    const VAL = b.addVariable('v_val', '值');
    const TOTAL = b.addVariable('v_total', '總和');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入L'));
    const setL = setVar(b, flag, L, 'L', answer(b, flag));
    const setTotal0 = setVar(b, flag, TOTAL, '總和', numShadow(0));
    const loopId = repeat(b, flag, id => getVar(b, id, L, 'L'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setCh = setVar(b, parent, CH, '字元', answer(b, parent));
        const mapId = mapLetterToNumber(b, parent, id => getVar(b, id, CH, '字元'),
            [['A', 0], ['B', 1], ['C', 2], ['D', 3], ['E', 4]], VAL, '值');
        const updateTotal = setVar(b, parent, TOTAL, '總和', add(b, parent, mul(b, parent, getVar(b, parent, TOTAL, '總和'), numShadow(5)), getVar(b, parent, VAL, '值')));
        return [ask2, setCh, mapId, updateTotal];
    });
    const sayId = say(b, flag, getVar(b, flag, TOTAL, '總和'));
    chain(b, [flag, ask1, setL, setTotal0, loopId, sayId]);
    writeTask(M106, 'cycjunior-002', b);
})();

(function buildTYTN10() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const LETTERVAL = b.addVariable('v_letterval', '字母值');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const ch1 = id => letterOf(b, id, numShadow(1), getVar(b, id, S, 'S'));
    const mapId = mapLetterToNumber(b, flag, ch1, [['A', 11], ['B', 13], ['C', 15], ['D', 17], ['?', 0]], LETTERVAL, '字母值');

    const buildSum = id => {
        let acc = getVar(b, id, LETTERVAL, '字母值');
        for (let pos = 2; pos <= 6; pos++) {
            acc = add(b, id, acc, letterOf(b, id, numShadow(pos), getVar(b, id, S, 'S')));
        }
        return acc;
    };

    const ifElseId = ifElse(b, flag,
        id => equals(b, id, mod_(b, id, buildSum(id), numShadow(5)), numShadow(4)),
        p1 => [say(b, p1, textShadow('yes'))],
        p2 => [say(b, p2, textShadow('no'))]);

    chain(b, [flag, ask1, setS, mapId, ifElseId]);
    writeTask(M106, 'TYTN-10', b);
})();

(function buildW401() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const SEG = b.addList('v_seg', '燈條數');
    const D = b.addVariable('v_d', 'D');
    const COST = b.addVariable('v_cost', 'cost');
    const BEST = b.addVariable('v_best', '最大值');
    const T = b.addVariable('v_t', 'T');
    const U = b.addVariable('v_u', 'U');
    const CANDIDATE = b.addVariable('v_candidate', '候選值');
    const flag = whenFlagClicked(b);
    const clearSeg = deleteAllOfList(b, flag, SEG, '燈條數');
    const segValues = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
    const addSegSteps = segValues.map(v => addToList(b, flag, SEG, '燈條數', numShadow(v)));
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setBest0 = setVar(b, flag, BEST, '最大值', numShadow(-1));

    const setD0 = setVar(b, flag, D, 'D', numShadow(0));
    const loop1 = repeat(b, flag, () => numShadow(10), parent => {
        const setCost = setVar(b, parent, COST, 'cost', itemOfList(b, parent, SEG, '燈條數', add(b, parent, getVar(b, parent, D, 'D'), numShadow(1))));
        const ifMatch = if_(b, parent, id => equals(b, id, getVar(b, id, COST, 'cost'), getVar(b, id, N, 'N')),
            p2 => [if_(b, p2, id2 => gt(b, id2, getVar(b, id2, D, 'D'), getVar(b, id2, BEST, '最大值')),
                p3 => [setVar(b, p3, BEST, '最大值', getVar(b, p3, D, 'D'))])]);
        const incD = setVar(b, parent, D, 'D', add(b, parent, getVar(b, parent, D, 'D'), numShadow(1)));
        return [setCost, ifMatch, incD];
    });

    const setT0 = setVar(b, flag, T, 'T', numShadow(0));
    const loop2 = repeat(b, flag, () => numShadow(10), parent => {
        const ifTensOk = if_(b, parent, id => gt(b, id, getVar(b, id, T, 'T'), numShadow(0)), parentIf => {
            const setU0 = setVar(b, parentIf, U, 'U', numShadow(0));
            const loop3 = repeat(b, parentIf, () => numShadow(10), parent2 => {
                const ifUnitOk = if_(b, parent2, id2 => not_(b, id2, equals(b, id2, getVar(b, id2, U, 'U'), getVar(b, id2, T, 'T'))), parentIf2 => {
                    const setCost2 = setVar(b, parentIf2, COST, 'cost', add(b, parentIf2,
                        itemOfList(b, parentIf2, SEG, '燈條數', add(b, parentIf2, getVar(b, parentIf2, T, 'T'), numShadow(1))),
                        itemOfList(b, parentIf2, SEG, '燈條數', add(b, parentIf2, getVar(b, parentIf2, U, 'U'), numShadow(1)))));
                    const ifMatch2 = if_(b, parentIf2, id3 => equals(b, id3, getVar(b, id3, COST, 'cost'), getVar(b, id3, N, 'N')), p4 => {
                        const setCandidate = setVar(b, p4, CANDIDATE, '候選值', add(b, p4, mul(b, p4, getVar(b, p4, T, 'T'), numShadow(10)), getVar(b, p4, U, 'U')));
                        const ifBig2 = if_(b, p4, id4 => gt(b, id4, getVar(b, id4, CANDIDATE, '候選值'), getVar(b, id4, BEST, '最大值')),
                            p5 => [setVar(b, p5, BEST, '最大值', getVar(b, p5, CANDIDATE, '候選值'))]);
                        return [setCandidate, ifBig2];
                    });
                    return [setCost2, ifMatch2];
                });
                const incU = setVar(b, parent2, U, 'U', add(b, parent2, getVar(b, parent2, U, 'U'), numShadow(1)));
                return [ifUnitOk, incU];
            });
            return [setU0, loop3];
        });
        const incT = setVar(b, parent, T, 'T', add(b, parent, getVar(b, parent, T, 'T'), numShadow(1)));
        return [ifTensOk, incT];
    });

    const sayId = say(b, flag, getVar(b, flag, BEST, '最大值'));
    chain(b, [flag, clearSeg, ...addSegSteps, ask1, setN, setBest0, setD0, loop1, setT0, loop2, sayId]);
    writeTask(M106, 'W4-01', b);
})();

console.log('\nM1-06 手寫示範解答完成。');

// ============ M1-07-SortBasics ============
const M107 = 'M1-07-SortBasics';

function swapIfGreater(b, parent, varX, nameX, varY, nameY, tmpVar, tmpName) {
    return if_(b, parent, id => gt(b, id, getVar(b, id, varX, nameX), getVar(b, id, varY, nameY)), p2 => [
        setVar(b, p2, tmpVar, tmpName, getVar(b, p2, varX, nameX)),
        setVar(b, p2, varX, nameX, getVar(b, p2, varY, nameY)),
        setVar(b, p2, varY, nameY, getVar(b, p2, tmpVar, tmpName))
    ]);
}

function appendToResult(b, parent, resultVar, resultName, valueBuilder) {
    return ifElse(b, parent, id => equals(b, id, getVar(b, id, resultVar, resultName), textShadow('')),
        p1 => [setVar(b, p1, resultVar, resultName, valueBuilder(p1))],
        p2 => [setVar(b, p2, resultVar, resultName, join(b, p2, getVar(b, p2, resultVar, resultName), join(b, p2, textShadow(' '), valueBuilder(p2))))]);
}

function readNumsIntoList(b, flag, N, NUMS, listName, NUM, numName) {
    const clearList = deleteAllOfList(b, flag, NUMS, listName);
    const readNums = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const askX = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, numName, answer(b, parent));
        const addId = addToList(b, parent, NUMS, listName, getVar(b, parent, NUM, numName));
        return [askX, setNum, addId];
    });
    return [clearList, readNums];
}

function readAndBubbleSort(b, flag, N, NUMS, NUM, I, TMP, descending) {
    const [clearList, readNums] = readNumsIntoList(b, flag, N, NUMS, '數字清單', NUM, '數字');
    const outerLoop = repeat(b, flag, id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)), parentOuter => {
        const setI1 = setVar(b, parentOuter, I, 'i', numShadow(1));
        const innerLoop = repeat(b, parentOuter, id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)), parent => {
            const condBuilder = descending
                ? (id => lt(b, id, itemOfList(b, id, NUMS, '數字清單', getVar(b, id, I, 'i')), itemOfList(b, id, NUMS, '數字清單', add(b, id, getVar(b, id, I, 'i'), numShadow(1)))))
                : (id => gt(b, id, itemOfList(b, id, NUMS, '數字清單', getVar(b, id, I, 'i')), itemOfList(b, id, NUMS, '數字清單', add(b, id, getVar(b, id, I, 'i'), numShadow(1)))));
            const ifSwap = if_(b, parent, condBuilder, p2 => [
                setVar(b, p2, TMP, '暫存', itemOfList(b, p2, NUMS, '數字清單', getVar(b, p2, I, 'i'))),
                replaceItemOfList(b, p2, NUMS, '數字清單', getVar(b, p2, I, 'i'), itemOfList(b, p2, NUMS, '數字清單', add(b, p2, getVar(b, p2, I, 'i'), numShadow(1)))),
                replaceItemOfList(b, p2, NUMS, '數字清單', add(b, p2, getVar(b, p2, I, 'i'), numShadow(1)), getVar(b, p2, TMP, '暫存'))
            ]);
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [ifSwap, incI];
        });
        return [setI1, innerLoop];
    });
    return [clearList, readNums, outerLoop];
}

function outputJoinedList(b, flag, N, NUMS, I, RESULT) {
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setI = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const appendId = appendToResult(b, parent, RESULT, '結果', id => itemOfList(b, id, NUMS, '數字清單', getVar(b, id, I, 'i')));
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [appendId, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    return [setResult0, setI, loopId, sayId];
}

(function buildSORT01001() {
    const b = createBuilder();
    const A = b.addVariable('v_a', 'A');
    const B_ = b.addVariable('v_b', 'B');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入A B'));
    const setA = setVar(b, flag, A, 'A', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow(''));
    const setB = setVar(b, flag, B_, 'B', answer(b, flag));
    const ifElseId = ifElse(b, flag, id => gt(b, id, getVar(b, id, A, 'A'), getVar(b, id, B_, 'B')),
        p1 => [say(b, p1, join(b, p1, join(b, p1, getVar(b, p1, B_, 'B'), textShadow(' ')), getVar(b, p1, A, 'A')))],
        p2 => [say(b, p2, join(b, p2, join(b, p2, getVar(b, p2, A, 'A'), textShadow(' ')), getVar(b, p2, B_, 'B')))]);
    chain(b, [flag, ask1, setA, ask2, setB, ifElseId]);
    writeTask(M107, 'SORT01-001', b);
})();
copyExisting(M107, 'SORT01-001', M107, 'seclect-001');

(function buildSORT01002() {
    const b = createBuilder();
    const A = b.addVariable('v_a', 'A');
    const B_ = b.addVariable('v_b', 'B');
    const C = b.addVariable('v_c', 'C');
    const TMP = b.addVariable('v_tmp', '暫存');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入A B C'));
    const setA = setVar(b, flag, A, 'A', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow(''));
    const setB = setVar(b, flag, B_, 'B', answer(b, flag));
    const ask3 = askAndWait(b, flag, textShadow(''));
    const setC = setVar(b, flag, C, 'C', answer(b, flag));
    const swap1 = swapIfGreater(b, flag, A, 'A', B_, 'B', TMP, '暫存');
    const swap2 = swapIfGreater(b, flag, B_, 'B', C, 'C', TMP, '暫存');
    const swap3 = swapIfGreater(b, flag, A, 'A', B_, 'B', TMP, '暫存');
    const sayId = say(b, flag, join(b, flag, join(b, flag, join(b, flag, join(b, flag, getVar(b, flag, A, 'A'), textShadow(' ')), getVar(b, flag, B_, 'B')), textShadow(' ')), getVar(b, flag, C, 'C')));
    chain(b, [flag, ask1, setA, ask2, setB, ask3, setC, swap1, swap2, swap3, sayId]);
    writeTask(M107, 'SORT01-002', b);
})();

(function buildSORT01003() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const TMP = b.addVariable('v_tmp', '暫存');
    const RESULT = b.addVariable('v_result', '結果');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const [clearList, readNums] = readNumsIntoList(b, flag, N, NUMS, '數字清單', NUM, '數字');
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const passLoop = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)),
        parent => {
            const ifSwap = if_(b, parent, id => gt(b, id,
                    itemOfList(b, id, NUMS, '數字清單', getVar(b, id, I, 'i')),
                    itemOfList(b, id, NUMS, '數字清單', add(b, id, getVar(b, id, I, 'i'), numShadow(1)))),
                p2 => [
                    setVar(b, p2, TMP, '暫存', itemOfList(b, p2, NUMS, '數字清單', getVar(b, p2, I, 'i'))),
                    replaceItemOfList(b, p2, NUMS, '數字清單', getVar(b, p2, I, 'i'), itemOfList(b, p2, NUMS, '數字清單', add(b, p2, getVar(b, p2, I, 'i'), numShadow(1)))),
                    replaceItemOfList(b, p2, NUMS, '數字清單', add(b, p2, getVar(b, p2, I, 'i'), numShadow(1)), getVar(b, p2, TMP, '暫存'))
                ]);
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [ifSwap, incI];
        });
    const outputSteps = outputJoinedList(b, flag, N, NUMS, I, RESULT);
    chain(b, [flag, ask1, setN, clearList, readNums, setI1, passLoop, ...outputSteps]);
    writeTask(M107, 'SORT01-003', b);
})();

(function buildSORT01004() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const TMP = b.addVariable('v_tmp', '暫存');
    const RESULT = b.addVariable('v_result', '結果');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const sortSteps = readAndBubbleSort(b, flag, N, NUMS, NUM, I, TMP, false);
    const outputSteps = outputJoinedList(b, flag, N, NUMS, I, RESULT);
    chain(b, [flag, ask1, setN, ...sortSteps, ...outputSteps]);
    writeTask(M107, 'SORT01-004', b);
})();

(function buildSORT01005() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const TMP = b.addVariable('v_tmp', '暫存');
    const RESULT = b.addVariable('v_result', '結果');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const sortSteps = readAndBubbleSort(b, flag, N, NUMS, NUM, I, TMP, true);
    const outputSteps = outputJoinedList(b, flag, N, NUMS, I, RESULT);
    chain(b, [flag, ask1, setN, ...sortSteps, ...outputSteps]);
    writeTask(M107, 'SORT01-005', b);
})();

(function buildSORT01006() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const TMP = b.addVariable('v_tmp', '暫存');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const sortSteps = readAndBubbleSort(b, flag, N, NUMS, NUM, I, TMP, false);
    const midPos = floor_(b, flag, div(b, flag, add(b, flag, getVar(b, flag, N, 'N'), numShadow(1)), numShadow(2)));
    const sayId = say(b, flag, itemOfList(b, flag, NUMS, '數字清單', midPos));
    chain(b, [flag, ask1, setN, ...sortSteps, sayId]);
    writeTask(M107, 'SORT01-006', b);
})();

(function buildSORT01007() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const TMP = b.addVariable('v_tmp', '暫存');
    const K = b.addVariable('v_k', 'K');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const sortSteps = readAndBubbleSort(b, flag, N, NUMS, NUM, I, TMP, false);
    const ask2 = askAndWait(b, flag, textShadow('請輸入K'));
    const setK = setVar(b, flag, K, 'K', answer(b, flag));
    const sayId = say(b, flag, itemOfList(b, flag, NUMS, '數字清單', getVar(b, flag, K, 'K')));
    chain(b, [flag, ask1, setN, ...sortSteps, ask2, setK, sayId]);
    writeTask(M107, 'SORT01-007', b);
})();

(function buildSORT01008() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const TMP = b.addVariable('v_tmp', '暫存');
    const SUM = b.addVariable('v_sum', '總和');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const sortSteps = readAndBubbleSort(b, flag, N, NUMS, NUM, I, TMP, false);
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));
    const setI2 = setVar(b, flag, I, 'i', numShadow(2));
    const sumLoop = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(2)),
        parent => {
            const addSum = setVar(b, parent, SUM, '總和', add(b, parent, getVar(b, parent, SUM, '總和'), itemOfList(b, parent, NUMS, '數字清單', getVar(b, parent, I, 'i'))));
            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
            return [addSum, incI];
        });
    const sayId = say(b, flag, getVar(b, flag, SUM, '總和'));
    chain(b, [flag, ask1, setN, ...sortSteps, setSum0, setI2, sumLoop, sayId]);
    writeTask(M107, 'SORT01-008', b);
})();

(function buildSeclect004() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const MININDEX = b.addVariable('v_minindex', '最小值位置');
    const J = b.addVariable('v_j', 'j');
    const TMP = b.addVariable('v_tmp', '暫存');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const [clearList, readNums] = readNumsIntoList(b, flag, N, NUMS, '數字清單', NUM, '數字');

    const setMinIndex1 = setVar(b, flag, MININDEX, '最小值位置', numShadow(1));
    const setJ2 = setVar(b, flag, J, 'j', numShadow(2));
    const findMinLoop = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)),
        parent => {
            const ifSmaller = if_(b, parent, id => lt(b, id,
                    itemOfList(b, id, NUMS, '數字清單', getVar(b, id, J, 'j')),
                    itemOfList(b, id, NUMS, '數字清單', getVar(b, id, MININDEX, '最小值位置'))),
                p2 => [setVar(b, p2, MININDEX, '最小值位置', getVar(b, p2, J, 'j'))]);
            const incJ = setVar(b, parent, J, 'j', add(b, parent, getVar(b, parent, J, 'j'), numShadow(1)));
            return [ifSmaller, incJ];
        });

    const swapTmp = setVar(b, flag, TMP, '暫存', itemOfList(b, flag, NUMS, '數字清單', numShadow(1)));
    const swapReplace1 = replaceItemOfList(b, flag, NUMS, '數字清單', numShadow(1), itemOfList(b, flag, NUMS, '數字清單', getVar(b, flag, MININDEX, '最小值位置')));
    const swapReplace2 = replaceItemOfList(b, flag, NUMS, '數字清單', getVar(b, flag, MININDEX, '最小值位置'), getVar(b, flag, TMP, '暫存'));

    const outputSteps = outputJoinedList(b, flag, N, NUMS, I, RESULT);
    chain(b, [flag, ask1, setN, clearList, readNums, setMinIndex1, setJ2, findMinLoop, swapTmp, swapReplace1, swapReplace2, ...outputSteps]);
    writeTask(M107, 'seclect-004', b);
})();

(function buildSeclect005() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const R = b.addVariable('v_r', 'r');
    const MININDEX = b.addVariable('v_minindex', '最小值位置');
    const J = b.addVariable('v_j', 'j');
    const TMP = b.addVariable('v_tmp', '暫存');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const [clearList, readNums] = readNumsIntoList(b, flag, N, NUMS, '數字清單', NUM, '數字');

    const setR1 = setVar(b, flag, R, 'r', numShadow(1));
    const roundLoop = repeat(b, flag,
        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(1)),
        parentR => {
            const setMinIndex = setVar(b, parentR, MININDEX, '最小值位置', getVar(b, parentR, R, 'r'));
            const setJ = setVar(b, parentR, J, 'j', add(b, parentR, getVar(b, parentR, R, 'r'), numShadow(1)));
            const findMinLoop = repeat(b, parentR,
                id => sub(b, id, getVar(b, id, N, 'N'), getVar(b, id, R, 'r')),
                parent => {
                    const ifSmaller = if_(b, parent, id => lt(b, id,
                            itemOfList(b, id, NUMS, '數字清單', getVar(b, id, J, 'j')),
                            itemOfList(b, id, NUMS, '數字清單', getVar(b, id, MININDEX, '最小值位置'))),
                        p2 => [setVar(b, p2, MININDEX, '最小值位置', getVar(b, p2, J, 'j'))]);
                    const incJ = setVar(b, parent, J, 'j', add(b, parent, getVar(b, parent, J, 'j'), numShadow(1)));
                    return [ifSmaller, incJ];
                });
            const swapTmp = setVar(b, parentR, TMP, '暫存', itemOfList(b, parentR, NUMS, '數字清單', getVar(b, parentR, R, 'r')));
            const swapReplace1 = replaceItemOfList(b, parentR, NUMS, '數字清單', getVar(b, parentR, R, 'r'), itemOfList(b, parentR, NUMS, '數字清單', getVar(b, parentR, MININDEX, '最小值位置')));
            const swapReplace2 = replaceItemOfList(b, parentR, NUMS, '數字清單', getVar(b, parentR, MININDEX, '最小值位置'), getVar(b, parentR, TMP, '暫存'));
            const incR = setVar(b, parentR, R, 'r', add(b, parentR, getVar(b, parentR, R, 'r'), numShadow(1)));
            return [setMinIndex, setJ, findMinLoop, swapTmp, swapReplace1, swapReplace2, incR];
        });

    const outputSteps = outputJoinedList(b, flag, N, NUMS, I, RESULT);
    chain(b, [flag, ask1, setN, clearList, readNums, setR1, roundLoop, ...outputSteps]);
    writeTask(M107, 'seclect-005', b);
})();
copyExisting(M107, 'seclect-005', M107, 'seclect-006');

console.log('\nM1-07 手寫示範解答完成。');

// ============ M1-08-SortApplied ============
const M108 = 'M1-08-SortApplied';

function readFixedIntoList(b, flag, count, LIST, listName, TMP, tmpName) {
    const clearList = deleteAllOfList(b, flag, LIST, listName);
    const readLoop = repeat(b, flag, () => numShadow(count), parent => {
        const askX = askAndWait(b, parent, textShadow(''));
        const setTmp = setVar(b, parent, TMP, tmpName, answer(b, parent));
        const addId = addToList(b, parent, LIST, listName, getVar(b, parent, TMP, tmpName));
        return [askX, setTmp, addId];
    });
    return [clearList, readLoop];
}

// 連動選擇排序（依VALUE_LIST由大到小），LINKED_LIST跟著VALUE_LIST同步交換。
function linkedSelectionSortDescending(b, flag, count, LINKED_LIST, linkedName, LINKED_TMP, VALUE_LIST, valueName, R, MAXPOS, J, TMP) {
    const setR1 = setVar(b, flag, R, 'r', numShadow(1));
    const roundLoop = repeat(b, flag, () => numShadow(count - 1), parentR => {
        const setMaxPos = setVar(b, parentR, MAXPOS, '最高分位置', getVar(b, parentR, R, 'r'));
        const setJ = setVar(b, parentR, J, 'j', add(b, parentR, getVar(b, parentR, R, 'r'), numShadow(1)));
        const findMaxLoop = repeat(b, parentR,
            id => sub(b, id, numShadow(count), getVar(b, id, R, 'r')),
            parent => {
                const ifBigger = if_(b, parent, id => gt(b, id,
                        itemOfList(b, id, VALUE_LIST, valueName, getVar(b, id, J, 'j')),
                        itemOfList(b, id, VALUE_LIST, valueName, getVar(b, id, MAXPOS, '最高分位置'))),
                    p2 => [setVar(b, p2, MAXPOS, '最高分位置', getVar(b, p2, J, 'j'))]);
                const incJ = setVar(b, parent, J, 'j', add(b, parent, getVar(b, parent, J, 'j'), numShadow(1)));
                return [ifBigger, incJ];
            });
        const swapLinkedTmp = setVar(b, parentR, TMP, '暫存', itemOfList(b, parentR, LINKED_LIST, linkedName, getVar(b, parentR, R, 'r')));
        const swapLinked1 = replaceItemOfList(b, parentR, LINKED_LIST, linkedName, getVar(b, parentR, R, 'r'), itemOfList(b, parentR, LINKED_LIST, linkedName, getVar(b, parentR, MAXPOS, '最高分位置')));
        const swapLinked2 = replaceItemOfList(b, parentR, LINKED_LIST, linkedName, getVar(b, parentR, MAXPOS, '最高分位置'), getVar(b, parentR, TMP, '暫存'));
        const swapValueTmp = setVar(b, parentR, TMP, '暫存', itemOfList(b, parentR, VALUE_LIST, valueName, getVar(b, parentR, R, 'r')));
        const swapValue1 = replaceItemOfList(b, parentR, VALUE_LIST, valueName, getVar(b, parentR, R, 'r'), itemOfList(b, parentR, VALUE_LIST, valueName, getVar(b, parentR, MAXPOS, '最高分位置')));
        const swapValue2 = replaceItemOfList(b, parentR, VALUE_LIST, valueName, getVar(b, parentR, MAXPOS, '最高分位置'), getVar(b, parentR, TMP, '暫存'));
        const incR = setVar(b, parentR, R, 'r', add(b, parentR, getVar(b, parentR, R, 'r'), numShadow(1)));
        return [setMaxPos, setJ, findMaxLoop, swapLinkedTmp, swapLinked1, swapLinked2, swapValueTmp, swapValue1, swapValue2, incR];
    });
    return [setR1, roundLoop];
}

function outputTwoListsJoined(b, flag, count, LIST1, name1, LIST2, name2, I, RESULT) {
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loop1 = repeat(b, flag, () => numShadow(count), parent => {
        const appendId = appendToResult(b, parent, RESULT, '結果', id => itemOfList(b, id, LIST1, name1, getVar(b, id, I, 'i')));
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [appendId, incI];
    });
    const setI2 = setVar(b, flag, I, 'i', numShadow(1));
    const loop2 = repeat(b, flag, () => numShadow(count), parent => {
        const appendId = appendToResult(b, parent, RESULT, '結果', id => itemOfList(b, id, LIST2, name2, getVar(b, id, I, 'i')));
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [appendId, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    return [setResult0, setI1, loop1, setI2, loop2, sayId];
}

(function buildSeclect002() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const M = b.addVariable('v_m', 'M');
    const P1 = b.addVariable('v_p1', 'P1');
    const P2 = b.addVariable('v_p2', 'P2');
    const TMP = b.addVariable('v_tmp', '暫存');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const [clearList, readNums] = readNumsIntoList(b, flag, N, NUMS, '數字清單', NUM, '數字');
    const ask2 = askAndWait(b, flag, textShadow('請輸入M'));
    const setM = setVar(b, flag, M, 'M', answer(b, flag));
    const ask3 = askAndWait(b, flag, textShadow('請輸入P1'));
    const setP1 = setVar(b, flag, P1, 'P1', answer(b, flag));
    const ask4 = askAndWait(b, flag, textShadow(''));
    const setP2 = setVar(b, flag, P2, 'P2', answer(b, flag));
    const swapTmp = setVar(b, flag, TMP, '暫存', itemOfList(b, flag, NUMS, '數字清單', getVar(b, flag, P1, 'P1')));
    const swapReplace1 = replaceItemOfList(b, flag, NUMS, '數字清單', getVar(b, flag, P1, 'P1'), itemOfList(b, flag, NUMS, '數字清單', getVar(b, flag, P2, 'P2')));
    const swapReplace2 = replaceItemOfList(b, flag, NUMS, '數字清單', getVar(b, flag, P2, 'P2'), getVar(b, flag, TMP, '暫存'));
    const outputSteps = outputJoinedList(b, flag, N, NUMS, I, RESULT);
    chain(b, [flag, ask1, setN, clearList, readNums, ask2, setM, ask3, setP1, ask4, setP2, swapTmp, swapReplace1, swapReplace2, ...outputSteps]);
    writeTask(M108, 'seclect-002', b);
})();

(function buildSeclect003() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUMS = b.addList('v_nums', '數字清單');
    const NUM = b.addVariable('v_num', '數字');
    const I = b.addVariable('v_i', 'i');
    const MIN = b.addVariable('v_min', '最小值');
    const POS = b.addVariable('v_pos', '位置');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const [clearList, readNums] = readNumsIntoList(b, flag, N, NUMS, '數字清單', NUM, '數字');
    const setMin0 = setVar(b, flag, MIN, '最小值', numShadow(999999999));
    const setPos0 = setVar(b, flag, POS, '位置', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ifSmaller = if_(b, parent, id => lt(b, id, itemOfList(b, id, NUMS, '數字清單', getVar(b, id, I, 'i')), getVar(b, id, MIN, '最小值')),
            p2 => [setVar(b, p2, MIN, '最小值', itemOfList(b, p2, NUMS, '數字清單', getVar(b, p2, I, 'i'))), setVar(b, p2, POS, '位置', getVar(b, p2, I, 'i'))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifSmaller, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, POS, '位置'));
    chain(b, [flag, ask1, setN, clearList, readNums, setMin0, setPos0, setI1, loopId, sayId]);
    writeTask(M108, 'seclect-003', b);
})();

(function buildSeclect007() {
    const b = createBuilder();
    const N1 = b.addVariable('v_n1', 'N1');
    const NAMES = b.addList('v_names', '姓名清單');
    const NAMETMP = b.addVariable('v_nametmp', '姓名暫存讀取');
    const N2 = b.addVariable('v_n2', 'N2');
    const SCORES = b.addList('v_scores', '分數清單');
    const SCORETMP = b.addVariable('v_scoretmp', '分數暫存讀取');
    const M = b.addVariable('v_m', 'M');
    const P1 = b.addVariable('v_p1', 'P1');
    const P2 = b.addVariable('v_p2', 'P2');
    const TMP = b.addVariable('v_tmp', '暫存');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N1'));
    const setN1 = setVar(b, flag, N1, 'N1', answer(b, flag));
    const [clearNames, readNames] = readNumsIntoList(b, flag, N1, NAMES, '姓名清單', NAMETMP, '姓名暫存讀取');
    const ask2 = askAndWait(b, flag, textShadow('請輸入N2'));
    const setN2 = setVar(b, flag, N2, 'N2', answer(b, flag));
    const [clearScores, readScores] = readNumsIntoList(b, flag, N2, SCORES, '分數清單', SCORETMP, '分數暫存讀取');
    const ask3 = askAndWait(b, flag, textShadow('請輸入M'));
    const setM = setVar(b, flag, M, 'M', answer(b, flag));
    const ask4 = askAndWait(b, flag, textShadow('請輸入P1'));
    const setP1 = setVar(b, flag, P1, 'P1', answer(b, flag));
    const ask5 = askAndWait(b, flag, textShadow(''));
    const setP2 = setVar(b, flag, P2, 'P2', answer(b, flag));

    const swapNamesTmp = setVar(b, flag, TMP, '暫存', itemOfList(b, flag, NAMES, '姓名清單', getVar(b, flag, P1, 'P1')));
    const swapNames1 = replaceItemOfList(b, flag, NAMES, '姓名清單', getVar(b, flag, P1, 'P1'), itemOfList(b, flag, NAMES, '姓名清單', getVar(b, flag, P2, 'P2')));
    const swapNames2 = replaceItemOfList(b, flag, NAMES, '姓名清單', getVar(b, flag, P2, 'P2'), getVar(b, flag, TMP, '暫存'));

    const swapScoresTmp = setVar(b, flag, TMP, '暫存', itemOfList(b, flag, SCORES, '分數清單', getVar(b, flag, P1, 'P1')));
    const swapScores1 = replaceItemOfList(b, flag, SCORES, '分數清單', getVar(b, flag, P1, 'P1'), itemOfList(b, flag, SCORES, '分數清單', getVar(b, flag, P2, 'P2')));
    const swapScores2 = replaceItemOfList(b, flag, SCORES, '分數清單', getVar(b, flag, P2, 'P2'), getVar(b, flag, TMP, '暫存'));

    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const namesLoop = repeat(b, flag, id => getVar(b, id, N1, 'N1'), parent => {
        const appendId = appendToResult(b, parent, RESULT, '結果', id => itemOfList(b, id, NAMES, '姓名清單', getVar(b, id, I, 'i')));
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [appendId, incI];
    });
    const setI2 = setVar(b, flag, I, 'i', numShadow(1));
    const scoresLoop = repeat(b, flag, id => getVar(b, id, N2, 'N2'), parent => {
        const appendId = appendToResult(b, parent, RESULT, '結果', id => itemOfList(b, id, SCORES, '分數清單', getVar(b, id, I, 'i')));
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [appendId, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setN1, clearNames, readNames, ask2, setN2, clearScores, readScores, ask3, setM, ask4, setP1, ask5, setP2,
        swapNamesTmp, swapNames1, swapNames2, swapScoresTmp, swapScores1, swapScores2,
        setResult0, setI1, namesLoop, setI2, scoresLoop, sayId]);
    writeTask(M108, 'seclect-007', b);
})();

(function buildSeclect008() {
    const b = createBuilder();
    const NAMES = b.addList('v_names', '姓名清單');
    const NAMETMP = b.addVariable('v_nametmp', '姓名暫存讀取');
    const SCORES = b.addList('v_scores', '分數清單');
    const SCORETMP = b.addVariable('v_scoretmp', '分數暫存讀取');
    const I = b.addVariable('v_i', 'i');
    const MAX = b.addVariable('v_max', '最高分');
    const MAXPOS = b.addVariable('v_maxpos', '最高分位置');
    const MIN = b.addVariable('v_min', '最低分');
    const MINPOS = b.addVariable('v_minpos', '最低分位置');
    const flag = whenFlagClicked(b);
    const [clearNames, readNames] = readFixedIntoList(b, flag, 5, NAMES, '姓名清單', NAMETMP, '姓名暫存讀取');
    const [clearScores, readScores] = readFixedIntoList(b, flag, 5, SCORES, '分數清單', SCORETMP, '分數暫存讀取');
    const setMax0 = setVar(b, flag, MAX, '最高分', numShadow(-999999999));
    const setMaxPos0 = setVar(b, flag, MAXPOS, '最高分位置', numShadow(0));
    const setMin0 = setVar(b, flag, MIN, '最低分', numShadow(999999999));
    const setMinPos0 = setVar(b, flag, MINPOS, '最低分位置', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, () => numShadow(5), parent => {
        const ifMax = if_(b, parent, id => gt(b, id, itemOfList(b, id, SCORES, '分數清單', getVar(b, id, I, 'i')), getVar(b, id, MAX, '最高分')),
            p2 => [setVar(b, p2, MAX, '最高分', itemOfList(b, p2, SCORES, '分數清單', getVar(b, p2, I, 'i'))), setVar(b, p2, MAXPOS, '最高分位置', getVar(b, p2, I, 'i'))]);
        const ifMin = if_(b, parent, id => lt(b, id, itemOfList(b, id, SCORES, '分數清單', getVar(b, id, I, 'i')), getVar(b, id, MIN, '最低分')),
            p2 => [setVar(b, p2, MIN, '最低分', itemOfList(b, p2, SCORES, '分數清單', getVar(b, p2, I, 'i'))), setVar(b, p2, MINPOS, '最低分位置', getVar(b, p2, I, 'i'))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifMax, ifMin, incI];
    });
    const sayId = say(b, flag, join(b, flag,
        join(b, flag, join(b, flag, getVar(b, flag, MAXPOS, '最高分位置'), textShadow(' ')), itemOfList(b, flag, NAMES, '姓名清單', getVar(b, flag, MAXPOS, '最高分位置'))),
        join(b, flag, textShadow(' '), join(b, flag, join(b, flag, getVar(b, flag, MINPOS, '最低分位置'), textShadow(' ')), itemOfList(b, flag, NAMES, '姓名清單', getVar(b, flag, MINPOS, '最低分位置'))))
    ));
    chain(b, [flag, clearNames, readNames, clearScores, readScores, setMax0, setMaxPos0, setMin0, setMinPos0, setI1, loopId, sayId]);
    writeTask(M108, 'seclect-008', b);
})();

(function buildSeclect009() {
    const b = createBuilder();
    const NAMES = b.addList('v_names', '姓名清單');
    const NAMETMP = b.addVariable('v_nametmp', '姓名暫存讀取');
    const SCORES = b.addList('v_scores', '分數清單');
    const SCORETMP = b.addVariable('v_scoretmp', '分數暫存讀取');
    const I = b.addVariable('v_i', 'i');
    const MAXPOS = b.addVariable('v_maxpos', '最高分位置');
    const TMP = b.addVariable('v_tmp', '暫存');
    const RESULT = b.addVariable('v_result', '結果');
    const flag = whenFlagClicked(b);
    const [clearNames, readNames] = readFixedIntoList(b, flag, 5, NAMES, '姓名清單', NAMETMP, '姓名暫存讀取');
    const [clearScores, readScores] = readFixedIntoList(b, flag, 5, SCORES, '分數清單', SCORETMP, '分數暫存讀取');
    const setMaxPos1 = setVar(b, flag, MAXPOS, '最高分位置', numShadow(1));
    const setI2 = setVar(b, flag, I, 'i', numShadow(2));
    const findMaxLoop = repeat(b, flag, () => numShadow(4), parent => {
        const ifBigger = if_(b, parent, id => gt(b, id, itemOfList(b, id, SCORES, '分數清單', getVar(b, id, I, 'i')), itemOfList(b, id, SCORES, '分數清單', getVar(b, id, MAXPOS, '最高分位置'))),
            p2 => [setVar(b, p2, MAXPOS, '最高分位置', getVar(b, p2, I, 'i'))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifBigger, incI];
    });

    const swapNamesTmp = setVar(b, flag, TMP, '暫存', itemOfList(b, flag, NAMES, '姓名清單', numShadow(1)));
    const swapNames1 = replaceItemOfList(b, flag, NAMES, '姓名清單', numShadow(1), itemOfList(b, flag, NAMES, '姓名清單', getVar(b, flag, MAXPOS, '最高分位置')));
    const swapNames2 = replaceItemOfList(b, flag, NAMES, '姓名清單', getVar(b, flag, MAXPOS, '最高分位置'), getVar(b, flag, TMP, '暫存'));
    const swapScoresTmp = setVar(b, flag, TMP, '暫存', itemOfList(b, flag, SCORES, '分數清單', numShadow(1)));
    const swapScores1 = replaceItemOfList(b, flag, SCORES, '分數清單', numShadow(1), itemOfList(b, flag, SCORES, '分數清單', getVar(b, flag, MAXPOS, '最高分位置')));
    const swapScores2 = replaceItemOfList(b, flag, SCORES, '分數清單', getVar(b, flag, MAXPOS, '最高分位置'), getVar(b, flag, TMP, '暫存'));

    const outputSteps = outputTwoListsJoined(b, flag, 5, NAMES, '姓名清單', SCORES, '分數清單', I, RESULT);
    chain(b, [flag, clearNames, readNames, clearScores, readScores, setMaxPos1, setI2, findMaxLoop,
        swapNamesTmp, swapNames1, swapNames2, swapScoresTmp, swapScores1, swapScores2, ...outputSteps]);
    writeTask(M108, 'seclect-009', b);
})();

(function buildSeclect010() {
    const b = createBuilder();
    const NAMES = b.addList('v_names', '姓名清單');
    const NAMETMP = b.addVariable('v_nametmp', '姓名暫存讀取');
    const SCORES = b.addList('v_scores', '分數清單');
    const SCORETMP = b.addVariable('v_scoretmp', '分數暫存讀取');
    const R = b.addVariable('v_r', 'r');
    const MAXPOS = b.addVariable('v_maxpos', '最高分位置');
    const J = b.addVariable('v_j', 'j');
    const TMP = b.addVariable('v_tmp', '暫存');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const [clearNames, readNames] = readFixedIntoList(b, flag, 5, NAMES, '姓名清單', NAMETMP, '姓名暫存讀取');
    const [clearScores, readScores] = readFixedIntoList(b, flag, 5, SCORES, '分數清單', SCORETMP, '分數暫存讀取');
    const sortSteps = linkedSelectionSortDescending(b, flag, 5, NAMES, '姓名清單', NAMETMP, SCORES, '分數清單', R, MAXPOS, J, TMP);
    const outputSteps = outputTwoListsJoined(b, flag, 5, NAMES, '姓名清單', SCORES, '分數清單', I, RESULT);
    chain(b, [flag, clearNames, readNames, clearScores, readScores, ...sortSteps, ...outputSteps]);
    writeTask(M108, 'seclect-010', b);
})();

(function buildSeclect011() {
    const b = createBuilder();
    const NAMES = b.addList('v_names', '姓名清單');
    const NAMETMP = b.addVariable('v_nametmp', '姓名暫存讀取');
    const SCORES = b.addList('v_scores', '分數清單');
    const SCORETMP = b.addVariable('v_scoretmp', '分數暫存讀取');
    const R = b.addVariable('v_r', 'r');
    const MAXPOS = b.addVariable('v_maxpos', '最高分位置');
    const J = b.addVariable('v_j', 'j');
    const TMP = b.addVariable('v_tmp', '暫存');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const [clearNames, readNames] = readFixedIntoList(b, flag, 5, NAMES, '姓名清單', NAMETMP, '姓名暫存讀取');
    const [clearScores, readScores] = readFixedIntoList(b, flag, 5, SCORES, '分數清單', SCORETMP, '分數暫存讀取');
    const sortSteps = linkedSelectionSortDescending(b, flag, 5, NAMES, '姓名清單', NAMETMP, SCORES, '分數清單', R, MAXPOS, J, TMP);

    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const outputLoop = repeat(b, flag, () => numShadow(5), parent => {
        const appendRank = appendToResult(b, parent, RESULT, '結果', id => getVar(b, id, I, 'i'));
        const appendName = appendToResult(b, parent, RESULT, '結果', id => itemOfList(b, id, NAMES, '姓名清單', getVar(b, id, I, 'i')));
        const appendScore = appendToResult(b, parent, RESULT, '結果', id => itemOfList(b, id, SCORES, '分數清單', getVar(b, id, I, 'i')));
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [appendRank, appendName, appendScore, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, clearNames, readNames, clearScores, readScores, ...sortSteps, setResult0, setI1, outputLoop, sayId]);
    writeTask(M108, 'seclect-011', b);
})();

(function buildSeclect012() {
    const b = createBuilder();
    const NAMES = b.addList('v_names', '姓名清單');
    const NAMETMP = b.addVariable('v_nametmp', '姓名暫存讀取');
    const LIST1 = b.addList('v_list1', '國文清單');
    const LIST1TMP = b.addVariable('v_list1tmp', '國文暫存讀取');
    const LIST2 = b.addList('v_list2', '數學清單');
    const LIST2TMP = b.addVariable('v_list2tmp', '數學暫存讀取');
    const TOTAL = b.addList('v_total', '總分清單');
    const R = b.addVariable('v_r', 'r');
    const MAXPOS = b.addVariable('v_maxpos', '最高分位置');
    const J = b.addVariable('v_j', 'j');
    const TMP = b.addVariable('v_tmp', '暫存');
    const RESULT = b.addVariable('v_result', '結果');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const [clearNames, readNames] = readFixedIntoList(b, flag, 5, NAMES, '姓名清單', NAMETMP, '姓名暫存讀取');
    const [clearList1, readList1] = readFixedIntoList(b, flag, 5, LIST1, '國文清單', LIST1TMP, '國文暫存讀取');
    const [clearList2, readList2] = readFixedIntoList(b, flag, 5, LIST2, '數學清單', LIST2TMP, '數學暫存讀取');

    const clearTotal = deleteAllOfList(b, flag, TOTAL, '總分清單');
    const setI0 = setVar(b, flag, I, 'i', numShadow(1));
    const computeTotalLoop = repeat(b, flag, () => numShadow(5), parent => {
        const addId = addToList(b, parent, TOTAL, '總分清單', add(b, parent, itemOfList(b, parent, LIST1, '國文清單', getVar(b, parent, I, 'i')), itemOfList(b, parent, LIST2, '數學清單', getVar(b, parent, I, 'i'))));
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [addId, incI];
    });

    const sortSteps = linkedSelectionSortDescending(b, flag, 5, NAMES, '姓名清單', NAMETMP, TOTAL, '總分清單', R, MAXPOS, J, TMP);

    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const outputLoop = repeat(b, flag, () => numShadow(5), parent => {
        const appendName = appendToResult(b, parent, RESULT, '結果', id => itemOfList(b, id, NAMES, '姓名清單', getVar(b, id, I, 'i')));
        const appendTotal = appendToResult(b, parent, RESULT, '結果', id => itemOfList(b, id, TOTAL, '總分清單', getVar(b, id, I, 'i')));
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [appendName, appendTotal, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, clearNames, readNames, clearList1, readList1, clearList2, readList2, clearTotal, setI0, computeTotalLoop, ...sortSteps, setResult0, setI1, outputLoop, sayId]);
    writeTask(M108, 'seclect-012', b);
})();

console.log('\nM1-08 手寫示範解答完成。');

// ============ M1-09-MathBasics ============
const M109 = 'M1-09-MathBasics';

(function buildMATH01001() {
    const b = createBuilder();
    const A = b.addVariable('v_a', 'A');
    const B_ = b.addVariable('v_b', 'B');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入A B'));
    const setA = setVar(b, flag, A, 'A', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow(''));
    const setB = setVar(b, flag, B_, 'B', answer(b, flag));
    const ifElseId = ifElse(b, flag, id => equals(b, id, mod_(b, id, getVar(b, id, A, 'A'), getVar(b, id, B_, 'B')), numShadow(0)),
        p1 => [say(b, p1, textShadow('YES'))],
        p2 => [say(b, p2, textShadow('NO'))]);
    chain(b, [flag, ask1, setA, ask2, setB, ifElseId]);
    writeTask(M109, 'MATH01-001', b);
})();

(function buildMATH01002() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const I = b.addVariable('v_i', 'i');
    const COUNT = b.addVariable('v_count', '因數個數');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setCount0 = setVar(b, flag, COUNT, '因數個數', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ifDivides = if_(b, parent, id => equals(b, id, mod_(b, id, getVar(b, id, N, 'N'), getVar(b, id, I, 'i')), numShadow(0)),
            p2 => [setVar(b, p2, COUNT, '因數個數', add(b, p2, getVar(b, p2, COUNT, '因數個數'), numShadow(1)))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifDivides, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, COUNT, '因數個數'));
    chain(b, [flag, ask1, setN, setCount0, setI1, loopId, sayId]);
    writeTask(M109, 'MATH01-002', b);
})();

(function buildMATH01003() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const I = b.addVariable('v_i', 'i');
    const ISPRIME = b.addVariable('v_isprime', '是否質數');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const ifElseId = ifElse(b, flag, id => lt(b, id, getVar(b, id, N, 'N'), numShadow(2)),
        p1 => [say(b, p1, textShadow('NOT'))],
        p2 => {
            const setIsPrime1 = setVar(b, p2, ISPRIME, '是否質數', numShadow(1));
            const setI2 = setVar(b, p2, I, 'i', numShadow(2));
            const loopId = repeat(b, p2,
                id => sub(b, id, getVar(b, id, N, 'N'), numShadow(2)),
                parent => {
                    const ifDivides = if_(b, parent, id => equals(b, id, mod_(b, id, getVar(b, id, N, 'N'), getVar(b, id, I, 'i')), numShadow(0)),
                        p3 => [setVar(b, p3, ISPRIME, '是否質數', numShadow(0))]);
                    const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
                    return [ifDivides, incI];
                });
            const ifElseInner = ifElse(b, p2, id => equals(b, id, getVar(b, id, ISPRIME, '是否質數'), numShadow(1)),
                p4 => [say(b, p4, textShadow('PRIME'))],
                p5 => [say(b, p5, textShadow('NOT'))]);
            return [setIsPrime1, setI2, loopId, ifElseInner];
        });
    chain(b, [flag, ask1, setN, ifElseId]);
    writeTask(M109, 'MATH01-003', b);
})();

(function buildMATH01004() {
    const b = createBuilder();
    const A = b.addVariable('v_a', 'A');
    const B_ = b.addVariable('v_b', 'B');
    const TMP = b.addVariable('v_tmp', '暫存');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入A B'));
    const setA = setVar(b, flag, A, 'A', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow(''));
    const setB = setVar(b, flag, B_, 'B', answer(b, flag));
    const loopId = repeatUntil(b, flag, id => equals(b, id, getVar(b, id, B_, 'B'), numShadow(0)), parent => {
        const setTmp = setVar(b, parent, TMP, '暫存', getVar(b, parent, B_, 'B'));
        const setB2 = setVar(b, parent, B_, 'B', mod_(b, parent, getVar(b, parent, A, 'A'), getVar(b, parent, B_, 'B')));
        const setA2 = setVar(b, parent, A, 'A', getVar(b, parent, TMP, '暫存'));
        return [setTmp, setB2, setA2];
    });
    const sayId = say(b, flag, getVar(b, flag, A, 'A'));
    chain(b, [flag, ask1, setA, ask2, setB, loopId, sayId]);
    writeTask(M109, 'MATH01-004', b);
})();

(function buildMATH01005() {
    const b = createBuilder();
    const A = b.addVariable('v_a', 'A');
    const B_ = b.addVariable('v_b', 'B');
    const A0 = b.addVariable('v_a0', 'A原值');
    const B0 = b.addVariable('v_b0', 'B原值');
    const TMP = b.addVariable('v_tmp', '暫存');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入A B'));
    const setA = setVar(b, flag, A, 'A', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow(''));
    const setB = setVar(b, flag, B_, 'B', answer(b, flag));
    const setA0 = setVar(b, flag, A0, 'A原值', getVar(b, flag, A, 'A'));
    const setB0 = setVar(b, flag, B0, 'B原值', getVar(b, flag, B_, 'B'));
    const loopId = repeatUntil(b, flag, id => equals(b, id, getVar(b, id, B_, 'B'), numShadow(0)), parent => {
        const setTmp = setVar(b, parent, TMP, '暫存', getVar(b, parent, B_, 'B'));
        const setB2 = setVar(b, parent, B_, 'B', mod_(b, parent, getVar(b, parent, A, 'A'), getVar(b, parent, B_, 'B')));
        const setA2 = setVar(b, parent, A, 'A', getVar(b, parent, TMP, '暫存'));
        return [setTmp, setB2, setA2];
    });
    const lcmValue = div(b, flag, mul(b, flag, getVar(b, flag, A0, 'A原值'), getVar(b, flag, B0, 'B原值')), getVar(b, flag, A, 'A'));
    const sayId = say(b, flag, lcmValue);
    chain(b, [flag, ask1, setA, ask2, setB, setA0, setB0, loopId, sayId]);
    writeTask(M109, 'MATH01-005', b);
})();

(function buildMATH01006() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const I = b.addVariable('v_i', 'i');
    const SUM = b.addVariable('v_sum', '位數和');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '位數和', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => length_(b, id, getVar(b, id, N, 'N')), parent => {
        const addSum = setVar(b, parent, SUM, '位數和', add(b, parent, getVar(b, parent, SUM, '位數和'), letterOf(b, parent, getVar(b, parent, I, 'i'), getVar(b, parent, N, 'N'))));
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [addSum, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, SUM, '位數和'));
    chain(b, [flag, ask1, setN, setSum0, setI1, loopId, sayId]);
    writeTask(M109, 'MATH01-006', b);
})();

(function buildMATH01007() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const I = b.addVariable('v_i', 'i');
    const REV = b.addVariable('v_rev', '反轉字串');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setRev0 = setVar(b, flag, REV, '反轉字串', textShadow(''));
    const setI = setVar(b, flag, I, 'i', length_(b, flag, getVar(b, flag, N, 'N')));
    const loopId = repeatUntil(b, flag, id => lt(b, id, getVar(b, id, I, 'i'), numShadow(1)), parent => {
        const appendId = setVar(b, parent, REV, '反轉字串', join(b, parent, getVar(b, parent, REV, '反轉字串'), letterOf(b, parent, getVar(b, parent, I, 'i'), getVar(b, parent, N, 'N'))));
        const decI = setVar(b, parent, I, 'i', sub(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [appendId, decI];
    });
    const sayId = say(b, flag, add(b, flag, getVar(b, flag, REV, '反轉字串'), numShadow(0)));
    chain(b, [flag, ask1, setN, setRev0, setI, loopId, sayId]);
    writeTask(M109, 'MATH01-007', b);
})();

(function buildMATH01008() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUM = b.addVariable('v_num', '數字');
    const COUNT = b.addVariable('v_count', '數量');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setCount0 = setVar(b, flag, COUNT, '數量', numShadow(0));
    const loopId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const ifDivides = if_(b, parent, id => equals(b, id, mod_(b, id, getVar(b, id, NUM, '數字'), numShadow(3)), numShadow(0)),
            p2 => [setVar(b, p2, COUNT, '數量', add(b, p2, getVar(b, p2, COUNT, '數量'), numShadow(1)))]);
        return [ask2, setNum, ifDivides];
    });
    const sayId = say(b, flag, getVar(b, flag, COUNT, '數量'));
    chain(b, [flag, ask1, setN, setCount0, loopId, sayId]);
    writeTask(M109, 'MATH01-008', b);
})();

console.log('\nM1-09 手寫示範解答完成。');

// ============ M1-10-MathGCD ============
const M110 = 'M1-10-MathGCD';

// A-09-0/A-09-1/A-13-0/A-13-1：跟JSA00同ID同題目同算法，直接複製既有手寫解答重複使用。
copyExisting('JSA00', 'A-09-0', M110, 'A-09-0');
copyExisting('JSA00', 'A-09-1', M110, 'A-09-1');
copyExisting('JSA00', 'A-13-0', M110, 'A-13-0');
copyExisting('JSA00', 'A-13-1', M110, 'A-13-1');

(function buildTYTN03() {
    const b = createBuilder();
    const A = b.addVariable('v_a', 'A');
    const B_ = b.addVariable('v_b', 'B');
    const N = b.addVariable('v_n', 'N');
    const ISPRIME = b.addVariable('v_isprime', '是否質數');
    const J = b.addVariable('v_j', 'j');
    const SUM = b.addVariable('v_sum', '總和');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入A'));
    const setA = setVar(b, flag, A, 'A', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow(''));
    const setB = setVar(b, flag, B_, 'B', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));
    const setN0 = setVar(b, flag, N, 'N', getVar(b, flag, A, 'A'));

    const outerLoop = repeatUntil(b, flag,
        id => gt(b, id, getVar(b, id, N, 'N'), getVar(b, id, B_, 'B')),
        parent => {
            const ifElseId = ifElse(b, parent, id => lt(b, id, getVar(b, id, N, 'N'), numShadow(2)),
                p1 => [setVar(b, p1, ISPRIME, '是否質數', numShadow(0))],
                p2 => {
                    const setIsPrime1 = setVar(b, p2, ISPRIME, '是否質數', numShadow(1));
                    const setJ2 = setVar(b, p2, J, 'j', numShadow(2));
                    const innerLoop = repeat(b, p2,
                        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(2)),
                        parentInner => {
                            const ifDivides = if_(b, parentInner, id => equals(b, id, mod_(b, id, getVar(b, id, N, 'N'), getVar(b, id, J, 'j')), numShadow(0)),
                                p3 => [setVar(b, p3, ISPRIME, '是否質數', numShadow(0))]);
                            const incJ = setVar(b, parentInner, J, 'j', add(b, parentInner, getVar(b, parentInner, J, 'j'), numShadow(1)));
                            return [ifDivides, incJ];
                        });
                    return [setIsPrime1, setJ2, innerLoop];
                });
            const ifAddSum = if_(b, parent, id => equals(b, id, getVar(b, id, ISPRIME, '是否質數'), numShadow(1)),
                p4 => [setVar(b, p4, SUM, '總和', add(b, p4, getVar(b, p4, SUM, '總和'), getVar(b, p4, N, 'N')))]);
            const incN = setVar(b, parent, N, 'N', add(b, parent, getVar(b, parent, N, 'N'), numShadow(1)));
            return [ifElseId, ifAddSum, incN];
        });

    const sayId = say(b, flag, getVar(b, flag, SUM, '總和'));
    chain(b, [flag, ask1, setA, ask2, setB, setSum0, setN0, outerLoop, sayId]);
    writeTask(M110, 'TYTN-03', b);
})();

(function buildCyjunior007() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const PREV = b.addVariable('v_prev', '前一項');
    const CUR = b.addVariable('v_cur', '目前項');
    const NEXT = b.addVariable('v_next', '下一項');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setPrev = setVar(b, flag, PREV, '前一項', numShadow(1));
    const setCur = setVar(b, flag, CUR, '目前項', numShadow(2));

    const ifElseId = ifElse(b, flag, id => lt(b, id, getVar(b, id, N, 'N'), numShadow(2)),
        p1 => [say(b, p1, numShadow(1))],
        p2 => {
            const ifElseInner = ifElse(b, p2, id => equals(b, id, getVar(b, id, N, 'N'), numShadow(2)),
                p3 => [say(b, p3, numShadow(2))],
                p4 => {
                    const setI3 = setVar(b, p4, I, 'i', numShadow(3));
                    const loopId = repeat(b, p4,
                        id => sub(b, id, getVar(b, id, N, 'N'), numShadow(2)),
                        parent => {
                            const setNext = setVar(b, parent, NEXT, '下一項', add(b, parent, getVar(b, parent, PREV, '前一項'), getVar(b, parent, CUR, '目前項')));
                            const advancePrev = setVar(b, parent, PREV, '前一項', getVar(b, parent, CUR, '目前項'));
                            const advanceCur = setVar(b, parent, CUR, '目前項', getVar(b, parent, NEXT, '下一項'));
                            const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
                            return [setNext, advancePrev, advanceCur, incI];
                        });
                    const sayId2 = say(b, p4, getVar(b, p4, CUR, '目前項'));
                    return [setI3, loopId, sayId2];
                });
            return [ifElseInner];
        });

    chain(b, [flag, ask1, setN, setPrev, setCur, ifElseId]);
    writeTask(M110, 'cyjunior-007', b);
})();

console.log('\nM1-10 手寫示範解答完成。');

// ============ M1-11-StackQueue ============
const M111 = 'M1-11-StackQueue';

function buildStackQueueSim(taskId, isStack) {
    const b = createBuilder();
    const M = b.addVariable('v_m', 'M');
    const OPS = b.addList('v_ops', '指令清單');
    const OP = b.addVariable('v_op', '指令');
    const VALS = b.addList('v_vals', '數值清單');
    const VAL = b.addVariable('v_val', '數值');
    const DATA = b.addList('v_data', '資料');
    const I = b.addVariable('v_i', 'i');
    const RESULT = b.addVariable('v_result', '結果');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入M'));
    const setM = setVar(b, flag, M, 'M', answer(b, flag));
    const [clearOps, readOps] = readNumsIntoList(b, flag, M, OPS, '指令清單', OP, '指令');
    const [clearVals, readVals] = readNumsIntoList(b, flag, M, VALS, '數值清單', VAL, '數值');
    const clearData = deleteAllOfList(b, flag, DATA, '資料');

    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const processLoop = repeat(b, flag, id => getVar(b, id, M, 'M'), parent => {
        const ifElseId = ifElse(b, parent, id => equals(b, id, itemOfList(b, id, OPS, '指令清單', getVar(b, id, I, 'i')), numShadow(1)),
            p1 => [addToList(b, p1, DATA, '資料', itemOfList(b, p1, VALS, '數值清單', getVar(b, p1, I, 'i')))],
            p2 => [if_(b, p2, id => gt(b, id, lengthOfList(b, id, DATA, '資料'), numShadow(0)),
                p3 => [deleteItemOfList(b, p3, DATA, '資料', isStack ? lengthOfList(b, p3, DATA, '資料') : numShadow(1))])]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifElseId, incI];
    });

    const outputIfElse = ifElse(b, flag, id => equals(b, id, lengthOfList(b, id, DATA, '資料'), numShadow(0)),
        p1 => [say(b, p1, textShadow('空'))],
        p2 => {
            const setResult0 = setVar(b, p2, RESULT, '結果', textShadow(''));
            const setI2 = setVar(b, p2, I, 'i', numShadow(1));
            const outputLoop = repeat(b, p2, id => lengthOfList(b, id, DATA, '資料'), parent => {
                const appendId = appendToResult(b, parent, RESULT, '結果', id => itemOfList(b, id, DATA, '資料', getVar(b, id, I, 'i')));
                const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
                return [appendId, incI];
            });
            const sayId = say(b, p2, getVar(b, p2, RESULT, '結果'));
            return [setResult0, setI2, outputLoop, sayId];
        });

    chain(b, [flag, ask1, setM, clearOps, readOps, clearVals, readVals, clearData, setI1, processLoop, outputIfElse]);
    writeTask(M111, taskId, b);
}

buildStackQueueSim('M1-11-01', true);
buildStackQueueSim('M1-11-02', false);
copyExisting(M111, 'M1-11-02', M111, 'M1-11-05');

(function buildM111_03() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const DEPTH = b.addVariable('v_depth', '深度');
    const INVALID = b.addVariable('v_invalid', '不合法標記');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入S'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const setDepth0 = setVar(b, flag, DEPTH, '深度', numShadow(0));
    const setInvalid0 = setVar(b, flag, INVALID, '不合法標記', numShadow(0));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => length_(b, id, getVar(b, id, S, 'S')), parent => {
        const ifElseId = ifElse(b, parent, id => equals(b, id, letterOf(b, id, getVar(b, id, I, 'i'), getVar(b, id, S, 'S')), textShadow('(')),
            p1 => [setVar(b, p1, DEPTH, '深度', add(b, p1, getVar(b, p1, DEPTH, '深度'), numShadow(1)))],
            p2 => [ifElse(b, p2, id => gt(b, id, getVar(b, id, DEPTH, '深度'), numShadow(0)),
                p3 => [setVar(b, p3, DEPTH, '深度', sub(b, p3, getVar(b, p3, DEPTH, '深度'), numShadow(1)))],
                p4 => [setVar(b, p4, INVALID, '不合法標記', numShadow(1))])]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifElseId, incI];
    });
    const finalIfElse = ifElse(b, flag, id => and_(b, id, equals(b, id, getVar(b, id, DEPTH, '深度'), numShadow(0)), equals(b, id, getVar(b, id, INVALID, '不合法標記'), numShadow(0))),
        p1 => [say(b, p1, textShadow('合法'))],
        p2 => [say(b, p2, textShadow('不合法'))]);
    chain(b, [flag, ask1, setS, setDepth0, setInvalid0, setI1, loopId, finalIfElse]);
    writeTask(M111, 'M1-11-03', b);
})();

(function buildM111_04() {
    const b = createBuilder();
    const M = b.addVariable('v_m', 'M');
    const OPS = b.addList('v_ops', '指令清單');
    const OP = b.addVariable('v_op', '指令');
    const VALS = b.addList('v_vals', '數值清單');
    const VAL = b.addVariable('v_val', '數值');
    const DATA = b.addList('v_data', '資料');
    const I = b.addVariable('v_i', 'i');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入M'));
    const setM = setVar(b, flag, M, 'M', answer(b, flag));
    const [clearOps, readOps] = readNumsIntoList(b, flag, M, OPS, '指令清單', OP, '指令');
    const [clearVals, readVals] = readNumsIntoList(b, flag, M, VALS, '數值清單', VAL, '數值');
    const clearData = deleteAllOfList(b, flag, DATA, '資料');
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const processLoop = repeat(b, flag, id => getVar(b, id, M, 'M'), parent => {
        const ifElseId = ifElse(b, parent, id => equals(b, id, itemOfList(b, id, OPS, '指令清單', getVar(b, id, I, 'i')), numShadow(1)),
            p1 => [addToList(b, p1, DATA, '資料', itemOfList(b, p1, VALS, '數值清單', getVar(b, p1, I, 'i')))],
            p2 => [if_(b, p2, id => gt(b, id, lengthOfList(b, id, DATA, '資料'), numShadow(0)),
                p3 => [deleteItemOfList(b, p3, DATA, '資料', lengthOfList(b, p3, DATA, '資料'))])]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [ifElseId, incI];
    });
    const outputIfElse = ifElse(b, flag, id => equals(b, id, lengthOfList(b, id, DATA, '資料'), numShadow(0)),
        p1 => [say(b, p1, numShadow(0))],
        p2 => [say(b, p2, itemOfList(b, p2, DATA, '資料', lengthOfList(b, p2, DATA, '資料')))]);
    chain(b, [flag, ask1, setM, clearOps, readOps, clearVals, readVals, clearData, setI1, processLoop, outputIfElse]);
    writeTask(M111, 'M1-11-04', b);
})();

(function buildM111_06() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUM = b.addVariable('v_num', '數字');
    const ODDQ = b.addList('v_oddq', '奇數佇列');
    const EVENS = b.addList('v_evens', '偶數堆疊');
    const QPTR = b.addVariable('v_qptr', '佇列指標');
    const SPTR = b.addVariable('v_sptr', '堆疊指標');
    const RESULT = b.addVariable('v_result', '結果');
    const flag = whenFlagClicked(b);
    const clearOddq = deleteAllOfList(b, flag, ODDQ, '奇數佇列');
    const clearEvens = deleteAllOfList(b, flag, EVENS, '偶數堆疊');
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const readLoop = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '數字', answer(b, parent));
        const ifElseId = ifElse(b, parent, id => equals(b, id, mod_(b, id, getVar(b, id, NUM, '數字'), numShadow(2)), numShadow(0)),
            p1 => [addToList(b, p1, EVENS, '偶數堆疊', getVar(b, p1, NUM, '數字'))],
            p2 => [addToList(b, p2, ODDQ, '奇數佇列', getVar(b, p2, NUM, '數字'))]);
        return [ask2, setNum, ifElseId];
    });

    const setQptr1 = setVar(b, flag, QPTR, '佇列指標', numShadow(1));
    const setSptr = setVar(b, flag, SPTR, '堆疊指標', lengthOfList(b, flag, EVENS, '偶數堆疊'));
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));

    const mainLoop = repeatUntil(b, flag,
        id => and_(b, id, gt(b, id, getVar(b, id, QPTR, '佇列指標'), lengthOfList(b, id, ODDQ, '奇數佇列')), lt(b, id, getVar(b, id, SPTR, '堆疊指標'), numShadow(1))),
        parent => {
            const ifQueue = if_(b, parent, id => not_(b, id, gt(b, id, getVar(b, id, QPTR, '佇列指標'), lengthOfList(b, id, ODDQ, '奇數佇列'))),
                p2 => [
                    appendToResult(b, p2, RESULT, '結果', id => itemOfList(b, id, ODDQ, '奇數佇列', getVar(b, id, QPTR, '佇列指標'))),
                    setVar(b, p2, QPTR, '佇列指標', add(b, p2, getVar(b, p2, QPTR, '佇列指標'), numShadow(1)))
                ]);
            const ifStack = if_(b, parent, id => not_(b, id, lt(b, id, getVar(b, id, SPTR, '堆疊指標'), numShadow(1))),
                p2 => [
                    appendToResult(b, p2, RESULT, '結果', id => itemOfList(b, id, EVENS, '偶數堆疊', getVar(b, id, SPTR, '堆疊指標'))),
                    setVar(b, p2, SPTR, '堆疊指標', sub(b, p2, getVar(b, p2, SPTR, '堆疊指標'), numShadow(1)))
                ]);
            return [ifQueue, ifStack];
        });

    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, clearOddq, clearEvens, ask1, setN, readLoop, setQptr1, setSptr, setResult0, mainLoop, sayId]);
    writeTask(M111, 'M1-11-06', b);
})();

console.log('\nM1-11 手寫示範解答完成。');

// ============ M1-12-DebugFormat ============
// M1-12-01/M1-12-05 starterXml轉換器可以直接自動轉換（不需要手寫），
// 這裡只補M1-12-02/03/04/06四題（分別用到text_length/lists_create_with/logic_ternary，轉換器不支援）。
const M112 = 'M1-12-DebugFormat';

(function buildM112_02() {
    const b = createBuilder();
    const S = b.addVariable('v_s', 'S');
    const L = b.addVariable('v_l', 'L');
    const I = b.addVariable('v_i', 'i');
    const REM = b.addVariable('v_rem', '剩餘位數');
    const RESULT = b.addVariable('v_result', '結果');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入金額'));
    const setS = setVar(b, flag, S, 'S', answer(b, flag));
    const setL = setVar(b, flag, L, 'L', length_(b, flag, getVar(b, flag, S, 'S')));
    const setResult0 = setVar(b, flag, RESULT, '結果', textShadow(''));
    const setI1 = setVar(b, flag, I, 'i', numShadow(1));
    const loopId = repeat(b, flag, id => getVar(b, id, L, 'L'), parent => {
        const appendDigit = setVar(b, parent, RESULT, '結果', join(b, parent, getVar(b, parent, RESULT, '結果'), letterOf(b, parent, getVar(b, parent, I, 'i'), getVar(b, parent, S, 'S'))));
        const setRem = setVar(b, parent, REM, '剩餘位數', sub(b, parent, getVar(b, parent, L, 'L'), getVar(b, parent, I, 'i')));
        const ifComma = if_(b, parent, id => and_(b, id, gt(b, id, getVar(b, id, REM, '剩餘位數'), numShadow(0)), equals(b, id, mod_(b, id, getVar(b, id, REM, '剩餘位數'), numShadow(3)), numShadow(0))),
            p2 => [setVar(b, p2, RESULT, '結果', join(b, p2, getVar(b, p2, RESULT, '結果'), textShadow(',')))]);
        const incI = setVar(b, parent, I, 'i', add(b, parent, getVar(b, parent, I, 'i'), numShadow(1)));
        return [appendDigit, setRem, ifComma, incI];
    });
    const sayId = say(b, flag, getVar(b, flag, RESULT, '結果'));
    chain(b, [flag, ask1, setS, setL, setResult0, setI1, loopId, sayId]);
    writeTask(M112, 'M1-12-02', b);
})();

(function buildM112_03() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUM = b.addVariable('v_num', '分數');
    const SUM = b.addVariable('v_sum', '總和');
    const SCALED = b.addVariable('v_scaled', '放大值');
    const INTPART = b.addVariable('v_intpart', '整數部分');
    const DECPART = b.addVariable('v_decpart', '小數部分');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setSum0 = setVar(b, flag, SUM, '總和', numShadow(0));
    const loopId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '分數', answer(b, parent));
        const addSum = setVar(b, parent, SUM, '總和', add(b, parent, getVar(b, parent, SUM, '總和'), getVar(b, parent, NUM, '分數')));
        return [ask2, setNum, addSum];
    });
    const setScaled = setVar(b, flag, SCALED, '放大值', round(b, flag, div(b, flag, mul(b, flag, getVar(b, flag, SUM, '總和'), numShadow(100)), getVar(b, flag, N, 'N'))));
    const setIntPart = setVar(b, flag, INTPART, '整數部分', floor_(b, flag, div(b, flag, getVar(b, flag, SCALED, '放大值'), numShadow(100))));
    const setDecPart = setVar(b, flag, DECPART, '小數部分', sub(b, flag, getVar(b, flag, SCALED, '放大值'), mul(b, flag, getVar(b, flag, INTPART, '整數部分'), numShadow(100))));
    const ifElseId = ifElse(b, flag, id => lt(b, id, getVar(b, id, DECPART, '小數部分'), numShadow(10)),
        p1 => [say(b, p1, join(b, p1, join(b, p1, getVar(b, p1, INTPART, '整數部分'), textShadow('.0')), getVar(b, p1, DECPART, '小數部分')))],
        p2 => [say(b, p2, join(b, p2, join(b, p2, getVar(b, p2, INTPART, '整數部分'), textShadow('.')), getVar(b, p2, DECPART, '小數部分')))]);
    chain(b, [flag, ask1, setN, setSum0, loopId, setScaled, setIntPart, setDecPart, ifElseId]);
    writeTask(M112, 'M1-12-03', b);
})();

(function buildM112_04() {
    const b = createBuilder();
    const A = b.addVariable('v_a', 'A');
    const B_ = b.addVariable('v_b', 'B');
    const SCALED = b.addVariable('v_scaled', '放大值');
    const INTPART = b.addVariable('v_intpart', '整數部分');
    const DECPART = b.addVariable('v_decpart', '小數部分');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入A B'));
    const setA = setVar(b, flag, A, 'A', answer(b, flag));
    const ask2 = askAndWait(b, flag, textShadow(''));
    const setB = setVar(b, flag, B_, 'B', answer(b, flag));
    const ifElseId = ifElse(b, flag, id => equals(b, id, getVar(b, id, B_, 'B'), numShadow(0)),
        p1 => [say(b, p1, textShadow('無法計算'))],
        p2 => {
            const setScaled = setVar(b, p2, SCALED, '放大值', round(b, p2, div(b, p2, mul(b, p2, getVar(b, p2, A, 'A'), numShadow(100)), getVar(b, p2, B_, 'B'))));
            const setIntPart = setVar(b, p2, INTPART, '整數部分', floor_(b, p2, div(b, p2, getVar(b, p2, SCALED, '放大值'), numShadow(100))));
            const setDecPart = setVar(b, p2, DECPART, '小數部分', sub(b, p2, getVar(b, p2, SCALED, '放大值'), mul(b, p2, getVar(b, p2, INTPART, '整數部分'), numShadow(100))));
            const innerIfElse = ifElse(b, p2, id => lt(b, id, getVar(b, id, DECPART, '小數部分'), numShadow(10)),
                p3 => [say(b, p3, join(b, p3, join(b, p3, getVar(b, p3, INTPART, '整數部分'), textShadow('.0')), getVar(b, p3, DECPART, '小數部分')))],
                p4 => [say(b, p4, join(b, p4, join(b, p4, getVar(b, p4, INTPART, '整數部分'), textShadow('.')), getVar(b, p4, DECPART, '小數部分')))]);
            return [setScaled, setIntPart, setDecPart, innerIfElse];
        });
    chain(b, [flag, ask1, setA, ask2, setB, ifElseId]);
    writeTask(M112, 'M1-12-04', b);
})();

(function buildM112_06() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const NUM = b.addVariable('v_num', '分數');
    const MAX = b.addVariable('v_max', '最大值');
    const MIN = b.addVariable('v_min', '最小值');
    const flag = whenFlagClicked(b);
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));
    const setMax0 = setVar(b, flag, MAX, '最大值', numShadow(-999999999));
    const setMin0 = setVar(b, flag, MIN, '最小值', numShadow(999999999));
    const loopId = repeat(b, flag, id => getVar(b, id, N, 'N'), parent => {
        const ask2 = askAndWait(b, parent, textShadow(''));
        const setNum = setVar(b, parent, NUM, '分數', answer(b, parent));
        const ifMax = if_(b, parent, id => gt(b, id, getVar(b, id, NUM, '分數'), getVar(b, id, MAX, '最大值')),
            p2 => [setVar(b, p2, MAX, '最大值', getVar(b, p2, NUM, '分數'))]);
        const ifMin = if_(b, parent, id => lt(b, id, getVar(b, id, NUM, '分數'), getVar(b, id, MIN, '最小值')),
            p2 => [setVar(b, p2, MIN, '最小值', getVar(b, p2, NUM, '分數'))]);
        return [ask2, setNum, ifMax, ifMin];
    });
    const sayId = say(b, flag, join(b, flag, join(b, flag, getVar(b, flag, MAX, '最大值'), textShadow(' ')), getVar(b, flag, MIN, '最小值')));
    chain(b, [flag, ask1, setN, setMax0, setMin0, loopId, sayId]);
    writeTask(M112, 'M1-12-06', b);
})();

console.log('\nM1-12 手寫示範解答完成。');
