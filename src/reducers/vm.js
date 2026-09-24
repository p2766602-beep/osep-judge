import VM from 'scratch-vm';
import storage from '../lib/storage';
import {MAXIMUM_CLOUD_VARIABLES} from '../lib/tw-cloud-limits';
import JudgeOperatorsExtension, {EXTENSION_ID as JUDGE_OPERATORS_EXTENSION_ID} from '../lib/judge-operators-extension';
import JudgeControlExtension, {EXTENSION_ID as JUDGE_CONTROL_EXTENSION_ID} from '../lib/judge-control-extension';

const SET_VM = 'scratch-gui/vm/SET_VM';
const defaultVM = new VM();
defaultVM.setCompatibilityMode(true);
defaultVM.runtime.cloudOptions.limit = MAXIMUM_CLOUD_VARIABLES;
defaultVM.attachStorage(storage);
// 2026-09-24：對齊官方平台Scratch介面「運算」分類——載入judge-operators-extension.js
// 定義的4顆自訂積木（真/假字面值、合併四則運算、合併比較、合併且或），必須在Blocks
// 元件第一次組toolbox之前就註冊完成，這裡是全專案唯一一次`new VM()`的地方，保證
// App還沒開始畫面前就載入好。見該檔案開頭註解說明為什麼需要自訂extension。
defaultVM.extensionManager.addBuiltinExtension(JUDGE_OPERATORS_EXTENSION_ID, JudgeOperatorsExtension);
defaultVM.extensionManager.loadExtensionIdSync(JUDGE_OPERATORS_EXTENSION_ID);
// 對齊官方平台「控制」分類的「重複當」積木，見judge-control-extension.js開頭註解
// （為什麼不能直接patch原生control_while的顯示字串，要另外寫一顆全新積木）。
defaultVM.extensionManager.addBuiltinExtension(JUDGE_CONTROL_EXTENSION_ID, JudgeControlExtension);
defaultVM.extensionManager.loadExtensionIdSync(JUDGE_CONTROL_EXTENSION_ID);
const initialState = defaultVM;

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_VM:
        return action.vm;
    default:
        return state;
    }
};
const setVM = function (vm) {
    return {
        type: SET_VM,
        vm: vm
    };
};

export {
    reducer as default,
    initialState as vmInitialState,
    setVM
};
