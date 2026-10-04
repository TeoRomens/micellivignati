"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FlyerModalProps {
  /** Percorso dell'immagine del flyer (es. '/flyer.jpg' in public) */
  imageSrc?: string;
  /** Testo alternativo per l'immagine */
  alt?: string;
  /** Ritardo di comparsa in millisecondi all'atterraggio sulla pagina */
  delayMs?: number;
  /** Mostra una sola volta per sessione (salvato in sessionStorage) */
  showOncePerSession?: boolean;
}

export function FlyerModal({
  imageSrc = "/flyer.jpg",
  alt = "Volantino Micelli & Vignati",
  delayMs = 500,
  showOncePerSession = false,
}: FlyerModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (showOncePerSession) {
      try {
        if (sessionStorage.getItem("mv_flyer_dismissed") === "true") {
          return;
        }
      } catch {
        // Ignora
      }
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs, showOncePerSession]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (showOncePerSession) {
      try {
        sessionStorage.setItem("mv_flyer_dismissed", "true");
      } catch {
        // Ignora
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop con sfocatura e oscuramento */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="relative z-10 inline-block max-h-[85vh] max-w-[90vw]"
          >
            {/* Solo la X di chiusura */}
            <button
              onClick={handleClose}
              aria-label="Chiudi volantino"
              className="cursor-pointer absolute top-2.5 right-2.5 sm:-top-3 sm:-right-3 z-30 flex size-8 items-center justify-center rounded-full bg-black/80 text-white hover:bg-black hover:scale-105 shadow-xl border border-white/20 backdrop-blur-md transition-all focus:outline-none"
            >
              <X className="size-5" />
            </button>

            {/* Solo immagine */}
            <img
              src={imageSrc}
              alt={alt}
              className="block max-h-[85vh] max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl w-auto h-auto object-contain rounded-2xl shadow-2xl select-none"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
