"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Disclosure", href: "/disclosure" },
  { label: "Guide", href: "/#guide" },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/contact" },
];

interface HeaderProps {
  isMobileTrue?: boolean;
}

export default function Header({ isMobileTrue }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/40 backdrop-blur-md"
      style={{ background: "rgba(5,11,24,0.95)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.png"
              alt={isMobileTrue ? "New Instant Casinos" : "bet-worldcup2026.org"}
              width={240}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-green-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/#brands"
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-lg text-sm font-black uppercase tracking-widest text-white transition-all duration-200 hover:scale-105 casino-glow"
              style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}
            >
              Top Offers
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-blue-900/40 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-blue-900/40 bg-[#050B18]">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-bold uppercase tracking-wider text-slate-300 hover:text-green-400 hover:bg-blue-900/20 transition"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#brands"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 px-4 py-3 rounded-lg text-sm font-black uppercase tracking-widest text-white text-center"
              style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}
            >
              Top Offers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
