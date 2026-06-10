import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | bet-worldcup2026.org",
  description: "Privacy Policy for bet-worldcup2026.org — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full">
        <div className="mb-6">
          <Link href="/" className="text-sm text-green-400 hover:text-green-300 transition font-bold">
            ← Back to Home
          </Link>
        </div>

        <div className="casino-card-bg rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl border border-slate-800">
          <div>
            <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Privacy Policy</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Last updated: 1 January 2026</p>
          </div>

          <div className="prose prose-sm max-w-none text-slate-300 space-y-6 font-medium">
            <section>
              <h2 className="text-xl font-black text-white mb-3 tracking-tight border-l-4 border-green-500 pl-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to bet-worldcup2026.org (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website bet-worldcup2026.org.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-slate-400">
                <li><strong className="text-slate-300">Log Data:</strong> IP address, browser type, pages visited, time and date of visit.</li>
                <li><strong className="text-slate-300">Cookies:</strong> We use cookies and similar tracking technologies. See Section 7 (Cookie Policy) below.</li>
                <li><strong className="text-slate-300">Analytics Data:</strong> Aggregated, anonymised usage data via Google Analytics and Vercel Analytics.</li>
                <li><strong className="text-slate-300">Click Data:</strong> Affiliate link clicks including gclid parameters for tracking purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-slate-400">
                <li>Operate and improve our website</li>
                <li>Analyse traffic and user behaviour</li>
                <li>Track affiliate referrals and conversions</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Legal Basis for Processing (UK GDPR)</h2>
              <p>Under UK GDPR, we process your data on the following legal bases:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-slate-400">
                <li><strong className="text-slate-300">Legitimate Interests:</strong> Analytics and affiliate tracking.</li>
                <li><strong className="text-slate-300">Consent:</strong> Non-essential cookies where you have given consent.</li>
                <li><strong className="text-slate-300">Legal Obligation:</strong> Compliance with applicable law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Sharing Your Information</h2>
              <p>
                We do not sell your personal data. We may share data with trusted third-party service providers including Google Analytics, Vercel, and affiliate network partners solely to operate this website. All third parties are contractually required to keep your data secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
              <p>
                We retain log data for up to 12 months and anonymised analytics data indefinitely. Affiliate click data is retained for the duration required by our affiliate agreements.
              </p>
            </section>

            <section id="cookies">
              <h2 className="text-xl font-bold text-white mb-3">7. Cookie Policy</h2>
              <p>
                We use the following types of cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-slate-400">
                <li><strong className="text-slate-300">Essential Cookies:</strong> Required for the website to function.</li>
                <li><strong className="text-slate-300">Analytics Cookies:</strong> Google Analytics (_ga, _gid) to understand usage patterns.</li>
                <li><strong className="text-slate-300">Advertising Cookies:</strong> Google Ads (gclid) for conversion tracking.</li>
              </ul>
              <p className="mt-3">
                You can manage cookies through your browser settings. Disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-slate-400">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request erasure (&quot;right to be forgotten&quot;)</li>
                <li>Object to processing</li>
                <li>Request data portability</li>
                <li>Lodge a complaint with the ICO (ico.org.uk)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Children&apos;s Privacy</h2>
              <p>
                Our website is intended for adults aged 18 and over. We do not knowingly collect data from individuals under 18. If you believe we have inadvertently collected such data, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white mb-3 tracking-tight border-l-4 border-green-500 pl-4">10. Contact Us</h2>
              <p className="leading-relaxed">
                For privacy-related queries, contact us at:{" "}
                <a href="mailto:privacy@bet-worldcup2026.org" className="text-green-400 hover:text-green-300 underline font-bold">
                  privacy@bet-worldcup2026.org
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
