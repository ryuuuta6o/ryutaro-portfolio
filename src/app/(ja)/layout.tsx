import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ryutaro-portfolio-orpin.vercel.app"),
  title: "橘 龍太郎 | AI導入支援・業務自動化を志望",
  description: "橘 龍太郎のポートフォリオ。住宅設備サービスの現場経験を活かし、顧客ヒアリング、業務・要件整理、生成AIを用いた構築、検証、運用改善に取り組む。自社業務で実運用する受付・見積・発注・精算システムを紹介。",
  alternates: { canonical: "/", languages: { ja: "/", en: "/en/", "x-default": "/" } },
  robots: { index: true, follow: true },
};

export default function JapaneseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja" className={display.variable + " " + body.variable} suppressHydrationWarning><body>{children}</body></html>;
}
