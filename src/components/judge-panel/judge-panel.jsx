import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import VM from 'scratch-vm';
import {gradeSubmission, prepareVmForGrading, runTestCase} from '../../lib/tw-judge-engine.js';
import {courses, findTaskByCode} from '../../lib/judge-content.js';
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

const DescriptionTab = ({task, onLoadDemo, demoStatus}) => (
    <div className={styles.tabContent}>
        <h3 className={styles.sectionHeading}>題目敘述</h3>
        <p className={styles.description}>{task.description}</p>
        <h3 className={styles.sectionHeading}>範例測資</h3>
        {task.examples.map((example, index) => (
            <div className={styles.exampleBox} key={index}>
                <div className={styles.exampleLabel}>範例 {index + 1}</div>
                <div><strong>輸入：</strong>{example.input}</div>
                <div><strong>輸出：</strong>{example.output}</div>
                {example.explanation ? (
                    <div className={styles.exampleExplanation}>{example.explanation}</div>
                ) : null}
            </div>
        ))}
        {task.loadable ? (
            <React.Fragment>
                <button
                    className={styles.demoButton}
                    onClick={onLoadDemo}
                >
                    載入範例
                </button>
                {demoStatus ? (
                    <div className={styles.demoStatus}>{demoStatus}</div>
                ) : null}
            </React.Fragment>
        ) : null}
    </div>
);
DescriptionTab.propTypes = {
    demoStatus: PropTypes.string,
    onLoadDemo: PropTypes.func.isRequired,
    task: PropTypes.shape({
        description: PropTypes.string,
        examples: PropTypes.array,
        loadable: PropTypes.bool
    }).isRequired
};

const SelfTestTab = ({vm}) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState(null);
    const [running, setRunning] = useState(false);

    const handleRun = async () => {
        setRunning(true);
        setOutput(null);
        try {
            const result = await withVisibilityRestore(
                vm, () => runTestCase(vm, {input, expectedOutput: null})
            );
            setOutput(result.actualOutput);
        } catch (err) {
            setOutput(`執行時發生錯誤：${err && err.message ? err.message : String(err)}`);
        } finally {
            setRunning(false);
        }
    };

    return (
        <div className={styles.tabContent}>
            <p className={styles.placeholder}>輸入自訂測資，執行目前的程式看看實際「說出」內容（不計分、不比對答案）。</p>
            <input
                className={styles.selfTestInput}
                placeholder="輸入測試資料，例如：Amy"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button
                className={styles.runButton}
                disabled={running}
                onClick={handleRun}
            >
                {running ? '執行中…' : '執行測試'}
            </button>
            {output !== null ? (
                <div className={styles.selfTestOutput}>
                    {output || '（沒有任何「說出」內容）'}
                </div>
            ) : null}
        </div>
    );
};
SelfTestTab.propTypes = {
    vm: PropTypes.instanceOf(VM).isRequired
};

const GradingTab = ({grading, onRunGrading}) => (
    <div className={styles.tabContent}>
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
                    <span>{entry.totalScore} / {entry.maxScore}</span>
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
        timestamp: PropTypes.number
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
    const [history, setHistory] = useState([]);

    const found = selectedTaskCode ? findTaskByCode(selectedTaskCode) : null;
    const task = found ? found.task : null;

    useEffect(() => {
        if (task) {
            setHistory(loadHistory(task.code));
            setActiveTab('description');
            setGrading({isRunning: false, totalScore: null, maxScore: null, results: null, error: null});
            setDemoStatus(null);
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
            setHistory(saveHistoryEntry(task.code, {totalScore, maxScore, timestamp: Date.now()}));
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
                    demoStatus={demoStatus}
                    task={task}
                    onLoadDemo={handleLoadDemo}
                />
            )}
            {activeTab === 'selftest' && <SelfTestTab vm={vm} />}
            {activeTab === 'grading' && (
                <GradingTab
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
