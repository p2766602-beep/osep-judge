# MVP-33-0 ~ 33-2：純解題模式起點 + 評分引擎技術驗證

## MVP-33-0：移除硬體/模擬器內容

`osep-judge`從`osep-scratch-editor`（2026-06-24版，feature/osep-extension-menu分支）複製建立，
移除了`static/osep`整包（SmartRing WebSerial擴充、LED模擬器、ch04~07硬體課程）、
`src/lib/libraries/extensions/index.jsx`的OSEP SmartRing擴充選單項目、
`src/containers/tw-security-manager.jsx`的信任路徑、`docs/`底下的硬體時期MVP紀錄。
`osep-scratch-editor`本身完全沒動、繼續運作。

## MVP-33-0.5：UI瘦身

`src/components/gui/gui.jsx`：移除造型/音效分頁（Costumes/Sounds Tab+TabPanel）、
移除角色列表面板（TargetPane）。**StageWrapper保留掛載但視覺隱藏**（`.hidden-stage`：
`position:absolute; width:1px; height:1px; opacity:0`）——不是整個移除，因為
`vm.attachRenderer()`是在`src/containers/stage.jsx`的componentDidMount裡呼叫的，
拿掉StageWrapper會讓VM完全沒有attach renderer，有未知風險，保留掛載但隱藏最安全。
新增`.judge-panel-wrapper`佔位區塊（MVP-33-3待補題目面板）。

`npm run build`、`npm start`皆驗證通過。**注意：Chrome瀏覽器擴充功能本次工作階段沒連線，
沒有做到實際視覺/操作驗證，只做到build成功+dev server編譯成功+curl確認HTTP 200。
下次有瀏覽器時務必實際打開`http://localhost:8601/editor.html`確認畫面正常、積木可拖拉。**

## MVP-33-1 + 33-2：評分引擎技術驗證（核心風險項，已完整驗證通過）

### 驗證方式

寫了headless Node腳本（不需要瀏覽器），直接用`scratch-vm`套件（已是`node_modules`依賴）
在純Node環境載入手動建構的project.json / 真正的.sb3 zip檔，跑greenFlag，驗證整條
「評分引擎」技術路徑是否可行。

### 關鍵技術細節（從scratch-vm原始碼確認，不是猜測）

1. **`vm.loadProject(input)`** 接受plain JSON object或zip Buffer，內部用`scratch-parser`
   驗證格式，不需要storage/renderer就能成功載入（沒有storage時costume資產無法解析出
   實際圖檔內容，只會印warning，不影響blocks/variables結構，不影響執行）。
2. **一定要呼叫`vm.start()`**（不是只呼叫`vm.greenFlag()`）：`greenFlag()`只是把
   green-flag hat排入thread佇列，真正驅動每一步執行的是`runtime.start()`啟動的
   `frameLoop`（`src/engine/tw-frame-loop.js`，用`setInterval`每33ms跑一次`runtime._step()`，
   在Node環境會polyfill掉`requestAnimationFrame`，純Node可以正常運作）。
3. **QUESTION/ANSWER事件**（`src/blocks/scratch3_sensing.js`）：
   - 監聽`vm.runtime.on('QUESTION', question => {...})`，收到非null的question就代表
     程式在等作答，呼叫`vm.runtime.emit('ANSWER', 下一筆測資的input)`即可繼續執行。
   - **關鍵陷阱**：角色`visible=true`時，`_askNextQuestion()`會把問題文字透過
     `runtime.emit('SAY', target, 'say', question)`echo成說話泡泡，這會污染評分用的
     SAY輸出擷取（會多出問題文字本身）。**執行評分前必須強制所有非stage角色
     `visible=false`**，這樣QUESTION事件才會直接帶真正問題文字、不會有SAY echo。
     已寫成`prepareVmForGrading(vm)`函式，見下方。
4. **SAY事件**（`src/blocks/scratch3_looks.js`）：`runtime.on('SAY', (target, type, text) => {...})`，
   `type === 'say'`對應`looks_say`（「說出」積木），`type === 'think'`對應「思考」——
   評分規則比照BlocklyYdws main.js，**只採計`type === 'say'`的內容**，跟BlocklyYdws
   「只認說出、不認輸出」的規則完全一致。
5. **逾時保護**：用固定執行步數上限（`MAX_STEPS`，一步對應timer觸發一次，非runtime內部
   `_step()`次數，但兩者同步進行、效果等價），超過視為逾時失敗。clone數上限則直接交給
   scratch-vm自己內建的`runtime.runtimeOptions.maxClones`機制把關，不用另外實作
   （見`runtime.js`的`_cloneCounter`/`canAddClones()`）。這是MVP-33拍板決策
   「固定執行步數/clone數上限」的完整實作依據。

### 產出物

- `src/lib/tw-judge-engine.js`：正式評分引擎模組，匯出`runTestCase()`、
  `gradeSubmission()`、`prepareVmForGrading()`。
- `content/m0/M0-01-BasicOutput/A-01-0.sb3`：BlocklyYdws M0-01第一小題（Hello world）
  手動轉換的真正Scratch .sb3範例答案。積木對照：
  `event_whenflagclicked`（同名，Scratch原生本來就有）、
  `interaction_ask_and_wait`→`sensing_askandwait`、
  `interaction_answer`→`sensing_answer`、`interaction_say`→`looks_say`。
  costume/backdrop資產直接沿用`src/lib/default-project/`的既有素材（同一份dango-cat.svg），
  不用另外生圖，md5ext對得上原始hash。
- `scripts/judge-dev-tools/build-m0-01-sb3.js`：產生上述.sb3檔的腳本（下一題可以照樣抄）。
- `scripts/judge-dev-tools/verify-m0-01-sb3.js`：用正式`tw-judge-engine.js`模組跑
  BlocklyYdws原本的4筆測資（John/Marry/Sam/Tom），驗證分數計算正確。

### 驗證結果

`node scripts/judge-dev-tools/build-m0-01-sb3.js && node scripts/judge-dev-tools/verify-m0-01-sb3.js`：

```
"John" => PASS（實際："Hello, John"）
"Marry" => PASS（實際："Hello, Marry"）
"Sam" => PASS（實際："Hello, Sam"）
"Tom" => PASS（實際："Hello, Tom"）
總分：40/40
```

另外手動測過故意給錯的expectedOutput，確認會正確判FAIL、分數計為0（不是無論如何都PASS）。

**這代表整個MVP-33計畫裡風險最高的技術假設——「用scratch-vm原生ask/say事件攔截做評分，
比照BlocklyYdws只認說出的規則」——已經完整驗證成立，且用的是真正寫到硬碟的.sb3 zip檔、
走完整zip載入路徑（比記憶體JSON物件更接近瀏覽器實際載入方式）。**

## 待補（下一輪）

1. **瀏覽器實際驗證**：本次工作階段Chrome擴充功能沒連線，MVP-33-0.5的UI瘦身只做到
   build/dev-server層級驗證，沒有真的在瀏覽器打開看畫面、點過積木。**這是下一輪第一
   優先事項**，確認純解題模式UI骨架實際可用。
2. **MVP-33-3**：最小題目面板（先只顯示敘述/範例，不含評分）+ courseCode載入單一課程，
   仿官方平台（demo.csie.ntnu.edu.tw/ps）的說明/自行測試/評分/評分紀錄四分頁版面。
3. **MVP-33-4**：面板加上「送出評分」按鈕，串接`tw-judge-engine.js`的`gradeSubmission()`，
   把評分引擎從Node腳本驗證，接進真正的React UI（在瀏覽器裡對學生當下的VM執行狀態評分）。
4. folder改名（`osep-scratch-judge`→`osep-judge`）本次工作階段被Windows Defender鎖住
   node_modules卡住沒完成，不影響任何已完成的工作，之後有空自己手動改或再重試即可。
