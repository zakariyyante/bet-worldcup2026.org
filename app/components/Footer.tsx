import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-blue-900/30 pt-16 pb-10"
      style={{ background: "rgba(3,7,18,0.98)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: Logo centred */}
        <div className="flex justify-center mb-12">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="bet-worldcup2026.org"
              width={240}
              height={60}
              className="h-14 w-auto opacity-90 hover:opacity-100 transition duration-300"
            />
          </Link>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Disclosure", href: "/disclosure" },
                { label: "How We Rate", href: "/#guide" },
                { label: "About Us", href: "/#about" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-bold text-slate-400 hover:text-green-400 transition duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-5">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Affiliate Disclosure", href: "/disclosure" },
                { label: "Disclaimer", href: "/terms#disclaimer" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-bold text-slate-400 hover:text-green-400 transition duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-5">Responsible</h4>
            <ul className="space-y-3">
              {[
                { label: "BeGambleAware", href: "https://www.begambleaware.org" },
                { label: "GamStop", href: "https://www.gamstop.co.uk" },
                { label: "GamCare", href: "https://www.gamcare.org.uk" },
                { label: "UKGC License", href: "https://www.gamblingcommission.gov.uk" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-400 hover:text-green-400 transition duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-5">Contact</h4>
            <ul className="space-y-3 text-sm font-bold text-slate-400">
              <li>
                <a href="mailto:info@bet-worldcup2026.org" className="hover:text-green-400 transition duration-200">
                  info@bet-worldcup2026.org
                </a>
              </li>
              <li>Helpline: <a href="tel:08088020133" className="text-yellow-500 hover:underline">0808 802 0133</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-900 pt-8 mb-8">
          <p className="text-[11px] text-slate-500 leading-relaxed text-center max-w-5xl mx-auto font-medium">
            bet-worldcup2026.org is an independent affiliate review site. We receive a commission when you click our links and sign up to a bookmaker — this does not affect our ratings. All bookmakers listed are regulated by the{" "}
            <strong className="text-slate-400">UK Gambling Commission</strong>. Gambling involves risk. Past results do not guarantee future outcomes. Only gamble with money you can afford to lose. Content is intended for UK residents aged 18 and over.
          </p>
        </div>

        {/* Responsible gambling logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          <Image src="/18plus.svg" alt="18+" width={44} height={44} className="opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 duration-300" />
          <Image src="/ukgc.svg" alt="UK Gambling Commission" width={100} height={36} className="opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 duration-300" />
          <Image src="/gambleaware.png" alt="BeGambleAware" width={140} height={36} className="opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 duration-300 object-contain" />
          <Image src="/gamestop.png" alt="GamStop" width={100} height={36} className="opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 duration-300 object-contain" />
          <Image src="/gamcare.png" alt="GamCare" width={100} height={36} className="opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 duration-300 object-contain" />
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-700">
          &copy; {year} bet-worldcup2026.org — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
