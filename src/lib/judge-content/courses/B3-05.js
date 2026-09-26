/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/B3-05對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "B3-05",
    "title": "K11 相鄰元素比較",
    "tier": "t1",
    "unlockCode": "B3-05-Adjacent",
    "tasks": [
        {
            "id": "IDX01-006",
            "code": "B3-05-IDX01-006",
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
                    "score": 10
                },
                {
                    "input": "5\n1 2 3 4 5",
                    "expectedOutput": "0",
                    "score": 10
                },
                {
                    "input": "4\n7 7 8 8",
                    "expectedOutput": "1",
                    "score": 10
                },
                {
                    "input": "3\n9 8 8",
                    "expectedOutput": "2",
                    "score": 10
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": "m0/B3-05-Adjacent/IDX01-006.sb3"
        },
        {
            "id": "STA01-008",
            "code": "B3-05-STA01-008",
            "title": "【延伸】相鄰變化統計",
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
                    "score": 10
                },
                {
                    "input": "4\n1 2 3 4",
                    "expectedOutput": "3 0 0",
                    "score": 10
                },
                {
                    "input": "5\n9 7 7 6 6",
                    "expectedOutput": "0 2 2",
                    "score": 10
                },
                {
                    "input": "3\n5 5 5",
                    "expectedOutput": "0 0 2",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": "m0/B3-05-Adjacent/STA01-008.sb3"
        },
        {
            "id": "CNT01-023",
            "code": "B3-05-CNT01-023",
            "title": "【延伸】相鄰差值最大",
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
                    "score": 10
                },
                {
                    "input": "2\n100 40",
                    "expectedOutput": "60",
                    "score": 10
                },
                {
                    "input": "6\n1 2 3 4 5 6",
                    "expectedOutput": "1",
                    "score": 10
                },
                {
                    "input": "4\n10 30 5 25",
                    "expectedOutput": "25",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": "m0/B3-05-Adjacent/CNT01-023.sb3"
        }
    ]
};
