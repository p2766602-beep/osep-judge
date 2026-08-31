// 產生src/lib/judge-content.js：讀取BlocklyYdws M0-01/M0-02課程檔的description/examples/
// testCases/difficulty等資料，比對build-m0-course-sb3.js產生的.sb3路徑，組成judge-content.js
// 的courses陣列。跑完後直接覆寫src/lib/judge-content.js，需要人工檢查diff再決定是否保留。
//
// 用法：node scripts/judge-dev-tools/gen-judge-content.js

const fs = require('fs');
const path = require('path');

// 2026-08-09改讀YDWS-CodingBank/courses（課程JS正本資料夾），不再直接讀BlocklyYdws/src/courses。
const COURSES_DIR = path.join(__dirname, '../../../YDWS-CodingBank/courses');
const SB3_BASE = path.join(__dirname, '../../static/judge-content/m0');
const OUT_FILE = path.join(__dirname, '../../src/lib/judge-content.js');
const COURSE_FILES = ['M0-01-BasicOutput.js', 'M0-02-Variables.js', 'M0-03-Conditionals.js', 'M0-04-LoopsAndSum.js', 'M0-05-ListBasics.js', 'M0-06-MinMaxExtra.js', 'M1-01-ListSearch.js', 'M1-02-ListAnalysis.js', 'M1-03-ListStats.js', 'M1-04-ListIndex.js', 'M1-05-StringBasics.js', 'M1-06-StringFormat.js', 'M1-07-SortBasics.js', 'M1-08-SortApplied.js', 'M1-09-MathBasics.js', 'M1-10-MathGCD.js', 'M1-11-StackQueue.js', 'M1-12-DebugFormat.js', 'JSB00.js', 'JSA00.js',
    // 2026-08-13新增：13縣市國小競賽模式課程（114TCPE01~13）。這批課程starterXml故意清空
    // （競賽模式不提供參考解答，見BlocklyYdws/blockly-lab那邊的mode:'contest'設計），
    // 每題都會走下面的hasDemo===false分支、loadable設為false——這是osep-judge第一次出現
    // 「整個課程都刻意不給示範解答」的情況，2026-08-13使用者確認這是預期行為，不是資料缺口。
    '114TCPE01.js', '114TCPE02.js', '114TCPE03.js', '114TCPE04.js', '114TCPE05.js', '114TCPE06.js', '114TCPE07.js', '114TCPE08.js', '114TCPE09.js', '114TCPE10.js', '114TCPE11.js', '114TCPE12.js', '114TCPE13.js',
    // 2026-08-13再新增：基隆/桃園/雲林3縣市國小競賽模式課程（114TCPE14~16）。同批J系列
    // （114TCPJ14~16，國中）依osep-judge既有國小限定範圍政策不上架，見本專案CLAUDE.md
    // 「已知待辦」段落。
    '114TCPE14.js', '114TCPE15.js', '114TCPE16.js', '114TCPE17.js', '114TCPE18.js',
    // 2026-08-20：部分國中老師要求osep-judge也能給國中生用，範圍政策改為國中小並存
    // （見本專案CLAUDE.md）。第一階段先上114TCPJ01~16（國中競賽模式，比照114TCPE系列，
    // 沒有starterXml、不用示範解答，純資料搬遷）。114J/114E（國中小學習模式，需要示範
    // 解答）、M2/M3是後續階段，分階段完成後再擴充這裡。
    '114TCPJ01.js', '114TCPJ02.js', '114TCPJ03.js', '114TCPJ04.js', '114TCPJ05.js', '114TCPJ06.js', '114TCPJ07.js', '114TCPJ08.js', '114TCPJ09.js', '114TCPJ10.js', '114TCPJ11.js', '114TCPJ12.js', '114TCPJ13.js', '114TCPJ14.js', '114TCPJ15.js', '114TCPJ16.js', '114TCPJ17.js', '114TCPJ18.js',
    // 2026-08-20 Phase 2：114J（國中學習模式，16縣市）＋114E（國小學習模式，16縣市）。
    // 這兩批需要示範解答，用擴充後的xml-to-scratch.js（新增迴圈/清單/邏輯/字串積木支援，
    // 見該檔案開頭註解）自動轉換；少數積木類型（text_getSubstring/text_prompt_ext/
    // controls_flow_statements/math_constrain，集中在114ETaichung幾題）故意不支援，
    // 轉換失敗時build-m0-course-sb3.js會照既有機制讓那幾題落入[SKIP]/[FAIL]、不影響其他題。
    '114JChaiyi.js', '114JChaiyiC.js', '114JChanghua.js', '114JHsinchu.js', '114JHsinchuC.js', '114JHualien.js', '114JKeelung.js', '114JNantou.js', '114JNewTaipei.js', '114JPenghu.js', '114JTaichung.js', '114JTainan.js', '114JTaipei.js', '114JTaitung.js', '114JTaoyuan.js', '114JYunlin.js', '114JKinmen.js', '114JMiaoli.js',
    '114EChaiyi.js', '114EChaiyiC.js', '114EChanghua.js', '114EHsinchu.js', '114EHsinchuC.js', '114EHualien.js', '114EKeelung.js', '114ENantou.js', '114ENewTaipei.js', '114EPenghu.js', '114ETaichung.js', '114ETainan.js', '114ETaipei.js', '114ETaitung.js', '114ETaoyuan.js', '114EYunlin.js', '114EKinmen.js', '114EMiaoli.js',
    // 2026-08-20 Phase 3：M2＋M3（進階演算法：圖論/貪心/模擬、二分搜尋/前綴和/滑動視窗/DP）。
    // 診斷測試（不留痕跡的暫時性COURSE_FILES測試）發現135題全部用到的積木類型都已經是
    // Phase 2擴充過的子集，只缺兩個模式：lists_setIndex的MODE=INSERT/WHERE=LAST
    // （插在最後＝附加到清單尾端，對應data_addtolist）跟lists_getIndex的MODE=GET_REMOVE
    // （取值同時移除，hoist成先存值再刪除）。補完這兩個模式後135題100%自動轉換成功、
    // headless驗證100%功能正確，見xml-to-scratch.js檔頭註解。
    'M2-01-CondBasics.js', 'M2-02-CondChallenge.js', 'M2-03-SimBasics.js', 'M2-04-SimRolePlay.js', 'M2-05-SimSensor.js', 'M2-06-SimContest.js', 'M2-07-GraphBasics.js', 'M2-08-GraphAdvanced.js', 'M2-09-GreedyBasics.js', 'M2-10-GreedyAdvanced.js',
    'M3-00-BinarySearchWarmup.js', 'M3-01-IntervalOptimize.js', 'M3-02-PrefixSum.js', 'M3-03-SlidingWindow.js', 'M3-04-DPWarmup.js'];

// 比照BlocklyYdws/blockly-lab現況：JSA00/JSB00是公開課程（不用代碼），其餘一律需要代碼。
const PUBLIC_COURSE_CODES = new Set(['JSA00', 'JSB00']);

function loadCourse(filename) {
    const filePath = path.join(COURSES_DIR, filename);
    const src = fs.readFileSync(filePath, 'utf8');
    const bodySrc = src.replace(/^export default/m, 'return');
    // eslint-disable-next-line no-new-func
    const factory = new Function(bodySrc);
    return factory();
}

const courses = COURSE_FILES.map(filename => {
    const source = loadCourse(filename);
    const shortCode = source.code.split('-').slice(0, 2).join('-');
    const courseFolder = source.code;
    return {
        code: shortCode,
        title: source.title,
        tier: source.tier,
        // 課程解鎖代碼＝BlocklyYdws自己的courseCode（完整檔名，不含.js，比對邏輯見
        // BlocklyYdws src/courses/index.js的normalizeCourseCode()——就是trim+轉大寫，
        // 沒有另外截短）。跟BlocklyYdws共用同一套代碼，老師/學生不用記兩套。
        // PUBLIC_COURSE_CODES裡的課程不用代碼（null），task-list.jsx會直接展開。
        unlockCode: PUBLIC_COURSE_CODES.has(shortCode) ? null : source.code,
        tasks: source.tasks.map(task => {
            const sb3Path = `m0/${courseFolder}/${task.id}.sb3`;
            // 不是每題都有示範解答（BlocklyYdws來源本來就只有部分題目有starterXml，
            // 或是JSB00這種用到迴圈積木、改用手寫Scratch解答的情況）——用實際檔案存不存在
            // 判斷，不要無條件假設每題都有sb3，否則沒有demo的題目「載入範例」會直接404。
            const hasDemo = fs.existsSync(path.join(SB3_BASE, courseFolder, `${task.id}.sb3`));
            return {
                id: task.id,
                code: `${shortCode}-${task.id}`,
                title: task.title,
                description: task.description,
                examples: task.examples,
                testCases: task.testCases.map(tc => ({input: tc.input, expectedOutput: tc.expectedOutput, score: tc.score})),
                difficulty: task.difficulty,
                difficultyLabel: task.difficultyLabel,
                sb3Path: hasDemo ? sb3Path : null
            };
        })
    };
});

const fileContent = `/**
 * MVP-33後續：課程/題目內容資料模組（2026-08-04擴充：從BlocklyYdws M0-01/M0-02課程檔
 * 自動轉換，見scripts/judge-dev-tools/gen-judge-content.js，不要手動編輯本檔——
 * 要改題目內容請去改BlocklyYdws src/courses/下對應課程檔，重跑那份腳本重新產生）。
 *
 * 結構比照BlocklyYdws（courses -> tasks陣列）。
 * answerProjectUrl用document.baseURI（相對目前頁面路徑）動態產生，能正確處理GitHub Pages
 * 子路徑部署（例如osep-judge部署在/osep-judge/底下時，document.baseURI本身就是
 * .../osep-judge/editor.html，用它當base算出來的judge-content會自動落在/osep-judge/
 * judge-content/底下）。2026-08-20修復：舊版用window.location.origin（只到網域，不含
 * /osep-judge/子路徑）拼字串，本機dev server（沒有子路徑）測試都正常，但實際部署到
 * GitHub Pages後「載入範例」全部404——這正是這次修復的bug。
 *
 * course.unlockCode：版權保護用的課程解鎖代碼（見task-list.jsx），值直接沿用
 * BlocklyYdws自己的courseCode（來源課程檔的完整檔名，不含.js），不用另外維護一套。
 */

const judgeContentBase = () => new URL('judge-content', document.baseURI).href;

export const courses = ${JSON.stringify(courses, null, 4)};

courses.forEach(course => {
    course.tasks.forEach(task => {
        if (!task.sb3Path) {
            task.loadable = false;
            return;
        }
        Object.defineProperty(task, 'answerProjectUrl', {
            enumerable: true,
            get() { return \`\${judgeContentBase()}/\${task.sb3Path}\`; }
        });
        task.loadable = true;
    });
});

export const findTaskByCode = taskCode => {
    for (const course of courses) {
        const task = course.tasks.find(t => t.code === taskCode);
        if (task) return {course, task};
    }
    return null;
};
`;

fs.writeFileSync(OUT_FILE, fileContent, 'utf8');
console.log(`已寫出：${OUT_FILE}`);
console.log(`共 ${courses.length} 個課程，${courses.reduce((s, c) => s + c.tasks.length, 0)} 題`);
