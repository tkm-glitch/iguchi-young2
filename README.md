# 井口ヤング 公式サイト — 運営ガイド

> **GitHub Pages で無料公開できる静的サイトです。**  
> HTMLの知識がなくても、このガイドに従えば更新できます。

---

## 📁 ファイル構成（触るのは★のファイルだけ）

```
iguchi-baseball/
├── ★ config.js          ← チーム情報（URL・名前・連絡先）を変えるだけでOK
├── ★ news-list.js       ← 新しい記事を追加するときここに1行書く
├── index.html           ← トップページ（基本触らない）
├── team.html            ← チーム紹介ページ
├── recruit.html         ← 部員募集ページ
├── contact.html         ← お問い合わせページ
├── news/
│   ├── index.html       ← 活動報告一覧（自動生成）
│   ├── ★ template.html ← 記事の「型」←コピーして使う
│   └── 2025-06-15.html  ← 記事サンプル（参考にしてください）
├── css/style.css        ← デザイン（触らない）
└── js/                  ← プログラム（触らない）
```

---

## 🚀 GitHubPages への公開手順（初回のみ）

### 1. GitHubアカウントを作る
→ https://github.com/ でサインアップ（無料）

### 2. リポジトリを作る
1. GitHubにログイン
2. 右上の「＋」→「New repository」
3. Repository name に `iguchi-baseball` と入力
4. 「Public」を選択
5. 「Create repository」をクリック

### 3. ファイルをアップロードする
1. 作成したリポジトリのページを開く
2. 「uploading an existing file」をクリック
3. このフォルダ内のファイルを**全部**ドラッグ&ドロップ
4. 「Commit changes」をクリック

### 4. GitHub Pages を有効にする
1. リポジトリの「Settings」タブ
2. 左メニューの「Pages」
3. Source を「Deploy from a branch」に設定
4. Branch を「main」、フォルダを「/(root)」にして「Save」
5. 数分後に `https://【ユーザー名】.github.io/iguchi-baseball/` で公開完了！

### 5. config.js を更新する
公開URLが決まったら `config.js` の `siteUrl` を書き換えてください。

---

## ✍️ 活動報告（記事）の追加方法

### STEP 1 — テンプレートをコピーする
`news/template.html` を同じフォルダにコピーし、
ファイル名を **`YYYY-MM-DD.html`** に変更します。
（例：`2025-07-20.html`）

### STEP 2 — 記事を書く
コピーしたファイルをテキストエディタ（メモ帳でもOK）で開き、
`【 】` の部分を書き換えてください。コメント（`<!-- -->`内）に
「ここに何を書くか」が書いてあります。

### STEP 3 — news-list.js に1行追加する
`news-list.js` を開いて、一番上に1行追加します。

```js
const NEWS_LIST = [
  { date:"2025-07-20", title:"夏の練習試合！熱戦を制しました", cat:"試合", file:"2025-07-20.html" },  // ← 追加
  { date:"2025-06-15", title:"初夏の練習試合...", cat:"試合", file:"2025-06-15.html" },
  ...
```

**カテゴリ（catの値）は以下の4種類から選んでください：**
- `"試合"` — 試合結果
- `"練習"` — 練習風景
- `"イベント"` — イベント・行事
- `"お知らせ"` — スケジュール変更など

### STEP 4 — GitHubにアップロード
新しいファイルと更新した `news-list.js` をGitHubの同じリポジトリにアップロードすれば、自動でサイトに反映されます。

---

## 📷 写真の追加方法

1. 写真を `images/` フォルダに入れる（例：`images/2025-07-20-01.jpg`）
2. 記事HTML内に以下を書く：

```html
<img src="../images/2025-07-20-01.jpg" alt="試合の様子">
```

---

## ❓ 困ったときのチェックリスト

| 症状 | 確認箇所 |
|------|---------|
| LINEボタンを押しても開かない | `config.js` の `lineUrl` を確認 |
| Instagramのリンクが違う | `config.js` の `instagramUrl` を確認 |
| 記事が一覧に出ない | `news-list.js` の記述ミスを確認（カンマ・引用符） |
| サイトが更新されない | GitHubへのアップロードを確認（数分かかる場合あり） |

---

## 📞 サイト制作について

このサイトはGitHub Pages用の静的HTMLサイトです。  
サーバー代・ドメイン代なし（無料）で運営できます。  
ご不明な点はチームのLINEまたはメールでご連絡ください。
