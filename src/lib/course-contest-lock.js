/**
 * 2026-11-05：教師「把有範例的課程臨時鎖成測驗」的設定。存在BlocklyYdws的
 * starter-editor Worker（BlocklyYdws教師後台寫入），三個平台共用同一份：
 * GET /overrides?courseCode=<BlocklyYdws課程代碼> 回傳的保留鍵 __course.contestLock。
 * osep-judge只讀這一項，不套用逐題的範例覆寫。Worker連不到時當作沒有鎖定，不擋題目載入。
 */

const STARTER_EDITOR_WORKER_URL = 'https://blocklyydws-starter-editor.tnjboxing.workers.dev';

export const fetchContestLock = async courseCode => {
    if (!courseCode) return false;
    try {
        const resp = await fetch(
            `${STARTER_EDITOR_WORKER_URL}/overrides?courseCode=${encodeURIComponent(courseCode.trim().toUpperCase())}`
        );
        if (!resp.ok) return false;
        const data = await resp.json();
        return Boolean(data && data.overrides && data.overrides.__course && data.overrides.__course.contestLock);
    } catch (e) {
        return false;
    }
};
