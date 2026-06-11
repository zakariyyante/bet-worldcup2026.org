"use client";

import Image from "next/image";
import { track } from "@vercel/analytics/react";
import type { Brand } from "@/app/data/brands";

interface BrandCardProps {
  brand: Brand;
  rank: number;
  gclidValue?: string;
}

export function buildUrl(url: string, gclid?: string): string {
  if (!gclid) return url;
  // URL ends with empty param like clickid= — append gclid value directly
  if (url.endsWith("=")) {
    return url + encodeURIComponent(gclid);
  }
  // Fallback: append as query param
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}gclid=${encodeURIComponent(gclid)}`;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating / 2);
  const half = rating / 2 - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} className="text-yellow-400 text-base">★</span>
      ))}
      {half && <span className="text-yellow-400 text-base">⯨</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} className="text-slate-600 text-base">★</span>
      ))}
    </div>
  );
}

const badgeStyles: Record<string, { label: string; bg: string; text: string }> = {
  GOLD:   { label: "🥇 #1 Expert Pick",   bg: "from-yellow-500 to-amber-400",  text: "text-black" },
  SILVER: { label: "🥈 #2 Recommended", bg: "from-slate-400 to-slate-300",   text: "text-black" },
  BRONZE: { label: "🥉 #3 Best Odds",    bg: "from-amber-700 to-amber-600",   text: "text-white" },
};

declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => void;
  }
}

export default function BrandCard({ brand, rank, gclidValue }: BrandCardProps) {
  const finalUrl = buildUrl(brand.url, gclidValue);
  const badgeInfo = brand.badge ? badgeStyles[brand.badge] : null;

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    track("Brand Click", { brand: brand.name, rank: String(rank) });
    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    } else {
      window.open(finalUrl, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div
      className="relative group rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:casino-glow cursor-pointer casino-card-bg"
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick(e as unknown as React.MouseEvent)}
      aria-label={`Visit ${brand.name} — ${brand.bonus}`}
    >
      {/* Corner accent decorations */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-20 pointer-events-none">
        <svg viewBox="0 0 64 64" fill="none">
          <path d="M0 0 L64 0 L64 64" fill="url(#cornerGrad)" />
          <defs>
            <linearGradient id="cornerGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10 pointer-events-none">
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M48 48 L0 48 L0 0" fill="#22C55E" />
        </svg>
      </div>

      {/* Badge */}
      {badgeInfo && (
        <div className={`bg-gradient-to-r ${badgeInfo.bg} ${badgeInfo.text} text-[10px] font-black uppercase tracking-[0.2em] py-2 text-center shadow-lg`}>
          {badgeInfo.label}
        </div>
      )}

      {/* Card body */}
      <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center relative z-10">
        {/* LEFT: Logo + Rating */}
        <div className="flex flex-col items-center gap-4 min-w-[180px]">
          <div className="relative w-40 h-24 rounded-2xl overflow-hidden flex items-center justify-center p-2">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain p-2"
              sizes="160px"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5">
              <span className="text-3xl font-black green-text">{brand.rating}</span>
              <span className="text-slate-500 text-sm font-bold">/10</span>
            </div>
            <StarRating rating={brand.rating} />
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-1">{brand.votes.toLocaleString()} reviews</div>
          </div>
        </div>

        {/* RIGHT: Bonus + CTA */}
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <div className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-green-500/10 text-green-400 border border-green-500/20 mb-2">
              Exclusive Welcome Offer
            </div>
            <div className="text-2xl font-black green-text leading-tight tracking-tight">
              {brand.bonus}
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-3">
            {["Fast Payouts", "Mobile App", "Live Betting"].map((f) => (
              <span
                key={f}
                className="text-[11px] font-bold px-3 py-1 rounded-full text-blue-300 border border-blue-900/50 bg-blue-900/20"
              >
                ✓ {f}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <button
              onClick={handleClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl text-base font-black uppercase tracking-widest text-white transition-all duration-300 hover:opacity-90 hover:scale-105 casino-glow"
              style={{ background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)" }}
            >
              🎯 Claim Offer
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <div className="text-[10px] text-slate-500 font-medium max-w-[200px] text-center sm:text-left">
              T&amp;Cs apply. 18+ only. Verified UKGC License. Please gamble responsibly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
