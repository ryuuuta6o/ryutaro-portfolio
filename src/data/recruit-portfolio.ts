import { copy as baseCopy, projects as baseProjects, type Project } from "./portfolio";
export { careerInterests, identity, skills, type Locale, type Project, type ProjectEvidence } from "./portfolio";

export const copy = {
  ja: {
    ...baseCopy.ja,
    nav: ["AI WORKFLOWS", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"],
    heroLine: "現場の課題に、",
    heroAccent: "AIエージェントを。",
    heroBody: [
      ["写真からの見積もりと、", "会話中の回答を支援する"],
      ["AIエージェントを設計・開発しました。"],
    ],
    heroPrimary: "AIエージェントの実績を見る",
    aboutEyebrow: "02 / ABOUT",
    skillsEyebrow: "03 / APPROACH",
    projectsEyebrow: "04 / SELECTED WORK",
    viewAll: "すべての12作品を見る",
    contactEyebrow: "05 / CONTACT",
    stats: baseCopy.ja.stats.map(([value, label], index) => [index === 0 ? "12" : value, label] as const),
  },
  en: {
    ...baseCopy.en,
    nav: ["AI WORKFLOWS", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"],
    heroLine: "Practical tools,",
    heroAccent: "powered by AI agents.",
    heroBody: [
      ["I design and build AI agents that help people estimate jobs from site photos and respond to questions during conversations."],
    ],
    heroPrimary: "Explore my AI agents",
    aboutEyebrow: "02 / ABOUT",
    skillsEyebrow: "03 / APPROACH",
    projectsEyebrow: "04 / SELECTED WORK",
    viewAll: "View all 12 projects",
    contactEyebrow: "05 / CONTACT",
    stats: baseCopy.en.stats.map(([value, label], index) => [index === 0 ? "12" : value, label] as const),
  },
} as const;

const estimate: Project = {
    id: "photo-estimate", number: "",
    title: { ja: "見積もりAIエージェント：写真から工事の概算へ", en: "Estimation agent: from site photos to a quote" },
    category: { ja: "見積支援・試作", en: "Estimation support · prototype" },
    summary: { ja: "現場写真、工事条件、料金表、見積履歴を扱う試作。写真から工事項目の候補が出ることを本人が実機で確認しました。", en: "A prototype for photos, job conditions, a price list, and estimate history. I verified on my device that a photo produced suggested work items." },
    detail: { ja: "現場写真と工事条件を入力して概算と履歴を扱う流れを、Next.jsとSupabaseで試作しました。実際に現場写真を入力し、AIが工事項目の候補を表示するところまで本人が実機で確認しました。根拠や追加確認事項を整理することも設計に含めています。概算には料金表と計算ルールを使い、担当者が内容を確認・修正します。画面内の数値はデモデータです。", en: "I prototyped an estimate and history workflow with Next.js and Supabase. I entered a site photo and verified on my device that the AI displayed suggested line items. Explanations and follow-up questions are also part of the design. The estimate uses price-list rules; a person checks and adjusts the result. The screen shows demo data." },
    image: "/sites/ryutaro/photo-estimate-agent-full.jpg",
    alt: { ja: "デモデータを表示した見積もり試作の集計画面", en: "Estimate prototype dashboard with demo data" },
    tags: [{ja:"料金ルール", en:"Pricing rules"}, {ja:"人による確認", en:"Human review"}],
    badge: { ja: "試作画面・デモデータ", en: "Prototype · demo data" },
    status: { ja: "試作・写真からの候補表示を本人実機確認", en: "Prototype · photo suggestions verified on my device" },
  };

const recording = {
  ja: "テスト録画で、操作バーと録画枠が保存したMP4に映らないことを確認しました。会話中の音声を文字に起こし、質問を検出して、登録資料に基づく回答候補を表示するAIアシストも試作し、実機で確認しました。返答する内容は利用者が選びます。",
  en: "A test recording confirmed that the control bar and recording border stayed out of the saved MP4. I also prototyped and tested AI assistance that transcribes speech during a conversation, detects questions, and displays suggested replies based on reference materials. The user decides what to say.",
};

const cases = baseProjects.map(p => p.id !== "meeting-recorder" ? p : {
  ...p, detail: { ja: p.detail.ja + recording.ja, en: p.detail.en + " " + recording.en },
});
export const projects: Project[] = [
  ...cases.slice(0, 5), estimate, ...cases.slice(5),
].map((p, index) => ({ ...p, number: String(index + 1).padStart(2, "0") }));
