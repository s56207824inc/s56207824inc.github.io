# s56207824inc.github.io

iOS 作品頁。網址：https://s56207824inc.github.io

## 更新內容

1. 編輯 `index.html`。搜尋 `[`，把所有方括號裡的文字換成實際內容。
   新增 feature 時，複製一個 `<section class="slide">` 區塊，再改 `--shade` 顏色、影片路徑和文字。
2. push 到 `main`。GitHub Pages 會在 1–2 分鐘內自動更新。

## 錄影

```sh
# 統一狀態列（9:41、滿電）
xcrun simctl status_bar booted override --time 9:41 --batteryState charged --batteryLevel 100

# 錄影，按 Ctrl+C 停止
xcrun simctl io booted recordVideo raw.mov

# 壓縮：高 960px、30fps、無聲、可以邊下載邊播放
ffmpeg -i raw.mov -vf "scale=-2:960,fps=30" -c:v libx264 -crf 28 -preset slow -an -movflags +faststart assets/videos/feature-1.mp4

# 取第一格當封面
ffmpeg -i assets/videos/feature-1.mp4 -frames:v 1 -q:v 3 assets/videos/feature-1.jpg
```

每支影片保持在 5 MB 以下。實機錄影用 QuickTime（檔案 → 新增影片錄製 → 選 iPhone）。

## 檢查

- 用手機打開網址。
- 用無痕視窗打開，確認不用登入。
- 確認沒有內部畫面、原始碼或還沒上線的功能。
