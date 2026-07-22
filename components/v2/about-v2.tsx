"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiHeart3Line, RiShieldUserLine, RiScalesLine, RiMedalLine, RiScissors2Line } from "@remixicon/react";

const BOOKING_URL = "https://flowcal-five.vercel.app/book/user_2uwgJYugSGeo9GTWdBivMRaTRp1";

const values = [
  {
    icon: RiHeart3Line,
    title: "Passione Autentica",
    description:
      "Ogni gesto nasce dall’amore per l’hairstyling. Ci appassiona far emergere la bellezza di chi si affida a noi.",
  },
  {
    icon: RiShieldUserLine,
    title: "Dedizione Totale",
    description:
      "Ogni cliente è unico: lo accogliamo con attenzione e cura, offrendo un’esperienza personalizzata e impeccabile.",
  },
  {
    icon: RiScalesLine,
    title: "Cura e Amore",
    description:
      "Ci sta a cuore farvi sentire bene, dentro e fuori. Ogni servizio è un gesto di attenzione e rispetto verso di voi.",
  },
  {
    icon: RiMedalLine,
    title: "Stile con Identità",
    description:
      "Esaltiamo la tua unicità con uno stile che ti rappresenta davvero. Perché sentirsi sé stessi è la vera bellezza.",
  },
];

export function AboutV2() {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-white relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#F7D6E6]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#C8B6FF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Split Layout: Philosophy & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="font-melodrama font-semibold text-4xl sm:text-5xl text-[#222222] leading-tight">
              Esperienza, Passione e Perfezione in <span className="text-[#6E4FF6]">Ogni Dettaglio</span>.
            </h2>

            <p className="font-satoshi text-base text-[#222222]/80 leading-relaxed">
              Il nostro lavoro è dedicato a esaltare e valorizzare ogni persona con un taglio unico e su misura, secondo lo stile e le forme del viso. Non ci limitiamo a eseguire un taglio o una piega: mettiamo la nostra passione in ogni cliente.
            </p>

            <p className="font-satoshi text-base text-[#222222]/80 leading-relaxed">
              Lo facciamo con amore per questo mestiere, forti di anni di esperienza maturata sul campo e sempre alla costante ricerca della perfezione sartoriale.
            </p>

            <div className="pt-4">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#222222] text-white font-satoshi font-medium text-sm hover:bg-[#6E4FF6] transition-colors shadow-md"
              >
                <span>Prenota una Consulenza</span>
                <span className="text-[#F7D6E6]">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Editorial Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#6E4FF6]/10">
              <Image
                src="/image2.jpeg"
                alt="Micelli & Vignati Salon Story"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white font-satoshi">
                <p className="text-xs uppercase tracking-widest text-[#F7D6E6] font-semibold mb-1">
                  Atelier Legnano
                </p>
                <p className="font-melodrama text-2xl font-medium">
                  Dove la bellezza incontra l'armonia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Values Feature Grid with Professional Seamless Icons */}
        <div id="perche-noi" className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h3 className="font-melodrama text-3xl sm:text-4xl font-semibold text-[#222222]">
              I Nostri <span className="text-[#6E4FF6]">Valori Fondamentali</span>
            </h3>
            <p className="font-satoshi text-sm sm:text-base text-[#222222]/70">
              I principi guida che ispirano il nostro lavoro quotidiano e l'accoglienza di ogni nostro cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-[#FCFAFD] rounded-3xl p-7 border border-[#6E4FF6]/10 hover:border-[#6E4FF6]/30 hover:shadow-xl hover:shadow-[#6E4FF6]/5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Clean professional Remix Icon directly inline without basic square background box */}
                    <div className="mb-4 text-[#6E4FF6] group-hover:scale-110 group-hover:text-[#5b3de3] transition-all duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="font-melodrama text-xl font-semibold text-[#222222] mb-2.5 group-hover:text-[#6E4FF6] transition-colors">
                      {val.title}
                    </h4>
                    <p className="font-satoshi text-xs sm:text-sm text-[#222222]/75 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
