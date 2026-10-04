"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";

const reviews = [
  {
    name: "Ivan",
    role: "Cliente Abituale",
    review:
      "Si distinguono soprattutto per la disponibilità, la professionalità, l'esperienza e la bravura Simona e Barbara. Offrono un servizio completo in tutti i settori dando consigli e grande competenza!",
    stars: 5,
  },
  {
    name: "Federica",
    role: "Cliente",
    review:
      "Ambiente raccolto e pulito. Le titolari del negozio sono davvero competenti e gentilissime. Ve lo consiglio vivamente, provate per credere 👌",
    stars: 5,
  },
  {
    name: "Patrizia",
    role: "Cliente",
    review:
      "Barbara bravissima nel suo lavoro, poi è cordiale, simpatica e sempre pronta a rispondere a ogni esigenza e domanda.",
    stars: 5,
  },
  {
    name: "Alessandro",
    role: "Cliente",
    review:
      "Precisione, cura e grande ascolto. Hanno saputo valorizzare al meglio il mio stile personale. Una vera garanzia a Legnano!",
    stars: 5,
  },
  {
    name: "Elena",
    role: "Cliente",
    review:
      "Dal colore al taglio, tutto è stato impeccabile. Si percepisce fin dal primo momento la passione autentica che mettono in quello che fanno.",
    stars: 5,
  },
  {
    name: "Marco",
    role: "Cliente",
    review:
      "Ambiente accogliente e professioniste vere. È diventato senza dubbi il mio salone di fiducia.",
    stars: 5,
  },
];

export function TestimonialsV2() {
  return (
    <section id="recensioni" className="py-24 px-4 sm:px-8 bg-white relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C8B6FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F7D6E6]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-melodrama font-semibold text-4xl sm:text-5xl text-dark-text">
            Cosa Dicono di <span className="text-[#6E4FF6]">Noi</span>
          </h2>
          <p className="font-satoshi text-base text-dark-text/75">
            La soddisfazione di chi si affida ogni giorno alla nostra cura è il nostro orgoglio più grande.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-[#FCFAFD] rounded-3xl p-8 border border-[#6E4FF6]/10 hover:border-[#6E4FF6]/30 hover:shadow-xl hover:shadow-[#6E4FF6]/10 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#C8B6FF]/30 group-hover:text-[#6E4FF6]/20 transition-colors pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-satoshi text-sm text-dark-text/80 leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#6E4FF6]/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6E4FF6] to-[#F7D6E6] text-white flex items-center justify-center font-bold text-sm">
                  {rev.name[0]}
                </div>
                <div>
                  <p className="font-melodrama font-semibold text-base text-dark-text">
                    {rev.name}
                  </p>
                  <p className="font-satoshi text-xs text-dark-text/60">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
