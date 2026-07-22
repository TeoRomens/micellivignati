"use client";

import React from "react";
import { HeaderV2 } from "@/components/v2/header-v2";
import { HeroV2 } from "@/components/v2/hero-v2";
import { AboutV2 } from "@/components/v2/about-v2";
import { ServicesV2 } from "@/components/v2/services-v2";
import { WhyUsV2 } from "@/components/v2/why-us-v2";
import { GalleryV2 } from "@/components/v2/gallery-v2";
import { BookingCtaV2 } from "@/components/v2/booking-cta-v2";
import { TeamV2 } from "@/components/v2/team-v2";
import { FaqV2 } from "@/components/v2/faq-v2";
import { ContactV2 } from "@/components/v2/contact-v2";
import { FooterV2 } from "@/components/v2/footer-v2";

export default function V2Page() {
  return (
    <main className="min-h-screen bg-[#FCFAFD] text-[#222222] font-satoshi selection:bg-[#C8B6FF] selection:text-[#222222]">
      {/* Header / Navbar */}
      <HeaderV2 />

      {/* 1. Hero Section */}
      <HeroV2 />

      {/* 2. About Section & 4 Core Values */}
      <AboutV2 />

      {/* 3. Services Section */}
      <ServicesV2 />

      {/* 4. Why Choose Us Feature Grid */}
      <WhyUsV2 />

      {/* 5. Gallery & Lightbox */}
      <GalleryV2 />

      {/* 7. Dedicated Booking CTA */}
      <BookingCtaV2 />

      {/* 8. Team Section */}
      <TeamV2 />

      {/* 10. FAQ Accordion */}
      <FaqV2 />

      {/* 11. Contact & Map & Form */}
      <ContactV2 />

      {/* 12. Footer */}
      <FooterV2 />
    </main>
  );
}
