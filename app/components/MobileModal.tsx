"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { track } from "@vercel/analytics/react";
import type { Brand } from "@/app/data/brands";
import { buildUrl } from "./BrandCard";

interface MobileModalProps {
  brands: Brand[];
  gclidValue: string;
}

export default function MobileModal({ brands, gclidValue }: MobileModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, [router]);

  if (!isOpen) return null;

  const mobileBrands = brands.filter((b) => b.isMobile);

  function handleClick(brand: Brand) {
    const url = buildUrl(brand.url, gclidValue);
    track("Brand Click", { brand: brand.name, source: "mobile_modal" });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col overflow-y-auto"
      style={{ background: "rgba(5,11,24,0.98)", backdropFilter: "blur(12px)" }}>
      {/* Close button */}
      <div className="flex justify-end p-5">
        <button
          onClick={() => setIsOpen(false)}
          className="p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-blue-900/40 transition-all duration-200"
          aria-label="Close"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Hero text */}
      <div className="text-center px-6 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em]"
          style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ADE80" }}>
          ⚽ Exclusive Mobile Offers
        </div>
        <h2 className="text-3xl font-black text-white tracking-tight">World Cup 2026</h2>
        <p className="green-text font-black text-xl italic mt-1">Best Betting Bonuses</p>
        <p className="text-slate-400 text-sm mt-3 font-medium">Claim your exclusive welcome offer now</p>
      </div>

      {/* Brand cards */}
      <div className="flex-1 px-5 pb-8 space-y-5 max-w-lg mx-auto w-full">
        {mobileBrands.map((brand, i) => (
          <div
            key={brand.id}
            onClick={() => handleClick(brand)}
            className="relative rounded-2xl overflow-hidden cursor-pointer casino-card-bg transition-all duration-300 hover:scale-[1.02] shadow-xl"
          >
            {i === 0 && (
              <div className="bg-gradient-to-r from-yellow-500 to-amber-400 text-black text-[10px] font-black uppercase tracking-[0.2em] py-2 text-center">
                🥇 #1 Top Expert Pick
              </div>
            )}
            <div className="p-5 flex items-center gap-5">
              <div className="relative w-24 h-14 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain p-2"
                  sizes="96px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-black text-white text-base tracking-tight">{brand.name}</div>
                <div className="green-text text-sm font-black mt-0.5 truncate italic">{brand.bonus}</div>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="text-yellow-400 text-xs">★★★★★</span>
                  <span className="text-slate-500 text-[10px] font-bold">{brand.rating}/10</span>
                </div>
              </div>
              <button
                className="flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-white transition-all hover:opacity-90 casino-glow"
                style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}
              >
                Claim
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="px-6 pb-6 text-center text-[10px] text-slate-500 font-bold uppercase tracking-wider">
        18+ only. T&amp;Cs apply. Please gamble responsibly.{" "}
        <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-green-400 underline underline-offset-2">
          BeGambleAware.org
        </a>
      </div>

      {/* Footer */}
      <div className="border-t border-blue-900/30 py-4 px-6 text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-700">
        &copy; 2026 bet-worldcup2026.org
      </div>
    </div>
  );
}
