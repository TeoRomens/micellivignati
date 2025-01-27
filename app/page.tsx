import {The_Nautigal} from "next/font/google";
import {cn} from "@/lib/utils";
import {ArrowDown, Scissors, Sparkles} from "lucide-react";
import {Button} from "@/components/ui/button";
import Header from "@/components/header";
import Image from "next/image";
import Backround1 from "@/public/background-1.jpg";

const Nautigal = The_Nautigal({weight: ["400", "700"], subsets: ["latin"]});

type Component = {
  name: string;
  description: string;
  price: string
};

const components: Component[] = [
  {name: "Taglio Uomo", description: "Comparison 1", price: "17",},
  {name: "Taglio Donna", description: "Comparison 1", price: "20",},
  {name: "Tinta Donna", description: "Comparison 1", price: "30",},
  {name: "Taglio Uomoooooo", description: "Comparison 1", price: "17",},
  {name: "Taglio Donna", description: "Comparison 1", price: "20",},
  {name: "Tinta Donna", description: "Comparison 1", price: "30",},
  {name: "Taglio Uomo", description: "Comparison 1", price: "17",},
  {name: "Taglio Donna", description: "Comparison 1", price: "20",},
  {name: "Tinta Donna", description: "Comparison 1", price: "30",},
]
export default async function Home() {
  return (
      <>
        <Header/>
        <div className="relative">
          {/* Parallax Background */}
          <div className="absolute inset-0 -z-10">
            <Image
                src={Backround1}
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
                      "mx-auto mb-4 max-w-screen-md text-7xl/[1.1] font-bold tracking-tight text-white md:text-9xl/[1.1]",
                      Nautigal.className
                  )}
              >
                Acconciature <br/> Micelli e Vignati
              </h1>
              <p className="mb-8 max-w-[300px] sm:max-w-xl mx-auto text-md sm:text-lg text-primary-foreground">
                Origin UI is an extensive collection of copy-and-paste components for quickly
                building app UIs. It&lsquo;s free, open-source, and ready to drop into your
                projects.
              </p>
              <div className="space-y-4 pt-4 max-w-sm mx-auto">
                <Button variant={"outline"}>
                  Prenota un appuntamento
                  <Sparkles
                      className="-me-1 ms-2 opacity-60"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                  />
                </Button>
                <Button variant="outline">
                  Esplora i servizi
                  <ArrowDown
                      className="-me-1 ms-2 opacity-60"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                  />
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
                Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar
                sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in
                senectus sit eget justo eget.
              </p>
            </div>

            <div
                className="grid sm:max-w-6xl mx-auto grid-cols-2 overflow-hidden lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
              {components.map((component) => {
                return (
                    <div
                        className="flex flex-col max-sm:items-center gap-1 sm:gap-4 sm:flex-row justify-center sm:mr-4">
                      <div
                          className="flex size-10 shrink-0 items-center justify-center"
                          aria-hidden="true"
                      >
                        <Scissors
                            className="opacity-80"
                            size={28}
                            strokeWidth={2}
                            stroke={"#581c87"}
                        />
                      </div>
                      <div className="flex flex-col space-y-2 text-center sm:text-left">
                        <h2
                            className={cn(
                                "text-3xl sm:text-4xl font-bold",
                                Nautigal.className
                            )}
                        >
                          {component.name}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {component.description}
                        </p>
                        <p
                            className={cn(
                                "text-2xl sm:text-3xl font-bold",
                                Nautigal.className
                            )}
                        >
                          €{component.price}
                        </p>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="py-16 mx-auto px-4 text-center container bg-gradient-to-br from-purple-500/40 to-purple-950/60">
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
              Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar
              sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in
              senectus sit eget justo eget.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-16 max-w-sm mx-auto">
            <Button variant={"outline"}>
              Prenota un appuntamento
              <Sparkles
                  className="-me-1 ms-2 opacity-60"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
              />
            </Button>
          </div>
        </div>


        <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://micellievignati.com/"
                                                                                          className="hover:underline">Acconciature Micelli e Viganti</a>. All Rights Reserved.
    </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
        </footer>

      </>
  );
}
