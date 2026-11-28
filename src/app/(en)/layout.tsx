import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "../globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ryutaro-portfolio-orpin.vercel.app"),
  title: "R.T. | AI Adoption Support & Workflow Automation",
  description: "Explore how R.T. applies AI to field work: a settlement system used in appliance repair, and two prototypes tested on-device: photo-based estimation and voice-based answer support.",
  openGraph: { title: "R.T. | AI Adoption Support & Workflow Automation", siteName: "R.T. Portfolio", type: "website" },
  twitter: { card: "summary", title: "R.T. | AI Adoption Support & Workflow Automation" },
  alternates: { canonical: "/en/", languages: { ja: "/", en: "/en/", "x-default": "/" } },
  robots: { index: true, follow: true },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={display.variable + " " + body.variable} suppressHydrationWarning><body>{children}</body></html>;
}
