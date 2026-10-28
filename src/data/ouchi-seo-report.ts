import type { Locale } from "./portfolio";

// Curated from ouchi-nandemoya-seo-aio/outputs/seo-progress-66-20261028.
// GSC: gsc-three-stages.json (byProperty; requested windows, not cumulative).
// Ranks: REPORT.md + openseo-live-followup; last measured 2026-10-22.
// Technical checks: structural-facts.json / REPORT.md, 2026-10-28.
// Keep operational logs, private paths, and unverified conversions out of public data.
export const seoPeriods = [
  { start: "2026-08-23", end: "2026-09-19", clicks: 19, impressions: 840, ctr: "2.26%", position: "21.48" },
  { start: "2026-09-13", end: "2026-10-10", clicks: 24, impressions: 818, ctr: "2.93%", position: "12.24" },
  { start: "2026-09-30", end: "2026-10-27", clicks: 38, impressions: 1750, ctr: "2.17%", position: "10.58" },
];

export const seoRankExamples = [
  { keyword: "名古屋 エアコン修理 料金", translation: "Nagoya air-conditioner repair pricing", before: 15, after: 12 },
  { keyword: "名古屋 エアコン 水漏れ 修理", translation: "Nagoya air-conditioner water-leak repair", before: 21, after: 14 },
  { keyword: "名古屋 エアコン 冷えない 修理", translation: "Nagoya air conditioner not cooling repair", before: 28, after: 18 },
];

type ReportCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  clicks: string;
  impressions: string;
  double: string;
  impressionRatio: string;
  comparison: string;
  scope: string;
  tableTitle: string;
  periodLabels: string[];
  period: string;
  ctr: string;
  position: string;
  reading: string;
  rankTitle: string;
  rankScope: string;
  keyword: string;
  rankBefore: string;
  rankAfter: string;
  rankNote: string;
  technicalTitle: string;
  technicalBody: string;
  conditions: string;
  notes: string[];
};

export const seoReportCopy: Record<Locale, ReportCopy> = {
  ja: {
    eyebrow: "SEO PROGRESS / 2026.10.28",
    title: "検索データで見る、改善の取り組み。",
    intro: "SEO・AIOのチェックリストに基づいて自社サイトを整理・改善。運用期間中に、検索クリック・表示回数の増加と、一部キーワードの順位改善を確認しました。",
    clicks: "検索クリック数",
    impressions: "検索表示回数",
    double: "2倍",
    impressionRatio: "約2.08倍",
    comparison: "比較期間：2026/8/23–9/19 → 9/30–10/27（各28日間の指定期間）",
    scope: "Google Search Console・ouchi-nandemoya.com全体の保存データ。2026年10月28日取得のレポートから掲載。",
    tableTitle: "途中経過を含む3期間の比較",
    periodLabels: ["初期の保存値", "中間の保存値", "今回の保存値"],
    period: "指定期間（2026年）",
    ctr: "クリック率（CTR）",
    position: "平均掲載順位",
    reading: "CTRは2.26%→2.17%で、次の改善課題です。平均掲載順位はサイト全体の集計値です。各期間は一部重なるため、合計せず比較しています。",
    rankTitle: "検索順位が改善したキーワードの例",
    rankScope: "OpenSEOの保存履歴：2026/10/20 → 10/22。名古屋市・日本語・スマホ・上位50件・手動計測。",
    keyword: "キーワード",
    rankBefore: "10/20",
    rankAfter: "10/22",
    rankNote: "改善が確認できた3語を抜粋。ほかに「名古屋 エアコン修理」は21→21位、「名古屋 エアコン ガス漏れ 修理」は19→21位でした。すべての語で改善したわけではありません。暖房関連の5位・7位は初回確認値として、下の画像に掲載しています。",
    technicalTitle: "改善後の技術面も点検",
    technicalBody: "2026/10/28のクロールで71URLを確認。内部リンク切れ0件、canonical（正規URL指定）の不整合0件、title・H1・descriptionの欠落・重複0件を確認しました。サイトの基盤を点検した結果として掲載しています。",
    conditions: "計測条件・結果の補足を読む",
    notes: [
      "GSCはドメイン全体を同じ集計方式（byProperty）で比較。Web検索・全地域・全端末、日付境界はAmerica/Los_Angelesです。初期値は比較可能な最初の保存値で、公開初日の値ではありません。",
      "GSCは確定データを指定して取得していますが、実際に含まれる最終データ日は未確認です。表の終了日は取得時の指定日です。クリック数は人数や問い合わせ数を表しません。",
      "季節、屋号検索の構成、10/11の日本語正規URL移行も結果に影響し得ます。改善の取り組みと並行して確認した変化として示し、増加の全量を特定施策の効果とはしていません。",
      "順位は10/22までの確認済み履歴で、現在順位の保証ではありません。OpenSEOの検索エンジン名は資料から確定できていません。AI回答画像のサービス名・確認日も未確認です。",
      "実顧客の問い合わせ数・売上の増加は未確認です。今後は検索流入から相談までの計測と、CTR・順位の継続確認を進めます。",
    ],
  },
  en: {
    eyebrow: "SEO PROGRESS / 2026.10.28",
    title: "Reviewing site improvements through search data.",
    intro: "I organized and improved my own business website using an SEO and AI-search checklist. During ongoing operations, I observed more search clicks and impressions, plus ranking improvements for some queries.",
    clicks: "Search clicks",
    impressions: "Search impressions",
    double: "2×",
    impressionRatio: "About 2.08×",
    comparison: "Comparison: Aug 23–Sep 19 → Sep 30–Oct 27, 2026 (requested 28-day windows)",
    scope: "Saved site-wide Google Search Console data for ouchi-nandemoya.com, from the report retrieved on October 28, 2026.",
    tableTitle: "Three saved periods, including the intermediate result",
    periodLabels: ["Baseline", "Intermediate", "This report"],
    period: "Requested window (2026)",
    ctr: "Click-through rate",
    position: "Average position",
    reading: "CTR moved from 2.26% to 2.17% and remains an improvement priority. Average position is a site-wide aggregate. These partly overlapping periods are compared, not added together.",
    rankTitle: "Examples of queries with ranking improvements",
    rankScope: "Saved OpenSEO history: October 20 → 22, 2026. Nagoya city, Japanese, mobile, top 50 results, manual measurement.",
    keyword: "Query (original Japanese)",
    rankBefore: "Oct 20",
    rankAfter: "Oct 22",
    rankNote: "Three improving queries are selected here. Elsewhere, ‘Nagoya air-conditioner repair’ stayed at 21, while ‘Nagoya air-conditioner gas-leak repair’ moved from 19 to 21. Not every query improved. The heating queries at positions 5 and 7 below are first recorded values, not measured gains.",
    technicalTitle: "Checking the technical foundation",
    technicalBody: "The October 28, 2026 crawl checked 71 URLs: no broken internal links, no canonical mismatches, and no missing or duplicate titles, H1s, or descriptions. These are technical validation results.",
    conditions: "Read measurement conditions and context",
    notes: [
      "GSC uses the same site-wide byProperty aggregation for all periods: web search, all countries and devices, with America/Los_Angeles date boundaries. The baseline is the earliest comparable saved value, not launch-day data.",
      "Final data was requested, but the last day actually included has not been verified. Table end dates are requested dates. Click counts are not people or inquiries.",
      "Seasonality, branded-query mix, and the October 11 Japanese canonical-URL migration may also affect results. These changes were observed alongside the improvement work; the full increase is not attributed to an individual intervention.",
      "Rankings are saved measurements through October 22, not guaranteed current positions. The OpenSEO search engine is not established by the records. The AI-answer screenshot's service and verification date are also unconfirmed.",
      "Growth in real customer inquiries and revenue has not been verified. Next steps include measuring the path from search to inquiry and monitoring CTR and rankings over time.",
    ],
  },
};
