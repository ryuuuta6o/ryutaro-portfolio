import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ryutaro-portfolio-orpin.vercel.app"),
  title: "R.T. | AI導入支援・業務自動化を志望",
  description: "R.T.のポートフォリオ。生成AIを活用した業務改善・開発に取り組み、顧客ヒアリング、業務・要件整理、生成AIを用いた構築、検証、運用改善に取り組む。実務用の業務システム、個人制作ツール、予約デモを紹介。",
  openGraph: { title: "R.T. | AI導入支援・業務自動化を志望", siteName: "R.T. Portfolio", type: "website" },
  twitter: { card: "summary", title: "R.T. | AI導入支援・業務自動化を志望" },
  alternates: { canonical: "/", languages: { ja: "/", en: "/en/", "x-default": "/" } },
  robots: { index: true, follow: true },
};

export default function JapaneseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja" className={display.variable + " " + body.variable} suppressHydrationWarning><body>{children}</body></html>;
}
