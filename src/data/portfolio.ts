export type Locale = "ja" | "en";
export type Localized = Record<Locale, string>;

export type ProjectEvidence = {
  kind: "aio" | "seo";
  title: Localized;
  caption: Localized;
  image: string;
  alt: Localized;
  highlights: Localized[];
};

export type ProjectCaseStudy = {
  sections: { heading: Localized; body: Localized }[];
  evidence: ProjectEvidence[];
  report?: "ouchi-seo";
};

export type Project = {
  id: string;
  number: string;
  title: Localized;
  cardTitle?: Localized;
  dialogSubtitle?: Localized;
  category: Localized;
  summary: Localized;
  detail: Localized;
  image: string;
  fullImage?: string;
  longImage?: boolean;
  alternateImage?: string;
  alt: Localized;
  tags: Localized[];
  badge: Localized;
  href?: string;
  status?: Localized;
  featured?: boolean;
  caseStudy?: ProjectCaseStudy;
};

export const identity = {
  name: { ja: "R.T.", en: "R.T." },
  roles: {
    ja: "AI導入支援・業務自動化・生成AI活用支援を志望",
    en: "Seeking roles in AI adoption support, workflow automation, and generative AI enablement",
  },
  wantedly: "https://www.wantedly.com/id/ryuuuta6o",
  github: "https://github.com/ryuuuta6o/",
  portrait: "/sites/ryutaro/ryutaro-profile-resume.jpg",
};

export const careerInterests: Localized[] = [
  { ja: "AI導入支援・業務自動化・生成AI活用支援", en: "AI adoption support, workflow automation, and generative AI enablement" },
  { ja: "ソリューションエンジニア・業務システム導入支援", en: "Solutions engineering and business systems implementation support" },
  { ja: "AI活用Webマーケティング・SEO／AIO・Webサイト／LP改善", en: "AI-assisted web marketing, SEO and AI search, and website and landing page improvement" },
];

export const copy = {
  ja: {
    nav: ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"],
    hire: "連絡する",
    eyebrow: "FIELD EXPERIENCE × AI WORKFLOWS",
    heroLine: "現場の課題を、",
    heroAccent: "AIで使える仕組みに。",
    heroBody: [
      ["生成AIを活用した業務改善・開発に取り組み、", "顧客の声や業務の流れから課題を整理。"],
      ["業務フローと要件をまとめ、", "生成AIを活用して仕組みを構築し、", "動作確認と運用改善を行っています。"],
    ],
    heroPrimary: "制作実績を見る",
    heroSecondary: "私について",
    scroll: "SCROLL TO EXPLORE",
    aboutEyebrow: "01 / ABOUT",
    aboutTitle: "現場を知ることから、\nつくり始める。",
    aboutLead: "R.T.",
    aboutBody: [
      "生成AIを活用した業務改善・Webアプリ開発に取り組んでいます。利用者へのヒアリングから業務整理、要件の判断、構築、動作確認まで、使える仕組みにすることを大切にしています。",
      "同業の方から個別に依頼を受けたWebアプリやWebサイトの制作にも取り組んでいます。自分の実務で使うシステムでは、業務フローや必要な機能を整理し、ChatGPT、Claude Code、OpenAI Codexを活用して構築しました。要件や画面、例外時の扱いを自分で判断し、動作確認と運用改善を行っています。",
      "今後は生成AIを活用した開発・業務改善を仕事の中心に据えたいと考えています。背景には約7年間の昇降機保守と、2023年からの家電修理業務委託で培った、ヒアリング・原因分析・確認・説明の経験があります。",
    ],
    aboutCards: [
      ["01", "現場の理解", "利用者の声と業務の流れから、解くべき課題を整理します。"],
      ["02", "要件の判断", "必要な画面や情報を決め、使いやすい順序にまとめます。"],
      ["03", "AIを活用した実装", "ChatGPT、Claude Code、Codexなどを制作に活用します。"],
      ["04", "確認と改善", "実際の動作を確かめ、運用に合わせて手直しします。"],
    ],
    skillsEyebrow: "02 / APPROACH",
    skillsTitle: ["制作から", "改善まで。"],
    skillsBody: ["顧客の声から業務を整理し、", "生成AIで試作・構築。", "使いながら改善します。"],
    skillFocus: [
      ["自分の実務で実践したこと", "顧客ヒアリング、業務フロー・要件整理、AIを活用した構築、動作確認、例外を人が確認する運用、実案件での改善。"],
      ["Web制作・集客改善", "Webサイト・LP制作、サービス情報や料金の整理、LINE・フォームへの導線整備。SNS運用、SEO記事の執筆・公開、Googleビジネスプロフィールへの投稿、AIOの情報整備。"],
    ],
    interestsTitle: "希望する仕事",
    preferenceLabel: ["第一希望", "第二希望", "第三希望"],
    projectsEyebrow: "03 / SELECTED WORK",
    projectsTitle: "制作実績",
    projectsBody: "実務用の仕組み、個人制作ツール、ホテル予約のデモ、Web制作・集客改善を紹介します。各作品の用途と公開状態を分けて記載しています。",
    viewAll: "すべての11作品を見る",
    viewLess: "代表作品のみ表示",
    viewDetails: "作品詳細を見る",
    featuredLabel: "代表実績",
    visit: "サイトを見る",
    close: "閉じる",
    nextImage: "別の画面を見る",
    statsEyebrow: "AT A GLANCE",
    stats: [
      ["11", "掲載作品"],
      ["2", "表示言語"],
      ["6", "作品リンクを掲載"],
      ["3", "実装に活用したAIツール"],
    ],
    contactEyebrow: "04 / CONTACT",
    contactTitle: "現場の業務を、\n使える仕組みへ。",
    contactBody: ["AI導入支援・業務自動化を第一希望に、", "顧客の業務整理から構築・検証、", "導入後の改善まで携わりたいと考えています。", "WantedlyまたはGitHubからご連絡ください。"],
    contactPrimary: "Wantedlyで連絡",
    contactSecondary: "GitHubを見る",
    footer: "R.T. — 現場から、業務の改善へ。",
    language: "English",
    motionOff: "動きをOFF",
    motionOn: "動きをON",
    modalLabel: "作品の詳細",
    noPublicLink: "公開リンクなし",
    workNote: "作品詳細では、実運用・開発中・試作を区別し、本人の担当範囲と確認できた結果を紹介しています。",
  },
  en: {
    nav: ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"],
    hire: "Get in touch",
    eyebrow: "FIELD EXPERIENCE × AI WORKFLOWS",
    heroLine: "From field problems",
    heroAccent: "to practical AI workflows.",
    heroBody: [
      ["I use generative AI to develop practical tools and improve workflows, starting with customer needs and how work gets done."],
      ["I map workflows, define requirements, build with generative AI assistance, check how things work, and improve them in use."],
    ],
    heroPrimary: "Explore projects",
    heroSecondary: "About me",
    scroll: "SCROLL TO EXPLORE",
    aboutEyebrow: "01 / ABOUT",
    aboutTitle: "Start with the people\nand the workflow.",
    aboutLead: "R.T.",
    aboutBody: [
      "I develop web applications and improve workflows with generative AI. My focus is making practical systems: listening to users, mapping work, deciding requirements, building, and checking behavior.",
      "I also build websites and web applications on individual requests from peers. For a system used in my own work, I mapped workflows and defined requirements. ChatGPT, Claude Code, and OpenAI Codex supported the build. I decided what the system needed, how to handle exceptions, and what to check and improve during use.",
      "I aim to make AI-assisted development and workflow improvement the main focus of my career. My approach draws on about seven years in elevator maintenance and appliance-repair contracting since 2023, where listening, diagnosis, verification, and clear explanations mattered every day.",
    ],
    aboutCards: [
      ["01", "Understand the field", "Listen to users and map the workflow before defining the problem."],
      ["02", "Decide the requirements", "Choose the necessary screens and information, then order them clearly."],
      ["03", "Build with AI tools", "Use ChatGPT, Claude Code, and Codex as implementation tools."],
      ["04", "Test and refine", "Check the real behavior and adjust it for practical use."],
    ],
    skillsEyebrow: "02 / APPROACH",
    skillsTitle: ["From build to improvement."],
    skillsBody: ["I listen to customers, map the work, build with AI assistance, and improve the result in use."],
    skillFocus: [
      ["Applied in my own work", "Customer interviews, workflow and requirements mapping, AI-assisted building, functional checks, human review of exceptions, and improvements based on real use."],
      ["Web production and acquisition", "Websites, landing pages, service and pricing information, and paths to LINE and contact forms. Social media, SEO article writing and publishing, Google Business Profile posts, and information improvements for AI search."],
    ],
    interestsTitle: "Roles I am seeking",
    preferenceLabel: ["First preference", "Second preference", "Third preference"],
    projectsEyebrow: "03 / SELECTED WORK",
    projectsTitle: "Selected work",
    projectsBody: "Practical workflows, a personal recording tool, a hotel booking demo, web production, and search improvements. Each project states its purpose and availability.",
    viewAll: "View all 11 projects",
    viewLess: "Show featured projects",
    viewDetails: "View project details",
    featuredLabel: "Featured case study",
    visit: "Visit site",
    close: "Close",
    nextImage: "View another screen",
    statsEyebrow: "AT A GLANCE",
    stats: [
      ["11", "Projects shown"],
      ["2", "Languages"],
      ["6", "Project links listed"],
      ["3", "AI tools used in implementation"],
    ],
    contactEyebrow: "04 / CONTACT",
    contactTitle: "Make day-to-day work\nrun better.",
    contactBody: ["My first preference is AI adoption support and workflow automation. I want to help customers map their work, build and verify practical systems, and improve them after rollout. Connect with me on Wantedly or GitHub."],
    contactPrimary: "Connect on Wantedly",
    contactSecondary: "View GitHub",
    footer: "R.T. — from field insight to better workflows.",
    language: "日本語",
    motionOff: "Reduce motion",
    motionOn: "Enable motion",
    modalLabel: "Project details",
    noPublicLink: "No public link",
    workNote: "Project details distinguish systems in use from work in development and prototypes, and describe my role and the results I could verify.",
  },
} as const;

export const skills = [
  {
    number: "01",
    title: { ja: "課題を見つける", en: "Discover" },
    body: { ja: "現場でのヒアリングから、業務と利用者の動線を整理。", en: "Use interviews to map workflows and user paths." },
    tags: [{ ja: "ヒアリング", en: "Interviews" }, { ja: "業務整理", en: "Workflow mapping" }, { ja: "課題設定", en: "Problem framing" }],
    theme: "cyan",
  },
  {
    number: "02",
    title: { ja: "形を決める", en: "Define" },
    body: { ja: "受付から精算までの流れを整理し、必要な情報、画面、業務ルールを決める。", en: "Map intake through settlement and decide what information, screens, and rules the work needs." },
    tags: [{ ja: "要件整理", en: "Requirements" }, { ja: "画面設計", en: "Screen design" }, { ja: "導線設計", en: "User flow" }],
    theme: "blue",
  },
  {
    number: "03",
    title: { ja: "AIとつくる", en: "Build with AI" },
    body: { ja: "生成AIを実装の支援に使い、動く成果物へ。", en: "Use AI assistance to make working deliverables." },
    tags: [{ ja: "ChatGPT", en: "ChatGPT" }, { ja: "Claude Code", en: "Claude Code" }, { ja: "OpenAI Codex", en: "OpenAI Codex" }],
    theme: "violet",
  },
  {
    number: "04",
    title: { ja: "確かめ、改善する", en: "Verify and refine" },
    body: { ja: "操作や計算の結果を確認し、人が判断する例外を残しながら運用を改善。", en: "Check interactions and calculation results, keep human review for exceptions, and refine the workflow in use." },
    tags: [{ ja: "動作確認", en: "Functional checks" }, { ja: "修正", en: "Revisions" }, { ja: "運用改善", en: "Workflow improvement" }],
    theme: "green",
  },
] as const;

const projectEntries: Project[] = [
{
  "id": "hospital-inventory",
  "number": "11",
  "title": {
    "ja": "病院向け在庫・発注業務の自動化",
    "en": "Hospital Inventory and Ordering Automation"
  },
  "category": {
    "ja": "業務自動化・非公開",
    "en": "Workflow automation · confidential"
  },
  "summary": {
    "ja": "備品の在庫が発注点に達すると担当者に通知。AIが発注メールの下書きを用意し、担当者が確認して送信できます。",
    "en": "When a supply reaches its reorder point, staff receive an alert and an AI-drafted order email to review and send."
  },
  "detail": {
    "ja": "病院の備品管理システムを約6か月で開発しました。在庫表とプリンターを連携し、残数が設定値まで減ると発注時期を自動で通知します。担当者は画面横のチャットで対象品目を確認し、AIが下書きした発注メールを見直してから送信できます。画像は架空の備品データを使った参考画面です。実際の院内画面や医療機関名は掲載していません。",
    "en": "I built this hospital supplies system in about six months. It links the inventory register to a printer and notifies staff when stock reaches a preset reorder level. Staff can check the items in the chat sidebar, review the order email drafted by AI, and send it themselves. The reference screen uses fictional supply data; it does not show the actual hospital interface or identify the institution."
  },
  "image": "/sites/ryutaro/hospital-inventory-reference.webp",
  "alt": {
    "ja": "参考画面：架空の備品を使った在庫一覧と、発注時期を知らせるチャット欄",
    "en": "Reference screen: a fictional supplies register beside a chat panel with reorder reminders"
  },
  "tags": [
    {
      "ja": "在庫管理",
      "en": "Inventory"
    },
    {
      "ja": "プリンター連携",
      "en": "Printer integration"
    },
    {
      "ja": "自動通知",
      "en": "Automated alerts"
    },
    {
      "ja": "AI連携",
      "en": "AI integration"
    }
  ],
  "badge": {
    "ja": "参考イメージ（架空データ）",
    "en": "Reference screen · fictional data"
  },
  "status": {
    "ja": "非公開・制作約6か月",
    "en": "Confidential · approx. 6 months"
  }
},
{
  "id": "meeting-recorder",
  "number": "11",
  "title": {
    "ja": "画面・音声録画ツール",
    "en": "Screen and Audio Recorder"
  },
  "category": {
    "ja": "個人制作・Windowsツール",
    "en": "Personal project · Windows tool"
  },
  "summary": {
    "ja": "画面、PCの再生音、自分のマイクをまとめて記録する、自分用の録画ツール。",
    "en": "A personal desktop tool for recording the screen, system audio, and microphone together."
  },
  "detail": {
    "ja": "Windows向けに制作した個人用ツールです。画面全体・ウィンドウ・範囲を選んで録画し、PC音声とマイクを別トラックで保存してMP4へまとめる構成。録画中のマーカー、一覧、切り出しにも対応しています。制作約2か月・サポート込み約3か月。顧客向けの保守契約や第三者への納品実績を示すものではありません。録画前には参加者への通知や各サービスの規約を確認します。",
    "en": "A Windows tool built for personal use. It supports full-screen, window, and region capture, separate system-audio and microphone tracks, MP4 mixing, markers, recording lists, and trimming. Approximately two months to develop and three months including support. This personal project is not presented as a client maintenance contract or delivery. Participant notice and service terms should be checked before recording."
  },
  "image": "/sites/ryutaro/meeting-recorder-ui.jpg",
  "alt": {
    "ja": "録画待機中の実画面。画面の選択、PC音声、マイク、録画設定が表示されている。",
    "en": "Actual idle recorder screen showing screen selection, system audio, microphone, and recording settings."
  },
  "tags": [
    {
      "ja": "Python / Tkinter",
      "en": "Python / Tkinter"
    },
    {
      "ja": "FFmpeg",
      "en": "FFmpeg"
    },
    {
      "ja": "WASAPI",
      "en": "WASAPI"
    }
  ],
  "badge": {
    "ja": "録画ツールの実画面",
    "en": "Actual recorder screen"
  },
  "status": {
    "ja": "個人用ツール・ソース非公開",
    "en": "Personal tool · source not published"
  }
},
{
  "id": "hotel-demo",
  "number": "12",
  "title": {
    "ja": "StayNote ホテル予約デモ",
    "en": "StayNote Hotel Booking Demo"
  },
  "category": {
    "ja": "予約UI・デモ制作",
    "en": "Booking interface · demo"
  },
  "summary": {
    "ja": "予約一覧・空室・料金を確認できる管理画面と、宿泊者向けの予約画面を制作。",
    "en": "Built the management dashboard for bookings, availability, and rates, and a separate booking screen for guests."
  },
  "detail": {
    "ja": "ホテル予約管理システムのデモを制作しました。管理側はダッシュボード、予約一覧、空室・料金の確認、ホテル切り替えに対応。宿泊者向け予約画面も用意しています。参考画面は架空データを表示した実際のデモ画面です。サイトを見るにはChatGPTログインが必要です。",
    "en": "Built a hotel booking management demo. It includes a dashboard, a reservation list, availability and rates, switching between hotels, and a separate guest booking screen. The reference image shows the actual interface with fictional data. ChatGPT sign-in is required to view the demo."
  },
  "image": "/sites/ryutaro/staynote-dashboard.jpg",
  "alt": {
    "ja": "架空のホテルデータを使ったStayNoteのダッシュボード参考画面。",
    "en": "Reference screenshot of the StayNote dashboard using fictional hotel data."
  },
  "tags": [
    {
      "ja": "予約UI",
      "en": "Booking UI"
    },
    {
      "ja": "管理画面",
      "en": "Admin dashboard"
    }
  ],
  "badge": {
    "ja": "参考画面",
    "en": "Reference screenshot"
  },
  "href": "https://staynote-hotel-demo-ryu.ryuuuta6o.chatgpt.site/",
  "status": {
    "ja": "デモ・閲覧にはChatGPTログインが必要",
    "en": "Demo · ChatGPT sign-in required"
  }
},
  {
    id: "kyn", number: "01",
    title: { ja: "KYNエアコンサービス", en: "KYN Air Conditioning Service" },
    category: { ja: "サービスサイト", en: "Service website" },
    summary: { ja: "エアコンサービスの内容と相談導線を伝えるWebサイト。", en: "A service website communicating air-conditioning work and contact routes." },
    detail: { ja: "サービス内容を分かりやすく並べ、問い合わせまでの導線を整理した制作実績です。公開サイトのリンクを掲載しています。成果数値や担当範囲の詳細は確認できていません。", en: "A website that presents the service and organizes a route to inquiry. A public link is available. Detailed ownership and measured outcomes have not been verified." },
    image: "/sites/ryutaro/kyn-aircon-cover.jpg",
    alt: { ja: "KYNエアコンサービスのWebサイト画面", en: "KYN Air Conditioning Service website screen" },
    tags: [{ ja: "Webサイト", en: "Website" }, { ja: "導線設計", en: "User flow" }],
    badge: { ja: "サイト画面", en: "Website screen" },
    href: "https://kynacservice.com/",
  },
  {
    id: "aircon-lp", number: "02",
    title: { ja: "エアコンクリーニングLP", en: "Air Conditioner Cleaning LP" },
    category: { ja: "ランディングページ", en: "Landing page" },
    summary: { ja: "サービスの特徴から問い合わせへつなぐ長尺LP。", en: "A long-form landing page from service benefits to inquiry." },
    detail: { ja: "サービスの説明と問い合わせ導線をひと続きで見せるランディングページです。縦長の実画面を拡大表示で確認できます。集客の成果数値は確認できていません。", en: "A landing page linking service explanation to inquiry. Its actual long-form screen is available in the expanded view. Acquisition results have not been verified." },
    image: "/sites/ryutaro/ouchi-aircon-lp-cover.jpg",
    fullImage: "/sites/ryutaro/ouchi-aircon-lp-full.jpg",
    longImage: true,
    alt: { ja: "エアコンクリーニングLPの実際の画面", en: "Actual screen of the air conditioner cleaning landing page" },
    tags: [{ ja: "LP", en: "Landing page" }, { ja: "縦長画面", en: "Long-form screen" }],
    badge: { ja: "LP実画面", en: "Actual LP screen" },
    href: "https://ouchi-aircon-lp.vercel.app/",
  },
  {
    id: "settlement", number: "04",
    featured: true,
    title: { ja: "案件受付・見積・協力会社への発注・精算を管理する業務システム", en: "Business System for Intake, Estimates, Partner Orders, and Settlement" },
    cardTitle: { ja: "案件受付・見積・発注・精算システム", en: "Intake, Estimate, Order & Settlement System" },
    dialogSubtitle: { ja: "自分の実務の受付から協力会社への発注・精算まで", en: "From case intake to partner orders and settlement in my own work" },
    category: { ja: "自分の実務・実運用", en: "Personal workflow · in use" },
    summary: { ja: "受付から協力会社への発注・精算までをひとつの流れで管理。2026年10月時点で実運用3か月、月平均約50件に使用しました。", en: "One workflow from intake through partner orders and settlement. As of October 2026: three months in use, averaging about 50 cases per month." },
    detail: { ja: "家電修理の実務で使っている管理システムです。受付から見積、協力会社への発注、手数料・紹介料の精算までを扱います。", en: "A system used in my own field-service workflow. It covers intake, estimates, orders to partner contractors, and settlement of service and referral fees." },
    image: "/sites/ryutaro/settlement-workflow.svg",
    alt: { ja: "案件受付、見積、協力会社への発注、精算の順につながる業務フロー図", en: "Workflow diagram: intake, estimate, partner order, and settlement" },
    tags: [{ ja: "業務設計", en: "Workflow design" }, { ja: "AI活用", en: "AI-assisted build" }, { ja: "人による確認", en: "Human review" }],
    badge: { ja: "業務フロー図", en: "Workflow diagram" },
    status: { ja: "自分の実務で実運用", en: "In use in my own work" },
    caseStudy: {
      sections: [
        {
          heading: { ja: "01　業務上の課題", en: "01 · The business problem" },
          body: { ja: "受付・見積・発注・精算の情報が分散し、口頭のやり取りや手計算に頼る部分がありました。案件ごとに情報と判断の根拠を確認できるようにすることが課題でした。", en: "Intake, estimates, orders, and settlement information were scattered, with some steps relying on verbal exchanges and manual calculations. I needed to see the information and basis for decisions together for each case." },
        },
        {
          heading: { ja: "02　業務フローと必要な機能", en: "02 · Workflow and requirements" },
          body: { ja: "案件受付、見積、協力会社への発注、手数料・紹介料の按分精算の順に業務を整理。各工程で必要な情報と、人が確認する判断を分けました。", en: "I mapped intake, estimation, partner orders, and the allocation of service and referral fees, separating information needed at each step from decisions that require human review." },
        },
        {
          heading: { ja: "03　構築した仕組み", en: "03 · What I built" },
          body: { ja: "Next.js、TypeScript、Supabaseなどを使用。受付から精算までを案件単位で管理し、発注や精算に必要な情報をひとつの流れで確認できるようにしました。", en: "Built with Next.js, TypeScript, and Supabase. The system organizes work by case and keeps the information needed for partner orders and settlement in one workflow." },
        },
        {
          heading: { ja: "04　本人の担当とAIの活用", en: "04 · My role and AI assistance" },
          body: { ja: "業務フロー・要件の整理、画面や料金ルールの判断、動作確認、運用改善を担当しました。生成AIは、整理した要件を画面やコードに落とし込む構築作業の支援に使いました。", en: "I mapped the workflow, defined requirements, decided on screens and pricing rules, checked behavior, and refined operations. Generative AI assisted with translating those requirements into screens and code." },
        },
        {
          heading: { ja: "05　動作確認と運用上の工夫", en: "05 · Checks and operating safeguards" },
          body: { ja: "案件の流れや精算の表示を確認し、実務に合わせて改善。例外的な料金計算は自動確定させず、人が根拠を確認して判断する運用にしています。", en: "I checked the case workflow and settlement display, then refined them during use. Exceptional fee calculations are held for human review of the basis before any final decision." },
        },
        {
          heading: { ja: "06　確認できる運用実績", en: "06 · Recorded use" },
          body: { ja: "2026年10月時点で自分の実務に3か月間使用し、月平均約50件の案件を扱いました。", en: "As of October 2026, the system had been used in my own work for three months, averaging about 50 cases per month." },
        },
      ],
      evidence: [],
    },
  },
  {
    id: "macro", number: "06",
    title: { ja: "世界経済リスクダッシュボード", en: "Global Economic Risk Dashboard" },
    category: { ja: "データ可視化", en: "Data visualization" },
    summary: { ja: "経済情報を一覧し、変化を読み取るためのダッシュボード。", en: "A dashboard for scanning economic indicators and changes." },
    detail: { ja: "掲載画像は既存ポートフォリオにある制作時の画面です。公開先の現行表示は画像と異なるため、ここでは制作時の実画面として紹介します。数値の精度や投資成果は示していません。", en: "The screenshot is the original portfolio's production screen. The current live destination looks different, so it is presented here as a historical project screen. No claims are made about data accuracy or investment outcomes." },
    image: "/sites/ryutaro/macro-dashboard.webp",
    alt: { ja: "世界経済リスクダッシュボードの制作時の画面", en: "Production screen of the Global Economic Risk Dashboard" },
    tags: [{ ja: "ダッシュボード", en: "Dashboard" }, { ja: "情報整理", en: "Information design" }],
    badge: { ja: "制作時の画面", en: "Production screen" },
    href: "https://macro-crisis-dashboard.vercel.app/",
  },
{
  "id": "ouchi",
  "number": "07",
  "title": {
    "ja": "Web制作・集客導線の改善",
    "en": "Web Production and Inquiry Journeys"
  },
  "cardTitle": {
    "ja": "Web制作・集客導線",
    "en": "Web and Inquiry Journeys"
  },
  "dialogSubtitle": {
    "ja": "SNS・SEO記事・Googleビジネスプロフィール・AIO",
    "en": "Social Media, SEO Content, Google Business Profile & AIO"
  },
  "category": {
    "ja": "Web制作・運用改善",
    "en": "Web production & ongoing improvement"
  },
  "summary": {
    "ja": "サイト制作と問い合わせ導線の整備に加え、SNS運用、SEO記事の執筆・公開、Googleマップの投稿、AI検索に向けた情報整備に取り組んでいます。",
    "en": "Website production and inquiry journeys, alongside social media operation, SEO article writing and publishing, Google Maps posts, and information improvements for AI search."
  },
  "detail": {
    "ja": "サービス内容や現場で受ける質問をもとに、Webサイトの情報とフォーム・LINEへの導線を整理。SNS運用、SEO記事の執筆・公開、Googleビジネスプロフィールでの投稿を行い、検索と相談の接点を増やしています。AIOでは、AIが読み取りやすい情報構造、構造化情報、説明するテーマの充実に取り組んでいます。成果への因果関係を断定せず、実施内容と計測結果を分けて紹介します。",
    "en": "Organize service information and routes to forms and LINE around real field-service questions. Activities include social media operation, writing and publishing SEO articles, and Google Business Profile posts. AIO work focuses on accessible information structure, structured information, and topic coverage for AI search. Activities are distinguished from measured outcomes without claiming causation."
  },
  "image": "/sites/ryutaro/ouchi-homepage-cover.jpg",
  "alt": {
    "ja": "制作したサービスサイトの画面",
    "en": "Service website project screen"
  },
  "tags": [
    {
      "ja": "Web・SNS",
      "en": "Web & social"
    },
    {
      "ja": "SEO記事",
      "en": "SEO articles"
    },
    {
      "ja": "Googleマップ・AIO",
      "en": "Google Maps & AIO"
    }
  ],
  "badge": {
    "ja": "サイト画面",
    "en": "Website screen"
  },
  "href": "https://ouchi-nandemoya.com/",
"caseStudy":{
  "sections": [
{"heading": {"ja": "AI回答内の出典表示を確認", "en": "Observed citations in AI answers"}, "body": {"ja": "2026/11/18の試験計測で、ChatGPT回答15件のうち3件にサイトのページが出典として表示されました（OpenSEO、ブランド名を含まない質問15件）。順位や改善幅・問い合わせ数を示すものではありません。", "en": "In an OpenSEO test on November 18, 2026, pages from the site appeared as sources in 3 of 15 ChatGPT answers to unbranded queries. This does not indicate rankings, improvement over time, or inquiry volume."}},
    {
      "heading": {
        "ja": "直近の検索データ（同条件・各28日間）",
        "en": "Recent search data · equal 28-day periods"
      },
      "body": {
        "ja": "2026/9/24〜10/21：クリック35、表示1,506、CTR 2.32%。2026/10/22〜11/18：クリック74、表示4,427、CTR 1.67%。クリックは約2.1倍、表示は約2.9倍ですが、CTRは低下しています。",
        "en": "September 24–October 21, 2026: 35 clicks, 1,506 impressions, 2.32% CTR. October 22–November 18: 74 clicks, 4,427 impressions, 1.67% CTR. Clicks increased about 2.1× and impressions about 2.9×, while CTR declined."
      }
    },
    {
      "heading": {
        "ja": "集計条件と読み取り方",
        "en": "Scope and interpretation"
      },
      "body": {
        "ja": "出典：Google Search Console（2026/11/20取得の確定データ）。Web検索、同一ドメインのプロパティ、全ての国・端末、各28日間で比較。通常のWeb検索の集計であり、AI検索での掲載実績ではありません。施策単独の効果、問い合わせ数、売上の増加を証明するものではありません。",
        "en": "Source: Google Search Console finalized data retrieved November 20, 2026. Web search, the same domain property, all countries and devices, two 28-day periods. These are standard web-search metrics, not AI-search visibility results. They do not establish causation from individual changes or prove increased inquiries or revenue."
      }
    }
  ],
  "evidence": []
}
},
  {
    id: "electric-lp", number: "08",
    title: { ja: "法人向け電気工事LP", en: "Commercial Electrical Work LP" },
    category: { ja: "ランディングページ", en: "Landing page" },
    summary: { ja: "法人向けの工事内容と問い合わせ先を整理したLP。", en: "A landing page organizing commercial electrical services and inquiries." },
    detail: { ja: "法人向けのサービス情報を整理し、問い合わせへの流れを示した制作実績です。公開デモのリンクを掲載しています。成果数値は確認できていません。", en: "A project organizing information for business customers and guiding them toward inquiry. A public demo link is available. Measured outcomes have not been verified." },
    image: "/sites/ryutaro/electric-lp-cover.jpg",
    alt: { ja: "法人向け電気工事LPの画面", en: "Commercial electrical work landing page screen" },
    tags: [{ ja: "LP", en: "Landing page" }, { ja: "法人向け", en: "Business audience" }],
    badge: { ja: "LP実画面", en: "Actual LP screen" },
    href: "https://denki-line-lp-demo.vercel.app/",
  },
  {
    id: "banner", number: "09",
    title: { ja: "求人訴求向けバナー", en: "Recruitment Banner" },
    category: { ja: "販促クリエイティブ", en: "Promotional creative" },
    summary: { ja: "求人情報を短い視線の中で伝えるバナー制作。", en: "Banner creative designed to communicate recruitment quickly." },
    detail: { ja: "求人の訴求に使う画像制作実績です。実際の制作画像を拡大して確認できます。配信結果や採用成果は確認できていません。", en: "A recruitment-oriented design project. The actual image can be enlarged. Campaign and hiring results have not been verified." },
    image: "/sites/ryutaro/banner-creative-cover.jpg",
    alt: { ja: "制作した求人訴求向けバナー", en: "Actual recruitment banner design" },
    tags: [{ ja: "バナー", en: "Banner" }, { ja: "求人", en: "Recruitment" }],
    badge: { ja: "制作画像", en: "Actual design" },
  },
  {
    id: "line-menu", number: "10",
    title: { ja: "LINEリッチメニュー制作", en: "LINE Rich Menu Design" },
    category: { ja: "UI・販促デザイン", en: "UI and promotional design" },
    summary: { ja: "サービスへの入口を分かりやすく配置したリッチメニュー。", en: "Rich menu designs with clear routes into services." },
    detail: { ja: "カフェ向けとペット関連の2点を掲載しています。画面上の項目と見た目を整えた制作画像です。運用成果は確認できていません。", en: "Two actual designs are shown: one for a cafe and one related to pets. They arrange menu choices and visual cues. Operational results have not been verified." },
    image: "/sites/ryutaro/rich-menu-cafe-cover.jpg",
    alternateImage: "/sites/ryutaro/rich-menu-cat-cover.jpg",
    alt: { ja: "制作したLINEリッチメニューのカフェ向けデザイン", en: "Actual cafe-oriented LINE rich menu design" },
    tags: [{ ja: "LINE", en: "LINE" }, { ja: "リッチメニュー", en: "Rich menu" }],
    badge: { ja: "制作画像", en: "Actual design" },
  },
];

const projectOrder = [
  "settlement", "meeting-recorder", "hotel-demo", "hospital-inventory", "ouchi", "aircon-lp",
  "kyn", "electric-lp", "macro", "banner", "line-menu",
];

export const projects: Project[] = projectOrder.map((id, index) => {
  const project = projectEntries.find((entry) => entry.id === id);
  if (!project) throw new Error(`Unknown portfolio project: ${id}`);
  return { ...project, number: String(index + 1).padStart(2, "0") };
});
