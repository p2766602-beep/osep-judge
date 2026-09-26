/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/B1-03對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "B1-03",
    "title": "K03 條件判斷：二選一",
    "tier": "t0",
    "unlockCode": "B1-03-IfElse",
    "tasks": [
        {
            "id": "BSC01-001",
            "code": "B1-03-BSC01-001",
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
                    "score": 10
                },
                {
                    "input": "60",
                    "expectedOutput": "PASS",
                    "score": 10
                },
                {
                    "input": "59",
                    "expectedOutput": "FAIL",
                    "score": 10
                },
                {
                    "input": "0",
                    "expectedOutput": "FAIL",
                    "score": 10
                }
            ],
            "difficulty": "L1",
            "difficultyLabel": "L1｜基礎",
            "sb3Path": "m0/B1-03-IfElse/BSC01-001.sb3"
        },
        {
            "id": "BSC01-003",
            "code": "B1-03-BSC01-003",
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
                    "score": 10
                },
                {
                    "input": "9",
                    "expectedOutput": "ODD",
                    "score": 10
                },
                {
                    "input": "0",
                    "expectedOutput": "EVEN",
                    "score": 10
                },
                {
                    "input": "101",
                    "expectedOutput": "ODD",
                    "score": 10
                }
            ],
            "difficulty": "L1",
            "difficultyLabel": "L1｜基礎",
            "sb3Path": "m0/B1-03-IfElse/BSC01-003.sb3"
        },
        {
            "id": "BSC01-009",
            "code": "B1-03-BSC01-009",
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
                    "score": 10
                },
                {
                    "input": "1000",
                    "expectedOutput": "1000",
                    "score": 10
                },
                {
                    "input": "1200",
                    "expectedOutput": "1200",
                    "score": 10
                },
                {
                    "input": "80",
                    "expectedOutput": "160",
                    "score": 10
                }
            ],
            "difficulty": "L1",
            "difficultyLabel": "L1｜基礎",
            "sb3Path": "m0/B1-03-IfElse/BSC01-009.sb3"
        }
    ]
};
