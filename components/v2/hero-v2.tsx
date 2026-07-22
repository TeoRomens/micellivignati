"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  RiScalesLine,
  RiCalendarCheckLine,
  RiArrowRightDownLine,
  RiScissors2Line,
} from "@remixicon/react";

const BOOKING_URL = "https://flowcal-five.vercel.app/book/user_2uwgJYugSGeo9GTWdBivMRaTRp1";

export function HeroV2() {
  return (
    <section className="relative min-h-[88vh] pt-32 pb-16 px-4 sm:px-8 flex items-center justify-center overflow-hidden bg-[#FCFAFD]">
      {/* Background Soft Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#C8B6FF]/30 via-[#F7D6E6]/40 to-[#6E4FF6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F7D6E6]/40 rounded-full blur-3xl pointer-events-none" />
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
          <h1 className="font-melodrama font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-[#222222]">
            L'Arte di Valorizzare la tua <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E4FF6] via-[#9d4ff6] to-[#C8B6FF]">
              Naturale Bellezza
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-satoshi text-[#222222]/75 max-w-xl leading-relaxed">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/90 border border-[#6E4FF6]/20 text-[#222222] font-satoshi font-medium text-sm hover:bg-[#F7D6E6]/30 hover:border-[#6E4FF6]/40 transition-all duration-300"
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
          {/* Main Visual Composition */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#6E4FF6]/15 border-4 border-white">
            <Image
              src="/image1.jpeg"
              alt="Micelli & Vignati Salon Experience"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#6E4FF6]/30 via-transparent to-transparent pointer-events-none" />

            {/* Floating Glassmorphism Badge 1 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute top-6 left-6 bg-white/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/60 shadow-lg flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#F7D6E6] flex items-center justify-center text-[#6E4FF6]">
                <RiScissors2Line className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#222222]">Stile Su Misura</p>
                <p className="text-[10px] text-[#222222]/70 font-satoshi">Consulenza personalizzata</p>
              </div>
            </motion.div>

            {/* Floating Glassmorphism Badge 2 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-6 right-6  backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px]"
            >
              <div className="flex -space-x-2">
                <Image
                  src="/barbara.jpeg"
                  alt="Barbara"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/simonetta.jpeg"
                  alt="Simonetta"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
