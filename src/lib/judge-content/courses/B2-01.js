/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/B2-01對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "B2-01",
    "title": "K05 計數迴圈",
    "tier": "t0",
    "unlockCode": "B2-01-CountingLoop",
    "tasks": [
        {
            "id": "JSL01-D01",
            "code": "B2-01-JSL01-D01",
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
            "sb3Path": "m0/B2-01-CountingLoop/JSL01-D01.sb3"
        },
        {
            "id": "A-07-0",
            "code": "B2-01-A-07-0",
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
            "sb3Path": "m0/B2-01-CountingLoop/A-07-0.sb3"
        },
        {
            "id": "count-002",
            "code": "B2-01-count-002",
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
            "sb3Path": "m0/B2-01-CountingLoop/count-002.sb3"
        },
        {
            "id": "count-003",
            "code": "B2-01-count-003",
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
            "sb3Path": "m0/B2-01-CountingLoop/count-003.sb3"
        },
        {
            "id": "count-006",
            "code": "B2-01-count-006",
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
            "difficulty": "L1",
            "difficultyLabel": "L1｜基礎",
            "sb3Path": "m0/B2-01-CountingLoop/count-006.sb3"
        },
        {
            "id": "count-012",
            "code": "B2-01-count-012",
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
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": "m0/B2-01-CountingLoop/count-012.sb3"
        }
    ]
};
