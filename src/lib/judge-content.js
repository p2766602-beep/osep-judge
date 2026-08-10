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
    },
    {
        "code": "M0-03",
        "title": "條件判斷入門",
        "tier": "t0",
        "unlockCode": "M0-03-Conditionals",
        "tasks": [
            {
                "id": "BSC01-001",
                "code": "M0-03-BSC01-001",
                "title": "及格或不及格",
                "description": "給定一位學生的分數，請判斷是否及格。分數大於或等於 60 分為及格。",
                "examples": [
                    {
                        "input": "75",
                        "output": "PASS",
                        "explanation": "75 大於等於 60，所以及格。"
                    }
                ],
                "testCases": [
                    {
                        "input": "75",
                        "expectedOutput": "PASS",
                        "score": 0
                    },
                    {
                        "input": "60",
                        "expectedOutput": "PASS",
                        "score": 0
                    },
                    {
                        "input": "59",
                        "expectedOutput": "FAIL",
                        "score": 0
                    },
                    {
                        "input": "0",
                        "expectedOutput": "FAIL",
                        "score": 0
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-03-Conditionals/BSC01-001.sb3"
            },
            {
                "id": "BSC01-002",
                "code": "M0-03-BSC01-002",
                "title": "比較兩個數",
                "description": "給定兩個整數，請判斷第一個數和第二個數的大小關係。",
                "examples": [
                    {
                        "input": "8 5",
                        "output": "A",
                        "explanation": "8 大於 5，所以輸出 A。"
                    }
                ],
                "testCases": [
                    {
                        "input": "8 5",
                        "expectedOutput": "A",
                        "score": 0
                    },
                    {
                        "input": "3 12",
                        "expectedOutput": "B",
                        "score": 0
                    },
                    {
                        "input": "7 7",
                        "expectedOutput": "SAME",
                        "score": 0
                    },
                    {
                        "input": "-2 -5",
                        "expectedOutput": "A",
                        "score": 0
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-03-Conditionals/BSC01-002.sb3"
            },
            {
                "id": "BSC01-003",
                "code": "M0-03-BSC01-003",
                "title": "判斷奇偶數",
                "description": "給定一個整數，請判斷它是奇數或偶數。",
                "examples": [
                    {
                        "input": "14",
                        "output": "EVEN",
                        "explanation": "14 可以被 2 整除，所以是偶數。"
                    }
                ],
                "testCases": [
                    {
                        "input": "14",
                        "expectedOutput": "EVEN",
                        "score": 0
                    },
                    {
                        "input": "9",
                        "expectedOutput": "ODD",
                        "score": 0
                    },
                    {
                        "input": "0",
                        "expectedOutput": "EVEN",
                        "score": 0
                    },
                    {
                        "input": "101",
                        "expectedOutput": "ODD",
                        "score": 0
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-03-Conditionals/BSC01-003.sb3"
            },
            {
                "id": "BSC01-008",
                "code": "M0-03-BSC01-008",
                "title": "是否為閏年簡化版",
                "description": "簡化閏年規則：若年份可以被 4 整除，視為閏年；否則不是閏年。",
                "examples": [
                    {
                        "input": "2024",
                        "output": "LEAP",
                        "explanation": "2024 可以被 4 整除。"
                    }
                ],
                "testCases": [
                    {
                        "input": "2024",
                        "expectedOutput": "LEAP",
                        "score": 0
                    },
                    {
                        "input": "2025",
                        "expectedOutput": "COMMON",
                        "score": 0
                    },
                    {
                        "input": "2000",
                        "expectedOutput": "LEAP",
                        "score": 0
                    },
                    {
                        "input": "1999",
                        "expectedOutput": "COMMON",
                        "score": 0
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-03-Conditionals/BSC01-008.sb3"
            },
            {
                "id": "BSC01-012",
                "code": "M0-03-BSC01-012",
                "title": "密碼長度檢查",
                "description": "系統要求密碼長度至少 8 個字元。給定密碼長度，請判斷是否符合規定。",
                "examples": [
                    {
                        "input": "6",
                        "output": "SHORT",
                        "explanation": "6 小於 8，密碼太短。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6",
                        "expectedOutput": "SHORT",
                        "score": 0
                    },
                    {
                        "input": "8",
                        "expectedOutput": "OK",
                        "score": 0
                    },
                    {
                        "input": "12",
                        "expectedOutput": "OK",
                        "score": 0
                    },
                    {
                        "input": "1",
                        "expectedOutput": "SHORT",
                        "score": 0
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-03-Conditionals/BSC01-012.sb3"
            },
            {
                "id": "BSC01-004",
                "code": "M0-03-BSC01-004",
                "title": "門票優惠判斷",
                "description": "某遊樂園規定，年齡小於 12 歲或大於等於 65 歲可以購買優惠票，其餘為一般票。",
                "examples": [
                    {
                        "input": "10",
                        "output": "DISCOUNT",
                        "explanation": "10 歲小於 12 歲，可以購買優惠票。"
                    }
                ],
                "testCases": [
                    {
                        "input": "10",
                        "expectedOutput": "DISCOUNT",
                        "score": 0
                    },
                    {
                        "input": "12",
                        "expectedOutput": "NORMAL",
                        "score": 0
                    },
                    {
                        "input": "64",
                        "expectedOutput": "NORMAL",
                        "score": 0
                    },
                    {
                        "input": "65",
                        "expectedOutput": "DISCOUNT",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-03-Conditionals/BSC01-004.sb3"
            },
            {
                "id": "BSC01-005",
                "code": "M0-03-BSC01-005",
                "title": "溫度警示",
                "description": "給定目前溫度，請判斷天氣狀態。低於 18 度為 COLD，18 到 27 度為 OK，高於 27 度為 HOT。",
                "examples": [
                    {
                        "input": "30",
                        "output": "HOT",
                        "explanation": "30 高於 27，所以輸出 HOT。"
                    }
                ],
                "testCases": [
                    {
                        "input": "15",
                        "expectedOutput": "COLD",
                        "score": 0
                    },
                    {
                        "input": "18",
                        "expectedOutput": "OK",
                        "score": 0
                    },
                    {
                        "input": "27",
                        "expectedOutput": "OK",
                        "score": 0
                    },
                    {
                        "input": "30",
                        "expectedOutput": "HOT",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-03-Conditionals/BSC01-005.sb3"
            },
            {
                "id": "BSC01-006",
                "code": "M0-03-BSC01-006",
                "title": "成績等第",
                "description": "給定一個分數，請依分數輸出等第。90 分以上為 A，80 到 89 為 B，70 到 79 為 C，60 到 69 為 D，未滿 60 為 F。",
                "examples": [
                    {
                        "input": "86",
                        "output": "B",
                        "explanation": "86 介於 80 到 89，所以等第為 B。"
                    }
                ],
                "testCases": [
                    {
                        "input": "95",
                        "expectedOutput": "A",
                        "score": 0
                    },
                    {
                        "input": "86",
                        "expectedOutput": "B",
                        "score": 0
                    },
                    {
                        "input": "70",
                        "expectedOutput": "C",
                        "score": 0
                    },
                    {
                        "input": "59",
                        "expectedOutput": "F",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-03-Conditionals/BSC01-006.sb3"
            },
            {
                "id": "BSC01-007",
                "code": "M0-03-BSC01-007",
                "title": "三角形成立判斷",
                "description": "給定三個正整數作為邊長，請判斷是否可以形成三角形。任兩邊和都必須大於第三邊。",
                "examples": [
                    {
                        "input": "3 4 5",
                        "output": "YES",
                        "explanation": "3、4、5 可以形成三角形。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3 4 5",
                        "expectedOutput": "YES",
                        "score": 0
                    },
                    {
                        "input": "1 2 3",
                        "expectedOutput": "NO",
                        "score": 0
                    },
                    {
                        "input": "5 5 9",
                        "expectedOutput": "YES",
                        "score": 0
                    },
                    {
                        "input": "2 2 5",
                        "expectedOutput": "NO",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-03-Conditionals/BSC01-007.sb3"
            },
            {
                "id": "BSC01-009",
                "code": "M0-03-BSC01-009",
                "title": "購物免運費",
                "description": "網路商店規定，購物金額大於或等於 1000 元可以免運費，否則需加收 80 元運費。請輸出最後應付金額。",
                "examples": [
                    {
                        "input": "950",
                        "output": "1030",
                        "explanation": "950 未滿 1000，需加 80 元運費。"
                    }
                ],
                "testCases": [
                    {
                        "input": "950",
                        "expectedOutput": "1030",
                        "score": 0
                    },
                    {
                        "input": "1000",
                        "expectedOutput": "1000",
                        "score": 0
                    },
                    {
                        "input": "1200",
                        "expectedOutput": "1200",
                        "score": 0
                    },
                    {
                        "input": "80",
                        "expectedOutput": "160",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-03-Conditionals/BSC01-009.sb3"
            },
            {
                "id": "BSC01-010",
                "code": "M0-03-BSC01-010",
                "title": "電影院票價",
                "description": "電影院票價規則：未滿 12 歲票價 150 元，12 到 64 歲票價 280 元，65 歲以上票價 120 元。請依年齡輸出票價。",
                "examples": [
                    {
                        "input": "8",
                        "output": "150",
                        "explanation": "8 歲未滿 12 歲，票價為 150 元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "8",
                        "expectedOutput": "150",
                        "score": 0
                    },
                    {
                        "input": "12",
                        "expectedOutput": "280",
                        "score": 0
                    },
                    {
                        "input": "64",
                        "expectedOutput": "280",
                        "score": 0
                    },
                    {
                        "input": "70",
                        "expectedOutput": "120",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-03-Conditionals/BSC01-010.sb3"
            },
            {
                "id": "BSC01-011",
                "code": "M0-03-BSC01-011",
                "title": "遊戲血量狀態",
                "description": "給定角色目前血量，請判斷狀態。血量大於 70 為 SAFE，30 到 70 為 WARNING，低於 30 為 DANGER。",
                "examples": [
                    {
                        "input": "25",
                        "output": "DANGER",
                        "explanation": "25 低於 30，所以輸出 DANGER。"
                    }
                ],
                "testCases": [
                    {
                        "input": "80",
                        "expectedOutput": "SAFE",
                        "score": 0
                    },
                    {
                        "input": "70",
                        "expectedOutput": "WARNING",
                        "score": 0
                    },
                    {
                        "input": "30",
                        "expectedOutput": "WARNING",
                        "score": 0
                    },
                    {
                        "input": "25",
                        "expectedOutput": "DANGER",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-03-Conditionals/BSC01-011.sb3"
            }
        ]
    },
    {
        "code": "M0-04",
        "title": "迴圈與累計",
        "tier": "t0",
        "unlockCode": "M0-04-LoopsAndSum",
        "tasks": [
            {
                "id": "JSL01-D01",
                "code": "M0-04-JSL01-D01",
                "title": "從1數到N",
                "description": "輸入一個正整數 N，請依序輸出 1 到 N 的所有整數，每個數字各佔一行。本題用來示範最基本的計數迴圈",
                "examples": [
                    {
                        "input": "3",
                        "output": "1\n2\n3",
                        "explanation": "依序輸出 1、2、3。"
                    },
                    {
                        "input": "1",
                        "output": "1",
                        "explanation": "N 為 1，只輸出 1。"
                    }
                ],
                "testCases": [
                    {
                        "input": "1",
                        "expectedOutput": "1",
                        "score": 20
                    },
                    {
                        "input": "3",
                        "expectedOutput": "1\n2\n3",
                        "score": 20
                    },
                    {
                        "input": "5",
                        "expectedOutput": "1\n2\n3\n4\n5",
                        "score": 20
                    },
                    {
                        "input": "7",
                        "expectedOutput": "1\n2\n3\n4\n5\n6\n7",
                        "score": 20
                    },
                    {
                        "input": "10",
                        "expectedOutput": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
                        "score": 20
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-04-LoopsAndSum/JSL01-D01.sb3"
            },
            {
                "id": "A-07-0",
                "code": "M0-04-A-07-0",
                "title": "九九乘法",
                "description": "請寫一個程式，輸入一個整數 N，輸出 1 到 9 的乘法表結果。\n例如輸入 3，輸出 1x3=3, 2x3=6, …, 9x3=27。\n\n程式輸出3 6 9 12 15 18 21 24 27\n\n這樣的練習能讓你熟悉迴圈的運用。",
                "examples": [
                    {
                        "input": "3",
                        "output": "3 6 9 12 15 18 21 24 27",
                        "explanation": "第一行輸入3，經過九九乘法計算後\n程式輸出3 6 9 12 15 18 21 24 27"
                    },
                    {
                        "input": "6",
                        "output": "6 12 18 24 30 36 42 48 54",
                        "explanation": "第一行輸入6，經過九九乘法計算後\n程式輸出6 12 18 24 30 36 42 48 54"
                    }
                ],
                "testCases": [
                    {
                        "input": "3",
                        "expectedOutput": "3 6 9 12 15 18 21 24 27",
                        "score": 10
                    },
                    {
                        "input": "6",
                        "expectedOutput": "6 12 18 24 30 36 42 48 54",
                        "score": 10
                    },
                    {
                        "input": "5",
                        "expectedOutput": "5 10 15 20 25 30 35 40 45",
                        "score": 10
                    },
                    {
                        "input": "9",
                        "expectedOutput": "9 18 27 36 45 54 63 72 81",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-04-LoopsAndSum/A-07-0.sb3"
            },
            {
                "id": "JSL01-D02",
                "code": "M0-04-JSL01-D02",
                "title": "1到N加總示範",
                "description": "輸入一個正整數 N，請計算 1 + 2 + 3 + ... + N 的總和。本題用來示範累加變數的初始化、更新與輸出。",
                "examples": [
                    {
                        "input": "5",
                        "output": "15",
                        "explanation": "1+2+3+4+5=15。"
                    },
                    {
                        "input": "10",
                        "output": "55",
                        "explanation": "1 到 10 的總和為 55。"
                    }
                ],
                "testCases": [
                    {
                        "input": "1",
                        "expectedOutput": "1",
                        "score": 20
                    },
                    {
                        "input": "3",
                        "expectedOutput": "6",
                        "score": 20
                    },
                    {
                        "input": "5",
                        "expectedOutput": "15",
                        "score": 20
                    },
                    {
                        "input": "10",
                        "expectedOutput": "55",
                        "score": 20
                    },
                    {
                        "input": "100",
                        "expectedOutput": "5050",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-04-LoopsAndSum/JSL01-D02.sb3"
            },
            {
                "id": "JSL01-P01",
                "code": "M0-04-JSL01-P01",
                "title": "N個數字累加",
                "description": "第一行輸入一個整數 N，第二行輸入 N 個整數。請計算這 N 個整數的總和。本題用來練習重複讀取資料並累加",
                "examples": [
                    {
                        "input": "3\n10 20 30",
                        "output": "60",
                        "explanation": "10+20+30=60。"
                    },
                    {
                        "input": "5\n1 1 1 1 1",
                        "output": "5",
                        "explanation": "五個 1 的總和為 5。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n10 20 30",
                        "expectedOutput": "60",
                        "score": 20
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "expectedOutput": "10",
                        "score": 20
                    },
                    {
                        "input": "5\n5 5 5 5 5",
                        "expectedOutput": "25",
                        "score": 20
                    },
                    {
                        "input": "2\n100 200",
                        "expectedOutput": "300",
                        "score": 20
                    },
                    {
                        "input": "6\n1 3 5 7 9 11",
                        "expectedOutput": "36",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-04-LoopsAndSum/JSL01-P01.sb3"
            },
            {
                "id": "JSL01-P02",
                "code": "M0-04-JSL01-P02",
                "title": "只加偶數",
                "description": "第一行輸入一個整數 N，第二行輸入 N 個整數。請只把其中的偶數加總後輸出。本題用來練習迴圈內加入條件判斷",
                "examples": [
                    {
                        "input": "5\n1 2 3 4 5",
                        "output": "6",
                        "explanation": "偶數為 2 與 4，總和為 6。"
                    },
                    {
                        "input": "3\n1 3 5",
                        "output": "0",
                        "explanation": "沒有偶數，所以輸出 0。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n1 2 3 4 5",
                        "expectedOutput": "6",
                        "score": 20
                    },
                    {
                        "input": "4\n2 4 6 8",
                        "expectedOutput": "20",
                        "score": 20
                    },
                    {
                        "input": "3\n1 3 5",
                        "expectedOutput": "0",
                        "score": 20
                    },
                    {
                        "input": "6\n10 11 12 13 14 15",
                        "expectedOutput": "36",
                        "score": 20
                    },
                    {
                        "input": "1\n100",
                        "expectedOutput": "100",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-04-LoopsAndSum/JSL01-P02.sb3"
            },
            {
                "id": "JSL01-P03",
                "code": "M0-04-JSL01-P03",
                "title": "簡化階乘",
                "description": "輸入一個正整數 N，請計算 1 × 2 × 3 × ... × N 的結果。本題用來練習累乘變數與迴圈結構",
                "examples": [
                    {
                        "input": "4",
                        "output": "24",
                        "explanation": "1×2×3×4=24。"
                    },
                    {
                        "input": "5",
                        "output": "120",
                        "explanation": "1×2×3×4×5=120。"
                    }
                ],
                "testCases": [
                    {
                        "input": "1",
                        "expectedOutput": "1",
                        "score": 20
                    },
                    {
                        "input": "3",
                        "expectedOutput": "6",
                        "score": 20
                    },
                    {
                        "input": "4",
                        "expectedOutput": "24",
                        "score": 20
                    },
                    {
                        "input": "5",
                        "expectedOutput": "120",
                        "score": 20
                    },
                    {
                        "input": "7",
                        "expectedOutput": "5040",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-04-LoopsAndSum/JSL01-P03.sb3"
            },
            {
                "id": "A-06-0",
                "code": "M0-04-A-06-0",
                "title": "連續加總",
                "description": "有時候我們需要計算從 1 到某個數字的總和。\n請寫一個程式，輸入一個整數 N，計算從 1 加到 N 的結果。\n\n例如 N=5 時，1+2+3+4+5=15。這樣的練習可以訓練你使用迴圈進行加總。",
                "examples": [
                    {
                        "input": "5",
                        "output": "15",
                        "explanation": "輸入 5 → 1+2+3+4+5=15\n程式輸出15"
                    },
                    {
                        "input": "10",
                        "output": "55",
                        "explanation": "輸入 10 → 1+2+3+4...+10=55\n程式輸出55"
                    }
                ],
                "testCases": [
                    {
                        "input": "5",
                        "expectedOutput": "15",
                        "score": 10
                    },
                    {
                        "input": "20",
                        "expectedOutput": "210",
                        "score": 10
                    },
                    {
                        "input": "88",
                        "expectedOutput": "3916",
                        "score": 10
                    },
                    {
                        "input": "100",
                        "expectedOutput": "5050",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-04-LoopsAndSum/A-06-0.sb3"
            },
            {
                "id": "A-06-1",
                "code": "M0-04-A-06-1",
                "title": "連續乘積",
                "description": "輸入一個整數 N，計算從 1*2*3....*N 的結果。\n\n例如 N=5 時，1*2*3*4*5=120。\n這樣的練習可以訓練你使用迴圈計算。",
                "examples": [
                    {
                        "input": "5",
                        "output": "120",
                        "explanation": "輸入 5 → 1*2*3*4*5=120\n程式輸出120"
                    },
                    {
                        "input": "6",
                        "output": "720",
                        "explanation": "6 → 1*2*3*4*5*6=720\n程式輸出720"
                    }
                ],
                "testCases": [
                    {
                        "input": "5",
                        "expectedOutput": "120",
                        "score": 10
                    },
                    {
                        "input": "6",
                        "expectedOutput": "720",
                        "score": 10
                    },
                    {
                        "input": "1",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "8",
                        "expectedOutput": "40320",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-04-LoopsAndSum/A-06-1.sb3"
            },
            {
                "id": "A-07-1",
                "code": "M0-04-A-07-1",
                "title": "跳繩比賽法",
                "description": "體育課上，學生進行跳繩小組競賽比賽，小組人數不定，每人跳的次數也不同。\n\n請設計一個程式，第一行輸入數字N，代表小組有N人，後續輸入N筆資料\n\n第二行輸入一串數列共N筆整數，序列的數字以空隔間格。\n\n程式輸出小組全部人員總共跳繩幾次？",
                "examples": [
                    {
                        "input": "5\n20 19 36 25 30",
                        "output": "130",
                        "explanation": "第一行輸入5，表示小組有5人。\n第二行輸入20 19 36 25 30，表示小組每人分別跳20、19、36、25、30下。\n程式輸出小組累計共跳130下"
                    },
                    {
                        "input": "3\n6 12 18",
                        "output": "36",
                        "explanation": "第一行輸入3，表示小組有3人。\n第二行輸入6 12 18，表示小組每人分別跳6、12、18下。\n程式輸出小組累計共跳36下"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n18 21 24 27",
                        "expectedOutput": "90",
                        "score": 10
                    },
                    {
                        "input": "6\n6 12 18 24 30 36",
                        "expectedOutput": "126",
                        "score": 10
                    },
                    {
                        "input": "5\n5 10 15 20 25",
                        "expectedOutput": "75",
                        "score": 10
                    },
                    {
                        "input": "1\n9",
                        "expectedOutput": "9",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-04-LoopsAndSum/A-07-1.sb3"
            },
            {
                "id": "A-08-0",
                "code": "M0-04-A-08-0",
                "title": "找最大值",
                "description": "老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分。\n\n輸入第一行是整數 N，代表有 N 筆成績\n\n第二行輸入 N 個數字，數字間以空白間隔\n\n程式輸出最大值。\n這樣的練習可以幫助你處理一串資料，並找出其中的最大值。",
                "examples": [
                    {
                        "input": "3\n9 6 8",
                        "output": "9",
                        "explanation": "第一行輸入3，表示有3個數字要輸入\n第二行輸入9 6 8三個數字序列\n程式運算輸出最大值9"
                    },
                    {
                        "input": "6\n99 12 129 16 8",
                        "output": "129",
                        "explanation": "第一行輸入6，表示有6個數字要輸入\n第二行輸入99 12 129 16 8 3六個數字序列\n程式運算輸出最大值129"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n9 6 8",
                        "expectedOutput": "9",
                        "score": 10
                    },
                    {
                        "input": "6\n99 12 129 16 8 3",
                        "expectedOutput": "129",
                        "score": 10
                    },
                    {
                        "input": "5\n89 15 47 0 56",
                        "expectedOutput": "89",
                        "score": 10
                    },
                    {
                        "input": "1\n25",
                        "expectedOutput": "25",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-04-LoopsAndSum/A-08-0.sb3"
            },
            {
                "id": "A-08-1",
                "code": "M0-04-A-08-1",
                "title": "找最大最小值",
                "description": "老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分及最低分。\n\n輸入第一行是整數 N，代表有 N 筆成績\n\n第二行輸入 N 個數字，數字間以空白間隔\n\n程式輸出最大值及最小值。\n這樣的練習可以幫助你處理一串資料，並同時找出其中的最大值、最小值。",
                "examples": [
                    {
                        "input": "3\n9 6 8",
                        "output": "9\n6",
                        "explanation": "第一行輸入3，表示有3個數字要輸入\n第二行輸入9 6 8三個數字序列\n程式運算輸出最大值9，最小值6"
                    },
                    {
                        "input": "6\n99 12 129 16 8 3",
                        "output": "129\n3",
                        "explanation": "第一行輸入6，表示有6個數字要輸入\n第二行輸入99 12 129 16 8 3六個數字序列\n程式運算輸出最大值129，最小值3"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n9 6 8",
                        "expectedOutput": "9 6",
                        "score": 10
                    },
                    {
                        "input": "6\n99 12 129 16 8 3",
                        "expectedOutput": "129 3",
                        "score": 10
                    },
                    {
                        "input": "5\n89 15 47 0 56",
                        "expectedOutput": "89 0",
                        "score": 10
                    },
                    {
                        "input": "1\n25",
                        "expectedOutput": "25 25",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-04-LoopsAndSum/A-08-1.sb3"
            }
        ]
    },
    {
        "code": "M0-05",
        "title": "清單走訪與讀取",
        "tier": "t0",
        "unlockCode": "M0-05-ListBasics",
        "tasks": [
            {
                "id": "JSA01-D01",
                "code": "M0-05-JSA01-D01",
                "title": "清單逐一讀取",
                "description": "第一行輸入一個整數 N，第二行輸入 N 個整數。請依照原本順序逐一輸出每個數字，每個數字各佔一行。本題用來示範清單逐一讀取與輸出。",
                "examples": [
                    {
                        "input": "3\n5 8 2",
                        "output": "5\n8\n2",
                        "explanation": "依序輸出清單中的三個數字。"
                    },
                    {
                        "input": "2\n10 20",
                        "output": "10\n20",
                        "explanation": "依序輸出 10 與 20。"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\n7",
                        "expectedOutput": "7",
                        "score": 20
                    },
                    {
                        "input": "3\n5 8 2",
                        "expectedOutput": "5\n8\n2",
                        "score": 20
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "expectedOutput": "1\n2\n3\n4",
                        "score": 20
                    },
                    {
                        "input": "5\n9 7 5 3 1",
                        "expectedOutput": "9\n7\n5\n3\n1",
                        "score": 20
                    },
                    {
                        "input": "2\n100 200",
                        "expectedOutput": "100\n200",
                        "score": 20
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-05-ListBasics/JSA01-D01.sb3"
            },
            {
                "id": "count-001",
                "code": "M0-05-count-001",
                "title": "暖身運動-基礎計數",
                "description": "小小勇者在開始冒險前，必須先鍛鍊體力。教練要求勇者必須繞著操場跑N圈。\n勇者一邊跑，必須一邊大聲數出目前是第幾圈，直到跑完為止。\n輸入格式\n第一行：輸入一個整數 N ，代表總共要跑的圈數。 N 為大於 0 的整數\n程式依照順序輸出從 1 到 N 的數字。數字之間以空白隔開。",
                "examples": [
                    {
                        "input": "5",
                        "output": "1 2 3 4 5",
                        "explanation": "第一行輸入數字5\n程式輸出數字序列1 2 3 4 5"
                    },
                    {
                        "input": "3",
                        "output": "1 2 3",
                        "explanation": "第一行輸入數字3\n程式輸出數字序列1 2 3"
                    }
                ],
                "testCases": [
                    {
                        "input": "9",
                        "expectedOutput": "1 2 3 4 5 6 7 8 9",
                        "score": 10
                    },
                    {
                        "input": "5",
                        "expectedOutput": "1 2 3 4 5",
                        "score": 10
                    },
                    {
                        "input": "7",
                        "expectedOutput": "1 2 3 4 5 6 7",
                        "score": 10
                    },
                    {
                        "input": "1",
                        "expectedOutput": "1",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-05-ListBasics/count-001.sb3"
            },
            {
                "id": "count-002",
                "code": "M0-05-count-002",
                "title": "跳石過河-間隔計數",
                "description": "勇者來到了一條充滿鱷魚的河流，河面上有一排標有號碼的石頭（1, 2, 3, 4...）。為了安全，勇者決定施展「輕功」，從第 1 塊石頭開始，每次跳躍都跳過 1 個石頭（也就是每次號碼 +2），直到超過或剛好到達指定的目標號碼 N 為止。請印出勇者踩到的所有石頭號碼。\n輸入格式\n第一行：輸入一個整數 N ，代表河岸對面的目標號碼。 N 為大於 0 的整數\n程式依照順序輸出勇者踩到的石頭編號，從 1 開始，每次加 2。\n數字之間以空白隔開。",
                "examples": [
                    {
                        "input": "6",
                        "output": "1 3 5",
                        "explanation": "第一行輸入數字6\n從 1 開始跳，下一個是 3，再來是 5。再跳就是 7 (超過 6 了)，所以停在 5。\n程式輸出數字序列1 3 5"
                    },
                    {
                        "input": "7",
                        "output": "1 3 5 7",
                        "explanation": "第一行輸入數字7\n從 1 開始跳，下一個是 3、5、7剛好到達7\n程式輸出數字序列1 3 5 7"
                    }
                ],
                "testCases": [
                    {
                        "input": "1",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "4",
                        "expectedOutput": "1 3",
                        "score": 10
                    },
                    {
                        "input": "15",
                        "expectedOutput": "1 3 5 7 9 11 13 15",
                        "score": 10
                    },
                    {
                        "input": "10",
                        "expectedOutput": "1 3 5 7 9",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-05-ListBasics/count-002.sb3"
            },
            {
                "id": "count-003",
                "code": "M0-05-count-003",
                "title": "火箭發射倒數",
                "description": "勇者要搭乘火箭前往太空站。火箭發射控制中心需要一個倒數計時器。請你設計一個程式，輸入開始倒數的秒數 S，程式會從 S 開始倒數，每次減少 1，直到數到 0 為止。\n輸入格式\n第一行：輸入一個整數 S ，代表倒數的起始秒數。\n程式依照順序輸出S到0的編號，每次減1。\n數字之間以空白隔開。",
                "examples": [
                    {
                        "input": "5",
                        "output": "5 4 3 2 1 0",
                        "explanation": "第一行輸入數字5\n從 5 開始倒數，下一個是4、3、2、1、0\n程式輸出數字序列5 4 3 2 1 0"
                    },
                    {
                        "input": "7",
                        "output": "7 6 5 4 3 2 1 0",
                        "explanation": "第一行輸入數字7\n從 7開始倒數，下一個是6、5、4、3、2、1、0\n程式輸出數字序列7 6 5 4 3 2 1 0"
                    }
                ],
                "testCases": [
                    {
                        "input": "1",
                        "expectedOutput": "1 0",
                        "score": 10
                    },
                    {
                        "input": "4",
                        "expectedOutput": "4 3 2 1 0",
                        "score": 10
                    },
                    {
                        "input": "15",
                        "expectedOutput": "15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0",
                        "score": 10
                    },
                    {
                        "input": "10",
                        "expectedOutput": "10 9 8 7 6 5 4 3 2 1 0",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-05-ListBasics/count-003.sb3"
            },
            {
                "id": "count-004",
                "code": "M0-05-count-004",
                "title": "魔法金幣倍增術",
                "description": "勇者學會了「倍增術」。這個魔法的規則是：當勇者唸出數字 i 時，魔法袋裡就會變出 i * 10 枚金幣。勇者決定從 1 開始唸，連續唸到 N。請計算勇者每次唸完數字後，分別得到了多少金幣？\n輸入格式\n第一行：輸入一個整數 N ，代表勇者最後唸出的數字。\n利用迴圈變數 i 進行計算，輸出從 1 到 N 每個數字乘以 10 的結果。\n數字之間以空白隔開。",
                "examples": [
                    {
                        "input": "5",
                        "output": "10 20 30 40 50",
                        "explanation": "第一行輸入數字5\n程式輸出數字序列10 20 30 40 50"
                    },
                    {
                        "input": "7",
                        "output": "10 20 30 40 50 60 70",
                        "explanation": "第一行輸入數字7\n程式輸出數字序列10 20 30 40 50 60 70"
                    }
                ],
                "testCases": [
                    {
                        "input": "1",
                        "expectedOutput": "10",
                        "score": 10
                    },
                    {
                        "input": "4",
                        "expectedOutput": "10 20 30 40",
                        "score": 10
                    },
                    {
                        "input": "10",
                        "expectedOutput": "10 20 30 40 50 60 70 80 90 100",
                        "score": 10
                    },
                    {
                        "input": "3",
                        "expectedOutput": "10 20 30",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M0-05-ListBasics/count-004.sb3"
            },
            {
                "id": "JSA01-D02",
                "code": "M0-05-JSA01-D02",
                "title": "清單加總與平均示範",
                "description": "第一行輸入一個整數 N，第二行輸入 N 個整數。請輸出這 N 個數字的總和與整數平均，兩個結果各佔一行。平均值請使用整數除法，只保留整數部分。",
                "examples": [
                    {
                        "input": "3\n10 20 30",
                        "output": "60\n20",
                        "explanation": "總和 60，平均 20。"
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "output": "10\n2",
                        "explanation": "10 除以 4 取整數部分為 2。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n10 20 30",
                        "expectedOutput": "60\n20",
                        "score": 20
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "expectedOutput": "10\n2",
                        "score": 20
                    },
                    {
                        "input": "5\n5 5 5 5 5",
                        "expectedOutput": "25\n5",
                        "score": 20
                    },
                    {
                        "input": "2\n7 8",
                        "expectedOutput": "15\n7",
                        "score": 20
                    },
                    {
                        "input": "6\n1 2 3 4 5 6",
                        "expectedOutput": "21\n3",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-05-ListBasics/JSA01-D02.sb3"
            },
            {
                "id": "JSA01-D03",
                "code": "M0-05-JSA01-D03",
                "title": "清單最大最小值示範",
                "description": "第一行輸入一個整數 N，第二行輸入 N 個整數。請找出其中的最大值與最小值，兩個結果各佔一行。本題用來示範比較與更新最大最小值。",
                "examples": [
                    {
                        "input": "5\n8 3 10 1 6",
                        "output": "10\n1",
                        "explanation": "最大值 10，最小值 1。"
                    },
                    {
                        "input": "3\n7 7 7",
                        "output": "7\n7",
                        "explanation": "所有數字相同時，最大值與最小值相同。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n8 3 10 1 6",
                        "expectedOutput": "10\n1",
                        "score": 20
                    },
                    {
                        "input": "3\n7 7 7",
                        "expectedOutput": "7\n7",
                        "score": 20
                    },
                    {
                        "input": "4\n-1 5 0 3",
                        "expectedOutput": "5\n-1",
                        "score": 20
                    },
                    {
                        "input": "2\n100 20",
                        "expectedOutput": "100\n20",
                        "score": 20
                    },
                    {
                        "input": "6\n9 2 4 8 1 6",
                        "expectedOutput": "9\n1",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-05-ListBasics/JSA01-D03.sb3"
            },
            {
                "id": "count-005",
                "code": "M0-05-count-005",
                "title": "存錢買裝備",
                "description": "勇者想買一把傳說之劍。他決定實施一個存錢計畫：第 1 天存 1 元，第 2 天存 2 元，第 3 天存 3 元...以此類推，第 i 天就存 i 元。\n請問在第 N 天結束後，勇者總共存了多少錢？\n輸入格式\n第一行：輸入一個整數 N ，代表存錢的天數。\n輸出一個整數，代表從第 1 天到第 N 天存下的金額總和（Sum）。\n(提示：你需要一個變數來當作「存錢筒」，在迴圈中把每天的錢加進去)。",
                "examples": [
                    {
                        "input": "3",
                        "output": "6",
                        "explanation": "第一行輸入數字3\n1+2+3=6，程式輸出6"
                    },
                    {
                        "input": "7",
                        "output": "28",
                        "explanation": "第一行輸入數字7\n1+2+3+4+5+6+7=28，程式輸出28"
                    }
                ],
                "testCases": [
                    {
                        "input": "9",
                        "expectedOutput": "45",
                        "score": 10
                    },
                    {
                        "input": "20",
                        "expectedOutput": "210",
                        "score": 10
                    },
                    {
                        "input": "10",
                        "expectedOutput": "55",
                        "score": 10
                    },
                    {
                        "input": "100",
                        "expectedOutput": "5050",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-05-ListBasics/count-005.sb3"
            },
            {
                "id": "count-006",
                "code": "M0-05-count-006",
                "title": "萬能傳送門",
                "description": "勇者發現了一個萬能傳送門。這個傳送門可以讓勇者自由設定「起點」、「終點」以及每次傳送的「跨度（距離）」。 請設計一個程式，讀取三個數字，分別代表：起點 (Start)、終點 (End)、跨度 (Step)。 請依序印出傳送過程中經過的所有座標點。\n輸入格式\n第一行：輸入一個整數 M ，代表起點。\n第二行：輸入一個整數 N ，代表終點。\n第三行：輸入一個整數 O ，代表跨度。\n(N>M，O>0)。\n輸出從起點開始，每次增加跨度，直到超過終點為止的所有數字。",
                "examples": [
                    {
                        "input": "2\n10\n2",
                        "output": "2 4 6 8 10",
                        "explanation": "第一行輸入數字2，代表起點2\n第二行輸入數字10，代表終點10\n第三行輸入數字2，代表每次增加2\n程式輸出每一個經過的座標：2 4 6 8 10"
                    },
                    {
                        "input": "5\n15\n3",
                        "output": "5 8 11 14",
                        "explanation": "第一行輸入數字5，代表起點5\n第二行輸入數字15，代表終點15\n第三行輸入數字3，代表每次增加3\n程式輸出每一個經過的座標：5 8 11 14，下一個是17，超過15不輸出"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\n5\n1",
                        "expectedOutput": "1 2 3 4 5",
                        "score": 10
                    },
                    {
                        "input": "0\n10\n5",
                        "expectedOutput": "0 5 10",
                        "score": 10
                    },
                    {
                        "input": "10\n20\n2",
                        "expectedOutput": "10 12 14 16 18 20",
                        "score": 10
                    },
                    {
                        "input": "1\n10\n3",
                        "expectedOutput": "1 4 7 10",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-05-ListBasics/count-006.sb3"
            },
            {
                "id": "count-007",
                "code": "M0-05-count-007",
                "title": "寶箱獵人",
                "description": "勇者來到了一條長長的藏寶走廊，走廊上的地磚編號從 1 到 N。藏寶圖上寫著：「只有編號是 $K$ 的倍數的地磚下藏有寶箱。」\n請你幫助勇者找出所有藏有寶箱的地磚編號。\n輸入格式\n第一行：輸入一個整數 M ，第一個數字M代表地磚總數，\n第二行：輸入一個整數 N ，第二個數字N代表倍數，M大於等於N(N>M)。\n輸出從 1 到 M 之間，所有 N 的倍數。\n數字之間以空白隔開。\n(提示：想一想，迴圈的「間隔 (Step)」應該設為多少？起點應該是 1 還是 K？)",
                "examples": [
                    {
                        "input": "10\n3",
                        "output": "3 6 9",
                        "explanation": "第一行輸入數字10，代表統計範圍從1到10\n第二行輸入數字3，代表要找出小於等於10且為3的倍數\n程式輸出：3 6 9"
                    },
                    {
                        "input": "20\n5",
                        "output": "5 10 15 20",
                        "explanation": "第一行輸入數字20，代表統計範圍從1到20\n第二行輸入數字5，代表要找出小於等於20且為5的倍數\n程式輸出：5 10 15 20"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n2",
                        "expectedOutput": "2 4",
                        "score": 10
                    },
                    {
                        "input": "15\n4",
                        "expectedOutput": "4 8 12",
                        "score": 10
                    },
                    {
                        "input": "7\n7",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "20\n6",
                        "expectedOutput": "6 12 18",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-05-ListBasics/count-007.sb3"
            }
        ]
    },
    {
        "code": "M0-06",
        "title": "找最大值/最小值延伸",
        "tier": "t0",
        "unlockCode": "M0-06-MinMaxExtra",
        "tasks": [
            {
                "id": "EXT01-001",
                "code": "M0-06-EXT01-001",
                "title": "找最大值",
                "description": "給定 N 個整數，請找出其中最大的數字。",
                "examples": [
                    {
                        "input": "5\n8 3 12 7 10",
                        "output": "12",
                        "explanation": "5 個數字中最大的是 12。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n8 3 12 7 10",
                        "expectedOutput": "12",
                        "score": 0
                    },
                    {
                        "input": "4\n1 1 1 1",
                        "expectedOutput": "1",
                        "score": 0
                    },
                    {
                        "input": "6\n-5 -2 -9 -1 -7 -3",
                        "expectedOutput": "-1",
                        "score": 0
                    },
                    {
                        "input": "3\n100 50 99",
                        "expectedOutput": "100",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-06-MinMaxExtra/EXT01-001.sb3"
            },
            {
                "id": "EXT01-002",
                "code": "M0-06-EXT01-002",
                "title": "找最小值",
                "description": "給定 N 個整數，請找出其中最小的數字。",
                "examples": [
                    {
                        "input": "5\n8 3 12 7 10",
                        "output": "3",
                        "explanation": "5 個數字中最小的是 3。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n8 3 12 7 10",
                        "expectedOutput": "3",
                        "score": 0
                    },
                    {
                        "input": "4\n6 6 6 6",
                        "expectedOutput": "6",
                        "score": 0
                    },
                    {
                        "input": "6\n-5 -2 -9 -1 -7 -3",
                        "expectedOutput": "-9",
                        "score": 0
                    },
                    {
                        "input": "3\n100 50 99",
                        "expectedOutput": "50",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-06-MinMaxExtra/EXT01-002.sb3"
            },
            {
                "id": "EXT01-003",
                "code": "M0-06-EXT01-003",
                "title": "最大最小差距",
                "description": "給定 N 個整數，請找出最大值與最小值，並計算兩者差距。",
                "examples": [
                    {
                        "input": "5\n8 3 12 7 10",
                        "output": "12 3 9",
                        "explanation": "最大值 12，最小值 3，差距為 9。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n8 3 12 7 10",
                        "expectedOutput": "12 3 9",
                        "score": 0
                    },
                    {
                        "input": "4\n6 6 6 6",
                        "expectedOutput": "6 6 0",
                        "score": 0
                    },
                    {
                        "input": "6\n-5 -2 -9 -1 -7 -3",
                        "expectedOutput": "-1 -9 8",
                        "score": 0
                    },
                    {
                        "input": "3\n100 50 99",
                        "expectedOutput": "100 50 50",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M0-06-MinMaxExtra/EXT01-003.sb3"
            },
            {
                "id": "EXT01-004",
                "code": "M0-06-EXT01-004",
                "title": "最高分的位置",
                "description": "給定 N 位學生的成績，請找出最高分第一次出現的位置。位置從 1 開始計算。",
                "examples": [
                    {
                        "input": "6\n70 95 80 95 60 88",
                        "output": "95 2",
                        "explanation": "最高分是 95，第一次出現在第 2 個位置。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n70 95 80 95 60 88",
                        "expectedOutput": "95 2",
                        "score": 0
                    },
                    {
                        "input": "4\n100 90 80 70",
                        "expectedOutput": "100 1",
                        "score": 0
                    },
                    {
                        "input": "5\n50 60 70 80 90",
                        "expectedOutput": "90 5",
                        "score": 0
                    },
                    {
                        "input": "3\n88 88 88",
                        "expectedOutput": "88 1",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M0-06-MinMaxExtra/EXT01-004.sb3"
            },
            {
                "id": "EXT01-005",
                "code": "M0-06-EXT01-005",
                "title": "最低溫的位置",
                "description": "給定 N 天的溫度，請找出最低溫第一次出現的位置。位置從 1 開始計算。",
                "examples": [
                    {
                        "input": "5\n22 18 20 18 25",
                        "output": "18 2",
                        "explanation": "最低溫是 18，第一次出現在第 2 天。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n22 18 20 18 25",
                        "expectedOutput": "18 2",
                        "score": 0
                    },
                    {
                        "input": "4\n5 4 3 2",
                        "expectedOutput": "2 4",
                        "score": 0
                    },
                    {
                        "input": "6\n-1 -3 -2 -3 0 1",
                        "expectedOutput": "-3 2",
                        "score": 0
                    },
                    {
                        "input": "3\n10 10 10",
                        "expectedOutput": "10 1",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M0-06-MinMaxExtra/EXT01-005.sb3"
            },
            {
                "id": "EXT01-006",
                "code": "M0-06-EXT01-006",
                "title": "第二高分",
                "description": "給定 N 位學生的成績，請找出最高分與第二高分。保證至少有兩種不同分數。",
                "examples": [
                    {
                        "input": "6\n70 95 80 95 60 88",
                        "output": "95 88",
                        "explanation": "最高分是 95，第二高的不同分數是 88。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n70 95 80 95 60 88",
                        "expectedOutput": "95 88",
                        "score": 0
                    },
                    {
                        "input": "5\n100 90 80 70 60",
                        "expectedOutput": "100 90",
                        "score": 0
                    },
                    {
                        "input": "4\n10 20 20 5",
                        "expectedOutput": "20 10",
                        "score": 0
                    },
                    {
                        "input": "7\n-1 -5 -3 -1 -2 -8 -4",
                        "expectedOutput": "-1 -2",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M0-06-MinMaxExtra/EXT01-006.sb3"
            },
            {
                "id": "EXT01-007",
                "code": "M0-06-EXT01-007",
                "title": "相鄰最大差",
                "description": "給定 N 個整數，請找出相鄰兩個數字之間的最大差值。差值一律用較大的數減較小的數。",
                "examples": [
                    {
                        "input": "5\n3 8 6 15 10",
                        "output": "9",
                        "explanation": "相鄰差值為 5、2、9、5，最大是 9。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n3 8 6 15 10",
                        "expectedOutput": "9",
                        "score": 0
                    },
                    {
                        "input": "2\n100 40",
                        "expectedOutput": "60",
                        "score": 0
                    },
                    {
                        "input": "6\n1 2 3 4 5 6",
                        "expectedOutput": "1",
                        "score": 0
                    },
                    {
                        "input": "4\n10 30 5 25",
                        "expectedOutput": "25",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M0-06-MinMaxExtra/EXT01-007.sb3"
            },
            {
                "id": "EXT01-008",
                "code": "M0-06-EXT01-008",
                "title": "區間最大值",
                "description": "給定 N 個整數，以及查詢區間 L 到 R，請找出第 L 個到第 R 個數字中的最大值。位置從 1 開始計算。",
                "examples": [
                    {
                        "input": "6\n5 8 3 12 7 10\n2 5",
                        "output": "12",
                        "explanation": "第 2 到第 5 個數字是 8、3、12、7，最大值為 12。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n5 8 3 12 7 10\n2 5",
                        "expectedOutput": "12",
                        "score": 0
                    },
                    {
                        "input": "5\n1 2 3 4 5\n1 3",
                        "expectedOutput": "3",
                        "score": 0
                    },
                    {
                        "input": "4\n9 8 7 6\n3 4",
                        "expectedOutput": "7",
                        "score": 0
                    },
                    {
                        "input": "7\n-5 -1 -9 -3 -2 -8 -4\n2 6",
                        "expectedOutput": "-1",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M0-06-MinMaxExtra/EXT01-008.sb3"
            }
        ]
    },
    {
        "code": "JSB00",
        "title": "基礎練習1",
        "unlockCode": null,
        "tasks": [
            {
                "id": "A-01-0",
                "code": "JSB00-A-01-0",
                "title": "Hello world",
                "description": "在程式設計的第一步，最重要的是能夠讀取",
                "examples": [
                    {
                        "input": "Amy",
                        "output": "Hello, Amy",
                        "explanation": "第一個輸入 Amy，代表名字為 Amy\n程式輸出 Hello, Amy"
                    },
                    {
                        "input": "Tom",
                        "output": "Hello, Tom",
                        "explanation": "第一個輸入 Tom，代表名字為 Tom\n程式輸出 Hello, Amy"
                    }
                ],
                "testCases": [
                    {
                        "input": "Amy",
                        "expectedOutput": "Hello, Amy",
                        "score": 50
                    },
                    {
                        "input": "Tom",
                        "expectedOutput": "Hello, Tom",
                        "score": 50
                    }
                ],
                "sb3Path": "m0/JSB00/A-01-0.sb3"
            },
            {
                "id": "A-01-1",
                "code": "JSB00-A-01-1",
                "title": "一起學習吧",
                "description": "在程式設計的第一步，最重要的是能夠讀取",
                "examples": [
                    {
                        "input": "Amy\nJohn",
                        "output": "Amy, John, 一起學習吧！",
                        "explanation": "第一個輸入 Amy，代表朋友一名字為 Amy\n第二個輸入 John，代表朋友二名字為 John\n程式輸出 Amy, John, 一起學習吧！"
                    },
                    {
                        "input": "Tom\nSusan",
                        "output": "Tom, Susan, 一起學習吧！",
                        "explanation": "第一個輸入 Tom，代表第一個名字為 Tom\n第二個輸入 Susan，代表第二個名字為 Susan\n程式輸出 Tom, Susan, 一起學習吧！"
                    }
                ],
                "testCases": [
                    {
                        "input": "Amy\nJohn",
                        "expectedOutput": "Amy, John, 一起學習吧！",
                        "score": 50
                    },
                    {
                        "input": "Tom\nSusan",
                        "expectedOutput": "Tom, Susan, 一起學習吧！",
                        "score": 50
                    }
                ],
                "sb3Path": "m0/JSB00/A-01-1.sb3"
            },
            {
                "id": "A-02-0",
                "code": "JSB00-A-02-0",
                "title": "數字加總",
                "description": "當我們要處理數字時，常常需要加總。\n\n請設計一個程式，讓",
                "examples": [
                    {
                        "input": "9\n4",
                        "output": "13",
                        "explanation": "第一個輸入9\n第二個輸入4\n程式輸出9+4總和13"
                    },
                    {
                        "input": "6\n5",
                        "output": "11",
                        "explanation": "第一個輸入6\n第二個輸入5\n程式輸出6+5總和11"
                    }
                ],
                "testCases": [
                    {
                        "input": "9\n4",
                        "expectedOutput": "13",
                        "score": 50
                    },
                    {
                        "input": "6\n5",
                        "expectedOutput": "11",
                        "score": 50
                    }
                ],
                "sb3Path": "m0/JSB00/A-02-0.sb3"
            },
            {
                "id": "A-02-1",
                "code": "JSB00-A-02-1",
                "title": "數字平均",
                "description": "當我們要處理數字時，常常需計算平均。\n\n請設計一個程式，讓",
                "examples": [
                    {
                        "input": "9\n4",
                        "output": "7",
                        "explanation": "第一個輸入9\n第二個輸入4\n程式輸出9、4的平均四捨五入取整數7"
                    },
                    {
                        "input": "6\n5",
                        "output": "6",
                        "explanation": "第一個輸入6\n第二個輸入5\n程式輸出6、5的平均四捨五入取整數6"
                    }
                ],
                "testCases": [
                    {
                        "input": "9\n4",
                        "expectedOutput": "7",
                        "score": 50
                    },
                    {
                        "input": "6\n5",
                        "expectedOutput": "6",
                        "score": 50
                    }
                ],
                "sb3Path": "m0/JSB00/A-02-1.sb3"
            },
            {
                "id": "A-03-0",
                "code": "JSB00-A-03-0",
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
                        "explanation": "第一個輸入7\n第二個輸入7\n二個數一樣大，程式輸出一樣大"
                    }
                ],
                "testCases": [
                    {
                        "input": "8\n5",
                        "expectedOutput": "8",
                        "score": 50
                    },
                    {
                        "input": "7\n7",
                        "expectedOutput": "一樣大",
                        "score": 50
                    }
                ],
                "sb3Path": "m0/JSB00/A-03-0.sb3"
            },
            {
                "id": "A-04-0",
                "code": "JSB00-A-04-0",
                "title": "判斷奇偶數",
                "description": "程式設計中，常常需要根據數字的性質進行分類。\n\n請你寫一個程式，輸入一個整數，如果這個數除以2的餘數為0，表示是偶數，輸出 Even，如果餘數是1，表示是奇數，輸出 Odd。\n\n這樣的練習可以幫助你熟悉條件判斷的應用。",
                "examples": [
                    {
                        "input": "8",
                        "output": "Even",
                        "explanation": "輸入8，8除以2餘數=0\n程式輸出偶數Even"
                    },
                    {
                        "input": "7",
                        "output": "Odd",
                        "explanation": "輸入7，7除以2餘數=1\n程式輸出奇數數Odd"
                    }
                ],
                "testCases": [
                    {
                        "input": "3",
                        "expectedOutput": "Odd",
                        "score": 10
                    },
                    {
                        "input": "99",
                        "expectedOutput": "Odd",
                        "score": 10
                    },
                    {
                        "input": "78",
                        "expectedOutput": "Even",
                        "score": 10
                    },
                    {
                        "input": "22",
                        "expectedOutput": "Even",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSB00/A-04-0.sb3"
            },
            {
                "id": "A-03-1",
                "code": "JSB00-A-03-1",
                "title": "臺斤公斤大PK",
                "description": "在生活中常常會需要比較重量，台灣常見的單位有台斤、公斤，一台斤等於0.6公斤\n\n請寫一個程式，輸入兩個不同單位重量\n\n第一個數字輸入M，表示重量M台斤\n\n第二個數字輸入N，表示重量N公斤\n\n請比較兩筆重量輸入，輸出較大重量的數字及單位。\n\n如果兩個數字相同，就輸出「一樣重」。\n\n這樣的練習可以訓練你使用條件判斷。",
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
                        "explanation": "第一個輸入10，表示10台斤\n第二個輸入6，表示6公斤\n兩個重量一樣種，輸出一樣重"
                    }
                ],
                "testCases": [
                    {
                        "input": "10\n5",
                        "expectedOutput": "10台斤",
                        "score": 33
                    },
                    {
                        "input": "5\n5",
                        "expectedOutput": "5公斤",
                        "score": 33
                    },
                    {
                        "input": "10\n6",
                        "expectedOutput": "一樣重",
                        "score": 33
                    }
                ],
                "sb3Path": "m0/JSB00/A-03-1.sb3"
            },
            {
                "id": "A-04-1",
                "code": "JSB00-A-04-1",
                "title": "成績等第",
                "description": "不少學校成績採用等弟制，80~100為A，70~79為B，60~69為C，50~59為D，其餘49分以下為E\n\n請你寫一個程式，輸入一個整數(0~100)，輸出對應的成績等弟。\n\n這樣的練習可以幫助你熟悉條件判斷的應用。",
                "examples": [
                    {
                        "input": "90",
                        "output": "A",
                        "explanation": "輸入90，表示成績90\n程式輸出A"
                    },
                    {
                        "input": "45",
                        "output": "E",
                        "explanation": "輸入45，表示成績45\n程式輸出E"
                    }
                ],
                "testCases": [
                    {
                        "input": "69",
                        "expectedOutput": "C",
                        "score": 10
                    },
                    {
                        "input": "99",
                        "expectedOutput": "A",
                        "score": 10
                    },
                    {
                        "input": "78",
                        "expectedOutput": "B",
                        "score": 10
                    },
                    {
                        "input": "55",
                        "expectedOutput": "D",
                        "score": 10
                    },
                    {
                        "input": "12",
                        "expectedOutput": "E",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSB00/A-04-1.sb3"
            },
            {
                "id": "A-05-0",
                "code": "JSB00-A-05-0",
                "title": "三科成績計算",
                "description": "小明參加了數學、英文、自然三科的段考，老師希望能快速算出總分與平均分數，並判斷是否及格。\n\n請設計程式，輸入三科的成績，計算總分與平均。\n\n平均成績以四捨五入取到整數\n\n如果平均分數大於等於 60，就輸出「及格」，否則輸出「不及格」。\n\n這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。",
                "examples": [
                    {
                        "input": "3\n80 70 90",
                        "output": "240\n80\n及格",
                        "explanation": "第一行輸入3,表示有3筆資料\n第二行輸入3筆資料80 70 90，經過計算後\n總分、平均、及格或不及格180 80 及格"
                    },
                    {
                        "input": "3\n50 42 60",
                        "output": "152\n51\n不及格",
                        "explanation": "第一行輸入3,表示有3筆資料\n第二行輸入3筆資料50 42 60，經過計算後\n程式輸出總分、平均、及格或不及格152 51 不及格"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n20 60 90",
                        "expectedOutput": "170 57 不及格",
                        "score": 10
                    },
                    {
                        "input": "3\n80 70 90",
                        "expectedOutput": "240 80 及格",
                        "score": 10
                    },
                    {
                        "input": "3\n45 65 80",
                        "expectedOutput": "190 63 及格",
                        "score": 10
                    },
                    {
                        "input": "3\n100 100 90",
                        "expectedOutput": "290 97 及格",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSB00/A-05-0.sb3"
            },
            {
                "id": "A-05-1",
                "code": "JSB00-A-05-1",
                "title": "第二、三件購物優惠",
                "description": "大南百貨進行第二、第三件優惠活動，購買3件物品，第2件9折，第3件8折。\n\n請設計程式，依序輸入三件物品的定價，計算三件物品合計售價，以及最後優惠多少元。\n\n每件物品打折後價格以無條件捨去取整數\n\n程式最後輸出 定價加總總額、售價加總總額、優惠多少元",
                "examples": [
                    {
                        "input": "3\n80 70 90",
                        "output": "240\n215\n25",
                        "explanation": "第一行輸入3,表示有3筆資料\n第二行輸入3筆資料80 70 90，經過計算後\n第二筆70打9折再無條件捨去，共63元\n第三筆90打8折再無條件捨去，共72元\n程式輸出定價加總總額240元，售價加總總額215元，共優惠25元"
                    },
                    {
                        "input": "3\n50 42 60",
                        "output": "152\n135\n17",
                        "explanation": "第一行輸入3,表示有3筆資料\n第二行輸入3筆資料50 42 60，經過計算後\n第二筆42打9折再無條件捨去，共37元\n第三筆60打8折再無條件捨去，共48元\n程式輸出定價加總總額240元，售價加總總額215元，共優惠25元"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n60 65 1999",
                        "expectedOutput": "2124 1717 407",
                        "score": 10
                    },
                    {
                        "input": "3\n70 90 965",
                        "expectedOutput": "1125 923 202",
                        "score": 10
                    },
                    {
                        "input": "3\n45 65 80",
                        "expectedOutput": "190 167 23",
                        "score": 10
                    },
                    {
                        "input": "3\n90 100 284",
                        "expectedOutput": "474 407 67",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSB00/A-05-1.sb3"
            },
            {
                "id": "A-07-0",
                "code": "JSB00-A-07-0",
                "title": "乘法表",
                "description": "請寫一個程式，輸入一個整數 N，輸出 1 到 9 的乘法表結果。\n例如輸入 3，輸出 1x3=3, 2x3=6, …, 9x3=27。\n\n程式輸出3 6 9 12 15 18 21 24 27\n\n這樣的練習能讓你熟悉迴圈的運用。",
                "examples": [
                    {
                        "input": "3",
                        "output": "3 6 9 12 15 18 21 24 27",
                        "explanation": "第一行輸入3，經過九九乘法計算後\n程式輸出3 6 9 12 15 18 21 24 27"
                    },
                    {
                        "input": "6",
                        "output": "6 12 18 24 30 36 42 48 54",
                        "explanation": "第一行輸入6，經過九九乘法計算後\n程式輸出6 12 18 24 30 36 42 48 54"
                    }
                ],
                "testCases": [
                    {
                        "input": "3",
                        "expectedOutput": "3 6 9 12 15 18 21 24 27",
                        "score": 10
                    },
                    {
                        "input": "6",
                        "expectedOutput": "6 12 18 24 30 36 42 48 54",
                        "score": 10
                    },
                    {
                        "input": "5",
                        "expectedOutput": "5 10 15 20 25 30 35 40 45",
                        "score": 10
                    },
                    {
                        "input": "9",
                        "expectedOutput": "9 18 27 36 45 54 63 72 81",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSB00/A-07-0.sb3"
            },
            {
                "id": "A-06-0",
                "code": "JSB00-A-06-0",
                "title": "連續加總(1加到N)",
                "description": "有時候我們需要計算從 1 到某個數字的總和。\n請寫一個程式，輸入一個整數 N，計算從 1 加到 N 的結果。\n\n例如 N=5 時，1+2+3+4+5=15。這樣的練習可以訓練你使用迴圈進行加總。",
                "examples": [
                    {
                        "input": "5",
                        "output": "15",
                        "explanation": "輸入 5 → 1+2+3+4+5=15\n程式輸出15"
                    },
                    {
                        "input": "10",
                        "output": "55",
                        "explanation": "輸入 10 → 1+2+3+4...+10=55\n程式輸出55"
                    }
                ],
                "testCases": [
                    {
                        "input": "5",
                        "expectedOutput": "15",
                        "score": 10
                    },
                    {
                        "input": "20",
                        "expectedOutput": "210",
                        "score": 10
                    },
                    {
                        "input": "88",
                        "expectedOutput": "3916",
                        "score": 10
                    },
                    {
                        "input": "100",
                        "expectedOutput": "5050",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSB00/A-06-0.sb3"
            },
            {
                "id": "A-06-1",
                "code": "JSB00-A-06-1",
                "title": "連續乘積(1*2*3...*N)",
                "description": "輸入一個整數 N，計算從 1*2*3....*N 的結果。\n\n例如 N=5 時，1*2*3*4*5=120。\n這樣的練習可以訓練你使用迴圈計算。",
                "examples": [
                    {
                        "input": "5",
                        "output": "120",
                        "explanation": "輸入 5 → 1*2*3*4*5=120\n程式輸出120"
                    },
                    {
                        "input": "6",
                        "output": "720",
                        "explanation": "6 → 1*2*3*4*5*6=720\n程式輸出720"
                    }
                ],
                "testCases": [
                    {
                        "input": "5",
                        "expectedOutput": "120",
                        "score": 10
                    },
                    {
                        "input": "6",
                        "expectedOutput": "720",
                        "score": 10
                    },
                    {
                        "input": "1",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "8",
                        "expectedOutput": "40320",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSB00/A-06-1.sb3"
            },
            {
                "id": "A-07-1",
                "code": "JSB00-A-07-1",
                "title": "跳繩比賽",
                "description": "體育課上，學生進行跳繩小組競賽比賽，小組人數不定，每人跳的次數也不同。\n\n請設計一個程式，第一行輸入數字N，代表小組有N人，後續輸入N筆資料\n\n第二行輸入一串數列共N筆整數，序列的數字以空隔間格。\n\n程式輸出小組全部人員總共跳繩幾次？",
                "examples": [
                    {
                        "input": "5\n20 19 36 25 30",
                        "output": "130",
                        "explanation": "第一行輸入5，表示小組有5人。\n第二行輸入20 19 36 25 30，表示小組每人分別跳20、19、36、25、30下。\n程式輸出小組累計共跳130下"
                    },
                    {
                        "input": "3\n6 12 18",
                        "output": "36",
                        "explanation": "第一行輸入3，表示小組有3人。\n第二行輸入6 12 18，表示小組每人分別跳6、12、18下。\n程式輸出小組累計共跳36下"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n18 21 24 27",
                        "expectedOutput": "90",
                        "score": 10
                    },
                    {
                        "input": "6\n6 12 18 24 30 36",
                        "expectedOutput": "126",
                        "score": 10
                    },
                    {
                        "input": "5\n5 10 15 20 25",
                        "expectedOutput": "75",
                        "score": 10
                    },
                    {
                        "input": "1\n9",
                        "expectedOutput": "9",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSB00/A-07-1.sb3"
            }
        ]
    },
    {
        "code": "JSA00",
        "title": "基礎練習2",
        "unlockCode": null,
        "tasks": [
            {
                "id": "A-08-0",
                "code": "JSA00-A-08-0",
                "title": "查找最大值",
                "description": "老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分。\n\n輸入第一行是整數 N，代表有 N 筆成績\n\n第二行輸入 N 個數字，數字間以空白間隔\n\n程式輸出最大值。\n這樣的練習可以幫助你處理一串資料，並找出其中的最大值。",
                "examples": [
                    {
                        "input": "3\n9 6 8",
                        "output": "9",
                        "explanation": "第一行輸入3，表示有3個數字要輸入\n第二行輸入9 6 8三個數字序列\n程式運算輸出最大值9"
                    },
                    {
                        "input": "6\n99 12 129 16 8",
                        "output": "129",
                        "explanation": "第一行輸入6，表示有6個數字要輸入\n第二行輸入99 12 129 16 8 3六個數字序列\n程式運算輸出最大值129"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n9 6 8",
                        "expectedOutput": "9",
                        "score": 10
                    },
                    {
                        "input": "6\n99 12 129 16 8 3",
                        "expectedOutput": "129",
                        "score": 10
                    },
                    {
                        "input": "5\n89 15 47 0 56",
                        "expectedOutput": "89",
                        "score": 10
                    },
                    {
                        "input": "1\n25",
                        "expectedOutput": "25",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSA00/A-08-0.sb3"
            },
            {
                "id": "A-08-1",
                "code": "JSA00-A-08-1",
                "title": "查找最大值、最小值",
                "description": "老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分及最低分。\n\n輸入第一行是整數 N，代表有 N 筆成績\n\n第二行輸入 N 個數字，數字間以空白間隔\n\n程式輸出最大值及最小值。\n這樣的練習可以幫助你處理一串資料，並同時找出其中的最大值、最小值。",
                "examples": [
                    {
                        "input": "3\n9 6 8",
                        "output": "9\n6",
                        "explanation": "第一行輸入3，表示有3個數字要輸入\n第二行輸入9 6 8三個數字序列\n程式運算輸出最大值9，最小值6"
                    },
                    {
                        "input": "6\n99 12 129 16 8 3",
                        "output": "129\n3",
                        "explanation": "第一行輸入6，表示有6個數字要輸入\n第二行輸入99 12 129 16 8 3六個數字序列\n程式運算輸出最大值129，最小值3"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n9 6 8",
                        "expectedOutput": "9 6",
                        "score": 10
                    },
                    {
                        "input": "6\n99 12 129 16 8 3",
                        "expectedOutput": "129 3",
                        "score": 10
                    },
                    {
                        "input": "5\n89 15 47 0 56",
                        "expectedOutput": "89 0",
                        "score": 10
                    },
                    {
                        "input": "1\n25",
                        "expectedOutput": "25 25",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSA00/A-08-1.sb3"
            },
            {
                "id": "A-09-0",
                "code": "JSA00-A-09-0",
                "title": "判斷質數",
                "description": "質數是大於 1 且只能被 1 和自己整除的數字。\n請寫一個程式，輸入一個整數 N，判斷它是否為質數。\n\n若是質數輸出 Yes，否則輸出 No。\n\n這題訓練你使用條件與迴圈判斷。",
                "examples": [
                    {
                        "input": "1",
                        "output": "No",
                        "explanation": "第一行輸入1\n電腦運算判斷1不是質數\n程式運算輸出No"
                    },
                    {
                        "input": "2",
                        "output": "Yes",
                        "explanation": "第一行輸入2\n電腦運算判斷2是質數\n程式運算輸出Yes"
                    },
                    {
                        "input": "7",
                        "output": "Yes",
                        "explanation": "第一行輸入7\n電腦運算判斷7是質數\n程式運算輸出Yes"
                    },
                    {
                        "input": "6",
                        "output": "No",
                        "explanation": "第一行輸入6\n電腦運算判斷6可被2整除，不是質數\n程式運算輸出No"
                    }
                ],
                "testCases": [
                    {
                        "input": "1",
                        "expectedOutput": "No",
                        "score": 10
                    },
                    {
                        "input": "2",
                        "expectedOutput": "Yes",
                        "score": 10
                    },
                    {
                        "input": "1007",
                        "expectedOutput": "No",
                        "score": 10
                    },
                    {
                        "input": "997",
                        "expectedOutput": "Yes",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSA00/A-09-0.sb3"
            },
            {
                "id": "A-09-1",
                "code": "JSA00-A-09-1",
                "title": "找因數",
                "description": "因數是指一個整數能被另一整數「整除」時，這個「除數」就是「被除數」的因數。\n\n0不是任何整數的因數。1是所有整數的因數。\n\n請寫一個程式，輸入一個整數 N，請找出N所有的因數。\n\n所有因數以空白符號間格\n\n這題訓練你使用條件與迴圈判斷。",
                "examples": [
                    {
                        "input": "12",
                        "output": "1 2 3 4 6 12",
                        "explanation": "第一行輸入12\n程式輸出12所有因數1 2 3 4 6 12"
                    },
                    {
                        "input": "39",
                        "output": "1 3 13 39",
                        "explanation": "第一行輸入39\n程式輸出39所有因數1 3 13 39"
                    }
                ],
                "testCases": [
                    {
                        "input": "56",
                        "expectedOutput": "1 2 4 7 8 14 28 56",
                        "score": 10
                    },
                    {
                        "input": "37",
                        "expectedOutput": "1 37",
                        "score": 10
                    },
                    {
                        "input": "78",
                        "expectedOutput": "1 2 3 6 13 26 39 78",
                        "score": 10
                    },
                    {
                        "input": "88",
                        "expectedOutput": "1 2 4 8 11 22 44 88",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSA00/A-09-1.sb3"
            },
            {
                "id": "A-10-0",
                "code": "JSA00-A-10-0",
                "title": "多科成績計算",
                "description": "小明參加了數學、英文、自然...等多科的段考，老師希望能快速算出總分與平均分數，並判斷是否及格。\n\n請設計程式，輸入多科的成績，計算總分與平均。\n\n第一行輸入共有幾科\n\n第二行依序輸入各科成績，科成績之間以空白間隔\n\n計算總分，平均成績以四捨五入取整數\n\n如果平均分數大於等於 60，就輸出「及格」，否則輸出「不及格」。\n\n這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。",
                "examples": [
                    {
                        "input": "3\n80 70 90",
                        "output": "240\n80\n及格",
                        "explanation": "第一行輸入3，表示後面會有3個數字輸入\n第二行輸入80 70 90，經過計算後\n總分180、平均80、及格"
                    },
                    {
                        "input": "6\n50 41 60 55 70 65",
                        "output": "341\n57\n不及格",
                        "explanation": "第一行輸入6，表示後面會有3個數字輸入\n第二行輸入50 41 60 55 70 65，經過計算後\n程式輸出總分341、平均57、不及格"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n20 60 90",
                        "expectedOutput": "170 57 不及格",
                        "score": 10
                    },
                    {
                        "input": "6\n50 41 60 55 70 65",
                        "expectedOutput": "341 57 不及格",
                        "score": 10
                    },
                    {
                        "input": "5\n80 70 75 85 90",
                        "expectedOutput": "400 80 及格",
                        "score": 10
                    },
                    {
                        "input": "1\n55",
                        "expectedOutput": "55 55 不及格",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSA00/A-10-0.sb3"
            },
            {
                "id": "A-11-0",
                "code": "JSA00-A-11-0",
                "title": "計算字元出現次數",
                "description": "請設計程式，輸入一個字串，並輸入一個英文字母輸出該字母在字串中出現的次數。\n\n這樣的練習可以訓練你操作字串與統計。",
                "examples": [
                    {
                        "input": "banana\na",
                        "output": "3",
                        "explanation": "第一行輸入banana\n第二行輸入字元a\n程式運算比對a出現3次\n程式輸出3"
                    },
                    {
                        "input": "student\nt",
                        "output": "2",
                        "explanation": "第一行輸入student\n第二行輸入字元t\n程式運算比對t出現2次\n程式輸出2"
                    }
                ],
                "testCases": [
                    {
                        "input": "Goodmoning\no",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "ChaiYiCity\ni",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "announcement\nn",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "experimen\ne",
                        "expectedOutput": "3",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSA00/A-11-0.sb3"
            },
            {
                "id": "A-12-0",
                "code": "JSA00-A-12-0",
                "title": "簡易密碼轉換",
                "description": "小明設計了一種簡單的密碼環密碼規則：將每個字母向後移二個字母（z 變 b）。\n\n密碼環：abcdefghijklmnopqrstuvwxyz\n\n請寫一個程式，輸入一個英文單字，輸出轉換後的字串。\n\n這樣的練習訓練你字元處理與條件轉換。",
                "examples": [
                    {
                        "input": "banana",
                        "output": "dcpcpc",
                        "explanation": "第一行輸入banana\n程式運算，將字串往後移2個位置加密\n程式輸出dcpcpc"
                    },
                    {
                        "input": "student",
                        "output": "uvwfgpv",
                        "explanation": "第一行輸入student\n程式運算，將字串往後移2個位置加密\n程式輸出uvwfgpv"
                    }
                ],
                "testCases": [
                    {
                        "input": "goodmoning",
                        "expectedOutput": "iqqfoqpkpi",
                        "score": 10
                    },
                    {
                        "input": "chaiyicity",
                        "expectedOutput": "ejckakekva",
                        "score": 10
                    },
                    {
                        "input": "announcement",
                        "expectedOutput": "cppqwpegogpv",
                        "score": 10
                    },
                    {
                        "input": "experimen",
                        "expectedOutput": "gzrgtkogp",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSA00/A-12-0.sb3"
            },
            {
                "id": "A-13-0",
                "code": "JSA00-A-13-0",
                "title": "二數的最大公因數",
                "description": "小明上學時，不太會找最大公因數，請寫個程式幫他找一下\n輸入二個整數，請計算這二個數字的最大公因數",
                "examples": [
                    {
                        "input": "9\n6",
                        "output": "3",
                        "explanation": "第一行輸入9，\n第二行輸入6，\n程式輸出6、9二個數的最大公因數3"
                    },
                    {
                        "input": "30\n72",
                        "output": "6",
                        "explanation": "第一行輸入30，\n第二行輸入72\n程式輸出30，72二個數的最大公因數6"
                    }
                ],
                "testCases": [
                    {
                        "input": "12\n6",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "34\n52",
                        "expectedOutput": "2",
                        "score": 10
                    },
                    {
                        "input": "24\n18",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "1\n8",
                        "expectedOutput": "1",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSA00/A-13-0.sb3"
            },
            {
                "id": "A-10-1",
                "code": "JSA00-A-10-1",
                "title": "加權成績計算",
                "description": "大明綜合高中辦理考試，不同科系考試科目數量、每周上課時數不一定相同\n成績計算時，以每一科成績乘以該科上課時數為加權成績，將所有科目的加權成績加總，並除以全部科目總時數，即為學生加權平均成績\n請設計一個程式，輸入各科的成績、各科加權時數，程式運算後輸出加權總分、加權平均、等第。\n第一行輸入N，代表該科共有N科考試成績\n第二行依序輸入N筆各科成績，各科成績之間以空白間隔\n第三行依序輸入N筆各科對應加權時數，各科加權時數之間以空白間隔\n計算全部加權總分，加權平均成績以四捨五入取整數\n如果平均分數大於等於 80，就是「A」等第，小於80大於等於70則是「B」等第，小於70大於等於60則是「C」等第，否則是「D」等第。\n程式輸出加權總分、加權平均、等第。\n這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。",
                "examples": [
                    {
                        "input": "3\n80 70 90\n1 2 1",
                        "output": "310\n78\nB",
                        "explanation": "第一行輸入3，表示後面會有3科成績輸入\n第二行輸入各科原始成績80 70 90\n第三行輸入各科加權時數1 2 1\n程式運算輸出加權總分310、平均78、等第B"
                    },
                    {
                        "input": "6\n50 41 60 55 70 65\n1 3 3 2 2 1",
                        "output": "668\n56\nD",
                        "explanation": "第一行輸入6，表示後面會有6科成績輸入\n第二行輸入各科原始成績50 41 60 55 70 65\n第三行輸入各科加權時數1 3 3 2 2 1\n程式運算輸出加權總分668、平均56、等第D"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\n80\n3",
                        "expectedOutput": "240 80 A",
                        "score": 10
                    },
                    {
                        "input": "6\n50 41 60 55 70 65\n1 3 3 2 2 1",
                        "expectedOutput": "668 56 D",
                        "score": 10
                    },
                    {
                        "input": "5\n80 70 75 85 90\n1 1 3 2 1",
                        "expectedOutput": "635 79 B",
                        "score": 10
                    },
                    {
                        "input": "3\n55 90 99\n2 3 3",
                        "expectedOutput": "677 85 A",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSA00/A-10-1.sb3"
            },
            {
                "id": "A-11-1",
                "code": "JSA00-A-11-1",
                "title": "計算字元出現最多的次數",
                "description": "請設計程式，輸入一字串由小寫英文字母組合，長度1~50間的字串\n程式會統計該字串的字母中，出現最多的次數。\n這樣的練習可以訓練你循環計數迴圈與字串統計。",
                "examples": [
                    {
                        "input": "banana",
                        "output": "3",
                        "explanation": "第一行輸入banana\n程式運算比對，出現最多為a，共出現3次\n程式輸出3"
                    },
                    {
                        "input": "student",
                        "output": "2",
                        "explanation": "第一行輸入student\n程式運算比對，出現最多為t，共出現2次\n程式輸出2"
                    },
                    {
                        "input": "spider",
                        "output": "1",
                        "explanation": "第一行輸入spider\n程式運算比對，全部字母都只出現1次\n程式輸出1"
                    }
                ],
                "testCases": [
                    {
                        "input": "goodmoning",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "chaiyicity",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "announment",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "experimen",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "junior",
                        "expectedOutput": "1",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSA00/A-11-1.sb3"
            },
            {
                "id": "A-12-1",
                "code": "JSA00-A-12-1",
                "title": "動態密碼轉換",
                "description": "小明設計了一種英文字元密碼環編碼規則：\n密碼環為『abcdefghijklmnopqrstuvwxyz0123456789』\n第一行輸入數字N(N介於0~36)，N為編碼位移值\n編碼時，待編碼字串每個字元都按照密碼環『往前』移動N個位置\n如果轉換後密碼往前超過密碼環第一個字元a，則接續最後面9繼續接回密碼環\n請寫一個程式，輸入一個英文單字，程式輸出依照編碼規則轉換後的密碼字串。\n這樣的練習訓練你字元處理與條件轉換。",
                "examples": [
                    {
                        "input": "2\nbanana",
                        "output": "98l8l8",
                        "explanation": "第一行輸入2，表示編碼時要往前移動2個位置\n第二行輸入banana表示待編碼字串為banana\n程式運算，將字串往前移2個位置加密\n程式輸出98l8l8"
                    },
                    {
                        "input": "10\nstudent",
                        "output": "ijk34dj",
                        "explanation": "第一行輸入10，表示編碼時要往前10個位置\n第二行輸入student表示待編碼字串為student\n程式運算，將字串往前移10個位置加密\n程式輸出ijk34dj"
                    }
                ],
                "testCases": [
                    {
                        "input": "12\ngoodmoning",
                        "expectedOutput": "4cc1acb6b4",
                        "score": 10
                    },
                    {
                        "input": "29\nchaiyicity",
                        "expectedOutput": "johp5pjp05",
                        "score": 10
                    },
                    {
                        "input": "9\nannouncement",
                        "expectedOutput": "1eefle35d5ek",
                        "score": 10
                    },
                    {
                        "input": "0\nexperimen",
                        "expectedOutput": "experimen",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSA00/A-12-1.sb3"
            },
            {
                "id": "A-13-1",
                "code": "JSA00-A-13-1",
                "title": "最大公因數",
                "description": "小明上學時，不太會找最大公因數，請寫個程式幫他找一下\n輸入一組整數，請計算這些數字的最大公因數\n輸入格式：輸入2行\n第一行輸入1個整數N，代表接下來要計算最大公因數的個數\n第二行輸入N個整數，用空格隔開，代表要計算最大公因數的N個整數",
                "examples": [
                    {
                        "input": "2\n6 9",
                        "output": "3",
                        "explanation": "第一行輸入2，表示接下來要輸入2個數\n第二行輸入6 9，表示要找出6、9的最大公因數\n程式輸出最大公因數3"
                    },
                    {
                        "input": "3\n4 6 12",
                        "output": "2",
                        "explanation": "第一行輸入3，表示接下來要輸入3個數\n第二行輸入4 6 12，表示要找出4、6、12的最大公因數\n程式輸出最大公因數2"
                    },
                    {
                        "input": "2\n1 99",
                        "output": "1",
                        "explanation": "第一行輸入2，表示接下來要輸入2個數\n第二行輸入1 99，表示要找出1，99的最大公因數\n程式輸出最大公因數1"
                    },
                    {
                        "input": "1\n8",
                        "output": "8",
                        "explanation": "第一行輸入1，表示接下來要輸入1個數\n第二行輸入8，表示要找出8的最大公因數\n自己的最大公因數是自己，程式輸出最大公因數8"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n12 24 30",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "6\n2 5 24 15 36 54",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "3\n51 9 24",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "1\n8",
                        "expectedOutput": "8",
                        "score": 10
                    }
                ],
                "sb3Path": "m0/JSA00/A-13-1.sb3"
            }
        ]
    }
];

courses.forEach(course => {
    course.tasks.forEach(task => {
        if (!task.sb3Path) {
            task.loadable = false;
            return;
        }
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
