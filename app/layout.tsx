import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best UK Betting Sites 2026 | World Cup Betting Offers",
  description:
    "Find the UK&apos;s best World Cup 2026 betting sites. Expert-reviewed bookmakers with exclusive welcome bonuses, fast payouts, and top odds.",
  keywords: "betting sites, UK betting, World Cup 2026, free bets, bookmakers, sports betting",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  openGraph: {
    title: "Best UK Betting Sites 2026 | bet-worldcup2026.org",
    description:
      "Expert-reviewed World Cup 2026 betting sites with exclusive bonuses.",
    url: "https://bet-worldcup2026.org",
    siteName: "bet-worldcup2026.org",
    locale: "en_GB",
    type: "website",
  },
};

const GA_ID = "G-XXXXXXXXXX";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className="antialiased">
        {/* Google Tag Manager */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
            
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank');
                }
              };
              gtag('event', 'conversion', {
                'send_to': '${GA_ID}/CONVERSION_LABEL',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>

        {children}
        <Analytics />
      </body>
    </html>
  );
}
