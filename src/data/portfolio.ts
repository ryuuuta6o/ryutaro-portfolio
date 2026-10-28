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
  caseStudy?: ProjectCaseStudy;
};

export const identity = {
  name: { ja: "橘 龍太郎", en: "Ryutaro Tachibana" },
  roles: {
    ja: "AI活用Webマーケティング・SEO・サイト改善を志望",
    en: "Seeking AI-enabled web marketing, SEO, and site improvement roles",
  },
  wantedly: "https://www.wantedly.com/id/ryuuuta6o",
  github: "https://github.com/ryuuuta6o/",
  portrait: "/sites/ryutaro/ryutaro-profile-resume.jpg",
};

export const copy = {
  ja: {
    nav: ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"],
    hire: "連絡する",
    eyebrow: "AI × WEB MARKETING",
    heroLine: "AIで仕組みをつくり、",
    heroAccent: "Webの集客を改善する。",
    heroBody: [
      ["顧客対応・現場業務・個人事業の運営経験を活かし、", "生成AIを用いたWebサイト・LP制作、", "SEOを意識した情報設計、", "問い合わせ導線の改善に取り組んでいます。"],
      ["企画・制作から動作確認、運用改善まで、", "実際に使う人の視点で進めています。"],
    ],
    heroPrimary: "制作実績を見る",
    heroSecondary: "私について",
    scroll: "SCROLL TO EXPLORE",
    aboutEyebrow: "01 / ABOUT",
    aboutTitle: "現場を知ることから、\nつくり始める。",
    aboutLead: "橘 龍太郎",
    aboutBody: [
      "昇降機の保守・点検・修理を約7年、家電修理を約3年経験。2023年から住宅設備サービスの個人事業を運営し、顧客ヒアリング、現場確認、見積、発注、精算を担当しています。現場で受けた相談を、サービス内容・料金・対応地域の整理や、Webサイト・LPの情報設計に生かしています。",
      "生成AIを活用してWebサイト・LPや業務システムを試作・構築し、画面の動作と相談までの導線を確認・改善しています。ChatGPT、Claude Code、Codexは要件整理や実装の支援に使用し、掲載内容・要件・画面の判断、動作確認、修正方針は本人が担っています。",
    ],
    aboutCards: [
      ["01", "現場の理解", "利用者の声と業務の流れから、解くべき課題を整理します。"],
      ["02", "要件の判断", "必要な画面や情報を決め、使いやすい順序にまとめます。"],
      ["03", "AIを活用した実装", "ChatGPT、Claude Code、Codexなどを制作に活用します。"],
      ["04", "確認と改善", "実際の動作を確かめ、運用に合わせて手直しします。"],
    ],
    skillsEyebrow: "02 / APPROACH",
    skillsTitle: ["制作から", "改善まで。"],
    skillsBody: ["制作・設計の経験と、", "今後深めたいWeb集客の領域を", "分けて紹介します。"],
    marketingFocus: [
      ["取り組んだこと", "Webサイト・LPの情報設計、SEO・AIOのチェックリストに基づく自社サイトの点検・改善、LINE・フォームの導線整備。検索順位の計測画面と生成AI回答での事業名掲載も確認しました。"],
      ["今後深めること", "テクニカルSEO、AIO・LLMO/GEOの継続観測、LPO・CRO、流入から問い合わせまでの効果測定を実務で深めたいと考えています。"],
    ],
    projectsEyebrow: "03 / SELECTED WORK",
    projectsTitle: "制作実績",
    projectsBody: "自社サービスのサイト改善、LPと問い合わせ導線、業務アプリなど10作品を掲載しています。開発中の作品はその状態を明記しています。",
    viewAll: "すべての10作品を見る",
    viewLess: "代表作品のみ表示",
    viewDetails: "画面を拡大",
    visit: "公開サイトを見る",
    close: "閉じる",
    nextImage: "別の画面を見る",
    statsEyebrow: "AT A GLANCE",
    stats: [
      ["10", "掲載作品"],
      ["2", "表示言語"],
      ["5", "公開リンクを掲載"],
      ["3", "実装に活用したAIツール"],
    ],
    contactEyebrow: "04 / CONTACT",
    contactTitle: "Webの課題を、\n一緒に改善へ。",
    contactBody: ["AIを活用したWeb制作、", "SEO・サイト改善に", "実行から検証まで携わる", "仕事を志望しています。", "WantedlyまたはGitHubから", "ご連絡ください。"],
    contactPrimary: "Wantedlyで連絡",
    contactSecondary: "GitHubを見る",
    footer: "橘 龍太郎 — 現場から、Webの改善へ。",
    language: "English",
    motionOff: "動きをOFF",
    motionOn: "動きをON",
    modalLabel: "作品の拡大表示",
    noPublicLink: "公開リンクなし",
    workNote: "自社サイトの改善を、検索データと実際の画面で紹介しています。作品詳細に比較期間・計測条件・本人の担当範囲を掲載しています。",
  },
  en: {
    nav: ["ABOUT", "SKILLS", "PROJECTS", "CONTACT"],
    hire: "Get in touch",
    eyebrow: "AI × WEB MARKETING",
    heroLine: "Build with AI.",
    heroAccent: "Improve the web.",
    heroBody: [
      ["I draw on customer service, field work, and running my own business to build websites and landing pages with AI assistance, structure SEO-conscious content, and improve paths to inquiry."],
      ["I work from planning and production through functional checks and ongoing improvement, with the people using the site in mind."],
    ],
    heroPrimary: "Explore projects",
    heroSecondary: "About me",
    scroll: "SCROLL TO EXPLORE",
    aboutEyebrow: "01 / ABOUT",
    aboutTitle: "Start with the people\nand the workflow.",
    aboutLead: "Ryutaro Tachibana",
    aboutBody: [
      "I spent about seven years in elevator maintenance, inspection, and repair, followed by about three years in appliance repair. Since 2023, I have run a residential equipment service business, handling customer interviews, site checks, estimates, orders, and settlement. I use field questions to organize services, prices, service areas, and the information architecture of websites and landing pages.",
      "I use generative AI to help prototype and build websites, landing pages, and business systems, then check the screens and paths to inquiry. ChatGPT, Claude Code, and Codex support requirements work and implementation; I make decisions about content, requirements, screens, functional checks, and revisions.",
    ],
    aboutCards: [
      ["01", "Understand the field", "Listen to users and map the workflow before defining the problem."],
      ["02", "Decide the requirements", "Choose the necessary screens and information, then order them clearly."],
      ["03", "Build with AI tools", "Use ChatGPT, Claude Code, and Codex as implementation tools."],
      ["04", "Test and refine", "Check the real behavior and adjust it for practical use."],
    ],
    skillsEyebrow: "02 / APPROACH",
    skillsTitle: ["From build to improvement."],
    skillsBody: ["I distinguish work shown in this portfolio from web-growth skills I plan to develop next."],
    marketingFocus: [
      ["Work completed", "Website and landing-page structure, checks and improvements to my own site guided by an SEO and AI-search checklist, and paths to LINE and contact forms. I also observed search-position displays and a mention of my business in an AI-generated answer."],
      ["Areas to develop", "Deeper technical SEO, continued observation of AI search visibility (AIO/LLMO/GEO), landing-page and conversion optimization, and measurement from visits through inquiries."],
    ],
    projectsEyebrow: "03 / SELECTED WORK",
    projectsTitle: "Selected work",
    projectsBody: "Ten projects spanning my own service site's improvements, landing pages and inquiry paths, and business applications. Work in progress is labelled as such.",
    viewAll: "View all 10 projects",
    viewLess: "Show featured projects",
    viewDetails: "Expand screen",
    visit: "Visit live site",
    close: "Close",
    nextImage: "View another screen",
    statsEyebrow: "AT A GLANCE",
    stats: [
      ["10", "Projects shown"],
      ["2", "Languages"],
      ["5", "Public links listed"],
      ["3", "AI tools used in implementation"],
    ],
    contactEyebrow: "04 / CONTACT",
    contactTitle: "Let's make the web\nwork better.",
    contactBody: ["I am seeking hands-on roles in AI-assisted web production, SEO, and site improvement, from implementation through evaluation. Connect with me on Wantedly or GitHub."],
    contactPrimary: "Connect on Wantedly",
    contactSecondary: "View GitHub",
    footer: "Ryutaro Tachibana — from field insight to better websites.",
    language: "日本語",
    motionOff: "Reduce motion",
    motionOn: "Enable motion",
    modalLabel: "Expanded project screen",
    noPublicLink: "No public link",
    workNote: "Search data and actual screens document improvements to my own business website. The project details include comparison periods, measurement conditions, and my role.",
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
    body: { ja: "必要な情報、画面、導線を選び、要件を判断。", en: "Decide on information, screens, and flow." },
    tags: [{ ja: "要件整理", en: "Requirements" }, { ja: "画面設計", en: "Screen design" }, { ja: "導線設計", en: "User flow" }],
    theme: "blue",
  },
  {
    number: "03",
    title: { ja: "AIとつくる", en: "Build with AI" },
    body: { ja: "生成AIを実装の支援に使い、動く成果物へ。", en: "Use AI assistance to make working deliverables." },
    tags: [{ ja: "ChatGPT", en: "ChatGPT" }, { ja: "Claude Code", en: "Claude Code" }, { ja: "Codex", en: "Codex" }],
    theme: "violet",
  },
  {
    number: "04",
    title: { ja: "確かめ、改善する", en: "Verify and refine" },
    body: { ja: "実画面と操作を確認し、使いやすさを改善。", en: "Check real screens and interactions, then improve usability." },
    tags: [{ ja: "動作確認", en: "Functional checks" }, { ja: "修正", en: "Revisions" }, { ja: "運用改善", en: "Workflow improvement" }],
    theme: "green",
  },
] as const;

const projectEntries: Project[] = [
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
    id: "ai-lp-audit", number: "03",
    title: { ja: "AI LP Audit", en: "AI LP Audit" },
    category: { ja: "分析ツール", en: "Analysis tool" },
    summary: { ja: "ランディングページの確認項目を画面で整理するツール。", en: "A tool for reviewing landing-page factors in one interface." },
    detail: { ja: "画面では評価項目と改善案を確認できます。現時点で確認できた挙動は、JSONデータの読み込みとルールに基づく表示です。URLからの自動クロールや生成AIによる実分析は確認できていません。", en: "The interface displays review criteria and suggestions. The verified behavior is JSON import and rule-based display. Automatic URL crawling and live generative-AI analysis have not been verified." },
    image: "/sites/ryutaro/ai-lp-audit.webp",
    alt: { ja: "AI LP Auditの分析ダッシュボード画面", en: "AI LP Audit dashboard screen" },
    tags: [{ ja: "LP分析", en: "LP review" }, { ja: "データ表示", en: "Data display" }, { ja: "試作", en: "Prototype" }],
    badge: { ja: "確認用画面", en: "Review screen" },
  },
  {
    id: "settlement", number: "04",
    title: { ja: "受付・見積・発注・精算システム", en: "Intake, Estimate, Order & Settlement System" },
    category: { ja: "業務アプリ", en: "Business application" },
    summary: { ja: "受付から精算までの情報をひとつの流れで扱う業務画面。", en: "A business interface that follows the work from intake through settlement." },
    detail: { ja: "自身の個人事業で、分散していた受付・見積・発注・手数料精算の情報を一元管理するために制作。ヒアリング、要件整理、画面検討、生成AIのコーディング支援を使った構築、検証・運用改善を担当しました。例外的な料金計算は自動確定せず、人が根拠を確認できる運用にしています。職務経歴書には実運用3か月、月平均約50件で使用と記載しています。", en: "Built for my own business to bring scattered intake, estimates, orders, and fee settlement into one workflow. I handled requirements, screen decisions, testing, and operational improvements, using AI-assisted coding for the build. Exceptional fee calculations require a human check rather than automatic approval. My career history records three months of use at about 50 cases per month on average." },
    image: "/sites/ryutaro/settlement-app.webp",
    alt: { ja: "受付・見積・発注・精算システムの実際の管理画面", en: "Actual management screen of the intake, estimate, order, and settlement system" },
    tags: [{ ja: "業務設計", en: "Workflow design" }, { ja: "管理画面", en: "Admin interface" }, { ja: "AI活用", en: "AI-assisted build" }],
    badge: { ja: "実際の管理画面", en: "Actual interface" },
  },
  {
    id: "photo-estimate", number: "05",
    title: { ja: "写真見積もりエージェント", en: "Photo Estimate Agent" },
    category: { ja: "AIアプリ・開発中", en: "AI application · in development" },
    summary: { ja: "写真を起点に見積もりの検討を進めるアプリの試作画面。", en: "A prototype interface for starting an estimate from photos." },
    detail: { ja: "開発中の作品です。写真と施工条件から追加確認事項や工事上のリスクを整理する流れを設計しています。AIの解釈と料金ルールを分け、判断が難しい場合は人が確認する方針です。掲載画像はデモデータを含み、機能の実装範囲と精度は未確認です。", en: "A work in progress that structures additional questions and installation risks from photos and job conditions. The design separates AI interpretation from pricing rules and sends difficult cases to a person for review. The screen includes demo data; implemented scope and accuracy remain unverified." },
    image: "/sites/ryutaro/photo-estimate-agent-cover.webp",
    fullImage: "/sites/ryutaro/photo-estimate-agent-full.jpg",
    alt: { ja: "写真見積もりエージェントのデモ画面", en: "Demonstration screen of the Photo Estimate Agent" },
    tags: [{ ja: "試作", en: "Prototype" }, { ja: "写真", en: "Photos" }, { ja: "AI活用", en: "AI-assisted build" }],
    badge: { ja: "デモ画面", en: "Demo screen" },
    status: { ja: "開発中・デモ画面", en: "In development · demo screen" },
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
    id: "ouchi", number: "07",
    title: { ja: "おうちのなんでも屋｜Web制作・SEO・AI検索への取り組み", en: "Ouchi no Nandemoya | Web, SEO & AI Search" },
    cardTitle: { ja: "おうちのなんでも屋", en: "Ouchi no Nandemoya" },
    dialogSubtitle: { ja: "Web制作・SEO・AI検索への取り組み", en: "Web, SEO & AI Search" },
    category: { ja: "自社サービス・運用中", en: "Own service · live" },
    summary: { ja: "チェックリストに基づき自社サイトのSEO・AIOを改善。各28日間の保存データ比較で、検索クリック19→38、表示回数840→1,750。施策と検証結果を紹介します。", en: "Improved my own site's SEO and AI search using a checklist. Saved 28-day search data showed clicks of 19→38 and impressions of 840→1,750. Explore the work and its measured results." },
    detail: { ja: "自社事業のWebサイトで、サービス情報を探しやすくし、問い合わせにつながる導線を整えています。チェックリストを作成し、情報整理・制作・改善から検索データの確認まで継続。2026年10月28日の運用レポートから、施策・担当範囲・検証結果を紹介します。", en: "For my own service business, I organize service information and paths to inquiry. I created a checklist and continued through content organization, production, improvements, and search-data reviews. This case study selects actions, responsibilities, and findings from the October 28, 2026 operations report." },
    image: "/sites/ryutaro/ouchi-homepage-cover.jpg",
    alt: { ja: "おうちのなんでも屋のホームページ画面", en: "Ouchi no Nandemoya home page screen" },
    tags: [{ ja: "Web制作", en: "Web production" }, { ja: "SEO・AIO", en: "SEO & AI search" }, { ja: "自社事業", en: "Own business" }],
    badge: { ja: "サイト画面", en: "Website screen" },
    href: "https://ouchi-nandemoya.com/",
    caseStudy: {
      report: "ouchi-seo",
      sections: [
        {
          heading: { ja: "事業・利用者の課題", en: "The problem" },
          body: { ja: "エアコンの不調を調べる人が、症状ごとの対応内容、料金の目安、相談方法を見つけやすいサイトにすること。自社事業で受けた相談を情報設計に生かしました。", en: "People researching an air-conditioner problem need to find relevant services, indicative prices, and a clear way to ask for help. I used questions from my own service business to guide the information structure." },
        },
        {
          heading: { ja: "実施したこと", en: "What I did" },
          body: { ja: "SEO・AIOの観点を整理したチェックリストを作成し、サービス内容、症状別ページ、料金・対応地域の説明、内部リンク、メタデータ、フォーム・LINEへの導線を点検・改善しました。", en: "I created a checklist covering SEO and AI search, then checked and improved service information, symptom pages, pricing and service-area explanations, internal links, metadata, and paths to forms and LINE." },
        },
        {
          heading: { ja: "本人の担当とAIの活用", en: "My role and AI assistance" },
          body: { ja: "本人は現場で得た相談やサービス情報を整理し、掲載内容・要件・改善の優先度を判断。公開画面、相談導線、検索データを確認しています。ChatGPT・Claude Code・Codexなどを、要件整理や制作・実装・確認作業の支援に活用しています。", en: "I organize customer questions and service information, decide content, requirements, and improvement priorities, and review published screens, inquiry paths, and search data. ChatGPT, Claude Code, and Codex support requirements work, production, implementation, and checks." },
        },
        {
          heading: { ja: "確認できた結果", en: "Observed results" },
          body: { ja: "改善の取り組みを続ける中で、各28日間の比較では検索クリックが19→38、表示回数が840→1,750に増加。地域・症状別の検索順位にも改善が見られ、生成AIの回答内で事業名の掲載も確認しました。比較期間と途中経過は下のレポートにまとめています。", en: "During ongoing improvement work, comparable 28-day records showed search clicks rising from 19 to 38 and impressions from 840 to 1,750. Some local symptom-related queries improved in rank, and an AI-generated answer mentioned the business. The report below gives the periods and intermediate results." },
        },
        {
          heading: { ja: "今後の改善", en: "Next steps" },
          body: { ja: "CTRと検索順位の継続確認、未確定のキーワードの検証、検索流入から相談までの計測を進めます。問い合わせ・売上の増加は、実顧客のデータを確認してから評価します。", en: "Next steps are to monitor CTR and rankings, verify queries with unresolved data, and measure the path from search visits to inquiries. Inquiry and revenue growth will be evaluated using verified real-customer data." },
        },
      ],
      evidence: [
        {
          kind: "aio",
          title: { ja: "AIの回答に『おうちのなんでも屋』が掲載", en: "Ouchi no Nandemoya appears in an AI-generated answer" },
          caption: { ja: "『エアコン修理名古屋』という質問への生成AIの回答で、事業名の掲載を確認しました。", en: "The business name appeared in an AI-generated answer to a question about air-conditioner repair in Nagoya." },
          image: "/sites/ryutaro/ouchi-ai-answer.jpg",
          alt: { ja: "『エアコン修理名古屋』への生成AI回答。おうちのなんでも屋とサービス説明の行を赤枠で強調", en: "AI-generated answer about air-conditioner repair in Nagoya, with the Ouchi no Nandemoya row outlined in red" },
          highlights: [{ ja: "おうちのなんでも屋 — 名古屋市を中心に修理・クリーニング・工事に対応。症状別の原因や料金を掲載。", en: "Ouchi no Nandemoya — Serves Nagoya and nearby areas with repairs, cleaning, and installation; explains causes by symptom and provides pricing information." }],
        },
        {
          kind: "seo",
          title: { ja: "地域と暖房に関する2語が10位以内に表示", en: "Two local heating queries appeared in the top ten" },
          caption: { ja: "順位計測画面で『名古屋 エアコン 暖房が弱い』5位、『名古屋 エアコン 暖房 修理』7位を確認。画像取得時点の表示値です。", en: "The supplied ranking screen showed positions 5 and 7 for the two Nagoya heating queries at the time the image was captured." },
          image: "/sites/ryutaro/ouchi-seo-ranking.png",
          alt: { ja: "順位計測画面。暖房関連の2語と5位・7位の表示行を赤枠で強調", en: "Ranking screenshot with the two heating queries and positions 5 and 7 outlined in red" },
          highlights: [
            { ja: "名古屋 エアコン 暖房が弱い — 5位", en: "Nagoya air conditioner weak heating — position 5" },
            { ja: "名古屋 エアコン 暖房 修理 — 7位", en: "Nagoya air conditioner heating repair — position 7" },
          ],
        },
      ],
    },
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
  "ouchi", "aircon-lp", "kyn", "ai-lp-audit", "electric-lp",
  "settlement", "photo-estimate", "macro", "banner", "line-menu",
];

export const projects: Project[] = projectOrder.map((id, index) => {
  const project = projectEntries.find((entry) => entry.id === id);
  if (!project) throw new Error(`Unknown portfolio project: ${id}`);
  return { ...project, number: String(index + 1).padStart(2, "0") };
});
