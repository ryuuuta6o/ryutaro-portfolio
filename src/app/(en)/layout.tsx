import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ryutaro-portfolio-orpin.vercel.app"),
  title: "Ryutaro Tachibana | AI-enabled Web Marketing & Site Improvement",
  description: "Ryutaro Tachibana's portfolio: field experience and a residential equipment service business inform websites, landing pages, SEO-conscious content, and inquiry-path improvement. Ten projects, including AI-assisted prototypes and business applications.",
  alternates: { canonical: "/en/", languages: { ja: "/", en: "/en/", "x-default": "/" } },
  robots: { index: true, follow: true },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={display.variable + " " + body.variable} suppressHydrationWarning><body>{children}</body></html>;
}
