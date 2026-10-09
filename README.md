# s56207824inc.github.io

iOS 作品頁。網址：https://s56207824inc.github.io

## 更新內容

1. 編輯 `index.html`，找到 `<article class="feature">`。每個 article 是一頁功能：左邊的作品列表和翻頁按鈕都會從這裡自動產生。
   - `video` 的 `src` 和 `poster`：錄影和封面圖的路徑。
   - `<time>`：上線日期，例如 `2025.06`。
   - 文字都有英文（`lang="en"`）和中文（`lang="zh-Hant"`）兩個版本。搜尋 `[`，把方括號裡的文字換成實際內容。
   - `tags`：用到的技術，例如 Swift、Metal。
   - 每項技術說明保持一到兩句，整頁才能放在一個畫面內。
2. 新增功能：複製一整個 article，再改 `id`（例如 `feature-5`）、影片路徑和文字。
3. push 到 `main`。GitHub Pages 會在 1–2 分鐘內自動更新。

每個功能有自己的網址（例如 `https://s56207824inc.github.io/#feature-2`），可以直接分享某一頁。

## 範例影片

`assets/videos/feature-1.mp4` 到 `feature-4.mp4` 是自動產生的範例影片，網頁會標示「Sample recording / 範例錄影」。
換成真正的錄影後，把那個 article 的 `data-sample` 刪掉。

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
