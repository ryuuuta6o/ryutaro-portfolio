import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ryutaro-portfolio-orpin.vercel.app"),
  title: "橘 龍太郎 | AI活用Webマーケティング・SEO・サイト改善",
  description: "橘 龍太郎のポートフォリオ。住宅設備サービスの個人事業と顧客対応の経験を基に、Webサイト・LP制作、SEOを意識した情報設計、問い合わせ導線の改善に取り組む。生成AIを試作・検証に活用し、10作品を掲載。",
  alternates: { canonical: "/", languages: { ja: "/", en: "/en/", "x-default": "/" } },
  robots: { index: true, follow: true },
};

export default function JapaneseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja" className={display.variable + " " + body.variable} suppressHydrationWarning><body>{children}</body></html>;
}
