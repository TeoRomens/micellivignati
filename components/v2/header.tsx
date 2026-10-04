"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiArrowRightSLine, RiMenuLine, RiCloseLine, RiCalendarCheckLine } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";
import { BOOKING_URL } from "@/lib/constants";

const navItems = [
  { label: "Chi Siamo", href: "#about" },
  { label: "Servizi", href: "#servizi" },
  { label: "Perché Noi", href: "#perche-noi" },
  { label: "Galleria", href: "#galleria" },
  { label: "Team", href: "#team" },
  { label: "Faq", href: "#faq" },
  { label: "Contatti", href: "#contatti" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      {/* Single Unified Header Container with Backdrop Blur */}
      <div
        className={`max-w-7xl mx-auto px-5 py-3 rounded-full flex items-center justify-between transition-all duration-300 border ${
          isScrolled
            ? "bg-[#FCFAFD]/85 backdrop-blur-xl border-[#6E4FF6]/20 shadow-xl shadow-[#6E4FF6]/10"
            : "bg-white/75 backdrop-blur-lg border-white/60 shadow-md shadow-[#6E4FF6]/5"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-full bg-linear-to-tr from-violet-primary to-blush-pink flex items-center justify-center text-white font-melodrama font-bold text-base shadow-sm group-hover:scale-105 transition-transform duration-300">
            MV
          </div>
          <div className="flex flex-col">
            <span className="font-melodrama text-base sm:text-lg font-semibold text-dark-text tracking-wide group-hover:text-[#6E4FF6] transition-colors leading-tight">
              Micelli & Vignati
            </span>
            <span className="text-[9px] tracking-widest uppercase text-violet-primary font-semibold font-satoshi">
              Hairstyling
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links directly in the same header bar */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs xl:text-sm font-satoshi font-medium text-dark-text/80 hover:text-violet-primary px-3 py-1.5 rounded-full hover:bg-[#F7D6E6]/40 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Booking CTA Button */}
        <div className="flex items-center gap-2">
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-violet-primary text-white text-xs sm:text-sm font-satoshi font-medium shadow-md shadow-[#6E4FF6]/25 hover:shadow-lg hover:shadow-[#6E4FF6]/40 hover:bg-[#5b3de3] active:scale-95 transition-all duration-200"
          >
            <span>Prenota</span>
            <RiArrowRightSLine className="w-4 h-4" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/80 border border-[#6E4FF6]/20 text-dark-text hover:bg-[#F7D6E6]/30 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <RiCloseLine className="w-5 h-5" /> : <RiMenuLine className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden max-w-7xl mx-auto mt-3 bg-[#FCFAFD]/95 backdrop-blur-xl border border-[#6E4FF6]/20 rounded-3xl p-6 shadow-2xl shadow-[#6E4FF6]/15 flex flex-col gap-2 z-50"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-satoshi font-medium text-dark-text hover:text-[#6E4FF6] p-2.5 rounded-xl hover:bg-[#F7D6E6]/40 transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <RiArrowRightSLine className="w-4 h-4 text-[#6E4FF6]/60" />
              </a>
            ))}
            <div className="pt-2 border-t border-[#6E4FF6]/10 mt-1">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-linear-to-r from-violet-primary to-lavender-soft text-white font-satoshi font-medium text-sm shadow-md"
              >
                <RiCalendarCheckLine className="w-4 h-4" />
                Prenota un Appuntamento
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
