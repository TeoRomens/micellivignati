import {SubscribeBottom} from "@/components/subscribe-form";
import {The_Nautigal} from "next/font/google";
import {cn} from "@/lib/utils";
import {ArrowBigDown, ArrowDown, Scissors, Sparkles} from "lucide-react";
import {Button} from "@/components/ui/button";
import Header from "@/components/header";

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
  {name: "Taglio Uomo", description: "Comparison 1", price: "17",},
  {name: "Taglio Donna", description: "Comparison 1", price: "20",},
  {name: "Tinta Donna", description: "Comparison 1", price: "30",},
  {name: "Taglio Uomo", description: "Comparison 1", price: "17",},
  {name: "Taglio Donna", description: "Comparison 1", price: "20",},
  {name: "Tinta Donna", description: "Comparison 1", price: "30",},
]
export default async function Home() {
  return (
      <>
        <Header />
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-purple-950">
          <div className="text-center">
            <h1
                className={cn(
                    "mx-auto mb-4 max-w-3xl text-8xl/[1.1] font-bold tracking-tight text-white md:text-9xl/[1.1]",
                    Nautigal.className
                )}
            >
              Acconciature <br/> Micelli e Vignati
            </h1>
            <p className="mb-8 max-w-lg mx-auto text-lg text-primary-foreground">
              Origin UI is an extensive collection of copy-and-paste components for quickly
              building app UIs. It&lsquo;s free, open-source, and ready to drop into your
              projects.
            </p>
            <div className="space-y-4 pt-4 max-w-sm mx-auto">
              <Button>
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
        </main>

        <section id="services" className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-px bg-gray-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#581c87" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                     className="mx-3">
                  <circle cx="6" cy="6" r="3"/>
                  <path d="M8.12 8.12 12 12"/>
                  <path d="M20 4 8.12 15.88"/>
                  <circle cx="6" cy="18" r="3"/>
                  <path d="M14.8 14.8 20 20"/>
                </svg>
                <div className="w-16 h-px bg-gray-300"></div>
              </div>
              <h2 className={cn(
                  "mx-auto mb-4 max-w-3xl text-7xl/[1.1] font-bold tracking-tight text-purple-900",
                  Nautigal.className
              )}>I Nostri Servizi</h2>
              <p className="max-w-lg mx-auto text-gray-600">
                Nulla egestas sapien integer mi fermentum tellus tristique consequat
                pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
                prci eu magna in senectus sit eget justo eget.
              </p>
            </div>

            <div
                className="grid max-w-sm sm:max-w-6xl mx-auto grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
              {components.map((component) => {
                return (
                    <div className="flex flex-col gap-4 max-sm:items-center sm:flex-row sm:justify-center sm:mr-4">
                      <div
                          className="flex size-10 shrink-0 items-center justify-center"
                          aria-hidden="true"
                      >
                        <Scissors className="opacity-80" size={28} strokeWidth={2} stroke={"#581c87"}/>
                      </div>
                      <div className="flex flex-col space-y-2 text-center sm:text-left">
                        <h2 className={cn("text-4xl font-bold", Nautigal.className)}>{component.name}</h2>
                        <p className="text-sm text-muted-foreground">
                          {component.description}
                        </p>
                        <p className={cn("text-3xl font-bold", Nautigal.className)}>
                          €{component.price}
                        </p>
                      </div>
                    </div>
                );
              })}
            </div>

          </div>
        </section>

        <footer className="px-4 bg-gradient-to-br from-purple-500 to-purple-950">
          <div className="my-16 max-w-3xl mx-auto">
            <SubscribeBottom/>
          </div>
        </footer>
      </>
  );
}
