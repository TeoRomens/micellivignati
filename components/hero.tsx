"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  RiArrowRightDownLine,
} from "@remixicon/react";
import { BOOKING_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] pt-32 pb-16 px-4 sm:px-8 flex items-center justify-center overflow-hidden bg-[#FCFAFD]">
      {/* Background Soft Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#C8B6FF]/30 via-[#F7D6E6]/40 to-[#6E4FF6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blush-pink/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C8B6FF]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start space-y-6"
        >
          {/* Main Title */}
          <h1 className="font-melodrama font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-dark-text">
            L'Arte di Valorizzare la tua <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E4FF6] via-[#9d4ff6] to-[#C8B6FF]">
              Naturale Bellezza
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-satoshi text-dark-text/75 max-w-xl leading-relaxed">
            La nostra passione è rendervi unici. Ogni taglio e trattamento è un’opera pensata su misura per esaltare i lineamenti del tuo viso e riflettere la tua autentica identità.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#6E4FF6] to-[#8d69f8] text-white font-satoshi font-semibold text-sm shadow-xl shadow-[#6E4FF6]/25 hover:shadow-2xl hover:shadow-[#6E4FF6]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
            >
              <span>Prenota un Appuntamento</span>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform text-xs">
                →
              </span>
            </Link>

            <a
              href="#servizi"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/90 border border-[#6E4FF6]/20 text-dark-text font-satoshi font-medium text-sm hover:bg-[#F7D6E6]/30 hover:border-[#6E4FF6]/40 transition-all duration-300"
            >
              <span>Scopri i Servizi</span>
              <RiArrowRightDownLine className="w-4 h-4 text-[#6E4FF6]" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Hero Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >

        </motion.div>
      </div>
    </section>
  );
}
