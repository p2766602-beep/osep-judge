# osep-judge｜Scratch介面程式解題平台

從`osep-scratch-editor`（ESP8266 SmartRing硬體+LED模擬器教學平台，路徑`D:\yosep\osep-scratch-editor`
／`C:\yosep\osep-scratch-editor`，繼續獨立運作、完全沒動）複製建立的**獨立新專案**，
2026-08-04起改走純解題路線：保留scratch-vm真正的執行引擎，砍掉舞台/角色/造型/音效UI，
改成「積木畫布＋題目評分面板」的Scratch程式解題平台，比照官方平台
`https://demo.csie.ntnu.edu.tw/ps/solo?quiz=scratch-card`的版面與評分機制，
並導入BlocklyYdws（`D:\yosep\BlocklyYdws`）已開發的M0~M2程式解題課程內容。

GitHub：`https://github.com/p2766602-beep/osep-judge`（public，2026-08-04從private改過來）。

## 最近一次工作階段交接（2026-08-04）

**MVP-33-0 ~ 33後續全部完成，且已經在瀏覽器裡完整端對端實測通過**：課程/題目瀏覽清單
→點選任務→說明分頁→載入範例（demo答案積木正確顯示在畫布）→評分分頁→執行評分
→**真正拿到40/40分**（BlocklyYdws M0-01第一小題「Hello world」的4筆測資全部通過）
→評分紀錄分頁正確顯示localStorage歷史紀錄。完整技術細節、評分引擎關鍵陷阱
（QUESTION/ANSWER/SAY事件攔截、視覺角色visible=false避免echo污染輸出）見
`docs/MVP-33_JUDGE_ENGINE_VALIDATION.md`。

**GitHub Pages部署現況（本次交接時尚未確認成功，下一輪第一件事）**：已跑過
`npm run build && npm run deploy`，`gh-pages`分支確認有內容（build產物都在）；
repo已改成public；使用者已在Settings→Pages把來源從main切到gh-pages分支並存檔。
但截至交接當下，`https://p2766602-beep.github.io/osep-judge/`實測還是404，
GitHub Pages API（`/repos/p2766602-beep/osep-judge/pages`）也回404，代表Pages服務
本身可能還沒真的建置起來（可能只是需要等待GitHub處理，也可能設定沒存到）。
**下一輪先重新確認這個網址能不能打開，不行的話回去Settings頁面再檢查一次。**

**`gh` CLI狀況**：2026-08-04用`winget install --id GitHub.cli`裝在這台學校電腦上
（版本2.97.0，路徑`C:\Program Files\GitHub CLI\gh.exe`）。**尚未執行`gh auth login`**——
這步需要使用者自己跑互動式登入（Claude不會也不該代操作帳號登入），登入後才能用
`gh`指令操作這個repo（例如查Pages部署狀態、開PR等）。換到新的終端機session後
PATH應該就會抓到`gh`，不需要再打完整路徑。

## 已知待辦（依優先度）

1. **確認GitHub Pages真的上線**（見上方）。
2. **`gh auth login`**：使用者親自執行，之後才能用gh CLI輔助後續repo操作。
3. **擴大題目範圍**：目前只有M0-01第一小題（`A-01-0`）有完整內容
   （`src/lib/judge-content.js`），BlocklyYdws的M0其餘5題+M1+M2都還沒轉換。
   轉換方法/踩坑記錄見`docs/MVP-33_JUDGE_ENGINE_VALIDATION.md`跟
   `scripts/judge-dev-tools/build-m0-01-sb3.js`（可當範本）。
4. 本機資料夾改名（`osep-scratch-judge`→`osep-judge`，之前被鎖住沒做完，純本機路徑問題，
   不影響GitHub上的repo名稱，優先度低，使用者可自行手動改）。

## 重要環境注意事項

- **Chrome Remote Desktop（CRD）開著時，Claude的瀏覽器自動化工具（`claude-in-chrome`）
  會連不到這台電腦的localhost**（能連外部網站，但連不到本機dev server），需要視覺驗證前
  務必先確認使用者有沒有開著CRD、請先斷開。完整除錯過程跟已排除的假設見私有記憶
  `feedback_chrome_remote_desktop_conflicts_with_browser_automation.md`，不用重新從頭排查。
- 這台是**學校電腦**（`DESKTOP-GVEE6GT`），YOSEP其餘三個子專案換電腦時的雙電腦同步規則
  （見根目錄`CLAUDE.md`）同樣適用於這裡：換機器要記得`git pull`同步。
