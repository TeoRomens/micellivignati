"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/image1.jpeg", alt: "Micelli & Vignati Hair Styling 1", aspect: "aspect-[4/5]" },
  { src: "/image2.jpeg", alt: "Micelli & Vignati Hair Styling 2", aspect: "aspect-square" },
  { src: "/image3.jpeg", alt: "Micelli & Vignati Hair Styling 3", aspect: "aspect-[4/5]" },
  { src: "/image4.jpeg", alt: "Micelli & Vignati Hair Styling 4", aspect: "aspect-square" },
  { src: "/image5.jpeg", alt: "Micelli & Vignati Hair Styling 5", aspect: "aspect-[4/5]" },
  { src: "/image6.jpeg", alt: "Micelli & Vignati Hair Styling 6", aspect: "aspect-square" },
  { src: "/image7.jpeg", alt: "Micelli & Vignati Hair Styling 7", aspect: "aspect-square" },
  { src: "/image8.jpeg", alt: "Micelli & Vignati Hair Styling 8", aspect: "aspect-[4/5]" },
  { src: "/image9.jpeg", alt: "Micelli & Vignati Hair Styling 9", aspect: "aspect-square" },
];

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section id="galleria" className="py-24 px-4 sm:px-8 bg-off-white relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-melodrama font-semibold text-4xl sm:text-5xl text-dark-text">
            Galleria delle <span className="text-violet-primary">Creazioni</span>
          </h2>
          <p className="font-satoshi text-base text-dark-text/75">
            Sfoglia alcuni dei look, tagli e sfumature realizzati nel nostro salone. Clicca su un'immagine per ingrandirla.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              onClick={() => setSelectedImageIndex(idx)}
              className="relative group cursor-pointer overflow-hidden rounded-3xl bg-white border border-[#6E4FF6]/10 shadow-sm hover:shadow-2xl hover:shadow-[#6E4FF6]/15 transition-all duration-500"
            >
              <div className={`relative w-full ${img.aspect}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6E4FF6]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white flex items-center justify-between w-full">
                    <span className="font-melodrama font-medium text-lg">Visualizza</span>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Chiudi"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Precedente"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Successivo"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            <div
              className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/5] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
