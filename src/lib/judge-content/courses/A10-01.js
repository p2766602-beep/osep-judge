/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/A10-01對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "A10-01",
    "title": "A18 前綴和",
    "tier": "v10",
    "unlockCode": "A10-01-PrefixSum",
    "tasks": [
        {
            "id": "M3-02-01",
            "code": "A10-01-M3-02-01",
            "title": "募款進度累積表",
            "description": "園遊會義賣活動記錄每日募款金額，請你算出每天結束時的累積募款總額（前綴和）。\n\n第一行輸入N，代表有N天\n\n第二行輸入N個數字，代表每天的募款金額\n\n輸出N個數字，代表第1天到第i天為止的累積總額，空白分隔。",
            "examples": [
                {
                    "input": "4\n100 200 150 50",
                    "output": "100 300 450 500",
                    "explanation": "第1天100，第2天100+200=300，第3天300+150=450，第4天450+50=500"
                }
            ],
            "testCases": [
                {
                    "input": "4\n100 200 150 50",
                    "expectedOutput": "100 300 450 500",
                    "score": 25
                },
                {
                    "input": "3\n10 20 30",
                    "expectedOutput": "10 30 60",
                    "score": 25
                },
                {
                    "input": "1\n99",
                    "expectedOutput": "99",
                    "score": 25
                },
                {
                    "input": "5\n5 5 5 5 5",
                    "expectedOutput": "5 10 15 20 25",
                    "score": 25
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": null
        },
        {
            "id": "M3-02-02",
            "code": "A10-01-M3-02-02",
            "title": "區間募款查詢",
            "description": "延續募款記錄，這次要查詢「第L天到第R天」（含頭尾）總共募到多少錢。\n\n第一行輸入N\n\n第二行輸入N個每日募款金額\n\n第三行輸入L跟R（空白分隔）\n\n輸出第L天到第R天的募款總額。",
            "examples": [
                {
                    "input": "5\n100 200 150 50 300\n2 4",
                    "output": "400",
                    "explanation": "第2~4天：200+150+50=400"
                }
            ],
            "testCases": [
                {
                    "input": "5\n100 200 150 50 300\n2 4",
                    "expectedOutput": "400",
                    "score": 25
                },
                {
                    "input": "5\n100 200 150 50 300\n1 5",
                    "expectedOutput": "800",
                    "score": 25
                },
                {
                    "input": "5\n100 200 150 50 300\n3 3",
                    "expectedOutput": "150",
                    "score": 25
                },
                {
                    "input": "4\n10 20 30 40\n1 1",
                    "expectedOutput": "10",
                    "score": 25
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        },
        {
            "id": "M3-02-04",
            "code": "A10-01-M3-02-04",
            "title": "區間平均氣溫是否達標",
            "description": "記錄N天的氣溫，請你判斷第L天到第R天（含頭尾）的平均氣溫是否達到門檻溫度threshold（大於等於threshold輸出「達標」，否則輸出「未達標」）。平均值用整數除法計算（無條件捨去）。\n\n第一行輸入N\n\n第二行輸入N個氣溫數字\n\n第三行輸入L R threshold（空白分隔）\n\n輸出「達標」或「未達標」。",
            "examples": [
                {
                    "input": "5\n20 22 25 18 30\n1 3 22",
                    "output": "達標",
                    "explanation": "第1~3天平均=(20+22+25)/3=22（整數除法），22>=22所以達標"
                }
            ],
            "testCases": [
                {
                    "input": "5\n20 22 25 18 30\n1 3 22",
                    "expectedOutput": "達標",
                    "score": 25
                },
                {
                    "input": "5\n20 22 25 18 30\n3 4 25",
                    "expectedOutput": "未達標",
                    "score": 25
                },
                {
                    "input": "5\n20 22 25 18 30\n1 5 20",
                    "expectedOutput": "達標",
                    "score": 25
                },
                {
                    "input": "3\n10 10 10\n1 3 11",
                    "expectedOutput": "未達標",
                    "score": 25
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        },
        {
            "id": "M3-02-05",
            "code": "A10-01-M3-02-05",
            "title": "扣除單日的區間總和",
            "description": "給定L天到R天的募款範圍，但其中有一天exclude要扣掉不列入計算（exclude保證在L~R範圍內），請你算出扣除那天之後的區間總額。\n\n第一行輸入N\n\n第二行輸入N個每日募款金額\n\n第三行輸入L R exclude（空白分隔）\n\n輸出扣除exclude那天後的區間總額。",
            "examples": [
                {
                    "input": "5\n100 200 150 50 300\n1 4 2",
                    "output": "300",
                    "explanation": "1~4天總額100+200+150+50=500，扣掉第2天200，剩300"
                }
            ],
            "testCases": [
                {
                    "input": "5\n100 200 150 50 300\n1 4 2",
                    "expectedOutput": "300",
                    "score": 25
                },
                {
                    "input": "5\n100 200 150 50 300\n2 5 4",
                    "expectedOutput": "650",
                    "score": 25
                },
                {
                    "input": "4\n10 20 30 40\n1 4 1",
                    "expectedOutput": "90",
                    "score": 25
                },
                {
                    "input": "3\n5 5 5\n1 3 2",
                    "expectedOutput": "10",
                    "score": 25
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        },
        {
            "id": "M3-02-06",
            "code": "A10-01-M3-02-06",
            "title": "找出總和等於目標值的區間",
            "description": "記錄N天的活動點數，請你找出一組連續區間（第L天到第R天，含頭尾）的點數總和剛好等於目標值target，輸出這組區間的L R（空白分隔）；找不到輸出「0 0」。（測試資料保證答案若存在必定唯一）",
            "examples": [
                {
                    "input": "5\n4 2 7 1 3\n9",
                    "output": "2 3",
                    "explanation": "第2~3天：2+7=9"
                }
            ],
            "testCases": [
                {
                    "input": "5\n4 2 7 1 3\n9",
                    "expectedOutput": "2 3",
                    "score": 25
                },
                {
                    "input": "5\n4 2 7 1 3\n100",
                    "expectedOutput": "0 0",
                    "score": 25
                },
                {
                    "input": "5\n4 2 7 1 3\n8",
                    "expectedOutput": "3 4",
                    "score": 25
                },
                {
                    "input": "5\n4 2 7 1 3\n11",
                    "expectedOutput": "3 5",
                    "score": 25
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        },
        {
            "id": "W9-06",
            "code": "A10-01-W9-06",
            "title": "遊戲關卡的積分計算",
            "description": "小明在玩一款闖關遊戲，共有 N 個關卡，每個關卡通過後都會獲得對應的分數。\n遊戲結束後，系統會進行多次「回顧分析」，頻繁詢問小明在「第 L 關 到 第 R 關」之間總共獲得了多少分。\n【提示】雖然查詢次數變少了，但依然請試著思考如何「先將資料整理好（例如使用前綴和）」，讓每一次的查詢都能更有效率地給出答案。",
            "examples": [
                {
                    "input": "5 3 10 20 30 40 50\n1 3\n2 4\n1 5",
                    "output": "60\n90\n150",
                    "explanation": "第一筆輸入5 3 10 20 30 40 50，表示5筆分數，查詢3次，分數：[10, 20, 30, 40, 50]\n1. 查詢 1~3 關：10+20+30 = 60\n2. 查詢 2~4 關：20+30+40 = 90\n3. 查詢 1~5 關：總和為 150"
                },
                {
                    "input": "3 2 1 1 1\n1 1\n2 3",
                    "output": "1\n2",
                    "explanation": "第一筆輸入3 2 1 1 1，表示3筆分數，查詢2次，分數：[1, 1, 1]\n1. 第 1 關到第 1 關：1 分\n2. 第 2 關到第 3 關：1+1 = 2 分"
                }
            ],
            "testCases": [
                {
                    "input": "5 3 10 20 30 40 50\n1 3\n2 4\n1 5",
                    "expectedOutput": "60\n90\n150",
                    "score": 10
                },
                {
                    "input": "4 3 7 13 8 5\n1 1\n4 4\n1 4",
                    "expectedOutput": "7\n5\n33",
                    "score": 15
                },
                {
                    "input": "5 2 0 0 0 0 0\n1 5\n2 4",
                    "expectedOutput": "0\n0",
                    "score": 20
                },
                {
                    "input": "6 3 5 10 15 20 25 30\n1 2\n3 6\n2 5",
                    "expectedOutput": "15\n90\n70",
                    "score": 25
                },
                {
                    "input": "10 3 1 2 3 4 5 6 7 8 9 10\n1 10\n5 5\n3 8",
                    "expectedOutput": "55\n5\n33",
                    "score": 30
                }
            ],
            "difficulty": "L4",
            "difficultyLabel": "L4｜精熟",
            "sb3Path": null
        },
        {
            "id": "M3-02-03",
            "code": "A10-01-M3-02-03",
            "title": "【延伸】募款多筆區間查詢",
            "description": "同樣是募款記錄，這次一次要查詢多組區間。\n\n第一行輸入N\n\n第二行輸入N個每日募款金額\n\n第三行輸入Q，代表要查詢的組數\n\n第四行輸入2×Q個數字，依序是每組查詢的L R（例如「1 3 2 5」代表第一組查詢L=1,R=3、第二組查詢L=2,R=5）",
            "examples": [
                {
                    "input": "5\n100 200 150 50 300\n2\n1 3 2 5",
                    "output": "450 700",
                    "explanation": "第1組1~3天：100+200+150=450；第2組2~5天：200+150+50+300=700"
                }
            ],
            "testCases": [
                {
                    "input": "5\n100 200 150 50 300\n2\n1 3 2 5",
                    "expectedOutput": "450 700",
                    "score": 34
                },
                {
                    "input": "5\n100 200 150 50 300\n1\n1 5",
                    "expectedOutput": "800",
                    "score": 33
                },
                {
                    "input": "4\n10 20 30 40\n3\n1 1 2 3 1 4",
                    "expectedOutput": "10 50 100",
                    "score": 33
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        }
    ]
};
