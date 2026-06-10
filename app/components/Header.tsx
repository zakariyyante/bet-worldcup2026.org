"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Brands", href: "/#brands" },
  { label: "Guide", href: "/#guide" },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-900/40 backdrop-blur-md"
      style={{ background: "rgba(13,10,26,0.95)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="bet-worldcup2026.org"
              width={180}
              height={45}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/#brands"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #7C3AED, #F97316)" }}
            >
              Top Offers
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-purple-900/40 transition"
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
        <div className="md:hidden border-t border-purple-900/40 bg-[#0D0A1A]">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-orange-400 hover:bg-purple-900/20 transition"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#brands"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 px-4 py-2 rounded-lg text-sm font-bold uppercase text-white text-center"
              style={{ background: "linear-gradient(135deg, #7C3AED, #F97316)" }}
            >
              Top Offers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
