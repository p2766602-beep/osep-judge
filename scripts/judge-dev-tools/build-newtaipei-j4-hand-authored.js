// 手寫114JNewTaipei-4（王牌教練）的示範解答。
//
// 原始starterXml（YDWS-CodingBank/BlocklyYdws的Blockly版本）用一個硬寫死的「24種排列
// 的巢狀清單」（lists_create_with包lists_create_with）窮舉所有排法，但Scratch的清單
// 不支援「清單的清單」（清單只能存純量，不能存另一個清單），xml-to-scratch.js無法
// 自動轉換這種結構，這題也不適合比照其他缺口那樣「教轉換器認得一種新積木」來解決——
// 根本問題是兩邊的資料模型不相容，不是積木類型不支援。
//
// 解法：不用清單存排列，改成4層巢狀迴圈直接窮舉i1,i2,i3,i4∈{1..N}的所有組合，
// 用一個全部兩兩不相等的檢查取代「事先列好24種排列」，數學上完全等價（N=4時24種
// 排列、N=5時120種排列，這裡窮舉N^4種組合、其中通過兩兩不相等檢查的恰好就是排列
// 數，對N≤5的規模效能完全沒問題）。
//
// 用法：node scripts/judge-dev-tools/build-newtaipei-j4-hand-authored.js

const fs = require('fs');
const path = require('path');
const {
    createBuilder, numShadow, textShadow, chain,
    whenFlagClicked, askAndWait, answer, say, setVar, getVar,
    add, gt, lt, not_, and_,
    repeatUntil, if_, ifElse, equals,
    addToList, itemOfList, deleteAllOfList
} = require('./hand-author-builder.js');

function writeTask(courseFolder, taskId, b) {
    const outDir = path.join(__dirname, 'hand-authored-answers', courseFolder);
    fs.mkdirSync(outDir, {recursive: true});
    const outPath = path.join(outDir, `${taskId}.json`);
    fs.writeFileSync(outPath, JSON.stringify({variables: b.variables, blocks: b.blocks, lists: b.lists}, null, 2), 'utf8');
    console.log('寫入', outPath);
}

const COURSE = '114JNewTaipei';

(function buildNewTaipeiJ4() {
    const b = createBuilder();
    const N = b.addVariable('v_n', 'N');
    const OI = b.addVariable('v_oi', 'oi');
    const BEST = b.addVariable('v_best', 'best');
    const TOTAL = b.addVariable('v_total', 'total');
    const MAX12 = b.addVariable('v_max12', 'max12');
    const MAX23 = b.addVariable('v_max23', 'max23');
    const MAX34 = b.addVariable('v_max34', 'max34');
    const RT = b.addList('l_rt', 'rt');
    const BT = b.addList('l_bt', 'bt');

    // 4個排列索引變數，各自搭配自己的名字，避免在後面組運算式時還要反查變數名稱。
    const idx = [
        {ref: b.addVariable('v_i1', 'i1'), name: 'i1'},
        {ref: b.addVariable('v_i2', 'i2'), name: 'i2'},
        {ref: b.addVariable('v_i3', 'i3'), name: 'i3'},
        {ref: b.addVariable('v_i4', 'i4'), name: 'i4'}
    ];
    const [I1, I2, I3, I4] = idx;

    const flag = whenFlagClicked(b);
    const clearRt = deleteAllOfList(b, flag, RT, 'rt');
    const clearBt = deleteAllOfList(b, flag, BT, 'bt');
    const ask1 = askAndWait(b, flag, textShadow('請輸入N'));
    const setN = setVar(b, flag, N, 'N', answer(b, flag));

    // 讀入N位選手的跑步時間/接棒時間，依序append進rt/bt（不用像原本Blockly版本那樣
    // 先lists_repeat(0,N)佔位再replaceItemOfList，依序append結果完全一樣、寫法更簡單）。
    const setOi1 = setVar(b, flag, OI, 'oi', numShadow(1));
    const readLoop = repeatUntil(b, flag,
        id => gt(b, id, getVar(b, id, OI, 'oi'), getVar(b, id, N, 'N')),
        parent => {
            const askRt = askAndWait(b, parent, textShadow(''));
            const addRt = addToList(b, parent, RT, 'rt', answer(b, parent));
            const askBt = askAndWait(b, parent, textShadow(''));
            const addBt = addToList(b, parent, BT, 'bt', answer(b, parent));
            const incOi = setVar(b, parent, OI, 'oi', add(b, parent, getVar(b, parent, OI, 'oi'), numShadow(1)));
            return [askRt, addRt, askBt, addBt, incOi];
        });

    const setBest = setVar(b, flag, BEST, 'best', numShadow(999999));

    // 兩兩不相等檢查：6組pairwise inequality全部AND起來，等價於「i1,i2,i3,i4是一組排列」。
    function buildDistinctCheck(parent) {
        const pairs = [[I1, I2], [I1, I3], [I1, I4], [I2, I3], [I2, I4], [I3, I4]];
        const notEquals = ([a, bb]) => not_(b, parent, equals(b, parent, getVar(b, parent, a.ref, a.name), getVar(b, parent, bb.ref, bb.name)));
        return pairs.map(notEquals).reduce((acc, cur) => and_(b, parent, acc, cur));
    }

    // max(bt[a], bt[b])，hoist成一個if-else把結果存進maxVarRef/maxVarName再讀出來
    // （Scratch沒有max reporter，跟math_constrain同一種「沒有原生積木就用if-else+
    // 暫時變數」手法）。
    function buildMaxBt(parent, aIdx, bIdx, maxVarRef, maxVarName) {
        return ifElse(b, parent,
            id => gt(b, id, itemOfList(b, id, BT, 'bt', getVar(b, id, aIdx.ref, aIdx.name)), itemOfList(b, id, BT, 'bt', getVar(b, id, bIdx.ref, bIdx.name))),
            thenP => [setVar(b, thenP, maxVarRef, maxVarName, itemOfList(b, thenP, BT, 'bt', getVar(b, thenP, aIdx.ref, aIdx.name)))],
            elseP => [setVar(b, elseP, maxVarRef, maxVarName, itemOfList(b, elseP, BT, 'bt', getVar(b, elseP, bIdx.ref, bIdx.name)))]
        );
    }

    function buildInnermostBody(parent) {
        const checkId = if_(b, parent, buildDistinctCheck, ifParent => {
            const setMax12 = buildMaxBt(ifParent, I1, I2, MAX12, 'max12');
            const setMax23 = buildMaxBt(ifParent, I2, I3, MAX23, 'max23');
            const setMax34 = buildMaxBt(ifParent, I3, I4, MAX34, 'max34');

            const sumRt = idx.reduce(
                (acc, cur) => add(b, ifParent, acc, itemOfList(b, ifParent, RT, 'rt', getVar(b, ifParent, cur.ref, cur.name))),
                numShadow(0)
            );
            const sumHandoff = add(b, ifParent,
                add(b, ifParent, getVar(b, ifParent, MAX12, 'max12'), getVar(b, ifParent, MAX23, 'max23')),
                getVar(b, ifParent, MAX34, 'max34'));
            const setTotal = setVar(b, ifParent, TOTAL, 'total', add(b, ifParent, sumRt, sumHandoff));

            const updateBest = if_(b, ifParent,
                id => lt(b, id, getVar(b, id, TOTAL, 'total'), getVar(b, id, BEST, 'best')),
                thenP => [setVar(b, thenP, BEST, 'best', getVar(b, thenP, TOTAL, 'total'))]
            );
            return [setMax12, setMax23, setMax34, setTotal, updateBest];
        });
        return checkId;
    }

    // 4層巢狀迴圈窮舉i1,i2,i3,i4∈{1..N}，由內而外組裝（buildLoop負責第depth層，
    // depth=4時放真正的計算本體，其餘層只是「設i=1、repeat until i>N、i遞增」的外殼）。
    function buildLoop(depth, parent) {
        const cur = idx[depth];
        const setInit = setVar(b, parent, cur.ref, cur.name, numShadow(1));
        const loopId = repeatUntil(b, parent,
            id => gt(b, id, getVar(b, id, cur.ref, cur.name), getVar(b, id, N, 'N')),
            loopParent => {
                const bodyIds = depth === idx.length - 1
                    ? [buildInnermostBody(loopParent)]
                    : buildLoop(depth + 1, loopParent);
                const incId = setVar(b, loopParent, cur.ref, cur.name, add(b, loopParent, getVar(b, loopParent, cur.ref, cur.name), numShadow(1)));
                return [...bodyIds, incId];
            });
        return [setInit, loopId];
    }

    const permLoopIds = buildLoop(0, flag);
    const sayId = say(b, flag, getVar(b, flag, BEST, 'best'));

    chain(b, [flag, clearRt, clearBt, ask1, setN, setOi1, readLoop, setBest, ...permLoopIds, sayId]);
    writeTask(COURSE, 'NewTaipei-J-4', b);
})();

console.log('\n114JNewTaipei-4 手寫示範解答完成。');
