"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Come posso prenotare un appuntamento?",
    answer:
      "Puoi prenotare in totale autonomia in qualsiasi momento cliccando sul pulsante 'Prenota' in alto a destra o su uno dei pulsanti di prenotazione nel sito. In alternativa, puoi chiamare il salone al numero 0331 544221 durante gli orari di apertura.",
  },
  {
    question: "Quali prodotti utilizzate nei trattamenti?",
    answer:
      "Utilizziamo esclusivamente prodotti e trattamenti di alta gamma professionale, privi di sostanze aggressive, per tutelare la fibra del capello e garantire idratazione, morbidezza e lucentezza sature di riflessi.",
  },
  {
    question: "Come funziona la consulenza prima del taglio o colore?",
    answer:
      "Ogni incontro comincia con una breve diagnosi visiva e un colloquio conoscitivo in cui ascoltiamo i tuoi desideri e valutiamo la morfologia del tuo viso e il tuo incarnato per proporti la soluzione più armoniosa.",
  },
  {
    question: "Quali sono i vostri orari di apertura?",
    answer:
      "Il salone è aperto dal Martedì al Sabato dalle 09:00 alle 19:00 con orario continuato. Il Lunedì e la Domenica siamo chiusi.",
  },
  {
    question: "Cosa devo fare se devo spostare o disdire una prenotazione?",
    answer:
      "Comprendiamo che possano sorgere imprevisti. Ti chiediamo la cortesia di avvisarci telefonicamente con almeno 24 ore di anticipo per permetterci di riorganizzare gli appuntamenti.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-8 bg-white relative">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="font-melodrama font-semibold text-4xl sm:text-5xl text-dark-text">
            Hai delle <span className="text-[#6E4FF6]">Domande?</span>
          </h2>
          <p className="font-satoshi text-base text-dark-text/75">
            Tutto quello che c'è da sapere prima di visitarci in salone.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-[#FCFAFD] rounded-2xl border border-[#6E4FF6]/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-satoshi font-semibold text-base sm:text-lg text-dark-text hover:text-[#6E4FF6] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#6E4FF6] shrink-0" />
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#6E4FF6]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 font-satoshi text-sm text-dark-text/80 leading-relaxed pl-14">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
