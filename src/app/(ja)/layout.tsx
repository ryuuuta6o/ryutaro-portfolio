import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ryutaro-portfolio-orpin.vercel.app"),
  title: "橘 龍太郎 | 現場の課題を、動く仕組みに。",
  description: "橘 龍太郎のポートフォリオ。現場の課題を理解し、生成AIを活用して実際に動くシステムをつくる。業務アプリ、Webサイト、デザインの10作品を紹介します。",
  alternates: { canonical: "/", languages: { ja: "/", en: "/en/", "x-default": "/" } },
  robots: { index: true, follow: true },
};

export default function JapaneseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja" className={display.variable + " " + body.variable} suppressHydrationWarning><body>{children}</body></html>;
}
