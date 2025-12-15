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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="939s8ZFBD29BQHROpw4f-h_DkP8Da6Jc1P8pjidoswE"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-262MSHSYVY"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-262MSHSYVY');
            `,
          }}
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "OfferKhoj",
              "url": "https://offer-khoj-ofxe.vercel.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://offer-khoj-ofxe.vercel.app/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
