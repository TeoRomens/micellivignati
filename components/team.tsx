import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import {EffectCards} from 'swiper/modules';
import {FadeWrapper} from "@/components/fade-wrapper";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: 'Barbara Vignati',
    image: '/barbara.jpeg',
    description: 'Esperta in colorazioni e trattamenti innovativi, Barbara dà vita ai tuoi desideri di stile.',
  },
  {
    name: 'Simonetta Micelli',
    image: '/simonetta.jpeg',
    description: 'Specializzata in tagli che rendono ogni persona unica nel suo stile! Tecnica e creatività!',
  },
];


export default function TeamDiv() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="w-full space-y-6">
        <FadeWrapper>
          <h2 className="font-melodrama font-semibold text-4xl md:text-6xl">
            Il <span className="text-white">Team</span>.
          </h2>
        </FadeWrapper>
        <FadeWrapper delay={150}>
          <p className="text-primary-foreground transition-all duration-300 ease-in-out">
            Ecco il nostro team sempre pronto ad accoglierti.
          </p>
        </FadeWrapper>
        <FadeWrapper>
          <h5 className="font-melodrama font-semibold text-xl md:text-3xl">
            {teamMembers[activeIndex].name.split(" ")[0]} {" "}
            <span className="text-white">
              {teamMembers[activeIndex].name.split(" ")[1]}
            </span>
          </h5>
        </FadeWrapper>
        <FadeWrapper delay={150}>
          <p className="text-primary-foreground transition-all duration-300 ease-in-out">
            {teamMembers[activeIndex].description}
          </p>
        </FadeWrapper>
        <FadeWrapper delay={150}>
          <Link
            className="inline-flex items-center justify-center rounded-full w-fit text-sm font-satoshi font-medium bg-white text-primary hover:bg-white/90 px-8 py-3"
            href="/"
          >
            Prenota un appuntamento
          </Link>
        </FadeWrapper>
      </div>
      <div className="grid grid-cols-1 grid-rows-[masonry] gap-4 sm:grid-cols-2">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[240px] h-[320px]"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          initialSlide={activeIndex}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide
              key={index}
              className="bg-white rounded-xl shadow-md p-4"
            >
              <div className="flex flex-col items-center justify-center h-full w-full text-primary font-melodrama">
                <Image
                  src={member.image}
                  alt="not found"
                  width={112}
                  height={112}
                  className="w-28 h-28 rounded-full object-cover mb-4 border border-white"
                />
                <h3 className="text-2xl text-center font-semibold">
                  {member.name.split(" ")[0]} <br/> {member.name.split(" ")[1]}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
