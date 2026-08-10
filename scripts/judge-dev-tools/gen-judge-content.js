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
const COURSE_FILES = ['M0-01-BasicOutput.js', 'M0-02-Variables.js', 'M0-03-Conditionals.js', 'M0-04-LoopsAndSum.js', 'M0-05-ListBasics.js', 'M0-06-MinMaxExtra.js', 'M1-01-ListSearch.js', 'M1-02-ListAnalysis.js', 'M1-03-ListStats.js', 'M1-04-ListIndex.js', 'M1-05-StringBasics.js', 'M1-06-StringFormat.js', 'M1-07-SortBasics.js', 'M1-08-SortApplied.js', 'M1-09-MathBasics.js', 'M1-10-MathGCD.js', 'M1-11-StackQueue.js', 'M1-12-DebugFormat.js', 'JSB00.js', 'JSA00.js'];

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
 * answerProjectUrl用window.location.origin動態產生（比照舊OSEP擴充功能的慣例），
 * 部署到GitHub Pages子路徑時可能需要調整。
 *
 * course.unlockCode：版權保護用的課程解鎖代碼（見task-list.jsx），值直接沿用
 * BlocklyYdws自己的courseCode（來源課程檔的完整檔名，不含.js），不用另外維護一套。
 */

const judgeContentBase = () => \`\${window.location.origin}/judge-content\`;

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
