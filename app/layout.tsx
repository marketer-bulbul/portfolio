import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CursorGlow from "@/components/CursorGlow";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const siteUrl = "https://mdbulbulislam.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MD Bulbul Islam | Meta & Google Ads Performance Marketer",
    template: "%s | MD Bulbul Islam",
  },
  description:
    "MD Bulbul Islam is a performance marketer with 2M+ in managed ad spend across Facebook Ads, Google Ads, TikTok Ads, WordPress design, and server-side tracking for 50+ clients across 10+ brands.",
  keywords: [
    "Facebook Ads Expert",
    "Google Ads Expert",
    "Meta Performance Marketer",
    "WordPress Website Designer",
    "Server Side Tracking",
    "Conversion API",
    "Bangladesh Digital Marketer",
  ],
  authors: [{ name: "MD Bulbul Islam" }],
  creator: "MD Bulbul Islam",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "MD Bulbul Islam | Meta & Google Ads Performance Marketer",
    description:
      "2M+ ad spend managed. 50+ clients. 10+ brands scaled with data-driven Facebook, Google & TikTok Ads.",
    siteName: "MD Bulbul Islam",
    images: [
      {
        url: "https://sbadssolutionsagency.com/wp-content/uploads/2025/08/My-Profesional-Pic.png",
        width: 1200,
        height: 630,
        alt: "MD Bulbul Islam — Performance Marketer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Bulbul Islam | Meta & Google Ads Performance Marketer",
    description:
      "2M+ ad spend managed. 50+ clients. 10+ brands scaled with data-driven digital marketing.",
    images: [
      "https://sbadssolutionsagency.com/wp-content/uploads/2025/08/My-Profesional-Pic.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "MD Bulbul Islam",
  jobTitle: "Meta Performance Marketer & Google Ads Expert",
  url: siteUrl,
  image:
    "https://sbadssolutionsagency.com/wp-content/uploads/2025/08/My-Profesional-Pic.png",
  sameAs: [
    "https://www.facebook.com/bulbul.digital.marketer",
    "https://www.linkedin.com/in/mdtanim54/",
  ],
  knowsAbout: [
    "Facebook Ads",
    "Google Ads",
    "TikTok Ads",
    "WordPress Website Design",
    "Conversion API",
    "Server Side Tracking",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-base font-body text-white antialiased selection:bg-accent/30 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <CursorGlow />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
