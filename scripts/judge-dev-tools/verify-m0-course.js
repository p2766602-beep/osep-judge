// 批次驗證：對build-m0-course-sb3.js產生的每一份.sb3答案，用正式tw-judge-engine.js模組
// 跑BlocklyYdws原始testCases，確認每題都能拿到滿分。

const fs = require('fs');
const path = require('path');
const VM = require('scratch-vm');
const {gradeSubmission, prepareVmForGrading} = require('../../src/lib/tw-judge-engine.js');

const COURSES_DIR = path.join(__dirname, '../../../YDWS-CodingBank/courses');
const OUT_BASE = path.join(__dirname, '../../static/judge-content/m0');
const COURSE_FILES = ['M0-01-BasicOutput.js', 'M0-02-Variables.js', 'JSB00.js', 'JSA00.js'];

function loadCourse(filename) {
    const filePath = path.join(COURSES_DIR, filename);
    const src = fs.readFileSync(filePath, 'utf8');
    const bodySrc = src.replace(/^export default/m, 'return');
    // eslint-disable-next-line no-new-func
    const factory = new Function(bodySrc);
    return factory();
}

(async () => {
    let allPass = true;
    for (const filename of COURSE_FILES) {
        const course = loadCourse(filename);
        const courseFolder = filename.replace(/\.js$/, '');
        console.log(`=== ${course.code}（${course.title}） ===`);
        for (const task of course.tasks) {
            const sb3Path = path.join(OUT_BASE, courseFolder, `${task.id}.sb3`);
            if (!fs.existsSync(sb3Path)) {
                console.log(`  [SKIP] ${task.id}：找不到 ${sb3Path}`);
                allPass = false;
                continue;
            }
            const buffer = fs.readFileSync(sb3Path);
            const vm = new VM();
            // eslint-disable-next-line no-await-in-loop
            await vm.loadProject(buffer);
            vm.start();
            prepareVmForGrading(vm);

            // eslint-disable-next-line no-await-in-loop
            const {totalScore, maxScore, results} = await gradeSubmission(vm, task.testCases);
            // 不能只看totalScore===maxScore：BlocklyYdws來源資料裡M0-02全部testCase的score都是0，
            // 0===0會讓完全沒過的題目也「假通過」，一定要逐筆看r.pass才是真正的功能正確性驗證。
            const pass = results.every(r => r.pass);
            if (!pass) allPass = false;
            console.log(`  [${pass ? 'PASS' : 'FAIL'}] ${task.id}（${task.title}）：${totalScore}/${maxScore}（分數欄位）， ${results.filter(r => r.pass).length}/${results.length}（實際功能正確性）`);
            if (!pass) {
                results.forEach(r => {
                    if (!r.pass) {
                        console.log(`      輸入"${r.input}" 預期"${r.expectedOutput}" 實際"${r.actualOutput}"${r.timedOut ? '（逾時）' : ''}`);
                    }
                });
            }
            vm.stopAll();
        }
    }
    console.log(allPass ? '\n全部通過。' : '\n有題目未通過，見上方FAIL明細。');
    process.exit(allPass ? 0 : 1);
})();
