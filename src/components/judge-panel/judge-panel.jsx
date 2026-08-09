import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import VM from 'scratch-vm';
import {gradeSubmission, prepareVmForGrading} from '../../lib/tw-judge-engine.js';
import {courses, findTaskByCode} from '../../lib/judge-content.js';
import judgeManualRun from '../../lib/judge-manual-run.js';
import TaskList from './task-list.jsx';
import styles from './judge-panel.css';

/**
 * MVP-33後續：題目面板，仿官方平台(demo.csie.ntnu.edu.tw/ps)的
 * 說明/自行測試/評分/評分紀錄四分頁版面，加上方案C的課程/題目瀏覽清單
 * （取代BlocklyYdws的courseCode輸入代碼方式）。
 */

const TABS = [
    {id: 'description', label: '說明'},
    {id: 'selftest', label: '自行測試'},
    {id: 'grading', label: '評分'},
    {id: 'history', label: '評分紀錄'}
];

const HISTORY_STORAGE_KEY_PREFIX = 'osepJudgeHistory:';

const loadHistory = taskCode => {
    try {
        const raw = window.localStorage.getItem(HISTORY_STORAGE_KEY_PREFIX + taskCode);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
};

const saveHistoryEntry = (taskCode, entry) => {
    const history = [entry, ...loadHistory(taskCode)].slice(0, 50);
    try {
        window.localStorage.setItem(HISTORY_STORAGE_KEY_PREFIX + taskCode, JSON.stringify(history));
    } catch (e) {
        // localStorage不可用或已滿，忽略，不影響評分本身
    }
    return history;
};

/**
 * 評分/自行測試前後保存並還原每個角色的visible狀態（見tw-judge-engine.js的visible陷阱說明），
 * 避免影響學生原本編輯畫面。
 */
const withVisibilityRestore = async (vm, fn) => {
    const previousVisibility = vm.runtime.targets.map(target => ({target, visible: target.visible}));
    try {
        prepareVmForGrading(vm);
        return await fn();
    } finally {
        previousVisibility.forEach(({target, visible}) => {
            target.visible = visible;
        });
    }
};

const DescriptionTab = ({task, onLoadDemo, demoStatus, demoLoaded}) => (
    <div className={styles.tabContent}>
        <h3 className={styles.sectionHeading}>題目敘述</h3>
        <p className={styles.description}>{task.description}</p>
        <h3 className={styles.sectionHeading}>範例測資</h3>
        {task.examples.map((example, index) => (
            <div className={styles.exampleBox} key={index}>
                <div className={styles.exampleLabel}>範例 {index + 1}</div>
                <div>
                    <strong>輸入：</strong>
                    <div className={styles.exampleValue}>{example.input}</div>
                </div>
                <div>
                    <strong>輸出：</strong>
                    <div className={styles.exampleValue}>{example.output}</div>
                </div>
                {example.explanation ? (
                    <div className={styles.exampleExplanation}>{example.explanation}</div>
                ) : null}
            </div>
        ))}
        {task.loadable ? (
            <React.Fragment>
                <button
                    className={demoLoaded ? styles.demoButtonLoaded : styles.demoButton}
                    onClick={onLoadDemo}
                >
                    {demoLoaded ? '✓ 已載入範例答案' : '載入範例'}
                </button>
                {demoStatus ? (
                    <div className={styles.demoStatus}>{demoStatus}</div>
                ) : null}
            </React.Fragment>
        ) : null}
    </div>
);
DescriptionTab.propTypes = {
    demoLoaded: PropTypes.bool,
    demoStatus: PropTypes.string,
    onLoadDemo: PropTypes.func.isRequired,
    task: PropTypes.shape({
        description: PropTypes.string,
        examples: PropTypes.array,
        loadable: PropTypes.bool
    }).isRequired
};

/**
 * 2026-08-04：改成跟正式Scratch/官方競賽平台一樣的「手動測試」操作方式——按下開始後
 * 畫面右下角跳出真正的Scratch舞台，「詢問並等待」會跳出原生輸入框，一筆一筆手動輸入，
 * 不是像「評分」那樣一次把全部測資塞進一個字串自動跑完。這是刻意跟「評分」分開的兩種
 * 輸入模式（手動測試給學生用、評分給系統自動讀取），對齊國小學生已經熟悉的Scratch
 * 操作習慣（見judge-manual-run.js的說明——舞台平常用CSS隱藏，這裡暫時顯示出來）。
 */
const SelfTestTab = ({vm}) => {
    const [running, setRunning] = useState(false);
    const [output, setOutput] = useState(null);
    const [debugOutput, setDebugOutput] = useState(null);
    // 用ref存這次執行的攔截狀態（onSay handler／目前累積的說出／輸出訊息／輪詢計時器），
    // 讓poll的setInterval跟handleStop都能拿到同一份、不受React重新render影響。
    const runStateRef = useRef(null);

    const restoreVisibility = state => {
        if (!state || !state.previousVisibility) return;
        state.previousVisibility.forEach(({target, visible}) => {
            target.visible = visible;
        });
    };

    const finishRun = () => {
        const state = runStateRef.current;
        if (!state) return;
        clearInterval(state.poll);
        vm.runtime.off('SAY', state.onSay);
        restoreVisibility(state);
        runStateRef.current = null;
        setOutput(state.capturedSay.join('\n'));
        setDebugOutput(state.capturedThink.join('\n'));
        setRunning(false);
        judgeManualRun.hide();
    };

    useEffect(() => () => {
        // 離開這個分頁/切換題目時，如果手動測試還在跑，把舞台藏回去、程式停掉、
        // 解除監聽、還原visible狀態，不要留著浮動視窗跟背景執行的程式。
        judgeManualRun.hide();
        vm.stopAll();
        if (runStateRef.current) {
            vm.runtime.off('SAY', runStateRef.current.onSay);
            clearInterval(runStateRef.current.poll);
            restoreVisibility(runStateRef.current);
            runStateRef.current = null;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleStart = () => {
        setRunning(true);
        setOutput(null);
        setDebugOutput(null);

        const capturedSay = [];
        const capturedThink = [];
        const onSay = (target, type, text) => {
            if (type === 'say') capturedSay.push(text);
            else if (type === 'think') capturedThink.push(text);
        };
        vm.runtime.on('SAY', onSay);

        // 角色visible要維持false（跟評分用的prepareVmForGrading()一樣），不是true！
        // 這是scratch-vm本身故意設計的行為（node_modules/scratch-vm/src/blocks/
        // scratch3_sensing.js的_askNextQuestion()）：target.visible===true時，
        // 「詢問並等待」會emit空字串給QUESTION事件、改用SAY事件把問題文字echo成角色
        // 頭上的說話泡泡（畫在舞台canvas上）；但我們的舞台canvas本來就故意用minimal
        // 模式藏起來（只留輸入框），如果visible=true，問題文字會echo到「看不見的地方」，
        // 學生會看到一個沒有題目文字的空白輸入框。維持visible=false，問題文字才會直接
        // 放進輸入框上方的label（Question元件自己畫的，不依賴舞台canvas），這正是minimal
        // 模式下唯一看得到問題文字的地方。已實測驗證過這個因果關係。
        // 跑完/停止後會還原回原本的visible狀態（見restoreVisibility），不留副作用。
        const previousVisibility = vm.runtime.targets.map(target => ({target, visible: target.visible}));
        vm.runtime.targets.forEach(target => {
            if (!target.isStage) target.visible = false;
        });
        judgeManualRun.show();
        vm.greenFlag();

        const poll = setInterval(() => {
            if (vm.runtime.threads.length === 0) {
                finishRun();
            }
        }, 200);
        runStateRef.current = {onSay, capturedSay, capturedThink, poll, previousVisibility};
    };

    const handleStop = () => {
        vm.stopAll();
        finishRun();
    };

    return (
        <div className={styles.tabContent}>
            <p className={styles.placeholder}>
                按下「開始手動測試」，畫面右下角會跳出跟正式Scratch一樣的舞台——「詢問並等待」
                會跳出輸入框讓你一筆一筆手動輸入作答（不是自動帶入）。不計分、不比對答案，
                純粹讓你看看程式實際執行的樣子。
            </p>
            {running ? (
                <button
                    className={styles.runButton}
                    onClick={handleStop}
                >
                    停止（隱藏舞台）
                </button>
            ) : (
                <button
                    className={styles.runButton}
                    onClick={handleStart}
                >
                    開始手動測試
                </button>
            )}
            {output !== null ? (
                <React.Fragment>
                    <h3 className={styles.sectionHeading}>正式評分輸出（「說出」的內容）</h3>
                    <div className={styles.selfTestOutput}>
                        {output || '（沒有任何「說出」內容）'}
                    </div>
                </React.Fragment>
            ) : null}
            {debugOutput ? (
                <React.Fragment>
                    <h3 className={styles.sectionHeading}>除錯輸出（「輸出訊息」積木，不計分）</h3>
                    <div className={styles.selfTestOutput}>{debugOutput}</div>
                </React.Fragment>
            ) : null}
        </div>
    );
};
SelfTestTab.propTypes = {
    vm: PropTypes.instanceOf(VM).isRequired
};

const GradingTab = ({grading, onRunGrading, demoLoaded}) => (
    <div className={styles.tabContent}>
        {demoLoaded ? (
            <div className={styles.demoWarningBanner}>
                ⚠ 目前畫布上的程式是「載入範例答案」載入的，不是學生自己寫的——這次評分
                （包含之後存進評分紀錄的結果）僅供功能測試參考，不能當作學生作答成績。
            </div>
        ) : null}
        <button
            className={styles.runButton}
            disabled={grading.isRunning}
            onClick={onRunGrading}
        >
            {grading.isRunning ? '評分中…' : '執行評分'}
        </button>
        {grading.results ? (
            <div className={styles.resultsBox}>
                <div className={styles.scoreLine}>
                    分數：{grading.totalScore} / {grading.maxScore}
                </div>
                {grading.results.map((result, index) => (
                    <div
                        className={styles.resultRow}
                        key={index}
                    >
                        <span className={result.pass ? styles.pass : styles.fail}>
                            {result.pass ? '通過' : '未通過'}
                        </span>
                        <span className={styles.resultInput}>輸入：{result.input}</span>
                    </div>
                ))}
            </div>
        ) : null}
        {grading.error ? (
            <div className={styles.errorBox}>評分時發生錯誤：{grading.error}</div>
        ) : null}
    </div>
);
GradingTab.propTypes = {
    demoLoaded: PropTypes.bool,
    grading: PropTypes.shape({
        isRunning: PropTypes.bool,
        totalScore: PropTypes.number,
        maxScore: PropTypes.number,
        results: PropTypes.array,
        error: PropTypes.string
    }).isRequired,
    onRunGrading: PropTypes.func.isRequired
};

const HistoryTab = ({history}) => (
    <div className={styles.tabContent}>
        {history.length === 0 ? (
            <p className={styles.placeholder}>還沒有評分紀錄，去「評分」分頁執行評分後會出現在這裡（存在這台電腦的瀏覽器裡）。</p>
        ) : (
            history.map((entry, index) => (
                <div
                    className={styles.historyItem}
                    key={index}
                >
                    <span>
                        {entry.totalScore} / {entry.maxScore}
                        {entry.demoLoaded ? (
                            <span className={styles.historyDemoTag}>載入範例</span>
                        ) : null}
                    </span>
                    <span className={styles.historyTime}>{new Date(entry.timestamp).toLocaleString()}</span>
                </div>
            ))
        )}
    </div>
);
HistoryTab.propTypes = {
    history: PropTypes.arrayOf(PropTypes.shape({
        totalScore: PropTypes.number,
        maxScore: PropTypes.number,
        timestamp: PropTypes.number,
        demoLoaded: PropTypes.bool
    })).isRequired
};

const JudgePanel = ({vm}) => {
    const [selectedTaskCode, setSelectedTaskCode] = useState(null);
    const [activeTab, setActiveTab] = useState('description');
    const [grading, setGrading] = useState({
        isRunning: false,
        totalScore: null,
        maxScore: null,
        results: null,
        error: null
    });
    const [demoStatus, setDemoStatus] = useState(null);
    const [demoLoaded, setDemoLoaded] = useState(false);
    const [history, setHistory] = useState([]);

    const found = selectedTaskCode ? findTaskByCode(selectedTaskCode) : null;
    const task = found ? found.task : null;

    useEffect(() => {
        if (task) {
            setHistory(loadHistory(task.code));
            setActiveTab('description');
            setGrading({isRunning: false, totalScore: null, maxScore: null, results: null, error: null});
            setDemoStatus(null);
            setDemoLoaded(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTaskCode]);

    const handleLoadDemo = async () => {
        setDemoStatus('載入中…');
        try {
            const response = await fetch(task.answerProjectUrl);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            const buffer = await response.arrayBuffer();
            await vm.loadProject(buffer);
            setDemoStatus('已載入範例答案，可以在左邊積木畫布查看。');
            setDemoLoaded(true);
        } catch (err) {
            setDemoStatus(`載入失敗：${err && err.message ? err.message : String(err)}`);
        }
    };

    const handleRunGrading = async () => {
        setGrading({isRunning: true, totalScore: null, maxScore: null, results: null, error: null});
        try {
            const {totalScore, maxScore, results} = await withVisibilityRestore(
                vm, () => gradeSubmission(vm, task.testCases)
            );
            setGrading({isRunning: false, totalScore, maxScore, results, error: null});
            setHistory(saveHistoryEntry(task.code, {totalScore, maxScore, timestamp: Date.now(), demoLoaded}));
        } catch (err) {
            setGrading({
                isRunning: false,
                totalScore: null,
                maxScore: null,
                results: null,
                error: err && err.message ? err.message : String(err)
            });
        }
    };

    if (!task) {
        return (
            <div className={styles.judgePanel}>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span className={styles.taskTitle}>osep-judge</span>
                    </div>
                </div>
                <TaskList
                    courses={courses}
                    onSelectTask={setSelectedTaskCode}
                />
            </div>
        );
    }

    const scoreLabel = grading.totalScore === null ? '尚未評分' : `${grading.totalScore} / ${grading.maxScore}`;

    return (
        <div className={styles.judgePanel}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <button
                        className={styles.backButton}
                        onClick={() => setSelectedTaskCode(null)}
                    >
                        ← 題目列表
                    </button>
                    <span className={styles.taskTitle}>{task.title}</span>
                    {demoLoaded ? (
                        <span className={styles.headerDemoTag}>載入範例中</span>
                    ) : null}
                </div>
                <span className={styles.scoreBadge}>{scoreLabel}</span>
            </div>
            <div className={styles.tabBar}>
                {TABS.map(tab => (
                    <button
                        className={activeTab === tab.id ? styles.tabButtonActive : styles.tabButton}
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {activeTab === 'description' && (
                <DescriptionTab
                    demoLoaded={demoLoaded}
                    demoStatus={demoStatus}
                    task={task}
                    onLoadDemo={handleLoadDemo}
                />
            )}
            {activeTab === 'selftest' && <SelfTestTab vm={vm} />}
            {activeTab === 'grading' && (
                <GradingTab
                    demoLoaded={demoLoaded}
                    grading={grading}
                    onRunGrading={handleRunGrading}
                />
            )}
            {activeTab === 'history' && <HistoryTab history={history} />}
        </div>
    );
};

JudgePanel.propTypes = {
    vm: PropTypes.instanceOf(VM).isRequired
};

export default JudgePanel;
