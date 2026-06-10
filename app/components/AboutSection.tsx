export default function AboutSection() {
  const criteria = [
    { icon: "🛡️", title: "Licensing & Safety", desc: "Only UKGC-licensed bookmakers make our list." },
    { icon: "💰", title: "Bonus Value",          desc: "We compare welcome offers, wagering, and T&Cs." },
    { icon: "⚡", title: "Payout Speed",          desc: "We verify withdrawal times and payment options." },
    { icon: "📱", title: "Mobile Experience",     desc: "Apps and mobile sites tested on iOS & Android." },
    { icon: "⚽", title: "World Cup Markets",     desc: "Depth of pre-match, in-play, and special markets." },
    { icon: "🎧", title: "Customer Support",      desc: "Live chat, email, and phone response times rated." },
  ];

  return (
    <section id="guide" className="py-20 sm:py-32 felt-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
            style={{ background: "rgba(34,197,94,0.1)", color: "#4ADE80", border: "1px solid rgba(34,197,94,0.3)" }}>
            Our Review Methodology
          </div>
          <h2 id="about" className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            How We Rate{" "}
            <span className="green-text italic">Betting</span>{" "}
            <span className="gold-text">Sites</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg font-medium">
            Every bookmaker on this page has been independently tested by our team of UK betting experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Why our reviews stand out */}
          <div className="rounded-3xl p-8 sm:p-10 casino-card-bg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl" />
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <span className="text-3xl">🏆</span> Why Our Reviews Stand Out
            </h3>
            <ul className="space-y-6">
              {criteria.map((item) => (
                <li key={item.title} className="flex items-start gap-4 group">
                  <span className="text-3xl flex-shrink-0 transition-transform group-hover:scale-110 duration-300">{item.icon}</span>
                  <div>
                    <div className="font-black text-white text-base tracking-tight">{item.title}</div>
                    <div className="text-slate-400 text-sm mt-1 leading-relaxed font-medium">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible gambling */}
          <div className="rounded-3xl p-8 sm:p-10 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0F172A 0%, #061A11 100%)", border: "1px solid rgba(34,197,94,0.2)" }}>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🤝</span> Responsible Gambling
            </h3>
            <p className="text-slate-300 text-base leading-relaxed mb-8 font-medium">
              We are committed to promoting safe and responsible gambling. Betting should be fun — never a way to make money or escape problems.
            </p>
            <ul className="space-y-4 text-sm font-bold">
              {[
                { text: "Set deposit limits at your bookmaker", icon: "✅", color: "text-green-400" },
                { text: "Use GamStop for UK self-exclusion", icon: "✅", color: "text-green-400" },
                { text: "Talk to GamCare for free support", icon: "✅", color: "text-green-400" },
                { text: "National Gambling Helpline: 0808 8020 133", icon: "📞", color: "text-yellow-400" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-slate-200 bg-slate-900/40 p-3 rounded-xl border border-slate-800/50">
                  <span className={item.color}>{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.begambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-black uppercase tracking-widest text-white hover:opacity-80 transition-all hover:scale-105"
                style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)" }}
              >
                BeGambleAware ↗
              </a>
              <a
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-black uppercase tracking-widest text-white hover:opacity-80 transition-all hover:scale-105"
                style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}
              >
                GamCare ↗
              </a>
              <a
                href="https://www.gamstop.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-black uppercase tracking-widest text-white hover:opacity-80 transition-all hover:scale-105"
                style={{ background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.3)" }}
              >
                GamStop ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
