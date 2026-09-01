// 產生 src/lib/judge-content/ 底下的資料檔：讀取YDWS-CodingBank/courses課程正本的
// description/examples/testCases/difficulty等資料，比對build-m0-course-sb3.js產生的
// .sb3路徑，輸出成兩層結構：
//   1. src/lib/judge-content/manifest.js：全部課程的輕量清單（code/title/tier/unlockCode
//      +每題只留id/code/title/difficultyLabel），給課程瀏覽清單UI用，體積小、一次載入。
//   2. src/lib/judge-content/courses/{shortCode}.js：每個課程各自一個檔案，內容是該課程
//      完整資料（含description/examples/testCases等重欄位），只有使用者實際點進某課程/
//      題目時才會被動態import，webpack會自動切成獨立chunk——上架新課程只讓新增的那個
//      課程檔案有新雜湊，不影響其他課程或平台程式碼的瀏覽器快取。
// 執行後直接覆寫這兩類檔案，需要人工檢查diff再決定是否保留。
//
// 用法：node scripts/judge-dev-tools/gen-judge-content.js

const fs = require('fs');
const path = require('path');

// 2026-08-09改讀YDWS-CodingBank/courses（課程JS正本資料夾），不再直接讀BlocklyYdws/src/courses。
const COURSES_DIR = path.join(__dirname, '../../../YDWS-CodingBank/courses');
const SB3_BASE = path.join(__dirname, '../../static/judge-content/m0');
const OUT_DIR = path.join(__dirname, '../../src/lib/judge-content');
const MANIFEST_FILE = path.join(OUT_DIR, 'manifest.js');
const COURSES_OUT_DIR = path.join(OUT_DIR, 'courses');
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

fs.mkdirSync(COURSES_OUT_DIR, {recursive: true});

// 清掉舊的per-course檔案（課程改名/移除時，殘留的舊檔案不會被下面的迴圈覆寫，
// 必須先清空整個目錄再重新寫入，避免累積孤兒檔案）。
for (const entry of fs.readdirSync(COURSES_OUT_DIR)) {
    if (entry.endsWith('.js')) fs.unlinkSync(path.join(COURSES_OUT_DIR, entry));
}

// manifest.js：輕量清單，只有課程瀏覽清單UI需要的欄位，不含description/examples/testCases。
const manifestContent = `/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/下對應課程檔，重跑該腳本重新產生。
 *
 * 這是課程瀏覽清單用的輕量資料（只留課程/題目的標題類欄位，不含題目說明/測資等重欄位），
 * 讓judge-content/index.js可以同步/低成本載入，用來畫出課程清單、比對unlockCode、
 * 判斷某個taskCode屬於哪個課程——完整題目內容要透過index.js的getCourseTasks()
 * 動態載入對應的judge-content/courses/{code}.js。
 */
export default ${JSON.stringify(courses.map(course => ({
        code: course.code,
        title: course.title,
        tier: course.tier,
        unlockCode: course.unlockCode,
        tasks: course.tasks.map(task => ({
            id: task.id,
            code: task.code,
            title: task.title,
            difficultyLabel: task.difficultyLabel
        }))
    })), null, 4)};
`;
fs.writeFileSync(MANIFEST_FILE, manifestContent, 'utf8');

// 每個課程各自一個完整資料檔（含description/examples/testCases等重欄位）。
// 純資料，不含answerProjectUrl getter/loadable旗標——那兩個是執行期才需要的欄位，
// 統一由index.js的getCourseTasks()載入後動態補上，避免這裡重複產生同一段邏輯50幾次。
courses.forEach(course => {
    const fileContent = `/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/${course.code}對應的正本課程檔，重跑該腳本。
 */
export default ${JSON.stringify(course, null, 4)};
`;
    fs.writeFileSync(path.join(COURSES_OUT_DIR, `${course.code}.js`), fileContent, 'utf8');
});

console.log(`已寫出：${MANIFEST_FILE}`);
console.log(`已寫出：${COURSES_OUT_DIR}/*.js（${courses.length}個課程檔案）`);
console.log(`共 ${courses.length} 個課程，${courses.reduce((s, c) => s + c.tasks.length, 0)} 題`);
