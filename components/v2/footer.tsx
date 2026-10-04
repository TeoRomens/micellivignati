"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Calendar, Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BOOKING_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#222222] text-white pt-16 pb-8 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6E4FF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6E4FF6] to-[#F7D6E6] flex items-center justify-center text-white font-melodrama font-bold text-lg">
                MV
              </div>
              <div className="flex flex-col">
                <span className="font-melodrama text-xl font-semibold text-white tracking-wide">
                  Micelli & Vignati
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#C8B6FF] font-medium font-satoshi">
                  Hairstyling Atelier
                </span>
              </div>
            </Link>
            <p className="font-satoshi text-xs text-white/70 max-w-sm leading-relaxed">
              La nostra passione è rendervi unici. Tagli, colori e trattamenti sartoriali pensati per esaltare la tua naturale bellezza a Legnano.
            </p>
            <div className="pt-2">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6E4FF6] text-white text-xs font-satoshi font-semibold hover:bg-[#5b3de3] transition-colors shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 text-[#F7D6E6]" />
                <span>Prenota Online</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-satoshi">
            <h4 className="font-melodrama text-lg font-semibold text-white">Navigazione</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#about" className="hover:text-[#C8B6FF] transition-colors">Chi Siamo</a></li>
              <li><a href="#servizi" className="hover:text-[#C8B6FF] transition-colors">Servizi</a></li>
              <li><a href="#perche-noi" className="hover:text-[#C8B6FF] transition-colors">Perché Sceglierci</a></li>
              <li><a href="#galleria" className="hover:text-[#C8B6FF] transition-colors">Galleria</a></li>
              <li><a href="#recensioni" className="hover:text-[#C8B6FF] transition-colors">Recensioni</a></li>
              <li><a href="#team" className="hover:text-[#C8B6FF] transition-colors">Il Team</a></li>
              <li><a href="#prezzi" className="hover:text-[#C8B6FF] transition-colors">Listino Prezzi</a></li>
              <li><a href="#faq" className="hover:text-[#C8B6FF] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 font-satoshi text-xs text-white/70">
            <h4 className="font-melodrama text-lg font-semibold text-white">Contatti</h4>
            <p><strong>Telefono:</strong><br />0331 544221</p>
            <p><strong>Email:</strong><br />micelli.vignati@hotmail.it</p>
            <p><strong>Indirizzo:</strong><br />Via Della Vittoria 27<br />20025 Legnano (MI)</p>
          </div>

          {/* Opening & Legal */}
          <div className="space-y-3 font-satoshi text-xs text-white/70">
            <h4 className="font-melodrama text-lg font-semibold text-white">Info & Social</h4>
            <p><strong>Orari:</strong><br />Mar – Sab: 09:00 – 19:00<br />Lun & Dom: Chiuso</p>
            <p><strong>P.IVA:</strong> IT12345678901</p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#6E4FF6] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:micelli.vignati@hotmail.it"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#6E4FF6] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-satoshi text-xs text-white/60">
          <p>© 2025 Acconciature Micelli e Vignati S.n.c. Tutti i diritti riservati.</p>

          <div className="flex items-center gap-2">
            <span>Website designed & built by</span>
            <a
              href="https://www.instagram.com/teo_romens/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8B6FF] hover:underline font-semibold flex items-center gap-1.5"
            >
              Matteo Roman
              <Avatar className="h-5 w-5">
                <AvatarImage src="/matteo.png" alt="Matteo Roman" />
                <AvatarFallback className="text-[10px] text-black">MR</AvatarFallback>
              </Avatar>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
