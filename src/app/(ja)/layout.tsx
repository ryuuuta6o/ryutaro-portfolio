import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ryutaro-portfolio-orpin.vercel.app"),
  title: "R.T. | AI導入支援・業務自動化を志望",
  description: "R.T.のAI導入・業務改善ポートフォリオ。家電修理の受付・精算システムの運用実績、写真を使った見積支援と録音した音声からの回答支援の試作・実機検証を紹介します。",
  openGraph: { title: "R.T. | AI導入支援・業務自動化を志望", siteName: "R.T. Portfolio", type: "website" },
  twitter: { card: "summary", title: "R.T. | AI導入支援・業務自動化を志望" },
  alternates: { canonical: "/", languages: { ja: "/", en: "/en/", "x-default": "/" } },
  robots: { index: true, follow: true },
};

export default function JapaneseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja" className={display.variable + " " + body.variable} suppressHydrationWarning><body>{children}</body></html>;
}
