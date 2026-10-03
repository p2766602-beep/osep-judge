/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/A11-02對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "A11-02",
    "title": "A21 動態規劃暖身",
    "tier": "v11",
    "unlockCode": "A11-02-DPWarmup",
    "tasks": [
        {
            "id": "M3-04-01",
            "code": "A11-02-M3-04-01",
            "title": "爬樓梯方法數",
            "description": "小朋友在爬樓梯，每一步可以爬1階或2階，請問爬到第N階，總共有幾種不同的爬法？（N保證大於等於1）\n\n第一行輸入N\n\n輸出爬到第N階的方法數。",
            "examples": [
                {
                    "input": "5",
                    "output": "8",
                    "explanation": "第5階的方法數=第4階方法數+第3階方法數=5+3=8"
                }
            ],
            "testCases": [
                {
                    "input": "1",
                    "expectedOutput": "1",
                    "score": 25
                },
                {
                    "input": "2",
                    "expectedOutput": "2",
                    "score": 25
                },
                {
                    "input": "5",
                    "expectedOutput": "8",
                    "score": 25
                },
                {
                    "input": "8",
                    "expectedOutput": "34",
                    "score": 25
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": null
        },
        {
            "id": "M3-04-02",
            "code": "A11-02-M3-04-02",
            "title": "最小花費爬樓梯",
            "description": "每一階樓梯都有一個花費，你可以選擇從第1階或第2階開始爬（不用付出發那階的費用以外的額外代價），每次可以往上爬1階或2階，最終目標是離開樓梯（爬過最後一階或倒數第二階再跨一步出去都算離開）。請問離開樓梯最少要花多少錢？\n\n第一行輸入N，代表共有N階樓梯\n\n第二行輸入N個數字，代表第1階到第N階（由1開始編號）各自的花費\n\n輸出離開樓梯的最小花費。",
            "examples": [
                {
                    "input": "3\n10 15 20",
                    "output": "15",
                    "explanation": "從第2階(花費15)出發，直接跨兩步離開樓梯，只需付15"
                }
            ],
            "testCases": [
                {
                    "input": "3\n10 15 20",
                    "expectedOutput": "15",
                    "score": 25
                },
                {
                    "input": "4\n1 100 1 1",
                    "expectedOutput": "2",
                    "score": 25
                },
                {
                    "input": "2\n5 6",
                    "expectedOutput": "5",
                    "score": 25
                },
                {
                    "input": "5\n1 2 3 4 5",
                    "expectedOutput": "6",
                    "score": 25
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        },
        {
            "id": "M3-04-03",
            "code": "A11-02-M3-04-03",
            "title": "不能選相鄰兩個的最大總和",
            "description": "一排數字，請你從中挑選一些數字（可以不挑），規則是不能同時挑選相鄰的兩個位置，求挑選出來的數字總和最大是多少。\n\n第一行輸入N\n\n第二行輸入N個數字\n\n輸出可以選出的最大總和。",
            "examples": [
                {
                    "input": "5\n3 2 5 10 7",
                    "output": "15",
                    "explanation": "選第1、3、5個數字：3+5+7=15，彼此都不相鄰"
                }
            ],
            "testCases": [
                {
                    "input": "5\n3 2 5 10 7",
                    "expectedOutput": "15",
                    "score": 25
                },
                {
                    "input": "1\n5",
                    "expectedOutput": "5",
                    "score": 25
                },
                {
                    "input": "2\n5 1",
                    "expectedOutput": "5",
                    "score": 25
                },
                {
                    "input": "4\n1 2 3 1",
                    "expectedOutput": "4",
                    "score": 25
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        },
        {
            "id": "M3-04-04",
            "code": "A11-02-M3-04-04",
            "title": "硬幣湊金額最少枚數",
            "description": "有K種硬幣面額可以使用（面額中一定包含1，所以任何金額都湊得出來），每種面額可以重複使用，請你算出湊出目標金額amount最少需要幾枚硬幣。\n\n第一行輸入K，代表有K種硬幣面額\n\n第二行輸入K個數字，代表各面額（保證其中包含1）\n\n第三行輸入amount，代表目標金額\n\n輸出最少需要的硬幣枚數。",
            "examples": [
                {
                    "input": "3\n1 5 10\n18",
                    "output": "5",
                    "explanation": "用10+5+1+1+1共5枚湊出18"
                }
            ],
            "testCases": [
                {
                    "input": "3\n1 5 10\n18",
                    "expectedOutput": "5",
                    "score": 25
                },
                {
                    "input": "3\n1 5 10\n10",
                    "expectedOutput": "1",
                    "score": 25
                },
                {
                    "input": "3\n1 3 4\n6",
                    "expectedOutput": "2",
                    "score": 25
                },
                {
                    "input": "1\n1\n7",
                    "expectedOutput": "7",
                    "score": 25
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        },
        {
            "id": "M3-04-05",
            "code": "A11-02-M3-04-05",
            "title": "方格地圖走法數",
            "description": "有一個R列C行的方格地圖，你從左上角（第1列第1行）出發，每次只能往右走一格或往下走一格，請問走到右下角（第R列第C行）總共有幾種不同的走法？\n\n第一行輸入R C\n\n輸出走法總數。",
            "examples": [
                {
                    "input": "3 3",
                    "output": "6",
                    "explanation": "3x3方格從左上到右下，總共有6種不同走法"
                }
            ],
            "testCases": [
                {
                    "input": "3 3",
                    "expectedOutput": "6",
                    "score": 25
                },
                {
                    "input": "2 2",
                    "expectedOutput": "2",
                    "score": 25
                },
                {
                    "input": "1 5",
                    "expectedOutput": "1",
                    "score": 25
                },
                {
                    "input": "3 4",
                    "expectedOutput": "10",
                    "score": 25
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        },
        {
            "id": "M3-04-06",
            "code": "A11-02-M3-04-06",
            "title": "兩字串最長共同子序列長度",
            "description": "給你兩個字串，請你求出它們的『最長共同子序列』長度（子序列不需要連續出現，但字母的相對先後順序要一致）。\n\n第一行輸入字串A\n\n第二行輸入字串B\n\n輸出最長共同子序列的長度。",
            "examples": [
                {
                    "input": "ABCDE\nACE",
                    "output": "3",
                    "explanation": "A、C、E依序出現在兩個字串中，長度3"
                }
            ],
            "testCases": [
                {
                    "input": "ABC\nAC",
                    "expectedOutput": "2",
                    "score": 25
                },
                {
                    "input": "ABCDE\nACE",
                    "expectedOutput": "3",
                    "score": 25
                },
                {
                    "input": "AAAA\nAA",
                    "expectedOutput": "2",
                    "score": 25
                },
                {
                    "input": "ABC\nDEF",
                    "expectedOutput": "0",
                    "score": 25
                }
            ],
            "difficulty": "L4",
            "difficultyLabel": "L4｜精熟",
            "sb3Path": null
        },
        {
            "id": "cycjunior-006-2-園遊會尋找幸運抽獎號",
            "code": "A11-02-cycjunior-006-2-園遊會尋找幸運抽獎號",
            "title": "【延伸】園遊會尋找幸運抽獎號",
            "description": "園遊會中最熱門的攤位是「幸運跳格子」挑戰賽。地上畫了一排共有 N 格的格子（編號從 1 到 N）。 為了增加遊戲的趣味性與挑戰性，主辦單位規定：參賽者從起點（第 0 格）出發，每次跳躍只能選擇「跳 1 格」或「跳 2 格」。\n例如：要跳到第 3 格，可以有三種跳法：\n1. 跳1格 → 跳1格 → 跳1格 (1, 1, 1)\n2. 跳1格 → 跳2格 (1, 2)\n3. 跳2格 → 跳1格 (2, 1)\n學生會長想知道，如果要剛好停在第 N 格領取大獎，總共有多少種不同的跳法組合？\n這正是經典的費氏數列問題，若剛好停在第 N 格可能的走法數為F(N)種，我們可觀察到\nF(1)=1                ,停在第1格有1種走法\nF(2)=2                ,停在第2格有2種走法\nF(3)=F(2)+F(1)=1+2=3   ,停在第3格有3種走法\nF(4)=F(3)+F(2)=3+2=5   ,停在第4格有5種走法\n…",
            "examples": [
                {
                    "input": "3",
                    "output": "3",
                    "explanation": "共有3種跳法：\n1. (1, 1, 1)\n2. (1, 2)\n3. (2, 1)"
                },
                {
                    "input": "4",
                    "output": "5",
                    "explanation": "共有5種跳法：\n(1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (2,2)"
                }
            ],
            "testCases": [
                {
                    "input": "1",
                    "expectedOutput": "1",
                    "score": 10
                },
                {
                    "input": "5",
                    "expectedOutput": "8",
                    "score": 15
                },
                {
                    "input": "7",
                    "expectedOutput": "21",
                    "score": 20
                },
                {
                    "input": "10",
                    "expectedOutput": "89",
                    "score": 25
                },
                {
                    "input": "20",
                    "expectedOutput": "10946",
                    "score": 30
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        }
    ]
};
