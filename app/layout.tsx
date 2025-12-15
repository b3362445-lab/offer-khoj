import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OfferKhoj – আপনার শহরের সেরা অফার এক জায়গায়",
  description:
    "Restaurant, cosmetics ও electronics এর সেরা discount দেখুন OfferKhoj এ। আপনার এলাকার আজকের সেরা অফার এখনই খুঁজুন।",

  // ✅ Google Search Console verification (IMPORTANT)
  verification: {
    google: "939s8ZFBD29BQHROpw4f-h_DkP8Da6Jc1P8pjidoswE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
