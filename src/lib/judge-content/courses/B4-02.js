/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/B4-02對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "B4-02",
    "title": "K13 字串統計與轉換",
    "tier": "t1",
    "unlockCode": "B4-02-StringProcess",
    "tasks": [
        {
            "id": "STR01-004",
            "code": "B4-02-STR01-004",
            "title": "計算指定字元數量",
            "description": "給定一個字串與目標字元 C，請計算 C 在字串中出現幾次。",
            "examples": [
                {
                    "input": "banana\na",
                    "output": "3",
                    "explanation": "banana 中 a 出現 3 次。"
                }
            ],
            "testCases": [
                {
                    "input": "banana\na",
                    "expectedOutput": "3",
                    "score": 10
                },
                {
                    "input": "mississippi\ns",
                    "expectedOutput": "4",
                    "score": 10
                },
                {
                    "input": "hello\nz",
                    "expectedOutput": "0",
                    "score": 10
                },
                {
                    "input": "aaaaa\na",
                    "expectedOutput": "5",
                    "score": 10
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": "m0/B4-02-StringProcess/STR01-004.sb3"
        },
        {
            "id": "STR01-006",
            "code": "B4-02-STR01-006",
            "title": "母音數量",
            "description": "給定一個只包含小寫英文字母的字串，請計算母音 a、e、i、o、u 共出現幾次。",
            "examples": [
                {
                    "input": "education",
                    "output": "5",
                    "explanation": "education 中母音有 e、u、a、i、o，共 5 個。"
                }
            ],
            "testCases": [
                {
                    "input": "education",
                    "expectedOutput": "5",
                    "score": 10
                },
                {
                    "input": "sky",
                    "expectedOutput": "0",
                    "score": 10
                },
                {
                    "input": "banana",
                    "expectedOutput": "3",
                    "score": 10
                },
                {
                    "input": "aeiou",
                    "expectedOutput": "5",
                    "score": 10
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": "m0/B4-02-StringProcess/STR01-006.sb3"
        },
        {
            "id": "STR01-008",
            "code": "B4-02-STR01-008",
            "title": "相鄰相同字元",
            "description": "給定一個字串，請判斷是否存在兩個相鄰且相同的字元。",
            "examples": [
                {
                    "input": "book",
                    "output": "YES",
                    "explanation": "book 中有相鄰的 oo。"
                }
            ],
            "testCases": [
                {
                    "input": "book",
                    "expectedOutput": "YES",
                    "score": 10
                },
                {
                    "input": "abcd",
                    "expectedOutput": "NO",
                    "score": 10
                },
                {
                    "input": "a",
                    "expectedOutput": "NO",
                    "score": 10
                },
                {
                    "input": "committee",
                    "expectedOutput": "YES",
                    "score": 10
                }
            ],
            "difficulty": "L2",
            "difficultyLabel": "L2｜進階",
            "sb3Path": "m0/B4-02-StringProcess/STR01-008.sb3"
        },
        {
            "id": "STR01-007",
            "code": "B4-02-STR01-007",
            "title": "【延伸】是否回文",
            "description": "給定一個不含空白的字串，請判斷它是否正著讀和反著讀都相同。",
            "examples": [
                {
                    "input": "level",
                    "output": "YES",
                    "explanation": "level 正著讀與反著讀相同。"
                }
            ],
            "testCases": [
                {
                    "input": "level",
                    "expectedOutput": "YES",
                    "score": 10
                },
                {
                    "input": "abc",
                    "expectedOutput": "NO",
                    "score": 10
                },
                {
                    "input": "a",
                    "expectedOutput": "YES",
                    "score": 10
                },
                {
                    "input": "noon",
                    "expectedOutput": "YES",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": "m0/B4-02-StringProcess/STR01-007.sb3"
        },
        {
            "id": "A-12-0",
            "code": "B4-02-A-12-0",
            "title": "【延伸】簡易密碼轉換",
            "description": "小明設計了一種簡單的密碼環密碼規則：將每個字母向後移二個字母（z 變 b）。\n\n密碼環：abcdefghijklmnopqrstuvwxyz\n\n請寫一個程式，輸入一個英文單字，輸出轉換後的字串。\n\n這樣的練習訓練你字元處理與條件轉換。",
            "examples": [
                {
                    "input": "banana",
                    "output": "dcpcpc",
                    "explanation": "第一行輸入banana\n程式運算，將字串往後移2個位置加密\n程式輸出dcpcpc"
                },
                {
                    "input": "student",
                    "output": "uvwfgpv",
                    "explanation": "第一行輸入student\n程式運算，將字串往後移2個位置加密\n程式輸出uvwfgpv"
                }
            ],
            "testCases": [
                {
                    "input": "goodmoning",
                    "expectedOutput": "iqqfoqpkpi",
                    "score": 10
                },
                {
                    "input": "chaiyicity",
                    "expectedOutput": "ejckakekva",
                    "score": 10
                },
                {
                    "input": "announcement",
                    "expectedOutput": "cppqwpegogpv",
                    "score": 10
                },
                {
                    "input": "experimen",
                    "expectedOutput": "gzrgtkogp",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": "m0/B4-02-StringProcess/A-12-0.sb3"
        },
        {
            "id": "TYTN-10",
            "code": "B4-02-TYTN-10",
            "title": "【延伸】檢查碼",
            "description": "書店會員卡享有購書8折優惠，為避免有人偽造會員卡，書店老闆在卡號中加入檢查碼。\n\n會員卡編號格式為：一個英文字母 + 4個數字 + 1個檢查碼。\n\n英文字母對應的數字如下：\n\nA → 11 B → 13 C → 15 D → 17\n\n若為正確的會員卡號，則 (英文字母對應的數字 + 4個數字 + 檢查碼) 除以 5 的餘數會是 4，其餘情況皆為不正確。\n\n例如：\n\nB20135 = 13+2+0+1+3+5 = 24 → 24÷5=4餘4 → 正確會員卡\n\nA15274 = 11+1+5+2+7+4 = 30 → 30÷5=6餘0 → 不正確會員卡\n\n請寫一個程式判斷會員卡號是否正確，若正確輸出 yes，否則輸出 no。",
            "examples": [
                {
                    "input": "C20351",
                    "output": "no",
                    "explanation": "C20351 = 15+2+0+3+5+1 = 26\n26÷5 = 5餘1 → 不正確會員卡。"
                },
                {
                    "input": "D15713",
                    "output": "yes",
                    "explanation": "D15713 = 17+1+5+7+1+3 = 34\n34÷5 = 6餘4 → 正確會員卡。"
                }
            ],
            "testCases": [
                {
                    "input": "C20351",
                    "expectedOutput": "no",
                    "score": 10
                },
                {
                    "input": "D15713",
                    "expectedOutput": "yes",
                    "score": 10
                },
                {
                    "input": "A40244",
                    "expectedOutput": "no",
                    "score": 10
                },
                {
                    "input": "B99994",
                    "expectedOutput": "no",
                    "score": 10
                },
                {
                    "input": "A22146",
                    "expectedOutput": "no",
                    "score": 10
                }
            ],
            "difficulty": "L3",
            "difficultyLabel": "L3｜挑戰",
            "sb3Path": "m0/B4-02-StringProcess/TYTN-10.sb3"
        }
    ]
};
