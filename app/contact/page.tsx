import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | bet-worldcup2026.org",
  description: "Get in touch with the bet-worldcup2026.org team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12 w-full">
        <div className="mb-6">
          <Link href="/" className="text-sm text-green-400 hover:text-green-300 transition font-bold">
            ← Back to Home
          </Link>
        </div>

        <div className="casino-card-bg rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800">
          <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Contact Us</h1>
          <p className="text-slate-400 mb-8 font-medium">
            Have a question, feedback, or want to report an issue? We&apos;d love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl transition-all hover:scale-[1.02]"
              style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}>
              <span className="text-3xl">📧</span>
              <div>
                <div className="font-black text-white text-base tracking-tight">General Enquiries</div>
                <a href="mailto:info@bet-worldcup2026.org" className="text-green-400 hover:text-green-300 underline text-sm font-bold">
                  info@bet-worldcup2026.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl transition-all hover:scale-[1.02]"
              style={{ background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.2)" }}>
              <span className="text-3xl">⚖️</span>
              <div>
                <div className="font-black text-white text-base tracking-tight">Legal & Compliance</div>
                <a href="mailto:legal@bet-worldcup2026.org" className="text-yellow-500 hover:text-yellow-400 underline text-sm font-bold">
                  legal@bet-worldcup2026.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl transition-all hover:scale-[1.02]"
              style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
              <span className="text-3xl">🤝</span>
              <div>
                <div className="font-black text-white text-base tracking-tight">Partnerships & Affiliates</div>
                <a href="mailto:partners@bet-worldcup2026.org" className="text-emerald-400 hover:text-emerald-300 underline text-sm font-bold">
                  partners@bet-worldcup2026.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl transition-all hover:scale-[1.02]"
              style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(234,179,8,0.2)" }}>
              <span className="text-3xl">🆘</span>
              <div>
                <div className="font-black text-white text-base tracking-tight">Problem Gambling Helpline</div>
                <a href="tel:08088020133" className="text-yellow-500 font-black hover:underline text-base">
                  0808 802 0133
                </a>
                <p className="text-slate-500 text-xs mt-1 font-bold uppercase tracking-wider">Free, confidential support 24/7</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            We aim to respond to all enquiries within 2 business days. For urgent responsible gambling concerns, please contact the National Gambling Helpline directly.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
