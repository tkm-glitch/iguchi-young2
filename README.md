# 井口ヤング 公式サイト 運用ガイド

> このサイトは **HTMLの知識がなくても記事を投稿できる**設計になっています。

---

## 🗂️ ファイル構成

```
iguchi-young3/
├── index.html       ← トップページ
├── team.html        ← チーム紹介
├── blog.html        ← 活動報告 一覧
├── post.html        ← 活動報告 記事表示（1枚で全記事を表示）
├── recruit.html     ← 部員募集・体験入部
├── contact.html     ← お問い合わせ
├── admin.html       ★ 記事投稿ツール（ここから投稿する）
│
├── config.js        ← チーム情報・SNS URL（変更時はここを編集）
├── news-list.js     ★ 記事データ（新記事を追加する場所）
│
├── images/          ← 写真はここに入れる
├── css/style.css    ← デザイン（通常編集不要）
└── js/common.js     ← 共通JS（通常編集不要）
```

---

## ✍️ 新しい記事を投稿する手順（5分でできます）

### 方法① ブラウザで `admin.html` を使う（おすすめ）

1. **`admin.html` をブラウザで開く**
2. **フォームに入力する**（タイトル・日付・カテゴリ・本文）
3. **「コード」タブをクリック** → 「コピーする」ボタンを押す
4. **GitHub で `news-list.js` を開く**（下記リンク）
5. **`/* ▼▼▼ ここに貼り付け↓ ▼▼▼ */` という行を探す**
6. **その次の行にコピーしたコードを貼り付ける**
7. **「Commit changes」ボタンを押す** → 完成！

---

### 方法② `news-list.js` を直接編集する

`news-list.js` の先頭の `/* ▼▼▼ ここに貼り付け↓ ▼▼▼ */` のすぐ下に、
以下の形式でコピー＆ペーストして追加します：

```js
{
  id:      "2025-07-20",         // ← 日付（YYYY-MM-DD形式、IDとして使用）
  date:    "2025年7月20日",       // ← 表示される日付
  cat:     "試合結果",            // ← 試合結果 / 練習風景 / イベント / お知らせ
  title:   "夏季大会 優勝！",      // ← 記事タイトル
  excerpt: "今日は夏季大会...",    // ← 一覧に表示される概要（50文字程度）
  img:     "blog4.jpg",           // ← images/ フォルダの画像ファイル名
  body: `
今日は三鷹市グラウンドで夏季大会の決勝が行われました。

【見出し】試合の流れ
序盤から積極的な攻撃で先制し...

【結果】井口ヤング 7 - 2 相手チーム

【次回予告】
7月27日（日）通常練習に戻ります！
  `,
},
```

---

## ✏️ 本文で使えるタグ一覧

| タグ | 表示 |
|------|------|
| `【見出し】タイトル` | 赤い小見出し |
| `【結果】スコア` | 試合結果の赤いボックス |
| `【次回予告】内容` | 緑色の次回予告ボックス |
| `【紹介】内容` | 青色の紹介ボックス |
| `【ヒーロー】名前` | 金色のヒーローボックス |
| 空行 | 段落の区切り |

---

## 🖼️ 写真を追加する

1. 写真ファイル（JPEG推奨）を `images/` フォルダにアップロード
2. `news-list.js` の該当記事の `img:` にファイル名を書く

```js
img: "blog4.jpg",   // images/blog4.jpg を使う場合
```

| 画像 | 推奨サイズ | 用途 |
|------|-----------|------|
| `logo.png` | 200×200px | ヘッダーロゴ |
| `main-hero.jpg` | 1920×1080px | トップの背景 |
| `gallery1〜6.jpg` | 800×800px | ギャラリー |
| `blog1.jpg〜` | 800×600px | 記事サムネイル |

---

## 🔧 チーム情報・URLを変更する

`config.js` を開いて書き換えるだけです：

```js
contact: {
  lineUrl:      "https://lin.ee/oZJ19DI",
  instagramUrl: "https://www.instagram.com/iguchiyoung/",
  facebookUrl:  "https://www.facebook.com/iguchiyoung",
  email:        "iguchiyoung@gmail.com",
}
```

---

## 📱 SNSリンク一覧

| SNS | URL |
|-----|-----|
| LINE | https://lin.ee/oZJ19DI |
| Instagram | https://www.instagram.com/iguchiyoung/ |
| Facebook | https://www.facebook.com/iguchiyoung |
| メール | iguchiyoung@gmail.com |

---

## 📬 お問い合わせフォームを送信できるようにする

現在のフォームはバリデーションのみです。実際の送信には **Formspree**（無料）が便利です：

1. https://formspree.io でアカウント作成・フォームID取得
2. `contact.html` 内のコメント箇所を下記に書き換え：

```js
fetch('https://formspree.io/f/【取得したID】', {
  method:'POST', body: new FormData(this),
  headers:{'Accept':'application/json'}
})
```

---

## 🚀 GitHub Pages への公開

1. このフォルダを `iguchi-young2` リポジトリに push
2. **Settings → Pages** → Source: `main` ブランチ・`/(root)` → Save
3. `https://tkm-glitch.github.io/iguchi-young2/` で公開

---

*© 2025 井口ヤング*
