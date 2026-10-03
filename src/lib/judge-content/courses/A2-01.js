/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/A2-01對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "A2-01",
    "title": "A03 排序法實作",
    "tier": "v2",
    "unlockCode": "A2-01-SortingPractice",
    "tasks": [
        {
            "id": "seclect-005",
            "code": "A2-01-seclect-005",
            "title": "完整選擇排序",
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
            "sb3Path": null
        },
        {
            "id": "SORT01-007",
            "code": "A2-01-SORT01-007",
            "title": "排序後第K小",
            "description": "給定 N 個整數與 K，請將數字由小到大排序後，輸出第 K 小的數字。位置從 1 開始計算。",
            "examples": [
                {
                    "input": "6\n8 3 9 1 5 7\n2",
                    "output": "3",
                    "explanation": "排序後為 1 3 5 7 8 9，第 2 小是 3。"
                }
            ],
            "testCases": [
                {
                    "input": "6\n8 3 9 1 5 7\n2",
                    "expectedOutput": "3",
                    "score": 10
                },
                {
                    "input": "5\n5 4 3 2 1\n5",
                    "expectedOutput": "5",
                    "score": 10
                },
                {
                    "input": "5\n5 4 3 2 1\n1",
                    "expectedOutput": "1",
                    "score": 10
                },
                {
                    "input": "4\n10 10 8 9\n3",
                    "expectedOutput": "10",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        },
        {
            "id": "seclect-012",
            "code": "A2-01-seclect-012",
            "title": "多清單整合實戰-學生資料分析",
            "description": "在校務系統中，學生的資料常常分散存放在多個清單中。\n小華目前有三個清單，分別記錄：\n學生姓名清單\n國文成績清單\n數學成績清單\n相同位置代表同一位學生。\n老師希望小華能設計一個程式，將這些資料整合分析，\n完成以下任務：\n計算每位學生的「總分」\n依照總分由高到低排序所有學生\n輸出排序後的學生姓名與總分\n所有清單在排序過程中必須保持位置連動。\n注意事項：\n1. 總分 = 國文成績 + 數學成績。\n2. 若總分相同，依原本出現的先後順序排列。\n3. 不可使用內建排序功能。\n4. 總分不會有同分情形",
            "examples": [
                {
                    "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60\n70 85 80 75 65",
                    "output": "Bob 175\nDora 160\nAmy 150\nCarl 150\nEric 125",
                    "explanation": "先計算總分，\n再依總分排序。"
                }
            ],
            "testCases": [
                {
                    "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60\n70 85 75 75 65",
                    "expectedOutput": "Bob 175 Dora 160 Amy 150 Carl 145 Eric 125",
                    "score": 10
                },
                {
                    "input": "Tom May John Lily Ken\n90 80 85 70 60\n88 90 80 75 65",
                    "expectedOutput": "Tom 178 May 170 John 165 Lily 145 Ken 125",
                    "score": 10
                },
                {
                    "input": "A B C D E\n80 60 60 50 65\n90 80 70 30 45",
                    "expectedOutput": "A 170 B 140 C 130 E 110 D 80",
                    "score": 10
                },
                {
                    "input": "Ann Ben Cat Dee Eve\n95 90 85 70 60\n0 10 20 45 25",
                    "expectedOutput": "Dee 115 Cat 105 Ben 100 Ann 95 Eve 85",
                    "score": 10
                },
                {
                    "input": "One Two Three Four Five\n30 50 70 90 10\n20 40 60 80 100",
                    "expectedOutput": "Four 170 Three 130 Five 110 Two 90 One 50",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": null
        }
    ]
};
