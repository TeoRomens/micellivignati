"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiScissors2Line,
  RiPaletteLine,
  RiMagicLine,
  RiScalesLine,
  RiWaterFlashLine,
  RiTimeLine,
  RiCalendarCheckLine,
} from "@remixicon/react";

const BOOKING_URL = "https://flowcal-five.vercel.app/book/user_2uwgJYugSGeo9GTWdBivMRaTRp1";

interface ServiceItem {
  id: string;
  name: string;
  category: "cut" | "color" | "treatment";
  duration: number; // in mins
  description: string;
  icon: React.ElementType;
}

const servicesData: ServiceItem[] = [
  {
    id: "1",
    name: "Taglio Uomo",
    category: "cut",
    duration: 60,
    description: "Taglio su misura per valorizzare il tuo stile unico e la forma del viso.",
    icon: RiScissors2Line,
  },
  {
    id: "2",
    name: "Taglio e Piega Donna",
    category: "cut",
    duration: 60,
    description: "Un taglio personalizzato e una piega impeccabile per esaltare la tua naturale bellezza.",
    icon: RiScissors2Line,
  },
  {
    id: "3",
    name: "Taglio e Piega Lunga",
    category: "cut",
    duration: 120,
    description: "Taglio e styling accuratamente studiati per donare movimento e volume ai capelli lunghi.",
    icon: RiScissors2Line,
  },
  {
    id: "4",
    name: "Colore",
    category: "color",
    duration: 120,
    description: "Colore sartoriale su misura per illuminare la tua chioma e valorizzare l'incarnato.",
    icon: RiPaletteLine,
  },
  {
    id: "5",
    name: "Permanente",
    category: "treatment",
    duration: 180,
    description: "Ricci definiti, elastici e naturali per un look ricco di volume e personalità.",
    icon: RiWaterFlashLine,
  },
  {
    id: "6",
    name: "Colpi di Sole",
    category: "color",
    duration: 240,
    description: "Schiariture delicate per un effetto tridimensionale luminoso e naturale.",
    icon: RiScalesLine,
  },
  {
    id: "7",
    name: "Stiratura Classica",
    category: "treatment",
    duration: 120,
    description: "Liscio impeccabile, morbido e duraturo senza stressare la fibra capillare.",
    icon: RiMagicLine,
  },
  {
    id: "8",
    name: "Lissage",
    category: "treatment",
    duration: 120,
    description: "Trattamento lisciante avanzato per capelli straordinariamente setosi e disciplinati.",
    icon: RiScalesLine,
  },
  {
    id: "9",
    name: "Piega",
    category: "cut",
    duration: 60,
    description: "Piega su misura per un look sempre impeccabile, brillante e definito.",
    icon: RiScissors2Line,
  },
  {
    id: "10",
    name: "Piega Lunga",
    category: "cut",
    duration: 90,
    description: "Styling professionale per capelli lunghi con volume setoso e movimento morbido.",
    icon: RiScissors2Line,
  },
  {
    id: "11",
    name: "Toner",
    category: "color",
    duration: 60,
    description: "Tonalizzazione personalizzata per eliminare toni indesiderati e riattivare i riflessi.",
    icon: RiPaletteLine,
  },
];

const categories = [
  { id: "all", label: "Tutti i Servizi" },
  { id: "cut", label: "Taglio & Piega" },
  { id: "color", label: "Colore & Schiariture" },
  { id: "treatment", label: "Trattamenti & Lissage" },
];

export function ServicesV2() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section id="servizi" className="py-24 px-4 sm:px-8 bg-[#FCFAFD] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">

          <h2 className="font-melodrama font-semibold text-4xl sm:text-5xl text-[#222222]">
            Esperienze di <span className="text-[#6E4FF6]">Bellezza Su Misura</span>
          </h2>

          <p className="font-satoshi text-base text-[#222222]/75 max-w-xl mx-auto">
            Trasforma il tuo look con uno stile elegante e personalizzato. Scopri i nostri trattamenti formulati per esaltare il tuo benessere.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-satoshi font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#6E4FF6] text-white shadow-md shadow-[#6E4FF6]/25 scale-105"
                    : "bg-white text-[#222222]/80 border border-[#6E4FF6]/15 hover:bg-[#F7D6E6]/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={service.id}
                  className="bg-white rounded-3xl p-7 border border-[#6E4FF6]/10 hover:border-[#6E4FF6]/30 shadow-sm hover:shadow-xl hover:shadow-[#6E4FF6]/10 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Professional Remix Icon directly inline */}
                    <div className="text-[#6E4FF6] group-hover:scale-110 group-hover:text-[#5b3de3] transition-all duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Service Title */}
                    <h3 className="font-melodrama text-2xl font-semibold text-[#222222] group-hover:text-[#6E4FF6] transition-colors">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="font-satoshi text-xs sm:text-sm text-[#222222]/75 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom row: Duration & Booking CTA (Price removed as requested) */}
                  <div className="pt-6 mt-6 border-t border-[#6E4FF6]/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-satoshi text-[#222222]/60">
                      <RiTimeLine className="w-4 h-4 text-[#6E4FF6]" />
                      <span>{service.duration} min</span>
                    </div>

                    <Link
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FCFAFD] border border-[#6E4FF6]/20 text-[#6E4FF6] text-xs font-satoshi font-semibold hover:bg-[#6E4FF6] hover:text-white transition-all duration-200"
                    >
                      <RiCalendarCheckLine className="w-3.5 h-3.5" />
                      <span>Prenota Ora</span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
