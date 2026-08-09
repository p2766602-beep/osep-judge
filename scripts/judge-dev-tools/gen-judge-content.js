// 產生src/lib/judge-content.js：讀取BlocklyYdws M0-01/M0-02課程檔的description/examples/
// testCases/difficulty等資料，比對build-m0-course-sb3.js產生的.sb3路徑，組成judge-content.js
// 的courses陣列。跑完後直接覆寫src/lib/judge-content.js，需要人工檢查diff再決定是否保留。
//
// 用法：node scripts/judge-dev-tools/gen-judge-content.js

const fs = require('fs');
const path = require('path');

const BLOCKLYYDWS_COURSES_DIR = path.join(__dirname, '../../../BlocklyYdws/src/courses');
const OUT_FILE = path.join(__dirname, '../../src/lib/judge-content.js');
const COURSE_FILES = ['M0-01-BasicOutput.js', 'M0-02-Variables.js'];

function loadCourse(filename) {
    const filePath = path.join(BLOCKLYYDWS_COURSES_DIR, filename);
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
        unlockCode: source.code,
        tasks: source.tasks.map(task => ({
            id: task.id,
            code: `${shortCode}-${task.id}`,
            title: task.title,
            description: task.description,
            examples: task.examples,
            testCases: task.testCases.map(tc => ({input: tc.input, expectedOutput: tc.expectedOutput, score: tc.score})),
            difficulty: task.difficulty,
            difficultyLabel: task.difficultyLabel,
            sb3Path: `m0/${courseFolder}/${task.id}.sb3`
        }))
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
