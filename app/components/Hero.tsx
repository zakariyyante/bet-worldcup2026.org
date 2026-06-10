import Link from "next/link";

export default function Hero() {
  const year = 2026;

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 felt-texture">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs font-bold uppercase tracking-widest border"
          style={{ background: "rgba(124,58,237,0.15)", borderColor: "rgba(124,58,237,0.4)", color: "#A78BFA" }}>
          <span>⚽</span>
          <span>UK&apos;s Premier Betting Review Hub {year}</span>
          <span>⚽</span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4">
          <span className="text-white">Find the UK&apos;s Best</span>{" "}
          <br className="sm:hidden" />
          <span className="gold-text">Betting Sites</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed">
          Expert-reviewed bookmakers with{" "}
          <span className="text-orange-400 font-semibold">exclusive World Cup 2026 bonuses</span>,
          rapid payouts, and verified licences — updated daily.
        </p>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {[
            { icon: "🛡️", label: "UKGC Licensed" },
            { icon: "✅", label: "Expert Approved" },
            { icon: "⚡", label: "Quick Withdrawals" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm"
              style={{ background: "rgba(30,21,48,0.8)", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              <span className="text-lg">{badge.icon}</span>
              <span className="text-slate-200">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#brands"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-black uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 casino-glow"
            style={{ background: "linear-gradient(135deg, #7C3AED 0%, #F97316 100%)" }}
          >
            🏆 View Top Betting Sites
          </Link>
          <Link
            href="#guide"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-bold uppercase tracking-wide border border-purple-700 text-purple-300 hover:bg-purple-900/30 transition-all duration-200"
          >
            How We Rate
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: "10+", label: "Top Bookmakers" },
            { value: "£200+", label: "In Bonuses" },
            { value: "50k+", label: "User Reviews" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black gold-text">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
