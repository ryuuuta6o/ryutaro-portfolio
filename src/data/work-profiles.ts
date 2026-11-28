import type { Localized } from "./portfolio";

type WorkProfile = {
  role: Localized;
  stack: { tool: string; use: Localized }[];
};

const line = (tool: string, ja: string, en: string) => ({ tool, use: { ja, en } });

export const workProfiles: Readonly<Record<string, WorkProfile | undefined>> = {
  "photo-estimate": {
    role: { ja: "要件定義、見積フロー・画面設計、試作実装、現場写真を使った動作検証を担当。AIが候補を出す工程と、担当者が見積を確定する工程を分けました。", en: "Defined requirements, designed the estimate workflow and screens, implemented the prototype, and tested with site photos. I separated AI suggestions from human approval." },
    stack: [
      line("Next.js / React / TypeScript / Tailwind CSS", "現場写真と工事条件を入力し、候補と見積履歴を確認する画面を実装。", "Builds the screens for entering photos and job conditions and reviewing suggestions and estimate history."),
      line("sharp / Zod", "画像の前処理と、AIの抽出結果の形式チェック。", "Preprocesses images and validates the structure of AI extraction results."),
      line("Supabase / PostgreSQL", "見積と履歴を記録し、写真を非公開ストレージに保存。", "Stores estimates and their history, with photos kept in private storage."),
      line("Claude / 見積ルール", "画像から工事項目の候補を抽出する連携を実装。概算金額は別の料金ルールで計算し、担当者が最終確認。", "Implements Claude integration to suggest work items from photos. Separate pricing rules calculate the estimate, which a person reviews."),
    ],
  },
  "meeting-recorder": {
    role: { ja: "要件定義、基本・詳細設計、実装、動作テスト、保守・改善を担当。画面録画・音声分離から、会話中の回答候補を表示する試作まで制作しました。", en: "Owned requirements, high-level and detailed design, implementation, testing, and maintenance. Built the recording and audio workflow and prototyped in-conversation reply assistance." },
    stack: [
      line("Python / Tkinter", "Windowsの操作画面、録画の開始・停止、状態表示。", "Windows interface, start/stop controls, and status display."),
      line("C# / Windows WASAPI", "PCの再生音とマイク音声を別々に収録。", "Separate capture of computer playback and microphone audio."),
      line("FFmpeg", "画面の取り込み、音声と映像のMP4出力、必要な区間の切り出し。", "Screen capture, MP4 assembly, and trimming."),
      line("faster-whisper / pypdf", "会話中の音声を文字起こしし、登録PDFから抽出したテキストを回答候補の根拠に使用。", "Transcribes speech during a conversation and uses text extracted from reference PDFs to support reply suggestions."),
    ],
  },
  "hospital-inventory": {
    role: { ja: "要件定義、基本・詳細設計、実装、テスト、保守・運用改善を担当。在庫の残数チェック、通知、帳票印刷、発注メールの確認までの流れを設計しました。", en: "Owned requirements, high-level and detailed design, implementation, testing, maintenance, and operational improvements. Designed the workflow from stock monitoring to alerts, printing, and order-email review." },
    stack: [
      line("在庫ロジック / Inventory rules", "品目ごとに設定した発注点と残数を比較して、発注のタイミングを自動通知。", "Compares each item’s stock with its reorder point and automatically alerts staff."),
      line("プリンター連携 / Printing", "在庫一覧を帳票として印刷。", "Prints the inventory register as a report."),
      line("生成AI / Generative AI", "チャット欄で発注対象を確認し、メール文の下書きを作成。担当者が確認して送信。", "Shows reorder items in the chat panel and drafts an email for staff to review and send."),
    ],
  },
  settlement: {
    role: { ja: "要件定義、業務フロー・画面・精算ルールの設計、実装、テスト、実務での運用・改善を担当。", en: "Owned requirements, workflow and UI design, settlement rules, implementation, testing, and improvements during day-to-day use." },
    stack: [
      line("Next.js / TypeScript", "受付・見積・発注・精算を同じ案件の中で確認できるWeb画面を構築。", "Built the web interface for managing intake, estimates, orders, and settlement by case."),
      line("Supabase", "案件データをまとめて扱う基盤。", "Data layer for working with case records in one place."),
    ],
  },
  "hotel-demo": {
    role: { ja: "要件定義、基本・詳細設計、実装、テスト、デモの保守・改善を担当。宿泊者と管理者それぞれの画面と操作フローを設計しました。", en: "Owned requirements, high-level and detailed design, implementation, testing, and demo maintenance. Designed separate experiences for guests and administrators." },
    stack: [
      line("ChatGPT Sites", "架空データで確認できる操作デモを公開。", "Hosts the interactive demo with fictional data."),
      line("予約・管理UI / Booking and admin UI", "宿泊者の予約画面と、複数ホテルの予約・空室・料金を確認する管理画面を分離。", "Separates guest booking from the multi-property admin dashboard for reservations, availability, and rates."),
      line("デモデータ / Demo data", "架空の予約や空室データで画面と操作を確認。", "Uses fictional reservations and availability to demonstrate the flow."),
    ],
  },
  ouchi: {
    role: { ja: "要件定義、サイト構成・問い合わせ導線の設計、実装、テスト、公開後の運用・改善を担当。SNS運用、SEO記事の作成・投稿、Googleビジネスプロフィールの投稿も担当しました。", en: "Owned requirements, site architecture, inquiry flows, implementation, testing, and ongoing improvement. Also managed social media, SEO articles, and Google Business Profile posts." },
    stack: [
      line("Next.js / TypeScript", "サービスページ、記事、フォーム・LINEへの導線を実装。", "Implements service pages, articles, and paths to forms and LINE."),
      line("Tailwind CSS / shadcn/ui", "料金・サービスカードやモバイル表示を調整。", "Styles pricing and service cards and supports mobile layouts."),
      line("Supabase / PostgreSQL", "サービス情報、記事、翻訳データの管理。データのアクセス範囲は行レベルのルールで制御。", "Manages service information, blog content, and translations with row-level access rules."),
      line("next-intl / Vercel", "言語ごとのURLと表示を管理し、Vercelで公開。", "Manages language-specific routes and content, with deployment on Vercel."),
      line("Google Search Console / Google Business Profile", "検索データの確認とマップ上の投稿運用。構造化データや記事の見直しをSEO・AIO改善に活用。", "Reviews search data and manages Maps posts. Uses structured data and content revisions for SEO and AI search."),
    ],
  },
  kyn: {
    role: { ja: "サービス情報の整理、ページ構成と問い合わせ導線の設計。", en: "Organized service information and designed the page structure and inquiry flow." },
    stack: [line("Web UI", "サービス内容から相談先へ進める構成。", "Connects service descriptions to contact options.")],
  },
  "aircon-lp": {
    role: { ja: "訴求内容、ページ構成、問い合わせまでの導線を設計。", en: "Designed the messaging, page structure, and inquiry flow." },
    stack: [line("ランディングページ / Landing page", "サービスの説明を縦長の1ページにまとめ、問い合わせにつなげる構成。", "Presents the service and inquiry options on one long-form page.")],
  },
  "electric-lp": {
    role: { ja: "法人向けサービス情報の整理、LP制作、問い合わせ導線の設計。", en: "Organized service information, built the landing page, and designed the inquiry flow for business customers." },
    stack: [line("ランディングページ / Landing page", "法人向け工事内容と問い合わせ先を1ページに集約。", "Brings commercial service information and contact options onto one page.")],
  },
  macro: {
    role: { ja: "指標の見せ方を整理し、ダッシュボードの画面を設計・制作。", en: "Organized the indicator presentation and designed and built the dashboard interface." },
    stack: [line("データ可視化 / Data visualization", "複数の経済指標を一覧し、変化を比較できる画面。", "Presents multiple economic indicators for side-by-side review.")],
  },
  banner: {
    role: { ja: "求人の訴求点を整理し、見出し・文字量・画像の配置を設計してバナーを制作。", en: "Prioritized the recruitment message and designed the banner’s headline, text, and imagery." },
    stack: [line("バナーデザイン / Banner design", "短時間で主要な求人情報を読めるよう、情報に優先順位を付けて配置。", "Uses visual hierarchy to convey key job information at a glance.")],
  },
  "line-menu": {
    role: { ja: "メニュー項目の整理、ボタン配置、カフェ・ペット関連の2種類の画像制作。", en: "Organized menu options, designed button layouts, and produced two designs for cafe and pet-related services." },
    stack: [line("LINEリッチメニュー / LINE Rich Menu", "利用者が目的のサービスを見つけやすいメニュー画像を制作。", "Designed menu assets to make the intended service easy to find.")],
  },
};
