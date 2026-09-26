/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/B3-04對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "B3-04",
    "title": "K10 位置追蹤與線性搜尋",
    "tier": "t1",
    "unlockCode": "B3-04-LinearSearch",
    "tasks": [
        {
            "id": "seclect-003",
            "code": "B3-04-seclect-003",
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
            "sb3Path": "m0/B3-04-LinearSearch/seclect-003.sb3"
        },
        {
            "id": "IDX01-003",
            "code": "B3-04-IDX01-003",
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
                    "score": 10
                },
                {
                    "input": "5\n1 2 3 4 5\n9",
                    "expectedOutput": "0",
                    "score": 10
                },
                {
                    "input": "4\n7 7 7 7\n7",
                    "expectedOutput": "4",
                    "score": 10
                },
                {
                    "input": "3\n-1 -2 -3\n-1",
                    "expectedOutput": "1",
                    "score": 10
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": "m0/B3-04-LinearSearch/IDX01-003.sb3"
        },
        {
            "id": "IDX01-002",
            "code": "B3-04-IDX01-002",
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
                    "score": 10
                },
                {
                    "input": "5\n1 2 3 4 5\n9",
                    "expectedOutput": "0",
                    "score": 10
                },
                {
                    "input": "4\n7 7 7 7\n7",
                    "expectedOutput": "1",
                    "score": 10
                },
                {
                    "input": "3\n-1 -2 -3\n-3",
                    "expectedOutput": "3",
                    "score": 10
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": "m0/B3-04-LinearSearch/IDX01-002.sb3"
        },
        {
            "id": "CNT01-022",
            "code": "B3-04-CNT01-022",
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
                    "score": 10
                },
                {
                    "input": "4\n70 50 80 90",
                    "expectedOutput": "1",
                    "score": 10
                },
                {
                    "input": "6\n10 20 30 40 50 60",
                    "expectedOutput": "6",
                    "score": 10
                },
                {
                    "input": "3\n59 61 62",
                    "expectedOutput": "2",
                    "score": 10
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": "m0/B3-04-LinearSearch/CNT01-022.sb3"
        },
        {
            "id": "IDX01-008",
            "code": "B3-04-IDX01-008",
            "title": "【延伸】兩個目標的距離",
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
                    "score": 10
                },
                {
                    "input": "5\n1 2 3 4 5\n1 5",
                    "expectedOutput": "4",
                    "score": 10
                },
                {
                    "input": "4\n7 8 7 8\n8 7",
                    "expectedOutput": "1",
                    "score": 10
                },
                {
                    "input": "3\n-1 -2 -3\n-3 -1",
                    "expectedOutput": "2",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": "m0/B3-04-LinearSearch/IDX01-008.sb3"
        }
    ]
};
