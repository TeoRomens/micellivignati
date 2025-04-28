'use client'

import {motion} from "framer-motion";
import Link from "next/link";
import {FadeWrapper} from "@/components/fade-wrapper";
import {Header} from "@/components/header";
import React from "react";
import {Scissors} from "lucide-react";
import {ReviewCarousel} from "@/components/marquee";
import {useActivePanel} from "@/hooks/useActivePanel";
import {Section} from "@/components/section";
import TeamDiv from "@/components/team";
import {Footer} from "@/components/footer";
import ServicesSwiper from "@/components/services";
import Image from "next/image";
import {Gallery} from "@/components/gallery";

export default function Page() {
  useActivePanel();

  const variants = {
    hidden: {filter: "blur(10px)", transform: "translateY(10px)", opacity: 0},
    visible: {filter: "blur(0)", transform: "translateY(0)", opacity: 1},
  };

  return (
    <main className="grow">
      <Header/>
      <motion.div
        className="relative flex w-full flex-col justify-center"
        initial="hidden"
        animate="visible"
        transition={{duration: 1}}
        variants={variants}
        exit="hidden"
      >
        <Section>
          <FadeWrapper>
            <p className="mb-8 flex items-center gap-2 text-primary">
              <span className="wave">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-hand text-highlight"
                >
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
                  <path
                    d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                </svg>
              </span>
              Benvenuti !
            </p>
          </FadeWrapper>
          <FadeWrapper delay={150}>
            <div>
              <h1
                className="font-melodrama text-pretty font-semibold text-6xl md:text-7xl lg:text-8xl">
                Acconciature <br/> <span className="text-highlight">Micelli & Vignati</span>.
              </h1>
            </div>
          </FadeWrapper>
          <FadeWrapper delay={300}>
            <div className="md:flex-center mt-8 flex flex-col gap-4 md:flex-row">
              <div className="h-[1px] w-full bg-bg-700"></div>
              <p className="w-full text-pretty text-primary leading-5.5">
                La nostra passione è rendervi unici. Ogni taglio è un’opera unica, pensata per esaltare il tuo stile e
                valorizzare la tua naturale bellezza.
              </p>
            </div>
          </FadeWrapper>
          <FadeWrapper delay={450}>
            <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <Link
                className="inline-flex items-center justify-center rounded-full w-fit text-sm font-satoshi font-medium bg-highlight text-white hover:bg-highlight/90 px-8 py-3"
                href="/"
              >
                Prenota un appuntamento
              </Link>
            </div>
          </FadeWrapper>
        </Section>
        <Section
          className="flex flex-col items-center justify-center min-h-screen"
          dataColor="highlight"
        >
          <FadeWrapper>
            <div className="flex w-fit items-center gap-2 mb-8">
              <h2 className="font-melodrama font-semibold text-4xl md:text-6xl">
                I Nostri <span className="text-white">Servizi</span>.
              </h2>
            </div>
          </FadeWrapper>
          <FadeWrapper delay={150}>
            <p className="w-full text-pretty text-white leading-5.5 mb-8">
              Trasforma il tuo look con stile: scopri i nostri servizi di acconciatura su misura, dove creatività e
              professionalità si incontrano per valorizzare la tua bellezza unica.
            </p>
          </FadeWrapper>
          <ServicesSwiper/>
        </Section>
        <Section
          className="flex flex-col-reverse md:flex-row gap-8 md:gap-20">
          <div className="grid grid-cols-1 grid-rows-[masonry] gap-4 sm:grid-cols-2">
            <FadeWrapper delay={0}>
              <div className="rounded-3xl border border-muted p-6 h-fit w-full even:mt-14 bg-white">
                <Scissors className="mb-2 size-5 text-highlight"/>
                <h5 className="mb-2 font-melodrama font-medium text-2xl">
                  Mentoring
                </h5>
                <p className="text-secondary">
                  Get connected with a mentor that will help you pave your career path.
                </p>
              </div>
            </FadeWrapper>
            <FadeWrapper delay={150}>
              <div className="rounded-3xl border border-muted p-6 h-fit w-full even:mt-14 bg-white">
                <Scissors className="mb-2 size-5 text-highlight"/>
                <h5 className="mb-2 font-melodrama font-medium text-2xl">
                  Mentoring
                </h5>
                <p className="text-secondary">
                  Get connected with a mentor that will help you pave your career path.
                </p>
              </div>
            </FadeWrapper>
            <FadeWrapper delay={300}>
              <div className="rounded-3xl border border-muted p-6 h-fit w-full even:mt-14 bg-white">
                <Scissors className="mb-2 size-5 text-highlight"/>
                <h5 className="mb-2 font-melodrama font-medium text-2xl">
                  Mentoring
                </h5>
                <p className="text-secondary">
                  Get connected with a mentor that will help you pave your career path.
                </p>
              </div>
            </FadeWrapper>
            <FadeWrapper delay={450}>
              <div className="rounded-3xl border border-muted p-6 h-fit w-full even:mt-14 bg-white">
                <Scissors className="mb-2 size-5 text-highlight"/>
                <h5 className="mb-2 font-melodrama font-medium text-2xl">
                  Mentoring
                </h5>
                <p className="text-secondary">
                  Get connected with a mentor that will help you pave your career path.
                </p>
              </div>
            </FadeWrapper>
          </div>
          <div className="w-full space-y-6">
            <FadeWrapper>
              <h2 className="font-melodrama font-semibold text-4xl md:text-6xl">
                I Nostri <span className="text-highlight">Valori</span>.
              </h2>
            </FadeWrapper>
            <FadeWrapper delay={150}>
              <p className="text-primary">
                I founded Design &amp; Code which is a global community with a mission to connect designers and
                developers
                to create a happy community eager to learn, innovate and grow together. We welcome all designers and
                developers: beginners, intermediates, and experts willing to learn together. We encourage sharing
                resources and learning experiences, organizing events, and providing feedback for our members to grow
                as
                they learn.
              </p>
            </FadeWrapper>
            <FadeWrapper delay={150}>
              <Link
                className="inline-flex items-center justify-center rounded-full w-fit text-sm font-satoshi font-medium bg-highlight text-white hover:bg-highlight/90 px-8 py-3"
                href="/"
              >
                Prenota un appuntamento
              </Link>
            </FadeWrapper>
          </div>
        </Section>
        <Section
          className="flex flex-col md:flex-row gap-8 md:gap-20"
          dataColor="highlight"
        >
          <TeamDiv/>
        </Section>
        <Section className="flex flex-col items-center justify-center space-y-8">
          <FadeWrapper>
            <div className="mb-4 flex w-fit items-center gap-2">
              <h2 className="font-melodrama font-semibold text-4xl md:text-6xl">
                Cosa dicono di <span className="text-highlight">noi</span>.
              </h2>
            </div>
          </FadeWrapper>
          <ReviewCarousel/>
        </Section>
        <Section
          className="flex flex-col items-center justify-center space-y-8"
          dataColor="highlight"
        >
          <FadeWrapper>
            <div className="mb-4 flex w-fit items-center gap-2">
              <h2 className="font-melodrama font-semibold text-4xl md:text-6xl">
                Gallery <span className="text-highlight">.</span>
              </h2>
            </div>
          </FadeWrapper>
          <Gallery
            images={["/image1.jpeg", "/image2.jpeg", "/image3.jpeg", "/image4.jpeg", "/image5.jpeg", "/image6.jpeg", "/image7.jpeg", "/image8.jpeg", "/image9.jpeg",]}/>
        </Section>
        <Section className="flex max-sm:flex-col items-center justify-center space-y-4 gap-8 md:gap-20">
          <FadeWrapper>
            <div className="rounded-full overflow-hidden border-4 border-white shadow-lg size-72">
              <Image
                src="/map.png"
                alt="map"
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeWrapper>
          <div className="w-full space-y-6">
            <FadeWrapper>
              <h2 className="font-melodrama font-semibold text-4xl md:text-6xl">
                Dove <span className="text-highlight">siamo</span>.
              </h2>
            </FadeWrapper>
            <FadeWrapper delay={150}>
              <p className="text-primary">
                I founded Design &amp; Code which is a global community with a mission to connect designers and
                developers
                to create a happy community eager to learn, innovate and grow together. We welcome all designers and
                developers: beginners, intermediates, and experts willing to learn together. We encourage sharing
                resources and learning experiences, organizing events, and providing feedback for our members to grow
                as
                they learn.
              </p>
            </FadeWrapper>
            <FadeWrapper delay={150}>
              <Link
                className="inline-flex items-center justify-center rounded-full w-fit text-sm font-satoshi font-medium bg-highlight text-white hover:bg-highlight/90 px-8 py-3"
                target="_blank"
                href="https://www.google.com/maps/place/Micelli+Simonetta+%26+Vignati+Barbara+S.n.c./@45.5983375,8.9120835,17z/data=!3m1!4b1!4m6!3m5!1s0x47868da67bb7b1a3:0x197b2106be9ab4b7!8m2!3d45.5983375!4d8.9146584!16s%2Fg%2F1tcz75tj"
              >
                Indicazioni
              </Link>
            </FadeWrapper>
          </div>
        </Section>
      </motion.div>
      <Footer/>
    </main>
  )
}