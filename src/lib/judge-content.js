/**
 * MVP-33後續：課程/題目內容資料模組（2026-08-04擴充：從BlocklyYdws M0-01/M0-02課程檔
 * 自動轉換，見scripts/judge-dev-tools/gen-judge-content.js，不要手動編輯本檔——
 * 要改題目內容請去改BlocklyYdws src/courses/下對應課程檔，重跑那份腳本重新產生）。
 *
 * 結構比照BlocklyYdws（courses -> tasks陣列）。
 * answerProjectUrl用window.location.origin動態產生（比照舊OSEP擴充功能的慣例），
 * 部署到GitHub Pages子路徑時可能需要調整。
 *
 * course.unlockCode：版權保護用的課程解鎖代碼（見task-list.jsx），值直接沿用
 * BlocklyYdws自己的courseCode（來源課程檔的完整檔名，不含.js），不用另外維護一套。
 */

const judgeContentBase = () => `${window.location.origin}/judge-content`;

export const courses = [
    {
        "code": "M0-01",
        "title": "程式起步：輸出與基本運算",
        "tier": "t0",
        "unlockCode": "M0-01-BasicOutput",
        "tasks": [
            {
                "id": "A-01-0",
                "code": "M0-01-A-01-0",
                "title": "Hello world",
                "description": "在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。\n請你寫一個小程式，讓使用者輸入自己的名字，然後程式要輸出一行「Hello, 名字」。\nHello後面會接小寫逗號，還有一個空白輸入\n這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。",
                "examples": [
                    {
                        "input": "Amy",
                        "output": "Hello, Amy",
                        "explanation": "第一個輸入 Amy，代表名字為 Amy\n程式輸出 Hello, Amy"
                    },
                    {
                        "input": "Tom",
                        "output": "Hello, Tom",
                        "explanation": ""
                    }
                ],
                "testCases": [
                    {
                        "input": "John",
                        "expectedOutput": "Hello, John",
                        "score": 10
                    },
                    {
                        "input": "Marry",
                        "expectedOutput": "Hello, Marry",
                        "score": 10
                    },
                    {
                        "input": "Sam",
                        "expectedOutput": "Hello, Sam",
                        "score": 10
                    },
                    {
                        "input": "Tom",
                        "expectedOutput": "Hello, Tom",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-01-BasicOutput/A-01-0.sb3"
            },
            {
                "id": "A-01-1",
                "code": "M0-01-A-01-1",
                "title": "一起學習吧",
                "description": "在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。\n請你寫一個小程式，讓使用者輸入好朋友一的名字、接著輸入好朋友二的名字，然後程式要輸出一行「朋友一名字,朋友二名字, 一起學習吧！」。\n朋友一名字後面、朋友二名字後面都會接小寫逗號，還有一個空白輸入\n這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。",
                "examples": [
                    {
                        "input": "Amy\nJohn",
                        "output": "Amy, John, 一起學習吧！",
                        "explanation": "第一個輸入 Amy，代表朋友一名字為 Amy\n第二個輸入 John，代表朋友二名字為 John\n程式輸出 Amy, John, 一起學習吧！"
                    },
                    {
                        "input": "Tom\nSusan",
                        "output": "Tom, Susan, 一起學習吧！",
                        "explanation": ""
                    }
                ],
                "testCases": [
                    {
                        "input": "John\nAmy",
                        "expectedOutput": "John, Amy, 一起學習吧！",
                        "score": 10
                    },
                    {
                        "input": "Tom\nSusan",
                        "expectedOutput": "Tom, Susan, 一起學習吧！",
                        "score": 10
                    },
                    {
                        "input": "Sam\nBrown",
                        "expectedOutput": "Sam, Brown, 一起學習吧！",
                        "score": 10
                    },
                    {
                        "input": "Justin\nLouise",
                        "expectedOutput": "Justin, Louise, 一起學習吧！",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-01-BasicOutput/A-01-1.sb3"
            },
            {
                "id": "A-02-0",
                "code": "M0-01-A-02-0",
                "title": "數字加總",
                "description": "當我們要處理數字時，常常需要加總。\n請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的總和。\n這樣的題目能幫助你熟悉數字資料處理。",
                "examples": [
                    {
                        "input": "9\n4",
                        "output": "13",
                        "explanation": "第一個輸入9\n第二個輸入4\n程式輸出9+4總和13"
                    },
                    {
                        "input": "6\n5",
                        "output": "11",
                        "explanation": ""
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n7",
                        "expectedOutput": "10",
                        "score": 10
                    },
                    {
                        "input": "99\n100",
                        "expectedOutput": "199",
                        "score": 10
                    },
                    {
                        "input": "78\n22",
                        "expectedOutput": "100",
                        "score": 10
                    },
                    {
                        "input": "21\n35",
                        "expectedOutput": "56",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-01-BasicOutput/A-02-0.sb3"
            },
            {
                "id": "A-02-1",
                "code": "M0-01-A-02-1",
                "title": "數字平均",
                "description": "當我們要處理數字時，常常需計算平均。\n請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的平均(四捨五入取整數)。\n這樣的題目能幫助你熟悉數字資料處理。",
                "examples": [
                    {
                        "input": "9\n4",
                        "output": "7",
                        "explanation": "第一個輸入9\n第二個輸入4\n程式輸出9、4的平均四捨五入取整數7"
                    },
                    {
                        "input": "6\n5",
                        "output": "6",
                        "explanation": ""
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n7",
                        "expectedOutput": "5",
                        "score": 10
                    },
                    {
                        "input": "99\n100",
                        "expectedOutput": "100",
                        "score": 10
                    },
                    {
                        "input": "78\n22",
                        "expectedOutput": "50",
                        "score": 10
                    },
                    {
                        "input": "21\n35",
                        "expectedOutput": "28",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-01-BasicOutput/A-02-1.sb3"
            },
            {
                "id": "A-03-0",
                "code": "M0-01-A-03-0",
                "title": "比較大小",
                "description": "在生活中常常會需要比較兩個數字誰比較大。\n\n請寫一個程式，輸入兩個整數，輸出較大的數字。\n\n如果兩個數字相同，就輸出「一樣大」。\n\n這樣的練習可以訓練你使用條件判斷。",
                "examples": [
                    {
                        "input": "8\n5",
                        "output": "8",
                        "explanation": "第一個輸入8\n第二個輸入5\n較大的是數字8，程式輸出8"
                    },
                    {
                        "input": "7\n7",
                        "output": "一樣大",
                        "explanation": ""
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n7",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "99\n100",
                        "expectedOutput": "100",
                        "score": 10
                    },
                    {
                        "input": "78\n22",
                        "expectedOutput": "78",
                        "score": 10
                    },
                    {
                        "input": "21\n21",
                        "expectedOutput": "一樣大",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-01-BasicOutput/A-03-0.sb3"
            },
            {
                "id": "A-03-1",
                "code": "M0-01-A-03-1",
                "title": "臺斤公斤大PK",
                "description": "在生活中常常會需要比較重量，台灣常見的單位有台斤、公斤，一台斤等於0.6公斤\n\n請寫一個程式，輸入兩個不同單位重量\n\n第一個數字輸入M，表示重量M台斤\n\n第二個數字輸入N，表示重量N公斤\n\n請比較兩筆重量輸入，輸出較大重量的數字及單位。\n如果兩個數字相同，就輸出「一樣重」。\n\n這樣的練習可以訓練你使用條件判斷。",
                "examples": [
                    {
                        "input": "10\n5",
                        "output": "10台斤",
                        "explanation": "第一個輸入10，表示10台斤\n第二個輸入5，表示5公斤\n較大的重量是10台斤，輸出10台斤"
                    },
                    {
                        "input": "5\n5",
                        "output": "5公斤",
                        "explanation": "第一個輸入5，表示5台斤\n第二個輸入5，表示5公斤\n較大的重量是5公斤，輸出5公斤"
                    },
                    {
                        "input": "10\n6",
                        "output": "一樣重",
                        "explanation": ""
                    }
                ],
                "testCases": [
                    {
                        "input": "10\n6",
                        "expectedOutput": "一樣重",
                        "score": 10
                    },
                    {
                        "input": "100\n70",
                        "expectedOutput": "70公斤",
                        "score": 10
                    },
                    {
                        "input": "78\n22",
                        "expectedOutput": "78台斤",
                        "score": 10
                    },
                    {
                        "input": "21\n21",
                        "expectedOutput": "21公斤",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-01-BasicOutput/A-03-1.sb3"
            }
        ]
    },
    {
        "code": "M0-02",
        "title": "變數與四則運算",
        "tier": "t0",
        "unlockCode": "M0-02-Variables",
        "tasks": [
            {
                "id": "BSA01-001",
                "code": "M0-02-BSA01-001",
                "title": "購買文具",
                "description": "小明到文具店購買鉛筆與橡皮擦。請根據單價與數量，計算總金額。",
                "examples": [
                    {
                        "input": "10 3 5 2",
                        "output": "40",
                        "explanation": "10×3 + 5×2 = 40。"
                    }
                ],
                "testCases": [
                    {
                        "input": "10 3 5 2",
                        "expectedOutput": "40",
                        "score": 10
                    },
                    {
                        "input": "12 4 8 3",
                        "expectedOutput": "72",
                        "score": 10
                    },
                    {
                        "input": "7 6 9 2",
                        "expectedOutput": "60",
                        "score": 10
                    },
                    {
                        "input": "15 1 20 4",
                        "expectedOutput": "95",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-02-Variables/BSA01-001.sb3"
            },
            {
                "id": "BSA01-002",
                "code": "M0-02-BSA01-002",
                "title": "飲料店結帳",
                "description": "飲料店販售紅茶與奶茶。請根據兩種飲料的單價與杯數，計算顧客應付金額。",
                "examples": [
                    {
                        "input": "25 2 40 3",
                        "output": "170",
                        "explanation": "25×2 + 40×3 = 170。"
                    }
                ],
                "testCases": [
                    {
                        "input": "25 2 40 3",
                        "expectedOutput": "170",
                        "score": 10
                    },
                    {
                        "input": "30 4 45 2",
                        "expectedOutput": "210",
                        "score": 10
                    },
                    {
                        "input": "20 5 35 1",
                        "expectedOutput": "135",
                        "score": 10
                    },
                    {
                        "input": "18 10 30 6",
                        "expectedOutput": "360",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-02-Variables/BSA01-002.sb3"
            },
            {
                "id": "BSA01-003",
                "code": "M0-02-BSA01-003",
                "title": "長方形周長與面積",
                "description": "給定長方形的長與寬，請計算長方形的周長與面積。",
                "examples": [
                    {
                        "input": "8 5",
                        "output": "26 40",
                        "explanation": "周長為 (8+5)×2=26，面積為 8×5=40。"
                    }
                ],
                "testCases": [
                    {
                        "input": "8 5",
                        "expectedOutput": "26 40",
                        "score": 10
                    },
                    {
                        "input": "10 3",
                        "expectedOutput": "26 30",
                        "score": 10
                    },
                    {
                        "input": "7 7",
                        "expectedOutput": "28 49",
                        "score": 10
                    },
                    {
                        "input": "15 4",
                        "expectedOutput": "38 60",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-02-Variables/BSA01-003.sb3"
            },
            {
                "id": "BSA01-004",
                "code": "M0-02-BSA01-004",
                "title": "秒數換算",
                "description": "給定一段時間的總秒數，請換算成幾分鐘又幾秒。",
                "examples": [
                    {
                        "input": "125",
                        "output": "2 5",
                        "explanation": "125 秒等於 2 分鐘又 5 秒。"
                    }
                ],
                "testCases": [
                    {
                        "input": "125",
                        "expectedOutput": "2 5",
                        "score": 10
                    },
                    {
                        "input": "59",
                        "expectedOutput": "0 59",
                        "score": 10
                    },
                    {
                        "input": "360",
                        "expectedOutput": "6 0",
                        "score": 10
                    },
                    {
                        "input": "754",
                        "expectedOutput": "12 34",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-02-Variables/BSA01-004.sb3"
            },
            {
                "id": "BSA01-005",
                "code": "M0-02-BSA01-005",
                "title": "找零錢",
                "description": "商店只使用 50 元、10 元與 1 元硬幣找零。給定找零金額，請計算最少需要多少枚硬幣。",
                "examples": [
                    {
                        "input": "187",
                        "output": "3 3 7",
                        "explanation": "187 元可找 3 枚 50 元、3 枚 10 元、7 枚 1 元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "187",
                        "expectedOutput": "3 3 7",
                        "score": 10
                    },
                    {
                        "input": "49",
                        "expectedOutput": "0 4 9",
                        "score": 10
                    },
                    {
                        "input": "250",
                        "expectedOutput": "5 0 0",
                        "score": 10
                    },
                    {
                        "input": "96",
                        "expectedOutput": "1 4 6",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-02-Variables/BSA01-005.sb3"
            },
            {
                "id": "BSA01-006",
                "code": "M0-02-BSA01-006",
                "title": "班級分組",
                "description": "老師要將學生平均分組。給定學生人數與每組人數，請計算可以分成幾組，以及剩下幾人。",
                "examples": [
                    {
                        "input": "32 5",
                        "output": "6 2",
                        "explanation": "32 人每 5 人一組，可以分成 6 組，剩下 2 人。"
                    }
                ],
                "testCases": [
                    {
                        "input": "32 5",
                        "expectedOutput": "6 2",
                        "score": 10
                    },
                    {
                        "input": "40 8",
                        "expectedOutput": "5 0",
                        "score": 10
                    },
                    {
                        "input": "27 4",
                        "expectedOutput": "6 3",
                        "score": 10
                    },
                    {
                        "input": "18 7",
                        "expectedOutput": "2 4",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-02-Variables/BSA01-006.sb3"
            },
            {
                "id": "BSA01-007",
                "code": "M0-02-BSA01-007",
                "title": "平均分數整數版",
                "description": "給定三科成績，請計算總分與整數平均。整數平均只取商，不處理小數。",
                "examples": [
                    {
                        "input": "80 75 91",
                        "output": "246 82",
                        "explanation": "總分 246，246 除以 3 的整數商為 82。"
                    }
                ],
                "testCases": [
                    {
                        "input": "80 75 91",
                        "expectedOutput": "246 82",
                        "score": 10
                    },
                    {
                        "input": "100 90 80",
                        "expectedOutput": "270 90",
                        "score": 10
                    },
                    {
                        "input": "66 67 68",
                        "expectedOutput": "201 67",
                        "score": 10
                    },
                    {
                        "input": "59 72 83",
                        "expectedOutput": "214 71",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-02-Variables/BSA01-007.sb3"
            },
            {
                "id": "BSA01-008",
                "code": "M0-02-BSA01-008",
                "title": "簡易旅行費用",
                "description": "一次旅行包含車票、餐費與門票。請根據人數與各項費用，計算全班總費用。",
                "examples": [
                    {
                        "input": "30 120 80 50",
                        "output": "7500",
                        "explanation": "每人費用為 120+80+50=250，30 人共 7500。"
                    }
                ],
                "testCases": [
                    {
                        "input": "30 120 80 50",
                        "expectedOutput": "7500",
                        "score": 10
                    },
                    {
                        "input": "25 100 70 40",
                        "expectedOutput": "5250",
                        "score": 10
                    },
                    {
                        "input": "18 150 60 90",
                        "expectedOutput": "5400",
                        "score": 10
                    },
                    {
                        "input": "40 80 85 35",
                        "expectedOutput": "8000",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-02-Variables/BSA01-008.sb3"
            }
        ]
    }
];

courses.forEach(course => {
    course.tasks.forEach(task => {
        Object.defineProperty(task, 'answerProjectUrl', {
            enumerable: true,
            get() { return `${judgeContentBase()}/${task.sb3Path}`; }
        });
        task.loadable = true;
    });
});

export const findTaskByCode = taskCode => {
    for (const course of courses) {
        const task = course.tasks.find(t => t.code === taskCode);
        if (task) return {course, task};
    }
    return null;
};
