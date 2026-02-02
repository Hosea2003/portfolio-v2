import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourwebsite.com";

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer",
  description:
    "Creative full stack developer specializing in modern web experiences",
  openGraph: {
    title: "Portfolio - Full Stack Developer",
    description:
      "Creative full stack developer specializing in modern web experiences",
    url: siteUrl,
    siteName: "Rindra Hosea Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Rindra Hosea - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Full Stack Developer",
    description:
      "Creative full stack developer specializing in modern web experiences",
    images: ["/images/preview.png"],
  },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
