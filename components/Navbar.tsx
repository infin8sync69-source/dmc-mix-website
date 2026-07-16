"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Application", href: "#application" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-dmc-black tracking-tight">DMC</span>
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="-ml-1 -mt-1">
              <path d="M20 5 L23 12 L30 10 L25 17 L32 20 L25 23 L30 30 L23 28 L20 35 L17 28 L10 30 L15 23 L8 20 L15 17 L10 10 L17 12 Z" fill="#4e8b2e" opacity="0.85"/>
            </svg>
          </div>
          <div className="hidden sm:flex flex-col leading-none ml-1">
            <span className="text-xs font-bold text-dmc-black tracking-wide">MIX</span>
            <span className="text-[10px] text-gray-500 tracking-widest">FINISHING SYSTEMS</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-dmc-green ${
                scrolled ? "text-dmc-black" : "text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary text-sm px-5 py-2"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-dmc-black" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-dmc-black" : "bg-white"}`} />
          <span className={`block w-4 h-0.5 transition-all ${scrolled ? "bg-dmc-black" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-dmc-black font-medium hover:text-dmc-green transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm text-center mt-2">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
