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
