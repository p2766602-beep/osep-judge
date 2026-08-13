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
        "code": "M1-01",
        "title": "清單搜尋與篩選進階",
        "tier": "t1",
        "unlockCode": "M1-01-ListSearch",
        "tasks": [
            {
                "id": "count-008",
                "code": "M1-01-count-008",
                "title": "防禦工事",
                "description": "為了抵禦怪獸，勇者需要建造正方形的防禦陣型。國王要求勇者展示不同規模的陣型人數。\n當邊長為 i 時，需要的人數就是 i * i。\n請輸入一個數字 N，依序列出邊長從 1 到 N 的正方形陣型各需要多少人。\n輸入格式\n第一行：輸入一個整數 N ，代表最大邊長\n程式依序輸出從 1 到 N 之間的平方數(1*1 2*2...N*N)\n數字之間以空白隔開。",
                "examples": [
                    {
                        "input": "3",
                        "output": "1 4 9",
                        "explanation": "第一行輸入數字3，代表最大邊長3\n程式輸出平方數序列：1 4 9"
                    },
                    {
                        "input": "5",
                        "output": "1 4 9 16 25",
                        "explanation": "第一行輸入數字5，代表最大邊長5\n程式輸出平方數序列：1 4 9 16 25"
                    }
                ],
                "testCases": [
                    {
                        "input": "1",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "6",
                        "expectedOutput": "1 4 9 16 25 36",
                        "score": 10
                    },
                    {
                        "input": "7",
                        "expectedOutput": "1 4 9 16 25 36 49",
                        "score": 10
                    },
                    {
                        "input": "9",
                        "expectedOutput": "1 4 9 16 25 36 49 64 81",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M1-01-ListSearch/count-008.sb3"
            },
            {
                "id": "count-013",
                "code": "M1-01-count-013",
                "title": "勇者的背包",
                "description": "勇者準備出發了，他把所有的道具都放入了神奇背包（清單）中。 為了確認東西沒帶錯，勇者需要依照順序把背包裡的東西拿出來檢查一遍。 請你設計一個程式，將清單中的物品編號依序印出來。\n輸入格式\n第一行：輸入一個整數 N ，代表背包裡有幾樣物品。\n第二行有 N 個整數，代表物品的編號，中間以空白隔開。\n程式依序輸出清單中的每一個數字\n數字之間以空白隔開。",
                "examples": [
                    {
                        "input": "3\n101 102 103",
                        "output": "101 102 103",
                        "explanation": "第一行輸入數字3，代表3樣物品\n第二行有3個整數代表物品的編號輸入，中間以空白隔開\n程式依序輸出每個物品編號：101 102 103"
                    },
                    {
                        "input": "5\n5 4 3 2 1",
                        "output": "5 4 3 2 1",
                        "explanation": "第一行輸入數字5，代表3樣物品\n第二行有5個整數代表物品的編號輸入，中間以空白隔開\n程式依序輸出每個物品編號：5 4 3 2 1"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\n99",
                        "expectedOutput": "99",
                        "score": 10
                    },
                    {
                        "input": "3\n1 5 9",
                        "expectedOutput": "1 5 9",
                        "score": 10
                    },
                    {
                        "input": "6\n2 4 6 8 10 12",
                        "expectedOutput": "2 4 6 8 10 12",
                        "score": 10
                    },
                    {
                        "input": "9\n1 4 9 16 25 36 49 64 81",
                        "expectedOutput": "1 4 9 16 25 36 49 64 81",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M1-01-ListSearch/count-013.sb3"
            },
            {
                "id": "count-009",
                "code": "M1-01-count-009",
                "title": "偶數日的存款",
                "description": "勇者改變了存錢計畫，他決定「只在偶數日存錢」。\n在第 2 天存 2 元，第 4 天存 4 元，第 6 天存 6 元...以此類推。奇數天（1, 3, 5...）則不存錢。\n請問到了第 N 天結束(N>1)，勇者總共存了多少錢？\n輸入格式\n第一行：輸入一個整數 N\n程式輸出從 1 到 N 之間所有偶數的總和。",
                "examples": [
                    {
                        "input": "4",
                        "output": "6",
                        "explanation": "第一行輸入數字4\n程式輸出偶數和：2+4=6"
                    },
                    {
                        "input": "7",
                        "output": "12",
                        "explanation": "第一行輸入數字7\n程式輸出偶數和：2+4+6=12"
                    }
                ],
                "testCases": [
                    {
                        "input": "4",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "9",
                        "expectedOutput": "20",
                        "score": 10
                    },
                    {
                        "input": "7",
                        "expectedOutput": "12",
                        "score": 10
                    },
                    {
                        "input": "15",
                        "expectedOutput": "56",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-01-ListSearch/count-009.sb3"
            },
            {
                "id": "count-010",
                "code": "M1-01-count-010",
                "title": "能量水晶融合",
                "description": "勇者正在合成一顆能量水晶。這顆水晶的能量是不斷相乘的！\n第 1 階段能量為 1。\n第 2 階段能量變成 1 * 2。\n第 3 階段能量變成 1 * 2 * 3。\n請問到了第 N 階段，能量總共有多少？\n輸入格式\n第一行：輸入一個整數 N\n程式輸出 1*2*3*4...*N 之值。",
                "examples": [
                    {
                        "input": "4",
                        "output": "24",
                        "explanation": "第一行輸入數字4\n程式輸出N 階段能量：1*2*3*4=24"
                    },
                    {
                        "input": "6",
                        "output": "720",
                        "explanation": "第一行輸入數字6\n程式輸出N 階段能量：1*2*3*4*5*6=720"
                    }
                ],
                "testCases": [
                    {
                        "input": "1",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "9",
                        "expectedOutput": "362880",
                        "score": 10
                    },
                    {
                        "input": "7",
                        "expectedOutput": "5040",
                        "score": 10
                    },
                    {
                        "input": "3",
                        "expectedOutput": "6",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-01-ListSearch/count-010.sb3"
            },
            {
                "id": "count-011",
                "code": "M1-01-count-011",
                "title": "修復斷橋",
                "description": "勇者需要修復一座斷掉的橋。橋的每一段需要的木材數量等於該段的編號。\n現在只需修復從編號M到編號N的這一段區間。\n請計算修復這段區間總共需要多少木材？(即計算M+(M+1)+...+N的總和)。\n輸入格式\n第一行：輸入一個整數M\n第二行：輸入一個整數N\n程式輸出 M加到N 之值。",
                "examples": [
                    {
                        "input": "3\n5",
                        "output": "12",
                        "explanation": "第一行輸入數字3\n第二行輸入數字5\n程式輸出3+4+5=12"
                    },
                    {
                        "input": "1\n4",
                        "output": "10",
                        "explanation": "第一行輸入數字1\n第二行輸入數字4\n程式輸出1+2+3+4=10"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n10",
                        "expectedOutput": "45",
                        "score": 10
                    },
                    {
                        "input": "20\n30",
                        "expectedOutput": "275",
                        "score": 10
                    },
                    {
                        "input": "1\n1",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "50\n55",
                        "expectedOutput": "315",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-01-ListSearch/count-011.sb3"
            },
            {
                "id": "count-014",
                "code": "M1-01-count-014",
                "title": "戰利品清點",
                "description": "勇者打敗了一群史萊姆，每隻史萊姆身上掉落的金幣數量都不一樣。 助手已經把每隻史萊姆掉落的金幣數量記在清單上了。 請你幫勇者算算看，這次戰鬥總共獲得了多少金幣？\n輸入格式\n輸入共有兩行。第一行是一個整數 N，代表有幾筆金幣資料。\n第二行輸入 N 個整數，代表每一筆金幣的金額。數字之間以空白隔開。\n程式輸出清單中所有數字的總和。",
                "examples": [
                    {
                        "input": "3\n10 20 30",
                        "output": "60",
                        "explanation": "第一行輸入數字3，代表3筆金幣資料\n第二行有3筆整數代表金幣數量輸入，10 20 30，中間以空白隔開\n程式輸出金幣總和：60"
                    },
                    {
                        "input": "5\n5 4 3 2 1",
                        "output": "15",
                        "explanation": "第一行輸入數字5，代表5筆金幣資料\n第二行有3筆整數代表金幣數量輸入，5 4 3 2 1，中間以空白隔開\n程式輸出金幣總和：15"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\n99",
                        "expectedOutput": "99",
                        "score": 10
                    },
                    {
                        "input": "3\n1 5 9",
                        "expectedOutput": "15",
                        "score": 10
                    },
                    {
                        "input": "6\n2 4 6 8 10 12",
                        "expectedOutput": "42",
                        "score": 10
                    },
                    {
                        "input": "9\n1 1 1 1 1 1 1 1 1",
                        "expectedOutput": "9",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-01-ListSearch/count-014.sb3"
            },
            {
                "id": "count-015",
                "code": "M1-01-count-015",
                "title": "尋找戰鬥力最高的魔王",
                "description": "偵查兵帶回了一份情報，上面記錄了前方 N 隻怪物的戰鬥力數值。\n勇者想要先挑戰最強的那一隻！\n請你找出這份清單中，數值最大的那個數字是多少。\n輸入格式\n輸入共有兩行。第一行是一個整數 N，代表怪物數量。\n第二行輸入 N 個整數，代表每隻怪物的戰鬥力。數字之間以空白隔開。\n程式輸出清單中的最大值。\n(提示：設一個變數叫 Max，先假設第一隻是最大的，然後用迴圈跟後面的一一比對，如果發現比 Max 大的，就更新 Max)",
                "examples": [
                    {
                        "input": "3\n10 20 30",
                        "output": "30",
                        "explanation": "第一行輸入數字3，代表3筆怪物資料\n第二行有3筆整數怪物資料，10 20 30，中間以空白隔開\n程式輸出怪物最大戰鬥力：30"
                    },
                    {
                        "input": "5\n5 4 3 2 1",
                        "output": "5",
                        "explanation": "第一行輸入數字5，代表5筆怪物資料\n第二行有3筆整數怪物資料，5 4 3 2 1，中間以空白隔開\n程式輸出怪物最大戰鬥力：5"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\n99",
                        "expectedOutput": "99",
                        "score": 10
                    },
                    {
                        "input": "6\n7 7 7 7 9 7",
                        "expectedOutput": "9",
                        "score": 10
                    },
                    {
                        "input": "4\n33 22 44 11",
                        "expectedOutput": "44",
                        "score": 10
                    },
                    {
                        "input": "5\n25 45 95 12 55",
                        "expectedOutput": "95",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-01-ListSearch/count-015.sb3"
            },
            {
                "id": "count-012",
                "code": "M1-01-count-012",
                "title": "登山冒險",
                "description": "這是一題大魔王關卡！勇者要爬一座高山，然後再下山。\n這座山的高度是 N。勇者必須從 1 爬到 N，到達山頂後，再從 N-1 走回 1。\n請依序列出勇者經過的高度。。\n輸入格式\n第一行：輸入一個整數N\n程式輸出一個序列：1 2 3 ...N N-1 ...1。\n序列數字以空白間隔",
                "examples": [
                    {
                        "input": "5",
                        "output": "1 2 3 4 5 4 3 2 1",
                        "explanation": "第一行輸入數字5\n程式輸出1 2 3 4 5 4 3 2 1"
                    },
                    {
                        "input": "4",
                        "output": "1 2 3 4 3 2 1",
                        "explanation": "第一行輸入數字4\n程式輸出1 2 3 4 3 2 1"
                    }
                ],
                "testCases": [
                    {
                        "input": "10",
                        "expectedOutput": "1 2 3 4 5 6 7 8 9 10 9 8 7 6 5 4 3 2 1",
                        "score": 10
                    },
                    {
                        "input": "8",
                        "expectedOutput": "1 2 3 4 5 6 7 8 7 6 5 4 3 2 1",
                        "score": 10
                    },
                    {
                        "input": "5",
                        "expectedOutput": "1 2 3 4 5 4 3 2 1",
                        "score": 10
                    },
                    {
                        "input": "2",
                        "expectedOutput": "1 2 1",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-01-ListSearch/count-012.sb3"
            }
        ]
    },
    {
        "code": "M1-02",
        "title": "清單資料分析挑戰",
        "tier": "t1",
        "unlockCode": "M1-02-ListAnalysis",
        "tasks": [
            {
                "id": "count-017",
                "code": "M1-02-count-017",
                "title": "倒轉時光",
                "description": "勇者獲得了一個「時光倒流」的魔法卷軸。這個卷軸上有一串數字密碼，但是必須從最後一個數字讀回到第一個數字，魔法才能生效。 請讀取一個清單，並將清單內的數字「由後往前」印出來。\n輸入格式\n輸入共有兩行。第一行是一個整數 N，代表密碼長度。\n第二行輸入 N 個整數，代表N個數字的密碼組合。\n程式反序輸 N 筆密碼數字資料，中間以空白間隔\n(提示：循環計數迴圈起點設為清單長度，終點設為 1，間隔設為 -1)",
                "examples": [
                    {
                        "input": "4\n10 20 30 40",
                        "output": "40 30 20 10",
                        "explanation": "第一行輸入數字4，代表密碼有4筆資料\n第二行有4筆整數資料，10 20 30 40\n程式反敘輸出密碼資料：40 30 20 10"
                    },
                    {
                        "input": "3\n1 2 3",
                        "output": "3 2 1",
                        "explanation": "第一行輸入數字3，代表密碼有3筆資料\n第二行有3筆整數資料，1 2 3\n程式反敘輸出密碼資料：3 2 1"
                    }
                ],
                "testCases": [
                    {
                        "input": "2\n100 20",
                        "expectedOutput": "20 100",
                        "score": 10
                    },
                    {
                        "input": "4\n7 7 9 7",
                        "expectedOutput": "7 9 7 7",
                        "score": 10
                    },
                    {
                        "input": "5\n1 2 3 4 5",
                        "expectedOutput": "5 4 3 2 1",
                        "score": 10
                    },
                    {
                        "input": "4\n0 1 0 1",
                        "expectedOutput": "1 0 1 0",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-02-ListAnalysis/count-017.sb3"
            },
            {
                "id": "count-018",
                "code": "M1-02-count-018",
                "title": "冒險日誌",
                "description": "勇者寫了 N 天的冒險日誌，清單中依序記錄了每天打倒的怪物數量。\n例如清單的第一個數字是第 1 天打倒的數量，第二個數字是第 2 天的...\n請你格式化輸出每天的戰績，格式為：Day-[第幾天]-[數量]。\n輸入格式\n輸入共有兩行。第一行是一個整數 N，代表天數。\n第二行輸入 N 個整數，代表每天怪物的數量。\n程式依序輸出 N 天資料，每天格式為 Day-i-數量 不同天中間以空白間隔。",
                "examples": [
                    {
                        "input": "2\n15 5",
                        "output": "Day-1-15 Day-2-5",
                        "explanation": "第一行輸入數字2，代表有2天資料\n第二行有2筆整數資料，15 5\n程式依序輸出所有天數資料：Day-1-15 Day-2-5"
                    },
                    {
                        "input": "3\n12 15 20",
                        "output": "Day-1-12 Day-2-15 Day-3-20",
                        "explanation": "第一行輸入數字3，代表有3天資料\n第二行有3筆整數資料，12 15 20\n程式依序輸出所有天數資料：Day-1-12 Day-2-15 Day-3-20"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\n100",
                        "expectedOutput": "Day-1-100",
                        "score": 10
                    },
                    {
                        "input": "4\n7 7 9 7",
                        "expectedOutput": "Day-1-7 Day-2-7 Day-3-9 Day-4-7",
                        "score": 10
                    },
                    {
                        "input": "4\n33 22 44 11",
                        "expectedOutput": "Day-1-33 Day-2-22 Day-3-44 Day-4-11",
                        "score": 10
                    },
                    {
                        "input": "3\n25 2 3",
                        "expectedOutput": "Day-1-25 Day-2-2 Day-3-3",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-02-ListAnalysis/count-018.sb3"
            },
            {
                "id": "count-016",
                "code": "M1-02-count-016",
                "title": "合格的裝備",
                "description": "勇者的負重能力有限，他只能攜帶重量「小於 10」的輕型裝備。 現在清單中有一堆裝備的重量，請你利用迴圈檢查每一個裝備，只把重量小於 10 的裝備重量印出來。\n輸入格式\n輸入共有兩行。第一行是一個整數 N，代表裝備數量。\n第二行輸入 N 個整數，代表每個裝備重量。\n程式依序輸出小於 10 的數字，中間以空白隔開。\n如果都沒有小於 10 的數字，則什麼都不輸出。",
                "examples": [
                    {
                        "input": "5\n15 5 20 8 3",
                        "output": "5 8 3",
                        "explanation": "第一行輸入數字5，代表5筆裝備資料\n第二行有5筆整數裝備資料，15 5 20 8 3\n程式依序輸出小於10裝備重量：5 8 3"
                    },
                    {
                        "input": "3\n12 15 20",
                        "output": "",
                        "explanation": "第一行輸入數字3，代表3筆裝備資料\n第二行有3筆整數裝備資料，12 15 20\n沒有小於10裝備輸出為空："
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n1 2 3",
                        "expectedOutput": "1 2 3",
                        "score": 10
                    },
                    {
                        "input": "6\n7 15 7 24 9 7",
                        "expectedOutput": "7 7 9 7",
                        "score": 10
                    },
                    {
                        "input": "4\n33 5 44 11",
                        "expectedOutput": "5",
                        "score": 10
                    },
                    {
                        "input": "5\n3 8 11 69 77",
                        "expectedOutput": "3 8",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-02-ListAnalysis/count-016.sb3"
            },
            {
                "id": "TYTN-05",
                "code": "M1-02-TYTN-05",
                "title": "班服投票",
                "description": "可愛國小601班要製作紀念班服，本次班服設計共有3個款式，分別編號為1、2、3。\n每位同學可在選票上寫下自己選擇的班服款式編號，最後以得票數最高者為班服樣式。\n請先計算每款班服的得票數（依1→3順序），並輸出最高票的班服編號。\n若有兩款或以上的票數相同且為最高票，則輸出：請重新投票",
                "examples": [
                    {
                        "input": "8\n1 2 2 3 2 1 3 2",
                        "output": "2",
                        "explanation": "8 位同學投票，各自選擇的班服編號如上。\n2 號班服得票最高，因此輸出 2。"
                    },
                    {
                        "input": "6\n1 2 3 1 2 3",
                        "output": "請重新投票",
                        "explanation": "3 種班服皆獲得 2 票，最高票有同票情形。\n因此輸出「請重新投票」。"
                    }
                ],
                "testCases": [
                    {
                        "input": "8\n1 2 2 3 2 1 3 2",
                        "expectedOutput": "2",
                        "score": 10
                    },
                    {
                        "input": "6\n1 2 3 1 2 3",
                        "expectedOutput": "請重新投票",
                        "score": 10
                    },
                    {
                        "input": "5\n1 1 1 2 3",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "7\n3 3 2 2 1 3 2",
                        "expectedOutput": "請重新投票",
                        "score": 10
                    },
                    {
                        "input": "4\n2 2 2 3",
                        "expectedOutput": "2",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-02-ListAnalysis/TYTN-05.sb3"
            },
            {
                "id": "TYTN-06",
                "code": "M1-02-TYTN-06",
                "title": "棒球場座位",
                "description": "小明想去看棒球賽為台灣隊加油，請寫一個程式，輸入觀眾的座位號碼後，能輸出該座位所屬的大區、所在排數與該排中的第幾個座位，讓小明能迅速找到座位。\n棒球場共有 9000 個座位，分為三大區：\n第1區（普通區）：2250 席，每排 25 人，共 90 排。\n第2區（搖滾區）：4500 席，每排 50 人，共 90 排。\n第3區（普通區）：2250 席，每排 25 人，共 90 排。\n座位編號從第1區開始，由左至右、由前至後依序編號，接著接續第2、3區",
                "examples": [
                    {
                        "input": "1881",
                        "output": "1 76 6",
                        "explanation": "座位 1881 位於第1區。\n第1區每排25人，因此計算後位於第76排、第6個座位。"
                    },
                    {
                        "input": "3045",
                        "output": "2 16 45",
                        "explanation": "座位 3045 位於第2區。\n第2區每排50人，因此計算後位於第16排、第45個座位。"
                    }
                ],
                "testCases": [
                    {
                        "input": "1881",
                        "expectedOutput": "1 76 6",
                        "score": 10
                    },
                    {
                        "input": "3045",
                        "expectedOutput": "2 16 45",
                        "score": 10
                    },
                    {
                        "input": "25",
                        "expectedOutput": "1 1 25",
                        "score": 10
                    },
                    {
                        "input": "4501",
                        "expectedOutput": "2 46 1",
                        "score": 10
                    },
                    {
                        "input": "8999",
                        "expectedOutput": "3 90 24",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-02-ListAnalysis/TYTN-06.sb3"
            },
            {
                "id": "W3-05",
                "code": "M1-02-W3-05",
                "title": "風獅爺排隊",
                "description": "金門各村落的風獅爺要準備祭典大合照，村長要求將 4 尊風獅爺依照身高「由矮到高」排好。\n工讀生小金負責進行搬動，規則如下：\n【比較規則】\n每次只比較「相鄰」的兩尊風獅爺（第 1 與第 2、 第 2 與第 3、 第 3 與第 4）。\n【交換規則】\n如果左邊的風獅爺身高 > 右邊的風獅爺身高，兩尊就必須交換位置。\n【紀錄規則】\n每成功交換一次位置，小金就記錄 1 次（統計總交換次數）。\n【任務】\n(1) 將輸入的 4 個身高數值由小到大排列。\n(2) 在依照上述「相鄰比較、需要就交換」的排序過程中，計算總共交換了幾次。\n【排序流程說明】\n請使用以下固定流程（類似氣泡排序 Bubble Sort）：\n重複進行 3 回合：\n第 1 回合依序比較 (1,2)、(2,3)、(3,4)\n第 2 回合依序比較 (1,2)、(2,3)、(3,4)\n第 3 回合依序比較 (1,2)、(2,3)、(3,4)\n每次比較時只要符合交換規則就交換，並將交換次數 +1。",
                "examples": [
                    {
                        "input": "4\n150 120 110 100",
                        "output": "100 110 120 150 6",
                        "explanation": "這是「最麻煩」的情況（全倒過來排）。\n150 要一路換到最後，接著 120 再換，總共會交換 6 次。"
                    },
                    {
                        "input": "4\n120 110 140 130",
                        "output": "110 120 130 140 2",
                        "explanation": "120 與 110 換一次；140 與 130 換一次，總共 2 次。"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n100 110 120 130",
                        "expectedOutput": "100 110 120 130 0",
                        "score": 10
                    },
                    {
                        "input": "4\n150 120 110 100",
                        "expectedOutput": "100 110 120 150 6",
                        "score": 15
                    },
                    {
                        "input": "4\n120 110 140 130",
                        "expectedOutput": "110 120 130 140 2",
                        "score": 20
                    },
                    {
                        "input": "4\n130 120 120 110",
                        "expectedOutput": "110 120 120 130 5",
                        "score": 25
                    },
                    {
                        "input": "4\n115 130 105 120",
                        "expectedOutput": "105 115 120 130 3",
                        "score": 30
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-02-ListAnalysis/W3-05.sb3"
            },
            {
                "id": "W5-01",
                "code": "M1-02-W5-01",
                "title": "安靜值巡查器",
                "description": "學校自習室裝了「安靜值巡查器」，每小時會量測一次安靜值（數值越大代表越安靜）。系統設定一個門檻值 K：\n- 若某小時的安靜值",
                "examples": [
                    {
                        "input": "5\n100\n120 80 70 100 60",
                        "output": "4",
                        "explanation": "第2小時(80<100)：+1\n第3小時(70<100)：連續第2小時 +2\n第4小時(100≥100)：中斷\n第5小時(60<100)：+1\n總計 4"
                    },
                    {
                        "input": "4\n10\n0 0 0 0",
                        "output": "7",
                        "explanation": "連續4小時都未達標：+1 +2 +2 +2 = 7"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n100\n120 130 140 150 160",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "4\n10\n0 0 0 0",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "6\n50\n40 60 40 40 60 40",
                        "expectedOutput": "5",
                        "score": 10
                    },
                    {
                        "input": "7\n100\n90 90 90 100 90 90 110",
                        "expectedOutput": "8",
                        "score": 10
                    },
                    {
                        "input": "1\n1\n0",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "8\n1000\n999 1000 999 999 999 1000 999 1000",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "10\n5\n5 4 3 2 1 0 5 4 5 4",
                        "expectedOutput": "11",
                        "score": 10
                    },
                    {
                        "input": "9\n100\n99 99 100 99 100 99 99 99 100",
                        "expectedOutput": "9",
                        "score": 10
                    },
                    {
                        "input": "12\n7\n7 6 7 6 6 6 7 6 7 6 6 7",
                        "expectedOutput": "10",
                        "score": 10
                    },
                    {
                        "input": "15\n50\n10 60 10 60 10 60 10 60 10 60 10 60 10 60 10",
                        "expectedOutput": "8",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-02-ListAnalysis/W5-01.sb3"
            },
            {
                "id": "WP-03",
                "code": "M1-02-WP-03",
                "title": "電影院找座位",
                "description": "小華一家人要去看電影，他們希望能找到連續的K個空座位。整排座位中，某些座位已經有人坐了，因此剩下的空位會形成幾段「連續空位」。\n現在給你每一段連續空位的座位數，請你計算小華一家人共有幾種方式 可以在這一排中坐下。\n\n第一行：整數 N，代表有N個人。\n\n第二行：輸入 M，代表有M個空段落。\n\n第三行：輸入序列X，依序代表每個空段落的座位數。",
                "examples": [
                    {
                        "input": "3\n2\n6 2",
                        "output": "4",
                        "explanation": "有3個人\n有2段空位：6 與 2。\n長度 6 的那段，能讓 3 人連坐的起點有 4 種。\n長度 2 的那段不夠 3 人連坐，0 種。\n合計 4 種。"
                    },
                    {
                        "input": "2\n3\n3 5 4",
                        "output": "9",
                        "explanation": "有2個人\n有3段空位：3、5、4。\n長度 3 的那段：可放 2 人的起點有 2 種。\n長度 5 的那段：有 4 種。\n長度 4 的那段：有 3 種。\n合計 2 + 4 + 3 = 9 種。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n2\n6 2",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "2\n3\n3 5 4",
                        "expectedOutput": "9",
                        "score": 10
                    },
                    {
                        "input": "4\n1\n4",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "5\n3\n1 3 4",
                        "expectedOutput": "0",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-02-ListAnalysis/WP-03.sb3"
            },
            {
                "id": "cycjunior-004",
                "code": "M1-02-cycjunior-004",
                "title": "校車廣播系統熱血指數統計",
                "description": "快樂國中一年級的戶外教學日終於到了！全班同學興高采烈地搭上了前往遊樂園的校車。然而，去程的高速公路意外地塞車了，原本歡樂的氣氛隨著車窗外的景色靜止，車內的空氣也開始變得沉悶，同學們一個個開始打哈欠，甚至有人睡著了。\n身為康樂股長的小明，手中掌握著一份班上同學投票選出的「熱門歌曲清單」。這份清單上的每一首歌，根據節奏快慢與受歡迎程度，都有一個對應的「熱血指數」。指數越高，代表這首歌越能讓大家High起來（當然，如果是抒情歌，指數可能就很低，甚至如果是老師愛聽的老歌，指數可能是負的，會讓大家更想睡覺）。\n校車的廣播系統有一個特殊的限制：一次設定只能連續播放 K 首歌曲。一旦開始播放，就必須把這 K 首歌依序播完才能切換模式。小明的任務非常重要，他需要從這份落落長的歌單中，挑選出連續的 K 首歌，使得這段時間內的「熱血指數總和」達到最高，以此來喚醒全班同學的靈魂，把車內的氣氛炒到最高點！\n請你寫一個程式幫助小明，在給定的歌單順序中，找出那一段連續 K 首歌的熱血總和最大是多少",
                "examples": [
                    {
                        "input": "3\n5\n10 20 30 10 50",
                        "output": "90",
                        "explanation": "(10+20+30)=60\n(20+30+10)=60\n(30+10+50)=90 (最大)"
                    },
                    {
                        "input": "2\n4\n5 100 100 5",
                        "output": "200",
                        "explanation": "連續2首的組合：\n(5+100)=105, (100+100)=200, (100+5)=105。\n最大值為 200。"
                    }
                ],
                "testCases": [
                    {
                        "input": "2\n4\n1 2 3 4",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "3\n5\n5 5 5 5 5",
                        "expectedOutput": "15",
                        "score": 15
                    },
                    {
                        "input": "2\n5\n100 10 10 10 100",
                        "expectedOutput": "110",
                        "score": 20
                    },
                    {
                        "input": "4\n8\n1 2 100 100 100 2 1 1",
                        "expectedOutput": "302",
                        "score": 25
                    },
                    {
                        "input": "3\n6\n50 10 50 10 50 10",
                        "expectedOutput": "110",
                        "score": 30
                    }
                ],
                "difficulty": "L4",
                "difficultyLabel": "L4｜精熟",
                "sb3Path": "m0/M1-02-ListAnalysis/cycjunior-004.sb3"
            }
        ]
    },
    {
        "code": "M1-03",
        "title": "清單統計",
        "tier": "t1",
        "unlockCode": "M1-03-ListStats",
        "tasks": [
            {
                "id": "STA01-001",
                "code": "M1-03-STA01-001",
                "title": "（清單總和",
                "description": "給定 N 個整數，請計算這些數字的總和。",
                "examples": [
                    {
                        "input": "5\n3 6 1 8 2",
                        "output": "20",
                        "explanation": "3+6+1+8+2=20。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n3 6 1 8 2",
                        "expectedOutput": "20",
                        "score": 0
                    },
                    {
                        "input": "3\n10 20 30",
                        "expectedOutput": "60",
                        "score": 0
                    },
                    {
                        "input": "4\n-1 5 -3 9",
                        "expectedOutput": "10",
                        "score": 0
                    },
                    {
                        "input": "1\n99",
                        "expectedOutput": "99",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-03-ListStats/STA01-001.sb3"
            },
            {
                "id": "STA01-002",
                "code": "M1-03-STA01-002",
                "title": "整數平均",
                "description": "給定 N 個整數，請計算總和與整數平均。整數平均只取整數商，不處理小數。",
                "examples": [
                    {
                        "input": "4\n70 80 90 100",
                        "output": "340 85",
                        "explanation": "總和 340，340 除以 4 等於 85。"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n70 80 90 100",
                        "expectedOutput": "340 85",
                        "score": 0
                    },
                    {
                        "input": "3\n1 2 4",
                        "expectedOutput": "7 2",
                        "score": 0
                    },
                    {
                        "input": "5\n10 10 10 10 10",
                        "expectedOutput": "50 10",
                        "score": 0
                    },
                    {
                        "input": "6\n5 6 7 8 9 10",
                        "expectedOutput": "45 7",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-03-ListStats/STA01-002.sb3"
            },
            {
                "id": "STA01-003",
                "code": "M1-03-STA01-003",
                "title": "最高分與最低分",
                "description": "給定 N 位學生的成績，請找出最高分與最低分。",
                "examples": [
                    {
                        "input": "5\n80 60 95 70 88",
                        "output": "95 60",
                        "explanation": "最高分 95，最低分 60。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n80 60 95 70 88",
                        "expectedOutput": "95 60",
                        "score": 0
                    },
                    {
                        "input": "3\n100 100 100",
                        "expectedOutput": "100 100",
                        "score": 0
                    },
                    {
                        "input": "4\n12 99 34 5",
                        "expectedOutput": "99 5",
                        "score": 0
                    },
                    {
                        "input": "6\n70 65 88 91 59 73",
                        "expectedOutput": "91 59",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-03-ListStats/STA01-003.sb3"
            },
            {
                "id": "STA01-004",
                "code": "M1-03-STA01-004",
                "title": "通過率整數版",
                "description": "給定 N 位學生的成績，分數大於或等於 60 為通過。請計算通過人數與通過率。通過率使用整數百分比，小數直接捨去。",
                "examples": [
                    {
                        "input": "5\n80 55 60 40 90",
                        "output": "3 60",
                        "explanation": "5 人中 3 人通過，通過率為 3×100÷5=60。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n80 55 60 40 90",
                        "expectedOutput": "3 60",
                        "score": 0
                    },
                    {
                        "input": "4\n10 20 30 40",
                        "expectedOutput": "0 0",
                        "score": 0
                    },
                    {
                        "input": "3\n60 70 80",
                        "expectedOutput": "3 100",
                        "score": 0
                    },
                    {
                        "input": "6\n59 60 61 62 30 90",
                        "expectedOutput": "4 66",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-03-ListStats/STA01-004.sb3"
            },
            {
                "id": "CNT01-019",
                "code": "M1-03-CNT01-019",
                "title": "清單平均值",
                "description": "給定 N 個整數，請計算這些數字的總和與整數平均。整數平均只取商，不處理小數。",
                "examples": [
                    {
                        "input": "5\n80 75 90 60 95",
                        "output": "400 80",
                        "explanation": "總和為 400，400 除以 5 的整數商為 80。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n80 75 90 60 95",
                        "expectedOutput": "400 80",
                        "score": 0
                    },
                    {
                        "input": "3\n10 20 30",
                        "expectedOutput": "60 20",
                        "score": 0
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "expectedOutput": "10 2",
                        "score": 0
                    },
                    {
                        "input": "6\n8 8 9 9 10 10",
                        "expectedOutput": "54 9",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-03-ListStats/CNT01-019.sb3"
            },
            {
                "id": "CNT01-020",
                "code": "M1-03-CNT01-020",
                "title": "大於門檻的數量",
                "description": "給定一個門檻值 K 與 N 個整數，請計算有幾個數字大於 K。",
                "examples": [
                    {
                        "input": "6\n50\n30 60 50 80 45 90",
                        "output": "3",
                        "explanation": "大於 50 的數字有 60、80、90，共 3 個。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n50\n30 60 50 80 45 90",
                        "expectedOutput": "3",
                        "score": 0
                    },
                    {
                        "input": "4\n10\n1 2 3 4",
                        "expectedOutput": "0",
                        "score": 0
                    },
                    {
                        "input": "5\n5\n6 7 8 9 10",
                        "expectedOutput": "5",
                        "score": 0
                    },
                    {
                        "input": "7\n20\n20 21 19 22 18 23 17",
                        "expectedOutput": "3",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-03-ListStats/CNT01-020.sb3"
            },
            {
                "id": "CNT01-021",
                "code": "M1-03-CNT01-021",
                "title": "找最小值",
                "description": "給定 N 個整數，請找出其中最小的數字。",
                "examples": [
                    {
                        "input": "5\n8 3 9 2 7",
                        "output": "2",
                        "explanation": "5 個數字中最小的是 2。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n8 3 9 2 7",
                        "expectedOutput": "2",
                        "score": 0
                    },
                    {
                        "input": "4\n10 10 10 10",
                        "expectedOutput": "10",
                        "score": 0
                    },
                    {
                        "input": "6\n-1 -5 3 0 2 -4",
                        "expectedOutput": "-5",
                        "score": 0
                    },
                    {
                        "input": "3\n99 12 45",
                        "expectedOutput": "12",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-03-ListStats/CNT01-021.sb3"
            },
            {
                "id": "STA01-005",
                "code": "M1-03-STA01-005",
                "title": "高於平均的數量",
                "description": "給定 N 個整數，先計算整數平均，再計算有幾個數字大於平均。",
                "examples": [
                    {
                        "input": "5\n10 20 30 40 50",
                        "output": "30 2",
                        "explanation": "平均為 30，大於 30 的數字有 40、50。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n10 20 30 40 50",
                        "expectedOutput": "30 2",
                        "score": 0
                    },
                    {
                        "input": "4\n5 5 5 5",
                        "expectedOutput": "5 0",
                        "score": 0
                    },
                    {
                        "input": "3\n1 2 9",
                        "expectedOutput": "4 1",
                        "score": 0
                    },
                    {
                        "input": "6\n8 9 10 11 12 13",
                        "expectedOutput": "10 3",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-03-ListStats/STA01-005.sb3"
            },
            {
                "id": "STA01-006",
                "code": "M1-03-STA01-006",
                "title": "正負零統計",
                "description": "給定 N 個整數，請統計正數、負數與零各有幾個。",
                "examples": [
                    {
                        "input": "6\n-3 0 5 8 -1 0",
                        "output": "2 2 2",
                        "explanation": "正數有 5、8；負數有 -3、-1；零有 2 個。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n-3 0 5 8 -1 0",
                        "expectedOutput": "2 2 2",
                        "score": 0
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "expectedOutput": "4 0 0",
                        "score": 0
                    },
                    {
                        "input": "5\n-1 -2 -3 0 0",
                        "expectedOutput": "0 3 2",
                        "score": 0
                    },
                    {
                        "input": "3\n0 0 0",
                        "expectedOutput": "0 0 3",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-03-ListStats/STA01-006.sb3"
            },
            {
                "id": "STA01-007",
                "code": "M1-03-STA01-007",
                "title": "每日步數統計",
                "description": "給定 7 天的步數，請計算總步數、平均步數，以及步數大於或等於 10000 的天數。",
                "examples": [
                    {
                        "input": "8000 12000 10000 6000 15000 9000 11000",
                        "output": "71000 10142 4",
                        "explanation": "總步數 71000，平均 10142，達標天數為 4 天。"
                    }
                ],
                "testCases": [
                    {
                        "input": "8000 12000 10000 6000 15000 9000 11000",
                        "expectedOutput": "71000 10142 4",
                        "score": 0
                    },
                    {
                        "input": "1 2 3 4 5 6 7",
                        "expectedOutput": "28 4 0",
                        "score": 0
                    },
                    {
                        "input": "10000 10000 10000 10000 10000 10000 10000",
                        "expectedOutput": "70000 10000 7",
                        "score": 0
                    },
                    {
                        "input": "12000 9000 13000 8000 7000 11000 10000",
                        "expectedOutput": "70000 10000 4",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-03-ListStats/STA01-007.sb3"
            },
            {
                "id": "STA01-008",
                "code": "M1-03-STA01-008",
                "title": "相鄰變化統計）＋",
                "description": "給定 N 天的數值紀錄，請統計有幾次比前一天增加、幾次比前一天減少，以及幾次和前一天相同。",
                "examples": [
                    {
                        "input": "6\n10 12 12 9 15 14",
                        "output": "2 2 1",
                        "explanation": "10→12 增加，12→12 相同，12→9 減少，9→15 增加，15→14 減少。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n10 12 12 9 15 14",
                        "expectedOutput": "2 2 1",
                        "score": 0
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "expectedOutput": "3 0 0",
                        "score": 0
                    },
                    {
                        "input": "5\n9 7 7 6 6",
                        "expectedOutput": "0 2 2",
                        "score": 0
                    },
                    {
                        "input": "3\n5 5 5",
                        "expectedOutput": "0 0 2",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-03-ListStats/STA01-008.sb3"
            },
            {
                "id": "CNT01-024",
                "code": "M1-03-CNT01-024",
                "title": "清單反向加總",
                "description": "給定 N 個整數，請從最後一個數字往前讀取，並輸出反向讀取時的累加結果。",
                "examples": [
                    {
                        "input": "4\n2 5 3 1",
                        "output": "1 4 9 11",
                        "explanation": "反向讀取為 1、3、5、2，累加結果為 1、4、9、11。"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n2 5 3 1",
                        "expectedOutput": "1 4 9 11",
                        "score": 0
                    },
                    {
                        "input": "3\n10 20 30",
                        "expectedOutput": "30 50 60",
                        "score": 0
                    },
                    {
                        "input": "5\n1 1 1 1 1",
                        "expectedOutput": "1 2 3 4 5",
                        "score": 0
                    },
                    {
                        "input": "2\n7 4",
                        "expectedOutput": "4 11",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-03-ListStats/CNT01-024.sb3"
            }
        ]
    },
    {
        "code": "M1-04",
        "title": "清單索引與位置",
        "tier": "t1",
        "unlockCode": "M1-04-ListIndex",
        "tasks": [
            {
                "id": "IDX01-001",
                "code": "M1-04-IDX01-001",
                "title": "（指定位置的數字",
                "description": "給定 N 個整數與一個位置 P，請輸出第 P 個數字。位置從 1 開始計算。",
                "examples": [
                    {
                        "input": "5\n8 3 12 7 10\n3",
                        "output": "12",
                        "explanation": "第 3 個數字是 12。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n8 3 12 7 10\n3",
                        "expectedOutput": "12",
                        "score": 0
                    },
                    {
                        "input": "4\n1 2 3 4\n1",
                        "expectedOutput": "1",
                        "score": 0
                    },
                    {
                        "input": "4\n1 2 3 4\n4",
                        "expectedOutput": "4",
                        "score": 0
                    },
                    {
                        "input": "6\n-1 -2 -3 -4 -5 -6\n5",
                        "expectedOutput": "-5",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-04-ListIndex/IDX01-001.sb3"
            },
            {
                "id": "IDX01-002",
                "code": "M1-04-IDX01-002",
                "title": "第一個目標位置",
                "description": "給定 N 個整數與目標值 X，請找出 X 第一次出現的位置。位置從 1 開始計算。若沒有出現，輸出 0。",
                "examples": [
                    {
                        "input": "6\n4 8 3 8 5 8\n8",
                        "output": "2",
                        "explanation": "目標值 8 第一次出現在第 2 個位置。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n4 8 3 8 5 8\n8",
                        "expectedOutput": "2",
                        "score": 0
                    },
                    {
                        "input": "5\n1 2 3 4 5\n9",
                        "expectedOutput": "0",
                        "score": 0
                    },
                    {
                        "input": "4\n7 7 7 7\n7",
                        "expectedOutput": "1",
                        "score": 0
                    },
                    {
                        "input": "3\n-1 -2 -3\n-3",
                        "expectedOutput": "3",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-04-ListIndex/IDX01-002.sb3"
            },
            {
                "id": "IDX01-003",
                "code": "M1-04-IDX01-003",
                "title": "最後一個目標位置",
                "description": "給定 N 個整數與目標值 X，請找出 X 最後一次出現的位置。位置從 1 開始計算。若沒有出現，輸出 0。",
                "examples": [
                    {
                        "input": "6\n4 8 3 8 5 8\n8",
                        "output": "6",
                        "explanation": "目標值 8 最後一次出現在第 6 個位置。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n4 8 3 8 5 8\n8",
                        "expectedOutput": "6",
                        "score": 0
                    },
                    {
                        "input": "5\n1 2 3 4 5\n9",
                        "expectedOutput": "0",
                        "score": 0
                    },
                    {
                        "input": "4\n7 7 7 7\n7",
                        "expectedOutput": "4",
                        "score": 0
                    },
                    {
                        "input": "3\n-1 -2 -3\n-1",
                        "expectedOutput": "1",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-04-ListIndex/IDX01-003.sb3"
            },
            {
                "id": "IDX01-004",
                "code": "M1-04-IDX01-004",
                "title": "最大值的位置",
                "description": "給定 N 個整數，請找出最大值第一次出現的位置。位置從 1 開始計算。",
                "examples": [
                    {
                        "input": "6\n5 9 3 9 7 2",
                        "output": "9 2",
                        "explanation": "最大值 9 第一次出現在第 2 個位置。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n5 9 3 9 7 2",
                        "expectedOutput": "9 2",
                        "score": 0
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "expectedOutput": "4 4",
                        "score": 0
                    },
                    {
                        "input": "5\n10 10 9 8 7",
                        "expectedOutput": "10 1",
                        "score": 0
                    },
                    {
                        "input": "3\n-5 -1 -3",
                        "expectedOutput": "-1 2",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-04-ListIndex/IDX01-004.sb3"
            },
            {
                "id": "IDX01-005",
                "code": "M1-04-IDX01-005",
                "title": "最小值的位置",
                "description": "給定 N 個整數，請找出最小值最後一次出現的位置。位置從 1 開始計算。",
                "examples": [
                    {
                        "input": "6\n5 2 3 2 7 2",
                        "output": "2 6",
                        "explanation": "最小值 2 最後一次出現在第 6 個位置。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n5 2 3 2 7 2",
                        "expectedOutput": "2 6",
                        "score": 0
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "expectedOutput": "1 1",
                        "score": 0
                    },
                    {
                        "input": "5\n10 10 9 8 7",
                        "expectedOutput": "7 5",
                        "score": 0
                    },
                    {
                        "input": "3\n-5 -1 -5",
                        "expectedOutput": "-5 3",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-04-ListIndex/IDX01-005.sb3"
            },
            {
                "id": "IDX01-006",
                "code": "M1-04-IDX01-006",
                "title": "相鄰相同的位置",
                "description": "給定 N 個整數，請找出第一組相鄰且數值相同的位置。若第 i 個與第 i+1 個相同，輸出 i。若沒有相鄰相同，輸出 0。",
                "examples": [
                    {
                        "input": "6\n3 5 5 2 2 8",
                        "output": "2",
                        "explanation": "第 2 個與第 3 個都是 5，所以輸出 2。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n3 5 5 2 2 8",
                        "expectedOutput": "2",
                        "score": 0
                    },
                    {
                        "input": "5\n1 2 3 4 5",
                        "expectedOutput": "0",
                        "score": 0
                    },
                    {
                        "input": "4\n7 7 8 8",
                        "expectedOutput": "1",
                        "score": 0
                    },
                    {
                        "input": "3\n9 8 8",
                        "expectedOutput": "2",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-04-ListIndex/IDX01-006.sb3"
            },
            {
                "id": "IDX01-007",
                "code": "M1-04-IDX01-007",
                "title": "左右鄰居總和",
                "description": "給定 N 個整數與位置 P，請計算第 P 個數字左右鄰居的總和。若沒有左鄰居或右鄰居，該側視為 0。",
                "examples": [
                    {
                        "input": "5\n10 20 30 40 50\n3",
                        "output": "60",
                        "explanation": "第 3 個數字的左鄰居是 20，右鄰居是 40，總和為 60。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n10 20 30 40 50\n3",
                        "expectedOutput": "60",
                        "score": 0
                    },
                    {
                        "input": "5\n10 20 30 40 50\n1",
                        "expectedOutput": "20",
                        "score": 0
                    },
                    {
                        "input": "5\n10 20 30 40 50\n5",
                        "expectedOutput": "40",
                        "score": 0
                    },
                    {
                        "input": "1\n99\n1",
                        "expectedOutput": "0",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-04-ListIndex/IDX01-007.sb3"
            },
            {
                "id": "IDX01-008",
                "code": "M1-04-IDX01-008",
                "title": "兩個目標的距離）＋",
                "description": "給定 N 個整數，以及兩個目標值 A 與 B。請找出 A 第一次出現的位置與 B 第一次出現的位置，並輸出兩個位置的距離。保證 A 與 B 都會出現。",
                "examples": [
                    {
                        "input": "6\n4 8 3 9 5 8\n8 9",
                        "output": "2",
                        "explanation": "8 第一次出現在第 2 個位置，9 第一次出現在第 4 個位置，距離為 2。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n4 8 3 9 5 8\n8 9",
                        "expectedOutput": "2",
                        "score": 0
                    },
                    {
                        "input": "5\n1 2 3 4 5\n1 5",
                        "expectedOutput": "4",
                        "score": 0
                    },
                    {
                        "input": "4\n7 8 7 8\n8 7",
                        "expectedOutput": "1",
                        "score": 0
                    },
                    {
                        "input": "3\n-1 -2 -3\n-3 -1",
                        "expectedOutput": "2",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-04-ListIndex/IDX01-008.sb3"
            },
            {
                "id": "CNT01-022",
                "code": "M1-04-CNT01-022",
                "title": "第一個及格的位置",
                "description": "給定 N 位學生的成績，請找出第一個分數大於或等於 60 的位置。位置從 1 開始計算。保證至少有一位學生及格。",
                "examples": [
                    {
                        "input": "5\n40 55 60 80 30",
                        "output": "3",
                        "explanation": "第一個大於或等於 60 的分數是第 3 個。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n40 55 60 80 30",
                        "expectedOutput": "3",
                        "score": 0
                    },
                    {
                        "input": "4\n70 50 80 90",
                        "expectedOutput": "1",
                        "score": 0
                    },
                    {
                        "input": "6\n10 20 30 40 50 60",
                        "expectedOutput": "6",
                        "score": 0
                    },
                    {
                        "input": "3\n59 61 62",
                        "expectedOutput": "2",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-04-ListIndex/CNT01-022.sb3"
            },
            {
                "id": "CNT01-023",
                "code": "M1-04-CNT01-023",
                "title": "相鄰差值最大",
                "description": "給定 N 個整數，請計算相鄰兩個數字之間差值的最大值。差值一律用較大的數減較小的數。",
                "examples": [
                    {
                        "input": "5\n3 8 6 15 10",
                        "output": "9",
                        "explanation": "相鄰差值依序為 5、2、9、5，最大值為 9。"
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
                "sb3Path": "m0/M1-04-ListIndex/CNT01-023.sb3"
            }
        ]
    },
    {
        "code": "M1-05",
        "title": "字串處理基礎",
        "tier": "t1",
        "unlockCode": "M1-05-StringBasics",
        "tasks": [
            {
                "id": "STR01-001",
                "code": "M1-05-STR01-001",
                "title": "字串長度",
                "description": "給定一個不含空白的字串，請輸出它的長度。",
                "examples": [
                    {
                        "input": "hello",
                        "output": "5",
                        "explanation": "hello 有 5 個字元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "hello",
                        "expectedOutput": "5",
                        "score": 0
                    },
                    {
                        "input": "a",
                        "expectedOutput": "1",
                        "score": 0
                    },
                    {
                        "input": "Scratch",
                        "expectedOutput": "7",
                        "score": 0
                    },
                    {
                        "input": "YDWS2026",
                        "expectedOutput": "8",
                        "score": 0
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M1-05-StringBasics/STR01-001.sb3"
            },
            {
                "id": "STR01-002",
                "code": "M1-05-STR01-002",
                "title": "第一個與最後一個字元",
                "description": "給定一個不含空白的字串，請輸出第一個字元與最後一個字元。",
                "examples": [
                    {
                        "input": "coding",
                        "output": "c g",
                        "explanation": "coding 的第一個字元是 c，最後一個字元是 g。"
                    }
                ],
                "testCases": [
                    {
                        "input": "coding",
                        "expectedOutput": "c g",
                        "score": 0
                    },
                    {
                        "input": "a",
                        "expectedOutput": "a a",
                        "score": 0
                    },
                    {
                        "input": "Blockly",
                        "expectedOutput": "B y",
                        "score": 0
                    },
                    {
                        "input": "12345",
                        "expectedOutput": "1 5",
                        "score": 0
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M1-05-StringBasics/STR01-002.sb3"
            },
            {
                "id": "STR01-003",
                "code": "M1-05-STR01-003",
                "title": "指定位置的字元",
                "description": "給定一個字串與位置 P，請輸出第 P 個字元。位置從 1 開始計算。",
                "examples": [
                    {
                        "input": "teacher\n4",
                        "output": "c",
                        "explanation": "teacher 的第 4 個字元是 c。"
                    }
                ],
                "testCases": [
                    {
                        "input": "teacher\n4",
                        "expectedOutput": "c",
                        "score": 0
                    },
                    {
                        "input": "abcde\n1",
                        "expectedOutput": "a",
                        "score": 0
                    },
                    {
                        "input": "abcde\n5",
                        "expectedOutput": "e",
                        "score": 0
                    },
                    {
                        "input": "SmartRing\n6",
                        "expectedOutput": "R",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-05-StringBasics/STR01-003.sb3"
            },
            {
                "id": "STR01-004",
                "code": "M1-05-STR01-004",
                "title": "計算指定字元數量",
                "description": "給定一個字串與目標字元 C，請計算 C 在字串中出現幾次。",
                "examples": [
                    {
                        "input": "banana\na",
                        "output": "3",
                        "explanation": "banana 中 a 出現 3 次。"
                    }
                ],
                "testCases": [
                    {
                        "input": "banana\na",
                        "expectedOutput": "3",
                        "score": 0
                    },
                    {
                        "input": "mississippi\ns",
                        "expectedOutput": "4",
                        "score": 0
                    },
                    {
                        "input": "hello\nz",
                        "expectedOutput": "0",
                        "score": 0
                    },
                    {
                        "input": "aaaaa\na",
                        "expectedOutput": "5",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-05-StringBasics/STR01-004.sb3"
            },
            {
                "id": "STR01-005",
                "code": "M1-05-STR01-005",
                "title": "反向輸出字串",
                "description": "給定一個不含空白的字串，請將字串反向輸出。",
                "examples": [
                    {
                        "input": "abcde",
                        "output": "edcba",
                        "explanation": "abcde 反向後是 edcba。"
                    }
                ],
                "testCases": [
                    {
                        "input": "abcde",
                        "expectedOutput": "edcba",
                        "score": 0
                    },
                    {
                        "input": "a",
                        "expectedOutput": "a",
                        "score": 0
                    },
                    {
                        "input": "level",
                        "expectedOutput": "level",
                        "score": 0
                    },
                    {
                        "input": "Smart",
                        "expectedOutput": "tramS",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-05-StringBasics/STR01-005.sb3"
            },
            {
                "id": "STR01-006",
                "code": "M1-05-STR01-006",
                "title": "母音數量",
                "description": "給定一個只包含小寫英文字母的字串，請計算母音 a、e、i、o、u 共出現幾次。",
                "examples": [
                    {
                        "input": "education",
                        "output": "5",
                        "explanation": "education 中母音有 e、u、a、i、o，共 5 個。"
                    }
                ],
                "testCases": [
                    {
                        "input": "education",
                        "expectedOutput": "5",
                        "score": 0
                    },
                    {
                        "input": "sky",
                        "expectedOutput": "0",
                        "score": 0
                    },
                    {
                        "input": "banana",
                        "expectedOutput": "3",
                        "score": 0
                    },
                    {
                        "input": "aeiou",
                        "expectedOutput": "5",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-05-StringBasics/STR01-006.sb3"
            },
            {
                "id": "STR01-007",
                "code": "M1-05-STR01-007",
                "title": "是否回文",
                "description": "給定一個不含空白的字串，請判斷它是否正著讀和反著讀都相同。",
                "examples": [
                    {
                        "input": "level",
                        "output": "YES",
                        "explanation": "level 正著讀與反著讀相同。"
                    }
                ],
                "testCases": [
                    {
                        "input": "level",
                        "expectedOutput": "YES",
                        "score": 0
                    },
                    {
                        "input": "abc",
                        "expectedOutput": "NO",
                        "score": 0
                    },
                    {
                        "input": "a",
                        "expectedOutput": "YES",
                        "score": 0
                    },
                    {
                        "input": "noon",
                        "expectedOutput": "YES",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-05-StringBasics/STR01-007.sb3"
            },
            {
                "id": "STR01-008",
                "code": "M1-05-STR01-008",
                "title": "相鄰相同字元",
                "description": "給定一個字串，請判斷是否存在兩個相鄰且相同的字元。",
                "examples": [
                    {
                        "input": "book",
                        "output": "YES",
                        "explanation": "book 中有相鄰的 oo。"
                    }
                ],
                "testCases": [
                    {
                        "input": "book",
                        "expectedOutput": "YES",
                        "score": 0
                    },
                    {
                        "input": "abcd",
                        "expectedOutput": "NO",
                        "score": 0
                    },
                    {
                        "input": "a",
                        "expectedOutput": "NO",
                        "score": 0
                    },
                    {
                        "input": "committee",
                        "expectedOutput": "YES",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-05-StringBasics/STR01-008.sb3"
            }
        ]
    },
    {
        "code": "M1-06",
        "title": "字串處理進階：格式與編碼",
        "tier": "t1",
        "unlockCode": "M1-06-StringFormat",
        "tasks": [
            {
                "id": "JSS01-D03",
                "code": "M1-06-JSS01-D03",
                "title": "逐字元輸出",
                "description": "輸入一個字串，請依序輸出每一個字元，每個字元各佔一行。本題用來示範用迴圈逐一處理字元",
                "examples": [
                    {
                        "input": "cat",
                        "output": "c\na\nt",
                        "explanation": "依序輸出 c、a、t。"
                    },
                    {
                        "input": "Hi",
                        "output": "H\ni",
                        "explanation": "依序輸出 H、i。"
                    }
                ],
                "testCases": [
                    {
                        "input": "cat",
                        "expectedOutput": "c\na\nt",
                        "score": 20
                    },
                    {
                        "input": "Hi",
                        "expectedOutput": "H\ni",
                        "score": 20
                    },
                    {
                        "input": "A",
                        "expectedOutput": "A",
                        "score": 20
                    },
                    {
                        "input": "code",
                        "expectedOutput": "c\no\nd\ne",
                        "score": 20
                    },
                    {
                        "input": "123",
                        "expectedOutput": "1\n2\n3",
                        "score": 20
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M1-06-StringFormat/JSS01-D03.sb3"
            },
            {
                "id": "JSS01-P01",
                "code": "M1-06-JSS01-P01",
                "title": "指定字元出現次數",
                "description": "第一行輸入一個字串 S，第二行輸入一個字元 C。請計算 C 在 S 中出現幾次。本題用來練習字串遍歷與條件計數",
                "examples": [
                    {
                        "input": "banana\na",
                        "output": "3",
                        "explanation": "a 在 banana 中出現 3 次。"
                    },
                    {
                        "input": "code\nz",
                        "output": "0",
                        "explanation": "z 沒有出現。"
                    }
                ],
                "testCases": [
                    {
                        "input": "banana\na",
                        "expectedOutput": "3",
                        "score": 20
                    },
                    {
                        "input": "code\nz",
                        "expectedOutput": "0",
                        "score": 20
                    },
                    {
                        "input": "hello\nl",
                        "expectedOutput": "2",
                        "score": 20
                    },
                    {
                        "input": "aaaaa\na",
                        "expectedOutput": "5",
                        "score": 20
                    },
                    {
                        "input": "Blockly\no",
                        "expectedOutput": "1",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-06-StringFormat/JSS01-P01.sb3"
            },
            {
                "id": "JSS01-P02",
                "code": "M1-06-JSS01-P02",
                "title": "簡易格式檢查",
                "description": "輸入一個字串 S。若 S 的長度為 4，輸出 OK；否則輸出 NG。本題用來練習簡單的字串格式檢查",
                "examples": [
                    {
                        "input": "ABCD",
                        "output": "OK",
                        "explanation": "ABCD 長度為 4。"
                    },
                    {
                        "input": "ABC",
                        "output": "NG",
                        "explanation": "ABC 長度不是 4。"
                    }
                ],
                "testCases": [
                    {
                        "input": "ABCD",
                        "expectedOutput": "OK",
                        "score": 20
                    },
                    {
                        "input": "ABC",
                        "expectedOutput": "NG",
                        "score": 20
                    },
                    {
                        "input": "1234",
                        "expectedOutput": "OK",
                        "score": 20
                    },
                    {
                        "input": "hello",
                        "expectedOutput": "NG",
                        "score": 20
                    },
                    {
                        "input": "A",
                        "expectedOutput": "NG",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-06-StringFormat/JSS01-P02.sb3"
            },
            {
                "id": "A-10-0",
                "code": "M1-06-A-10-0",
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
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-06-StringFormat/A-10-0.sb3"
            },
            {
                "id": "A-11-0",
                "code": "M1-06-A-11-0",
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
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-06-StringFormat/A-11-0.sb3"
            },
            {
                "id": "A-12-0",
                "code": "M1-06-A-12-0",
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
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-06-StringFormat/A-12-0.sb3"
            },
            {
                "id": "cycjunior-002",
                "code": "M1-06-cycjunior-002",
                "title": "5進位解碼",
                "description": "程式設計社的入社考題是一串神秘代碼。代碼由 A, B, C, D, E 五個字母組成，這其實是一個「5進位」數字系統：\nA=0, B=1, C=2, D=3, E=4，\n例如密碼 BC 代表 5進位的 12，換算成 10 進位就是 1 × 5 + 2 = 7。請編寫程式將密碼解碼為 10 進位數字。\n1. 輸入密碼長度 L 與密碼內容（由A-E組成）。\n2. 權重計算：最右邊位數是 5的0次方(任何數的0次方為1)，左邊一位是 5的1次方，以此類推。\n3. 將每個字母轉換為對應數值後，計算總和",
                "examples": [
                    {
                        "input": "2\nB C",
                        "output": "7",
                        "explanation": "B=1, C=2。\n1 × 5 + 2 = 7。"
                    },
                    {
                        "input": "3\nB A E",
                        "output": "29",
                        "explanation": "B=1, A=0, E=4。\n1 × 25 + 0 × 5 + 4 × 1 = 29。"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\nA",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "2\nE E",
                        "expectedOutput": "24",
                        "score": 15
                    },
                    {
                        "input": "3\nB A A",
                        "expectedOutput": "25",
                        "score": 20
                    },
                    {
                        "input": "4\nB A A A",
                        "expectedOutput": "125",
                        "score": 25
                    },
                    {
                        "input": "5\nC D E A B",
                        "expectedOutput": "1726",
                        "score": 30
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-06-StringFormat/cycjunior-002.sb3"
            },
            {
                "id": "TYTN-10",
                "code": "M1-06-TYTN-10",
                "title": "檢查碼",
                "description": "書店會員卡享有購書8折優惠，為避免有人偽造會員卡，書店老闆在卡號中加入檢查碼。\n\n會員卡編號格式為：一個英文字母 + 4個數字 + 1個檢查碼。\n\n英文字母對應的數字如下：\n\nA → 11 B → 13 C → 15 D → 17\n\n若為正確的會員卡號，則 (英文字母對應的數字 + 4個數字 + 檢查碼) 除以 5 的餘數會是 4，其餘情況皆為不正確。\n\n例如：\n\nB20135 = 13+2+0+1+3+5 = 24 → 24÷5=4餘4 → 正確會員卡\n\nA15274 = 11+1+5+2+7+4 = 30 → 30÷5=6餘0 → 不正確會員卡\n\n請寫一個程式判斷會員卡號是否正確，若正確輸出 yes，否則輸出 no。",
                "examples": [
                    {
                        "input": "C20351",
                        "output": "no",
                        "explanation": "C20351 = 15+2+0+3+5+1 = 26\n26÷5 = 5餘1 → 不正確會員卡。"
                    },
                    {
                        "input": "D15713",
                        "output": "yes",
                        "explanation": "D15713 = 17+1+5+7+1+3 = 34\n34÷5 = 6餘4 → 正確會員卡。"
                    }
                ],
                "testCases": [
                    {
                        "input": "C20351",
                        "expectedOutput": "no",
                        "score": 10
                    },
                    {
                        "input": "D15713",
                        "expectedOutput": "yes",
                        "score": 10
                    },
                    {
                        "input": "A40244",
                        "expectedOutput": "no",
                        "score": 10
                    },
                    {
                        "input": "B99994",
                        "expectedOutput": "no",
                        "score": 10
                    },
                    {
                        "input": "A22146",
                        "expectedOutput": "no",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-06-StringFormat/TYTN-10.sb3"
            },
            {
                "id": "W4-01",
                "code": "M1-06-W4-01",
                "title": "數位顯示器",
                "description": "七段顯示器是一種常見的數字顯示裝置，由 7 條 LED 燈條組成，可用來顯示數字 0~9。\n每個數字所需點亮的 LED 燈條數量如下：\n0→6條、1→2條、2→5條、3→5條、4→4條、5→5條、6→6條、7→3條、8→7條、9→6條。\n現在給定 N 條可用的 LED 燈條，請你使用這些燈條組成一個「數字（可為雙位數）」，並且必須符合以下規則：\n1. 數字（0~9）最多只能各使用一次（兩位數時十位與個位不能相同）。\n2. 組成的數字不可有前導零（除非答案本身就是 0）。\n3. 組成的數字最多只能有 2 位（0~99）。\n請設計一個程式，找出在符合上述條件下「剛好用完所有 N 條 LED 燈條」時，可以組成的最大值。\n若無法用 1 位數或 2 位數剛好用完所有 N 條 LED 燈條，請輸出 -1。",
                "examples": [
                    {
                        "input": "3",
                        "output": "7",
                        "explanation": "3 條燈條可以組成數字 7（需要 3 條）。"
                    },
                    {
                        "input": "7",
                        "output": "74",
                        "explanation": "7(3條)+4(4條)=7。可組成 74 或 47，最大為 74。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "7",
                        "expectedOutput": "74",
                        "score": 15
                    },
                    {
                        "input": "6",
                        "expectedOutput": "41",
                        "score": 20
                    },
                    {
                        "input": "8",
                        "expectedOutput": "91",
                        "score": 25
                    },
                    {
                        "input": "14",
                        "expectedOutput": "-1",
                        "score": 30
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-06-StringFormat/W4-01.sb3"
            },
            {
                "id": "A-10-1",
                "code": "M1-06-A-10-1",
                "title": "加權成績計算",
                "description": "大明綜合高中辦理考試，不同科系考試科目數量、每周上課時數不一定相同\n\n成績計算時，以每一科成績乘以該科上課時數為加權成績，將所有科目的加權成績加總，並除以全部科目總時數，即為學生加權平均成績\n\n請設計一個程式，輸入各科的成績、各科加權時數，程式運算後輸出加權總分、加權平均、等弟。\n\n第一行輸入N，代表該科共有N科考試成績\n\n第二行依序輸入N筆各科成績，各科成績之間以空白間隔\n\n第三行依序輸入N筆各科對應加權時數，各科加權時數之間以空白間隔\n\n計算全部加權總分，加權平均成績以四捨五入取整數\n\n如果平均分數大於等於 80，就是「A」等第，小於80大於等於70則是「B」等第，小於70大於等於60則是「C」等第，否則是「D」等第。\n\n程式輸出加權總分、加權平均、等弟。\n\n這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。",
                "examples": [
                    {
                        "input": "3\n80 70 90\n1 2 1",
                        "output": "310\n78\nB",
                        "explanation": "第一行輸入3，表示後面會有3科成績輸入\n第二行輸入各科原始成績80 70 90\n第三行輸入各科加權時數1 2 1\n程式運算輸出加權總分310、平均78、等第B"
                    },
                    {
                        "input": "6\n50 41 60 55 70 65",
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
                "difficulty": "L4",
                "difficultyLabel": "L4｜精熟",
                "sb3Path": "m0/M1-06-StringFormat/A-10-1.sb3"
            },
            {
                "id": "A-11-1",
                "code": "M1-06-A-11-1",
                "title": "計算字元出現最多次數",
                "description": "請設計程式，輸入一字串由小寫英文字母組合，長度1~50間的字串\n\n程式會統計該字串的字母中，出現最多的次數。\n\n這樣的練習可以訓練你循環計數迴圈與字串統計。",
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
                        "input": "ChaiYiCity",
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
                "difficulty": "L4",
                "difficultyLabel": "L4｜精熟",
                "sb3Path": "m0/M1-06-StringFormat/A-11-1.sb3"
            },
            {
                "id": "A-12-1",
                "code": "M1-06-A-12-1",
                "title": "動態密碼轉換",
                "description": "小明設計了一種英文字元密碼環編碼規則：\n\n密碼環為『abcdefghijklmnopqrstuvwxyz0123456789』\n\n第一行輸入數字N(N介於0~36)，N為編碼位移值\n\n編碼時，待編碼字串每個字元都按照密碼環『往前』移動N個位置\n\n如果轉換後密碼超過密碼環最後一個字元9，則從回前面a繼續接回密碼環\n\n請寫一個程式，輸入一個英文單字，程式輸出依照編碼規則轉換後的密碼字串。\n\n這樣的練習訓練你字元處理與條件轉換。",
                "examples": [
                    {
                        "input": "2\nbanana",
                        "output": "98l8l8",
                        "explanation": "第一行輸入2，表示編碼時要往後前2個位置\n第二行輸入banana表示待編碼字串為banana\n程式運算，將字串往後移2個位置加密\n程式輸出98l8l8"
                    },
                    {
                        "input": "10\nstudent",
                        "output": "ijk34dj",
                        "explanation": "第一行輸入10，表示編碼時要往後前10個位置\n第二行輸入student表示待編碼字串為student\n程式運算，將字串往後移10個位置加密\n程式輸出ijk34dj"
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
                "difficulty": "L4",
                "difficultyLabel": "L4｜精熟",
                "sb3Path": "m0/M1-06-StringFormat/A-12-1.sb3"
            }
        ]
    },
    {
        "code": "M1-07",
        "title": "排序法：交換與選擇排序",
        "tier": "t1",
        "unlockCode": "M1-07-SortBasics",
        "tasks": [
            {
                "id": "SORT01-001",
                "code": "M1-07-SORT01-001",
                "title": "（兩數交換成升冪",
                "description": "給定兩個整數，請將它們由小到大輸出。",
                "examples": [
                    {
                        "input": "8 3",
                        "output": "3 8",
                        "explanation": "3 比 8 小，所以輸出 3 8。"
                    }
                ],
                "testCases": [
                    {
                        "input": "8 3",
                        "expectedOutput": "3 8",
                        "score": 0
                    },
                    {
                        "input": "2 9",
                        "expectedOutput": "2 9",
                        "score": 0
                    },
                    {
                        "input": "5 5",
                        "expectedOutput": "5 5",
                        "score": 0
                    },
                    {
                        "input": "-1 -7",
                        "expectedOutput": "-7 -1",
                        "score": 0
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M1-07-SortBasics/SORT01-001.sb3"
            },
            {
                "id": "seclect-001",
                "code": "M1-07-seclect-001",
                "title": "SWAP交換函數",
                "description": "在學習排序之前，小安先練習一個重要的小任務。\n桌上有兩張數字卡片，依序放在第 1 個位置與第 2 個位置。\n小安希望讓「數字小的卡片在前面，數字大的卡片在後面」。\n如果前面的數字比較大，就需要把兩張卡片的位置交換；\n如果順序本來就正確，則不需要交換。\n請你寫一個程式，判斷是否需要交換，並輸出交換後的結果。\n（提示：交換時需要使用暫存變數）",
                "examples": [
                    {
                        "input": "8 3",
                        "output": "3 8",
                        "explanation": "前面的數字 8 比後面的 3 大，\n需要交換兩個數字的位置。"
                    },
                    {
                        "input": "4 9",
                        "output": "4 9",
                        "explanation": "前面的數字較小，順序正確，\n不需要交換。"
                    }
                ],
                "testCases": [
                    {
                        "input": "8 3",
                        "expectedOutput": "3 8",
                        "score": 10
                    },
                    {
                        "input": "4 9",
                        "expectedOutput": "4 9",
                        "score": 10
                    },
                    {
                        "input": "6 6",
                        "expectedOutput": "6 6",
                        "score": 10
                    },
                    {
                        "input": "0 5",
                        "expectedOutput": "0 5",
                        "score": 10
                    },
                    {
                        "input": "9 0",
                        "expectedOutput": "0 9",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M1-07-SortBasics/seclect-001.sb3"
            },
            {
                "id": "SORT01-002",
                "code": "M1-07-SORT01-002",
                "title": "三數升冪排序",
                "description": "給定三個整數，請將它們由小到大輸出。這題可用多次相鄰比較與交換完成。",
                "examples": [
                    {
                        "input": "9 2 5",
                        "output": "2 5 9",
                        "explanation": "三個數由小到大為 2、5、9。"
                    }
                ],
                "testCases": [
                    {
                        "input": "9 2 5",
                        "expectedOutput": "2 5 9",
                        "score": 0
                    },
                    {
                        "input": "1 2 3",
                        "expectedOutput": "1 2 3",
                        "score": 0
                    },
                    {
                        "input": "3 3 1",
                        "expectedOutput": "1 3 3",
                        "score": 0
                    },
                    {
                        "input": "-1 8 0",
                        "expectedOutput": "-1 0 8",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-07-SortBasics/SORT01-002.sb3"
            },
            {
                "id": "SORT01-003",
                "code": "M1-07-SORT01-003",
                "title": "相鄰交換一次",
                "description": "給定 N 個整數，請從左到右檢查每一組相鄰數字。如果左邊數字大於右邊數字，就交換兩者。整個清單只掃描一次。",
                "examples": [
                    {
                        "input": "5\n5 1 4 2 3",
                        "output": "1 4 2 3 5",
                        "explanation": "泡泡排序掃描一輪後，最大值 5 會移到最右邊。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n5 1 4 2 3",
                        "expectedOutput": "1 4 2 3 5",
                        "score": 0
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "expectedOutput": "1 2 3 4",
                        "score": 0
                    },
                    {
                        "input": "4\n4 3 2 1",
                        "expectedOutput": "3 2 1 4",
                        "score": 0
                    },
                    {
                        "input": "6\n2 9 1 8 3 7",
                        "expectedOutput": "2 1 8 3 7 9",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-07-SortBasics/SORT01-003.sb3"
            },
            {
                "id": "SORT01-004",
                "code": "M1-07-SORT01-004",
                "title": "泡泡排序升冪",
                "description": "給定 N 個整數，請使用排序概念將它們由小到大輸出。",
                "examples": [
                    {
                        "input": "5\n5 1 4 2 3",
                        "output": "1 2 3 4 5",
                        "explanation": "排序後由小到大為 1 2 3 4 5。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n5 1 4 2 3",
                        "expectedOutput": "1 2 3 4 5",
                        "score": 0
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "expectedOutput": "1 2 3 4",
                        "score": 0
                    },
                    {
                        "input": "4\n4 3 2 1",
                        "expectedOutput": "1 2 3 4",
                        "score": 0
                    },
                    {
                        "input": "6\n-1 5 0 -3 2 2",
                        "expectedOutput": "-3 -1 0 2 2 5",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-07-SortBasics/SORT01-004.sb3"
            },
            {
                "id": "SORT01-005",
                "code": "M1-07-SORT01-005",
                "title": "泡泡排序降冪",
                "description": "給定 N 個整數，請將它們由大到小輸出。",
                "examples": [
                    {
                        "input": "5\n5 1 4 2 3",
                        "output": "5 4 3 2 1",
                        "explanation": "排序後由大到小為 5 4 3 2 1。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n5 1 4 2 3",
                        "expectedOutput": "5 4 3 2 1",
                        "score": 0
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "expectedOutput": "4 3 2 1",
                        "score": 0
                    },
                    {
                        "input": "4\n4 3 2 1",
                        "expectedOutput": "4 3 2 1",
                        "score": 0
                    },
                    {
                        "input": "6\n-1 5 0 -3 2 2",
                        "expectedOutput": "5 2 2 0 -1 -3",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-07-SortBasics/SORT01-005.sb3"
            },
            {
                "id": "SORT01-006",
                "code": "M1-07-SORT01-006",
                "title": "排序後的中間值",
                "description": "給定奇數個整數，請將它們由小到大排序後，輸出中間位置的數字。位置從 1 開始計算。",
                "examples": [
                    {
                        "input": "5\n9 1 5 3 7",
                        "output": "5",
                        "explanation": "排序後為 1 3 5 7 9，中間值是 5。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n9 1 5 3 7",
                        "expectedOutput": "5",
                        "score": 0
                    },
                    {
                        "input": "3\n10 2 8",
                        "expectedOutput": "8",
                        "score": 0
                    },
                    {
                        "input": "7\n4 4 1 9 2 8 6",
                        "expectedOutput": "4",
                        "score": 0
                    },
                    {
                        "input": "1\n99",
                        "expectedOutput": "99",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-07-SortBasics/SORT01-006.sb3"
            },
            {
                "id": "SORT01-007",
                "code": "M1-07-SORT01-007",
                "title": "排序後第K小",
                "description": "給定 N 個整數與 K，請將數字由小到大排序後，輸出第 K 小的數字。位置從 1 開始計算。",
                "examples": [
                    {
                        "input": "6\n8 3 9 1 5 7\n2",
                        "output": "3",
                        "explanation": "排序後為 1 3 5 7 8 9，第 2 小是 3。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n8 3 9 1 5 7\n2",
                        "expectedOutput": "3",
                        "score": 0
                    },
                    {
                        "input": "5\n5 4 3 2 1\n5",
                        "expectedOutput": "5",
                        "score": 0
                    },
                    {
                        "input": "5\n5 4 3 2 1\n1",
                        "expectedOutput": "1",
                        "score": 0
                    },
                    {
                        "input": "4\n10 10 8 9\n3",
                        "expectedOutput": "10",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-07-SortBasics/SORT01-007.sb3"
            },
            {
                "id": "SORT01-008",
                "code": "M1-07-SORT01-008",
                "title": "排序後去除最高最低）＋",
                "description": "給定 N 個整數，請排序後去除一個最低值與一個最高值，再計算剩下數字的總和。保證 N 大於或等於 3。",
                "examples": [
                    {
                        "input": "5\n80 90 70 100 60",
                        "output": "240",
                        "explanation": "排序後為 60 70 80 90 100，去除 60 和 100，剩下總和為 240。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n80 90 70 100 60",
                        "expectedOutput": "240",
                        "score": 0
                    },
                    {
                        "input": "3\n10 20 30",
                        "expectedOutput": "20",
                        "score": 0
                    },
                    {
                        "input": "6\n5 5 5 5 5 5",
                        "expectedOutput": "20",
                        "score": 0
                    },
                    {
                        "input": "7\n9 1 8 2 7 3 6",
                        "expectedOutput": "26",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-07-SortBasics/SORT01-008.sb3"
            },
            {
                "id": "seclect-004",
                "code": "M1-07-seclect-004",
                "title": "選擇排序第一回合",
                "description": "小安正在學習「選擇排序法」，老師請他先完成第一回合的任務。\n桌上有一排固定 5 個的數字，依序放在第 1 到第 5 個位置中。\n請你找出這 5 個數字中最小的數字，並把它與第 1 個位置的數字交換。\n注意事項：\n1. 只進行「第一回合」，不需要完成整個排序。\n2. 若最小值有多個，請選擇最前面出現的那一個。\n3. 交換完成後，其餘位置的數字順序保持不變",
                "examples": [
                    {
                        "input": "5\n8 3 5 1 6",
                        "output": "1 3 5 8 6",
                        "explanation": "最小值為 1（在第4個位置），\n與第1個位置的 8 交換。"
                    },
                    {
                        "input": "5\n2 4 6 8 10",
                        "output": "2 4 6 8 10",
                        "explanation": "最小值已在第1個位置，\n不需交換。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n8 3 5 1 6",
                        "expectedOutput": "1 3 5 8 6",
                        "score": 10
                    },
                    {
                        "input": "5\n2 4 6 8 10",
                        "expectedOutput": "2 4 6 8 10",
                        "score": 10
                    },
                    {
                        "input": "5\n5 4 3 2 1",
                        "expectedOutput": "1 4 3 2 5",
                        "score": 10
                    },
                    {
                        "input": "5\n7 2 2 9 5",
                        "expectedOutput": "2 7 2 9 5",
                        "score": 10
                    },
                    {
                        "input": "5\n9 8 7 6 5",
                        "expectedOutput": "5 8 7 6 9",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-07-SortBasics/seclect-004.sb3"
            },
            {
                "id": "seclect-005",
                "code": "M1-07-seclect-005",
                "title": "完整選擇排序",
                "description": "小安已經學會如何在清單中找出最小值，並進行兩數交換。\n現在老師請他完成完整的選擇排序任務。\n桌上有一排固定 5 個整數，請你使用「選擇排序法」，\n將這些數字由小到大排序。\n選擇排序說明：\n1. 從尚未排序的部分中找出最小值。\n2. 將最小值與目前排序位置的數字交換。\n3. 重複上述步驟，直到整個清單排序完成。\n注意事項：\n1. 不可使用排序相關的積木或指令。\n2. 若有相同數字，排序後相對位置不限",
                "examples": [
                    {
                        "input": "5\n8 3 5 1 6",
                        "output": "1 3 5 6 8",
                        "explanation": "依序找出最小值並交換，\n完成由小到大的排序。"
                    },
                    {
                        "input": "5\n2 4 6 8 10",
                        "output": "2 4 6 8 10",
                        "explanation": "原本已經排序完成，\n結果不變。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n8 3 5 1 6",
                        "expectedOutput": "1 3 5 6 8",
                        "score": 10
                    },
                    {
                        "input": "5\n2 4 6 8 10",
                        "expectedOutput": "2 4 6 8 10",
                        "score": 10
                    },
                    {
                        "input": "5\n5 4 3 2 1",
                        "expectedOutput": "1 2 3 4 5",
                        "score": 10
                    },
                    {
                        "input": "5\n7 2 2 9 5",
                        "expectedOutput": "2 2 5 7 9",
                        "score": 10
                    },
                    {
                        "input": "5\n9 1 8 1 7",
                        "expectedOutput": "1 1 7 8 9",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-07-SortBasics/seclect-005.sb3"
            },
            {
                "id": "seclect-006",
                "code": "M1-07-seclect-006",
                "title": "排序演算法",
                "description": "資訊課中，老師給了小華一排數字卡片，每張卡片上都有一個整數。\n小華想要把這些卡片由小到大排好，但老師規定：\n不能使用任何「排序」積木，只能使用重複、比較與變數。\n小華想到一個方法：\n每一回合從「還沒排好的卡片」中，找出最小的數字，依序放到前面。\n請你寫一個程式，依照這個想法，將輸入的數字由小到大排序後",
                "examples": [
                    {
                        "input": "5\n8 3 5 1 6",
                        "output": "1 3 5 6 8",
                        "explanation": "第1次找最小值為 1\n第2次在剩下的數中找最小值為 3\n依序完成排序。"
                    },
                    {
                        "input": "4\n7 2 2 9",
                        "output": "2 2 7 9",
                        "explanation": "排序時需正確處理重複數字。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n8 3 5 1 6",
                        "expectedOutput": "1 3 5 6 8",
                        "score": 10
                    },
                    {
                        "input": "4\n7 2 2 9",
                        "expectedOutput": "2 2 7 9",
                        "score": 10
                    },
                    {
                        "input": "5\n1 2 3 4 5",
                        "expectedOutput": "1 2 3 4 5",
                        "score": 10
                    },
                    {
                        "input": "5\n9 8 7 6 5",
                        "expectedOutput": "5 6 7 8 9",
                        "score": 10
                    },
                    {
                        "input": "1\n4",
                        "expectedOutput": "4",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-07-SortBasics/seclect-006.sb3"
            }
        ]
    },
    {
        "code": "M1-08",
        "title": "排序應用：連動資料處理",
        "tier": "t1",
        "unlockCode": "M1-08-SortApplied",
        "tasks": [
            {
                "id": "seclect-002",
                "code": "M1-08-seclect-002",
                "title": "卡片位置交換清單版",
                "description": "小安已經學會「兩個變數的交換」，現在他拿到一排固定 5 張的數字卡片，\n卡片依序放在第 1 到第 5 個位置中。\n老師指定清單中的兩個位置，小安需要把這兩個位置上的數字卡片進行交換，\n其他位置的卡片保持不變。\n請你寫一個程式，完成指定「清單位址」的資料交換。\n（提示：交換時仍然需要使用暫存變數）",
                "examples": [
                    {
                        "input": "5\n8 3 5 1 6\n2\n2 4",
                        "output": "8 1 5 3 6",
                        "explanation": "第2個位置是 3，第4個位置是 1，\n交換後，其餘位置不變。"
                    },
                    {
                        "input": "5\n4 7 2 9 5\n2\n1 5",
                        "output": "5 7 2 9 4",
                        "explanation": "交換第1與第5個位置的卡片。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n8 3 5 1 6\n2\n2 4",
                        "expectedOutput": "8 1 5 3 6",
                        "score": 10
                    },
                    {
                        "input": "5\n4 7 2 9 5\n2\n1 5",
                        "expectedOutput": "5 7 2 9 4",
                        "score": 10
                    },
                    {
                        "input": "5\n6 6 6 6 6\n2\n3 4",
                        "expectedOutput": "6 6 6 6 6",
                        "score": 10
                    },
                    {
                        "input": "5\n1 2 3 4 5\n2\n2 3",
                        "expectedOutput": "1 3 2 4 5",
                        "score": 10
                    },
                    {
                        "input": "5\n9 8 7 6 5\n2\n1 4",
                        "expectedOutput": "6 8 7 9 5",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-08-SortApplied/seclect-002.sb3"
            },
            {
                "id": "seclect-003",
                "code": "M1-08-seclect-003",
                "title": "清單最大最小值的位置",
                "description": "在進行排序之前，程式必須先知道「最大值或最小值在清單的哪一個位置」。\n小安已經可以找出清單中的最大值與最小值，\n但老師希望他進一步找出該數值所在的位置（索引值），\n才能正確進行資料交換。\n現在給你一個固定長度為 5 的整數清單，\n請找出清單中最小值所在的位置。\n注意事項：\n1. 清單位置由 1 開始計算（第 1 個為位置 1）。\n2. 若最小值出現多次，請輸出最前面出現的那一個位置",
                "examples": [
                    {
                        "input": "5\n8 3 5 1 6",
                        "output": "4",
                        "explanation": "最小值為 1，\n位於第 4 個位置。"
                    },
                    {
                        "input": "5\n2 4 2 9 5",
                        "output": "1",
                        "explanation": "最小值為 2，\n第 1 與第 3 個位置都有，\n取最前面的第 1 個位置。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n8 3 5 1 6",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "5\n2 4 2 9 5",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "5\n7 6 5 4 3",
                        "expectedOutput": "5",
                        "score": 10
                    },
                    {
                        "input": "5\n1 9 8 7 6",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "5\n4 4 4 4 4",
                        "expectedOutput": "1",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-08-SortApplied/seclect-003.sb3"
            },
            {
                "id": "seclect-007",
                "code": "M1-08-seclect-007",
                "title": "雙卡同步交換",
                "description": "在資訊課中，老師準備了兩排卡片，\n第一排是學生姓名，第二排是對應的分數。\n每一個位置上的姓名與分數是一組資料，必須一起行動。\n老師指定兩個位置，小華需要把這兩個位置上的資料進行交換。\n交換時，姓名與分數都必須一起交換，其他位置保持不變。\n請你寫一個程式，完成指定位置的「連動清單交換」任務",
                "examples": [
                    {
                        "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60\n2 4",
                        "output": "Amy Dora Carl Bob Eric\n80 85 70 90 60",
                        "explanation": "第2與第4個位置交換，\n姓名與分數必須一起交換。"
                    },
                    {
                        "input": "Tom May John Lily Ken\n75 88 92 60 85\n1 5",
                        "output": "Ken May John Lily Tom\n85 88 92 60 75",
                        "explanation": "第1與第5個位置交換，\n兩個清單同步變動。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\nAmy Bob Carl Dora Eric\n5\n80 90 70 85 60\n2\n2 4",
                        "expectedOutput": "Amy Dora Carl Bob Eric 80 85 70 90 60",
                        "score": 10
                    },
                    {
                        "input": "5\nTom May John Lily Ken\n5\n75 88 92 60 85\n2\n1 5",
                        "expectedOutput": "Ken May John Lily Tom 85 88 92 60 75",
                        "score": 10
                    },
                    {
                        "input": "5\nA B C D E\n5\n10 20 30 40 50\n2\n3 3",
                        "expectedOutput": "A B C D E 10 20 30 40 50",
                        "score": 10
                    },
                    {
                        "input": "5\nAnn Ben Ann Dan Eva\n5\n90 80 90 70 60\n2\n1 3",
                        "expectedOutput": "Ann Ben Ann Dan Eva 90 80 90 70 60",
                        "score": 10
                    },
                    {
                        "input": "5\nOne Two Three Four Five\n5\n5 4 3 2 1\n2\n4 5",
                        "expectedOutput": "One Two Three Five Four 5 4 3 1 2",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-08-SortApplied/seclect-007.sb3"
            },
            {
                "id": "seclect-008",
                "code": "M1-08-seclect-008",
                "title": "找出最高分與最低分學生的位置與姓名",
                "description": "在整理成績資料時，小華發現每位學生的姓名與分數\n是分別存放在兩個清單中，但相同位置代表同一位學生。\n現在老師希望小華一次找出：\n最高分所在的位置與姓名\n最低分所在的位置與姓名\n以便後續進行成績分析與排序。\n請你寫一個程式，從分數清單中找出最高分與最低分，\n並輸出它們所在的位置與對應的學生姓名。\n注意事項：\n1. 清單位置由 1 開始計算。\n2. 若最高分或最低分出現多次，請輸出最前面出現的那一筆資料",
                "examples": [
                    {
                        "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
                        "output": "2 Bob 5 Eric",
                        "explanation": "最高分為 90，在第 2 個位置（Bob）；\n最低分為 60，在第 5 個位置（Eric）。"
                    },
                    {
                        "input": "Tom May John Lily Ken\n88 92 92 75 60",
                        "output": "2 May 5 Ken",
                        "explanation": "最高分為 92，第 2、3 個位置都有，\n取最前面的 May；\n最低分為 60，在第 5 個位置 Ken。"
                    }
                ],
                "testCases": [
                    {
                        "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
                        "expectedOutput": "2 Bob 5 Eric",
                        "score": 10
                    },
                    {
                        "input": "Tom May John Lily Ken\n88 92 92 75 60",
                        "expectedOutput": "2 May 5 Ken",
                        "score": 10
                    },
                    {
                        "input": "A B C D E\n10 20 30 40 50",
                        "expectedOutput": "5 E 1 A",
                        "score": 10
                    },
                    {
                        "input": "Ann Ben Ann Dan Eva\n90 80 90 70 60",
                        "expectedOutput": "1 Ann 5 Eva",
                        "score": 10
                    },
                    {
                        "input": "One Two Three Four Five\n100 90 80 70 60",
                        "expectedOutput": "1 One 5 Five",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-08-SortApplied/seclect-008.sb3"
            },
            {
                "id": "seclect-009",
                "code": "M1-08-seclect-009",
                "title": "連動選擇排序第一回合",
                "description": "小華已經學會如何在成績清單中找出最高分與最低分的位置，\n現在老師要他進一步練習連動清單的排序操作。\n桌上有兩個清單：\n學生姓名清單\n對應的分數清單\n相同位置代表同一位學生。\n請你完成選擇排序的第一回合：\n從所有學生中找出分數最高的學生，\n並將這位學生與第 1 個位置的資料進行交換。\n交換時，姓名與分數必須一起交換，\n其餘位置的順序保持不變。\n注意事項：\n1. 只進行第一回合，不需完成整個排序。\n2. 若最高分出現多次，請選擇最前面出現的那一筆資料",
                "examples": [
                    {
                        "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
                        "output": "Bob Amy Carl Dora Eric\n90 80 70 85 60",
                        "explanation": "最高分為 90（Bob），\n與第 1 個位置的 Amy 交換。"
                    },
                    {
                        "input": "Tom May John Lily Ken\n95 88 92 75 60",
                        "output": "Tom May John Lily Ken\n95 88 92 75 60",
                        "explanation": "最高分已在第 1 個位置，\n不需交換。"
                    }
                ],
                "testCases": [
                    {
                        "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
                        "expectedOutput": "Bob Amy Carl Dora Eric 90 80 70 85 60",
                        "score": 10
                    },
                    {
                        "input": "Tom May John Lily Ken\n95 88 92 75 60",
                        "expectedOutput": "Tom May John Lily Ken 95 88 92 75 60",
                        "score": 10
                    },
                    {
                        "input": "A B C D E\n10 50 30 40 20",
                        "expectedOutput": "B A C D E 50 10 30 40 20",
                        "score": 10
                    },
                    {
                        "input": "Ann Ben Ann Dan Eva\n90 80 90 70 60",
                        "expectedOutput": "Ann Ben Ann Dan Eva 90 80 90 70 60",
                        "score": 10
                    },
                    {
                        "input": "One Two Three Four Five\n20 100 80 60 40",
                        "expectedOutput": "Two One Three Four Five 100 20 80 60 40",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-08-SortApplied/seclect-009.sb3"
            },
            {
                "id": "seclect-010",
                "code": "M1-08-seclect-010",
                "title": "完整雙清單排序",
                "description": "小華已經完成「連動選擇排序第一回合」的練習，\n現在老師希望他能夠完成完整的連動排序任務。\n桌上有兩個清單：\n學生姓名清單\n對應的分數清單\n相同位置代表同一位學生。\n請你使用選擇排序法，依照分數由高到低的順序，\n將所有學生進行排序。\n排序時必須注意：\n比較時只比較「分數」\n交換時「姓名與分數必須一起交換」\n不可使用任何排序相關的積木或指令。\n注意事項：\n1. 若分數相同，學生的相對順序不限。\n2. 必須完成整個排序流程",
                "examples": [
                    {
                        "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
                        "output": "Bob Dora Amy Carl Eric\n90 85 80 70 60",
                        "explanation": "依分數由高到低排序，\n姓名與分數同步調整。"
                    },
                    {
                        "input": "Tom May John Lily Ken\n95 88 92 75 60",
                        "output": "Tom John May Lily Ken\n95 92 88 75 60",
                        "explanation": "完成所有回合後，\n清單排序完成。"
                    }
                ],
                "testCases": [
                    {
                        "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
                        "expectedOutput": "Bob Dora Amy Carl Eric 90 85 80 70 60",
                        "score": 10
                    },
                    {
                        "input": "Tom May John Lily Ken\n95 88 92 75 60",
                        "expectedOutput": "Tom John May Lily Ken 95 92 88 75 60",
                        "score": 10
                    },
                    {
                        "input": "A B C D E\n10 50 30 40 20",
                        "expectedOutput": "B D C E A 50 40 30 20 10",
                        "score": 10
                    },
                    {
                        "input": "Ann Ben Ann Dan Eva\n90 80 90 70 60",
                        "expectedOutput": "Ann Ann Ben Dan Eva 90 90 80 70 60",
                        "score": 10
                    },
                    {
                        "input": "One Two Three Four Five\n20 100 80 60 40",
                        "expectedOutput": "Two Three Four Five One 100 80 60 40 20",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-08-SortApplied/seclect-010.sb3"
            },
            {
                "id": "seclect-011",
                "code": "M1-08-seclect-011",
                "title": "排序結果應用-成績排行榜",
                "description": "小華已經完成「完整雙清單排序」，並且將學生依照分數由高到低\n排序完成。\n現在老師希望小華能夠應用排序後的結果，\n製作一份簡單的成績排行榜。\n請你寫一個程式，完成以下任務：\n先依照分數由高到低排序學生資料\n再依排序後的結果，輸出每位學生的名次、姓名與分數\n相同位置的姓名與分數必須保持連動。\n注意事項：\n1. 名次從 1 開始編號。\n2. 若分數相同，名次仍依排序後的順序編號即可。\n3. 不可使用任何排序相關的積木或指令",
                "examples": [
                    {
                        "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
                        "output": "1 Bob 90\n2 Dora 85\n3 Amy 80\n4 Carl 70\n5 Eric 60",
                        "explanation": "先完成排序，\n再依序輸出排行榜。"
                    },
                    {
                        "input": "Tom May John Lily Ken\n95 88 92 75 60",
                        "output": "1 Tom 95\n2 John 92\n3 May 88\n4 Lily 75\n5 Ken 60",
                        "explanation": "名次依排序後的位置決定。"
                    }
                ],
                "testCases": [
                    {
                        "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
                        "expectedOutput": "1 Bob 90 2 Dora 85 3 Amy 80 4 Carl 70 5 Eric 60",
                        "score": 10
                    },
                    {
                        "input": "Tom May John Lily Ken\n95 88 92 75 60",
                        "expectedOutput": "1 Tom 95 2 John 92 3 May 88 4 Lily 75 5 Ken 60",
                        "score": 10
                    },
                    {
                        "input": "A B C D E\n10 50 30 40 20",
                        "expectedOutput": "1 B 50 2 D 40 3 C 30 4 E 20 5 A 10",
                        "score": 10
                    },
                    {
                        "input": "Ann Ben Ann Dan Eva\n90 80 90 70 60",
                        "expectedOutput": "1 Ann 90 2 Ann 90 3 Ben 80 4 Dan 70 5 Eva 60",
                        "score": 10
                    },
                    {
                        "input": "One Two Three Four Five\n20 100 80 60 40",
                        "expectedOutput": "1 Two 100 2 Three 80 3 Four 60 4 Five 40 5 One 20",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-08-SortApplied/seclect-011.sb3"
            },
            {
                "id": "seclect-012",
                "code": "M1-08-seclect-012",
                "title": "多清單整合實戰-學生資料分析",
                "description": "在校務系統中，學生的資料常常分散存放在多個清單中。\n小華目前有三個清單，分別記錄：\n學生姓名清單\n國文成績清單\n數學成績清單\n相同位置代表同一位學生。\n老師希望小華能設計一個程式，將這些資料整合分析，\n完成以下任務：\n計算每位學生的「總分」\n依照總分由高到低排序所有學生\n輸出排序後的學生姓名與總分\n所有清單在排序過程中必須保持位置連動。\n注意事項：\n1. 總分 = 國文成績 + 數學成績。\n2. 若總分相同，依原本出現的先後順序排列。\n3. 不可使用內建排序功能。\n4. 總分不會有同分情形",
                "examples": [
                    {
                        "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60\n70 85 80 75 65",
                        "output": "Bob 175\nDora 160\nAmy 150\nCarl 150\nEric 125",
                        "explanation": "先計算總分，\n再依總分排序。"
                    }
                ],
                "testCases": [
                    {
                        "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60\n70 85 75 75 65",
                        "expectedOutput": "Bob 175 Dora 160 Amy 150 Carl 145 Eric 125",
                        "score": 10
                    },
                    {
                        "input": "Tom May John Lily Ken\n90 80 85 70 60\n88 90 80 75 65",
                        "expectedOutput": "Tom 178 May 170 John 165 Lily 145 Ken 125",
                        "score": 10
                    },
                    {
                        "input": "A B C D E\n80 60 60 50 65\n90 80 70 30 45",
                        "expectedOutput": "A 170 B 140 C 130 E 110 D 80",
                        "score": 10
                    },
                    {
                        "input": "Ann Ben Cat Dee Eve\n95 90 85 70 60\n0 10 20 45 25",
                        "expectedOutput": "Dee 115 Cat 105 Ben 100 Ann 95 Eve 85",
                        "score": 10
                    },
                    {
                        "input": "One Two Three Four Five\n30 50 70 90 10\n20 40 60 80 100",
                        "expectedOutput": "Four 170 Three 130 Five 110 Two 90 One 50",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-08-SortApplied/seclect-012.sb3"
            }
        ]
    },
    {
        "code": "M1-09",
        "title": "數學規則：因數倍數質數",
        "tier": "t1",
        "unlockCode": "M1-09-MathBasics",
        "tasks": [
            {
                "id": "MATH01-001",
                "code": "M1-09-MATH01-001",
                "title": "倍數判斷",
                "description": "給定兩個正整數 A 與 B，請判斷 A 是否為 B 的倍數。",
                "examples": [
                    {
                        "input": "24 6",
                        "output": "YES",
                        "explanation": "24 可以被 6 整除，所以是 6 的倍數。"
                    }
                ],
                "testCases": [
                    {
                        "input": "24 6",
                        "expectedOutput": "YES",
                        "score": 0
                    },
                    {
                        "input": "25 6",
                        "expectedOutput": "NO",
                        "score": 0
                    },
                    {
                        "input": "100 10",
                        "expectedOutput": "YES",
                        "score": 0
                    },
                    {
                        "input": "7 9",
                        "expectedOutput": "NO",
                        "score": 0
                    }
                ],
                "difficulty": "L1",
                "difficultyLabel": "L1｜基礎",
                "sb3Path": "m0/M1-09-MathBasics/MATH01-001.sb3"
            },
            {
                "id": "MATH01-002",
                "code": "M1-09-MATH01-002",
                "title": "因數個數",
                "description": "給定一個正整數 N，請計算 N 有幾個正因數。",
                "examples": [
                    {
                        "input": "12",
                        "output": "6",
                        "explanation": "12 的正因數有 1、2、3、4、6、12，共 6 個。"
                    }
                ],
                "testCases": [
                    {
                        "input": "12",
                        "expectedOutput": "6",
                        "score": 0
                    },
                    {
                        "input": "1",
                        "expectedOutput": "1",
                        "score": 0
                    },
                    {
                        "input": "16",
                        "expectedOutput": "5",
                        "score": 0
                    },
                    {
                        "input": "17",
                        "expectedOutput": "2",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-09-MathBasics/MATH01-002.sb3"
            },
            {
                "id": "MATH01-006",
                "code": "M1-09-MATH01-006",
                "title": "位數和",
                "description": "給定一個非負整數 N，請計算它的每一位數字總和。",
                "examples": [
                    {
                        "input": "12345",
                        "output": "15",
                        "explanation": "1+2+3+4+5=15。"
                    }
                ],
                "testCases": [
                    {
                        "input": "12345",
                        "expectedOutput": "15",
                        "score": 0
                    },
                    {
                        "input": "0",
                        "expectedOutput": "0",
                        "score": 0
                    },
                    {
                        "input": "1008",
                        "expectedOutput": "9",
                        "score": 0
                    },
                    {
                        "input": "9999",
                        "expectedOutput": "36",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-09-MathBasics/MATH01-006.sb3"
            },
            {
                "id": "MATH01-008",
                "code": "M1-09-MATH01-008",
                "title": "可被3整除的數量",
                "description": "給定 N 個整數，請計算其中有幾個數字可以被 3 整除。",
                "examples": [
                    {
                        "input": "6\n3 5 9 10 12 14",
                        "output": "3",
                        "explanation": "3、9、12 可以被 3 整除，共 3 個。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n3 5 9 10 12 14",
                        "expectedOutput": "3",
                        "score": 0
                    },
                    {
                        "input": "4\n1 2 4 5",
                        "expectedOutput": "0",
                        "score": 0
                    },
                    {
                        "input": "5\n0 3 6 9 12",
                        "expectedOutput": "5",
                        "score": 0
                    },
                    {
                        "input": "7\n-3 -2 0 4 6 8 10",
                        "expectedOutput": "3",
                        "score": 0
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-09-MathBasics/MATH01-008.sb3"
            },
            {
                "id": "MATH01-003",
                "code": "M1-09-MATH01-003",
                "title": "質數判斷",
                "description": "給定一個正整數 N，請判斷 N 是否為質數。質數是大於 1，且只有 1 和自己兩個正因數的數。",
                "examples": [
                    {
                        "input": "17",
                        "output": "PRIME",
                        "explanation": "17 只有 1 和 17 兩個正因數，所以是質數。"
                    }
                ],
                "testCases": [
                    {
                        "input": "17",
                        "expectedOutput": "PRIME",
                        "score": 0
                    },
                    {
                        "input": "1",
                        "expectedOutput": "NOT",
                        "score": 0
                    },
                    {
                        "input": "12",
                        "expectedOutput": "NOT",
                        "score": 0
                    },
                    {
                        "input": "2",
                        "expectedOutput": "PRIME",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-09-MathBasics/MATH01-003.sb3"
            },
            {
                "id": "MATH01-004",
                "code": "M1-09-MATH01-004",
                "title": "最大公因數",
                "description": "給定兩個正整數 A 與 B，請找出它們的最大公因數。",
                "examples": [
                    {
                        "input": "12 18",
                        "output": "6",
                        "explanation": "12 與 18 的最大公因數是 6。"
                    }
                ],
                "testCases": [
                    {
                        "input": "12 18",
                        "expectedOutput": "6",
                        "score": 0
                    },
                    {
                        "input": "7 13",
                        "expectedOutput": "1",
                        "score": 0
                    },
                    {
                        "input": "24 36",
                        "expectedOutput": "12",
                        "score": 0
                    },
                    {
                        "input": "100 25",
                        "expectedOutput": "25",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-09-MathBasics/MATH01-004.sb3"
            },
            {
                "id": "MATH01-005",
                "code": "M1-09-MATH01-005",
                "title": "最小公倍數",
                "description": "給定兩個正整數 A 與 B，請找出它們的最小公倍數。",
                "examples": [
                    {
                        "input": "12 18",
                        "output": "36",
                        "explanation": "12 與 18 的最小公倍數是 36。"
                    }
                ],
                "testCases": [
                    {
                        "input": "12 18",
                        "expectedOutput": "36",
                        "score": 0
                    },
                    {
                        "input": "7 13",
                        "expectedOutput": "91",
                        "score": 0
                    },
                    {
                        "input": "4 6",
                        "expectedOutput": "12",
                        "score": 0
                    },
                    {
                        "input": "20 5",
                        "expectedOutput": "20",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-09-MathBasics/MATH01-005.sb3"
            },
            {
                "id": "MATH01-007",
                "code": "M1-09-MATH01-007",
                "title": "數字反轉",
                "description": "給定一個非負整數 N，請將它的數字順序反轉後輸出。反轉後前導 0 不需要保留。",
                "examples": [
                    {
                        "input": "12340",
                        "output": "4321",
                        "explanation": "12340 反轉為 04321，前導 0 不保留，所以輸出 4321。"
                    }
                ],
                "testCases": [
                    {
                        "input": "12340",
                        "expectedOutput": "4321",
                        "score": 0
                    },
                    {
                        "input": "0",
                        "expectedOutput": "0",
                        "score": 0
                    },
                    {
                        "input": "1000",
                        "expectedOutput": "1",
                        "score": 0
                    },
                    {
                        "input": "9876",
                        "expectedOutput": "6789",
                        "score": 0
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-09-MathBasics/MATH01-007.sb3"
            }
        ]
    },
    {
        "code": "M1-10",
        "title": "數學規則進階：GCD與應用",
        "tier": "t1",
        "unlockCode": "M1-10-MathGCD",
        "tasks": [
            {
                "id": "A-09-0",
                "code": "M1-10-A-09-0",
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
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-10-MathGCD/A-09-0.sb3"
            },
            {
                "id": "A-09-1",
                "code": "M1-10-A-09-1",
                "title": "找所有因數",
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
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-10-MathGCD/A-09-1.sb3"
            },
            {
                "id": "A-13-0",
                "code": "M1-10-A-13-0",
                "title": "二個數的最大公因數",
                "description": "小明上學時，不太會找最大公因數，請寫個程式幫他找一下\n輸入二個整數，請計算這二個數字的最大公因數\n輸入格式：輸入2行\n第一行輸入第1個整數N\n第二行輸入地2個整數M\n程式運算找出二數的最大公因數並輸出",
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
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-10-MathGCD/A-13-0.sb3"
            },
            {
                "id": "TYTN-03",
                "code": "M1-10-TYTN-03",
                "title": "質數和",
                "description": "請輸入兩個 100 以內的正整數（由小到大），找出這兩個數之間所有的質數，並計算這些質數的總和。\n質數定義：大於 1 的整數，除了 1 與本身外沒有其他因數。\n埃拉托賽尼篩法（示意 100 以內）：\n1. 刪除 1（1 不是質數也不是合數）\n2. 2 是質數，刪除大於 2 的所有 2 的倍數\n3. 3 是質數，刪除大於 3 的所有 3 的倍數\n4. 5 是質數，刪除大於 5 的所有 5 的倍數\n5. 7 是質數，刪除大於 7 的所有 7 的倍數\n最後留下的數即為質數",
                "examples": [
                    {
                        "input": "21\n30",
                        "output": "52",
                        "explanation": "21～30 的質數為 23、29\n總和為 52。"
                    },
                    {
                        "input": "13\n19",
                        "output": "49",
                        "explanation": "13～19 的質數為 13、17、19\n總和為 49。"
                    },
                    {
                        "input": "54\n58",
                        "output": "0",
                        "explanation": "54～58 間沒有質數\n因此輸出 0。"
                    }
                ],
                "testCases": [
                    {
                        "input": "21\n30",
                        "expectedOutput": "52",
                        "score": 10
                    },
                    {
                        "input": "13\n19",
                        "expectedOutput": "49",
                        "score": 10
                    },
                    {
                        "input": "54\n58",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "2\n10",
                        "expectedOutput": "17",
                        "score": 10
                    },
                    {
                        "input": "37\n41",
                        "expectedOutput": "78",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-10-MathGCD/TYTN-03.sb3"
            },
            {
                "id": "cyjunior-007",
                "code": "M1-10-cyjunior-007",
                "title": "校園密室逃脫-費氏階梯(6-2)",
                "description": "電子鐵門開啟後，映入眼簾的是一座懸浮的螺旋階梯，通往二樓的平台。階梯旁懸掛著一張發光的警示牌：「欲登智慧之巔，步法須合天道。或是步履穩健走一階，或是大步流星跨兩階，切勿貪快。」\n小明看著眼前這 N 階的樓梯，不禁開始思考：如果依照規則，每次只能選擇走 1 階或走 2 階，那麼要安全走到第 N 階平台，總共有多少種不同的步伐組合？這正是經典的費氏數列問題，若可能的走法數為F(N)種，我們可觀察到\nF(1)=1               ,1階樓梯有 1種走法\nF(2)=2               ,2階樓梯有 2種走法\nF(3)=F(2)+F(1)=1+2=3 ,3階樓梯有 3種走法\nF(4)=F(3)+F(2)=3+2=5 ,4階樓梯有 5種走法\n…\n請你幫小明計算出所有可能的走法總數",
                "examples": [
                    {
                        "input": "3",
                        "output": "3",
                        "explanation": "走法：(1,1,1), (1,2), (2,1) 共 3 種。"
                    },
                    {
                        "input": "4",
                        "output": "5",
                        "explanation": "走法：(1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (2,2) 共 5 種。"
                    }
                ],
                "testCases": [
                    {
                        "input": "1",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "5",
                        "expectedOutput": "8",
                        "score": 15
                    },
                    {
                        "input": "10",
                        "expectedOutput": "89",
                        "score": 20
                    },
                    {
                        "input": "15",
                        "expectedOutput": "987",
                        "score": 25
                    },
                    {
                        "input": "20",
                        "expectedOutput": "10946",
                        "score": 30
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-10-MathGCD/cyjunior-007.sb3"
            },
            {
                "id": "A-13-1",
                "code": "M1-10-A-13-1",
                "title": "數列的最大公因數",
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
                "difficulty": "L4",
                "difficultyLabel": "L4｜精熟",
                "sb3Path": "m0/M1-10-MathGCD/A-13-1.sb3"
            }
        ]
    },
    {
        "code": "M1-11",
        "title": "堆疊與佇列",
        "tier": "t1",
        "unlockCode": "M1-11-StackQueue",
        "tasks": [
            {
                "id": "M1-11-01",
                "code": "M1-11-M1-11-01",
                "title": "堆疊操作模擬",
                "description": "請你模擬堆疊（後進先出）的操作：指令代碼1代表PUSH（把數字加入堆疊頂端），指令代碼2代表POP（把堆疊頂端的數字移除；如果堆疊是空的，這個指令就跳過不執行）。全部指令執行完後，請輸出堆疊裡剩下的內容，由最底部到最頂部依序輸出，空白分隔；如果堆疊是空的，輸出「空」。\n\n第一行輸入M，代表共有M個指令\n\n第二行輸入M個指令代碼（1或2）\n\n第三行輸入M個數字，只有指令代碼是1（PUSH）時才會用到對應位置的數字，指令代碼是2時該位置數字請忽略。",
                "examples": [
                    {
                        "input": "5\n1 1 2 1 2\n10 20 0 30 0",
                        "output": "10",
                        "explanation": "push10[10]，push20[10,20]，pop移除20變[10]，push30[10,30]，pop移除30變[10]，最後剩[10]"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n1 1 2 1 2\n10 20 0 30 0",
                        "expectedOutput": "10",
                        "score": 25
                    },
                    {
                        "input": "3\n2 2 2\n0 0 0",
                        "expectedOutput": "空",
                        "score": 25
                    },
                    {
                        "input": "4\n1 1 1 1\n1 2 3 4",
                        "expectedOutput": "1 2 3 4",
                        "score": 25
                    },
                    {
                        "input": "2\n1 2\n5 0",
                        "expectedOutput": "空",
                        "score": 25
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-11-StackQueue/M1-11-01.sb3"
            },
            {
                "id": "M1-11-02",
                "code": "M1-11-M1-11-02",
                "title": "佇列操作模擬",
                "description": "請你模擬佇列（先進先出）的操作：指令代碼1代表ENQUEUE（把數字加入佇列最後面），指令代碼2代表DEQUEUE（把佇列最前面的數字移除；如果佇列是空的，這個指令就跳過不執行）。全部指令執行完後，請輸出佇列裡剩下的內容，由最前面到最後面依序輸出，空白分隔；如果佇列是空的，輸出「空」。\n\n第一行輸入M，代表共有M個指令\n\n第二行輸入M個指令代碼（1或2）\n\n第三行輸入M個數字，只有指令代碼是1（ENQUEUE）時才會用到對應位置的數字。",
                "examples": [
                    {
                        "input": "5\n1 1 2 1 2\n10 20 0 30 0",
                        "output": "30",
                        "explanation": "enqueue10[10]，enqueue20[10,20]，dequeue移除10變[20]，enqueue30[20,30]，dequeue移除20變[30]，最後剩[30]"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n1 1 2 1 2\n10 20 0 30 0",
                        "expectedOutput": "30",
                        "score": 25
                    },
                    {
                        "input": "3\n2 2 2\n0 0 0",
                        "expectedOutput": "空",
                        "score": 25
                    },
                    {
                        "input": "4\n1 1 1 1\n1 2 3 4",
                        "expectedOutput": "1 2 3 4",
                        "score": 25
                    },
                    {
                        "input": "2\n1 2\n5 0",
                        "expectedOutput": "空",
                        "score": 25
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-11-StackQueue/M1-11-02.sb3"
            },
            {
                "id": "M1-11-03",
                "code": "M1-11-M1-11-03",
                "title": "括號配對是否合法",
                "description": "請你判斷一串只包含小括號的字串，括號是否完全合法配對（每個左括號都有對應的右括號，且順序正確，右括號不會在對應的左括號之前出現）。\n\n第一行輸入一個只包含'('與')'的字串\n\n如果合法配對，輸出「合法」；否則輸出「不合法」。",
                "examples": [
                    {
                        "input": "(())",
                        "output": "合法",
                        "explanation": "每個左括號都有對應的右括號，順序也正確"
                    },
                    {
                        "input": "(()",
                        "output": "不合法",
                        "explanation": "有一個左括號沒有對應的右括號"
                    }
                ],
                "testCases": [
                    {
                        "input": "(())",
                        "expectedOutput": "合法",
                        "score": 25
                    },
                    {
                        "input": "(()",
                        "expectedOutput": "不合法",
                        "score": 25
                    },
                    {
                        "input": ")(",
                        "expectedOutput": "不合法",
                        "score": 25
                    },
                    {
                        "input": "()()()",
                        "expectedOutput": "合法",
                        "score": 25
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-11-StackQueue/M1-11-03.sb3"
            },
            {
                "id": "M1-11-04",
                "code": "M1-11-M1-11-04",
                "title": "瀏覽器上一頁模擬",
                "description": "請你模擬瀏覽器的『上一頁』功能：指令代碼1代表造訪一個新頁面（頁面代碼是一個數字，會被放進瀏覽紀錄堆疊）；指令代碼2代表按下上一頁（從堆疊移除目前頁面，回到上一頁；如果已經沒有上一頁可以回，這個指令就跳過不執行）。全部指令執行完後，輸出目前所在頁面的代碼；如果從頭到尾都沒有造訪任何頁面（堆疊是空的），輸出0。\n\n第一行輸入M，代表共有M個指令\n\n第二行輸入M個指令代碼（1代表造訪，2代表上一頁）\n\n第三行輸入M個數字，只有指令代碼是1時才會用到對應位置的數字。",
                "examples": [
                    {
                        "input": "4\n1 1 1 2\n100 200 300 0",
                        "output": "200",
                        "explanation": "依序造訪100,200,300，再按上一頁移除300，目前在200"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n1 1 1 2\n100 200 300 0",
                        "expectedOutput": "200",
                        "score": 25
                    },
                    {
                        "input": "3\n1 2 2\n5 0 0",
                        "expectedOutput": "0",
                        "score": 25
                    },
                    {
                        "input": "2\n2 2\n0 0",
                        "expectedOutput": "0",
                        "score": 25
                    },
                    {
                        "input": "5\n1 1 2 1 2\n1 2 0 3 0",
                        "expectedOutput": "1",
                        "score": 25
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-11-StackQueue/M1-11-04.sb3"
            },
            {
                "id": "M1-11-05",
                "code": "M1-11-M1-11-05",
                "title": "排隊叫號系統模擬",
                "description": "請你模擬排隊叫號系統：指令代碼1代表有一位顧客加入隊伍排隊（號碼是一個數字，加到隊伍最後面）；指令代碼2代表叫號服務隊伍最前面的顧客（把他從隊伍移除；如果隊伍是空的，這個指令就跳過不執行）。全部指令執行完後，輸出還在排隊的顧客號碼，依隊伍前到後順序輸出，空白分隔；如果隊伍是空的，輸出「空」。\n\n第一行輸入M，代表共有M個指令\n\n第二行輸入M個指令代碼（1代表加入排隊，2代表叫號）\n\n第三行輸入M個數字，只有指令代碼是1時才會用到對應位置的數字。",
                "examples": [
                    {
                        "input": "4\n1 1 1 2\n101 102 103 0",
                        "output": "102 103",
                        "explanation": "101,102,103依序排隊，叫號移除最前面的101，剩下102,103"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n1 1 1 2\n101 102 103 0",
                        "expectedOutput": "102 103",
                        "score": 25
                    },
                    {
                        "input": "3\n1 2 2\n5 0 0",
                        "expectedOutput": "空",
                        "score": 25
                    },
                    {
                        "input": "2\n2 2\n0 0",
                        "expectedOutput": "空",
                        "score": 25
                    },
                    {
                        "input": "5\n1 1 2 1 2\n1 2 0 3 0",
                        "expectedOutput": "3",
                        "score": 25
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-11-StackQueue/M1-11-05.sb3"
            },
            {
                "id": "M1-11-06",
                "code": "M1-11-M1-11-06",
                "title": "奇偶分流交錯重組",
                "description": "請你把一串數字依序分類：偶數依序放進一個堆疊（後進先出），奇數依序放進一個佇列（先進先出）。分類完成後，依序輪流嘗試『從佇列取一個』、『從堆疊取一個』（先佇列、後堆疊，算一輪），如果輪到的那一邊當下是空的就跳過該次、直接換下一邊；重複直到兩邊都空為止。依序輸出被取出的數字順序，空白分隔。\n\n第一行輸入N\n\n第二行輸入N個數字\n\n輸出重組後的完整順序，空白分隔。",
                "examples": [
                    {
                        "input": "6\n1 2 3 4 5 6",
                        "output": "1 6 3 4 5 2",
                        "explanation": "奇數1,3,5進佇列；偶數2,4,6進堆疊(取出順序6,4,2)；輪流取值：佇列1、堆疊6、佇列3、堆疊4、佇列5、堆疊2"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n1 2 3 4 5 6",
                        "expectedOutput": "1 6 3 4 5 2",
                        "score": 25
                    },
                    {
                        "input": "4\n2 4 6 8",
                        "expectedOutput": "8 6 4 2",
                        "score": 25
                    },
                    {
                        "input": "3\n1 3 5",
                        "expectedOutput": "1 3 5",
                        "score": 25
                    },
                    {
                        "input": "5\n10 1 20 3 5",
                        "expectedOutput": "1 20 3 10 5",
                        "score": 25
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-11-StackQueue/M1-11-06.sb3"
            }
        ]
    },
    {
        "code": "M1-12",
        "title": "除錯與輸出格式控制",
        "tier": "t1",
        "unlockCode": "M1-12-DebugFormat",
        "tasks": [
            {
                "id": "M1-12-01",
                "code": "M1-12-M1-12-01",
                "title": "兩位數補零輸出",
                "description": "請你把一個介於0到99之間的整數，輸出成固定兩位數的格式：如果數字小於10，前面要補一個0（例如5要輸出成05）；如果數字是兩位數，直接輸出即可（例如23輸出23）。\n\n第一行輸入一個介於0到99之間的整數N",
                "examples": [
                    {
                        "input": "5",
                        "output": "05",
                        "explanation": "5小於10，前面補一個0"
                    },
                    {
                        "input": "23",
                        "output": "23",
                        "explanation": "23已經是兩位數，直接輸出"
                    }
                ],
                "testCases": [
                    {
                        "input": "5",
                        "expectedOutput": "05",
                        "score": 25
                    },
                    {
                        "input": "23",
                        "expectedOutput": "23",
                        "score": 25
                    },
                    {
                        "input": "0",
                        "expectedOutput": "00",
                        "score": 25
                    },
                    {
                        "input": "99",
                        "expectedOutput": "99",
                        "score": 25
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-12-DebugFormat/M1-12-01.sb3"
            },
            {
                "id": "M1-12-02",
                "code": "M1-12-M1-12-02",
                "title": "金額千分位輸出",
                "description": "請你把一個金額數字，輸出成加上千分位逗號的格式（從個位數往左，每三位加一個逗號，例如1234567要輸出成1,234,567）。金額保證是不含小數的正整數。\n\n第一行輸入一個正整數金額amount",
                "examples": [
                    {
                        "input": "1234567",
                        "output": "1,234,567",
                        "explanation": "從個位數往左每三位加一個逗號"
                    }
                ],
                "testCases": [
                    {
                        "input": "1234567",
                        "expectedOutput": "1,234,567",
                        "score": 25
                    },
                    {
                        "input": "999",
                        "expectedOutput": "999",
                        "score": 25
                    },
                    {
                        "input": "1000",
                        "expectedOutput": "1,000",
                        "score": 25
                    },
                    {
                        "input": "100000000",
                        "expectedOutput": "100,000,000",
                        "score": 25
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-12-DebugFormat/M1-12-02.sb3"
            },
            {
                "id": "M1-12-06",
                "code": "M1-12-M1-12-06",
                "title": "單筆資料時的最大最小值",
                "description": "請你找出N筆分數中的最大值與最小值，並依序輸出。",
                "examples": [
                    {
                        "input": "1\n88",
                        "output": "88 88",
                        "explanation": "只有一筆資料88，最大值跟最小值都是88"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\n88",
                        "expectedOutput": "88 88",
                        "score": 25
                    },
                    {
                        "input": "5\n70 90 60 100 80",
                        "expectedOutput": "100 60",
                        "score": 25
                    },
                    {
                        "input": "1\n0",
                        "expectedOutput": "0 0",
                        "score": 25
                    },
                    {
                        "input": "2\n50 50",
                        "expectedOutput": "50 50",
                        "score": 25
                    }
                ],
                "difficulty": "L2",
                "difficultyLabel": "L2｜進階",
                "sb3Path": "m0/M1-12-DebugFormat/M1-12-06.sb3"
            },
            {
                "id": "M1-12-03",
                "code": "M1-12-M1-12-03",
                "title": "平均分數到小數點後兩位",
                "description": "請你計算N筆分數的平均值，輸出到小數點後兩位（四捨五入），即使結果剛好是整數，也要顯示到小數點後兩位（例如平均剛好80分要輸出80.00）。\n\n第一行輸入N\n\n第二行輸入N個分數\n\n輸出平均值，格式為小數點後兩位。",
                "examples": [
                    {
                        "input": "4\n80 90 70 100",
                        "output": "85.00",
                        "explanation": "平均=(80+90+70+100)/4=85，即使是整數也要顯示85.00"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n80 90 70 100",
                        "expectedOutput": "85.00",
                        "score": 25
                    },
                    {
                        "input": "3\n70 80 90",
                        "expectedOutput": "80.00",
                        "score": 25
                    },
                    {
                        "input": "2\n1 2",
                        "expectedOutput": "1.50",
                        "score": 25
                    },
                    {
                        "input": "3\n10 10 11",
                        "expectedOutput": "10.33",
                        "score": 25
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-12-DebugFormat/M1-12-03.sb3"
            },
            {
                "id": "M1-12-04",
                "code": "M1-12-M1-12-04",
                "title": "除以零的例外處理",
                "description": "請你計算兩個整數a除以b的結果，並輸出到小數點後兩位。但是b有可能是0，這時候不能真的做除法（會出錯），請改成輸出「無法計算」。\n\n第一行輸入a b（空白分隔）\n\n如果b不是0，輸出a除以b的結果（小數點後兩位）；如果b是0，輸出「無法計算」。",
                "examples": [
                    {
                        "input": "10 4",
                        "output": "2.50",
                        "explanation": "10除以4等於2.5，格式化成2.50"
                    },
                    {
                        "input": "5 0",
                        "output": "無法計算",
                        "explanation": "除數是0，不能計算，輸出無法計算"
                    }
                ],
                "testCases": [
                    {
                        "input": "10 4",
                        "expectedOutput": "2.50",
                        "score": 25
                    },
                    {
                        "input": "5 0",
                        "expectedOutput": "無法計算",
                        "score": 25
                    },
                    {
                        "input": "9 3",
                        "expectedOutput": "3.00",
                        "score": 25
                    },
                    {
                        "input": "0 5",
                        "expectedOutput": "0.00",
                        "score": 25
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-12-DebugFormat/M1-12-04.sb3"
            },
            {
                "id": "M1-12-05",
                "code": "M1-12-M1-12-05",
                "title": "負數的正確餘數計算",
                "description": "請你計算a除以b的餘數，餘數必須維持在0到b-1之間（即使a是負數，也要輸出這個範圍內正確的餘數，不能直接用一般的取餘數運算導致出現負的餘數）。（b保證是正整數）\n\n第一行輸入a b（空白分隔）",
                "examples": [
                    {
                        "input": "-3 5",
                        "output": "2",
                        "explanation": "-3=(-1)×5+2，所以正確餘數是2，不是-3"
                    }
                ],
                "testCases": [
                    {
                        "input": "-3 5",
                        "expectedOutput": "2",
                        "score": 25
                    },
                    {
                        "input": "7 5",
                        "expectedOutput": "2",
                        "score": 25
                    },
                    {
                        "input": "-1 4",
                        "expectedOutput": "3",
                        "score": 25
                    },
                    {
                        "input": "10 3",
                        "expectedOutput": "1",
                        "score": 25
                    }
                ],
                "difficulty": "L3",
                "difficultyLabel": "L3｜挑戰",
                "sb3Path": "m0/M1-12-DebugFormat/M1-12-05.sb3"
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
                "description": "在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。\n\n請你寫一個小程式，讓使用者輸入自己的名字，然後程式要輸出一行「Hello, 名字」。\n\nHello後面會接小寫逗號，還有一個空白輸入\n\n這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。",
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
                "sb3Path": "m0/JSB00/A-01-0.sb3"
            },
            {
                "id": "A-01-1",
                "code": "JSB00-A-01-1",
                "title": "一起學習吧",
                "description": "在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。\n\n請你寫一個小程式，讓使用者輸入好朋友一的名字、接著輸入好朋友二的名字，然後程式要輸出一行「朋友一名字,朋友二名字, 一起學習吧！」。\n\n朋友一名字後面、朋友二名字後面都會接小寫逗號，還有一個空白輸入\n\n這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。",
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
                "sb3Path": "m0/JSB00/A-01-1.sb3"
            },
            {
                "id": "A-02-0",
                "code": "JSB00-A-02-0",
                "title": "數字加總",
                "description": "當我們要處理數字時，常常需要加總。\n\n請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的總和。\n\n這樣的題目能幫助你熟悉數字資料處理。",
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
                "sb3Path": "m0/JSB00/A-02-0.sb3"
            },
            {
                "id": "A-02-1",
                "code": "JSB00-A-02-1",
                "title": "數字平均",
                "description": "當我們要處理數字時，常常需計算平均。\n\n請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的平均(四捨五入取整數)。\n\n這樣的題目能幫助你熟悉數字資料處理。",
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
    },
    {
        "code": "114TCPE01",
        "title": "114-嘉義市國小（競賽模式）",
        "unlockCode": "114TCPE01",
        "tasks": [
            {
                "id": "114TCPE01-1",
                "code": "114TCPE01-114TCPE01-1",
                "title": "營養午餐分析-1：豆製品週頻率",
                "description": "學校記錄了 10 天的午餐主菜。請分別判斷第 1~5 天、第 6~10 天，是否「至少出現過一次」豆製品（C）。各輸出 Y（有）或 N（沒有）。",
                "examples": [
                    {
                        "input": "B A B A B C D E F F",
                        "output": "N Y",
                        "explanation": "前5天(B A B A B)沒有C，後5天(C D E F F)有C，故輸出N Y。"
                    },
                    {
                        "input": "C A B C D A B C D E",
                        "output": "Y Y",
                        "explanation": "前5天(C A B C D)有C，後5天(A B C D E)有C，故輸出Y Y。"
                    }
                ],
                "testCases": [
                    {
                        "input": "B A B A B C D E F F",
                        "expectedOutput": "N Y",
                        "score": 20
                    },
                    {
                        "input": "C A B C D A B C D E",
                        "expectedOutput": "Y Y",
                        "score": 20
                    },
                    {
                        "input": "A A A D C E F B B C",
                        "expectedOutput": "Y Y",
                        "score": 20
                    },
                    {
                        "input": "A B D E F A B D E F",
                        "expectedOutput": "N N",
                        "score": 20
                    },
                    {
                        "input": "C C C C C C C C C C",
                        "expectedOutput": "Y Y",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE01-2",
                "code": "114TCPE01-114TCPE01-2",
                "title": "營養午餐分析-2：紅肉超量警示",
                "description": "同樣的 10 天午餐紀錄。請分別判斷第 1~5 天、第 6~10 天，紅肉（B）出現的次數是否「超過」白肉（A）加豆製品（C）出現次數的總和。各輸出 Y（超過）或 N（沒有超過）。",
                "examples": [
                    {
                        "input": "B A B A B C D E F F",
                        "output": "Y N",
                        "explanation": "前5天B有3次，A+C共2次，3>2故Y；後5天B有0次，A+C共1次，0>1不成立故N。"
                    },
                    {
                        "input": "C A B C D A B C D E",
                        "output": "N N",
                        "explanation": "前5天B有1次，A+C共3次，不超過故N；後5天同理N。"
                    }
                ],
                "testCases": [
                    {
                        "input": "B A B A B C D E F F",
                        "expectedOutput": "Y N",
                        "score": 20
                    },
                    {
                        "input": "C A B C D A B C D E",
                        "expectedOutput": "N N",
                        "score": 20
                    },
                    {
                        "input": "A A A D C E F B B C",
                        "expectedOutput": "N Y",
                        "score": 20
                    },
                    {
                        "input": "B B B B B A A A A A",
                        "expectedOutput": "Y N",
                        "score": 20
                    },
                    {
                        "input": "A C A C A C A C A C",
                        "expectedOutput": "N N",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE01-3",
                "code": "114TCPE01-114TCPE01-3",
                "title": "營養午餐分析-3：白肉接紅肉次數",
                "description": "同樣的 10 天午餐紀錄。請分別統計第 1~5 天、第 6~10 天中，「白肉（A）後面緊接著紅肉（B）」這種相鄰組合出現的次數（各區間內部比對，不跨區間）。",
                "examples": [
                    {
                        "input": "B A B A B C D E F F",
                        "output": "2 0",
                        "explanation": "前5天(B A B A B)中A後接B出現在第2、4天，共2次；後5天(C D E F F)沒有A，故0次。"
                    },
                    {
                        "input": "C A B C D A B C D E",
                        "output": "1 1",
                        "explanation": "前5天(C A B C D)中A後接B出現1次；後5天(A B C D E)中A後接B出現1次。"
                    }
                ],
                "testCases": [
                    {
                        "input": "B A B A B C D E F F",
                        "expectedOutput": "2 0",
                        "score": 20
                    },
                    {
                        "input": "C A B C D A B C D E",
                        "expectedOutput": "1 1",
                        "score": 20
                    },
                    {
                        "input": "A A A D C E F B B C",
                        "expectedOutput": "0 0",
                        "score": 20
                    },
                    {
                        "input": "A B A B A A B A B A",
                        "expectedOutput": "2 2",
                        "score": 20
                    },
                    {
                        "input": "D D D D D A B A B A",
                        "expectedOutput": "0 2",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE01-4",
                "code": "114TCPE01-114TCPE01-4",
                "title": "營養午餐分析-4：最常見主菜",
                "description": "同樣的 10 天午餐紀錄，保證有一個主菜出現次數最多且唯一。請輸出這個出現次數最多的主菜代號。",
                "examples": [
                    {
                        "input": "B A B A B C D E F F",
                        "output": "B",
                        "explanation": "B出現3次為最多，輸出B。"
                    },
                    {
                        "input": "C A B C D A B C D E",
                        "output": "C",
                        "explanation": "C出現3次為最多，輸出C。"
                    }
                ],
                "testCases": [
                    {
                        "input": "B A B A B C D E F F",
                        "expectedOutput": "B",
                        "score": 20
                    },
                    {
                        "input": "C A B C D A B C D E",
                        "expectedOutput": "C",
                        "score": 20
                    },
                    {
                        "input": "A A A D C E F B B C",
                        "expectedOutput": "A",
                        "score": 20
                    },
                    {
                        "input": "D D D D D A B C E F",
                        "expectedOutput": "D",
                        "score": 20
                    },
                    {
                        "input": "F E F E F E F D D F",
                        "expectedOutput": "F",
                        "score": 20
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE01-5",
                "code": "114TCPE01-114TCPE01-5",
                "title": "停車費計算",
                "description": "停車費依停車分鐘數計算：30分鐘以內收20元；31~60分鐘收40元；超過60分鐘，每滿30分鐘（不足30分鐘也算）加收30元。單日費用上限400元。若停車總時間超過24小時（1440分鐘），超過的部分視為新的一天重新計算（同樣享有優惠與400元上限），分別計算後相加。",
                "examples": [
                    {
                        "input": "100",
                        "output": "100",
                        "explanation": "100分鐘：超過60分，(100-60)/30=1.33無條件進位為2，40+30*2=100元。"
                    },
                    {
                        "input": "820",
                        "output": "400",
                        "explanation": "820分鐘：計算後超過400元上限，收400元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "100",
                        "expectedOutput": "100",
                        "score": 11
                    },
                    {
                        "input": "820",
                        "expectedOutput": "400",
                        "score": 11
                    },
                    {
                        "input": "1443",
                        "expectedOutput": "420",
                        "score": 11
                    },
                    {
                        "input": "30",
                        "expectedOutput": "20",
                        "score": 11
                    },
                    {
                        "input": "31",
                        "expectedOutput": "40",
                        "score": 11
                    },
                    {
                        "input": "60",
                        "expectedOutput": "40",
                        "score": 11
                    },
                    {
                        "input": "61",
                        "expectedOutput": "70",
                        "score": 11
                    },
                    {
                        "input": "2880",
                        "expectedOutput": "800",
                        "score": 11
                    },
                    {
                        "input": "2883",
                        "expectedOutput": "820",
                        "score": 11
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            },
            {
                "id": "114TCPE01-6",
                "code": "114TCPE01-114TCPE01-6",
                "title": "班級活動票選",
                "description": "班級活動地點投票，共有 5 個地點選項（編號1~5），N 位同學投票。請統計最高票數的選項：若最高票只有一個選項，輸出該編號；若有多個選項並列最高票，依編號由小到大全部輸出。",
                "examples": [
                    {
                        "input": "4\n1 5 1 5",
                        "output": "1 5",
                        "explanation": "選項1、5各得2票並列最高，輸出「1 5」。"
                    },
                    {
                        "input": "5\n1 2 1 1 4",
                        "output": "1",
                        "explanation": "選項1得3票最高，輸出「1」。"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n1 5 1 5",
                        "expectedOutput": "1 5",
                        "score": 20
                    },
                    {
                        "input": "5\n1 2 1 1 4",
                        "expectedOutput": "1",
                        "score": 20
                    },
                    {
                        "input": "8\n3 4 5 1 3 4 5 1",
                        "expectedOutput": "1 3 4 5",
                        "score": 20
                    },
                    {
                        "input": "3\n2 2 2",
                        "expectedOutput": "2",
                        "score": 20
                    },
                    {
                        "input": "6\n1 2 3 4 5 1",
                        "expectedOutput": "1",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE01-7",
                "code": "114TCPE01-114TCPE01-7",
                "title": "班級集星比賽",
                "description": "班級集星比賽記錄了 N 天每天獲得的星星數。請找出連續 K 天總和最大的區間，輸出其「起始天（第幾天，從1開始）」與「最大總和」；若有多組並列最大，取最早開始的一組。",
                "examples": [
                    {
                        "input": "6\n3\n10 2 3 4 1 5",
                        "output": "1 15",
                        "explanation": "第1~3天總和10+2+3=15為最大，起始天1。"
                    },
                    {
                        "input": "7\n3\n1 2 10 12 5 3 1",
                        "output": "3 27",
                        "explanation": "第3~5天總和10+12+5=27為最大，起始天3。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n3\n10 2 3 4 1 5",
                        "expectedOutput": "1 15",
                        "score": 20
                    },
                    {
                        "input": "7\n3\n1 2 10 12 5 3 1",
                        "expectedOutput": "3 27",
                        "score": 20
                    },
                    {
                        "input": "8\n4\n5 1 5 1 5 1 5 1",
                        "expectedOutput": "1 12",
                        "score": 20
                    },
                    {
                        "input": "5\n1\n3 9 2 8 1",
                        "expectedOutput": "2 9",
                        "score": 20
                    },
                    {
                        "input": "4\n2\n1 1 1 10",
                        "expectedOutput": "3 11",
                        "score": 20
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            },
            {
                "id": "114TCPE01-8",
                "code": "114TCPE01-114TCPE01-8",
                "title": "森林小火車的能量大冒險",
                "description": "森林小火車行駛於環狀的 5 個車站（1~5號，5號的下一站是1號），每個車站都有一個能量糖果增減值。小火車一開始持有 10 顆糖果，從1號站出發。每次骰子擲出步數後，小火車會先消耗等同步數的糖果，再前進到新站點，並依新站點的增減值調整糖果數量。糖果數量上限為30顆（超過就只保留30顆），若糖果數量小於等於0，則獲得國王救援直接補滿為5顆。請輸出經過所有骰子次數後的糖果數量。",
                "examples": [
                    {
                        "input": "0 15 -5 15 -10\n2\n1 2",
                        "output": "30",
                        "explanation": "第1步耗1顆剩9顆，移到2號站+15顆=24顆；第2步耗2顆剩22顆，移到4號站+15顆=37顆，超過上限剩30顆。"
                    },
                    {
                        "input": "0 15 -5 15 -10\n2\n4 3",
                        "output": "5",
                        "explanation": "第1步耗4顆剩6顆，移到5號站-10顆=-4顆，觸發國王救援設為5顆；第2步耗3顆剩2顆，移到3號站-5顆=-3顆，再次觸發國王救援設為5顆。"
                    }
                ],
                "testCases": [
                    {
                        "input": "0 15 -5 15 -10\n2\n1 2",
                        "expectedOutput": "30",
                        "score": 20
                    },
                    {
                        "input": "0 15 -5 15 -10\n2\n4 3",
                        "expectedOutput": "5",
                        "score": 20
                    },
                    {
                        "input": "5 5 5 5 5\n1\n1",
                        "expectedOutput": "14",
                        "score": 20
                    },
                    {
                        "input": "-20 -20 -20 -20 -20\n1\n1",
                        "expectedOutput": "5",
                        "score": 20
                    },
                    {
                        "input": "0 0 0 0 0\n5\n1 1 1 1 1",
                        "expectedOutput": "5",
                        "score": 20
                    }
                ],
                "difficulty": "L4",
                "sb3Path": null
            },
            {
                "id": "114TCPE01-9",
                "code": "114TCPE01-114TCPE01-9",
                "title": "玩具收納挑戰",
                "description": "要將 N 件（N≤6）玩具收進容量 20 公斤的標準收納箱。依序處理每件玩具：依開箱順序檢查每個「已經開啟」的箱子，只要有任何一箱裝入後不超過20公斤，就放進第一個符合的箱子；如果所有已開的箱子都裝不下，才開一個新箱子。請輸出總共用了幾個箱子。",
                "examples": [
                    {
                        "input": "4\n10 10 9 1",
                        "output": "2",
                        "explanation": "10+10=20裝滿箱1；9放不進箱1(20+9=29>20)故開箱2；1可放進箱1(20+1=21>20不行)或箱2(9+1=10可以)，共2箱。"
                    },
                    {
                        "input": "4\n11 11 11 11",
                        "output": "4",
                        "explanation": "每個11都無法與其他11同箱(11+11=22>20)，故4件各自一箱，共4箱。"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n10 10 9 1",
                        "expectedOutput": "2",
                        "score": 20
                    },
                    {
                        "input": "4\n11 11 11 11",
                        "expectedOutput": "4",
                        "score": 20
                    },
                    {
                        "input": "5\n19 19 19 1 1",
                        "expectedOutput": "3",
                        "score": 20
                    },
                    {
                        "input": "3\n20 20 20",
                        "expectedOutput": "3",
                        "score": 20
                    },
                    {
                        "input": "6\n5 5 5 5 5 5",
                        "expectedOutput": "2",
                        "score": 20
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE02",
        "title": "114-嘉義縣國小（競賽模式）",
        "unlockCode": "114TCPE02",
        "tasks": [
            {
                "id": "114TCPE02-1",
                "code": "114TCPE02-114TCPE02-1",
                "title": "個人綜合所得稅試算",
                "description": "假設某位民眾一整年的課稅所得為固定金額（以「萬元」為單位），系統將依照下列稅率級距計算應繳的所得稅金額：所得收入1～30萬元之間，稅率為5%；所得超過30萬，前30萬扣稅15000元，31～60萬元之間的稅率為10%；所得超過60萬，前60萬扣稅45000元，61～100萬元之間的稅率為15%；所得超過100萬，前100萬扣稅105000元，101萬元以上稅率為20%。本題為教學用簡化模型，不考慮扣除額、免稅額或其他費用。",
                "examples": [
                    {
                        "input": "20",
                        "output": "10000",
                        "explanation": "20萬元屬於1～30萬元區間，稅率5%，20×10000×0.05=10000元。"
                    },
                    {
                        "input": "55",
                        "output": "40000",
                        "explanation": "1～30萬元區間扣稅15000元，31～55萬元區間扣稅25000元，合計40000元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "10",
                        "expectedOutput": "5000",
                        "score": 10
                    },
                    {
                        "input": "30",
                        "expectedOutput": "15000",
                        "score": 10
                    },
                    {
                        "input": "40",
                        "expectedOutput": "25000",
                        "score": 10
                    },
                    {
                        "input": "80",
                        "expectedOutput": "75000",
                        "score": 10
                    },
                    {
                        "input": "120",
                        "expectedOutput": "145000",
                        "score": 10
                    },
                    {
                        "input": "60",
                        "expectedOutput": "45000",
                        "score": 10
                    },
                    {
                        "input": "100",
                        "expectedOutput": "105000",
                        "score": 10
                    },
                    {
                        "input": "31",
                        "expectedOutput": "16000",
                        "score": 10
                    },
                    {
                        "input": "61",
                        "expectedOutput": "46500",
                        "score": 10
                    },
                    {
                        "input": "200",
                        "expectedOutput": "305000",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE02-2",
                "code": "114TCPE02-114TCPE02-2",
                "title": "跳馬比賽成績計算",
                "description": "跳馬比賽為求公平性，決議去除評審中較極端的成績。比賽會依賽制等級不同，聘用五至十位不等的評審，各自給予參賽者0至10分的評價。參賽者的最終得分計算方式：讀入五至十位評審的分數（未排序），扣除最高分與最低分各一筆（若有多筆，只刪除其中一筆），將剩餘分數取平均，四捨五入至小數點第三位。",
                "examples": [
                    {
                        "input": "5\n9 8 10 6 7",
                        "output": "8",
                        "explanation": "刪除最高分10與最低分6，剩下9、8、7，平均為(9+8+7)/3=8。"
                    },
                    {
                        "input": "5\n5 5 8 9 10",
                        "output": "7.333",
                        "explanation": "刪除最高分10與最低分5，剩下5、8、9，平均為(5+8+9)/3=7.333，四捨五入至小數點第三位仍為7.333。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n9 8 10 6 7",
                        "expectedOutput": "8",
                        "score": 10
                    },
                    {
                        "input": "5\n10 10 10 10 10",
                        "expectedOutput": "10",
                        "score": 10
                    },
                    {
                        "input": "5\n5 5 7 7 10",
                        "expectedOutput": "6.333",
                        "score": 10
                    },
                    {
                        "input": "5\n9 9 9 10 10",
                        "expectedOutput": "9.333",
                        "score": 10
                    },
                    {
                        "input": "5\n7 7 8 8 6",
                        "expectedOutput": "7.333",
                        "score": 10
                    },
                    {
                        "input": "6\n1 2 3 4 5 6",
                        "expectedOutput": "3.5",
                        "score": 10
                    },
                    {
                        "input": "6\n0 0 1 1 2 2",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "7\n10 9 8 7 6 5 4",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "8\n10 10 0 0 5 5 5 5",
                        "expectedOutput": "5",
                        "score": 10
                    },
                    {
                        "input": "10\n10 9 9 9 9 9 9 9 9 0",
                        "expectedOutput": "9",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE02-3",
                "code": "114TCPE02-114TCPE02-3",
                "title": "動態密碼轉換",
                "description": "小明設計了一種英文字元密碼環編碼規則：密碼環為abcdefghijklmnopqrstuvwxyz。編碼時，字串中的每一個字元皆依密碼環往後移動N個位置；若位移後超出密碼環尾端，則從密碼環開頭繼續計算（環狀結構）。",
                "examples": [
                    {
                        "input": "2\nbanana",
                        "output": "dcpcpc",
                        "explanation": "b→d，a→c，n→p，每個字元皆往後移動2個位置。"
                    },
                    {
                        "input": "0\nabc",
                        "output": "abc",
                        "explanation": "位移0，字串不變。"
                    }
                ],
                "testCases": [
                    {
                        "input": "0\nabc",
                        "expectedOutput": "abc",
                        "score": 10
                    },
                    {
                        "input": "1\nxyz",
                        "expectedOutput": "yza",
                        "score": 10
                    },
                    {
                        "input": "26\nhello",
                        "expectedOutput": "hello",
                        "score": 10
                    },
                    {
                        "input": "28\naz",
                        "expectedOutput": "cb",
                        "score": 10
                    },
                    {
                        "input": "100\na",
                        "expectedOutput": "w",
                        "score": 10
                    },
                    {
                        "input": "5\npokemon",
                        "expectedOutput": "utpjrts",
                        "score": 10
                    },
                    {
                        "input": "25\na",
                        "expectedOutput": "z",
                        "score": 10
                    },
                    {
                        "input": "13\nnop",
                        "expectedOutput": "abc",
                        "score": 10
                    },
                    {
                        "input": "52\ncat",
                        "expectedOutput": "cat",
                        "score": 10
                    },
                    {
                        "input": "10\napple",
                        "expectedOutput": "kzzvo",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            },
            {
                "id": "114TCPE02-4",
                "code": "114TCPE02-114TCPE02-4",
                "title": "籃球機得分計算",
                "description": "雙打籃球機在每場遊戲中提供1P、2P兩位玩家5～10次不等的投籃機會。每投進1球得1分，未投進得0分。若某次投籃進球，且前一次投籃也進球，則該次投籃得3分；若進球但前一次未進球（或為第一球），則得1分。請模擬籃球機的得分計算，輸出兩位玩家單場遊戲的總得分，以及獲勝的玩家名稱（若同分則顯示「不分勝負」）。",
                "examples": [
                    {
                        "input": "5\n1 0 1 1 0\n0 1 1 1 1",
                        "output": "5 10 2P",
                        "explanation": "1P得分1+0+1+3+0=5；2P得分0+1+3+3+3=10；2P勝出。"
                    },
                    {
                        "input": "7\n1 0 1 1 0 1 0\n0 1 1 0 1 0 1",
                        "output": "6 6 不分勝負",
                        "explanation": "兩人同分6分，不分勝負。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n0 1 0 1 0\n0 0 0 0 0",
                        "expectedOutput": "2 0 1P",
                        "score": 10
                    },
                    {
                        "input": "6\n1 1 1 0 1 0\n0 1 1 1 1 0",
                        "expectedOutput": "8 10 2P",
                        "score": 10
                    },
                    {
                        "input": "9\n0 1 0 1 0 1 0 1 0\n0 0 0 0 0 0 0 0 0",
                        "expectedOutput": "4 0 1P",
                        "score": 10
                    },
                    {
                        "input": "8\n1 1 0 1 1 0 1 1\n1 1 1 0 1 1 1 0",
                        "expectedOutput": "12 14 2P",
                        "score": 10
                    },
                    {
                        "input": "7\n1 1 0 1 1 0 1\n1 1 0 1 1 0 1",
                        "expectedOutput": "9 9 不分勝負",
                        "score": 10
                    },
                    {
                        "input": "5\n1 1 1 1 1\n1 0 1 0 1",
                        "expectedOutput": "13 3 1P",
                        "score": 10
                    },
                    {
                        "input": "10\n0 0 0 0 0 0 0 0 0 0\n1 1 1 1 1 1 1 1 1 1",
                        "expectedOutput": "0 28 2P",
                        "score": 10
                    },
                    {
                        "input": "6\n1 0 0 0 0 1\n1 0 0 0 0 1",
                        "expectedOutput": "2 2 不分勝負",
                        "score": 10
                    },
                    {
                        "input": "7\n0 1 1 0 1 1 0\n1 1 0 0 0 1 1",
                        "expectedOutput": "8 8 不分勝負",
                        "score": 10
                    },
                    {
                        "input": "8\n1 0 1 0 1 0 1 0\n0 1 0 1 0 1 0 1",
                        "expectedOutput": "4 4 不分勝負",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE02-5",
                "code": "114TCPE02-114TCPE02-5",
                "title": "無人搬運車運送計算",
                "description": "智慧工廠中使用一輛無人搬運車（AGV），每一趟最大可承載重量為200公斤。零件依序排隊裝載，無人搬運車依序將零件放上車並累加重量。若某一件零件放上車後累計重量超過200公斤，則該零件不放入本趟車次，無人搬運車立刻出發，該零件改由下一趟車次運送。請計算無人搬運車最少需要出發幾趟。",
                "examples": [
                    {
                        "input": "6\n50 60 40 70 90 30",
                        "output": "2",
                        "explanation": "第一趟50+60+40+70=220>200不行，改成50+60+40=150，第70件開始第二趟70+90+30=190。共2趟。"
                    },
                    {
                        "input": "5\n80 90 60 30 40",
                        "output": "2",
                        "explanation": "第一趟80+90=170，加60會超過200，出發；第二趟60+30+40=130，出發。共2趟。"
                    }
                ],
                "testCases": [
                    {
                        "input": "9\n50 60 40 70 90 30 80 90 60",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "5\n80 90 60 30 40",
                        "expectedOutput": "2",
                        "score": 10
                    },
                    {
                        "input": "5\n100 50 60 70 80",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "3\n100 100 100",
                        "expectedOutput": "2",
                        "score": 10
                    },
                    {
                        "input": "1\n100",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "5\n200 200 200 200 200",
                        "expectedOutput": "5",
                        "score": 10
                    },
                    {
                        "input": "8\n10 20 30 40 50 60 70 80",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "6\n199 1 199 1 199 1",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "4\n150 150 150 150",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "10\n50 50 50 50 50 50 50 50 50 50",
                        "expectedOutput": "3",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE02-6",
                "code": "114TCPE02-114TCPE02-6",
                "title": "寶可夢訓練師-計算平均等級",
                "description": "請設計一個程式，輸入多隻寶可夢的等級，計算並輸出牠們的平均等級（無條件捨去至整數）。",
                "examples": [
                    {
                        "input": "4\n10 20 30 40",
                        "output": "25",
                        "explanation": "平均值=(10+20+30+40)÷4=25。"
                    },
                    {
                        "input": "3\n7 8 10",
                        "output": "8",
                        "explanation": "平均值=25÷3=8.33，無條件捨去後為8。"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\n50",
                        "expectedOutput": "50",
                        "score": 10
                    },
                    {
                        "input": "3\n10 20 30",
                        "expectedOutput": "20",
                        "score": 10
                    },
                    {
                        "input": "4\n7 8 9 10",
                        "expectedOutput": "8",
                        "score": 10
                    },
                    {
                        "input": "5\n1 100 100 100 100",
                        "expectedOutput": "80",
                        "score": 10
                    },
                    {
                        "input": "20\n10 10 10 10 10 10 10 10 10 10 20 20 20 20 20 20 20 20 20 20",
                        "expectedOutput": "15",
                        "score": 10
                    },
                    {
                        "input": "2\n1 2",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "3\n33 33 33",
                        "expectedOutput": "33",
                        "score": 10
                    },
                    {
                        "input": "5\n10 11 12 13 14",
                        "expectedOutput": "12",
                        "score": 10
                    },
                    {
                        "input": "6\n99 99 99 99 99 99",
                        "expectedOutput": "99",
                        "score": 10
                    },
                    {
                        "input": "4\n1 1 1 1",
                        "expectedOutput": "1",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE02-7",
                "code": "114TCPE02-114TCPE02-7",
                "title": "寶可夢訓練師-找最高等級",
                "description": "請設計一個程式，輸入多隻寶可夢的名稱與等級，找出等級最高的寶可夢名稱（本題保證不會有等級相同的情況，寶可夢名稱不包含空白字元）。",
                "examples": [
                    {
                        "input": "3\n皮卡丘 25 小火龍 12 妙蛙種子 18",
                        "output": "皮卡丘",
                        "explanation": "共有3隻寶可夢，等級最高的是皮卡丘（25）。"
                    },
                    {
                        "input": "4\n傑尼龜 10 伊布 15 卡比獸 35 胖丁 2",
                        "output": "卡比獸",
                        "explanation": "共有4隻寶可夢，卡比獸等級最高（35）。"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\n皮卡丘 10",
                        "expectedOutput": "皮卡丘",
                        "score": 10
                    },
                    {
                        "input": "3\n小火龍 12 妙蛙種子 18 傑尼龜 15",
                        "expectedOutput": "妙蛙種子",
                        "score": 10
                    },
                    {
                        "input": "4\nA 5 B 20 C 15 D 8",
                        "expectedOutput": "B",
                        "score": 10
                    },
                    {
                        "input": "5\n皮卡丘 22 伊布 30 卡比獸 28 超夢 100 胖丁 18",
                        "expectedOutput": "超夢",
                        "score": 10
                    },
                    {
                        "input": "6\nP1 3 P2 6 P3 9 P4 12 P5 15 P6 18",
                        "expectedOutput": "P6",
                        "score": 10
                    },
                    {
                        "input": "2\nX 50 Y 49",
                        "expectedOutput": "X",
                        "score": 10
                    },
                    {
                        "input": "3\nBulbasaur 5 Charmander 10 Squirtle 7",
                        "expectedOutput": "Charmander",
                        "score": 10
                    },
                    {
                        "input": "4\nA 1 B 2 C 3 D 4",
                        "expectedOutput": "D",
                        "score": 10
                    },
                    {
                        "input": "5\nZ 99 Y 98 X 97 W 96 V 95",
                        "expectedOutput": "Z",
                        "score": 10
                    },
                    {
                        "input": "2\nFirst 10 Second 20",
                        "expectedOutput": "Second",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE02-8",
                "code": "114TCPE02-114TCPE02-8",
                "title": "寶可夢訓練師-列出平均等級以上",
                "description": "請綜合前面的概念，輸入寶可夢名稱與等級，計算平均等級後，依照輸入出現順序，輸出所有等級高於平均值的寶可夢名稱。",
                "examples": [
                    {
                        "input": "3\n皮卡丘 25 小火龍 12 妙蛙種子 18",
                        "output": "皮卡丘",
                        "explanation": "平均等級為18.33，只有皮卡丘(25)高於平均。"
                    },
                    {
                        "input": "4\n傑尼龜 10 伊布 15 卡比獸 20 胖丁 20",
                        "output": "卡比獸 胖丁",
                        "explanation": "平均等級為16.25，卡比獸與胖丁高於平均。"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\n皮卡丘 10",
                        "expectedOutput": "",
                        "score": 10
                    },
                    {
                        "input": "5\n伊布 15 胖丁 15 乘龍 10 卡比獸 20 妙蛙種子 15",
                        "expectedOutput": "卡比獸",
                        "score": 10
                    },
                    {
                        "input": "4\n妙蛙種子 30 皮卡丘 30 小火龍 30 傑尼龜 30",
                        "expectedOutput": "",
                        "score": 10
                    },
                    {
                        "input": "6\n小火龍 100 皮卡丘 0 伊布 50 卡比獸 50 胖丁 50 超夢 100",
                        "expectedOutput": "小火龍 超夢",
                        "score": 10
                    },
                    {
                        "input": "8\n皮卡丘 25 皮卡丘 30 妙蛙種子 18 小火龍 12 傑尼龜 40 伊布 35 卡比獸 28 胖丁 28",
                        "expectedOutput": "皮卡丘 傑尼龜 伊布 卡比獸 胖丁",
                        "score": 10
                    },
                    {
                        "input": "3\nA 10 B 20 C 30",
                        "expectedOutput": "C",
                        "score": 10
                    },
                    {
                        "input": "2\nX 1 Y 100",
                        "expectedOutput": "Y",
                        "score": 10
                    },
                    {
                        "input": "4\nP1 10 P2 11 P3 10 P4 10",
                        "expectedOutput": "P2",
                        "score": 10
                    },
                    {
                        "input": "5\nA 100 B 10 C 10 D 10 E 10",
                        "expectedOutput": "A",
                        "score": 10
                    },
                    {
                        "input": "4\nM1 50 M2 51 M3 50 M4 49",
                        "expectedOutput": "M2",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            },
            {
                "id": "114TCPE02-9",
                "code": "114TCPE02-114TCPE02-9",
                "title": "寶可夢訓練師-統計屬性數量",
                "description": "請設計一個程式，輸入多隻寶可夢的屬性，輸出各屬性寶可夢的數量統計結果。程式需依照屬性第一次出現的順序，輸出每個屬性與該屬性寶可夢數量，格式為「屬性數量」（屬性與數量間不留空白）；不同組別之間以一個空白隔開；若屬性重複，只輸出一次。",
                "examples": [
                    {
                        "input": "5\n火 水 火 電 水",
                        "output": "火2 水2 電1",
                        "explanation": "依首次出現順序統計後輸出：火2 水2 電1。"
                    },
                    {
                        "input": "4\n草 草 毒 草",
                        "output": "草3 毒1",
                        "explanation": "輸出結果為：草3 毒1。"
                    }
                ],
                "testCases": [
                    {
                        "input": "9\n火 水 火 電 水 草 草 毒 草",
                        "expectedOutput": "火2 水2 電1 草3 毒1",
                        "score": 10
                    },
                    {
                        "input": "8\n水 火 電 水 草 水 電 草",
                        "expectedOutput": "水3 火1 電2 草2",
                        "score": 10
                    },
                    {
                        "input": "1\n草",
                        "expectedOutput": "草1",
                        "score": 10
                    },
                    {
                        "input": "5\n水 水 水 水 水",
                        "expectedOutput": "水5",
                        "score": 10
                    },
                    {
                        "input": "6\n電 火 草 電 火 水",
                        "expectedOutput": "電2 火2 草1 水1",
                        "score": 10
                    },
                    {
                        "input": "4\n冰 龍 冰 龍",
                        "expectedOutput": "冰2 龍2",
                        "score": 10
                    },
                    {
                        "input": "5\n光 暗 光 暗 無",
                        "expectedOutput": "光2 暗2 無1",
                        "score": 10
                    },
                    {
                        "input": "3\n超能 格鬥 超能",
                        "expectedOutput": "超能2 格鬥1",
                        "score": 10
                    },
                    {
                        "input": "7\nA B C A B C D",
                        "expectedOutput": "A2 B2 C2 D1",
                        "score": 10
                    },
                    {
                        "input": "10\nX Y Z X Y Z X Y Z W",
                        "expectedOutput": "X3 Y3 Z3 W1",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE03",
        "title": "114-彰化縣國小（競賽模式）",
        "unlockCode": "114TCPE03",
        "tasks": [
            {
                "id": "114TCPE03-1",
                "code": "114TCPE03-114TCPE03-1",
                "title": "綠蔭道路",
                "description": "政府正在推動某鄉村的「智慧綠蔭道路計畫」，希望在一條筆直道路的一側種植行道樹，讓行人走在路上能有遮蔭。從道路的起點先種第一棵樹，接著每隔固定間距種一棵樹，如果最後剩下的距離不足一個間距，仍然要再補種一棵樹。\n請寫一個程式，根據道路長度與種樹間距，計算需要準備的樹苗數量。",
                "examples": [
                    {
                        "input": "10 5",
                        "output": "3",
                        "explanation": "道路長度是10公尺，種樹間距為5公尺。 起點先種1棵，經過5公尺種1棵，再經過5公尺再種1棵，故為3顆。"
                    },
                    {
                        "input": "11 5",
                        "output": "4",
                        "explanation": "道路長度是11公尺時，種樹間距為5公尺。 起點先種1棵，經過5公尺種1棵，再經過5公尺再種1棵，剩下距離為1公尺，仍需要補種1顆樹，故為4顆。"
                    }
                ],
                "testCases": [
                    {
                        "input": "24 8",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "101 10",
                        "expectedOutput": "12",
                        "score": 10
                    },
                    {
                        "input": "149 30",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "10 5",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "11 5",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "100 100",
                        "expectedOutput": "2",
                        "score": 10
                    },
                    {
                        "input": "99 100",
                        "expectedOutput": "2",
                        "score": 10
                    },
                    {
                        "input": "200 50",
                        "expectedOutput": "5",
                        "score": 10
                    },
                    {
                        "input": "201 50",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "1000 1",
                        "expectedOutput": "1001",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE03-2",
                "code": "114TCPE03-114TCPE03-2",
                "title": "最萌身高差",
                "description": "白雪公主和七矮人一起生活在森林裡。七矮人的身高都不一樣，白雪公主想知道七矮人之中，最高的人和最矮的人身高相差多少。請你寫一個程式，根據七矮人的身高資料，計算出「最高者與最矮者的身高差」。小矮人的身高介於30公分到140公分之間。",
                "examples": [
                    {
                        "input": "130 110 115 120 125 118 112",
                        "output": "20",
                        "explanation": "最高的是130，最矮的是110，輸出身高差是20。"
                    },
                    {
                        "input": "100 101 102 103 104 105 106",
                        "output": "6",
                        "explanation": "最高的是106，最矮的是100，輸出身高差是6。"
                    }
                ],
                "testCases": [
                    {
                        "input": "105 98 110 102 99 108 101",
                        "expectedOutput": "12",
                        "score": 10
                    },
                    {
                        "input": "140 135 138 133 130 137 61",
                        "expectedOutput": "79",
                        "score": 10
                    },
                    {
                        "input": "60 76 74 72 70 68 78",
                        "expectedOutput": "18",
                        "score": 10
                    },
                    {
                        "input": "130 110 115 120 125 118 112",
                        "expectedOutput": "20",
                        "score": 10
                    },
                    {
                        "input": "100 101 102 103 104 105 106",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "30 40 50 60 70 80 90",
                        "expectedOutput": "60",
                        "score": 10
                    },
                    {
                        "input": "140 130 120 110 100 90 80",
                        "expectedOutput": "60",
                        "score": 10
                    },
                    {
                        "input": "30 140 50 60 70 80 90",
                        "expectedOutput": "110",
                        "score": 10
                    },
                    {
                        "input": "100 100 100 100 100 100 100",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "55 55 55 55 55 30 140",
                        "expectedOutput": "110",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE03-3",
                "code": "114TCPE03-114TCPE03-3",
                "title": "秒數轉換",
                "description": "時間長度除了可以單用「秒」來表示，也可以將其拆解為「時、分、秒」來表達。請你根據輸入的總秒數，將它轉換成「時、分、秒」三個數字。舉例來說 3661秒就等於1小時又1分又1秒。因為1小時+1分+1秒 = 3600秒+60秒+1秒 = 3661秒。",
                "examples": [
                    {
                        "input": "3661",
                        "output": "1 1 1",
                        "explanation": "3661秒就是1小時1分又1秒"
                    },
                    {
                        "input": "59",
                        "output": "0 0 59",
                        "explanation": "59秒就是0小時0分又59秒"
                    }
                ],
                "testCases": [
                    {
                        "input": "7325",
                        "expectedOutput": "2 2 5",
                        "score": 10
                    },
                    {
                        "input": "10000",
                        "expectedOutput": "2 46 40",
                        "score": 10
                    },
                    {
                        "input": "86399",
                        "expectedOutput": "23 59 59",
                        "score": 10
                    },
                    {
                        "input": "3661",
                        "expectedOutput": "1 1 1",
                        "score": 10
                    },
                    {
                        "input": "59",
                        "expectedOutput": "0 0 59",
                        "score": 10
                    },
                    {
                        "input": "3600",
                        "expectedOutput": "1 0 0",
                        "score": 10
                    },
                    {
                        "input": "60",
                        "expectedOutput": "0 1 0",
                        "score": 10
                    },
                    {
                        "input": "0",
                        "expectedOutput": "0 0 0",
                        "score": 10
                    },
                    {
                        "input": "3599",
                        "expectedOutput": "0 59 59",
                        "score": 10
                    },
                    {
                        "input": "7260",
                        "expectedOutput": "2 1 0",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE03-4",
                "code": "114TCPE03-114TCPE03-4",
                "title": "協力車分配",
                "description": "班上同學到河濱公園騎協力車，協力車分成兩種：兩人共騎的協力車以及三人共騎的協力車。分配後全班同學剛好都有車可騎，而且每一輛協力車都坐滿。\n請你根據全班人數以及協力車總數的資料，計算出兩人共騎的協力車有幾輛。",
                "examples": [
                    {
                        "input": "5 2",
                        "output": "1",
                        "explanation": "全班有5個人，分配到2台協力車恰好可以坐滿。 那麼兩人共騎的協力車與三人共騎的協力車會各1台，輸出1也就是兩人協力車的數量。"
                    },
                    {
                        "input": "8 4",
                        "output": "4",
                        "explanation": "全班有8個人，若分配到4台協力車恰好可以坐滿。 那麼就會需要兩人共騎的協力車4台，不需要三人共騎的協力車，輸出4代表兩人協力車的數量。"
                    }
                ],
                "testCases": [
                    {
                        "input": "51 20",
                        "expectedOutput": "9",
                        "score": 10
                    },
                    {
                        "input": "49 20",
                        "expectedOutput": "11",
                        "score": 10
                    },
                    {
                        "input": "62 25",
                        "expectedOutput": "13",
                        "score": 10
                    },
                    {
                        "input": "5 2",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "8 4",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "6 2",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "30 10",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "20 10",
                        "expectedOutput": "10",
                        "score": 10
                    },
                    {
                        "input": "25 10",
                        "expectedOutput": "5",
                        "score": 10
                    },
                    {
                        "input": "100 40",
                        "expectedOutput": "20",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE03-5",
                "code": "114TCPE03-114TCPE03-5",
                "title": "數橘子",
                "description": "小龍的媽媽今天到菜市場買了一堆橘子，有10顆以上，但忘記確切數量。回家後，媽媽嘗試用不同大小的袋子來分裝橘子：\n大袋子每袋可裝7顆、中袋子每袋可裝5顆、小袋子每袋可裝3顆。\n媽媽分別只使用其中一種袋子來裝橘子時，有可能恰好裝滿或剩下一些裝不滿一袋的橘子。\n請你根據這三種情況下剩餘的橘子數量，推算出橘子可能的最少總顆數。",
                "examples": [
                    {
                        "input": "1 0 0",
                        "output": "15",
                        "explanation": "橘子10顆以上... 只用大袋子分裝，每7顆裝1袋，最後剩下1顆。 只用中袋子分裝，每5顆裝1袋，最後不剩剛好裝滿。 只用小袋子分裝，每3顆裝1袋，最後不剩剛好裝滿。 符合上述情況橘子可能的最少總顆數是15。"
                    },
                    {
                        "input": "4 3 0",
                        "output": "18",
                        "explanation": "橘子10顆以上... 只用大袋子分裝，每7顆裝1袋，最後剩下4顆。 只用中袋子分裝，每5顆裝1袋，最後剩下3顆。 只用小袋子分裝，每3顆裝1袋，最後不剩剛好裝滿。 符合上述情況橘子可能的最少總顆數是18。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3 2 1",
                        "expectedOutput": "52",
                        "score": 10
                    },
                    {
                        "input": "2 1 2",
                        "expectedOutput": "86",
                        "score": 10
                    },
                    {
                        "input": "2 4 0",
                        "expectedOutput": "114",
                        "score": 10
                    },
                    {
                        "input": "1 3 2",
                        "expectedOutput": "113",
                        "score": 10
                    },
                    {
                        "input": "1 0 0",
                        "expectedOutput": "15",
                        "score": 10
                    },
                    {
                        "input": "4 3 0",
                        "expectedOutput": "18",
                        "score": 10
                    },
                    {
                        "input": "0 0 1",
                        "expectedOutput": "70",
                        "score": 10
                    },
                    {
                        "input": "1 1 1",
                        "expectedOutput": "106",
                        "score": 10
                    },
                    {
                        "input": "6 4 2",
                        "expectedOutput": "104",
                        "score": 10
                    },
                    {
                        "input": "0 0 0",
                        "expectedOutput": "105",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            },
            {
                "id": "114TCPE03-6",
                "code": "114TCPE03-114TCPE03-6",
                "title": "禮物多數決",
                "description": "教師節快到了，班上同學想從禮品1號到禮品5號中選擇一樣送給老師。決定的方式是從同學的投票中，找出得票數最多的禮品。請根據投票結果，找出要送給老師的禮品編號，以及該禮品所得到的票數。",
                "examples": [
                    {
                        "input": "3\n1 1 1",
                        "output": "1 3",
                        "explanation": "第1個數字3代表有3位同學投票，接下來輸入的3個數字表示他們都投了1號禮品。 1號禮品票數最高，輸出1，然後輸出其票數3。"
                    },
                    {
                        "input": "7\n5 5 5 2 2 2 5",
                        "output": "5 4",
                        "explanation": "第1個數字7代表有7位同學投票，接下來輸入的7個數字表示有4位投了5號禮品，有3位投了2號禮品。 5號禮品票數最高，輸出5，然後輸出其票數4。"
                    }
                ],
                "testCases": [
                    {
                        "input": "8\n2 4 4 1 4 1 4 3",
                        "expectedOutput": "4 4",
                        "score": 10
                    },
                    {
                        "input": "7\n5 5 2 4 3 2 5",
                        "expectedOutput": "5 3",
                        "score": 10
                    },
                    {
                        "input": "9\n1 2 2 4 2 2 2 2 3",
                        "expectedOutput": "2 6",
                        "score": 10
                    },
                    {
                        "input": "10\n3 3 3 3 3 1 1 1 2 2",
                        "expectedOutput": "3 5",
                        "score": 10
                    },
                    {
                        "input": "3\n1 1 1",
                        "expectedOutput": "1 3",
                        "score": 10
                    },
                    {
                        "input": "7\n5 5 5 2 2 2 5",
                        "expectedOutput": "5 4",
                        "score": 10
                    },
                    {
                        "input": "5\n1 2 3 4 1",
                        "expectedOutput": "1 2",
                        "score": 10
                    },
                    {
                        "input": "5\n1 2 3 2 4",
                        "expectedOutput": "2 2",
                        "score": 10
                    },
                    {
                        "input": "11\n1 1 1 2 2 2 3 3 3 4 4",
                        "expectedOutput": "1 3",
                        "score": 10
                    },
                    {
                        "input": "1\n5",
                        "expectedOutput": "5 1",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE04",
        "title": "114-新竹市國小（競賽模式）",
        "unlockCode": "114TCPE04",
        "tasks": [
            {
                "id": "114TCPE04-1",
                "code": "114TCPE04-114TCPE04-1",
                "title": "考試座位安排",
                "description": "教室裡有N排座位，每排有M個位子。學生們會依照座號順序（從1開始）進入教室，並按照「由前往後、由左往右」的規則依序就座。給定某個座號K的學生，請計算他會坐在第幾排的第幾個位子。",
                "examples": [
                    {
                        "input": "5 4\n7",
                        "output": "2 3",
                        "explanation": "教室有5排、每排4個位子，學生7坐在第2排第3個位子。"
                    },
                    {
                        "input": "3 5\n13",
                        "output": "3 3",
                        "explanation": "教室有3排、每排5個位子，學生13坐在第3排第3個位子。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5 4\n7",
                        "expectedOutput": "2 3",
                        "score": 10
                    },
                    {
                        "input": "3 5\n13",
                        "expectedOutput": "3 3",
                        "score": 10
                    },
                    {
                        "input": "1 10\n5",
                        "expectedOutput": "1 5",
                        "score": 10
                    },
                    {
                        "input": "10 1\n8",
                        "expectedOutput": "8 1",
                        "score": 10
                    },
                    {
                        "input": "100 100\n10000",
                        "expectedOutput": "100 100",
                        "score": 10
                    },
                    {
                        "input": "10 10\n1",
                        "expectedOutput": "1 1",
                        "score": 10
                    },
                    {
                        "input": "10 5\n15",
                        "expectedOutput": "3 5",
                        "score": 10
                    },
                    {
                        "input": "6 7\n42",
                        "expectedOutput": "6 7",
                        "score": 10
                    },
                    {
                        "input": "20 30\n599",
                        "expectedOutput": "20 29",
                        "score": 10
                    },
                    {
                        "input": "5 5\n21",
                        "expectedOutput": "5 1",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE04-2",
                "code": "114TCPE04-114TCPE04-2",
                "title": "智慧氣候監測系統-氣溫變動分析",
                "description": "感測器每小時會回傳大量的氣溫數據。請找出當日的最高溫與最低溫，並計算兩者的差值（全距），作為氣候穩定性的參考指標。",
                "examples": [
                    {
                        "input": "5\n10 50 30 20 40",
                        "output": "40",
                        "explanation": "最高溫50，最低溫10，全距=40。"
                    },
                    {
                        "input": "6\n5 8 12 3 9 3",
                        "output": "9",
                        "explanation": "含重複數值，最高12，最低3，全距9。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n10 50 30 20 40",
                        "expectedOutput": "40",
                        "score": 10
                    },
                    {
                        "input": "6\n5 8 12 3 9 3",
                        "expectedOutput": "9",
                        "score": 10
                    },
                    {
                        "input": "1\n25",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "3\n-10 -5 -20",
                        "expectedOutput": "15",
                        "score": 10
                    },
                    {
                        "input": "4\n0 0 0 0",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "5\n-100 100 0 50 -50",
                        "expectedOutput": "200",
                        "score": 10
                    },
                    {
                        "input": "10\n1 2 3 4 5 6 7 8 9 10",
                        "expectedOutput": "9",
                        "score": 10
                    },
                    {
                        "input": "2\n10 -10",
                        "expectedOutput": "20",
                        "score": 10
                    },
                    {
                        "input": "5\n1000 1000 -1000 -1000 0",
                        "expectedOutput": "2000",
                        "score": 10
                    },
                    {
                        "input": "3\n1 10000 5000",
                        "expectedOutput": "9999",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE04-3",
                "code": "114TCPE04-114TCPE04-3",
                "title": "快遞物流中心分類系統",
                "description": "物流中心會根據包裹的重量決定配送順序：奇數重量的包裹屬於標準配送，偶數重量的包裹屬於重物配送。裝車規則：標準配送的包裹要先裝車，且重量輕的先裝；重物配送的包裹要後裝車，且重量重的先裝。請計算包裹的裝車順序。",
                "examples": [
                    {
                        "input": "6\n5 12 3 8 7 10",
                        "output": "3 5 7 12 10 8",
                        "explanation": "標準配送(奇數)由輕到重：3 5 7；重物配送(偶數)由重到輕：12 10 8。"
                    },
                    {
                        "input": "8\n15 20 11 6 9 14 2 13",
                        "output": "9 11 13 15 20 14 6 2",
                        "explanation": "標準配送由輕到重：9 11 13 15；重物配送由重到輕：20 14 6 2。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n5 12 3 8 7 10",
                        "expectedOutput": "3 5 7 12 10 8",
                        "score": 10
                    },
                    {
                        "input": "8\n15 20 11 6 9 14 2 13",
                        "expectedOutput": "9 11 13 15 20 14 6 2",
                        "score": 10
                    },
                    {
                        "input": "3\n1 3 5",
                        "expectedOutput": "1 3 5",
                        "score": 10
                    },
                    {
                        "input": "4\n2 4 6 8",
                        "expectedOutput": "8 6 4 2",
                        "score": 10
                    },
                    {
                        "input": "1\n10",
                        "expectedOutput": "10",
                        "score": 10
                    },
                    {
                        "input": "5\n0 1 2 3 4",
                        "expectedOutput": "1 3 4 2 0",
                        "score": 10
                    },
                    {
                        "input": "6\n9 9 9 10 10 10",
                        "expectedOutput": "9 9 9 10 10 10",
                        "score": 10
                    },
                    {
                        "input": "10\n10 9 8 7 6 5 4 3 2 1",
                        "expectedOutput": "1 3 5 7 9 10 8 6 4 2",
                        "score": 10
                    },
                    {
                        "input": "5\n100 0 100 0 100",
                        "expectedOutput": "100 100 100 0 0",
                        "score": 10
                    },
                    {
                        "input": "7\n11 22 33 44 55 66 77",
                        "expectedOutput": "11 33 55 77 66 44 22",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            },
            {
                "id": "114TCPE04-4",
                "code": "114TCPE04-114TCPE04-4",
                "title": "寶可夢聯盟大挑戰",
                "description": "小智的隊伍中共有N隻寶可夢，每隻都有名字、攻擊力、防禦力。戰鬥力=(攻擊力+防禦力)×戰技加成，其中攻擊力>防禦力時加成為2，攻擊力=防禦力時加成為3，攻擊力<防禦力時加成為1。小智要把最強的寶可夢保留到最後，因此現在只能派出戰鬥力排名第二高的寶可夢。若有戰鬥力相同並列最高的情況，以「後輸入者視為真正最高、先輸入者視為第二高」的規則處理。",
                "examples": [
                    {
                        "input": "4\n皮卡丘 10 5 小火龍 7 7 傑尼龜 6 9 伊布 8 8",
                        "output": "小火龍 7 7 42",
                        "explanation": "伊布戰鬥力48最高，小火龍戰鬥力42第二高。"
                    },
                    {
                        "input": "5\n妙蛙種子 6 6 波波 5 3 可達鴨 4 7 尼多力諾 9 4 喵喵 3 3",
                        "output": "尼多力諾 9 4 26",
                        "explanation": "妙蛙種子戰鬥力36最高，尼多力諾戰鬥力26第二高。"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n皮卡丘 10 5\n小火龍 7 7\n傑尼龜 6 9\n伊布 8 8",
                        "expectedOutput": "小火龍 7 7 42",
                        "score": 10
                    },
                    {
                        "input": "5\n妙蛙種子 6 6\n波波 5 3\n可達鴨 4 7\n尼多力諾 9 4\n喵喵 3 3",
                        "expectedOutput": "尼多力諾 9 4 26",
                        "score": 10
                    },
                    {
                        "input": "2\nA 10 5\nB 5 10",
                        "expectedOutput": "B 5 10 15",
                        "score": 10
                    },
                    {
                        "input": "3\nP1 1 2\nP2 2 1\nP3 1 1",
                        "expectedOutput": "P2 2 1 6",
                        "score": 10
                    },
                    {
                        "input": "3\nX 10 10\nY 20 10\nZ 10 20",
                        "expectedOutput": "X 10 10 60",
                        "score": 10
                    },
                    {
                        "input": "4\nA 100 1\nB 1 100\nC 50 50\nD 51 50",
                        "expectedOutput": "A 100 1 202",
                        "score": 10
                    },
                    {
                        "input": "5\nA 10 10\nB 20 20\nC 30 30\nD 40 40\nE 50 50",
                        "expectedOutput": "D 40 40 240",
                        "score": 10
                    },
                    {
                        "input": "3\nP1 1 100\nP2 2 100\nP3 3 100",
                        "expectedOutput": "P2 2 100 102",
                        "score": 10
                    },
                    {
                        "input": "4\nOne 10 5\nTwo 10 6\nThree 10 7\nFour 10 8",
                        "expectedOutput": "Three 10 7 34",
                        "score": 10
                    },
                    {
                        "input": "3\nM 10 10\nN 15 10\nO 10 15",
                        "expectedOutput": "N 15 10 50",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            },
            {
                "id": "114TCPE04-5",
                "code": "114TCPE04-114TCPE04-5",
                "title": "省電大作戰",
                "description": "冷氣的耗電規則：只要冷氣開著，每小時消耗1度電；每次把冷氣從關機變成開機，需要額外消耗5度電的啟動能源（若本來就開著，保持開機不需要再付這5度電）；把冷氣關掉則不會耗電。給定一天N個小時的行程表（1代表必須開冷氣，0代表可以自由選擇開或關），請計算滿足所有在房間時段都有冷氣吹的情況下，一整天最少總共要消耗多少度電。",
                "examples": [
                    {
                        "input": "5\n1 1 1 1 1",
                        "output": "10",
                        "explanation": "第1小時開機(5+1=6度)，第2~5小時保持開機(1×4=4度)，總共10度。"
                    },
                    {
                        "input": "8\n1 0 0 1 0 1 0 0",
                        "output": "11",
                        "explanation": "在房間時段為第1、4、6小時，中間空檔都小於5小時故保持開機，最後無行程直接關機，總計11度。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n1 1 1 1 1",
                        "expectedOutput": "10",
                        "score": 10
                    },
                    {
                        "input": "8\n1 0 0 1 0 1 0 0",
                        "expectedOutput": "11",
                        "score": 10
                    },
                    {
                        "input": "3\n0 0 0",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "1\n1",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "7\n1 0 0 0 0 0 1",
                        "expectedOutput": "12",
                        "score": 10
                    },
                    {
                        "input": "6\n1 0 0 0 0 1",
                        "expectedOutput": "12",
                        "score": 10
                    },
                    {
                        "input": "5\n1 0 0 0 1",
                        "expectedOutput": "10",
                        "score": 10
                    },
                    {
                        "input": "10\n1 0 1 0 1 0 1 0 1 0",
                        "expectedOutput": "14",
                        "score": 10
                    },
                    {
                        "input": "15\n1 0 0 0 0 0 0 1 0 0 0 0 0 0 1",
                        "expectedOutput": "18",
                        "score": 10
                    },
                    {
                        "input": "8\n0 1 0 0 0 0 1 0",
                        "expectedOutput": "12",
                        "score": 10
                    }
                ],
                "difficulty": "L4",
                "sb3Path": null
            },
            {
                "id": "114TCPE04-6",
                "code": "114TCPE04-114TCPE04-6",
                "title": "數位顯示器",
                "description": "七段顯示器是一種常見的數字顯示裝置，由7條LED燈條組成，可用來顯示數字0～9，每個數字所需點亮的燈條數量固定（0→6,1→2,2→5,3→5,4→4,5→5,6→6,7→3,8→7,9→6）。給定N條可用的LED燈條，請組成一個數字（可為雙位數），數字0～9最多只能各使用一次、不可有前導零（除非答案本身就是0）、最多只能有2位，求恰好用完所有N條燈條時可以組成的最大值；若無法恰好用完則輸出-1。",
                "examples": [
                    {
                        "input": "3",
                        "output": "7",
                        "explanation": "3條燈管可以組成數字7。"
                    },
                    {
                        "input": "7",
                        "output": "74",
                        "explanation": "7(3條)+4(4條)=7條，可組成74或47，最大為74。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "7",
                        "expectedOutput": "74",
                        "score": 10
                    },
                    {
                        "input": "2",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "14",
                        "expectedOutput": "-1",
                        "score": 10
                    },
                    {
                        "input": "13",
                        "expectedOutput": "98",
                        "score": 10
                    },
                    {
                        "input": "6",
                        "expectedOutput": "41",
                        "score": 10
                    },
                    {
                        "input": "4",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "12",
                        "expectedOutput": "96",
                        "score": 10
                    },
                    {
                        "input": "5",
                        "expectedOutput": "71",
                        "score": 10
                    },
                    {
                        "input": "9",
                        "expectedOutput": "97",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE05",
        "title": "114-新竹縣國小（競賽模式）",
        "unlockCode": "114TCPE05",
        "tasks": [
            {
                "id": "114TCPE05-1",
                "code": "114TCPE05-114TCPE05-1",
                "title": "圓柱體積計算",
                "description": "請輸入圓柱的半徑 r 與高 h，計算圓柱體積（π 取 3.14），輸出到小數點後兩位。體積公式為 π×r×r×h。",
                "examples": [
                    {
                        "input": "3\n7",
                        "output": "197.82",
                        "explanation": "3.14×3×3×7=197.82。"
                    },
                    {
                        "input": "9\n9",
                        "output": "2289.06",
                        "explanation": "3.14×9×9×9=2289.06。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n7",
                        "expectedOutput": "197.82",
                        "score": 20
                    },
                    {
                        "input": "9\n9",
                        "expectedOutput": "2289.06",
                        "score": 20
                    },
                    {
                        "input": "1\n1",
                        "expectedOutput": "3.14",
                        "score": 20
                    },
                    {
                        "input": "5\n10",
                        "expectedOutput": "785.00",
                        "score": 20
                    },
                    {
                        "input": "2\n5",
                        "expectedOutput": "62.80",
                        "score": 20
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE05-2",
                "code": "114TCPE05-114TCPE05-2",
                "title": "身體質量指數計算與健康判斷",
                "description": "請輸入體重（公斤）與身高（公尺），計算 BMI 值（體重除以身高的平方），四捨五入到小數點後兩位。並依下列標準判斷：小於18.5為過輕；18.5以上且小於24為標準；24以上為過重。",
                "examples": [
                    {
                        "input": "60\n1.55",
                        "output": "24.97 過重",
                        "explanation": "60÷1.55²=24.97，屬於過重。"
                    },
                    {
                        "input": "38\n1.43",
                        "output": "18.58 標準",
                        "explanation": "38÷1.43²=18.58，屬於標準。"
                    }
                ],
                "testCases": [
                    {
                        "input": "60\n1.55",
                        "expectedOutput": "24.97 過重",
                        "score": 20
                    },
                    {
                        "input": "38\n1.43",
                        "expectedOutput": "18.58 標準",
                        "score": 20
                    },
                    {
                        "input": "45\n1.7",
                        "expectedOutput": "15.57 過輕",
                        "score": 20
                    },
                    {
                        "input": "70\n1.75",
                        "expectedOutput": "22.86 標準",
                        "score": 20
                    },
                    {
                        "input": "90\n1.6",
                        "expectedOutput": "35.16 過重",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE05-3",
                "code": "114TCPE05-114TCPE05-3",
                "title": "房間磁磚的購買計算",
                "description": "房間長、寬各若干公尺，要鋪滿60公分×60公分的磁磚，每包12片。請計算至少需要購買幾包磁磚（無條件進位）。",
                "examples": [
                    {
                        "input": "4\n4",
                        "output": "4",
                        "explanation": "房間面積16平方公尺，每包可鋪0.6×0.6×12=4.32平方公尺，16÷4.32≈3.7無條件進位為4包。"
                    },
                    {
                        "input": "5\n3.5",
                        "output": "5",
                        "explanation": "房間面積17.5平方公尺，17.5÷4.32≈4.05無條件進位為5包。"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n4",
                        "expectedOutput": "4",
                        "score": 20
                    },
                    {
                        "input": "5\n3.5",
                        "expectedOutput": "5",
                        "score": 20
                    },
                    {
                        "input": "2\n2",
                        "expectedOutput": "1",
                        "score": 20
                    },
                    {
                        "input": "10\n10",
                        "expectedOutput": "24",
                        "score": 20
                    },
                    {
                        "input": "3\n3",
                        "expectedOutput": "3",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE05-4",
                "code": "114TCPE05-114TCPE05-4",
                "title": "美味餐車三明治多重折扣與利潤計算",
                "description": "三明治成本已知，售價為成本的1.5倍（四捨五入取整數）。若販售時段（整數小時）大於等於12，售價打6折（四捨五入取整數）；若時段大於等於11但小於12，打8折；其餘不打折。請判斷是否有利潤，並輸出賺或賠的金額（取絕對值）。",
                "examples": [
                    {
                        "input": "20\n11",
                        "output": "有利潤 賺4元",
                        "explanation": "售價=round(20×1.5)=30，時段11打8折=round(30×0.8)=24，利潤24-20=4元，有利潤。"
                    },
                    {
                        "input": "35\n12",
                        "output": "無利潤 賠3元",
                        "explanation": "售價=round(35×1.5)=53，時段12打6折=round(53×0.6)=32，利潤32-35=-3元，無利潤賠3元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "20\n11",
                        "expectedOutput": "有利潤 賺4元",
                        "score": 20
                    },
                    {
                        "input": "35\n12",
                        "expectedOutput": "無利潤 賠3元",
                        "score": 20
                    },
                    {
                        "input": "10\n5",
                        "expectedOutput": "有利潤 賺5元",
                        "score": 20
                    },
                    {
                        "input": "50\n12",
                        "expectedOutput": "無利潤 賠5元",
                        "score": 20
                    },
                    {
                        "input": "100\n11",
                        "expectedOutput": "有利潤 賺20元",
                        "score": 20
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            },
            {
                "id": "114TCPE05-5",
                "code": "114TCPE05-114TCPE05-5",
                "title": "雲端資料備份硬碟統計",
                "description": "有一批待備份資料，總量已知，雲端有 N 顆硬碟依序可使用，每顆有各自容量。依序將資料填入硬碟直到備份完成為止，請輸出總共動用了幾顆硬碟；若所有硬碟容量總和仍不足以完整備份，輸出「待備份檔案總容量超過雲端硬碟總空間，無法完整備份，請重新輸入。」",
                "examples": [
                    {
                        "input": "50\n2\n100 50",
                        "output": "1",
                        "explanation": "第1顆硬碟容量100已足夠備份50，動用1顆。"
                    },
                    {
                        "input": "800\n3\n500 200 300",
                        "output": "3",
                        "explanation": "前2顆硬碟容量500+200=700不足800，加上第3顆300達1000才完成，動用3顆。"
                    }
                ],
                "testCases": [
                    {
                        "input": "50\n2\n100 50",
                        "expectedOutput": "1",
                        "score": 20
                    },
                    {
                        "input": "800\n3\n500 200 300",
                        "expectedOutput": "3",
                        "score": 20
                    },
                    {
                        "input": "1000\n2\n300 400",
                        "expectedOutput": "待備份檔案總容量超過雲端硬碟總空間，無法完整備份，請重新輸入。",
                        "score": 20
                    },
                    {
                        "input": "250\n3\n100 100 100",
                        "expectedOutput": "3",
                        "score": 20
                    },
                    {
                        "input": "100\n1\n100",
                        "expectedOutput": "1",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE05-6",
                "code": "114TCPE05-114TCPE05-6",
                "title": "綠色節能競賽：電價分段計費與成本分析",
                "description": "共有 N 戶家庭，各自有一個月的用電度數。電價採四段累進費率：120度以內每度1.63元；121~330度部分每度2.38元；331~500度部分每度3.52元；501度以上部分每度4.80元。請計算每戶電費（四捨五入取整數元），並找出電費最低的金額，以及電費最高的戶序號與金額。",
                "examples": [
                    {
                        "input": "3\n555 339 80",
                        "output": "3 130 1 1558",
                        "explanation": "3戶用電555/339/80度，電費分別為1558/727/130元，最低是家庭3的130元，最高是家庭1的1558元。"
                    },
                    {
                        "input": "4\n222 911 349 119",
                        "output": "4 194 2 3267",
                        "explanation": "4戶用電222/911/349/119度，電費分別為438/3267/762/194元，最低是家庭4的194元，最高是家庭2的3267元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n555 339 80",
                        "expectedOutput": "3 130 1 1558",
                        "score": 50
                    },
                    {
                        "input": "4\n222 911 349 119",
                        "expectedOutput": "4 194 2 3267",
                        "score": 50
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE06",
        "title": "114-花蓮縣國小（競賽模式）",
        "unlockCode": "114TCPE06",
        "tasks": [
            {
                "id": "114TCPE06-1",
                "code": "114TCPE06-114TCPE06-1",
                "title": "零用錢是否足夠",
                "description": "你有一個錢包，裡面裝著固定的零用錢。這幾天你想買一些東西，請幫忙算算看，你的錢夠不夠買這些東西？系統會提供一個整數代表零用錢總額，以及一份固定包含4筆資料的花費清單，依序代表第1天到第4天的花費金額。請從第1天開始，依序扣除每日花費金額：若在某一天扣除花費後，剩餘金額小於0，表示零用錢已不足，請立即輸出「第X天不夠用」（X為發生不足的天數）；若4天的花費皆能成功扣除完成，請輸出「錢剛好或有剩」。",
                "examples": [
                    {
                        "input": "100\n20 30 40 20",
                        "output": "第4天不夠用",
                        "explanation": "100-20=80,80-30=50,50-40=10,10-20=-10<0，第4天不夠用。"
                    },
                    {
                        "input": "100\n10 20 30 40",
                        "output": "錢剛好或有剩",
                        "explanation": "100-10-20-30-40=0，4天都成功扣除。"
                    }
                ],
                "testCases": [
                    {
                        "input": "100\n20 30 40 20",
                        "expectedOutput": "第4天不夠用",
                        "score": 10
                    },
                    {
                        "input": "100\n10 20 30 40",
                        "expectedOutput": "錢剛好或有剩",
                        "score": 10
                    },
                    {
                        "input": "50\n60 10 10 10",
                        "expectedOutput": "第1天不夠用",
                        "score": 10
                    },
                    {
                        "input": "50\n30 30 10 10",
                        "expectedOutput": "第2天不夠用",
                        "score": 10
                    },
                    {
                        "input": "50\n20 20 20 10",
                        "expectedOutput": "第3天不夠用",
                        "score": 10
                    },
                    {
                        "input": "100\n25 25 25 25",
                        "expectedOutput": "錢剛好或有剩",
                        "score": 10
                    },
                    {
                        "input": "1000\n100 200 300 500",
                        "expectedOutput": "第4天不夠用",
                        "score": 10
                    },
                    {
                        "input": "50\n0 0 0 0",
                        "expectedOutput": "錢剛好或有剩",
                        "score": 10
                    },
                    {
                        "input": "60\n20 20 20 10",
                        "expectedOutput": "第4天不夠用",
                        "score": 10
                    },
                    {
                        "input": "40\n20 20 10 10",
                        "expectedOutput": "第3天不夠用",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE06-2",
                "code": "114TCPE06-114TCPE06-2",
                "title": "機器人戰鬥力比對",
                "description": "場上有N隻機器人參賽，每隻機器人都有一個戰鬥力數值。大會規定採取積分循環賽制：每一隻機器人都要跟場上所有其他機器人進行一對一的較量，戰鬥力比對手高得1分積分，比對手低或平手則得0分。請依照機器人的輸入順序，依序輸出這N隻機器人的總積分。",
                "examples": [
                    {
                        "input": "3\n10 50 30",
                        "output": "0 2 1",
                        "explanation": "第1隻(10)比輸50、30得0分；第2隻(50)贏過10、30得2分；第3隻(30)贏過10、比輸50得1分。"
                    },
                    {
                        "input": "3\n10 20 30",
                        "output": "0 1 2",
                        "explanation": "依序得0分、1分、2分。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n10 50 30",
                        "expectedOutput": "0 2 1",
                        "score": 10
                    },
                    {
                        "input": "3\n10 20 30",
                        "expectedOutput": "0 1 2",
                        "score": 10
                    },
                    {
                        "input": "4\n10 10 10 10",
                        "expectedOutput": "0 0 0 0",
                        "score": 10
                    },
                    {
                        "input": "5\n50 40 30 20 10",
                        "expectedOutput": "4 3 2 1 0",
                        "score": 10
                    },
                    {
                        "input": "5\n10 20 20 30 30",
                        "expectedOutput": "0 1 1 3 3",
                        "score": 10
                    },
                    {
                        "input": "1\n100",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "10\n1 2 3 4 5 6 7 8 9 10",
                        "expectedOutput": "0 1 2 3 4 5 6 7 8 9",
                        "score": 10
                    },
                    {
                        "input": "4\n15 15 20 10",
                        "expectedOutput": "1 1 3 0",
                        "score": 10
                    },
                    {
                        "input": "6\n100 0 50 50 25 75",
                        "expectedOutput": "5 0 2 2 1 4",
                        "score": 10
                    },
                    {
                        "input": "2\n10 10",
                        "expectedOutput": "0 0",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            },
            {
                "id": "114TCPE06-3",
                "code": "114TCPE06-114TCPE06-3",
                "title": "字串內的秘密數字",
                "description": "壞人在傳遞的文字訊息中藏了許多數字，只要將訊息中所有的數字加總起來，就能得到解鎖金庫的密碼。請寫一個程式，幫忙計算出這個神祕的總和數字。請檢查字串中的每一個字元，如果是數字(0~9)就加入總和，英文或符號則忽略；每個數字視為個位數相加。",
                "examples": [
                    {
                        "input": "A1B2C3",
                        "output": "6",
                        "explanation": "找到 1, 2, 3，總和為 6。"
                    },
                    {
                        "input": "Key5Word2",
                        "output": "7",
                        "explanation": "找到 5, 2，總和為 7。"
                    }
                ],
                "testCases": [
                    {
                        "input": "A1B2C3",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "Key5Word2",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "HelloWorld",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "123456789",
                        "expectedOutput": "45",
                        "score": 10
                    },
                    {
                        "input": "a12b34",
                        "expectedOutput": "10",
                        "score": 10
                    },
                    {
                        "input": "0a0b0c0",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "a1b2c3d4e5f6g7h8i9j0",
                        "expectedOutput": "45",
                        "score": 10
                    },
                    {
                        "input": "!@1#$2%^3&*",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "abc9xyz9",
                        "expectedOutput": "18",
                        "score": 10
                    },
                    {
                        "input": "5",
                        "expectedOutput": "5",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE06-4",
                "code": "114TCPE06-114TCPE06-4",
                "title": "最佳派對地點",
                "description": "有N個好朋友住在同一條筆直的大馬路上，每個人的家都有一個座標數字。他們決定舉辦一場派對，必須選在其中一個人的家裡舉辦，且所有人從自己家走到派對地點的距離總和必須是最小的。請找出最佳的舉辦地點，並算出這個最小的總距離是多少；若有多個地點距離總和一樣小，輸出座標較小的那一個。",
                "examples": [
                    {
                        "input": "3\n2 10 5",
                        "output": "5 8",
                        "explanation": "辦在5的距離和最小，為8。"
                    },
                    {
                        "input": "3\n1 9 3",
                        "output": "3 8",
                        "explanation": "辦在3的距離和最小，為8。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n2 10 5",
                        "expectedOutput": "5 8",
                        "score": 10
                    },
                    {
                        "input": "3\n1 9 3",
                        "expectedOutput": "3 8",
                        "score": 10
                    },
                    {
                        "input": "4\n1 2 3 4",
                        "expectedOutput": "2 4",
                        "score": 10
                    },
                    {
                        "input": "4\n10 10 20 20",
                        "expectedOutput": "10 20",
                        "score": 10
                    },
                    {
                        "input": "1\n100",
                        "expectedOutput": "100 0",
                        "score": 10
                    },
                    {
                        "input": "5\n100 0 50 25 75",
                        "expectedOutput": "50 150",
                        "score": 10
                    },
                    {
                        "input": "6\n10 20 30 40 50 60",
                        "expectedOutput": "30 90",
                        "score": 10
                    },
                    {
                        "input": "5\n1 1 1 1 100",
                        "expectedOutput": "1 99",
                        "score": 10
                    },
                    {
                        "input": "2\n10 5",
                        "expectedOutput": "5 5",
                        "score": 10
                    },
                    {
                        "input": "7\n7 1 4 2 8 5 9",
                        "expectedOutput": "5 17",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE07",
        "title": "114-南投縣國小（競賽模式）",
        "unlockCode": "114TCPE07",
        "tasks": [
            {
                "id": "114TCPE07-1",
                "code": "114TCPE07-114TCPE07-1",
                "title": "遊樂園的自動售票機",
                "description": "遊樂園自動售票機依下列規則（依序判斷，符合就停止）計算每位遊客的票價：持有縣民卡者免費（0元）；年齡65歲以上者150元；身高低於120公分或年齡低於6歲者180元；其餘300元。請計算 N 位遊客的總票價。",
                "examples": [
                    {
                        "input": "2\n170 25 1 100 8 0",
                        "output": "180",
                        "explanation": "第1人持縣民卡免費(0)；第2人身高100<120故180元；總計180元。"
                    },
                    {
                        "input": "3\n180 30 0 160 70 0 110 5 1",
                        "output": "450",
                        "explanation": "3人分別300+150+0=450元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "2\n170 25 1 100 8 0",
                        "expectedOutput": "180",
                        "score": 14
                    },
                    {
                        "input": "3\n180 30 0 160 70 0 110 5 1",
                        "expectedOutput": "450",
                        "score": 14
                    },
                    {
                        "input": "1\n170 30 0",
                        "expectedOutput": "300",
                        "score": 14
                    },
                    {
                        "input": "1\n110 10 0",
                        "expectedOutput": "180",
                        "score": 14
                    },
                    {
                        "input": "2\n160 70 0 130 40 0",
                        "expectedOutput": "450",
                        "score": 14
                    },
                    {
                        "input": "3\n150 5 0 180 30 1 160 65 0",
                        "expectedOutput": "330",
                        "score": 14
                    },
                    {
                        "input": "4\n170 40 0 115 7 0 140 70 1 180 20 0",
                        "expectedOutput": "780",
                        "score": 14
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE07-2",
                "code": "114TCPE07-114TCPE07-2",
                "title": "勇者的挑戰",
                "description": "勇者初始血量為上限值 H。依序經歷 N 個事件（每個事件是血量增減值），血量不可超過上限 H，也不可低於 0。若血量降到 0 或以下，視為陣亡，之後的事件不再發生，直接輸出 0。請輸出所有事件結束後（或陣亡時）的血量。",
                "examples": [
                    {
                        "input": "100\n4\n-30 50 -10 -5",
                        "output": "85",
                        "explanation": "100-30=70,+50=100(不超過上限)封頂,-10=90,-5=85，最終85。"
                    },
                    {
                        "input": "50\n3\n-60 20 -10",
                        "output": "0",
                        "explanation": "50-60=-10≤0，陣亡，輸出0。"
                    }
                ],
                "testCases": [
                    {
                        "input": "100\n4\n-30 50 -10 -5",
                        "expectedOutput": "85",
                        "score": 14
                    },
                    {
                        "input": "50\n3\n-60 20 -10",
                        "expectedOutput": "0",
                        "score": 14
                    },
                    {
                        "input": "100\n1\n-20",
                        "expectedOutput": "80",
                        "score": 14
                    },
                    {
                        "input": "100\n2\n-30 80",
                        "expectedOutput": "100",
                        "score": 14
                    },
                    {
                        "input": "50\n3\n-60 200 -10",
                        "expectedOutput": "0",
                        "score": 14
                    },
                    {
                        "input": "120\n4\n-30 -50 -50 200",
                        "expectedOutput": "0",
                        "score": 14
                    },
                    {
                        "input": "77\n6\n-20 10 10 -35 20 15",
                        "expectedOutput": "77",
                        "score": 14
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE07-3",
                "code": "114TCPE07-114TCPE07-3",
                "title": "跳水比賽成績計算",
                "description": "跳水比賽由 N 位評審（5~10人）評分，計分方式為去除一個最高分與一個最低分後，將剩餘分數加總。請輸出最終得分。",
                "examples": [
                    {
                        "input": "5\n9 8 10 6 7",
                        "output": "24",
                        "explanation": "去除最高10與最低6，剩9+8+7=24。"
                    },
                    {
                        "input": "6\n8 8 8 8 8 8",
                        "output": "32",
                        "explanation": "6個8去除一個最高一個最低(皆為8)，剩4個8=32。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n9 8 10 6 7",
                        "expectedOutput": "24",
                        "score": 20
                    },
                    {
                        "input": "6\n8 8 8 8 8 8",
                        "expectedOutput": "32",
                        "score": 20
                    },
                    {
                        "input": "7\n10 9 8 7 6 5 4",
                        "expectedOutput": "35",
                        "score": 20
                    },
                    {
                        "input": "10\n0 10 5 6 7 8 9 4 3 2",
                        "expectedOutput": "44",
                        "score": 20
                    },
                    {
                        "input": "5\n0 0 10 10 5",
                        "expectedOutput": "15",
                        "score": 20
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE07-4",
                "code": "114TCPE07-114TCPE07-4",
                "title": "籃球機得分計算",
                "description": "籃球機分為 1P 與 2P 兩位玩家，各自投籃 N 次（0表示未進，1表示進球）。每次進球得1分，但若「連續兩次都進球」，則該次改記3分。請分別計算兩人總分，並輸出「1P總分 2P總分 勝者」；若總分相同，勝者欄輸出「不分勝負」。",
                "examples": [
                    {
                        "input": "5\n1 0 1 1 0\n0 1 1 1 1",
                        "output": "5 10 2P",
                        "explanation": "1P:[1,0,1,1,0]→1+1+3=5分；2P:[0,1,1,1,1]→1+3+3+3=10分，2P勝。"
                    },
                    {
                        "input": "5\n0 1 0 1 0\n0 0 0 0 0",
                        "output": "2 0 1P",
                        "explanation": "2P全未進得0分，1P得2分，1P勝。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n1 0 1 1 0\n0 1 1 1 1",
                        "expectedOutput": "5 10 2P",
                        "score": 17
                    },
                    {
                        "input": "5\n0 1 0 1 0\n0 0 0 0 0",
                        "expectedOutput": "2 0 1P",
                        "score": 17
                    },
                    {
                        "input": "6\n1 1 1 0 1 0\n0 1 1 1 1 0",
                        "expectedOutput": "8 10 2P",
                        "score": 17
                    },
                    {
                        "input": "9\n0 1 0 1 0 1 0 1 0\n0 0 0 0 0 0 0 0 0",
                        "expectedOutput": "4 0 1P",
                        "score": 17
                    },
                    {
                        "input": "8\n1 1 0 1 1 0 1 1\n1 1 1 0 1 1 1 0",
                        "expectedOutput": "12 14 2P",
                        "score": 17
                    },
                    {
                        "input": "7\n1 1 0 1 1 0 1\n1 1 0 1 1 0 1",
                        "expectedOutput": "9 9 不分勝負",
                        "score": 17
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            },
            {
                "id": "114TCPE07-5",
                "code": "114TCPE07-114TCPE07-5",
                "title": "玩具收納運送計算",
                "description": "要將 N 件玩具依序裝進容量 20 公斤的收納箱。依序嘗試把玩具放入「目前正在使用」的箱子，若加入後總重量超過20公斤，則將目前的箱子封箱，改用一個新箱子裝這件玩具。請輸出總共用了幾個箱子。",
                "examples": [
                    {
                        "input": "5\n8 9 6 3 4",
                        "output": "2",
                        "explanation": "8+9=17,+6=23>20故換箱；新箱3+4=7。共2箱。"
                    },
                    {
                        "input": "1\n20",
                        "output": "1",
                        "explanation": "20剛好裝滿一箱，共1箱。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n8 9 6 3 4",
                        "expectedOutput": "2",
                        "score": 17
                    },
                    {
                        "input": "1\n20",
                        "expectedOutput": "1",
                        "score": 17
                    },
                    {
                        "input": "4\n5 5 5 5",
                        "expectedOutput": "1",
                        "score": 17
                    },
                    {
                        "input": "5\n9 9 9 9 9",
                        "expectedOutput": "3",
                        "score": 17
                    },
                    {
                        "input": "6\n12 3 4 6 5 2",
                        "expectedOutput": "2",
                        "score": 17
                    },
                    {
                        "input": "8\n2 2 2 2 2 2 2 2",
                        "expectedOutput": "1",
                        "score": 17
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE07-6",
                "code": "114TCPE07-114TCPE07-6",
                "title": "碼易丁飲料店：逐筆結帳",
                "description": "碼易丁飲料店的飲料價目：1號45元、2號25元、3號30元、4號40元、5號60元。依序輸入 N 筆訂單（每筆為一個飲料編號），請計算總金額。",
                "examples": [
                    {
                        "input": "3\n1 3 5",
                        "output": "135",
                        "explanation": "1號45+3號30+5號60=135元。"
                    },
                    {
                        "input": "5\n2 2 4 1 3",
                        "output": "165",
                        "explanation": "2號25×2+4號40+1號45+3號30=165元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n1 3 5",
                        "expectedOutput": "135",
                        "score": 20
                    },
                    {
                        "input": "5\n2 2 4 1 3",
                        "expectedOutput": "165",
                        "score": 20
                    },
                    {
                        "input": "4\n5 5 5 5",
                        "expectedOutput": "240",
                        "score": 20
                    },
                    {
                        "input": "1\n1",
                        "expectedOutput": "45",
                        "score": 20
                    },
                    {
                        "input": "10\n2 2 2 2 2 1 1 1 1 1",
                        "expectedOutput": "350",
                        "score": 20
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE07-7",
                "code": "114TCPE07-114TCPE07-7",
                "title": "碼易丁飲料店：批次結帳與找零",
                "description": "同樣的飲料價目表（1號45元、2號25元、3號30元、4號40元、5號60元）。這次以 N 筆「編號 數量」批次輸入訂單，並在最後一行輸入實際付款金額。請計算總金額；若付款足夠，輸出「總金額 X 應找錢 Y」；若不足，輸出「總金額 X 付款不足 Y」。",
                "examples": [
                    {
                        "input": "3\n1 5 3 3 2 2\n350",
                        "output": "總金額 365 付款不足 15",
                        "explanation": "1號×5=225,3號×3=90,2號×2=50,總金額365,付款350不足15。"
                    },
                    {
                        "input": "2\n5 2 4 3\n500",
                        "output": "總金額 240 應找錢 260",
                        "explanation": "5號×2=120,4號×3=120,總金額240,付款500應找260。"
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n1 5 3 3 2 2\n350",
                        "expectedOutput": "總金額 365 付款不足 15",
                        "score": 17
                    },
                    {
                        "input": "2\n5 2 4 3\n500",
                        "expectedOutput": "總金額 240 應找錢 260",
                        "score": 17
                    },
                    {
                        "input": "3\n1 3 2 2 4 1\n300",
                        "expectedOutput": "總金額 225 應找錢 75",
                        "score": 17
                    },
                    {
                        "input": "1\n1 5\n200",
                        "expectedOutput": "總金額 225 付款不足 25",
                        "score": 17
                    },
                    {
                        "input": "2\n1 2 3 1\n100",
                        "expectedOutput": "總金額 120 付款不足 20",
                        "score": 17
                    },
                    {
                        "input": "4\n1 5 2 4 3 3 5 2\n600",
                        "expectedOutput": "總金額 535 應找錢 65",
                        "score": 17
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE07-8",
                "code": "114TCPE07-114TCPE07-8",
                "title": "碼易丁飲料店：最少硬幣找零",
                "description": "碼易丁飲料店使用 50 元、10 元、5 元、1 元四種硬幣找零，店員希望用最少的硬幣數量找零。請輸入應找零金額（0~999），輸出各面額所需的硬幣數量（依 50、10、5、1 的順序）。",
                "examples": [
                    {
                        "input": "88",
                        "output": "1 3 1 3",
                        "explanation": "88=50×1+10×3+5×1+1×3。"
                    },
                    {
                        "input": "124",
                        "output": "2 2 0 4",
                        "explanation": "124=50×2+10×2+5×0+1×4。"
                    }
                ],
                "testCases": [
                    {
                        "input": "88",
                        "expectedOutput": "1 3 1 3",
                        "score": 14
                    },
                    {
                        "input": "124",
                        "expectedOutput": "2 2 0 4",
                        "score": 14
                    },
                    {
                        "input": "7",
                        "expectedOutput": "0 0 1 2",
                        "score": 14
                    },
                    {
                        "input": "100",
                        "expectedOutput": "2 0 0 0",
                        "score": 14
                    },
                    {
                        "input": "388",
                        "expectedOutput": "7 3 1 3",
                        "score": 14
                    },
                    {
                        "input": "999",
                        "expectedOutput": "19 4 1 4",
                        "score": 14
                    },
                    {
                        "input": "0",
                        "expectedOutput": "0 0 0 0",
                        "score": 14
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE07-9",
                "code": "114TCPE07-114TCPE07-9",
                "title": "碼易丁飲料店：每日銷售結算",
                "description": "碼易丁飲料店共有 K 種飲料，各自有每杯利潤。依序輸入 N 筆訂單（每筆為「編號 杯數」），請統計每種飲料的銷售杯數，以及當日總利潤。",
                "examples": [
                    {
                        "input": "5\n15 10 15 20 25\n3\n5 5 2 2 2 10",
                        "output": "0 12 0 0 5 245",
                        "explanation": "5號賣12杯,2號賣2杯,5號另賣10杯共12杯，利潤2×10+12×25=245。"
                    },
                    {
                        "input": "3\n10 20 30\n1\n2 5",
                        "output": "0 5 0 100",
                        "explanation": "3號賣5杯，利潤5×20=100。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n15 10 15 20 25\n3\n5 5 2 2 2 10",
                        "expectedOutput": "0 12 0 0 5 245",
                        "score": 17
                    },
                    {
                        "input": "3\n10 20 30\n1\n2 5",
                        "expectedOutput": "0 5 0 100",
                        "score": 17
                    },
                    {
                        "input": "4\n5 10 15 20\n3\n1 2 2 3 4 1",
                        "expectedOutput": "2 3 0 1 60",
                        "score": 17
                    },
                    {
                        "input": "5\n15 10 15 20 25\n4\n1 2 3 3 5 2 1 1",
                        "expectedOutput": "3 0 3 0 2 140",
                        "score": 17
                    },
                    {
                        "input": "6\n8 12 20 15 10 25\n6\n6 2 2 5 4 3 6 1 2 2 1 4",
                        "expectedOutput": "4 7 0 3 0 3 236",
                        "score": 17
                    },
                    {
                        "input": "10\n5 6 7 8 9 10 11 12 13 14\n10\n1 1 2 2 3 3 4 4 5 5 6 1 7 2 8 1 9 2 10 3",
                        "expectedOutput": "1 2 3 4 5 1 2 1 2 3 227",
                        "score": 17
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE08",
        "title": "114-新北市國小（競賽模式）",
        "unlockCode": "114TCPE08",
        "tasks": [
            {
                "id": "114TCPE08-1",
                "code": "114TCPE08-114TCPE08-1",
                "title": "健康小管家",
                "description": "身體質量指數(BMI)是一種常用的衡量指標，用於評估一個人的體重是否在健康的範圍內。BMI=體重(kg)/(身高(m)×身高(m))。程式計算出BMI數值（取小數點後一位）後，依分類等級判斷：小於18.5為體重過輕；18.5到24.9為正常範圍；25.0到29.9為體重過重；30.0到34.9為輕度肥胖；35.0到39.9為中度肥胖；40.0以上為重度肥胖。",
                "examples": [
                    {
                        "input": "165\n45",
                        "output": "16.5 體重過輕",
                        "explanation": "BMI=45/(1.65×1.65)=16.5，小於18.5，屬於體重過輕。"
                    },
                    {
                        "input": "180\n85",
                        "output": "26.2 體重過重",
                        "explanation": "BMI=85/(1.8×1.8)=26.2，在25.0到29.9之間，屬於體重過重。"
                    }
                ],
                "testCases": [
                    {
                        "input": "165\n45",
                        "expectedOutput": "16.5 體重過輕",
                        "score": 10
                    },
                    {
                        "input": "180\n85",
                        "expectedOutput": "26.2 體重過重",
                        "score": 10
                    },
                    {
                        "input": "170\n60",
                        "expectedOutput": "20.8 正常範圍",
                        "score": 10
                    },
                    {
                        "input": "160\n81",
                        "expectedOutput": "31.6 輕度肥胖",
                        "score": 10
                    },
                    {
                        "input": "150\n85",
                        "expectedOutput": "37.8 中度肥胖",
                        "score": 10
                    },
                    {
                        "input": "150\n100",
                        "expectedOutput": "44.4 重度肥胖",
                        "score": 10
                    },
                    {
                        "input": "170\n50",
                        "expectedOutput": "17.3 體重過輕",
                        "score": 10
                    },
                    {
                        "input": "175\n75",
                        "expectedOutput": "24.5 正常範圍",
                        "score": 10
                    },
                    {
                        "input": "180\n95",
                        "expectedOutput": "29.3 體重過重",
                        "score": 10
                    },
                    {
                        "input": "170\n120",
                        "expectedOutput": "41.5 重度肥胖",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE08-2",
                "code": "114TCPE08-114TCPE08-2",
                "title": "鋼琴小天才計分挑戰",
                "description": "比賽聘請了7位專業評審，他們會給每位選手一個1分到10分的分數。為了避免有評審給分太高或太低，影響比賽的公平性，最終計算總成績時，會將這7個分數中最高的1個分數和最低的1個分數都扣除，選手的最終總成績就是剩下那5位評審給的分數總和。",
                "examples": [
                    {
                        "input": "8 9 7 9 8 10 7",
                        "output": "41",
                        "explanation": "最高分10最低分7，7個成績總和扣除(最高及最低)：8+9+7+9+8=41。"
                    },
                    {
                        "input": "1.5 2.5 3.5 4.5 5.5 6.5 7.5",
                        "output": "22.5",
                        "explanation": "最高分7.5最低分1.5，剩餘總和2.5+3.5+4.5+5.5+6.5=22.5。"
                    }
                ],
                "testCases": [
                    {
                        "input": "8 9 7 9 8 10 7",
                        "expectedOutput": "41",
                        "score": 10
                    },
                    {
                        "input": "1.5 2.5 3.5 4.5 5.5 6.5 7.5",
                        "expectedOutput": "22.5",
                        "score": 10
                    },
                    {
                        "input": "10 10 10 10 10 10 10",
                        "expectedOutput": "50",
                        "score": 10
                    },
                    {
                        "input": "0 0 0 0 0 0 0",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "5 5 5 5 5 10 0",
                        "expectedOutput": "25",
                        "score": 10
                    },
                    {
                        "input": "9.5 8.5 7.5 9 8 10 6",
                        "expectedOutput": "42.5",
                        "score": 10
                    },
                    {
                        "input": "1 2 3 4 5 6 7",
                        "expectedOutput": "20",
                        "score": 10
                    },
                    {
                        "input": "10 9 8 7 6 5 4",
                        "expectedOutput": "35",
                        "score": 10
                    },
                    {
                        "input": "100 10 10 10 10 10 1",
                        "expectedOutput": "50",
                        "score": 10
                    },
                    {
                        "input": "2.2 3.3 4.4 5.5 6.6 7.7 8.8",
                        "expectedOutput": "27.5",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE08-3",
                "code": "114TCPE08-114TCPE08-3",
                "title": "幸運號碼大樂透",
                "description": "玩具王國的幸運數字樂透遊戲：每位玩家可以從1到99中，挑選5個不同的號碼作為自己的彩券，每期開獎公布10個幸運號碼。本期的幸運號碼是：7、24、31、42、45、56、63、78、80、99。玩家的中獎金額取決於他選的5個號碼中，有多少個號碼對中了當期的10個幸運號碼：5個對中10萬元，4個1萬元，3個2000元，2個500元，1個200元，0個0元。",
                "examples": [
                    {
                        "input": "7 18 29 31 35",
                        "output": "猜中2個號碼獎金500元",
                        "explanation": "7與31對中本期幸運號碼，共2個號碼相同，獎金500元。"
                    },
                    {
                        "input": "1 2 3 4 5",
                        "output": "猜中0個號碼獎金0元",
                        "explanation": "沒有號碼相同，獎金0元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "7 18 29 31 35",
                        "expectedOutput": "猜中2個號碼獎金500元",
                        "score": 10
                    },
                    {
                        "input": "1 2 3 4 5",
                        "expectedOutput": "猜中0個號碼獎金0元",
                        "score": 10
                    },
                    {
                        "input": "7 24 31 42 45",
                        "expectedOutput": "猜中5個號碼獎金100000元",
                        "score": 10
                    },
                    {
                        "input": "7 24 31 42 1",
                        "expectedOutput": "猜中4個號碼獎金10000元",
                        "score": 10
                    },
                    {
                        "input": "7 24 31 2 3",
                        "expectedOutput": "猜中3個號碼獎金2000元",
                        "score": 10
                    },
                    {
                        "input": "7 2 3 4 5",
                        "expectedOutput": "猜中1個號碼獎金200元",
                        "score": 10
                    },
                    {
                        "input": "56 63 78 80 99",
                        "expectedOutput": "猜中5個號碼獎金100000元",
                        "score": 10
                    },
                    {
                        "input": "56 63 78 80 1",
                        "expectedOutput": "猜中4個號碼獎金10000元",
                        "score": 10
                    },
                    {
                        "input": "56 63 78 2 3",
                        "expectedOutput": "猜中3個號碼獎金2000元",
                        "score": 10
                    },
                    {
                        "input": "99 2 3 4 5",
                        "expectedOutput": "猜中1個號碼獎金200元",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE08-4",
                "code": "114TCPE08-114TCPE08-4",
                "title": "小隊長的奇數號碼",
                "description": "老師給了小隊長兩個號碼：一個起始號碼和一個結束號碼。小隊長的任務是找出這兩個號碼之間（包含這兩個號碼）所有奇數的號碼牌，並把這些號碼加起來，算出最後的總和。",
                "examples": [
                    {
                        "input": "10\n20",
                        "output": "75",
                        "explanation": "11+13+15+17+19=75。"
                    },
                    {
                        "input": "31\n39",
                        "output": "175",
                        "explanation": "31+33+35+37+39=175。"
                    }
                ],
                "testCases": [
                    {
                        "input": "10\n20",
                        "expectedOutput": "75",
                        "score": 10
                    },
                    {
                        "input": "31\n39",
                        "expectedOutput": "175",
                        "score": 10
                    },
                    {
                        "input": "1\n10",
                        "expectedOutput": "25",
                        "score": 10
                    },
                    {
                        "input": "10\n10",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "11\n11",
                        "expectedOutput": "11",
                        "score": 10
                    },
                    {
                        "input": "1\n5",
                        "expectedOutput": "9",
                        "score": 10
                    },
                    {
                        "input": "2\n8",
                        "expectedOutput": "15",
                        "score": 10
                    },
                    {
                        "input": "100\n200",
                        "expectedOutput": "7500",
                        "score": 10
                    },
                    {
                        "input": "21\n25",
                        "expectedOutput": "69",
                        "score": 10
                    },
                    {
                        "input": "0\n9",
                        "expectedOutput": "25",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE09",
        "title": "114-澎湖縣國小（競賽模式）",
        "unlockCode": "114TCPE09",
        "tasks": [
            {
                "id": "114TCPE09-1",
                "code": "114TCPE09-114TCPE09-1",
                "title": "神秘的運算符號",
                "description": "小明自己發明了一個特別的運算符號「#」。當你看到 A # B 的時候，代表要用 A 和 B 這兩個數字來進行一個新的計算。\n計算時，先找出這兩個數字中較大的數和較小的數（不管輸入順序）。\n接著，用「較大的數」除以「較小的數」，算出商與餘數。\n最後，把「商」放在前面、「餘數」放在後面，直接接在一起，變成一個新的數字，這就是「#」運算的答案。如果剛好整除，餘數是 0，也要照樣寫出來，不能省略。",
                "examples": [
                    {
                        "input": "5\n10",
                        "output": "20",
                        "explanation": "較大的數是10，較小的數是5。10÷5＝2餘0，商2接餘數0，得到20。"
                    },
                    {
                        "input": "10\n5",
                        "output": "20",
                        "explanation": "不管輸入順序，較大的數還是10，較小的數還是5，結果一樣是20。"
                    },
                    {
                        "input": "3\n4",
                        "output": "11",
                        "explanation": "較大的數是4，較小的數是3。4÷3＝1餘1，商1接餘數1，得到11。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n10",
                        "expectedOutput": "20",
                        "score": 10
                    },
                    {
                        "input": "3\n3",
                        "expectedOutput": "10",
                        "score": 10
                    },
                    {
                        "input": "8\n100",
                        "expectedOutput": "124",
                        "score": 10
                    },
                    {
                        "input": "45\n7",
                        "expectedOutput": "63",
                        "score": 10
                    },
                    {
                        "input": "1\n13",
                        "expectedOutput": "130",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE09-2",
                "code": "114TCPE09-114TCPE09-2",
                "title": "甜心餅乾工廠的品管任務",
                "description": "品管機器人「阿波」站在包裝輸送帶前面，確保每一塊「甜心餅乾」都是正面朝上。\n1 代表正面（不用翻），0 代表反面（需要翻面）。每翻一塊餅乾，計數器就會 +1。\n請計算阿波總共翻了幾次餅乾。",
                "examples": [
                    {
                        "input": "8\n1 0 1 1 0 0 1 1",
                        "output": "3",
                        "explanation": "8 塊餅乾中有 3 塊是反面（0），所以翻了 3 次。"
                    }
                ],
                "testCases": [
                    {
                        "input": "8\n1 0 1 1 0 0 1 1",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "5\n1 1 1 1 1",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "7\n0 0 0 0 0 0 0",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "1\n1",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "1\n0",
                        "expectedOutput": "1",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE09-3",
                "code": "114TCPE09-114TCPE09-3",
                "title": "麵包店打折趣",
                "description": "小明到幸福麵包店買麵包，每個麵包的價格都一樣。店員說：「如果總金額滿 100 元可以打 9 折，滿 200 元打 85 折，滿 300 元打 8 折喔！」\n請算出小明這次要付多少錢（四捨五入到整數）。",
                "examples": [
                    {
                        "input": "5\n25",
                        "output": "113",
                        "explanation": "總金額 5×25=125 元，滿 100 打 9 折，125×0.9=112.5，四捨五入為 113。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n25",
                        "expectedOutput": "113",
                        "score": 10
                    },
                    {
                        "input": "3\n30",
                        "expectedOutput": "90",
                        "score": 10
                    },
                    {
                        "input": "4\n25",
                        "expectedOutput": "90",
                        "score": 10
                    },
                    {
                        "input": "6\n27",
                        "expectedOutput": "146",
                        "score": 10
                    },
                    {
                        "input": "5\n40",
                        "expectedOutput": "170",
                        "score": 10
                    },
                    {
                        "input": "9\n25",
                        "expectedOutput": "191",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE09-4",
                "code": "114TCPE09-114TCPE09-4",
                "title": "魔法學院的神秘藥水調配挑戰",
                "description": "你桌上有三瓶貼著不同數字標籤的神奇藥材，要調配傳說藥水，必須遵照「三步驟黃金法則」：\n第一步：把三瓶藥材按數字排出「最小瓶」、「中間瓶」、「最大瓶」。\n第二步：把三個數字加起來得到「總和」，若總和是偶數啟動「太陽魔法陣」，若是奇數啟動「月亮魔法陣」。\n第三步：依魔法陣念出咒語：\n太陽魔法陣：(最小瓶數字 + 中間瓶數字) × 最大瓶數字\n月亮魔法陣：(最大瓶數字 - 中間瓶數字) + 最小瓶數字\n請輸出最終的「魔力指數」。",
                "examples": [
                    {
                        "input": "2\n3\n5",
                        "output": "25",
                        "explanation": "排序後最小2、中間3、最大5，總和10是偶數，啟動太陽魔法陣：(2+3)×5=25。"
                    },
                    {
                        "input": "10\n1\n4",
                        "output": "7",
                        "explanation": "排序後最小1、中間4、最大10，總和15是奇數，啟動月亮魔法陣：(10-4)+1=7。"
                    }
                ],
                "testCases": [
                    {
                        "input": "2\n3\n5",
                        "expectedOutput": "25",
                        "score": 10
                    },
                    {
                        "input": "10\n1\n4",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "1\n2\n3",
                        "expectedOutput": "9",
                        "score": 10
                    },
                    {
                        "input": "2\n3\n4",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "10\n5\n3",
                        "expectedOutput": "80",
                        "score": 10
                    },
                    {
                        "input": "9\n4\n6",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "7\n1\n7",
                        "expectedOutput": "1",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE10",
        "title": "114-臺中市國小（競賽模式）",
        "unlockCode": "114TCPE10",
        "tasks": [
            {
                "id": "114TCPE10-1",
                "code": "114TCPE10-114TCPE10-1",
                "title": "以禮相待",
                "description": "蘇洵為避免兩個兒子蘇軾、蘇轍彼此對中發票吵架，於是訂定了他們家的規則：\n(1) 對中發票後，假如中獎金額先補貼中獎發票的花費金額。\n(2) 若還有盈餘（剩下），獎金由對中獎的人收下。\n(3) 盈餘的金額假如大於 200，要對手足以禮相待，分享 100 元。\n請輸出對中獎項的人可以拿到多少錢作為答案。",
                "examples": [
                    {
                        "input": "10\n500",
                        "output": "390 元",
                        "explanation": "先扣除花費金額 500-10=490。因為盈餘 490 大於 200，所以以禮相待，490-100=390，故輸出 390 元。"
                    },
                    {
                        "input": "400\n200",
                        "output": "無盈餘",
                        "explanation": "200-400=-200，沒有盈餘，故輸出無盈餘。"
                    },
                    {
                        "input": "100\n200",
                        "output": "100 元",
                        "explanation": "先扣除花費金額 200-100=100。因為盈餘 100 小於 200，所以直接收下獎金 100 元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "10\n500",
                        "expectedOutput": "390 元",
                        "score": 10
                    },
                    {
                        "input": "400\n200",
                        "expectedOutput": "無盈餘",
                        "score": 10
                    },
                    {
                        "input": "100\n200",
                        "expectedOutput": "100 元",
                        "score": 10
                    },
                    {
                        "input": "50\n250",
                        "expectedOutput": "200 元",
                        "score": 10
                    },
                    {
                        "input": "300\n300",
                        "expectedOutput": "無盈餘",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE10-2",
                "code": "114TCPE10-114TCPE10-2",
                "title": "統一發票",
                "description": "蘇家父子三人拿著統一發票滿懷期待的兌獎，兌獎的規則如下：\n(1) 若發票號碼末 X 碼與頭獎號碼末 X 碼相同，即得對應獎項（末 8 碼＝頭獎、末 7 碼＝二獎、末 6 碼＝三獎、末 5 碼＝四獎、末 4 碼＝五獎、末 3 碼＝六獎）。若同時符合多個碼數，以碼數最長者為準。\n(2) 若發票 8 碼與特獎或特別獎號碼完全相同，即得該獎項。\n特別獎號碼：25834483。特獎號碼：46587380。頭獎號碼（三組）：41016094、98081574、07309261。\n請輸出中獎情形。",
                "examples": [
                    {
                        "input": "47887495",
                        "output": "無中獎",
                        "explanation": "號碼末幾碼都沒有跟任何頭獎號碼相同。"
                    },
                    {
                        "input": "451232",
                        "output": "非統一編號",
                        "explanation": "輸入只有 6 碼，不符合 8 碼發票的規範。"
                    },
                    {
                        "input": "25834483",
                        "output": "特別獎",
                        "explanation": "與特別獎號碼完全相同。"
                    }
                ],
                "testCases": [
                    {
                        "input": "47887495",
                        "expectedOutput": "無中獎",
                        "score": 10
                    },
                    {
                        "input": "451232",
                        "expectedOutput": "非統一編號",
                        "score": 10
                    },
                    {
                        "input": "25834483",
                        "expectedOutput": "特別獎",
                        "score": 10
                    },
                    {
                        "input": "46587380",
                        "expectedOutput": "特獎",
                        "score": 10
                    },
                    {
                        "input": "41016094",
                        "expectedOutput": "頭獎",
                        "score": 10
                    },
                    {
                        "input": "00007261",
                        "expectedOutput": "六獎",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            },
            {
                "id": "114TCPE10-3",
                "code": "114TCPE10-114TCPE10-3",
                "title": "閃電十一人",
                "description": "小明承辦了校際足球賽，需要一套自動計分與判定系統。每一場比賽只有兩隊，且只會發生兩種事情：進球 Goal、犯規 Foul。\n規則：\n進 1 球即得 1 分。\n每犯規 3 次，該隊扣 1 分。\n扣分不會讓分數低於 0 分。\n事件代碼：GA＝A隊進球、GB＝B隊進球、FA＝A隊犯規、FB＝B隊犯規。\n請依序輸出 A 隊最後得分、B 隊最後得分、比賽結果（A Win / B Win / Draw）。",
                "examples": [
                    {
                        "input": "7\nGA\nFA\nGA\nFB\nFB\nFB\nGB",
                        "output": "2\n0\nA Win",
                        "explanation": "A 隊：2 球、1 次犯規 → 得 2 分。B 隊：1 球、3 次犯規 → 得 1-1=0 分。"
                    },
                    {
                        "input": "6\nGA\nGB\nFA\nFA\nFA\nGB",
                        "output": "0\n2\nB Win",
                        "explanation": "A 隊：1 球、3 次犯規 → 得 1-1=0 分。B 隊：2 球、0 次犯規 → 得 2 分。"
                    },
                    {
                        "input": "4\nGA\nGB\nFA\nFB",
                        "output": "1\n1\nDraw",
                        "explanation": "A 隊：1 球、1 次犯規 → 得 1 分。B 隊：1 球、1 次犯規 → 得 1 分。"
                    }
                ],
                "testCases": [
                    {
                        "input": "7\nGA\nFA\nGA\nFB\nFB\nFB\nGB",
                        "expectedOutput": "2\n0\nA Win",
                        "score": 10
                    },
                    {
                        "input": "6\nGA\nGB\nFA\nFA\nFA\nGB",
                        "expectedOutput": "0\n2\nB Win",
                        "score": 10
                    },
                    {
                        "input": "4\nGA\nGB\nFA\nFB",
                        "expectedOutput": "1\n1\nDraw",
                        "score": 10
                    },
                    {
                        "input": "9\nFA\nFA\nFA\nFA\nFA\nFA\nFA\nFA\nFA",
                        "expectedOutput": "0\n0\nDraw",
                        "score": 10
                    }
                ],
                "difficulty": "L3",
                "sb3Path": null
            },
            {
                "id": "114TCPE10-4",
                "code": "114TCPE10-114TCPE10-4",
                "title": "紅牌與黃牌",
                "description": "延續閃電十一人的基本規則（進球得分、每犯規 3 次扣 1 分、分數不低於 0），新增以下規則：\n每犯規 2 次，該隊得 1 張黃牌。\n同一隊累積 2 張黃牌，自動轉為 1 張紅牌。\n一旦出現紅牌，該隊立刻再扣 1 分（紅牌只會影響一次，不會重複扣分）。\n請依序輸出 A 隊最後得分、B 隊最後得分、比賽結果（A Win / B Win / Draw）。",
                "examples": [
                    {
                        "input": "6\nGA\nFA\nFA\nFA\nFA\nGB",
                        "output": "0\n1\nB Win",
                        "explanation": "A 隊：1 球 →+1；4 次犯規 → 扣 1 分；2 黃牌 → 1 紅牌 → 再扣 1 分；總分 1-1-1，扣到 0 為止。B 隊：1 球 → 1 分。"
                    },
                    {
                        "input": "5\nGA\nFA\nFA\nGB\nFB",
                        "output": "1\n1\nDraw",
                        "explanation": "A 隊：1 球 →+1；2 次犯規 → 1 張黃牌（不扣分）；總分 1。B 隊：1 球 →+1；1 次犯規 → 無事發生；總分 1。"
                    },
                    {
                        "input": "8\nGA\nGA\nFA\nFA\nFA\nFA\nGB\nGB",
                        "output": "0\n2\nB Win",
                        "explanation": "A 隊：2 球 →+2；4 次犯規 → 扣 1 分；2 黃牌 → 1 紅牌 → 再扣 1 分；總分扣到 0 為止。B 隊：2 球 → 2 分、0 犯規。"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\nGA\nFA\nFA\nFA\nFA\nGB",
                        "expectedOutput": "0\n1\nB Win",
                        "score": 10
                    },
                    {
                        "input": "5\nGA\nFA\nFA\nGB\nFB",
                        "expectedOutput": "1\n1\nDraw",
                        "score": 10
                    },
                    {
                        "input": "8\nGA\nGA\nFA\nFA\nFA\nFA\nGB\nGB",
                        "expectedOutput": "0\n2\nB Win",
                        "score": 10
                    },
                    {
                        "input": "9\nFA\nFA\nFA\nFA\nFA\nFA\nFA\nFA\nFA",
                        "expectedOutput": "0\n0\nDraw",
                        "score": 10
                    }
                ],
                "difficulty": "L4",
                "sb3Path": null
            },
            {
                "id": "114TCPE10-5",
                "code": "114TCPE10-114TCPE10-5",
                "title": "提前結束",
                "description": "延續紅牌與黃牌的規則，新增以下規則：\n任一隊出現 1 張紅牌，比賽立刻結束，後續事件全部忽略，輸出結果以「結束當下」為準。\n請依序輸出 A 隊最後得分、B 隊最後得分、比賽結果（A Win / B Win / Draw）。",
                "examples": [
                    {
                        "input": "7\nGA\nFA\nFA\nFA\nGB\nFA\nGB",
                        "output": "0\n1\nB Win",
                        "explanation": "第 6 個事件（FA）讓 A 隊出現紅牌，比賽立刻結束，最後一個 GB 不計。"
                    },
                    {
                        "input": "6\nGB\nFB\nFB\nFB\nFB\nGA",
                        "output": "0\n0\nDraw",
                        "explanation": "第 5 個事件（FB）讓 B 隊出現紅牌，比賽立刻結束，最後的 GA 不計。"
                    },
                    {
                        "input": "8\nGA\nGA\nFA\nFA\nFA\nFA\nGB\nGB",
                        "output": "0\n0\nDraw",
                        "explanation": "第 6 個事件（FA）讓 A 隊出現紅牌，比賽立刻結束，兩個 GB 都不計。"
                    }
                ],
                "testCases": [
                    {
                        "input": "7\nGA\nFA\nFA\nFA\nGB\nFA\nGB",
                        "expectedOutput": "0\n1\nB Win",
                        "score": 10
                    },
                    {
                        "input": "6\nGB\nFB\nFB\nFB\nFB\nGA",
                        "expectedOutput": "0\n0\nDraw",
                        "score": 10
                    },
                    {
                        "input": "8\nGA\nGA\nFA\nFA\nFA\nFA\nGB\nGB",
                        "expectedOutput": "0\n0\nDraw",
                        "score": 10
                    },
                    {
                        "input": "5\nGA\nGB\nFA\nGB\nGA",
                        "expectedOutput": "2\n2\nDraw",
                        "score": 10
                    }
                ],
                "difficulty": "L4",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE11",
        "title": "114-臺南市國小（競賽模式）",
        "unlockCode": "114TCPE11",
        "tasks": [
            {
                "id": "114TCPE11-1",
                "code": "114TCPE11-114TCPE11-1",
                "title": "偶數和",
                "description": "請設計一個程式，輸入二個正整數（由小到大），計算出二個正整數之間，所有偶數的和。",
                "examples": [
                    {
                        "input": "10\n20",
                        "output": "90",
                        "explanation": "10 至 20 間的偶數有 10、12、14、16、18、20，和為 90。"
                    },
                    {
                        "input": "31\n39",
                        "output": "140",
                        "explanation": "31 至 39 間的偶數有 32、34、36、38，和為 140。"
                    }
                ],
                "testCases": [
                    {
                        "input": "10\n20",
                        "expectedOutput": "90",
                        "score": 10
                    },
                    {
                        "input": "31\n39",
                        "expectedOutput": "140",
                        "score": 10
                    },
                    {
                        "input": "1\n20",
                        "expectedOutput": "110",
                        "score": 10
                    },
                    {
                        "input": "20\n41",
                        "expectedOutput": "330",
                        "score": 10
                    },
                    {
                        "input": "99\n111",
                        "expectedOutput": "630",
                        "score": 10
                    },
                    {
                        "input": "2\n2",
                        "expectedOutput": "2",
                        "score": 10
                    },
                    {
                        "input": "3\n3",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "100\n100",
                        "expectedOutput": "100",
                        "score": 10
                    },
                    {
                        "input": "1\n5",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "1000\n1010",
                        "expectedOutput": "6030",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE11-2",
                "code": "114TCPE11-114TCPE11-2",
                "title": "三角形",
                "description": "已知一個三角形的任意兩邊和必定大於第三邊，請寫一個程式，一次輸入三個正整數，判斷能否組成一個三角形。",
                "examples": [
                    {
                        "input": "9 6 8",
                        "output": "yes",
                        "explanation": "符合「任意兩邊和必定大於第三邊」，可以組成一個三角形。"
                    },
                    {
                        "input": "1 2 3",
                        "output": "no",
                        "explanation": "不符合「任意兩邊和必定大於第三邊」，不可以組成一個三角形。"
                    }
                ],
                "testCases": [
                    {
                        "input": "9 6 8",
                        "expectedOutput": "yes",
                        "score": 10
                    },
                    {
                        "input": "1 2 3",
                        "expectedOutput": "no",
                        "score": 10
                    },
                    {
                        "input": "10 10 8",
                        "expectedOutput": "yes",
                        "score": 10
                    },
                    {
                        "input": "30 60 100",
                        "expectedOutput": "no",
                        "score": 10
                    },
                    {
                        "input": "8 8 8",
                        "expectedOutput": "yes",
                        "score": 10
                    },
                    {
                        "input": "5 5 10",
                        "expectedOutput": "no",
                        "score": 10
                    },
                    {
                        "input": "100 2 3",
                        "expectedOutput": "no",
                        "score": 10
                    },
                    {
                        "input": "3 4 5",
                        "expectedOutput": "yes",
                        "score": 10
                    },
                    {
                        "input": "12 5 13",
                        "expectedOutput": "yes",
                        "score": 10
                    },
                    {
                        "input": "5 10 5",
                        "expectedOutput": "no",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE11-3",
                "code": "114TCPE11-114TCPE11-3",
                "title": "刮刮樂",
                "description": "小哲彩券公司推出一種六六大順的刮刮樂，每張刮刮樂上面有三個 0~9 的數字。如果出現一個數字 6，可以得到 100 元；出現二個數字 6，可以得到 200 元；出現三個數字 6，可以得到 500 元。以上三種得獎方式，只能選擇獎金最高的一種來領取。現在給你一張刮刮樂上的三個數字，請問你可以得到多少獎金。",
                "examples": [
                    {
                        "input": "666",
                        "output": "500",
                        "explanation": "出現三個數字 6，可以得到 500 元。"
                    },
                    {
                        "input": "600",
                        "output": "100",
                        "explanation": "出現一個數字 6，可以得到 100 元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "666",
                        "expectedOutput": "500",
                        "score": 10
                    },
                    {
                        "input": "600",
                        "expectedOutput": "100",
                        "score": 10
                    },
                    {
                        "input": "266",
                        "expectedOutput": "200",
                        "score": 10
                    },
                    {
                        "input": "123",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "616",
                        "expectedOutput": "200",
                        "score": 10
                    },
                    {
                        "input": "911",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "336",
                        "expectedOutput": "100",
                        "score": 10
                    },
                    {
                        "input": "060",
                        "expectedOutput": "100",
                        "score": 10
                    },
                    {
                        "input": "661",
                        "expectedOutput": "200",
                        "score": 10
                    },
                    {
                        "input": "000",
                        "expectedOutput": "0",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE12",
        "title": "114-臺北市國小（競賽模式）",
        "unlockCode": "114TCPE12",
        "tasks": [
            {
                "id": "114TCPE12-1",
                "code": "114TCPE12-114TCPE12-1",
                "title": "崔老師的出缺席紀錄表",
                "description": "崔老師用二維清單記錄一週的出席狀況：\n小明到到缺到到\n小美到缺缺到到\n說明：\n每一列是一位學生\n第一個元素是姓名\n後面五個元素代表星期一到星期五的出席狀況\n【任務】\n輸入學生姓名與出席紀錄，顯示該名學生缺席幾天\n輸出格式：小明缺席1天",
                "examples": [
                    {
                        "input": "小明到到缺到到",
                        "output": "小明缺席1天",
                        "explanation": "小明有 1 個缺"
                    },
                    {
                        "input": "小美到缺缺到到",
                        "output": "小美缺席2天",
                        "explanation": "小美有 2 個缺"
                    }
                ],
                "testCases": [
                    {
                        "input": "小明到到缺到到",
                        "expectedOutput": "小明缺席1天",
                        "score": 10
                    },
                    {
                        "input": "小美到缺缺到到",
                        "expectedOutput": "小美缺席2天",
                        "score": 10
                    },
                    {
                        "input": "阿宏到到到到到",
                        "expectedOutput": "阿宏缺席0天",
                        "score": 10
                    },
                    {
                        "input": "小安缺缺缺到缺",
                        "expectedOutput": "小安缺席4天",
                        "score": 10
                    },
                    {
                        "input": "小明缺缺缺到到",
                        "expectedOutput": "小明缺席3天",
                        "score": 10
                    },
                    {
                        "input": "大雄缺缺缺缺缺",
                        "expectedOutput": "大雄缺席5天",
                        "score": 10
                    },
                    {
                        "input": "靜香到到到到到",
                        "expectedOutput": "靜香缺席0天",
                        "score": 10
                    },
                    {
                        "input": "胖虎缺到缺到缺",
                        "expectedOutput": "胖虎缺席3天",
                        "score": 10
                    },
                    {
                        "input": "小夫到缺到缺到",
                        "expectedOutput": "小夫缺席2天",
                        "score": 10
                    },
                    {
                        "input": "王同學到到到到缺",
                        "expectedOutput": "王同學缺席1天",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE12-2",
                "code": "114TCPE12-114TCPE12-2",
                "title": "校車安全：有沒有超載？",
                "description": "每列是一台校車，第一格是車號，後面是每站上車人數，總共只會有五站。\n例如：\nA\n2 3 4 5 6\nB\n1 1 2 2 3\nC\n7 1 1 2 2\n【規則】\n每台校車總人數 > 20：要警告超載\n【任務】\n計算每一台總人數，輸出「車號+總人數」，如：A車20人\n若超過20，額外輸出：B車超載",
                "examples": [
                    {
                        "input": "A\n5 3 4 4 4\nB\n4 5 4 3 4\nC\n3 3 4 3 3",
                        "output": "A車20人\nB車20人\nC車16人",
                        "explanation": "A車總共 5+3+4+4+4 = 20人 B車總共 4+5+4+3+4 = 20人 C車總共 3+3+4+3+3 = 16人"
                    },
                    {
                        "input": "A\n5 3 2 4 6\nB\n6 6 5 5 4\nC\n4 3 2 3 4",
                        "output": "A車20人\nB車超載\nC車16人",
                        "explanation": "A車總共 20人 B車總共 26人，大於20，輸出 B車超載 C車總共 16人"
                    }
                ],
                "testCases": [
                    {
                        "input": "A\n5 3 2 4 6\nB\n6 6 5 5 4\nC\n4 3 2 3 4",
                        "expectedOutput": "A車20人\nB車超載\nC車16人",
                        "score": 10
                    },
                    {
                        "input": "A\n4 4 4 4 3\nB\n5 5 4 3 3\nC\n5 4 4 4 4",
                        "expectedOutput": "A車19人\nB車20人\nC車超載",
                        "score": 10
                    },
                    {
                        "input": "A\n3 4 4 4 4\nB\n4 4 4 4 4\nC\n5 3 4 4 3",
                        "expectedOutput": "A車19人\nB車20人\nC車19人",
                        "score": 10
                    },
                    {
                        "input": "A\n5 5 4 4 4\nB\n6 5 5 3 3\nC\n4 4 4 4 5",
                        "expectedOutput": "A車超載\nB車超載\nC車超載",
                        "score": 10
                    },
                    {
                        "input": "A\n3 4 3 4 6\nB\n4 4 4 4 3\nC\n2 6 6 4 3",
                        "expectedOutput": "A車20人\nB車19人\nC車超載",
                        "score": 10
                    },
                    {
                        "input": "A\n0 0 0 0 0\nB\n1 1 1 1 1\nC\n2 2 2 2 2",
                        "expectedOutput": "A車0人\nB車5人\nC車10人",
                        "score": 10
                    },
                    {
                        "input": "A\n4 4 4 4 4\nB\n5 5 5 5 5\nC\n6 6 6 6 6",
                        "expectedOutput": "A車20人\nB車超載\nC車超載",
                        "score": 10
                    },
                    {
                        "input": "X\n1 2 3 4 5\nY\n5 5 5 5 5\nZ\n5 5 5 5 1",
                        "expectedOutput": "X車15人\nY車超載\nZ車超載",
                        "score": 10
                    },
                    {
                        "input": "P\n10 10 1 0 0\nQ\n0 0 0 0 21\nR\n10 10 0 0 0",
                        "expectedOutput": "P車超載\nQ車超載\nR車20人",
                        "score": 10
                    },
                    {
                        "input": "M\n3 3 3 3 3\nN\n2 2 2 2 2\nO\n1 1 1 1 1",
                        "expectedOutput": "M車15人\nN車10人\nO車5人",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE12-3",
                "code": "114TCPE12-114TCPE12-3",
                "title": "成績補考機制",
                "description": "學校規定所有低於60分的成績都以60分計算。請幫老師修正所有學生的成績表。\n【任務規則】\n1. 使用者輸入一個數字，代表有N位學生\n2. 接著輸入 N行成績資料，每行代表一位學生的各科分數(以空白分隔)\n3. 請檢查每一個分數，若小於60則改成60，否則保持不變\n4. 輸出修正後的分數表",
                "examples": [
                    {
                        "input": "2\n50 80 90\n40 55 100",
                        "output": "60 80 90\n60 60 100",
                        "explanation": "50 及 40, 55 小於 60，皆修正為 60。"
                    },
                    {
                        "input": "1\n10 20 30",
                        "output": "60 60 60",
                        "explanation": "皆小於 60，修正為 60。"
                    }
                ],
                "testCases": [
                    {
                        "input": "1\n10 20 30",
                        "expectedOutput": "60 60 60",
                        "score": 10
                    },
                    {
                        "input": "2\n100 100\n59 60",
                        "expectedOutput": "100 100\n60 60",
                        "score": 10
                    },
                    {
                        "input": "3\n10 10\n80 80\n5 95",
                        "expectedOutput": "60 60\n80 80\n60 95",
                        "score": 10
                    },
                    {
                        "input": "1\n60 60 60",
                        "expectedOutput": "60 60 60",
                        "score": 10
                    },
                    {
                        "input": "2\n59 58 57\n61 62 63",
                        "expectedOutput": "60 60 60\n61 62 63",
                        "score": 10
                    },
                    {
                        "input": "1\n0 0 0 0 0",
                        "expectedOutput": "60 60 60 60 60",
                        "score": 10
                    },
                    {
                        "input": "4\n99\n100\n0\n60",
                        "expectedOutput": "99\n100\n60\n60",
                        "score": 10
                    },
                    {
                        "input": "1\n59 99",
                        "expectedOutput": "60 99",
                        "score": 10
                    },
                    {
                        "input": "2\n80 80\n40 40",
                        "expectedOutput": "80 80\n60 60",
                        "score": 10
                    },
                    {
                        "input": "3\n30\n40\n50",
                        "expectedOutput": "60\n60\n60",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE12-4",
                "code": "114TCPE12-114TCPE12-4",
                "title": "滑動平均值",
                "description": "請計算清單中連續K個數字的平均值(Moving Average)。\n【任務規則】\n1. 第一次輸入：一串數字，以空白分隔\n2. 第二次輸入：區間大小 K\n3. 請依序計算每K 個相鄰數字的平均值\n4. 例如數列 10 20 30，K=2。第一組(10+20)/2=15，第二組(20+30)/2=25。",
                "examples": [
                    {
                        "input": "10 20 30 40 50\n2",
                        "output": "15 25 35 45",
                        "explanation": "依序計算每2個相鄰數字的平均值： (10+20)/2=15 (20+30)/2=25 (30+40)/2=35 (40+50)/2=45"
                    },
                    {
                        "input": "2 4 6 8\n2",
                        "output": "3 5 7",
                        "explanation": "依序計算每2個相鄰數字的平均值。"
                    }
                ],
                "testCases": [
                    {
                        "input": "2 4 6 8\n2",
                        "expectedOutput": "3 5 7",
                        "score": 10
                    },
                    {
                        "input": "10 20 30\n3",
                        "expectedOutput": "20",
                        "score": 10
                    },
                    {
                        "input": "5 5 5 5\n1",
                        "expectedOutput": "5 5 5 5",
                        "score": 10
                    },
                    {
                        "input": "10 20 30 40 50\n2",
                        "expectedOutput": "15 25 35 45",
                        "score": 10
                    },
                    {
                        "input": "1 2 3 4 5 6\n3",
                        "expectedOutput": "2 3 4 5",
                        "score": 10
                    },
                    {
                        "input": "10 10 10 10 10\n4",
                        "expectedOutput": "10 10",
                        "score": 10
                    },
                    {
                        "input": "0 10 20 30 40\n5",
                        "expectedOutput": "20",
                        "score": 10
                    },
                    {
                        "input": "100 200 300\n2",
                        "expectedOutput": "150 250",
                        "score": 10
                    },
                    {
                        "input": "5 15 25 35\n2",
                        "expectedOutput": "10 20 30",
                        "score": 10
                    },
                    {
                        "input": "2 2 2 2 2 2 2\n7",
                        "expectedOutput": "2",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE12-5",
                "code": "114TCPE12-114TCPE12-5",
                "title": "連續字元分段顯示",
                "description": "給一個字串s，請將連續相同的字元視為一組，並依序顯示「字元+出現次數」。",
                "examples": [
                    {
                        "input": "aaabbcddd",
                        "output": "a3\nb2\nc1\nd3",
                        "explanation": "連續相同的字元分組顯示。"
                    },
                    {
                        "input": "aabcccddd",
                        "output": "a2\nb1\nc3\nd3",
                        "explanation": "連續相同的字元分組顯示。"
                    }
                ],
                "testCases": [
                    {
                        "input": "aaabbcddd",
                        "expectedOutput": "a3\nb2\nc1\nd3",
                        "score": 10
                    },
                    {
                        "input": "aabcccddd",
                        "expectedOutput": "a2\nb1\nc3\nd3",
                        "score": 10
                    },
                    {
                        "input": "abc",
                        "expectedOutput": "a1\nb1\nc1",
                        "score": 10
                    },
                    {
                        "input": "aaaaa",
                        "expectedOutput": "a5",
                        "score": 10
                    },
                    {
                        "input": "aabbcc",
                        "expectedOutput": "a2\nb2\nc2",
                        "score": 10
                    },
                    {
                        "input": "xxyyzz",
                        "expectedOutput": "x2\ny2\nz2",
                        "score": 10
                    },
                    {
                        "input": "mississippi",
                        "expectedOutput": "m1\ni1\ns2\ni1\ns2\ni1\np2\ni1",
                        "score": 10
                    },
                    {
                        "input": "hello",
                        "expectedOutput": "h1\ne1\nl2\no1",
                        "score": 10
                    },
                    {
                        "input": "wwwwwxxxxxyyyyyzzzzz",
                        "expectedOutput": "w5\nx5\ny5\nz5",
                        "score": 10
                    },
                    {
                        "input": "z",
                        "expectedOutput": "z1",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE12-6",
                "code": "114TCPE12-114TCPE12-6",
                "title": "移除指定字元後輸出新字串",
                "description": "給一個字串s與一個字元 target，請用迴圈移除所有 target，並輸出新字串。",
                "examples": [
                    {
                        "input": "banana\na",
                        "output": "bnn",
                        "explanation": "移除字串中的 a。"
                    },
                    {
                        "input": "roblox\no",
                        "output": "rblx",
                        "explanation": "移除字串中的 o。"
                    }
                ],
                "testCases": [
                    {
                        "input": "banana\na",
                        "expectedOutput": "bnn",
                        "score": 10
                    },
                    {
                        "input": "roblox\no",
                        "expectedOutput": "rblx",
                        "score": 10
                    },
                    {
                        "input": "apple\np",
                        "expectedOutput": "ale",
                        "score": 10
                    },
                    {
                        "input": "hello\nl",
                        "expectedOutput": "heo",
                        "score": 10
                    },
                    {
                        "input": "mississippi\ns",
                        "expectedOutput": "miiippi",
                        "score": 10
                    },
                    {
                        "input": "programming\ng",
                        "expectedOutput": "prorammin",
                        "score": 10
                    },
                    {
                        "input": "abc\nd",
                        "expectedOutput": "abc",
                        "score": 10
                    },
                    {
                        "input": "abcdef\nc",
                        "expectedOutput": "abdef",
                        "score": 10
                    },
                    {
                        "input": "xyzxyz\ny",
                        "expectedOutput": "xzxz",
                        "score": 10
                    },
                    {
                        "input": "google\no",
                        "expectedOutput": "ggle",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE13",
        "title": "114-臺東縣國小（競賽模式）",
        "unlockCode": "114TCPE13",
        "tasks": [
            {
                "id": "114TCPE13-1",
                "code": "114TCPE13-114TCPE13-1",
                "title": "奇緣蛋糕特賣",
                "description": "所有蛋糕原價皆為300元，每筆訂單運費為80元。請根據顧客購買的蛋糕數量，計算出最終應支付的總金額。\n促銷活動規則：\n1. 蛋糕折扣(根據購買個數N)\n• 1~5 個：9折優惠\n• 6~10 個：8折優惠\n• 11~15 個：7折優惠\n• 16以上：6折優惠\n2. 運費規則，若折扣後滿1200元，再享受免運優惠。\n請設計一個程式讀入購買蛋糕數量，然後根據促銷活動規則，計算出最終應支付的總金額。",
                "examples": [
                    {
                        "input": "4",
                        "output": "1160",
                        "explanation": "4*300*0.9=1080 1080+80=1160"
                    },
                    {
                        "input": "17",
                        "output": "3060",
                        "explanation": "17*300*0.6=3060 3060+0=3060"
                    }
                ],
                "testCases": [
                    {
                        "input": "3",
                        "expectedOutput": "890",
                        "score": 10
                    },
                    {
                        "input": "8",
                        "expectedOutput": "1920",
                        "score": 10
                    },
                    {
                        "input": "12",
                        "expectedOutput": "2520",
                        "score": 10
                    },
                    {
                        "input": "17",
                        "expectedOutput": "3060",
                        "score": 10
                    },
                    {
                        "input": "2",
                        "expectedOutput": "620",
                        "score": 10
                    },
                    {
                        "input": "1",
                        "expectedOutput": "350",
                        "score": 10
                    },
                    {
                        "input": "5",
                        "expectedOutput": "1350",
                        "score": 10
                    },
                    {
                        "input": "6",
                        "expectedOutput": "1440",
                        "score": 10
                    },
                    {
                        "input": "10",
                        "expectedOutput": "2400",
                        "score": 10
                    },
                    {
                        "input": "11",
                        "expectedOutput": "2310",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE13-2",
                "code": "114TCPE13-114TCPE13-2",
                "title": "健康小管家",
                "description": "身體質量指數(BMI)是一種常用的衡量指標，用於評估一個人的體重是否在健康的範圍內。它根據身高和體重計算得出，是國際上衡量肥胖程度的標準之一。\nBMI估算公式如下：\nBMI=體重(kg)/身高(m*m)\n計算範例\n身高(165cm)體重(45kg)\nBMI=45/(1.65*1.65)=16.52 (取小數點後一位)為16.5\n程式計算出 BMI 數值(取小數點後一位)後，會用這個標準來分類：\n• 小於18.5：體重過輕(Underweight)\n• 18.5到24.9：正常範圍(Normal range)\n• 25.0到29.9：體重過重(Overweight)\n• 30.0到34.9：輕度肥胖(Obesity Class I)\n• 35.0到39.9：中度肥胖(Obesity Class II)\n• 40.0以上：重度肥胖(Obesity Class III)\n請設計一個程式讀入身高與體重，然後根據BMI分類等級，計算出BMI值及BMI 分類等級。",
                "examples": [
                    {
                        "input": "165\n45",
                        "output": "16.5 體重過輕(Underweight)",
                        "explanation": "BMI=45/(1.65*1.65)=16.5 (取小數點後一位) 16.5 小於18.5 輸出體重過輕"
                    },
                    {
                        "input": "180\n85",
                        "output": "26.2 體重過重(Overweight)",
                        "explanation": "BMI=85/(1.8*1.8)=26.2 (取小數點後一位) 26.2在25.0到29.9輸出體重過重"
                    }
                ],
                "testCases": [
                    {
                        "input": "165\n45",
                        "expectedOutput": "16.5 體重過輕(Underweight)",
                        "score": 10
                    },
                    {
                        "input": "170\n60",
                        "expectedOutput": "20.8 正常範圍(Normal range)",
                        "score": 10
                    },
                    {
                        "input": "180\n85",
                        "expectedOutput": "26.2 體重過重(Overweight)",
                        "score": 10
                    },
                    {
                        "input": "168\n90",
                        "expectedOutput": "31.9 輕度肥胖(Obesity Class I)",
                        "score": 10
                    },
                    {
                        "input": "160\n120",
                        "expectedOutput": "46.9 重度肥胖(Obesity Class III)",
                        "score": 10
                    },
                    {
                        "input": "150\n80",
                        "expectedOutput": "35.6 中度肥胖(Obesity Class II)",
                        "score": 10
                    },
                    {
                        "input": "175\n75",
                        "expectedOutput": "24.5 正常範圍(Normal range)",
                        "score": 10
                    },
                    {
                        "input": "180\n95",
                        "expectedOutput": "29.3 體重過重(Overweight)",
                        "score": 10
                    },
                    {
                        "input": "170\n50",
                        "expectedOutput": "17.3 體重過輕(Underweight)",
                        "score": 10
                    },
                    {
                        "input": "170\n120",
                        "expectedOutput": "41.5 重度肥胖(Obesity Class III)",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE13-3",
                "code": "114TCPE13-114TCPE13-3",
                "title": "鋼琴小天才計分挑戰",
                "description": "在一年一度的「鋼琴小天才大賽」中，選手們都準備好了精彩的演奏。為了讓比賽結果公平公正，評審團決定採用一套特別的計分方式！\n比賽規則：\n• 比賽聘請了7位專業評審，他們會給每位選手一個1分到10分的分數。\n• 為了避免有評審給分太高或太低，影響比賽的公平性，最終計算總成績時，會將這7個分數中最高的1個分數和最低的1個分數都扣除(不計算)。\n• 選手的最終總成績就是剩下那5位評審給的分數總和。\n請你設計一個電腦程式，來幫助裁判計算每一位選手的最終總成績。你需要輸入7位評審給的7個分數(順序可以很亂)，然後輸出選手的最終總成績。",
                "examples": [
                    {
                        "input": "8\n9\n7\n9\n8\n10\n7",
                        "output": "41",
                        "explanation": "最高分10最低分7 7個成績總和扣除(最高及最低) 8+9+7+9+8=41"
                    },
                    {
                        "input": "1.5\n2.5\n3.5\n4.5\n5.5\n6.5\n7.5",
                        "output": "22.5",
                        "explanation": "最高分7.5 最低分1.5 7個成績總和扣除(最高及最低) 2.5+3.5+4.5+5.5+6.5=22.5"
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n6\n6\n6\n6\n6 6",
                        "expectedOutput": "30",
                        "score": 10
                    },
                    {
                        "input": "7\n8\n9\n8\n7\n8\n9",
                        "expectedOutput": "40",
                        "score": 10
                    },
                    {
                        "input": "9\n9.1\n9.2\n9.3\n9.4\n9.5 9.6",
                        "expectedOutput": "46.5",
                        "score": 10
                    },
                    {
                        "input": "10\n5\n7\n8\n10\n9 6",
                        "expectedOutput": "40",
                        "score": 10
                    },
                    {
                        "input": "4\n8\n4\n8\n6\n6 7",
                        "expectedOutput": "31",
                        "score": 10
                    },
                    {
                        "input": "1\n2\n3\n4\n5\n6 7",
                        "expectedOutput": "20",
                        "score": 10
                    },
                    {
                        "input": "10\n10\n10\n10\n10\n10 10",
                        "expectedOutput": "50",
                        "score": 10
                    },
                    {
                        "input": "0\n0\n0\n0\n0\n0 0",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "9.5\n8.5\n7.5\n9\n8\n10 6",
                        "expectedOutput": "42.5",
                        "score": 10
                    },
                    {
                        "input": "2.2\n3.3\n4.4\n5.5\n6.6\n7.7 8.8",
                        "expectedOutput": "27.5",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            },
            {
                "id": "114TCPE13-4",
                "code": "114TCPE13-114TCPE13-4",
                "title": "幸運號碼大樂透",
                "description": "在「玩具王國」裡，大家都在玩一種叫做「幸運數字樂透」的小遊戲！這個遊戲很簡單，數字的範圍是1到99。\n• 每位玩家可以從1到99中，挑選5個不同的號碼作為自己的彩券。\n• 每期開獎，玩具王國會公布10個幸運號碼。\n玩家的中獎金額取決於他選的5個號碼中，有多少個號碼對中了當期的10個幸運號碼。\n本期的幸運號碼是：7、24、31、42、45、56、63、78、80、99。\n中獎獎金規則：\n• 5個：100,000 (頭獎)\n• 4個：10,000 (貳獎)\n• 3個：2,000 (參獎)\n• 2個：500 (肆獎)\n• 1個：200 (伍獎)\n• 0個：0 (沒中獎)\n請你設計一個電腦程式，來幫助玩家快速計算他們中了多少獎金。你需要輸入玩家選擇的5個號碼，然後輸出他能猜中號碼的個數及獲得的中獎金額。",
                "examples": [
                    {
                        "input": "7\n18\n29\n31\n35",
                        "output": "猜中2個號碼,獎金500元",
                        "explanation": "2個號碼相同，獎金500元"
                    },
                    {
                        "input": "1\n2\n3\n4\n5",
                        "output": "猜中0個號碼,獎金0元",
                        "explanation": "0個號碼相同，獎金0元"
                    }
                ],
                "testCases": [
                    {
                        "input": "7 24 31 42 45",
                        "expectedOutput": "猜中5個號碼,獎金100000元",
                        "score": 10
                    },
                    {
                        "input": "1 2 3 4 5",
                        "expectedOutput": "猜中0個號碼,獎金0元",
                        "score": 10
                    },
                    {
                        "input": "7 24 1 2 3",
                        "expectedOutput": "猜中2個號碼,獎金500元",
                        "score": 10
                    },
                    {
                        "input": "42 56 63 78 80",
                        "expectedOutput": "猜中5個號碼,獎金100000元",
                        "score": 10
                    },
                    {
                        "input": "7 24 31 42 10",
                        "expectedOutput": "猜中4個號碼,獎金10000元",
                        "score": 10
                    },
                    {
                        "input": "7 2 3 4 5",
                        "expectedOutput": "猜中1個號碼,獎金200元",
                        "score": 10
                    },
                    {
                        "input": "56 63 78 80 1",
                        "expectedOutput": "猜中4個號碼,獎金10000元",
                        "score": 10
                    },
                    {
                        "input": "56 63 78 2 3",
                        "expectedOutput": "猜中3個號碼,獎金2000元",
                        "score": 10
                    },
                    {
                        "input": "99 2 3 4 5",
                        "expectedOutput": "猜中1個號碼,獎金200元",
                        "score": 10
                    },
                    {
                        "input": "7 24 31 2 3",
                        "expectedOutput": "猜中3個號碼,獎金2000元",
                        "score": 10
                    }
                ],
                "difficulty": "L1",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE14",
        "title": "114-基隆市國小（競賽模式）",
        "unlockCode": "114TCPE14",
        "tasks": [
            {
                "id": "114TCPE14-1",
                "code": "114TCPE14-114TCPE14-1",
                "title": "1.魔法寶石的盤點(易)",
                "description": "在遙遠的魔法王國裡,每一位見習魔法師都有一個專屬的寶石袋,裡面裝滿了各式各樣擁有不同魔力的「數字寶石」。 每一顆寶石上都刻著一個獨特的編號,代表它的屬性(例如:1號是火、2號是水、5號是雷電...等等)。 \n今天,大法師想要考驗大家的細心程度。 他會給你一個任務,請你打開你的寶石袋,檢查裡面所有的寶石,然後告訴大法師,某個「特定編號」的寶石,你總共收集到了幾顆? \n請你寫一個程式,幫忙自動計算出正確的數量,這樣就不會數錯而被大法師處罰囉!",
                "examples": [
                    {
                        "input": "10\n1 5 3 2 5 8 5 9 1 5\n5",
                        "output": "4",
                        "explanation": ""
                    },
                    {
                        "input": "4\n6 12 31 24\n2",
                        "output": "0",
                        "explanation": ""
                    }
                ],
                "testCases": [
                    {
                        "input": "10\n1 5 3 2 5 8 5 9 1 5\n5",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "4\n6 12 31 24\n2",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "6\n10 20 30 40 50 60\n20",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "5\n1 1 1 1 5\n8",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "5\n29 37 468 10 0\n7",
                        "expectedOutput": "0",
                        "score": 10
                    },
                    {
                        "input": "7\n3 3 5 3 5 5 3\n3",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "1\n100\n100",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "10\n0 5 0 2 0 8 0 0 1 0\n0",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "12\n1 2 3 4 5 6 7 8 9 10 11 12\n7",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "15\n2 4 6 8 10 2 4 6 8 10 2 4 6 8 10\n2",
                        "expectedOutput": "3",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE14-2",
                "code": "114TCPE14-114TCPE14-2",
                "title": "2.遊戲績分排行榜(易)",
                "description": "您正在開發一款簡單的益智遊戲。 每次遊戲結束後,系統會記錄玩家的最終得分。 為了激勵玩家,您需要編寫一個程式來快速計算並顯示當前所有紀錄中的前三名最高得分。 如果總得分記錄數少於三筆,則輸出所有可用的得分。",
                "examples": [
                    {
                        "input": "6\n50 420 80 500 410 210",
                        "output": "500 420 410",
                        "explanation": ""
                    },
                    {
                        "input": "1\n99",
                        "output": "99",
                        "explanation": ""
                    }
                ],
                "testCases": [
                    {
                        "input": "6\n50 420 80 500 410 210",
                        "expectedOutput": "500 420 410",
                        "score": 10
                    },
                    {
                        "input": "1\n99",
                        "expectedOutput": "99",
                        "score": 10
                    },
                    {
                        "input": "2\n777 666",
                        "expectedOutput": "777 666",
                        "score": 10
                    },
                    {
                        "input": "0",
                        "expectedOutput": "目前沒有績分",
                        "score": 10
                    },
                    {
                        "input": "4\n75 75 75 60",
                        "expectedOutput": "75 75 75",
                        "score": 10
                    },
                    {
                        "input": "3\n18 520 18",
                        "expectedOutput": "520 18 18",
                        "score": 10
                    },
                    {
                        "input": "5\n10 20 30 40 50",
                        "expectedOutput": "50 40 30",
                        "score": 10
                    },
                    {
                        "input": "3\n100 100 100",
                        "expectedOutput": "100 100 100",
                        "score": 10
                    },
                    {
                        "input": "7\n1 2 3 4 5 6 7",
                        "expectedOutput": "7 6 5",
                        "score": 10
                    },
                    {
                        "input": "8\n0 0 0 0 0 0 0 0",
                        "expectedOutput": "0 0 0",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE14-3",
                "code": "114TCPE14-114TCPE14-3",
                "title": "3.隊伍的旋轉舞步(中)",
                "description": "一年一度的運動會到了,六年級的同學們正在練習大會舞。 教練設計了一個特別的「波浪變換」隊形。 一開始,N位同學排成一直排,每個人身上都有一個號碼牌。 當教練吹哨子並喊出一個數字 K時,隊伍就要進行「向右旋轉移動」K格。 \n所謂的「向右旋轉移動」規則是這樣的:\n站在最右邊(排尾)的同學,要跑到最左邊(排頭)去。 \n如果教練喊 K=1,代表所有人都往右走一步,而最後一位同學跑到第一個位置。 \n如果教練喊 K=2,代表這個動作連續做兩次。 \n舉個例子,如果隊伍是[1,2,3,4,5],教練喊「向右移2格」:\n1.第一次移動後變成:[5,1,2,3,4] (5號跑去排頭)\n2.第二次移動後變成:[4,5,1,2,3] (4號跑去排頭)\n請你寫一個程式,根據輸入的同學初始隊伍順序,以及教練喊出的移動步數 K,算出最後大家站的位置順序是如何?\n注意: 教練有時候太興奮,喊出的步數K可能會比隊伍的人數還要多喔!",
                "examples": [
                    {
                        "input": "5\n10 20 30 40 50\n1",
                        "output": "50 10 20 30 40",
                        "explanation": ""
                    },
                    {
                        "input": "5\n10 20 30 40 50\n2",
                        "output": "40 50 10 20 30",
                        "explanation": ""
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n10 20 30 40 50\n1",
                        "expectedOutput": "50 10 20 30 40",
                        "score": 10
                    },
                    {
                        "input": "5\n10 20 30 40 50\n2",
                        "expectedOutput": "40 50 10 20 30",
                        "score": 10
                    },
                    {
                        "input": "3\n1 2 3\n3",
                        "expectedOutput": "1 2 3",
                        "score": 10
                    },
                    {
                        "input": "4\n1 2 3 4\n5",
                        "expectedOutput": "4 1 2 3",
                        "score": 10
                    },
                    {
                        "input": "5\n1 2 3 4 5\n0",
                        "expectedOutput": "1 2 3 4 5",
                        "score": 10
                    },
                    {
                        "input": "2\n99 88\n101",
                        "expectedOutput": "88 99",
                        "score": 10
                    },
                    {
                        "input": "6\n7 7 7 7 7 7\n3",
                        "expectedOutput": "7 7 7 7 7 7",
                        "score": 10
                    },
                    {
                        "input": "7\n1 2 3 4 5 6 7\n4",
                        "expectedOutput": "4 5 6 7 1 2 3",
                        "score": 10
                    },
                    {
                        "input": "10\n0 1 2 3 4 5 6 7 8 9\n15",
                        "expectedOutput": "5 6 7 8 9 0 1 2 3 4",
                        "score": 10
                    },
                    {
                        "input": "4\n1 3 5 7\n6",
                        "expectedOutput": "5 7 1 3",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE14-4",
                "code": "114TCPE14-114TCPE14-4",
                "title": "4.找出連續整數中所缺失的數字(中)",
                "description": "有一位剛學數字的小朋友,他喜歡在紙上書寫連續數字,但是在書寫的過程中經常會有數字被他遺漏,例如3、4、7、10,表示他從3寫到10,但中間遺漏了5、6、8、9等4個數字。 請你當小老師,設計程式找出這位小朋友在連續數字當中缺失的數字。",
                "examples": [
                    {
                        "input": "3\n1 3 5",
                        "output": "2 4",
                        "explanation": ""
                    },
                    {
                        "input": "5\n7 9 15 18 19",
                        "output": "8 10 11 12 13 14 16 17",
                        "explanation": ""
                    }
                ],
                "testCases": [
                    {
                        "input": "3\n1 3 5",
                        "expectedOutput": "2 4",
                        "score": 10
                    },
                    {
                        "input": "5\n7 9 15 18 19",
                        "expectedOutput": "8 10 11 12 13 14 16 17",
                        "score": 10
                    },
                    {
                        "input": "3\n100 101 102",
                        "expectedOutput": "無缺失",
                        "score": 10
                    },
                    {
                        "input": "4\n3 4 4 6",
                        "expectedOutput": "5",
                        "score": 10
                    },
                    {
                        "input": "3\n90 87 85",
                        "expectedOutput": "86 88 89",
                        "score": 10
                    },
                    {
                        "input": "4\n10 3 7 4",
                        "expectedOutput": "5 6 8 9",
                        "score": 10
                    },
                    {
                        "input": "1\n5",
                        "expectedOutput": "無缺失",
                        "score": 10
                    },
                    {
                        "input": "5\n10 10 10 10 10",
                        "expectedOutput": "無缺失",
                        "score": 10
                    },
                    {
                        "input": "2\n0 2",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "6\n200 198 196 195 194 199",
                        "expectedOutput": "197",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE14-5",
                "code": "114TCPE14-114TCPE14-5",
                "title": "5.數學王國的連續階梯(難)",
                "description": "在數學王國裡,有一座通往天空的神秘城堡。 城堡的大門緊閉著,門上只有一個巨大的數字螢幕,顯示著一個目標數字 N。 \n傳說中,想要打開這扇門,必須找到一組或多組「連續的正整數階梯」,這些階梯上的數字加起來的總和,必須剛好等於門上的數字N。 \n例如,如果門上的數字是15,你可以找到以下3組階梯:\n1.12345(因為1+2+3+4+5=15)\n2.456(因為4+5+6=15)\n3.78(因為 7+8=15)\n請注意,階梯至少要由兩個數字組成(不能只有一個數字),而且必須是連續的正整數(例如123...)。 \n請你寫一個程式,幫助冒險者列出所有能夠湊出目標數字的連續正整數組合。",
                "examples": [
                    {
                        "input": "15",
                        "output": "1+2+3+4+5=15\n4+5+6=15\n7+8=15",
                        "explanation": ""
                    },
                    {
                        "input": "10",
                        "output": "1+2+3+4=10",
                        "explanation": ""
                    }
                ],
                "testCases": [
                    {
                        "input": "15",
                        "expectedOutput": "1+2+3+4+5=15\n4+5+6=15\n7+8=15",
                        "score": 10
                    },
                    {
                        "input": "10",
                        "expectedOutput": "1+2+3+4=10",
                        "score": 10
                    },
                    {
                        "input": "3",
                        "expectedOutput": "1+2=3",
                        "score": 10
                    },
                    {
                        "input": "9",
                        "expectedOutput": "2+3+4=9\n4+5=9",
                        "score": 10
                    },
                    {
                        "input": "100",
                        "expectedOutput": "9+10+11+12+13+14+15+16=100\n18+19+20+21+22=100",
                        "score": 10
                    },
                    {
                        "input": "2",
                        "expectedOutput": "No",
                        "score": 10
                    },
                    {
                        "input": "4",
                        "expectedOutput": "No",
                        "score": 10
                    },
                    {
                        "input": "21",
                        "expectedOutput": "1+2+3+4+5+6=21\n6+7+8=21\n10+11=21",
                        "score": 10
                    },
                    {
                        "input": "27",
                        "expectedOutput": "2+3+4+5+6+7=27\n8+9+10=27\n13+14=27",
                        "score": 10
                    },
                    {
                        "input": "35",
                        "expectedOutput": "2+3+4+5+6+7+8=35\n5+6+7+8+9=35\n17+18=35",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE14-6",
                "code": "114TCPE14-114TCPE14-6",
                "title": "6.平均分配物品(難)",
                "description": "陳老師有N種不同種類及不同數量的文具,所有的文具都要平分給小朋友,讓每位小朋友分到的每一種文具的數量要一樣多,按照這樣的分法,請問老師準備的N種文具最多可以分給幾位小朋友?\n例如:陳老師有3種文具,分別是鉛筆12枝、橡皮擦36個、筆記本15本,所有的文具都分完,最多可以分給3個小朋友,每個人有鉛筆4枝、橡皮擦12個、筆記本5本",
                "examples": [
                    {
                        "input": "2\n15 45",
                        "output": "15",
                        "explanation": ""
                    },
                    {
                        "input": "3\n24 16 12",
                        "output": "4",
                        "explanation": ""
                    }
                ],
                "testCases": [
                    {
                        "input": "2\n15 45",
                        "expectedOutput": "15",
                        "score": 10
                    },
                    {
                        "input": "3\n24 16 12",
                        "expectedOutput": "4",
                        "score": 10
                    },
                    {
                        "input": "2\n2 9",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "1\n8",
                        "expectedOutput": "8",
                        "score": 10
                    },
                    {
                        "input": "3\n100 200 1",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "3\n6 6 6",
                        "expectedOutput": "6",
                        "score": 10
                    },
                    {
                        "input": "4\n12 24 36 48",
                        "expectedOutput": "12",
                        "score": 10
                    },
                    {
                        "input": "5\n10 20 30 40 50",
                        "expectedOutput": "10",
                        "score": 10
                    },
                    {
                        "input": "2\n1000 500",
                        "expectedOutput": "500",
                        "score": 10
                    },
                    {
                        "input": "3\n21 14 35",
                        "expectedOutput": "7",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE15",
        "title": "114-桃園市國小（競賽模式）",
        "unlockCode": "114TCPE15",
        "tasks": [
            {
                "id": "114TCPE15-1",
                "code": "114TCPE15-114TCPE15-1",
                "title": "1-班服投票",
                "description": "可愛國小601班要製作紀念班服，本次班服設計有三個款式，分別編號為1、2、3。班上同學可以自由投票，參與投票者可在選票上寫上一個自己所選擇的班服款式編號，統計後選出投票數最高的款式。\n請設計程式：\n先計算每款班服設計的得票數(依1→3順序)，顯示出最後獲得最高票數的班服款式編碼，若有票數一樣的狀況，輸出：請重新投票。\n【輸入格式】\n第一行：一個整數N，代表投票數。\n第二行：N個整數，介於1~3，代表每張選票的班服設計編號，用空格隔開。\n【輸出格式】\n如果有明確的最高票，輸出一個整數，票數最高的班服編號。如果有最高票數相同情形，輸出請重新投票。",
                "examples": [
                    {
                        "input": "8\n1 2 2 3 2 1 3 2",
                        "output": "2",
                        "explanation": "代表得票數最高的班服設計編號為2"
                    },
                    {
                        "input": "6\n1 2 3 1 2 3",
                        "output": "請重新投票",
                        "explanation": "代表班服設計投票結果最高票有同票數情形需要重新投票"
                    },
                    {
                        "input": "5\n3 3 1 2 3",
                        "output": "3",
                        "explanation": "代表得票數最高的班服設計編號為3"
                    }
                ],
                "testCases": [
                    {
                        "input": "8\n1 2 2 3 2 1 3 2",
                        "expectedOutput": "2",
                        "score": 10
                    },
                    {
                        "input": "6\n1 2 3 1 2 3",
                        "expectedOutput": "請重新投票",
                        "score": 10
                    },
                    {
                        "input": "5\n3 3 1 2 3",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "1\n1",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "10\n1 1 1 1 1 2 2 3 3 3",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "10\n3 3 3 3 3 1 1 1 2 2",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "4\n1 1 2 2",
                        "expectedOutput": "請重新投票",
                        "score": 10
                    },
                    {
                        "input": "3\n1 2 3",
                        "expectedOutput": "請重新投票",
                        "score": 10
                    },
                    {
                        "input": "15\n2 2 2 2 2 2 2 1 1 1 3 3 3 3 3",
                        "expectedOutput": "2",
                        "score": 10
                    },
                    {
                        "input": "9\n1 1 1 2 2 2 3 3 3",
                        "expectedOutput": "請重新投票",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE15-2",
                "code": "114TCPE15-114TCPE15-2",
                "title": "2-棒球場的座位",
                "description": "棒球場總共有9000個座位，座位區分為為三大區，每區共有90排：一、三大區為普通區各有2,250席，每排各有25人。第二大區為搖滾區有4,500席，每排各有50人。座位編號按照大區順序，由第一區開始由左至右、由前至後，再接續第二、三大區。\n小明想要去看棒球賽為台灣隊加油，請你寫一個程式，輸入座位號碼，就可以輸出在哪一區，哪一排的第幾個位置，讓小明可以在眾多的座位中，快速找到自己的座位\n【輸入格式】\n單行輸入座位號碼。\n【輸出格式】\n輸出三個整數，分別代表：區、排、第幾個位置 (數字之間以半形空格分隔)。",
                "examples": [
                    {
                        "input": "1881",
                        "output": "1 76 6",
                        "explanation": "座位 1881\n在第1區 第76排 由左數第6個位置"
                    },
                    {
                        "input": "3045",
                        "output": "2 16 45",
                        "explanation": "座位 3045\n在第2區 第16排 由左數第45個位置"
                    },
                    {
                        "input": "8241",
                        "output": "3 60 16",
                        "explanation": "座位 8241\n在第3區 第60排 由左數第16個位置"
                    }
                ],
                "testCases": [
                    {
                        "input": "1881",
                        "expectedOutput": "1 76 6",
                        "score": 10
                    },
                    {
                        "input": "3045",
                        "expectedOutput": "2 16 45",
                        "score": 10
                    },
                    {
                        "input": "8241",
                        "expectedOutput": "3 60 16",
                        "score": 10
                    },
                    {
                        "input": "1",
                        "expectedOutput": "1 1 1",
                        "score": 10
                    },
                    {
                        "input": "25",
                        "expectedOutput": "1 1 25",
                        "score": 10
                    },
                    {
                        "input": "2250",
                        "expectedOutput": "1 90 25",
                        "score": 10
                    },
                    {
                        "input": "2251",
                        "expectedOutput": "2 1 1",
                        "score": 10
                    },
                    {
                        "input": "6750",
                        "expectedOutput": "2 90 50",
                        "score": 10
                    },
                    {
                        "input": "6751",
                        "expectedOutput": "3 1 1",
                        "score": 10
                    },
                    {
                        "input": "9000",
                        "expectedOutput": "3 90 25",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE15-3",
                "code": "114TCPE15-114TCPE15-3",
                "title": "3-挑選喜歡的午餐區間",
                "description": "小虎是學校裡最愛挑午餐的學生，他最喜歡的餐點有好幾種，用字母表示，例如 A=雞肉、B = 豬排、C = 義大利麵………………，學校提供了 N 天的午餐菜單，每天的主餐用字母表示。小虎想挑出連續 K 天的午餐，讓他最愛的餐點出現最多次，享受「最滿意的一段午餐時光」。如果出現有好幾段連續 K 天的午餐出現次數相同，小虎會選擇最早出現的一段。\n請幫小虎找出：\n1. 他最愛餐點在這段期間出現的次數\n2. 這段期間的起始天數(假設第一天為 1)\n【輸入格式】\n第1行：整數 N (天數)\n第2行：長度為 N 的字串菜單，每個字母表示一天的主餐，用空格隔開\n第3行：K (連續天數)\n第4行：小虎最愛餐點，可能有多個字母，例如 A C，用空格隔開\n【輸出格式】\n第1行：分別為最愛餐點出現次數與起始天數，兩個整數，中間以空格隔開",
                "examples": [
                    {
                        "input": "7\nA B A C A B A\n3\nA",
                        "output": "2 1",
                        "explanation": "第1行代表7天\n第2行代表這7天的主餐\n第3行代表連續3天\n第4行代表喜愛的餐點為A\n輸出：最愛餐點出現2次數，起始天數為1"
                    },
                    {
                        "input": "10\nA B C D A B C C B A\n4\nA C",
                        "output": "3 5",
                        "explanation": "第1行代表10天\n第2行代表這10天的主餐\n第3行代表連續4天\n第4行代表喜愛的餐點為A與C\n輸出：最愛餐點出現3次數，起始天數為5"
                    },
                    {
                        "input": "5\nA B C D E\n2\nA B C D E",
                        "output": "2 1",
                        "explanation": "第1行代表5天\n第2行代表這5天的主餐\n第3行代表連續2天\n第4行代表喜愛的餐點為A、B、C、D、E\n輸出：最愛餐點出現2次數，起始天數為1"
                    }
                ],
                "testCases": [
                    {
                        "input": "7\nA B A C A B A\n3\nA",
                        "expectedOutput": "2 1",
                        "score": 10
                    },
                    {
                        "input": "10\nA B C D A B C C B A\n4\nA C",
                        "expectedOutput": "3 5",
                        "score": 10
                    },
                    {
                        "input": "5\nA B C D E\n2\nA B C D E",
                        "expectedOutput": "2 1",
                        "score": 10
                    },
                    {
                        "input": "6\nX Y X Y X Y\n2\nX",
                        "expectedOutput": "1 1",
                        "score": 10
                    },
                    {
                        "input": "6\nX Y Z X Y Z\n3\nX Z",
                        "expectedOutput": "2 1",
                        "score": 10
                    },
                    {
                        "input": "5\nA A A A A\n2\nB",
                        "expectedOutput": "0 1",
                        "score": 10
                    },
                    {
                        "input": "8\nM N O P M N O P\n4\nM O",
                        "expectedOutput": "2 1",
                        "score": 10
                    },
                    {
                        "input": "1\nA\n1\nA",
                        "expectedOutput": "1 1",
                        "score": 10
                    },
                    {
                        "input": "10\nB B B A A A B B B B\n3\nA",
                        "expectedOutput": "3 4",
                        "score": 10
                    },
                    {
                        "input": "7\nC A B C A B C\n3\nC A",
                        "expectedOutput": "2 1",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE15-4",
                "code": "114TCPE15-114TCPE15-4",
                "title": "4-綠能任務挑戰",
                "description": "為了推動淨零城市，玩家要在地圖中收集綠能點數(正值)與應對污染事件(負值)。地圖共有 N 個地點，每個地點代表一種環境事件，可能「吸收碳」(正值)、「排放碳」(負值)，或「無變化」(0)。玩家從第1個地點出發(初始能量為0，不算第1個地點的能量值)，每次依據骰子的點數移動，並在抵達新地點時計入能量變化。若移動過程中的總能量超過50，會觸發「能源過載」，總能量會維持在50。若移動過程中總能量下降至0(或是小於0)，會觸發「環境危機」，系統會自動啟動緊急裝置補助，把總能量設為5。地圖是環狀的，當超過第N格時會回到第1格繼續走。\n請計算所有移動執行完畢後的最終能量值，並輸出過程中曾達到的最高能量值。\n【輸入格式】\n第1行：整數N，代表地圖的地點數量\n第2行：N 個整數，依序代表第1格到第N格的能量變化值，中間以空格隔開\n第3行：整數 M，代表骰子的次數\n第4行：M 個整數，代表每次骰到的點數，中間以空格隔開\n【輸出格式】\n第1行代表最終能量值與最高能量值，中間以空格隔開",
                "examples": [
                    {
                        "input": "4\n25 10 30 -5\n4\n1 1 2 1",
                        "output": "50 50",
                        "explanation": "第1行代表有4個地點數量\n第2行代表這4個地點數量的能量變化值\n第3行代表可以丟4次骰子\n第4行代表每次骰到的點數\n輸出：最終能量值50與最高能量值50"
                    },
                    {
                        "input": "5\n10 -5 0 20 -10\n3\n1 2 3",
                        "output": "20 25",
                        "explanation": "第1行代表有5個地點數量\n第2行代表這5個地點數量的能量變化值\n第3行代表可以丟3次骰子\n第4行代表每次骰到的點數\n輸出：最終能量值20與最高能量值25"
                    },
                    {
                        "input": "5\n-10 -20 10 0 30\n5\n1 1 1 1 1",
                        "output": "35 45",
                        "explanation": "第1行代表有5個地點數量\n第2行代表這5個地點數量的能量變化值\n第3行代表可以丟5次骰子\n第4行代表每次骰到的點數\n輸出：最終能量值35與最高能量值45"
                    }
                ],
                "testCases": [
                    {
                        "input": "4\n25 10 30 -5\n4\n1 1 2 1",
                        "expectedOutput": "50 50",
                        "score": 10
                    },
                    {
                        "input": "5\n10 -5 0 20 -10\n3\n1 2 3",
                        "expectedOutput": "20 25",
                        "score": 10
                    },
                    {
                        "input": "5\n-10 -20 10 0 30\n5\n1 1 1 1 1",
                        "expectedOutput": "35 45",
                        "score": 10
                    },
                    {
                        "input": "3\n10 20 30\n2\n1 1",
                        "expectedOutput": "50 50",
                        "score": 10
                    },
                    {
                        "input": "4\n-50 -50 -50 -50\n4\n1 1 1 1",
                        "expectedOutput": "5 5",
                        "score": 10
                    },
                    {
                        "input": "5\n10 10 10 10 10\n6\n1 1 1 1 1 1",
                        "expectedOutput": "50 50",
                        "score": 10
                    },
                    {
                        "input": "6\n0 0 0 0 0 0\n3\n2 2 2",
                        "expectedOutput": "5 5",
                        "score": 10
                    },
                    {
                        "input": "5\n5 5 5 5 5\n10\n1 1 1 1 1 1 1 1 1 1",
                        "expectedOutput": "50 50",
                        "score": 10
                    },
                    {
                        "input": "4\n50 -100 50 -100\n4\n1 1 1 1",
                        "expectedOutput": "50 50",
                        "score": 10
                    },
                    {
                        "input": "5\n20 20 -30 40 10\n4\n1 1 1 1",
                        "expectedOutput": "50 50",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            }
        ]
    },
    {
        "code": "114TCPE16",
        "title": "114-雲林縣國小（競賽模式）",
        "unlockCode": "114TCPE16",
        "tasks": [
            {
                "id": "114TCPE16-1",
                "code": "114TCPE16-114TCPE16-1",
                "title": "1-圓柱體積計算",
                "description": "小明正在學習幾何，他知道圓柱體積的計算是測量一個立體形狀容積的重要方法。為了驗證計算結果，他想寫一個程式來計算圓柱體的體積。\n圓柱體積的計算公式為：圓柱體積 = 半徑 × 半徑 × 3.14 × 高\n【輸入格式】\n程式依序輸入\n1. 輸入圓柱體的底面半徑\n2. 輸入圓柱體的高度\n【輸出格式】\n程式會根據公式計算並輸出圓柱體體積。",
                "examples": [
                    {
                        "input": "3\n5",
                        "output": "141.3",
                        "explanation": "底面半徑：3\n高度：5\n體積 = 3 * 3 * 3.14 * 5 = 141.3"
                    }
                ],
                "testCases": [
                    {
                        "input": "2\n10",
                        "expectedOutput": "125.6",
                        "score": 10
                    },
                    {
                        "input": "3\n15",
                        "expectedOutput": "423.9",
                        "score": 10
                    },
                    {
                        "input": "1\n1",
                        "expectedOutput": "3.14",
                        "score": 10
                    },
                    {
                        "input": "10\n10",
                        "expectedOutput": "3140",
                        "score": 10
                    },
                    {
                        "input": "5\n20",
                        "expectedOutput": "1570",
                        "score": 10
                    },
                    {
                        "input": "20\n5",
                        "expectedOutput": "6280",
                        "score": 10
                    },
                    {
                        "input": "1.5\n4",
                        "expectedOutput": "28.26",
                        "score": 10
                    },
                    {
                        "input": "0.5\n10",
                        "expectedOutput": "7.85",
                        "score": 10
                    },
                    {
                        "input": "100\n1",
                        "expectedOutput": "31400",
                        "score": 10
                    },
                    {
                        "input": "8\n8",
                        "expectedOutput": "1607.68",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE16-2",
                "code": "114TCPE16-114TCPE16-2",
                "title": "2-身體質量指數計算與健康判斷",
                "description": "小康非常注重身體健康，他知道身體質量指數(BMI)是一個常用的健康指標。為了方便計算，他想寫一個程式來快速算出自己的 BMI 值，並能判斷肥胖程度是標準、過輕還是過重。\nBMI 的計算公式為： BMI = 體重(公斤) / [身高(公尺) × 身高(公尺)]\n肥胖狀態判斷標準：\n• BMI &lt; 18.5 → 過輕\n• 18.5 ≤ BMI &lt; 24 → 標準\n• BMI ≥ 24 → 過重\n【輸入格式】\n程式依序輸入\n1. 輸入體重(公斤)\n2. 輸入身高(公尺)\n【輸出格式】\n程式會根據公式計算並輸出 BMI 值 (通常建議四捨五入到小數點後兩位)，並判斷並輸出對應的肥胖狀態。(以空白分隔)",
                "examples": [
                    {
                        "input": "60\n1.65",
                        "output": "22.04 標準",
                        "explanation": "體重(公斤)：60\n身高(公尺)：1.65\nBMI = 60 / (1.65 * 1.65) = 22.04，標準"
                    }
                ],
                "testCases": [
                    {
                        "input": "88\n1.8",
                        "expectedOutput": "27.16 過重",
                        "score": 10
                    },
                    {
                        "input": "35\n1.65",
                        "expectedOutput": "12.86 過輕",
                        "score": 10
                    },
                    {
                        "input": "65\n1.7",
                        "expectedOutput": "22.49 標準",
                        "score": 10
                    },
                    {
                        "input": "75\n1.75",
                        "expectedOutput": "24.49 過重",
                        "score": 10
                    },
                    {
                        "input": "50\n1.6",
                        "expectedOutput": "19.53 標準",
                        "score": 10
                    },
                    {
                        "input": "40\n1.5",
                        "expectedOutput": "17.78 過輕",
                        "score": 10
                    },
                    {
                        "input": "100\n2.0",
                        "expectedOutput": "25 過重",
                        "score": 10
                    },
                    {
                        "input": "55\n1.75",
                        "expectedOutput": "17.96 過輕",
                        "score": 10
                    },
                    {
                        "input": "70\n1.75",
                        "expectedOutput": "22.86 標準",
                        "score": 10
                    },
                    {
                        "input": "80\n1.8",
                        "expectedOutput": "24.69 過重",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE16-3",
                "code": "114TCPE16-114TCPE16-3",
                "title": "3-房間木地板的購買計算",
                "description": "雲雲是一位室內設計師，想要為客戶把房間的地板換成木地板。他挑選的木地板規格是：長 60 公分、寬 20 公分。已知每包木地板有 20 片，且木地板可以切割拼鋪。客戶房間地板的長、寬皆不相同是以公尺計算，雲雲需要計算「最少要購買幾包貼片」才能鋪滿整個房間。(註：一定要買整包的數量，不可以買 3.5 包)\n【輸入格式】\n程式依序輸入：\n1. 輸入房間的長度(公尺)\n2. 輸入房間的寬度(公尺)\n【輸出格式】\n程式會計算並輸出雲雲最少需要購買的木地板包數。",
                "examples": [
                    {
                        "input": "3\n4",
                        "output": "5",
                        "explanation": "房間的長度(公尺)：3\n房間的寬度(公尺)：4\n面積 = 300 * 400 = 120000 平方公分\n每包面積 = 60 * 20 * 20 = 24000 平方公分\n120000 / 24000 = 5 包。"
                    }
                ],
                "testCases": [
                    {
                        "input": "5\n3.5",
                        "expectedOutput": "8",
                        "score": 10
                    },
                    {
                        "input": "7\n4",
                        "expectedOutput": "12",
                        "score": 10
                    },
                    {
                        "input": "6\n4",
                        "expectedOutput": "10",
                        "score": 10
                    },
                    {
                        "input": "4\n4",
                        "expectedOutput": "7",
                        "score": 10
                    },
                    {
                        "input": "1\n2.4",
                        "expectedOutput": "1",
                        "score": 10
                    },
                    {
                        "input": "10\n10",
                        "expectedOutput": "42",
                        "score": 10
                    },
                    {
                        "input": "2.5\n2.5",
                        "expectedOutput": "3",
                        "score": 10
                    },
                    {
                        "input": "3.6\n4.8",
                        "expectedOutput": "8",
                        "score": 10
                    },
                    {
                        "input": "8\n5",
                        "expectedOutput": "17",
                        "score": 10
                    },
                    {
                        "input": "5.5\n4.5",
                        "expectedOutput": "11",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE16-4",
                "code": "114TCPE16-114TCPE16-4",
                "title": "4-美味餐車三明治多重折扣與利潤計算",
                "description": "美味餐車販售三明治。老闆決定讓三明治的成本可以彈性輸入。餐車制定售價的方式保持不變：三明治的售價是成本再加 50% 來制定。(售價 = 成本 * 1.5)\n為了促銷，餐車設有兩段折扣：每日上午 11 點過後(包含 11 點)實施打八折優惠，而上午 12 點過後(包含 12 點)則會實施更低的打六折優惠。\n老闆想知道，在不同折扣時段，三明治是否仍有利潤，以及具體賺或是賠多少錢。(有利潤就是賺錢；無利潤就是賠錢)\n【輸入格式】\n程式依序輸入\n1. 輸入三明治的成本\n2. 輸入折扣時段 (如 11、12)\n【輸出格式】\n程式會計算並輸出不同時段有無利潤及賺或賠的金額。例如：「有利潤賺4元」或「無利潤賠X元」。",
                "examples": [
                    {
                        "input": "20\n11",
                        "output": "有利潤賺4元",
                        "explanation": "三明治的成本：20\n折扣時段：11\n售價 = 20 * 1.5 = 30\n11點打八折 = 30 * 0.8 = 24\n利潤 = 24 - 20 = 4\n故輸出有利潤賺4元。"
                    }
                ],
                "testCases": [
                    {
                        "input": "40\n11",
                        "expectedOutput": "有利潤賺8元",
                        "score": 10
                    },
                    {
                        "input": "35\n12",
                        "expectedOutput": "無利潤賠3.5元",
                        "score": 10
                    },
                    {
                        "input": "50\n10",
                        "expectedOutput": "有利潤賺25元",
                        "score": 10
                    },
                    {
                        "input": "100\n12",
                        "expectedOutput": "無利潤賠10元",
                        "score": 10
                    },
                    {
                        "input": "30\n11",
                        "expectedOutput": "有利潤賺6元",
                        "score": 10
                    },
                    {
                        "input": "60\n12",
                        "expectedOutput": "無利潤賠6元",
                        "score": 10
                    },
                    {
                        "input": "25\n11",
                        "expectedOutput": "有利潤賺5元",
                        "score": 10
                    },
                    {
                        "input": "80\n9",
                        "expectedOutput": "有利潤賺40元",
                        "score": 10
                    },
                    {
                        "input": "45\n12",
                        "expectedOutput": "無利潤賠4.5元",
                        "score": 10
                    },
                    {
                        "input": "10\n11",
                        "expectedOutput": "有利潤賺2元",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
            },
            {
                "id": "114TCPE16-5",
                "code": "114TCPE16-114TCPE16-5",
                "title": "5-電費分段計價",
                "description": "為了鼓勵節約用電，電力公司實施分段計價(或稱累進費率)制度，電費會依照不同使用量有不同的費率。小蔡想了解他家用電量對應的總電費，因此需要一個程式來進行計算。\n假設分段計價標準如下(僅為範例)：\n1. 0~120度：每度電費 1.63 元。\n2. 121~330度：超出120度至330度的部分電費率為每度 2.38 元。\n3. 331度以上：超出330度的部分電費率為每度 3.52 元。\n例如：\n用電度數為290度，則\n前120度：120(度) × 1.63(元) = 195.6元\n121度至290度：170(度) × 2.38(元) = 404.6元\n總電費 = 195.6 + 404.6 = 600.2，四捨五入至整數，故輸出總電費 600。\n【輸入格式】\n程式輸入該期總用電度數。\n【輸出格式】\n程式會根據分段計價標準計算總電費並輸出計算後的總電費(四捨五入取整數)。",
                "examples": [
                    {
                        "input": "100",
                        "output": "163",
                        "explanation": "該期總用電度數 100。\n100 * 1.63 = 163。"
                    }
                ],
                "testCases": [
                    {
                        "input": "350",
                        "expectedOutput": "766",
                        "score": 10
                    },
                    {
                        "input": "240",
                        "expectedOutput": "481",
                        "score": 10
                    },
                    {
                        "input": "120",
                        "expectedOutput": "196",
                        "score": 10
                    },
                    {
                        "input": "330",
                        "expectedOutput": "695",
                        "score": 10
                    },
                    {
                        "input": "50",
                        "expectedOutput": "82",
                        "score": 10
                    },
                    {
                        "input": "121",
                        "expectedOutput": "198",
                        "score": 10
                    },
                    {
                        "input": "331",
                        "expectedOutput": "699",
                        "score": 10
                    },
                    {
                        "input": "500",
                        "expectedOutput": "1294",
                        "score": 10
                    },
                    {
                        "input": "1000",
                        "expectedOutput": "3054",
                        "score": 10
                    },
                    {
                        "input": "0",
                        "expectedOutput": "0",
                        "score": 10
                    }
                ],
                "difficulty": "L2",
                "sb3Path": null
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
