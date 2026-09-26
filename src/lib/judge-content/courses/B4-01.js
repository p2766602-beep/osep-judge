/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/B4-01對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "B4-01",
    "title": "K12 字串存取與走訪",
    "tier": "t1",
    "unlockCode": "B4-01-StringAccess",
    "tasks": [
        {
            "id": "STR01-001",
            "code": "B4-01-STR01-001",
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
                    "score": 10
                },
                {
                    "input": "a",
                    "expectedOutput": "1",
                    "score": 10
                },
                {
                    "input": "Scratch",
                    "expectedOutput": "7",
                    "score": 10
                },
                {
                    "input": "YDWS2026",
                    "expectedOutput": "8",
                    "score": 10
                }
            ],
            "difficulty": "L1",
            "difficultyLabel": "L1｜基礎",
            "sb3Path": "m0/B4-01-StringAccess/STR01-001.sb3"
        },
        {
            "id": "STR01-002",
            "code": "B4-01-STR01-002",
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
                    "score": 10
                },
                {
                    "input": "a",
                    "expectedOutput": "a a",
                    "score": 10
                },
                {
                    "input": "Blockly",
                    "expectedOutput": "B y",
                    "score": 10
                },
                {
                    "input": "12345",
                    "expectedOutput": "1 5",
                    "score": 10
                }
            ],
            "difficulty": "L1",
            "difficultyLabel": "L1｜基礎",
            "sb3Path": "m0/B4-01-StringAccess/STR01-002.sb3"
        },
        {
            "id": "STR01-003",
            "code": "B4-01-STR01-003",
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
                    "score": 10
                },
                {
                    "input": "abcde\n1",
                    "expectedOutput": "a",
                    "score": 10
                },
                {
                    "input": "abcde\n5",
                    "expectedOutput": "e",
                    "score": 10
                },
                {
                    "input": "SmartRing\n6",
                    "expectedOutput": "R",
                    "score": 10
                }
            ],
            "difficulty": "L1",
            "difficultyLabel": "L1｜基礎",
            "sb3Path": "m0/B4-01-StringAccess/STR01-003.sb3"
        },
        {
            "id": "JSS01-D03",
            "code": "B4-01-JSS01-D03",
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
            "sb3Path": "m0/B4-01-StringAccess/JSS01-D03.sb3"
        },
        {
            "id": "STR01-005",
            "code": "B4-01-STR01-005",
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
                    "score": 10
                },
                {
                    "input": "a",
                    "expectedOutput": "a",
                    "score": 10
                },
                {
                    "input": "level",
                    "expectedOutput": "level",
                    "score": 10
                },
                {
                    "input": "Smart",
                    "expectedOutput": "tramS",
                    "score": 10
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": "m0/B4-01-StringAccess/STR01-005.sb3"
        }
    ]
};
