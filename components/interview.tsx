"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiYoutubeFill,
  RiTvLine,
  RiMicLine,
  RiExternalLinkLine,
  RiPlayFill,
  RiSparklingLine,
  RiCloseLine,
  RiCalendarCheckLine,
} from "@remixicon/react";
import { BOOKING_URL } from "@/lib/constants";

const YOUTUBE_URL = "https://www.youtube.com/watch?v=oZrtzQaY9N0";
const YOUTUBE_EMBED_URL = "https://www.youtube-nocookie.com/embed/oZrtzQaY9N0?autoplay=1";

export function Interview() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVideoModalOpen(false);
      }
    };
    if (isVideoModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isVideoModalOpen]);

  return (
    <section id="intervista" className="py-24 px-4 sm:px-8 bg-white relative overflow-hidden">
      {/* Soft background accents matching salon aesthetic */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blush-pink/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-lavender-soft/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-melodrama font-semibold text-4xl sm:text-5xl text-dark-text leading-tight"
          >
            La Nostra Voce su <span className="text-violet-primary">Story Time</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-satoshi text-base sm:text-lg text-dark-text/75 leading-relaxed"
          >
            Barbara Vignati e Simonetta Micelli ospiti ai microfoni di Canale Italia: una chiacchierata
            intima e coinvolgente sulla passione, l&apos;esperienza e la dedizione che animano il nostro salone a Legnano.
          </motion.p>
        </div>

        {/* Featured Video & Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Video Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative group cursor-pointer overflow-hidden rounded-3xl bg-white border border-[#6E4FF6]/15 shadow-xl hover:shadow-2xl hover:shadow-[#6E4FF6]/20 transition-all duration-500"
              role="button"
              tabIndex={0}
              aria-label="Riproduci intervista video di Micelli e Vignati su Story Time"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsVideoModalOpen(true);
                }
              }}
            >
              {/* Aspect Ratio 16:9 Container matching video format */}
              <div className="relative w-full aspect-video">
                <Image
                  src="/thumb-intervista.jpg"
                  alt="Intervista Barbara Vignati e Simonetta Micelli su Story Time Canale Italia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={false}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Refined gradient overlay matching salon photos */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/80 via-[#222222]/25 to-transparent group-hover:from-violet-primary/60 group-hover:via-black/20 transition-all duration-500" />

                {/* Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-violet-primary/30 animate-ping pointer-events-none" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-md shadow-2xl flex items-center justify-center text-violet-primary group-hover:scale-110 group-hover:bg-violet-primary group-hover:text-white transition-all duration-300">
                      <RiPlayFill className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Top Badge: YouTube */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 backdrop-blur-md text-white text-xs font-semibold shadow-md">
                    <RiYoutubeFill className="w-4 h-4" />
                    <span>YouTube</span>
                  </span>
                </div>

                {/* Bottom Overlay Details */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 flex items-end justify-between text-white font-satoshi">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-[#F7D6E6] font-semibold">
                      Canale Italia • Story Time
                    </p>
                    <p className="font-melodrama text-lg sm:text-2xl font-medium drop-shadow-sm">
                      Barbara Vignati & Simonetta Micelli
                    </p>
                    <p className="text-xs sm:text-sm text-white/85">
                      Acconciature Micelli & Vignati – Legnano
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Context & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quote callout */}
            <div className="relative pl-5 border-l-2 border-violet-primary/40 italic font-satoshi text-dark-text/85 text-sm sm:text-base leading-relaxed bg-[#FCFAFD] p-4 rounded-r-2xl border-y border-r border-[#6E4FF6]/10">
              &ldquo;Il nostro mestiere non è semplicemente tagliare o acconciare, ma comprendere e valorizzare
              la bellezza unica di chi siede sulla nostra poltrona.&rdquo;
            </div>

            {/* Narrative text */}
            <p className="font-satoshi text-sm sm:text-base text-dark-text/80 leading-relaxed">
              Durante l&apos;intervista per la rubrica <strong>Story Time</strong>, abbiamo avuto il piacere di
              raccontare il dietro le quinte del nostro lavoro quotidiano, i segreti delle tecniche sartoriali e
              il profondo legame che unisce il nostro team alla clientela di Legnano e dintorni.
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-violet-primary text-white font-satoshi font-semibold text-sm shadow-md shadow-[#6E4FF6]/25 hover:bg-[#5b3de3] hover:shadow-lg hover:shadow-[#6E4FF6]/35 active:scale-95 transition-all duration-200 group"
              >
                <RiYoutubeFill className="w-5 h-5 text-[#F7D6E6] group-hover:text-white transition-colors" />
                <span>Guarda su YouTube</span>
                <RiExternalLinkLine className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#FCFAFD] text-dark-text border border-violet-primary/20 font-satoshi font-medium text-sm hover:border-violet-primary hover:bg-white hover:text-violet-primary transition-all duration-200"
              >
                <RiPlayFill className="w-4 h-4 text-violet-primary" />
                <span>Riproduci nel Sito</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Video Modal matching Gallery lightbox styling */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsVideoModalOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Chiudi video"
            >
              <RiCloseLine className="w-6 h-6" />
            </button>

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl space-y-4"
            >
              {/* Responsive 16:9 iframe container */}
              <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <iframe
                  src={YOUTUBE_EMBED_URL}
                  title="Intervista Micelli & Vignati - Story Time Canale Italia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Modal footer info */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/80 font-satoshi text-xs sm:text-sm px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-medium text-white">
                    Story Time • Canale Italia | Intervista Barbara Vignati & Simonetta Micelli
                  </span>
                </div>

                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-lavender-soft hover:text-white underline underline-offset-4 transition-colors"
                >
                  <span>Apri direttamente su YouTube</span>
                  <RiExternalLinkLine className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
