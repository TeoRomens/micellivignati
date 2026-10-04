"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scissors, Calendar, Sparkles } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

const teamMembers = [
  {
    name: "Barbara Vignati",
    image: "/barbara.jpeg",
    bio: "Esperta in colorazioni tridimensionali, colpi di sole e trattamenti innovativi. Barbara trasforma ogni chioma donandole luce, riflessi vibranti e vitalità.",
  },
  {
    name: "Simonetta Micelli",
    image: "/simonetta.jpeg",
    bio: "Specializzata in tagli sartoriali che valorizzano i tratti del viso e la naturale tessitura del capello. Anni di esperienza e maestria tecnica al tuo servizio.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 px-4 sm:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#F7D6E6]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-melodrama font-semibold text-4xl sm:text-5xl text-dark-text">
            Il Nostro <span className="text-violet-primary">Team d'Eccellenza</span>
          </h2>
          <p className="font-satoshi text-base text-dark-text/75">
            Mettiamo la nostra passione e l'esperienza di una vita per regalarti il look dei tuoi sogni.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-[#FCFAFD] rounded-3xl p-8 border border-[#6E4FF6]/15 hover:border-[#6E4FF6]/40 shadow-sm hover:shadow-2xl hover:shadow-[#6E4FF6]/10 transition-all duration-300 flex flex-col items-center text-center space-y-6 group"
            >
              {/* Profile Image with subtle ring */}
              <div className="relative w-40 h-40 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-[#6E4FF6] to-[#F7D6E6] shadow-xl group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <div className="space-y-1">
                <h3 className="font-melodrama text-3xl font-semibold text-dark-text group-hover:text-violet-primary transition-colors">
                  {member.name}
                </h3>
              </div>

              {/* Bio */}
              <p className="font-satoshi text-sm text-dark-text/80 leading-relaxed max-w-sm">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
