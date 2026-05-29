# 井口ヤング 公式サイト 運用ガイド

> GitHub Pages で公開する静的サイトです。HTMLの知識がなくてもこのガイドに従えば更新できます。

---

## 📁 ファイル構成

```
iguchi-young2/
├── index.html          ← トップページ
├── team.html           ← チーム紹介
├── blog.html           ← 活動報告一覧（404解消済み）
├── recruit.html        ← 部員募集・体験入部
├── contact.html        ← お問い合わせ
├── config.js           ← ★ チーム情報・URL設定（ここを編集）
├── news-list.js        ← ★ 活動報告の記事リスト（ここに追加）
├── news/
│   ├── template.html   ← 記事の「型」（コピーして使う）
│   ├── 2025-06-08.html ← 記事サンプル①
│   ├── 2025-05-25.html ← 記事サンプル②
│   └── 2025-05-10.html ← 記事サンプル③
├── images/             ← 写真・画像はここに入れる
│   ├── logo.png
│   ├── main-hero.jpg
│   ├── team-photo.jpg
│   ├── gallery1.jpg 〜 gallery6.jpg
│   ├── blog1.jpg 〜 blog3.jpg
│   └── blog-default.jpg（記事のデフォルト画像）
├── css/
│   └── style.css       ← 共通スタイル（通常編集不要）
└── js/
    └── common.js       ← 共通JS（通常編集不要）
```

---

## 🔧 チーム情報・URLを変更する

**`config.js`** を開いて、以下の値を書き換えるだけです。

```js
contact: {
  lineUrl:      "https://lin.ee/oZJ19DI",           // LINE
  instagramUrl: "https://www.instagram.com/iguchiyoung/", // Instagram
  facebookUrl:  "https://www.facebook.com/iguchiyoung",   // Facebook
  email:        "iguchiyoung@gmail.com",             // メール
  ...
}
```

`config.js` を変えれば **全ページのURL・情報が自動で更新** されます。

---

## 📝 活動報告を追加する方法（5分でできます）

### STEP 1 ― 記事ファイルを作る

1. `news/template.html` をコピーする
2. ファイル名を日付にする（例：`news/2025-07-20.html`）
3. ファイルを開いて `←ここを変える` とコメントされた箇所を書き換える

### STEP 2 ― `news-list.js` に追加する

`news-list.js` の **先頭**（`const NEWS_LIST = [` のすぐ下）に追加します：

```js
{
  date:    "2025-07-20",            // YYYY-MM-DD 形式
  title:   "夏季大会 優勝！",        // 記事タイトル
  cat:     "試合結果",               // 試合結果 / 練習風景 / イベント / お知らせ
  excerpt: "今日は夏季大会の決勝...", // 一覧に表示される概要（50文字程度）
  img:     "images/blog4.jpg",      // サムネイル画像（images/ フォルダ内）
  file:    "2025-07-20.html",       // news/ 内のファイル名
},
```

### STEP 3 ― GitHub にアップロードする

変更した `news-list.js` と新しい `news/YYYY-MM-DD.html`、使った画像を GitHub にプッシュすれば完了です。

---

## 🖼️ 画像を追加・変更する

1. 写真ファイルを用意する（JPEG推奨）
2. `images/` フォルダにアップロードする
3. `config.js` または記事HTMLの `src="images/XXX.jpg"` を書き換える

| 画像 | 推奨サイズ | 用途 |
|------|-----------|------|
| `logo.png` | 200×200px | ヘッダーロゴ |
| `main-hero.jpg` | 1920×1080px | トップのヒーロー背景 |
| `team-photo.jpg` | 1200×800px | チーム集合写真 |
| `gallery1〜6.jpg` | 800×800px（正方形） | ギャラリー |
| `blog1.jpg` など | 800×600px | 記事サムネイル |

---

## 📱 SNSリンク一覧（現在の設定）

| SNS | URL |
|-----|-----|
| 公式 LINE | https://lin.ee/oZJ19DI |
| Instagram | https://www.instagram.com/iguchiyoung/ |
| Facebook | https://www.facebook.com/iguchiyoung |
| メール | iguchiyoung@gmail.com |

---

## 📬 お問い合わせフォームを動かすには

現在のフォームは**バリデーションのみ**で、実際の送信処理は接続されていません。
以下のどちらかで送信機能を追加できます：

### 方法① Formspree（無料・簡単）
1. https://formspree.io でアカウント作成
2. フォームIDを取得
3. `contact.html` 内のコメント部分を書き換える：

```js
// ★ 実際の送信処理をここに追加
fetch('https://formspree.io/f/【取得したID】', {
  method: 'POST',
  body: new FormData(this),
  headers: { 'Accept': 'application/json' }
}).then(() => { /* 送信完了処理 */ });
```

### 方法② Google フォームへリダイレクト
Googleフォームで受信フォームを作り、`action` に URL を設定する方法もあります。

---

## 🚀 GitHub Pages への公開手順

1. このフォルダを `iguchi-young2` という名前の GitHub リポジトリに push する
2. リポジトリの **Settings → Pages** を開く
3. Source を `main` ブランチ、`/ (root)` に設定して **Save**
4. 数分後に `https://tkm-glitch.github.io/iguchi-young2/` で公開される

---

*© 2025 井口ヤング*
