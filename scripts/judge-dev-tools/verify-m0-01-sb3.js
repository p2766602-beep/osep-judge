// 驗證正式模組 src/lib/tw-judge-engine.js（不是草稿腳本裡重複的邏輯）本身是對的。
const fs = require('fs');
const path = require('path');
const VM = require('scratch-vm');
const {gradeSubmission, prepareVmForGrading} = require('../../src/lib/tw-judge-engine.js');

const testCases = [
    {input: 'John', expectedOutput: 'Hello, John', score: 10},
    {input: 'Marry', expectedOutput: 'Hello, Marry', score: 10},
    {input: 'Sam', expectedOutput: 'Hello, Sam', score: 10},
    {input: 'Tom', expectedOutput: 'Hello, Tom', score: 10}
];

(async () => {
    const buffer = fs.readFileSync(path.join(__dirname, '../../static/judge-content/m0/M0-01-BasicOutput/A-01-0.sb3'));
    const vm = new VM();
    await vm.loadProject(buffer);
    vm.start();
    prepareVmForGrading(vm);

    const {totalScore, maxScore, results} = await gradeSubmission(vm, testCases);
    results.forEach(r => {
        console.log(`  "${r.input}" => ${r.pass ? 'PASS' : 'FAIL'}（實際："${r.actualOutput}"，逾時：${r.timedOut}）`);
    });
    console.log(`總分：${totalScore}/${maxScore}`);
    process.exit(totalScore === maxScore ? 0 : 1);
})();
