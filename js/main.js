/**
 * main.js — サイト全体の共通スクリプト
 * ※ 基本的に触らなくてOKです
 */

document.addEventListener("DOMContentLoaded", () => {

  /* ── ヘッダー情報を config.js から自動設定 ── */
  if (typeof SITE !== "undefined") {
    // ロゴのチーム名
    document.querySelectorAll("[data-team-name]").forEach(el => {
      el.textContent = SITE.teamName;
    });
    // LINEリンク
    document.querySelectorAll("[data-line-href]").forEach(el => {
      el.href = SITE.lineUrl;
    });
    // Instagram リンク
    document.querySelectorAll("[data-insta-href]").forEach(el => {
      el.href = SITE.instagramUrl;
    });
    // Instagramアカウント名
    document.querySelectorAll("[data-insta-id]").forEach(el => {
      el.textContent = SITE.instagramId;
    });
  }

  /* ── ハンバーガーメニュー ── */
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      hamburger.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen);
    });
    // メニュー外をクリックで閉じる
    document.addEventListener("click", e => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", false);
      }
    });
  }

  /* ── Q&A アコーディオン ── */
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const isOpen = answer.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen);
    });
  });

  /* ── 現在のページのナビをアクティブ表示 ── */
  const path = location.pathname;
  document.querySelectorAll(".global-nav a, .mobile-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const isHome = (path.endsWith("/") || path.endsWith("index.html")) && href.includes("index.html");
    const isMatch = !isHome && href !== "index.html" && path.includes(href.replace("../", ""));
    if (isHome || isMatch) link.classList.add("active");
  });

  /* ── ニュース一覧を news-list.js から自動生成 ── */
  const newsContainer = document.getElementById("news-auto-list");
  if (newsContainer && typeof NEWS_LIST !== "undefined") {
    const limit = parseInt(newsContainer.dataset.limit) || NEWS_LIST.length;
    const base  = newsContainer.dataset.base || "news/";
    const items = NEWS_LIST.slice(0, limit);

    if (items.length === 0) {
      newsContainer.innerHTML = '<p style="text-align:center;color:#888;padding:24px;">記事はまだありません。</p>';
      return;
    }

    const CAT_ICONS = { "試合":"⚾", "練習":"🏃", "イベント":"🎉", "お知らせ":"📢" };

    newsContainer.innerHTML = items.map(n => {
      const icon = CAT_ICONS[n.cat] || "📝";
      return `
        <a class="news-card" href="${base}${n.file}">
          <div class="news-card-thumb">${icon}</div>
          <div class="news-card-body">
            <div class="news-card-meta">
              <span class="news-card-date">${n.date.replace(/-/g, "/")}</span>
              <span class="cat-badge cat-${n.cat}">${n.cat}</span>
            </div>
            <p class="news-card-title">${n.title}</p>
          </div>
        </a>`;
    }).join("");
  }

});
