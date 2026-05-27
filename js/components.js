/**
 * components.js — ヘッダー・フッターの共通部品
 * ※ 触らなくてOKです
 */

function renderHeader(depth = "") {
  const d = depth; // "" = ルート, "../" = サブフォルダ
  document.querySelector("#site-header").innerHTML = `
    <div class="header-inner">
      <a href="${d}index.html" class="site-logo">
        <span class="logo-icon">⚾</span>
        <span>
          <span data-team-name>チーム名</span>
          <span class="logo-sub">少年野球クラブ</span>
        </span>
      </a>
      <nav class="global-nav" aria-label="グローバルナビ">
        <a href="${d}index.html">ホーム</a>
        <a href="${d}team.html">チーム紹介</a>
        <a href="${d}news/index.html">活動報告</a>
        <a href="${d}recruit.html">部員募集</a>
        <a href="${d}contact.html">お問い合わせ</a>
        <a class="nav-line" href="#" data-line-href>💬 LINE相談</a>
      </nav>
      <button class="hamburger" aria-label="メニューを開く" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav class="mobile-nav" aria-label="モバイルナビ">
      <a href="${d}index.html">🏠 ホーム</a>
      <a href="${d}team.html">🛡 チーム紹介</a>
      <a href="${d}news/index.html">📰 活動報告</a>
      <a href="${d}recruit.html">⭐ 部員募集・体験入部</a>
      <a href="${d}contact.html">✉️ お問い合わせ</a>
      <a class="nav-line" href="#" data-line-href>💬 LINEで気軽に相談する</a>
    </nav>
  `;
}

function renderFooter(depth = "") {
  const d = depth;
  document.querySelector("#site-footer").innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <p class="brand-name">⚾ <span data-team-name>チーム名</span></p>
          <p>小学生を対象とした地域の少年野球クラブです。<br>
             野球未経験のお子さんも大歓迎！</p>
          <div class="footer-sns">
            <a href="#" data-line-href>💬 LINE</a>
            <a href="#" data-insta-href>📸 Instagram</a>
          </div>
        </div>
        <div>
          <p class="footer-nav-title">MENU</p>
          <nav class="footer-nav">
            <a href="${d}index.html">ホーム</a>
            <a href="${d}team.html">チーム紹介</a>
            <a href="${d}news/index.html">活動報告</a>
            <a href="${d}recruit.html">部員募集・体験入部</a>
            <a href="${d}contact.html">お問い合わせ</a>
          </nav>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 <span data-team-name>チーム名</span>. All rights reserved.</p>
      </div>
    </div>
  `;
}

function renderFixedLine() {
  document.querySelector("#fixed-line").innerHTML =
    `<a class="fixed-line" href="#" data-line-href>💬 LINEで相談する</a>`;
}
