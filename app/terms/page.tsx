import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | bet-worldcup2026.org",
  description: "Terms of Service for bet-worldcup2026.org — rules and conditions for using our website.",
};

export default function TermsPage() {
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
            <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Terms of Service</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Last updated: 1 January 2026</p>
          </div>

          <div className="prose prose-sm max-w-none text-slate-300 space-y-6 font-medium">
            <section>
              <h2 className="text-xl font-black text-white mb-3 tracking-tight border-l-4 border-green-500 pl-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using bet-worldcup2026.org (&quot;the Site&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Age Requirement</h2>
              <p>
                The Site is intended solely for persons aged 18 or over. By using the Site, you confirm that you are at least 18 years of age. We reserve the right to verify your age and to refuse access to anyone who cannot confirm they meet this requirement.
              </p>
            </section>

            <section id="disclaimer">
              <h2 className="text-xl font-bold text-white mb-3">3. Affiliate Disclaimer</h2>
              <p>
                bet-worldcup2026.org is an independent affiliate website. We receive compensation from bookmakers and betting sites when you click our links and register an account. This compensation does not influence our editorial content or ratings. All reviews are based on our independent assessment.
              </p>
              <p className="mt-3">
                We are not responsible for the terms, conditions, offers, or practices of any third-party bookmaker. Always read the full terms and conditions of any bookmaker before registering or depositing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. No Gambling Advice</h2>
              <p>
                Nothing on this Site constitutes gambling advice. All content is for informational and entertainment purposes only. Gambling involves financial risk. Never bet more than you can afford to lose. Past results do not indicate future outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Accuracy of Information</h2>
              <p>
                We strive to keep all information accurate and up to date. However, bonus offers, terms, and odds change frequently. We cannot guarantee that all information on the Site is current or complete. Always verify offers directly with the bookmaker before claiming.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Intellectual Property</h2>
              <p>
                All content on this Site — including text, graphics, logos, and images — is the property of bet-worldcup2026.org or its content suppliers and is protected by UK and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Third-Party Links</h2>
              <p>
                The Site contains links to third-party bookmakers and organisations. We are not responsible for the content, privacy practices, or terms of any third-party sites. Links to external sites do not constitute an endorsement beyond what is expressly stated.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, bet-worldcup2026.org and its operators shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Site or any bookmaker reached via the Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white mb-3 tracking-tight border-l-4 border-green-500 pl-4">9. Responsible Gambling</h2>
              <p className="leading-relaxed">
                We are committed to promoting responsible gambling. If you or someone you know has a gambling problem, please seek help:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-slate-400">
                <li>
                  <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline font-bold">
                    BeGambleAware.org
                  </a>
                </li>
                <li>
                  <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline font-bold">
                    GamCare.org.uk
                  </a>
                </li>
                <li>National Gambling Helpline: <a href="tel:08088020133" className="text-yellow-500 hover:underline font-black">0808 802 0133</a></li>
                <li>
                  <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline font-bold">
                    GamStop.co.uk
                  </a> — UK self-exclusion scheme
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Continued use of the Site after changes constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white mb-3 tracking-tight border-l-4 border-green-500 pl-4">12. Contact</h2>
              <p className="leading-relaxed">
                Questions about these Terms? Contact us at:{" "}
                <a href="mailto:legal@bet-worldcup2026.org" className="text-green-400 hover:text-green-300 underline font-bold">
                  legal@bet-worldcup2026.org
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
