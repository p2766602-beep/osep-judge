/**
 * MVP-33後續：課程/題目內容資料模組。
 *
 * 結構比照BlocklyYdws（courses -> tasks陣列），先只有M0-01-A-01-0這一題有完整內容
 * （敘述/範例/測資/demo答案.sb3皆備），其餘題目之後擴充時只需要在這裡加資料，
 * 不用改judge-panel.jsx或task-list.jsx的邏輯。
 *
 * answerProjectUrl用window.location.origin動態產生（比照舊OSEP擴充功能的慣例），
 * 部署到GitHub Pages子路徑時可能需要調整。
 */

const judgeContentBase = () => `${window.location.origin}/judge-content`;

export const courses = [
    {
        code: 'M0-01',
        title: '程式起步：輸出與基本運算',
        tier: 't0',
        tasks: [
            {
                id: 'A-01-0',
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
                ],
                difficulty: 'L1',
                difficultyLabel: 'L1｜基礎',
                get answerProjectUrl () {
                    return `${judgeContentBase()}/m0/M0-01-BasicOutput/A-01-0.sb3`;
                },
                loadable: true
            }
        ]
    }
];

export const findTaskByCode = taskCode => {
    for (const course of courses) {
        const task = course.tasks.find(t => t.code === taskCode);
        if (task) return {course, task};
    }
    return null;
};
