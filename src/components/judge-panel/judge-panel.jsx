import React, {useState} from 'react';
import PropTypes from 'prop-types';
import VM from 'scratch-vm';
import {gradeSubmission, prepareVmForGrading} from '../../lib/tw-judge-engine.js';
import styles from './judge-panel.css';

/**
 * MVP-33-3：題目面板，仿官方平台(demo.csie.ntnu.edu.tw/ps)的
 * 說明/自行測試/評分/評分紀錄四分頁版面。
 *
 * 注意：本檔案完成時Chrome瀏覽器擴充功能無法連線，只用npm run build驗證過語法/打包
 * 不報錯，尚未在瀏覽器裡實際點過分頁、按過評分按鈕。下次有瀏覽器務必實際操作驗證。
 *
 * 目前題目內容先寫死M0-01第一小題（A-01-0），courseCode載入機制留給之後的MVP再做。
 */

const TASK = {
    code: 'M0-01-A-01-0',
    title: 'Hello world',
    description: [
        '在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。',
        '請你寫一個小程式，讓使用者輸入自己的名字，然後程式要輸出一行「Hello, 名字」。',
        'Hello後面會接小寫逗號，還有一個空白輸入',
        '這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。'
    ].join('\n'),
    examples: [
        {input: 'Amy', output: 'Hello, Amy', explanation: '第一個輸入 Amy，代表名字為 Amy\n程式輸出 Hello, Amy'},
        {input: 'Tom', output: 'Hello, Tom', explanation: ''}
    ],
    testCases: [
        {input: 'John', expectedOutput: 'Hello, John', score: 10},
        {input: 'Marry', expectedOutput: 'Hello, Marry', score: 10},
        {input: 'Sam', expectedOutput: 'Hello, Sam', score: 10},
        {input: 'Tom', expectedOutput: 'Hello, Tom', score: 10}
    ]
};

const TABS = [
    {id: 'description', label: '說明'},
    {id: 'selftest', label: '自行測試'},
    {id: 'grading', label: '評分'},
    {id: 'history', label: '評分紀錄'}
];

const DescriptionTab = () => (
    <div className={styles.tabContent}>
        <h3 className={styles.sectionHeading}>題目敘述</h3>
        <p className={styles.description}>{TASK.description}</p>
        <h3 className={styles.sectionHeading}>範例測資</h3>
        {TASK.examples.map((example, index) => (
            <div className={styles.exampleBox} key={index}>
                <div className={styles.exampleLabel}>範例 {index + 1}</div>
                <div><strong>輸入：</strong>{example.input}</div>
                <div><strong>輸出：</strong>{example.output}</div>
                {example.explanation ? (
                    <div className={styles.exampleExplanation}>{example.explanation}</div>
                ) : null}
            </div>
        ))}
    </div>
);

const SelfTestTab = () => (
    <div className={styles.tabContent}>
        <p className={styles.placeholder}>自行測試（待補：MVP-33後續，先讓學生手動輸入自訂測資試跑）</p>
    </div>
);

const GradingTab = ({vm, grading, onRunGrading}) => (
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
    onRunGrading: PropTypes.func.isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

const HistoryTab = () => (
    <div className={styles.tabContent}>
        <p className={styles.placeholder}>評分紀錄（待補：MVP-33後續，先做本機儲存每次評分結果）</p>
    </div>
);

const JudgePanel = ({vm}) => {
    const [activeTab, setActiveTab] = useState('description');
    const [grading, setGrading] = useState({
        isRunning: false,
        totalScore: null,
        maxScore: null,
        results: null,
        error: null
    });

    const handleRunGrading = async () => {
        setGrading({isRunning: true, totalScore: null, maxScore: null, results: null, error: null});
        // 記住評分前每個角色原本的visible狀態，評分結束後要還原，
        // 避免影響學生自己編輯畫面的狀態（見tw-judge-engine.js的visible=false陷阱說明）。
        const previousVisibility = vm.runtime.targets.map(target => ({
            target,
            visible: target.visible
        }));
        try {
            prepareVmForGrading(vm);
            const {totalScore, maxScore, results} = await gradeSubmission(vm, TASK.testCases);
            setGrading({isRunning: false, totalScore, maxScore, results, error: null});
        } catch (err) {
            setGrading({
                isRunning: false,
                totalScore: null,
                maxScore: null,
                results: null,
                error: err && err.message ? err.message : String(err)
            });
        } finally {
            previousVisibility.forEach(({target, visible}) => {
                target.visible = visible;
            });
        }
    };

    return (
        <div className={styles.judgePanel}>
            <div className={styles.header}>
                <span className={styles.taskTitle}>{TASK.title}</span>
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
            {activeTab === 'description' && <DescriptionTab />}
            {activeTab === 'selftest' && <SelfTestTab />}
            {activeTab === 'grading' && (
                <GradingTab
                    grading={grading}
                    vm={vm}
                    onRunGrading={handleRunGrading}
                />
            )}
            {activeTab === 'history' && <HistoryTab />}
        </div>
    );
};

JudgePanel.propTypes = {
    vm: PropTypes.instanceOf(VM).isRequired
};

export default JudgePanel;
