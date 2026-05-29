/**
 * 井口ヤング 共通 JavaScript
 * 全ページで読み込む共通処理（ナビ・フローティングLINE・スクロール演出）
 * @param {object} opts
 *   root      : ルートへの相対パス ('.' = ルートページ, '..' = newsフォルダ内)
 *   activePage: 現在のページファイル名 ('index.html' など)
 */
function initSite({ root = '.', activePage = '' } = {}) {
  const C = SITE_CONFIG;

  // ──────────────────────────────────────
  // 1. SNS URL を全ての該当要素に設定
  // ──────────────────────────────────────
  const setHref = (cls, url) =>
    document.querySelectorAll(cls).forEach(el => el.href = url);

  setHref('.js-line',      C.contact.lineUrl);
  setHref('.js-instagram', C.contact.instagramUrl);
  setHref('.js-facebook',  C.contact.facebookUrl);

  // ──────────────────────────────────────
  // 2. ナビゲーション生成（デスクトップ・モバイル共通）
  // ──────────────────────────────────────
  const navItems = root === '..' ? C.navFromNews : C.nav;

  function buildNav(containerId, isMobile) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = navItems.map(n => {
      const isActive = activePage && n.href.endsWith(activePage);
      const base = isMobile
        ? `block px-5 py-3 text-sm font-medium hover:bg-red-50 hover:text-red-team transition-colors`
        : `px-3 py-1.5 text-sm font-medium rounded-lg hover:bg-red-50 hover:text-red-team transition-colors`;
      const active = isActive ? ' text-red-team font-bold' : ' text-gray-700';
      return `<a href="${n.href}" class="${base}${active}">${n.label}</a>`;
    }).join('');
  }
  buildNav('desktop-nav', false);
  buildNav('mobile-nav',  true);

  // ──────────────────────────────────────
  // 3. ハンバーガーメニュー
  // ──────────────────────────────────────
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobile-menu');
  if (ham && mob) {
    ham.addEventListener('click', () => mob.classList.toggle('open'));
  }

  // ──────────────────────────────────────
  // 4. フッターナビ
  // ──────────────────────────────────────
  const fn = document.getElementById('footer-nav');
  if (fn) {
    fn.innerHTML = navItems.map(n =>
      `<a href="${n.href}" class="hover:text-white transition-colors">${n.label}</a>`
    ).join('');
  }

  // ──────────────────────────────────────
  // 5. スクロール reveal アニメーション
  // ──────────────────────────────────────
  const observer = new IntersectionObserver(entries =>
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ──────────────────────────────────────
  // 6. 画像エラー時の背景フォールバック
  // ──────────────────────────────────────
  document.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', function() {
      this.style.background = this.dataset.fallback || '#fef2f2';
      this.removeAttribute('src');
      this.onerror = null;
    });
  });
}
