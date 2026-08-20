// 批次驗證：對build-m0-course-sb3.js產生的每一份.sb3答案，用正式tw-judge-engine.js模組
// 跑BlocklyYdws原始testCases，確認每題都能拿到滿分。

const fs = require('fs');
const path = require('path');
const VM = require('scratch-vm');
const {gradeSubmission, prepareVmForGrading} = require('../../src/lib/tw-judge-engine.js');

const COURSES_DIR = path.join(__dirname, '../../../YDWS-CodingBank/courses');
const OUT_BASE = path.join(__dirname, '../../static/judge-content/m0');
// 這支腳本專門驗證「示範解答本身能不能拿到滿分」，2026-08-13新增的13縣市國小競賽模式
// 課程（114TCPE01~13）刻意沒有示範解答（見gen-judge-content.js/build-m0-course-sb3.js
// 同一段註解），沒有東西可驗證，所以這裡故意不跟其他兩支腳本的COURSE_FILES保持一致——
// 加進來只會讓每題都判SKIP、把allPass拖成false，變成誤報而已，不要加。
const COURSE_FILES = ['M0-01-BasicOutput.js', 'M0-02-Variables.js', 'M0-03-Conditionals.js', 'M0-04-LoopsAndSum.js', 'M0-05-ListBasics.js', 'M0-06-MinMaxExtra.js', 'M1-01-ListSearch.js', 'M1-02-ListAnalysis.js', 'M1-03-ListStats.js', 'M1-04-ListIndex.js', 'M1-05-StringBasics.js', 'M1-06-StringFormat.js', 'M1-07-SortBasics.js', 'M1-08-SortApplied.js', 'M1-09-MathBasics.js', 'M1-10-MathGCD.js', 'M1-11-StackQueue.js', 'M1-12-DebugFormat.js', 'JSB00.js', 'JSA00.js',
    // 2026-08-20 Phase 2：114J＋114E有真正的示範解答可以驗證，跟114TCPE/114TCPJ
    // （純競賽模式、沒有demo）不同，特意加進來。
    '114JChaiyi.js', '114JChaiyiC.js', '114JChanghua.js', '114JHsinchu.js', '114JHsinchuC.js', '114JHualien.js', '114JKeelung.js', '114JNantou.js', '114JNewTaipei.js', '114JPenghu.js', '114JTaichung.js', '114JTainan.js', '114JTaipei.js', '114JTaitung.js', '114JTaoyuan.js', '114JYunlin.js',
    '114EChaiyi.js', '114EChaiyiC.js', '114EChanghua.js', '114EHsinchu.js', '114EHsinchuC.js', '114EHualien.js', '114EKeelung.js', '114ENantou.js', '114ENewTaipei.js', '114EPenghu.js', '114ETaichung.js', '114ETainan.js', '114ETaipei.js', '114ETaitung.js', '114ETaoyuan.js', '114EYunlin.js'];

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
