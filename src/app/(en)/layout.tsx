import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ryutaro-portfolio-orpin.vercel.app"),
  title: "Ryutaro Tachibana | AI Adoption Support & Workflow Automation",
  description: "Ryutaro Tachibana seeks roles in AI adoption and workflow automation. Explore how customer interviews, workflow and requirements mapping, AI-assisted building, and verification shaped a system used in his own residential equipment service business.",
  alternates: { canonical: "/en/", languages: { ja: "/", en: "/en/", "x-default": "/" } },
  robots: { index: true, follow: true },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={display.variable + " " + body.variable} suppressHydrationWarning><body>{children}</body></html>;
}
