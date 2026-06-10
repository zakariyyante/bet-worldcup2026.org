import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | bet-worldcup2026.org",
  description: "Affiliate Disclosure for bet-worldcup2026.org — transparency about our partnerships and how we earn money.",
};

export default function DisclosurePage() {
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
            <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Affiliate Disclosure</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Transparency & Trust</p>
          </div>

          <div className="prose prose-sm max-w-none text-slate-300 space-y-6 font-medium">
            <section>
              <h2 className="text-xl font-black text-white mb-3 tracking-tight border-l-4 border-green-500 pl-4">How We Operate</h2>
              <p className="leading-relaxed">
                bet-worldcup2026.org is a professional review site that receives compensation from the companies whose products we review. We are an independent affiliate marketing website, and our goal is to provide honest, expert-driven content to help you find the best betting experiences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white mb-3 tracking-tight border-l-4 border-green-500 pl-4">Affiliate Links</h2>
              <p className="leading-relaxed">
                Many of the links on this website are &quot;affiliate links.&quot; This means if you click on the link and sign up or make a deposit at a bookmaker, we may receive an affiliate commission. This compensation comes at no extra cost to you. In fact, our partnerships often allow us to provide you with exclusive bonuses that you might not find elsewhere.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white mb-3 tracking-tight border-l-4 border-green-500 pl-4">Editorial Independence</h2>
              <p className="leading-relaxed">
                The compensation we receive does not influence our reviews or ratings. Our experts evaluate bookmakers based on strict criteria, including licensing, security, odds quality, and payout speed. We only recommend bookmakers that meet our high standards for safety and reliability in the UK market.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white mb-3 tracking-tight border-l-4 border-green-500 pl-4">Why We Use This Model</h2>
              <p className="leading-relaxed">
                Affiliate marketing allows us to keep our content free for all users. It funds our research, website maintenance, and the expert team that continuously monitors the betting industry to ensure our information is accurate and up to date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-white mb-3 tracking-tight border-l-4 border-green-500 pl-4">Responsible Gambling</h2>
              <p className="leading-relaxed italic">
                Our affiliate relationships never compromise our commitment to responsible gambling. We prominently feature links to BeGambleAware, GamStop, and GamCare on every page to ensure our users have access to the support they need.
              </p>
            </section>

            <section>
              <p className="text-sm text-slate-400">
                If you have any questions regarding this disclosure, please feel free to contact us at{" "}
                <a href="mailto:info@bet-worldcup2026.org" className="text-green-400 hover:text-green-300 underline font-bold">
                  info@bet-worldcup2026.org
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
