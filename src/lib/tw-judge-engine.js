/**
 * MVP-33-2：純解題模式的評分引擎。
 *
 * 技術路徑（已用.scratch-work/mvp33-headless-test.js、verify-sb3-file.js headless驗證過）：
 * 攔截scratch-vm runtime的QUESTION/ANSWER/SAY事件，模擬「詢問並等待」的作答，並只採計
 * looks_say（「說出」）內容作為評分依據——跟BlocklyYdws main.js的規則（只認說出、不認其他
 * 輸出）完全一致，讓學生在兩個平台的心智模型不用切換。
 *
 * 關鍵細節（來自scratch-vm/src/blocks/scratch3_sensing.js的_askNextQuestion()）：
 * 角色visible=true時，「詢問並等待」會把問題文字透過SAY事件echo成說話泡泡，污染評分輸出。
 * 執行評分前必須強制所有非stage角色visible=false，否則捕捉到的內容會混進問題文字本身。
 *
 * clone數上限交給scratch-vm自己的runtimeOptions.maxClones機制把關（不用另外實作）；
 * 逾時保護用固定執行步數上限（MAX_STEPS，一步對應runtime一次_step()，預設30fps）。
 *
 * 2026-08-04擴充題庫時修正：input要比照BlocklyYdws src/main.js的createTokenReader()，
 * 用「空白（含換行）」逐一斷詞、依序回答每一次「詢問並等待」，不能只答第一次問題就不理
 * 後續問題（題目常有2~4次連續詢問，例如M0-02系列）。舊版只答第一題會讓後續問題永遠卡住、
 * 逾時判FAIL。
 *
 * 2026-08-04新增：額外攔截looks_think（「思考」）當作debug輸出擷取進debugOutput——
 * 只用來給SelfTestTab顯示，gradeSubmission/actualOutput比對完全不看這欄，「思考」
 * 積木放心讓學生拿來印偵錯訊息，不會污染評分。
 */

const DEFAULT_MAX_STEPS = 200;
const STEP_INTERVAL_MS = 20;

/**
 * 對一個已經loadProject完成的VM執行單一測資。
 * @param {VM} vm 已經呼叫過vm.start()、且所有非stage角色已強制visible=false的VM實例
 * @param {{input: string, expectedOutput: string}} testCase 單一測資
 * @param {{maxSteps: number}} options 逾時步數上限
 * @returns {Promise<{actualOutput: string, pass: boolean, timedOut: boolean}>}
 */
const runTestCase = (vm, testCase, options = {}) => {
    const maxSteps = options.maxSteps || DEFAULT_MAX_STEPS;

    const tokens = String(testCase.input ?? '').trim().length > 0
        ? String(testCase.input ?? '').trim().split(/\s+/)
        : [];
    let tokenIndex = 0;

    return new Promise(resolve => {
        const capturedSay = [];
        const capturedThink = [];

        const onQuestion = question => {
            if (question === null) return;
            const value = tokenIndex < tokens.length ? tokens[tokenIndex] : '';
            tokenIndex += 1;
            vm.runtime.emit('ANSWER', value);
        };
        const onSay = (target, type, text) => {
            if (type === 'say') capturedSay.push(text);
            else if (type === 'think') capturedThink.push(text);
        };

        vm.runtime.on('QUESTION', onQuestion);
        vm.runtime.on('SAY', onSay);

        const cleanup = () => {
            clearInterval(stepTimer);
            vm.runtime.off('QUESTION', onQuestion);
            vm.runtime.off('SAY', onSay);
        };

        let stepCount = 0;
        const stepTimer = setInterval(() => {
            stepCount += 1;
            if (stepCount > maxSteps) {
                cleanup();
                resolve({
                    actualOutput: capturedSay.join('\n'),
                    debugOutput: capturedThink.join('\n'),
                    pass: false,
                    timedOut: true
                });
                return;
            }
            if (vm.runtime.threads.length === 0 && stepCount > 1) {
                cleanup();
                const actualOutput = capturedSay.join('\n');
                resolve({
                    actualOutput,
                    debugOutput: capturedThink.join('\n'),
                    pass: actualOutput === testCase.expectedOutput,
                    timedOut: false
                });
            }
        }, STEP_INTERVAL_MS);

        vm.greenFlag();
    });
};

/**
 * 對一組測資跑完整評分，並依BlocklyYdws的testCase.score欄位加總分數。
 * 呼叫前必須已經vm.start()並強制非stage角色visible=false（見上方說明）。
 * @param {VM} vm 已初始化的VM實例
 * @param {Array<{input: string, expectedOutput: string, score: number}>} testCases 測資清單
 * @param {{maxSteps: number}} options 逾時步數上限
 * @returns {Promise<{totalScore: number, maxScore: number, results: Array}>}
 */
const gradeSubmission = async (vm, testCases, options = {}) => {
    const results = [];
    for (const testCase of testCases) {
        // eslint-disable-next-line no-await-in-loop
        const result = await runTestCase(vm, testCase, options);
        results.push({...testCase, ...result});
    }
    const totalScore = results.reduce((sum, r) => sum + (r.pass ? (r.score || 0) : 0), 0);
    const maxScore = testCases.reduce((sum, tc) => sum + (tc.score || 0), 0);
    return {totalScore, maxScore, results};
};

/**
 * 執行評分前的必要準備：強制所有非stage角色visible=false，避免「詢問並等待」的
 * 問題文字echo污染SAY輸出擷取。
 * @param {VM} vm VM實例
 */
const prepareVmForGrading = vm => {
    vm.runtime.targets.forEach(target => {
        if (!target.isStage) target.visible = false;
    });
};

module.exports = {
    runTestCase,
    gradeSubmission,
    prepareVmForGrading,
    DEFAULT_MAX_STEPS
};
