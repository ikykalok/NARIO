import type { Metadata, Viewport } from "next";
import { Inter_Tight, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BR-Nario — Tender coconut water",
    template: "%s — BR-Nario",
  },
  description:
    "One young green coconut, opened and canned within a day — then sealed in a Fluteworks corrugated carton. Six flavours, no added sugar, 500 mg potassium per can.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "BR-Nario — Tender coconut water",
    description:
      "One young green coconut, opened and canned within a day — then sealed in a Fluteworks corrugated carton. Six flavours, no added sugar, 500 mg potassium per can.",
    siteName: "BR-Nario",
  },
  twitter: {
    card: "summary_large_image",
    title: "BR-Nario — Tender coconut water",
    description:
      "One young green coconut, opened and canned within a day — then sealed in a Fluteworks corrugated carton. Six flavours, no added sugar, 500 mg potassium per can.",
  },
  icons: {
    icon: "/assets/sip/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F3EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased cursor-none-desktop">{children}</body>
    </html>
  );
}
