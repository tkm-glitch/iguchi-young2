/**
 * 井口ヤング 公式サイト 設定ファイル
 * ★ここを編集するだけでサイト全体の情報が更新されます★
 * HTMLの知識は不要です。値だけ書き換えてください。
 */

const SITE_CONFIG = {

  /* ───────── 基本情報 ───────── */
  name:        "井口ヤング",
  nameEn:      "IGUCHI YOUNG",
  tagline:     "楽しく・礼儀正しく・仲間を大切に",
  established: "1975",   // ← 実際の創設年に変更してください
  description: "東京都三鷹市の少年野球チーム・井口ヤング。小学1年生〜6年生 男女不問。体験入部随時受付中！",

  /* ───────── 連絡先・SNS ───────── */
  contact: {
    lineUrl:          "https://lin.ee/oZJ19DI",
    lineId:           "@iguchiyoung",
    instagramUrl:     "https://www.instagram.com/iguchiyoung/",
    instagramHandle:  "@iguchiyoung",
    facebookUrl:      "https://www.facebook.com/iguchiyoung",
    email:            "iguchiyoung@gmail.com",

    // 練習場所（複数あるため代表を記載）
    practiceLocation: "三鷹市立 にしみたか学園 井口小学校グラウンド",
    practiceAddress:  "東京都三鷹市",
    practiceNote:     "三鷹市井口特設グラウンド・大沢グラウンドも使用します。詳細は公式LINEにてご確認ください。",
    practiceSchedule: "主に土曜・日曜・祝日 9:00〜17:00（学年により異なります）",
    experienceNote:   "事前申込不要。直接グラウンドにお越しください！都合の良い時間帯のみの参加もOK。",
  },

  /* ───────── ナビゲーション ───────── */
  nav: [
    { label: "ホーム",       href: "index.html"   },
    { label: "チーム紹介",   href: "team.html"    },
    { label: "活動報告",     href: "blog.html"    },
    { label: "部員募集",     href: "recruit.html" },
    { label: "お問い合わせ", href: "contact.html" },
  ],

  // news/ 配下から参照するときのナビ（../ が付く）
  navFromNews: [
    { label: "ホーム",       href: "../index.html"   },
    { label: "チーム紹介",   href: "../team.html"    },
    { label: "活動報告",     href: "../blog.html"    },
    { label: "部員募集",     href: "../recruit.html" },
    { label: "お問い合わせ", href: "../contact.html" },
  ],

  /* ───────── 数字で見るチーム ───────── */
  stats: [
    { label: "活動エリア", value: "三鷹市" },
    { label: "対象",       value: "1〜6年生" },
    { label: "男女",       value: "男女不問" },
    { label: "体験入部",   value: "随時受付" },
  ],

  /* ───────── 実績 ───────── */
  achievements: [
    "2021年度 三鷹市少年軟式野球連盟 夏季大会 準優勝",
    "2021年度 東京都市町村対抗軟式野球大会 出場",
    "2021年度 三鷹市少年軟式野球連盟 秋季大会 ベスト4",
    "2021年度 三鷹市少年軟式野球連盟 秋季大会 Bチーム 準優勝",
  ],

  /* ───────── チームの理念 ───────── */
  philosophy: [
    { icon:"⚾", title:"楽しく野球を",  desc:"まずは「野球って楽しい！」と感じてもらうことを最優先に、基礎から丁寧に指導します。" },
    { icon:"🙏", title:"礼儀を学ぶ",   desc:"挨拶・礼節を通じて、野球だけでなく人としての成長をサポートします。" },
    { icon:"🤝", title:"仲間を大切に", desc:"明るくアットホームな雰囲気で、一生の仲間と出会える場所を目指しています。" },
  ],

  /* ───────── よくある質問 ───────── */
  faq: [
    { q:"保護者の負担はありますか？", a:"当番制がありますが、共働きのご家庭も多く在籍しており、無理のない範囲での参加をお願いしています。体験入部時に詳しくご説明します。" },
    { q:"道具は最初から全部揃えないといけませんか？", a:"体験中はグローブ・バットを貸し出します。入部が決まってから少しずつ揃えていただければ大丈夫です！" },
    { q:"野球未経験でも大丈夫ですか？", a:"もちろん大歓迎！男女問わず経験不問で入団できます。基礎からていねいに指導しますのでご安心ください。" },
    { q:"体験はいつでも来られますか？", a:"事前申込不要。都合の良い時間帯だけの参加もOKです。まずは公式LINEでグラウンドの場所・日程をご確認ください。" },
    { q:"費用はどれくらいかかりますか？", a:"月会費などの詳細は公式LINEまたはメールにてお気軽にお問い合わせください。体験参加は無料です。" },
  ],

  /* ───────── 体験入部の流れ ───────── */
  experienceFlow: [
    { step:"01", title:"LINEで日程を確認",       desc:"公式LINEで直近の練習日・グラウンドを確認。事前連絡なしで来てもOK！" },
    { step:"02", title:"動きやすい服装で来てね", desc:"運動できる服装・靴でOK。道具は貸し出します。手ぶらで来てください！" },
    { step:"03", title:"みんなと一緒に練習",     desc:"キャッチボールや簡単なゲームから体験。先輩部員がやさしく教えます。" },
    { step:"04", title:"保護者の方と懇談",       desc:"練習中に担当者がチームについて詳しくご説明。どんな疑問も遠慮なくどうぞ！" },
  ],

  /* ───────── 画像パス（images/ フォルダ内） ───────── */
  images: {
    logo:        "images/logo.png",
    heroMain:    "images/main-hero.jpg",
    teamPhoto:   "images/team-photo.jpg",
    teamHero:    "images/team-hero.jpg",
    recruitHero: "images/recruit-hero.jpg",
    ogImage:     "images/og-image.jpg",
    blogDefault: "images/blog-default.jpg",
    gallery: [
      "images/gallery1.jpg","images/gallery2.jpg","images/gallery3.jpg",
      "images/gallery4.jpg","images/gallery5.jpg","images/gallery6.jpg",
    ],
    coaches: [
      { name:"監督 氏名",   role:"監督",  img:"images/coach1.jpg" },
      { name:"コーチ 氏名", role:"コーチ", img:"images/coach2.jpg" },
      { name:"コーチ 氏名", role:"コーチ", img:"images/coach3.jpg" },
    ],
  },

  /* ───────── 最新の活動報告（仮データ） ───────── */
  /* ── トップページに表示する最新3件（news-list.js と同期してください）── */
  recentPosts: [
    { date:"2025年6月8日",  category:"試合結果", title:"春季大会 準決勝進出！熱戦を制して4強入り",  excerpt:"先週末に行われた春季大会の準々決勝で、井口ヤングが見事勝利！準決勝への切符を手にしました。", img:"images/blog1.jpg", href:"post.html?id=2025-06-08"  },
    { date:"2025年5月25日", category:"練習風景", title:"バッティング練習で全員ホームラン達成！",     excerpt:"今週の練習では全部員がホームラン性の当たりを放ちました。春の大会に向けて打撃絶好調です！", img:"images/blog2.jpg", href:"post.html?id=2025-05-25"  },
    { date:"2025年5月10日", category:"イベント",  title:"新入部員歓迎会！2名の仲間が加わりました", excerpt:"5月より2名の新しい仲間が入部。早速みんなと打ち解けて楽しく練習しています。",           img:"images/blog3.jpg", href:"post.html?id=2025-05-10"  },
  ],

};
