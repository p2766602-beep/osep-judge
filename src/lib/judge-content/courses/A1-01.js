/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/A1-01對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "A1-01",
    "title": "A01 清單進階操作",
    "tier": "v1",
    "unlockCode": "A1-01-ListAdvanced",
    "tasks": [
        {
            "id": "count-012",
            "code": "A1-01-count-012",
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
            "sb3Path": null
        },
        {
            "id": "IDX01-007",
            "code": "A1-01-IDX01-007",
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
                    "score": 10
                },
                {
                    "input": "5\n10 20 30 40 50\n1",
                    "expectedOutput": "20",
                    "score": 10
                },
                {
                    "input": "5\n10 20 30 40 50\n5",
                    "expectedOutput": "40",
                    "score": 10
                },
                {
                    "input": "1\n99\n1",
                    "expectedOutput": "0",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        },
        {
            "id": "cycjunior-004",
            "code": "A1-01-cycjunior-004",
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
            "sb3Path": null
        }
    ]
};
