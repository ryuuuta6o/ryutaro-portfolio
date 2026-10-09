import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ryutaro-portfolio-orpin.vercel.app"),
  title: "Ryutaro Tachibana | From field problems to working systems",
  description: "The portfolio of Ryutaro Tachibana: 10 projects in business applications, websites, and design, built around field insight and AI-assisted implementation.",
  alternates: { canonical: "/en/", languages: { ja: "/", en: "/en/", "x-default": "/" } },
  robots: { index: true, follow: true },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={display.variable + " " + body.variable} suppressHydrationWarning><body>{children}</body></html>;
}
