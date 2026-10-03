/**
 * 自動產生，不要手動編輯——見scripts/judge-dev-tools/gen-judge-content.js。
 * 要改題目內容請去改YDWS-CodingBank/courses/A11-01對應的正本課程檔，重跑該腳本。
 */
export default {
    "code": "A11-01",
    "title": "A20 區間最佳化",
    "tier": "v11",
    "unlockCode": "A11-01-IntervalOptimize",
    "tasks": [
        {
            "id": "cycjunior-006-4-園遊會場地復原大作戰",
            "code": "A11-01-cycjunior-006-4-園遊會場地復原大作戰",
            "title": "園遊會場地復原大作戰",
            "description": "熱鬧的園遊會終於圓滿落幕了！現在是最後的場地復原時間。雖然大家都累壞了，但幾位熱心的志工同學自願留下來幫忙清理最後的垃圾。\n現在在操場的跑道旁，整齊地排列著 N 堆分類好的垃圾包。因為垃圾已經打包好了，而且按照順序排成一列，為了避免混亂，每位志工必須負責清理「連續」的幾堆垃圾，不能跳著拿（例如：小明不能拿了第 1 堆又跑去拿第 3 堆，他必須拿第 1、2、3 堆這樣連續的一段）。你是衛生組長，你有 M 位志工可以調度。為了公平起見，你不希望任何一位志工累壞，所以你的目標是：「讓工作量最重的那位志工，搬運的重量越輕越好」。\n換句話說，你要把這一列垃圾切成 M段，分配給 M 個人，請你計算出在最完美的分配策略下，那個「搬最多重量的人」，他最少只需要搬多少公斤？",
            "examples": [
                {
                    "input": "2\n5\n2 4 3 6 5",
                    "output": "11",
                    "explanation": "最理想的的狀況為分成 2 4 3 和 6 5 兩堆讓兩個志工處理。重量分別為\n2 + 4 +3=9、6 + 5  = 11\n最小化最大工作量為11。"
                },
                {
                    "input": "3\n3\n10 20 30",
                    "output": "30",
                    "explanation": "3個志工，剛好每人負責一堆，工作量分別為 10, 20, 30。最小化最大工作量為30。"
                }
            ],
            "testCases": [
                {
                    "input": "2\n3\n1 1 1",
                    "expectedOutput": "2",
                    "score": 10
                },
                {
                    "input": "3\n3\n10 20 30",
                    "expectedOutput": "30",
                    "score": 15
                },
                {
                    "input": "2\n4\n10 20 30 40",
                    "expectedOutput": "60",
                    "score": 20
                },
                {
                    "input": "3\n6\n1 2 3 4 5 6",
                    "expectedOutput": "9",
                    "score": 25
                },
                {
                    "input": "1\n5\n1 2 3 4 5",
                    "expectedOutput": "15",
                    "score": 30
                }
            ],
            "difficulty": "L4",
            "difficultyLabel": "L4｜精熟",
            "sb3Path": null
        },
        {
            "id": "TYTN-07",
            "code": "A11-01-TYTN-07",
            "title": "挑選喜歡的午餐區間",
            "description": "小虎最愛挑午餐，他對多種主餐都有特別喜歡的類別，以字母表示（如 A=雞肉、B=豬排…）。\n學校提供 N 天午餐菜單，每天的主餐以字母表示。小虎想挑出連續 K 天的午餐，使「最愛餐點」在這段期間出現最多次。\n若有多段連續 K 天的午餐其最愛餐點出現次數相同，小虎會選擇「最早」出現的那一段。\n請輸出：\n1. 最愛餐點在最佳區間中出現的總次數\n2. 該區間的起始天數（第一天為 1）",
            "examples": [
                {
                    "input": "7\nA B A C A B A\n3\nA",
                    "output": "2 1",
                    "explanation": "7天菜單如上，連續3天的區間中，A 最多出現 2 次，最早出現於第1天。\n因此輸出「2 1」。"
                },
                {
                    "input": "10\nA B C D A B C C B A\n4\nA C",
                    "output": "3 5",
                    "explanation": "最愛餐點為 A、C。\n在連續4天的所有區間中，第5天起算的區間 A、C 出現3次且最早達成。\n因此輸出「3 5」。"
                }
            ],
            "testCases": [
                {
                    "input": "7\nA B A C A B A\n3\nA",
                    "expectedOutput": "2 1",
                    "score": 10
                },
                {
                    "input": "10\nA B C D A B C C B A\n4\nA C",
                    "expectedOutput": "3 5",
                    "score": 10
                },
                {
                    "input": "5\nA B C A C\n2\nB",
                    "expectedOutput": "1 1",
                    "score": 10
                },
                {
                    "input": "6\nC C C C C C\n3\nC",
                    "expectedOutput": "3 1",
                    "score": 10
                },
                {
                    "input": "8\nA B A B A B A B\n4\nA B",
                    "expectedOutput": "4 1",
                    "score": 10
                }
            ],
            "difficulty": "L4",
            "difficultyLabel": "L4｜精熟",
            "sb3Path": null
        },
        {
            "id": "W0-04-3-星際物資運補任務-物流中心選址",
            "code": "A11-01-W0-04-3-星際物資運補任務-物流中心選址",
            "title": "星際物資運補-物流中心選址",
            "description": "火星的所有基地目前都分布在「奧林帕斯峽谷」的一條筆直公路上。\n為了降低整體油耗，物流中心決定選擇一個最優的位置 P 來建立「中央配送倉庫」。\n已知共有 N 個基地，其座標分別為 X1, X2, …, XN。\n請找出一個「整數座標點 P」，使得所有基地到該點的距離總和：\n|X1 − P| + |X2 − P| + ⋯ + |XN − P| 達到最小。\n【特別規定】\n• 若有兩個以上的座標點 P 能得到相同且最小的距離總和，請輸出「座標數值較小」的那一個。\n• 可以證明，最佳解一定會落在某一個既有基地的位置上。",
            "examples": [
                {
                    "input": "5\n1 3 5 10 20",
                    "output": "5",
                    "explanation": "選擇中位數 5，距離總和最小。"
                },
                {
                    "input": "4\n1 2 100 200",
                    "output": "2",
                    "explanation": "2 與 100 的距離總和相同，依規定選較小的 2。"
                }
            ],
            "testCases": [
                {
                    "input": "1\n50",
                    "expectedOutput": "50",
                    "score": 10
                },
                {
                    "input": "3\n1 2 3",
                    "expectedOutput": "2",
                    "score": 15
                },
                {
                    "input": "4\n10 10 10 10",
                    "expectedOutput": "10",
                    "score": 20
                },
                {
                    "input": "6\n1 2 3 100 101 102",
                    "expectedOutput": "3",
                    "score": 25
                },
                {
                    "input": "5\n-10 -5 0 5 20",
                    "expectedOutput": "0",
                    "score": 30
                }
            ],
            "difficulty": "L4",
            "difficultyLabel": "L4｜精熟",
            "sb3Path": null
        },
        {
            "id": "cyjunior-008",
            "code": "A11-01-cyjunior-008",
            "title": "校園密室逃脫-書架修繕工程",
            "description": "終於來到最後一關，只要修復好眼前倒塌的古老書架，就能拿到智慧之鑰。書架的結構需要 K 根長度完全相同的木條來支撐，才能維持平衡。倉庫角落堆放著 N 根長短不一的備用木材。你可以使用鋸子將一根長木材切成多段短木材，但為了結構強度，嚴禁將兩根短木材拼接使用。\n為了讓修復後的書架越穩固越好，這 K 根支撐木條的長度應該要越長越好。請根據現有木材的庫存狀況，計算出這 K 根木條的最大可能長度是多少？",
            "examples": [
                {
                    "input": "3\n4\n10 20 30",
                    "output": "10",
                    "explanation": "預計使用木條之長度為10時\n木條長10：可切出1段\n木條長20：可切出2段\n木條長30：可切出3段\n總段數為1+2+3=6 段，剛好比需求段數4還要多\n預計使用木條之長度為11 時就無法滿足需求"
                },
                {
                    "input": "3\n7\n21 15 10",
                    "output": "5",
                    "explanation": "預計使用木條之長度為5時\n木條長21：可切出4段\n木條長15：可切出3段\n木條長10：可切出2段\n總段數為4+3+2=9 段，剛好比需求段數7還要多\n預計使用木條之長度為6 時就無法滿足需求"
                }
            ],
            "testCases": [
                {
                    "input": "1\n5\n100",
                    "expectedOutput": "20",
                    "score": 10
                },
                {
                    "input": "3\n3\n10 10 10",
                    "expectedOutput": "10",
                    "score": 15
                },
                {
                    "input": "2\n5\n50 50",
                    "expectedOutput": "16",
                    "score": 20
                },
                {
                    "input": "5\n10\n100 200 50 120 80",
                    "expectedOutput": "50",
                    "score": 25
                },
                {
                    "input": "4\n6\n15 25 35 45",
                    "expectedOutput": "15",
                    "score": 30
                }
            ],
            "difficulty": "L5",
            "difficultyLabel": "L5｜大師",
            "sb3Path": null
        },
        {
            "id": "cycjunior-006-3-園遊會人潮高峰期",
            "code": "A11-01-cycjunior-006-3-園遊會人潮高峰期",
            "title": "園遊會人潮高峰期",
            "description": "一年一度的校慶園遊會順利落幕了！今年學生會為了讓明年的活動辦得更好，決定用數據來說話。他們在校門口和各個攤位區安裝了「人流感測器」。感測器每隔一段時間（例如每 10 分鐘）就會記錄一次數據，這個數據稱為「人潮淨流量」：\n•\t如果是 正數 (例如 +50)：代表進來的人比出去的人多，人潮正在累積。\n•\t如果是 負數 (例如 -30)：代表離開的人比進來的人多，人潮正在消散。\n學生會會長小華拿到了一長串的數據清單，他想要找出一段連續的時間區間，這段時間內的「淨流量總和」是最大的。這個最大的數值就代表了今年園遊會最「盛況空前」時累積的人氣指數。請注意，如果算出來的最大總和是負數（代表整場活動人都一直在變少，或是沒人來），為了報表好看，請直接將結果歸零，輸出 0。\n請你幫忙寫一個程式，找出這個傳說中的「最大熱門指數」！",
            "examples": [
                {
                    "input": "3\n-1 2 -1",
                    "output": "2",
                    "explanation": "可能組合及其和如下：\n由第1個時段開始 -1,-1+2,-1+2-1\n由第2個時段開始 2 ,2+(-1)\n由第3個時段開始 -1\n以上最大為 2"
                },
                {
                    "input": "4\n-5 -2 -9 -1",
                    "output": "0",
                    "explanation": "所有人流皆為負成長，沒有人潮高峰，輸出 0。"
                }
            ],
            "testCases": [
                {
                    "input": "3\n1 2 3",
                    "expectedOutput": "6",
                    "score": 10
                },
                {
                    "input": "4\n-1 -2 -3 -4",
                    "expectedOutput": "0",
                    "score": 15
                },
                {
                    "input": "5\n2 -1 2 -1 2",
                    "expectedOutput": "4",
                    "score": 20
                },
                {
                    "input": "6\n-2 5 -1 5 -10 2",
                    "expectedOutput": "9",
                    "score": 25
                },
                {
                    "input": "5\n10 -20 30 -5 10",
                    "expectedOutput": "35",
                    "score": 30
                }
            ],
            "difficulty": "L4",
            "difficultyLabel": "L4｜精熟",
            "sb3Path": null
        },
        {
            "id": "nantoJS-006-4",
            "code": "A11-01-nantoJS-006-4",
            "title": "【延伸】星際物資運補-防禦塔的能量負載",
            "description": "基地外圍有 N 座依序排列的雷射防禦塔，其能量需求分別為 E1, E2, …, EN。現有 M 台發電機需負責供電，配置規則如下：每台發電機必須負責供應「連續區間」的防禦塔（不可跳號）。所有防禦塔都必須被供電，且每座塔僅由一台發電機負責。請規劃 M 台發電機的負責範圍，使得所有發電機中「負擔最重（能量總和最大）」的那一台，其數值盡可能小。即：求出一組劃分方式，讓「各區段和的最大值」最小化 (Minimize the Maximum Sum)。\n【範例說明】假設 N=3（能量需求：2, 5, 8），M=2（2 台發電機）。\n分法一：第一台負責第 1 座（能量 2）；第二台負責第 2~3 座（能量 5+8=13）。\n這時兩台的負荷分別是 2 和 13，其中負擔最重的是 13。\n分法二：第一台負責第 1~2 座（能量 2+5=7）；第二台負責第 3 座（能量 8）。\n這時兩台的負荷分別是 7 和 8，其中負擔最重的是 8。\n結果：分法二的最大負荷較小，故最佳解為 8",
            "examples": [
                {
                    "input": "5\n2\n7 2 5 10 8",
                    "output": "18",
                    "explanation": "我們有 5 座塔，要分成 2 組發電。策略 A (較差)：\n切分成 (7, 2, 5, 10) 與 (8)。\n第一台負擔 24，第二台負擔 8。最大負荷是 24。策略 B (最佳)：\n切分成 (7, 2, 5) 與 (10, 8)。第一台負擔 14，第二台負擔 18。這是所有分法中最大負荷最小的結果。"
                },
                {
                    "input": "4\n4\n1 2 3 4",
                    "output": "4",
                    "explanation": "發電機數量剛好跟塔一樣多，所以每台各負責一座。\n負荷分別是 1, 2, 3, 4。其中最大的負荷是 4。"
                },
                {
                    "input": "6\n3\n1 1 1 5 1 1",
                    "output": "5",
                    "explanation": "建議分配如下：\n第一台：負責第 1~3 座 (1+1+1 = 3) 第二台：負責第 4 座 (5) 第三台：負責第 5~6 座 (1+1 = 2) 三台的負荷分別是 3, 5, 2，最大值為 5。"
                }
            ],
            "testCases": [
                {
                    "input": "5\n1\n10 20 30 40 50",
                    "expectedOutput": "150",
                    "score": 10
                },
                {
                    "input": "5\n5\n10 20 30 40 50",
                    "expectedOutput": "50",
                    "score": 15
                },
                {
                    "input": "5\n2\n5 1 2 2 3",
                    "expectedOutput": "7",
                    "score": 20
                },
                {
                    "input": "8\n3\n1 10 2 9 3 8 4 7",
                    "expectedOutput": "19",
                    "score": 25
                },
                {
                    "input": "15\n5\n10 3 5 2 9 11 1 4 8 3 20 21 22 14 13",
                    "expectedOutput": "40",
                    "score": 30
                }
            ],
            "difficulty": "L5",
            "difficultyLabel": "L5｜大師",
            "sb3Path": null
        },
        {
            "id": "W4-05",
            "code": "A11-01-W4-05",
            "title": "【延伸】衛星佈署計畫",
            "description": "台灣正致力於研發自主低軌衛星通訊系統「T-Starlink」，以確保在特殊情況下通訊不中斷。\nTASA 國家太空中心預計在特定的軌道高度上，沿著預定路徑佈署通訊衛星。根據衛星的訊號覆蓋半徑與任務需求，不同路徑段有不同的佈署模式。\n請寫一個程式，根據路徑總長度、衛星間的固定間隔，以及指定的「佈署模式」，計算該路段總共需要佈署多少顆衛星。\n【基本定義】\n• 衛星之間的間隔必須為整數。\n• 若路段長度無法被間隔整除，剩餘不足一個間隔的距離將不佈署衛星（即：計算間隔數時請取整數商）。\n【佈署模式】（依輸入模式編號 M 計算衛星數量）\n1. 模式 1（全線覆蓋）：可佈署段的「起點」與「終點」都必須佈署衛星。\n2. 模式 2（銜接佈署）：僅在「起點」佈署衛星，「終點」不佈署。\n3. 模式 3（受限區域）：起點與終點都不佈署衛星（只佈署中間點）。\n4. 模式 4（全球環繞軌道）：首尾相接的圓形封閉軌道。",
            "examples": [
                {
                    "input": "1000\n200\n1",
                    "output": "6",
                    "explanation": "長度 1000 公里，每 200 公里放一顆。\n間隔數 n = 1000 ÷ 200 = 5。\n模式 1 需含起點與終點，衛星數 = n + 1 = 6。"
                },
                {
                    "input": "1000\n200\n3",
                    "output": "4",
                    "explanation": "長度 1000，間隔 200，間隔數 n = 5。\n模式 3 起點與終點都不佈署，衛星數 = n - 1 = 4。"
                },
                {
                    "input": "1050\n200\n2",
                    "output": "5",
                    "explanation": "1050 ÷ 200 = 5.25，取整數商 n = 5（忽略餘數）。\n模式 2 只佈署起點、不佈署終點，衛星數 = n = 5。"
                },
                {
                    "input": "800\n200\n4",
                    "output": "4",
                    "explanation": "長度 800，間隔 200，n = 4。\n模式 4 為環狀軌道，衛星數 = n = 4。"
                }
            ],
            "testCases": [
                {
                    "input": "1000\n200\n1",
                    "expectedOutput": "6",
                    "score": 10
                },
                {
                    "input": "999\n100\n2",
                    "expectedOutput": "9",
                    "score": 15
                },
                {
                    "input": "1000\n200\n3",
                    "expectedOutput": "4",
                    "score": 20
                },
                {
                    "input": "800\n200\n4",
                    "expectedOutput": "4",
                    "score": 25
                },
                {
                    "input": "50\n200\n3",
                    "expectedOutput": "0",
                    "score": 30
                }
            ],
            "difficulty": "L4",
            "difficultyLabel": "L4｜精熟",
            "sb3Path": null
        },
        {
            "id": "W5-06",
            "code": "A11-01-W5-06",
            "title": "【延伸】山區備援工程",
            "description": "颱風季將至，市府要在山區架設備援通訊設備。現有的基地台連線關係是一棵樹狀結構，編號 1 為主控站，每條連線代表「上級站 → 下級站」。你需要完成三個計算：\n(1) 風險層數：從 1 號站走到最遠的下級站，最多會經過幾條連線（最大層數）。\n(2) 纜線切段：你有 P 條纜線，每條長度為整數。你要把纜線切成「等長」的小段（長度為 L，且 L 必須是正整數），每條纜線最多可切出 ⌊纜線長度 ÷ L⌋ 段，且不能拼接。\n你需要至少「最大層數」段小纜線來完成架設，請找出最大的 L。\n（題目保證：當 L=1 時一定切得出足夠段數。）\n(3) 攀登方式：工程人員要爬上「最大層數」階的梯子，每一步可以爬 1 階或 2 階。請計算走到頂端共有幾種不同走法",
            "examples": [
                {
                    "input": "3 2\n1 2\n2 3\n10 10",
                    "output": "2 10 2",
                    "explanation": "最大層數=2；最大L=10；走法數=2。"
                },
                {
                    "input": "5 3\n1 1 1 1\n2 3 4 5\n5 6 7",
                    "output": "1 7 1",
                    "explanation": "最大層數=1；最大L=7；走法數=1。"
                }
            ],
            "testCases": [
                {
                    "input": "3 2\n1 2\n2 3\n10 10",
                    "expectedOutput": "2 10 2",
                    "score": 10
                },
                {
                    "input": "5 3\n1 1 1 1\n2 3 4 5\n5 6 7",
                    "expectedOutput": "1 7 1",
                    "score": 10
                },
                {
                    "input": "6 2\n1 2 2 4 5\n2 3 4 5 6\n12 7",
                    "expectedOutput": "4 4 5",
                    "score": 10
                },
                {
                    "input": "6 3\n1 2 3 4 5\n2 3 4 5 6\n3 3 3",
                    "expectedOutput": "5 1 8",
                    "score": 10
                },
                {
                    "input": "7 4\n1 1 2 2 3 6\n2 3 4 5 6 7\n9 10 11 12",
                    "expectedOutput": "3 10 3",
                    "score": 10
                },
                {
                    "input": "8 2\n1 2 3 4 1 6 7\n2 3 4 5 6 7 8\n100 1",
                    "expectedOutput": "4 25 5",
                    "score": 10
                },
                {
                    "input": "4 1\n1 2 3\n2 3 4\n10",
                    "expectedOutput": "3 3 3",
                    "score": 10
                },
                {
                    "input": "5 2\n1 1 3 4\n2 3 4 5\n8 8",
                    "expectedOutput": "3 4 3",
                    "score": 10
                },
                {
                    "input": "9 3\n1 2 3 2 5 6 1 8\n2 3 4 5 6 7 8 9\n15 9 6",
                    "expectedOutput": "4 6 5",
                    "score": 10
                },
                {
                    "input": "10 5\n1 1 2 4 5 3 7 8 9\n2 3 4 5 6 7 8 9 10\n20 20 5 5 5",
                    "expectedOutput": "5 6 8",
                    "score": 10
                }
            ],
            "difficulty": "L4",
            "difficultyLabel": "L4｜精熟",
            "sb3Path": null
        }
    ]
};
