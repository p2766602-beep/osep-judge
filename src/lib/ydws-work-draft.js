// 2026-11-11：比照兩個 Blockly 平台，Scratch 平台也加上「工作區自動暫存＋重新整理自動還原」與
// 「存檔時把這一題的畫重點一起寫進 .sb3」。
//
// - 暫存：積木變動 0.8 秒後（或按「開始手動測試」「開始評分」的當下）把整個專案存成 sb3（base64）
//   放在 localStorage，一份就好，附帶當下的題號與「載入過範例」標記。工作區沒有任何積木時刪掉暫存。
// - 還原：只在開網頁後第一次載入預設專案時，改載入暫存的專案（vm-manager-hoc.jsx 呼叫
//   takeInitialDraft()）；題目面板再依暫存的題號回到那一題（subscribeRestore）。
// - 畫重點：存檔時在 sb3 壓縮檔裡多放一個 ydws-annotations.json（{task, items}），Scratch 本身會
//   忽略這個檔案；從電腦載入檔案時讀出來，題號相同才套用（applyAnnotationsFromSb3）。
import JSZip from '@turbowarp/jszip';
import {getAnnotations, setAnnotations} from './annotator.js';

const DRAFT_KEY = 'osep-work-draft-v1';
const ANNOT_FILE = 'ydws-annotations.json';
const SAVE_DELAY_MS = 800;

export const annotationKeyForTask = taskCode => `osep:${taskCode}`;

let context = {taskCode: null, demoLoaded: false};
let installedVm = null;
let savingEnabled = false;
let saveTimer = null;
let initialHandled = false;
let restoredInfo = null;
const restoreListeners = new Set();
const noticeListeners = new Set();

const bufferToBase64 = buffer => {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.length; i += 0x8000) {
        binary += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    }
    return window.btoa(binary);
};

const base64ToBuffer = text => {
    const binary = window.atob(text);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
};

const readDraft = () => {
    try {
        const draft = JSON.parse(window.localStorage.getItem(DRAFT_KEY) || 'null');
        return draft && typeof draft.sb3 === 'string' ? draft : null;
    } catch (e) {
        return null;
    }
};

const hasAnyBlocks = vm => vm.runtime.targets.some(target =>
    target.blocks && Object.keys(target.blocks._blocks || {}).length > 0);

// 題目面板告訴暫存模組：目前在哪一題、有沒有載入過範例
export const setDraftContext = next => {
    context = {...context, ...next};
};

export const getDraftContext = () => context;

export const postNotice = text => {
    noticeListeners.forEach(listener => listener(text));
};

export const subscribeNotice = listener => {
    noticeListeners.add(listener);
    return () => noticeListeners.delete(listener);
};

// 題目面板訂閱「開頁時還原了暫存」；如果還原已經發生，立刻通知一次
export const subscribeRestore = listener => {
    restoreListeners.add(listener);
    if (restoredInfo) listener(restoredInfo);
    return () => restoreListeners.delete(listener);
};

export const clearWorkDraft = () => {
    clearTimeout(saveTimer);
    try {
        window.localStorage.removeItem(DRAFT_KEY);
    } catch (e) {
        // 忽略
    }
};

export const saveWorkDraftNow = async () => {
    const vm = installedVm;
    if (!vm || !savingEnabled) return;
    clearTimeout(saveTimer);
    try {
        if (!hasAnyBlocks(vm)) {
            window.localStorage.removeItem(DRAFT_KEY);
            return;
        }
        const buffer = await vm.saveProjectSb3('arraybuffer');
        // 回到題目清單或題目還在載入時，沿用暫存原本的題號；「載入過範例」標記在這次開網頁期間不會消失
        const previous = readDraft();
        window.localStorage.setItem(DRAFT_KEY, JSON.stringify({
            sb3: bufferToBase64(buffer),
            task: context.taskCode || (previous && previous.task) || null,
            demo: Boolean(context.demoLoaded || (restoredInfo && restoredInfo.demoLoaded)),
            savedAt: Date.now()
        }));
    } catch (e) {
        // localStorage 滿了或無法使用：暫存失敗不影響作答
    }
};

const scheduleSave = () => {
    if (!savingEnabled) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
        // 程式正在執行（評分或手動測試）時先不存，等跑完再存
        if (installedVm && installedVm.runtime.threads.length > 0) {
            scheduleSave();
            return;
        }
        saveWorkDraftNow();
    }, SAVE_DELAY_MS);
};

// 由題目面板呼叫一次：監聽積木變動、在存檔時夾帶畫重點
export const installWorkDraft = vm => {
    if (installedVm === vm) return;
    installedVm = vm;
    vm.on('PROJECT_CHANGED', scheduleSave);
    // 「檔案 → 新建專案」、載入範例、從電腦載入都會換掉整個專案，不一定觸發 PROJECT_CHANGED
    vm.runtime.on('PROJECT_LOADED', scheduleSave);

    const originalSaveZip = vm._saveProjectZip.bind(vm);
    vm._saveProjectZip = () => {
        const zip = originalSaveZip();
        const taskCode = context.taskCode;
        if (taskCode) {
            const items = getAnnotations(annotationKeyForTask(taskCode));
            if (items.length > 0) {
                zip.file(ANNOT_FILE, JSON.stringify({task: taskCode, items}), {compression: 'DEFLATE'});
            }
        }
        return zip;
    };
};

/*
 * vm-manager-hoc.jsx：開網頁後第一次載入預設專案時呼叫。有暫存就回傳暫存的 sb3（ArrayBuffer），
 * 否則回傳 null。之後（例如「檔案 → 新專案」）一律回傳 null。
 */
export const takeInitialDraft = isNewDefault => {
    if (initialHandled) return null;
    initialHandled = true;
    if (!isNewDefault) return null;
    const draft = readDraft();
    if (!draft) return null;
    try {
        return {buffer: base64ToBuffer(draft.sb3), draft};
    } catch (e) {
        return null;
    }
};

// vm-manager-hoc.jsx：第一次載入完成（不論有沒有用到暫存）後呼叫，之後才開始暫存
export const finishInitialLoad = draft => {
    savingEnabled = true;
    if (!draft) return;
    restoredInfo = {taskCode: draft.task || null, demoLoaded: Boolean(draft.demo), savedAt: draft.savedAt};
    restoreListeners.forEach(listener => listener(restoredInfo));
};

// 從電腦載入 sb3 之後：讀出檔案裡的畫重點，題號相同才套用
export const applyAnnotationsFromSb3 = async data => {
    let saved = null;
    try {
        const zip = await JSZip.loadAsync(data);
        const file = zip.file(ANNOT_FILE);
        if (file) saved = JSON.parse(await file.async('string'));
    } catch (e) {
        saved = null;
    }
    // 載入了別的檔案，原本「載入過範例」的標記保留（不能靠載入檔案洗掉），先存一次暫存
    saveWorkDraftNow();
    if (!saved || !Array.isArray(saved.items) || saved.items.length === 0) return;
    const taskCode = context.taskCode;
    if (taskCode && saved.task === taskCode) {
        setAnnotations(annotationKeyForTask(taskCode), saved.items);
        postNotice(`已載入檔案，並套用這一題的 ${saved.items.length} 筆畫重點（按「查看完整題目」可以看到）。`);
    } else {
        postNotice('已載入檔案。檔案裡的畫重點屬於別的題目，沒有套用；請先選到那一題再載入一次。');
    }
};
