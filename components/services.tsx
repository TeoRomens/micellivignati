import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import {FadeWrapper} from "@/components/fade-wrapper";
import {Brush, Eraser, Scissors, SwatchBook} from "lucide-react";
import useIsMobile from "@/hooks/useIsMobile";

const services = [
  {
    id: "1", nome: "Taglio Uomo", durata: 60, Icon: Scissors, price: "17",
    description: "Taglio su misura per valorizzare il tuo stile e la forma del viso."
  },

  {
    id: "2", nome: "Taglio e Piega Donna", durata: 60, Icon: Scissors, price: "49",
    description: "Un taglio personalizzato e una piega perfetta per esaltare la tua bellezza naturale."
  },

  {
    id: "3", nome: "Taglio e Piega Lunga", durata: 120, Icon: Eraser, price: "53",
    description: "Taglio e styling studiati per dare volume e movimento ai capelli lunghi."
  },

  {
    id: "4", nome: "Colore", durata: 120, Icon: Brush, price: "35-50",
    description: "Colore su misura per illuminare e valorizzare il tuo incarnato e stile."
  },

  {
    id: "5", nome: "Permanente", durata: 180, Icon: SwatchBook, price: "45-55",
    description: "Ricci definiti e naturali per un look sempre perfetto e pieno di carattere."
  },

  {
    id: "6", nome: "Colpi di sole", durata: 240, Icon: Brush, price: "55-70",
    description: "Schiariture delicate per un effetto luminoso e naturale, studiato su di te."
  },

  {
    id: "7", nome: "Stiratura classica", durata: 120, Icon: Brush, price: "45-55",
    description: "Liscio impeccabile e duraturo, senza stressare il capello."
  },

  {
    id: "8", nome: "Lissage", durata: 120, Icon: Brush, price: "65",
    description: "Trattamento lisciante avanzato per capelli setosi e disciplinati a lungo."
  },

  {
    id: "9", nome: "Piega", durata: 60, Icon: Brush, price: "24",
    description: "Piega su misura per un look elegante e definito in ogni occasione."
  },

  {
    id: "10", nome: "Piega Lunga", durata: 90, Icon: Brush, price: "32",
    description: "Styling perfetto per capelli lunghi, con volume e movimento naturale."
  },

  {
    id: "11", nome: "Toner", durata: 60, Icon: Brush, price: "10",
    description: "Tonalizzazione personalizzata per riflessi intensi e luminosi."
  }
];


export default function ServicesSwiper() {
  const isMobile = useIsMobile();

  return (
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        grabCursor={true}
        spaceBetween={24}
        autoplay={true}
        className="w-full h-[240px]"
      >
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            className="bg-white border border-muted rounded-xl shadow-md p-6"
          >
            <div className="h-fit w-full even:mt-14">
              <Scissors className="mb-2 size-5 text-highlight"/>
              <h5 className="mb-2 font-melodrama text-primary font-medium text-2xl">
                {service.nome}
              </h5>
              <p className="text-secondary font-satoshi font-normal text-sm">
                {service.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
