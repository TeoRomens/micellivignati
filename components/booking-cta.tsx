"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Sparkles, ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

export function BookingCta() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-off-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] bg-linear-to-r from-violet-primary via-[#7d5df8] to-[#9a7bf9] p-8 sm:p-14 lg:p-20 text-white overflow-hidden shadow-2xl shadow-[#6E4FF6]/30 flex flex-col items-center text-center space-y-8"
        >
          {/* Subtle translucent pattern circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blush-pink/20 blur-2xl pointer-events-none" />

          {/* Large Heading */}
          <h2 className="font-melodrama font-bold text-2xl sm:text-3xl lg:text-4xl max-w-3xl leading-tight">
            Pronta a Rinnovare il Tuo Stile con un Tocco Elegante?
          </h2>

          {/* Persuasive Subtext */}
          <p className="font-satoshi text-base sm:text-lg text-white/90 max-w-xl leading-relaxed">
            Seleziona la data e l'orario che preferisci in pochi click. Ti aspettiamo nel nostro atelier a Legnano per prenderci cura di te.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white text-violet-primary font-satoshi font-bold text-base shadow-xl hover:bg-[#FCFAFD] hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <span>Prenota il Tuo Appuntamento</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
