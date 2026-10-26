import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SceneLoader } from "@/components/three/SceneLoader";
import { profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: `${profile.name} — Data Analyst`, template: `%s · ${profile.name}` },
  description: "Portfolio of Govind Yadav — B.Tech CSE student and aspiring Data Analyst skilled in Python, SQL, MS SQL Server, MongoDB and cybersecurity.",
  openGraph: { title: `${profile.name} — Data Analyst`, description: profile.summary, type: "website", images: [profile.photo] },
  authors: [{ name: profile.name }],
};
export const viewport: Viewport = { themeColor: "#05060a", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Person", name: profile.name, email: profile.email,
    jobTitle: profile.role, address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressCountry: "IN" },
  };
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SceneLoader />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(124,92,255,0.12),transparent_60%)]" />
        <Navbar />
        <main className="min-h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
