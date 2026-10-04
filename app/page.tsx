"use client";

import React from "react";
import { Header } from "@/components/v2/header";
import { Hero } from "@/components/v2/hero";
import { About } from "@/components/v2/about";
import { Services } from "@/components/v2/services";
import { WhyUs } from "@/components/v2/why-us";
import { GalleryV2 } from "@/components/v2/gallery-v2";
import { BookingCta } from "@/components/v2/booking-cta";
import { Team } from "@/components/v2/team";
import { Faq } from "@/components/v2/faq";
import { Contact } from "@/components/v2/contact";
import { Footer } from "@/components/v2/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-off-white text-dark-text font-satoshi selection:bg-lavender-soft selection:text-dark-text">
      {/* Header / Navbar */}
      <Header />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section & 4 Core Values */}
      <About />

      {/* 3. Services Section */}
      <Services />

      {/* 4. Why Choose Us Feature Grid */}
      <WhyUs />

      {/* 5. Gallery & Lightbox */}
      <GalleryV2 />

      {/* 6. Dedicated Booking CTA */}
      <BookingCta />

      {/* 7. Team Section */}
      <Team />

      {/* 8. Faq Accordion */}
      <Faq />

      {/* 9. Contact & Map & Form */}
      <Contact />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}