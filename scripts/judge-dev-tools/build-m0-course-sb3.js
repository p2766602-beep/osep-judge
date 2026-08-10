// 批次版build script：讀取BlocklyYdws M0-01/M0-02課程檔的每一題starterXml，
// 用xml-to-scratch.js通用轉換器轉成真正的Scratch .sb3範例答案，取代逐題手動照抄
// build-m0-01-sb3.js的作法（那份腳本保留當作最初手動驗證的歷史紀錄，不再維護）。
//
// 用法：node scripts/judge-dev-tools/build-m0-course-sb3.js

const fs = require('fs');
const path = require('path');
const JSZip = require('@turbowarp/jszip');
const {convertStarterXml} = require('./xml-to-scratch.js');

// 2026-08-09改讀YDWS-CodingBank/courses（課程JS正本資料夾），不再直接讀BlocklyYdws/src/courses——
// 三個平台（BlocklyYdws/blockly-lab/osep-judge）現在統一從這裡取得題目內容。
const COURSES_DIR = path.join(__dirname, '../../../YDWS-CodingBank/courses');
const HAND_AUTHORED_DIR = path.join(__dirname, 'hand-authored-answers');
const OUT_BASE = path.join(__dirname, '../../static/judge-content/m0');
const BACKDROP_SVG = fs.readFileSync(path.join(__dirname, '../../src/lib/default-project/cd21514d0531fdffb22204e0ec5ed84a.svg'));
const COSTUME_SVG = fs.readFileSync(path.join(__dirname, '../../src/lib/default-project/dango-cat.svg'));

const COURSE_FILES = ['M0-01-BasicOutput.js', 'M0-02-Variables.js', 'M0-03-Conditionals.js', 'M0-04-LoopsAndSum.js', 'M0-05-ListBasics.js', 'M0-06-MinMaxExtra.js', 'M1-01-ListSearch.js', 'M1-02-ListAnalysis.js', 'M1-03-ListStats.js', 'M1-04-ListIndex.js', 'M1-05-StringBasics.js', 'M1-06-StringFormat.js', 'M1-07-SortBasics.js', 'M1-08-SortApplied.js', 'M1-09-MathBasics.js', 'M1-10-MathGCD.js', 'M1-11-StackQueue.js', 'M1-12-DebugFormat.js', 'JSB00.js', 'JSA00.js'];

function loadCourse(filename) {
    const filePath = path.join(COURSES_DIR, filename);
    const src = fs.readFileSync(filePath, 'utf8');
    const bodySrc = src.replace(/^export default/m, 'return');
    // eslint-disable-next-line no-new-func
    const factory = new Function(bodySrc);
    return factory();
}

// 手寫的原生Scratch示範解答（給轉換器不支援的積木類型用，例如迴圈）優先於自動轉換，
// 見 hand-authored-answers/README.md。
function loadHandAuthored(courseFolder, taskId) {
    const filePath = path.join(HAND_AUTHORED_DIR, courseFolder, `${taskId}.json`);
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

async function buildTaskSb3(courseFolder, taskId, variables, blocks, lists = {}) {
    const projectJson = {
        targets: [
            {
                isStage: true, name: 'Stage', variables: {}, lists: {}, broadcasts: {},
                blocks: {}, comments: {}, currentCostume: 0,
                costumes: [{
                    assetId: 'cd21514d0531fdffb22204e0ec5ed84a', name: 'backdrop1',
                    md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg', dataFormat: 'svg',
                    rotationCenterX: 240, rotationCenterY: 180
                }],
                sounds: [], volume: 100
            },
            {
                isStage: false, name: `${courseFolder}-${taskId}`, variables, lists, broadcasts: {},
                comments: {}, currentCostume: 0,
                costumes: [{
                    assetId: '927d672925e7b99f7813735c484c6922', name: 'costume1', bitmapResolution: 1,
                    md5ext: '927d672925e7b99f7813735c484c6922.svg', dataFormat: 'svg',
                    rotationCenterX: 30.75, rotationCenterY: 58.86
                }],
                sounds: [], volume: 100, visible: true, x: 0, y: 0, size: 100, direction: 90,
                draggable: false, rotationStyle: 'all around',
                blocks
            }
        ],
        meta: {semver: '3.0.0', vm: '0.1.0', agent: 'osep-judge/build-m0-course-sb3'}
    };

    const zip = new JSZip();
    zip.file('project.json', JSON.stringify(projectJson));
    zip.file('cd21514d0531fdffb22204e0ec5ed84a.svg', BACKDROP_SVG);
    zip.file('927d672925e7b99f7813735c484c6922.svg', COSTUME_SVG);

    const outDir = path.join(OUT_BASE, courseFolder);
    fs.mkdirSync(outDir, {recursive: true});
    const outPath = path.join(outDir, `${taskId}.sb3`);
    const buffer = await zip.generateAsync({type: 'nodebuffer'});
    fs.writeFileSync(outPath, buffer);
    return {outPath, size: buffer.length};
}

(async () => {
    let ok = 0;
    let failed = 0;
    let skipped = 0;
    for (const filename of COURSE_FILES) {
        const course = loadCourse(filename);
        const courseFolder = filename.replace(/\.js$/, '');
        console.log(`=== ${course.code}（${course.title}）：${course.tasks.length}題 ===`);
        for (const task of course.tasks) {
            const handAuthored = loadHandAuthored(courseFolder, task.id);
            if (!handAuthored && !task.starterXml) {
                console.log(`  [SKIP] ${task.id}（${task.title}）：沒有starterXml也沒有手寫示範解答，不產生sb3`);
                skipped += 1;
                continue;
            }
            try {
                const {variables, blocks, lists} = handAuthored || convertStarterXml(task.starterXml);
                const {outPath, size} = await buildTaskSb3(courseFolder, task.id, variables, blocks, lists || {});
                console.log(`  [OK]${handAuthored ? '(手寫)' : ''} ${task.id}（${task.title}） -> ${path.relative(process.cwd(), outPath)}（${size} bytes）`);
                ok += 1;
            } catch (err) {
                console.error(`  [FAIL] ${task.id}（${task.title}）：${err.message}`);
                failed += 1;
            }
        }
    }
    console.log(`（略過無示範解答：${skipped} 題）`);
    console.log(`\n完成：成功 ${ok} 題，失敗 ${failed} 題`);
    process.exit(failed > 0 ? 1 : 0);
})();
