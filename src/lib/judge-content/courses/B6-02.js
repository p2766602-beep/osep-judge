/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/B6-02對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "B6-02",
    "title": "K17 排序演算法",
    "tier": "t1",
    "unlockCode": "B6-02-SortAlgo",
    "tasks": [
        {
            "id": "SORT01-003",
            "code": "B6-02-SORT01-003",
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
                    "score": 10
                },
                {
                    "input": "4\n1 2 3 4",
                    "expectedOutput": "1 2 3 4",
                    "score": 10
                },
                {
                    "input": "4\n4 3 2 1",
                    "expectedOutput": "3 2 1 4",
                    "score": 10
                },
                {
                    "input": "6\n2 9 1 8 3 7",
                    "expectedOutput": "2 1 8 3 7 9",
                    "score": 10
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": "m0/B6-02-SortAlgo/SORT01-003.sb3"
        },
        {
            "id": "seclect-004",
            "code": "B6-02-seclect-004",
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
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": "m0/B6-02-SortAlgo/seclect-004.sb3"
        },
        {
            "id": "SORT01-004",
            "code": "B6-02-SORT01-004",
            "title": "【延伸】泡泡排序升冪",
            "description": "給定 N 個整數，請使用泡泡排序法將它們由小到大輸出：從左到右比較相鄰的兩個數字，左邊比較大就交換，這樣掃描一回合；重複 N−1 回合就能全部排好。",
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
                    "score": 10
                },
                {
                    "input": "4\n1 2 3 4",
                    "expectedOutput": "1 2 3 4",
                    "score": 10
                },
                {
                    "input": "4\n4 3 2 1",
                    "expectedOutput": "1 2 3 4",
                    "score": 10
                },
                {
                    "input": "6\n-1 5 0 -3 2 2",
                    "expectedOutput": "-3 -1 0 2 2 5",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": "m0/B6-02-SortAlgo/SORT01-004.sb3"
        },
        {
            "id": "seclect-005",
            "code": "B6-02-seclect-005",
            "title": "【延伸】完整選擇排序",
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
            "sb3Path": "m0/B6-02-SortAlgo/seclect-005.sb3"
        },
        {
            "id": "SORT01-006",
            "code": "B6-02-SORT01-006",
            "title": "【延伸】排序後的中間值",
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
                    "score": 10
                },
                {
                    "input": "3\n10 2 8",
                    "expectedOutput": "8",
                    "score": 10
                },
                {
                    "input": "7\n4 4 1 9 2 8 6",
                    "expectedOutput": "4",
                    "score": 10
                },
                {
                    "input": "1\n99",
                    "expectedOutput": "99",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": "m0/B6-02-SortAlgo/SORT01-006.sb3"
        }
    ]
};
