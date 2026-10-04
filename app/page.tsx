"use client";

import React from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { Gallery } from "@/components/gallery";
import { BookingCta } from "@/components/booking-cta";
import { Team } from "@/components/team";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-off-white text-dark-text font-satoshi selection:bg-lavender-soft selection:text-dark-text">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Gallery />
      <BookingCta />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}