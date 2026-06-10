import Link from "next/link";

export default function Hero() {
  const year = 2026;

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 felt-texture">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full text-xs font-black uppercase tracking-[0.2em] border"
          style={{ background: "rgba(34,197,94,0.1)", borderColor: "rgba(34,197,94,0.3)", color: "#4ADE80" }}>
          <span className="animate-pulse">⚽</span>
          <span>UK&apos;s Elite Betting Hub {year}</span>
          <span className="animate-pulse">⚽</span>
        </div>

        {/* H1 */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
          <span className="text-white">Find the UK&apos;s Best</span>{" "}
          <br />
          <span className="green-text italic">World Cup</span>{" "}
          <span className="gold-text">Sites</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed font-medium">
          Expert-reviewed bookmakers with{" "}
          <span className="text-green-400 font-bold">exclusive 2026 bonuses</span>,
          rapid payouts, and verified UKGC licences.
        </p>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {[
            { icon: "🛡️", label: "UKGC Licensed", color: "text-blue-400" },
            { icon: "✅", label: "Expert Verified", color: "text-green-400" },
            { icon: "⚡", label: "Instant Payouts", color: "text-yellow-400" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-sm glass-panel"
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-slate-200">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            href="#brands"
            className="inline-flex items-center justify-center px-10 py-5 rounded-2xl text-xl font-black uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 casino-glow"
            style={{ background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)" }}
          >
            🏆 View Top Offers
          </Link>
          <Link
            href="#guide"
            className="inline-flex items-center justify-center px-10 py-5 rounded-2xl text-xl font-bold uppercase tracking-widest border-2 border-slate-700 text-slate-300 hover:bg-slate-800/50 transition-all duration-300"
          >
            How We Rate
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-slate-800/50 pt-10">
          {[
            { value: "15+", label: "Top Bookies", color: "green-text" },
            { value: "£500+", label: "In Bonuses", color: "gold-text" },
            { value: "100k+", label: "Happy Users", color: "text-blue-400" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl font-black ${stat.color.includes('-text') ? stat.color : ''}`} style={!stat.color.includes('-text') ? {color: stat.color.split('-')[1]} : {}}>{stat.value}</div>
              <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
