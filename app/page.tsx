import {The_Nautigal} from "next/font/google";
import {cn} from "@/lib/utils";
import {Scissors, Sparkles} from "lucide-react";
import {Button} from "@/components/ui/button";
import Header from "@/components/header";
import Image from "next/legacy/image";
import Background from "@/public/bg.jpg";
import Image1 from "@/public/image1.jpeg";
import Image2 from "@/public/image2.jpeg";
import Image3 from "@/public/image3.jpeg";
import Image4 from "@/public/image4.jpeg";
import Image5 from "@/public/image5.jpeg";
import Image6 from "@/public/image6.jpeg";
import Image7 from "@/public/image7.jpeg";
import Image8 from "@/public/image8.jpeg";
import Image9 from "@/public/image9.jpeg";
import Barbara from "@/public/barbara.jpeg";
import Simonetta from "@/public/simonetta.jpeg";

import {servizi} from "@/app/(prenotazione)/booking/services";

const Nautigal = The_Nautigal({weight: ["400", "700"], subsets: ["latin"]});

export default async function Home() {
  return (
      <>
        <Header/>
        <div className="relative">
          {/* Parallax Background */}
          <div className="absolute inset-0 -z-10">
            <Image
                src={Background}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="opacity-50"
                priority
                style={{
                  backgroundAttachment: "fixed",
                }}
            />
          </div>

          <div
              className="relative z-10 flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500/40 to-purple-950/60">
            <div className="text-center">
              <h1
                  className={cn(
                      "mx-auto mb-8 max-w-screen-md text-7xl/[1.1] font-bold tracking-tight text-white md:text-9xl/[1.1]",
                      Nautigal.className
                  )}
              >
                Acconciature <br/> Micelli e Vignati
              </h1>
              <p className="mb-8 max-w-[300px] sm:max-w-xl mx-auto text-md sm:text-lg text-primary-foreground">
                La nostra passione è rendervi unici. Ogni taglio è un’opera unica, pensata per esaltare il tuo stile e valorizzare la tua naturale bellezza.
              </p>
              <div className="space-y-4 pt-4 max-w-sm mx-auto">
                <Button variant={"outline"} asChild>
                  <a
                      href="./booking"
                      target="_blank"
                  >
                    Prenota un appuntamento
                    <Sparkles
                        className="-me-1 ms-2 opacity-60"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                    />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <section id="services" className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-px bg-gray-300"></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#581c87"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-3"
                >
                  <circle cx="6" cy="6" r="3"/>
                  <path d="M8.12 8.12 12 12"/>
                  <path d="M20 4 8.12 15.88"/>
                  <circle cx="6" cy="18" r="3"/>
                  <path d="M14.8 14.8 20 20"/>
                </svg>
                <div className="w-16 h-px bg-gray-300"></div>
              </div>
              <h2
                  className={cn(
                      "mx-auto mb-4 max-w-3xl text-6xl/[1.1] sm:text-7xl/[1.1] font-bold tracking-tight text-purple-900",
                      Nautigal.className
                  )}
              >
                I Nostri Servizi
              </h2>
              <p className="max-w-lg mx-auto text-gray-600">
                Trasforma il tuo look con stile: scopri i nostri servizi di acconciatura su misura, dove creatività e
                professionalità si incontrano per valorizzare la tua bellezza unica.
              </p>
            </div>

            <div
                className="grid sm:max-w-6xl mx-auto grid-cols-2 overflow-hidden lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-10 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
              {servizi.map((servizio) => {
                return (
                    <div
                        className="flex flex-col max-sm:items-center gap-1 sm:gap-4 sm:flex-row justify-center sm:mr-4">
                      <div className="flex size-10 shrink-0 items-center justify-center" aria-hidden="true">
                        <Scissors
                            className="opacity-80"
                            size={28}
                            strokeWidth={2}
                            stroke={"#581c87"}
                        />
                      </div>
                      <div className="flex flex-col space-y-2 text-center sm:text-left mx-2">
                        <h2 className={cn(
                            "text-3xl sm:text-4xl font-bold",
                            Nautigal.className
                        )}
                        >
                          {servizio.nome}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {servizio.description}
                        </p>
                        <p className={cn(
                            "text-2xl sm:text-3xl font-bold",
                            Nautigal.className
                        )}>
                          €{servizio.price}
                        </p>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="py-16 text-center px-8 bg-gradient-to-br from-purple-500/40 to-purple-950/60">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-px bg-gray-300"></div>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-3"
              >
                <circle cx="6" cy="6" r="3"/>
                <path d="M8.12 8.12 12 12"/>
                <path d="M20 4 8.12 15.88"/>
                <circle cx="6" cy="18" r="3"/>
                <path d="M14.8 14.8 20 20"/>
              </svg>
              <div className="w-16 h-px bg-gray-300"></div>
            </div>
            <h2
                className={cn(
                    "mx-auto mb-4 max-w-3xl text-6xl/[1.1] sm:text-7xl/[1.1] font-bold tracking-tight text-primary-foreground",
                    Nautigal.className
                )}
            >
              Gallery
            </h2>
            <p className="max-w-lg mx-auto text-primary-foreground">
              Scopri alcune delle nostre creazioni: stili moderni, dettagli impeccabili e personalità in ogni
              acconciatura.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <Image className="h-auto max-w-full rounded-lg" src={Image1} alt="Image 1"/>
              </div>
              <div>
                <Image className="h-auto max-w-full rounded-lg" src={Image2} alt="Image 2"/>
              </div>
              <div>
                <Image className="h-auto max-w-full rounded-lg" src={Image3} alt="Image 3"/>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image className="h-auto max-w-full rounded-lg" src={Image4} alt="Image 4"/>
              </div>
              <div>
                <Image className="h-auto max-w-full rounded-lg" src={Image5} alt="Image 5"/>
              </div>
              <div>
                <Image className="h-auto max-w-full rounded-lg" src={Image6} alt="Image 2"/>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image className="h-auto max-w-full rounded-lg" src={Image7} alt="Image 7"/>
              </div>
              <div>
                <Image className="h-auto max-w-full rounded-lg" src={Image8} alt="Image 8"/>
              </div>
              <div>
                <Image className="h-auto max-w-full rounded-lg" src={Image9} alt="Image 9"/>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image className="h-auto max-w-full rounded-lg" src={Image3} alt="Image 3"/>
              </div>
              <div>
                <Image className="h-auto max-w-full rounded-lg" src={Image1} alt="Image 1"/>
              </div>
              <div>
                <Image className="h-auto max-w-full rounded-lg" src={Image2} alt="Image 2"/>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-background">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-px bg-gray-300"></div>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#581c87"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-3"
                  >
                    <circle cx="6" cy="6" r="3"/>
                    <path d="M8.12 8.12 12 12"/>
                    <path d="M20 4 8.12 15.88"/>
                    <circle cx="6" cy="18" r="3"/>
                    <path d="M14.8 14.8 20 20"/>
                  </svg>
                  <div className="w-16 h-px bg-gray-300"></div>
                </div>
                <h2
                    className={cn(
                        "mx-auto mb-4 max-w-3xl text-6xl/[1.1] sm:text-7xl/[1.1] font-bold tracking-tight text-purple-900",
                        Nautigal.className
                    )}
                >
                  La squadra
                </h2>
              </div>
            </div>
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 items-center">
              <div className="text-center text-balance text-gray-500 dark:text-gray-400">
                <Image className="mx-auto mb-4 rounded-full object-cover"
                       src={Barbara}
                       width={200}
                       height={200}
                       alt="Barbara Vignati"/>
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Barbara Vignati
                </h3>
                <p>Esperta in colorazioni e trattamenti innovativi, Barbara dà vita ai tuoi desideri di stile.</p>
              </div>
              <div className="text-center text-balance text-gray-500 dark:text-gray-400">
                <Image className="mx-auto mb-4 rounded-full object-cover"
                       src={Simonetta}
                       width={200}
                       height={200}
                       alt="Simonetta Micelli"/>
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Simonetta Micelli
                </h3>
                <p>Specializzata in tagli che rendono ogni persona unica nel suo stile! Tecnica e creatività!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 text-center px-8 bg-gradient-to-br from-purple-500/40 to-purple-950/60">
          <div className="container mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-px bg-gray-300"></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-3"
                >
                  <circle cx="6" cy="6" r="3"/>
                  <path d="M8.12 8.12 12 12"/>
                  <path d="M20 4 8.12 15.88"/>
                  <circle cx="6" cy="18" r="3"/>
                  <path d="M14.8 14.8 20 20"/>
                </svg>
                <div className="w-16 h-px bg-gray-300"></div>
              </div>
              <h2
                  className={cn(
                      "mx-auto mb-4 max-w-3xl text-6xl/[1.1] sm:text-7xl/[1.1] font-bold tracking-tight text-primary-foreground",
                      Nautigal.className,
                  )}
              >
                La nostra visione
              </h2>
            </div>
            <p className={cn("max-w-4xl mx-auto text-4xl sm:text-5xl tracking-tight text-primary-foreground", Nautigal.className,)}>
              Il nostro lavoro è dedicato a esaltare e valorizzare ogni persona con un taglio unico e su misura, secondo
              lo stile e le forme del viso. Non ci limitiamo a eseguire un taglio o una piega, ma mettiamo la nostra
              passione in ogni cliente. Lo facciamo con amore per questo mestiere, forti di anni di esperienza e sempre
              alla ricerca della perfezione in ogni dettaglio.
            </p>
          </div>
        </section>


        <footer className="bg-white dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-primary sm:text-center dark:text-gray-400">© 2025 <a
          href="#"
          className="hover:underline">Acconciature Micelli e Viganti</a>. All Rights Reserved.
      </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contatti</a>
              </li>
            </ul>
          </div>
        </footer>
      </>
  );
}
