import type { Locale } from "./portfolio";

export const agentIntro = {
  ja: { label: "01 / AI WORKFLOWS", title: "AIに任せる部分を、\n業務ごとに決める。", body: "見積金額を決めるときと、相手の質問に答えるとき。どちらもAIが候補を整理し、最後は担当者が判断します。", built: "制作したもの", design: "実機で確認したこと", detail: "画面と試作の詳細", evidence: "代表実績を見る" },
  en: { label: "01 / AI WORKFLOWS", title: "Where AI helps.\nWhere people decide.", body: "An estimate and a spoken answer both need someone to stand behind them. In both prototypes, AI prepares options and a person makes the decision.", built: "What I built", design: "What I verified", detail: "Screen and prototype notes", evidence: "Read the case study" },
} satisfies Record<Locale, Record<string, string>>;

export const agentCases = [
  {
    id: "photo-estimate", index: "01",
    ja: { name: "写真から工事の見積もりを支援", label: "写真見積もりAIエージェント", built: "現場写真と工事条件を登録し、料金表を参照して概算を出し、見積履歴を残す画面を試作しました。", design: "現場写真を入力すると、工事項目の候補が表示されることを実機で確認しました。見積金額は担当者が候補と料金表を確認して決めます。", caption: "試作の集計画面。表示はデモデータです。", status: "試作・本人が実機で動作確認" },
    en: { name: "From site photos to a working estimate", label: "Estimation agent", built: "I prototyped screens for entering photos and job conditions, referencing a price list, calculating an estimate, and keeping its history.", design: "I entered a site photo and verified on my device that the prototype displayed suggested work items. The contractor reviews the suggestions and price list before setting the price.", caption: "Prototype dashboard with demonstration data.", status: "Prototype · verified on my device" },
  },
  {
    id: "meeting-recorder", index: "02",
    ja: { name: "録音した会話から回答案をつくる", label: "録音・会話支援AIエージェント", built: "Windowsで画面・PC音声・マイクを記録し、MP4に保存。録画中のマーカーを使い、必要な場面を切り出せる個人用ツールを作りました。", design: "取り込んだ会話から質問を検出し、登録資料を根拠に回答候補が表示されるところまで実機で確認しました。候補をそのまま送らず、本人が返答を選びます。", caption: "制作したWindows録画ツールの待機画面です。", status: "録画機能を実装 ／ AI回答支援は試作・本人実機確認" },
    en: { name: "From recorded speech to a draft reply", label: "Voice Q&A agent", built: "I built a personal Windows recorder for screen, system audio, and microphone capture. It saves MP4s and supports markers and trimming.", design: "I verified on my device that the prototype detected a question in recorded speech and displayed a suggested answer based on the supplied material. The speaker chooses how to respond.", caption: "The Windows recorder I built, ready to capture.", status: "Recorder implemented / AI reply prototype verified on my device" },
  },
];
