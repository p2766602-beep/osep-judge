/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/A2-02對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "A2-02",
    "title": "A04 數學規則應用",
    "tier": "v2",
    "unlockCode": "A2-02-MathRules",
    "tasks": [
        {
            "id": "MATH01-004",
            "code": "A2-02-MATH01-004",
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
                    "score": 10
                },
                {
                    "input": "7 13",
                    "expectedOutput": "1",
                    "score": 10
                },
                {
                    "input": "24 36",
                    "expectedOutput": "12",
                    "score": 10
                },
                {
                    "input": "100 25",
                    "expectedOutput": "25",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        },
        {
            "id": "TYTN-03",
            "code": "A2-02-TYTN-03",
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
            "sb3Path": null
        },
        {
            "id": "MATH01-007",
            "code": "A2-02-MATH01-007",
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
                    "score": 10
                },
                {
                    "input": "0",
                    "expectedOutput": "0",
                    "score": 10
                },
                {
                    "input": "1000",
                    "expectedOutput": "1",
                    "score": 10
                },
                {
                    "input": "9876",
                    "expectedOutput": "6789",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        }
    ]
};
