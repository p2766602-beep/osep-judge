/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/A6-01對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "A6-01",
    "title": "A10 角色扮演系列",
    "tier": "v6",
    "unlockCode": "A6-01-RolePlay",
    "tasks": [
        {
            "id": "cycelement-006",
            "code": "A6-01-cycelement-006",
            "title": "寶可夢訓練師-1",
            "description": "你是一位剛成為寶可夢訓練師的新手，正在整理你抓到的寶可夢資料。\n你想設計一個程式，幫助你分析寶可夢的資料。\n\n【子題一：計算寶可夢的平均等級】\n\n請設計一個程式，輸入多隻寶可夢的等級，\n計算並輸出牠們的平均等級（無條件捨去至整數）。\n\n• 第一行輸入一個整數 N，代表寶可夢的數量（1 ≤ N ≤ 20）。\n\n• 第二行輸入 N 個整數，分別代表每隻寶可夢的等級（1 ≤ 等級 ≤ 100）。\n\n• 輸出一個整數，代表所有寶可夢等級的平均值（無條件捨去）。",
            "examples": [
                {
                    "input": "4\n10 20 30 40",
                    "output": "25",
                    "explanation": "輸入 4 隻寶可夢，等級為 10、20、30、40。\n平均值 = (10+20+30+40) ÷ 4 = 25。"
                },
                {
                    "input": "3\n7 8 10",
                    "output": "8",
                    "explanation": "輸入 3 隻寶可夢，等級為7、8、10。\n平均值 = 25 ÷ 3 = 8.33，無條件捨去後為 8。"
                }
            ],
            "testCases": [
                {
                    "input": "1\n50",
                    "expectedOutput": "50",
                    "score": 10
                },
                {
                    "input": "3\n10 20 30",
                    "expectedOutput": "20",
                    "score": 15
                },
                {
                    "input": "4\n7 8 9 10",
                    "expectedOutput": "8",
                    "score": 20
                },
                {
                    "input": "5\n1 100 100 100 100",
                    "expectedOutput": "80",
                    "score": 25
                },
                {
                    "input": "20\n10 10 10 10 10 10 10 10 10 10 20 20 20 20 20 20 20 20 20 20",
                    "expectedOutput": "15",
                    "score": 30
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": null
        },
        {
            "id": "cycelement-006-2-寶可夢訓練師-2",
            "code": "A6-01-cycelement-006-2-寶可夢訓練師-2",
            "title": "寶可夢訓練師-2",
            "description": "子題二：最高等級的寶可夢\n請設計一個程式，輸入多隻寶可夢的名稱與等級，找出等級最高的寶可夢名稱。\n（本題保證不會有等級相同的情況，寶可夢名稱不包含空白字元）",
            "examples": [
                {
                    "input": "3\n皮卡丘 25 小火龍 12 妙蛙種子 18",
                    "output": "25",
                    "explanation": "共有 3 隻寶可夢，等級最高的是皮卡丘（25）。"
                },
                {
                    "input": "4\n傑尼龜 10 伊布 15 卡比獸 35 胖丁 20",
                    "output": "35",
                    "explanation": "共有 4 隻寶可夢，卡比獸等級最高（35）。"
                }
            ],
            "testCases": [
                {
                    "input": "1\n皮卡丘 10",
                    "expectedOutput": "10",
                    "score": 10
                },
                {
                    "input": "3\n小火龍 12 妙蛙種子 18 傑尼龜 15",
                    "expectedOutput": "18",
                    "score": 15
                },
                {
                    "input": "4\nA 5 B 20 C 15 D 8",
                    "expectedOutput": "20",
                    "score": 20
                },
                {
                    "input": "5\n皮卡丘 22 伊布 30 卡比獸 28 超夢 100 胖丁 18",
                    "expectedOutput": "100",
                    "score": 25
                },
                {
                    "input": "6\nP1 3 P2 6 P3 9 P4 12 P5 15 P6 18",
                    "expectedOutput": "18",
                    "score": 30
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": null
        },
        {
            "id": "cycelement-006-3-寶可夢訓練師-3",
            "code": "A6-01-cycelement-006-3-寶可夢訓練師-3",
            "title": "寶可夢訓練師-3",
            "description": "子題三：列出平均等級以上的寶可夢\n\n請綜合前面的概念，輸入寶可夢名稱與等級，計算平均等級後，輸出等級高於平均值的寶可夢名稱。\n\n第一行輸入整數 N，代表寶可夢數量。\n\n第二行輸入 N 個寶可夢名稱及等級資料，名稱及等級以空白間隔，每筆資料也以空白間隔。\n\n程式依照輸入出現順序，輸出所有等級高於平均值的寶可夢名稱。",
            "examples": [
                {
                    "input": "3\n皮卡丘 25 小火龍 12 妙蛙種子 18",
                    "output": "皮卡丘",
                    "explanation": "第一行輸入 3，表示有 3 組寶可夢名稱及等級資料輸入。\n第二行輸入三組寶可夢名稱及等級數據，前面是名稱，後面是等級，三組連續輸入，中間皆以空白間隔。\n程式依序輸出高於平均等級的寶可夢：皮卡丘。"
                },
                {
                    "input": "4\n傑尼龜 10 伊布 15 卡比獸 20 胖丁 20",
                    "output": "卡比獸 胖丁",
                    "explanation": "第一行輸入 4，表示有 4 組寶可夢名稱及等級資料輸入。\n第二行輸入四組寶可夢名稱及等級數據，前面是名稱，後面是等級，四組連續輸入，中間皆以空白間隔。\n程式依序輸出高於平均等級的寶可夢：卡比獸 胖丁。"
                }
            ],
            "testCases": [
                {
                    "input": "1\n皮卡丘 10",
                    "expectedOutput": "",
                    "score": 10
                },
                {
                    "input": "5\n伊布 15 胖丁 15 乘龍 10 卡比獸 20 妙蛙種子 15",
                    "expectedOutput": "卡比獸",
                    "score": 15
                },
                {
                    "input": "4\n妙蛙種子 30 皮卡丘 30 小火龍 30 傑尼龜 30",
                    "expectedOutput": "",
                    "score": 20
                },
                {
                    "input": "6\n小火龍 100 皮卡丘 0 伊布 50 卡比獸 50 胖丁 50 超夢 100",
                    "expectedOutput": "小火龍 超夢",
                    "score": 25
                },
                {
                    "input": "8\n皮卡丘 25 皮卡丘 30 妙蛙種子 18 小火龍 12 傑尼龜 40 伊布 35 卡比獸 28 胖丁 28",
                    "expectedOutput": "皮卡丘 傑尼龜 伊布 卡比獸 胖丁",
                    "score": 30
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        },
        {
            "id": "cycjunior-005",
            "code": "A6-01-cycjunior-005",
            "title": "大風吹搶位子",
            "description": "隔宿露營的晚會高潮，班聯會設計了一個刺激的「電子傳球大風吹」遊戲。全班 N 位同學圍繞營火坐成一圈，每個人身上都有一個原本的號碼牌（從 1 號到 N 號）。遊戲開始時，音樂響起，一顆發光的電子球從 1 號同學手中開始順時針傳遞。這顆電子球設定了爆炸秒數，相當於傳遞 M 次。也就是說，從目前拿球的人開始算第 1 次，傳給下一位算第 2 次...一直數到第 M 個人，球就會變色發出「嗶！」的聲音，這時候持有球的那個人就被淘汰，必須立刻離開圓圈。被淘汰的人離開後，圓圈會縮小，球交給下一位還在圈子裡的同學，重新開始從 1 數到 M。遊戲持續進行，直到圓圈只剩下最後一位同學，該名同學就是今晚的「大風吹之王」。請設計一個程式，模擬這個過程，算出最後留下的那位同學原本的號碼是多少。\n假設有 5 人參賽 (N=5)，編號為 1, 2, 3, 4, 5。每數到第 2 人 (M=2) 該員即淘汰。\n第 1 輪：從 1 號開始數 (1, 2)，2 號淘汰。剩下：1, 3, 4, 5。\n第 2 輪：從 3 號開始數 (3, 4)，4 號淘汰。剩下：1, 3, 5。\n第 3 輪：從 5 號開始數 (5, 1)，因為繞回開頭，1 號淘汰。剩下：3, 5。\n第 4 輪：從 3 號開始數 (3, 5)，5 號淘汰。剩下：3。\n結果：最後贏家是 3 號",
            "examples": [
                {
                    "input": "5\n2",
                    "output": "3",
                    "explanation": "初始: 1 2 3 4 5\n淘汰2 (剩 1 3 4 5)\n淘汰4 (剩 1 3 5)\n淘汰1 (剩 3 5)\n淘汰5 (剩 3)"
                },
                {
                    "input": "4\n1",
                    "output": "4",
                    "explanation": "初始: 1 2 3 4\n淘汰1 (剩 2 3 4)\n淘汰2 (剩 3 4)\n淘汰3 (剩 4)"
                }
            ],
            "testCases": [
                {
                    "input": "3\n1",
                    "expectedOutput": "3",
                    "score": 10
                },
                {
                    "input": "4\n2",
                    "expectedOutput": "1",
                    "score": 15
                },
                {
                    "input": "5\n3",
                    "expectedOutput": "4",
                    "score": 20
                },
                {
                    "input": "7\n4",
                    "expectedOutput": "2",
                    "score": 25
                },
                {
                    "input": "10\n3",
                    "expectedOutput": "4",
                    "score": 30
                }
            ],
            "difficulty": "L4",
            "difficultyLabel": "L4｜精熟",
            "sb3Path": null
        },
        {
            "id": "cycelement-006-4-寶可夢訓練師-4",
            "code": "A6-01-cycelement-006-4-寶可夢訓練師-4",
            "title": "【延伸】寶可夢訓練師-4",
            "description": "子題四：統計不同屬性寶可夢的數量\n\n請設計一個程式，輸入多隻寶可夢的屬性，輸出各屬性寶可夢的數量統計結果。\n\n第一行輸入整數 N，代表寶可夢數量。\n\n第二行輸入 N 個寶可夢屬性名稱，每筆資料以空白間隔。\n\n程式需依照「屬性第一次出現的順序」，輸出每個屬性與該屬性寶可夢數量，格式為「屬性 數量」，屬性之間以一個空白隔開。\n\n若屬性重複，只輸出一次。",
            "examples": [
                {
                    "input": "5\n火 水 火 電 水",
                    "output": "火2 水2 電1",
                    "explanation": "第一行輸入5，表示有5隻寶可夢。\n第二行依序輸入屬性：火 水 火 電 水。\n依照首次出現順序統計後輸出：火2 水2 電1。"
                },
                {
                    "input": "4\n草 草 毒 草",
                    "output": "草3 毒1",
                    "explanation": "第一行輸入4，表示有4隻寶可夢。\n第二行輸入屬性：草 草 毒 草。\n輸出結果為：草3 毒1。"
                }
            ],
            "testCases": [
                {
                    "input": "9\n火 水 火 電 水 草 草 毒 草",
                    "expectedOutput": "火2 水2 電1 草3 毒1",
                    "score": 10
                },
                {
                    "input": "8\n水 火 電 水 草 水 電 草",
                    "expectedOutput": "水3 火1 電2 草2",
                    "score": 15
                },
                {
                    "input": "1\n草",
                    "expectedOutput": "草1",
                    "score": 20
                },
                {
                    "input": "5\n水 水 水 水 水",
                    "expectedOutput": "水5",
                    "score": 25
                },
                {
                    "input": "6\n電 火 草 電 火 水",
                    "expectedOutput": "電2 火2 草1 水1",
                    "score": 30
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        }
    ]
};
