/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/M1-09對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "M1-09",
    "title": "數學規則：因數倍數質數",
    "tier": "t1",
    "mode": "learning",
    "unlockCode": "M1-09-MathBasics",
    "tasks": [
        {
            "id": "MATH01-001",
            "code": "M1-09-MATH01-001",
            "title": "倍數判斷",
            "description": "給定兩個正整數 A 與 B，請判斷 A 是否為 B 的倍數。",
            "inputDescription": "輸入兩個正整數 A 與 B。",
            "outputDescription": "若 A 是 B 的倍數，輸出 YES；否則輸出 NO。",
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
                    "score": 10
                },
                {
                    "input": "25 6",
                    "expectedOutput": "NO",
                    "score": 10
                },
                {
                    "input": "100 10",
                    "expectedOutput": "YES",
                    "score": 10
                },
                {
                    "input": "7 9",
                    "expectedOutput": "NO",
                    "score": 10
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
            "inputDescription": "輸入一個正整數 N。",
            "outputDescription": "輸出一個整數，代表 N 的正因數個數。",
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
                    "score": 10
                },
                {
                    "input": "1",
                    "expectedOutput": "1",
                    "score": 10
                },
                {
                    "input": "16",
                    "expectedOutput": "5",
                    "score": 10
                },
                {
                    "input": "17",
                    "expectedOutput": "2",
                    "score": 10
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
            "inputDescription": "輸入一個非負整數 N。",
            "outputDescription": "輸出一個整數，代表 N 的位數和。",
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
                    "score": 10
                },
                {
                    "input": "0",
                    "expectedOutput": "0",
                    "score": 10
                },
                {
                    "input": "1008",
                    "expectedOutput": "9",
                    "score": 10
                },
                {
                    "input": "9999",
                    "expectedOutput": "36",
                    "score": 10
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
            "inputDescription": "第一個整數為 N，接著輸入 N 個整數。",
            "outputDescription": "輸出一個整數，代表可以被 3 整除的數量。",
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
                    "score": 10
                },
                {
                    "input": "4\n1 2 4 5",
                    "expectedOutput": "0",
                    "score": 10
                },
                {
                    "input": "5\n0 3 6 9 12",
                    "expectedOutput": "5",
                    "score": 10
                },
                {
                    "input": "7\n-3 -2 0 4 6 8 10",
                    "expectedOutput": "3",
                    "score": 10
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
            "inputDescription": "輸入一個正整數 N。",
            "outputDescription": "若 N 是質數，輸出 PRIME；否則輸出 NOT。",
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
                    "score": 10
                },
                {
                    "input": "1",
                    "expectedOutput": "NOT",
                    "score": 10
                },
                {
                    "input": "12",
                    "expectedOutput": "NOT",
                    "score": 10
                },
                {
                    "input": "2",
                    "expectedOutput": "PRIME",
                    "score": 10
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
            "inputDescription": "輸入兩個正整數 A 與 B。",
            "outputDescription": "輸出一個整數，代表 A 與 B 的最大公因數。",
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
            "sb3Path": "m0/M1-09-MathBasics/MATH01-004.sb3"
        },
        {
            "id": "MATH01-005",
            "code": "M1-09-MATH01-005",
            "title": "最小公倍數",
            "description": "給定兩個正整數 A 與 B，請找出它們的最小公倍數。",
            "inputDescription": "輸入兩個正整數 A 與 B。",
            "outputDescription": "輸出一個整數，代表 A 與 B 的最小公倍數。",
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
                    "score": 10
                },
                {
                    "input": "7 13",
                    "expectedOutput": "91",
                    "score": 10
                },
                {
                    "input": "4 6",
                    "expectedOutput": "12",
                    "score": 10
                },
                {
                    "input": "20 5",
                    "expectedOutput": "20",
                    "score": 10
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
            "inputDescription": "輸入一個非負整數 N。",
            "outputDescription": "輸出一個整數，代表反轉後的數字。",
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
            "sb3Path": "m0/M1-09-MathBasics/MATH01-007.sb3"
        }
    ]
};
