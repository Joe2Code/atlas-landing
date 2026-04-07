import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aroon Atlas — Your Crypto Trading Companion",
  description:
    "Real-time crypto trading signals, curated market news, and AI-powered analysis — delivered straight to Telegram.",
  openGraph: {
    siteName: "Aroon Atlas",
    title: "Aroon Atlas — Your Crypto Trading Companion",
    description:
      "Real-time crypto trading signals, curated market news, and AI-powered analysis — delivered straight to Telegram.",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aroon Atlas Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Aroon Atlas — Your Crypto Trading Companion",
    description:
      "Real-time crypto trading signals, curated market news, and AI-powered analysis — delivered straight to Telegram.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
