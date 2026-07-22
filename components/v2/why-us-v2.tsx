"use client";

import React from "react";
import { motion } from "framer-motion";
import { RiUserStarLine, RiScalesLine, RiHeartPulseLine, RiCupLine, RiShieldCheckLine } from "@remixicon/react";

const features = [
  {
    icon: RiUserStarLine,
    title: "Stylist Professionisti",
    description:
      "Barbara e Simonetta vantano anni di formazione ed esperienza continua per garantirti tecniche all'avanguardia.",
  },
  {
    icon: RiScalesLine,
    title: "Prodotti d'Eccellenza",
    description:
      "Selezioniamo solo trattamenti e prodotti di prima qualità per preservare la salute naturale e la lucentezza dei tuoi capelli.",
  },
  {
    icon: RiHeartPulseLine,
    title: "Consulenza Personalizzata",
    description:
      "Ogni appuntamento inizia con l'ascolto dei tuoi desideri per studiare un taglio e un colore in perfetta armonia col tuo viso.",
  },
  {
    icon: RiCupLine,
    title: "Ambiente Rilassante",
    description:
      "Un salone intimo, pulito e accogliente dove poterti concedere un momento di puro relax e rigenerazione.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Garanzia di Soddisfazione",
    description:
      "Amiamo il nostro lavoro e curiamo ogni singolo dettaglio per assicurarti un risultato che superi ogni tua aspettativa.",
  },
];

export function WhyUsV2() {
  return (
    <section className="py-24 px-4 sm:px-8 bg-white relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#F7D6E6]/30 via-[#C8B6FF]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-melodrama font-semibold text-4xl sm:text-5xl text-[#222222]">
            L'Eccellenza che Meriti per la <span className="text-[#6E4FF6]">Tua Bellezza</span>
          </h2>
          <p className="font-satoshi text-base text-[#222222]/75">
            Nel nostro atelier ogni dettaglio è pensato per regalarti un'esperienza sartoriale e indimenticabile.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#FCFAFD]/80 backdrop-blur-sm p-8 rounded-3xl border border-[#6E4FF6]/10 hover:border-[#6E4FF6]/30 hover:shadow-2xl hover:shadow-[#6E4FF6]/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Professional Remix Icon directly inline without basic square background box */}
                  <div className="mb-5 text-[#6E4FF6] group-hover:scale-110 group-hover:text-[#5b3de3] transition-all duration-300">
                    <IconComp className="w-8 h-8" />
                  </div>
                  <h3 className="font-melodrama text-2xl font-semibold text-[#222222] mb-3 group-hover:text-[#6E4FF6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-satoshi text-sm text-[#222222]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
