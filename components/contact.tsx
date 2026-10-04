"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contatti" className="py-24 px-4 sm:px-8 bg-[#FCFAFD] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-melodrama font-semibold text-4xl sm:text-5xl text-dark-text">
            Vieni a Trovarci in <span className="text-[#6E4FF6]">Salone</span>
          </h2>
          <p className="font-satoshi text-base text-dark-text/75">
            Siamo a tua completa disposizione per informazioni, prenotazioni e consulenze personalizzate.
          </p>
        </div>

        {/* Contact Info Cards & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Information Cards */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#6E4FF6]/10 shadow-sm flex items-start gap-4 hover:border-[#6E4FF6]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#6E4FF6]/10 text-[#6E4FF6] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-melodrama font-semibold text-xl text-dark-text">Indirizzo</h4>
                <p className="font-satoshi text-sm text-dark-text/80 mt-1 leading-relaxed">
                  Via Della Vittoria 27<br />
                  20025 Legnano, MI (Italia)
                </p>
              </div>
            </div>

            {/* Phone & Email Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#6E4FF6]/10 shadow-sm flex items-start gap-4 hover:border-[#6E4FF6]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#6E4FF6]/10 text-[#6E4FF6] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-melodrama font-semibold text-xl text-dark-text">Contatti Diretti</h4>
                <p className="font-satoshi text-sm text-dark-text/80 mt-1 leading-relaxed">
                  <strong>Telefono:</strong> 0331 544221<br />
                  <strong>Email:</strong> micelli.vignati@hotmail.it
                </p>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#6E4FF6]/10 shadow-sm flex items-start gap-4 hover:border-[#6E4FF6]/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#6E4FF6]/10 text-[#6E4FF6] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h4 className="font-melodrama font-semibold text-xl text-dark-text mb-2">Orari di Apertura</h4>
                <div className="grid grid-cols-2 gap-2 font-satoshi text-xs sm:text-sm text-dark-text/80">
                  <div>
                    <p className="font-medium text-dark-text">Lunedì:</p>
                    <p className="text-dark-text/60">Chiuso</p>
                  </div>
                  <div>
                    <p className="font-medium text-dark-text">Mar – Sab:</p>
                    <p className="text-[#6E4FF6] font-semibold">09:00 – 19:00</p>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-[#6E4FF6]/10 mt-1">
                    <p className="font-medium text-dark-text">Domenica: <span className="text-dark-text/60 font-normal">Chiuso</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map Card */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-violet-primary/15 shadow-xl min-h-[350px] group flex flex-col justify-end">
            <Image
              src="/map.png"
              alt="Mappa Micelli & Vignati Legnano"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 text-white z-10 space-y-3">
              <h3 className="font-melodrama font-semibold text-2xl">
                Micelli & Vignati a Legnano
              </h3>
              <p className="font-satoshi text-xs sm:text-sm text-white/80 max-w-sm">
                Ci trovi in Via Della Vittoria 27. Clicca sotto per indicazioni stradali trasparenti.
              </p>
              <div className="pt-2">
                <Link
                  href="https://www.google.com/maps/place/Micelli+Simonetta+%26+Vignati+Barbara+S.n.c./@45.5983375,8.9120835,17z/data=!3m1!4b1!4m6!3m5!1s0x47868da67bb7b1a3:0x197b2106be9ab4b7!8m2!3d45.5983375!4d8.9146584!16s%2Fg%2F1tcz75tj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-dark-text font-satoshi font-semibold text-xs shadow-lg hover:bg-[#6E4FF6] hover:text-white transition-all"
                >
                  <span>Apri in Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
