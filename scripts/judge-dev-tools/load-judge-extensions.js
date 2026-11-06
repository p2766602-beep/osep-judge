// headless 驗證用：把 osep-judge 自訂的 VM extension（judge-operators-extension.js 的合併四則運算／
// 比較／且或、judge-control-extension.js 的重複當／中斷循環）登記到 node 裡的 VM。
// 這兩個檔案是給 webpack 用的 ES module，這裡用最小的 import／export 轉寫在 node 直接載入，
// 不用另外裝 babel。用到這些積木的示範解答（例如 B 系列）沒有登記就會在 loadProject 時失敗。
const fs = require('fs');
const path = require('path');
const Module = require('module');

const LIB = path.join(__dirname, '../../src/lib');

function loadEsm(file) {
    const src = fs.readFileSync(file, 'utf8')
        .replace(/^import (\w+) from '([^']+)';/gm, "const $1 = (m => m && m.__esModule ? m.default : m)(require('$2'));")
        .replace(/^import \{([^}]+)\} from '([^']+)';/gm, "const {$1} = require('$2');")
        .replace(/^export default (\w+);/m, 'exports.default = $1;')
        .replace(/^export \{([^}]+)\};/m, (_, names) => names.split(',').map(n => `exports.${n.trim()} = ${n.trim()};`).join('\n'));
    const m = new Module(file);
    m.paths = Module._nodeModulePaths(path.dirname(file));
    m.filename = file;
    m._compile(src, file);
    return m.exports;
}

const EXTENSIONS = ['judge-operators-extension.js', 'judge-control-extension.js'].map(f => loadEsm(path.join(LIB, f)));

module.exports = function registerJudgeExtensions(vm) {
    for (const ext of EXTENSIONS) {
        vm.extensionManager.addBuiltinExtension(ext.EXTENSION_ID, ext.default);
        vm.extensionManager.loadExtensionIdSync(ext.EXTENSION_ID);
    }
};
