import {FadeWrapper} from "@/components/fade-wrapper";
import Link from "next/link";
import {Instagram, Mail} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export function Footer() {
  return (
    <footer className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-6 lg:px-8 w-full py-8 space-y-6">
      <div className="flex flex-col items-center justify-center py-14 px-4 shadow bg-highlight rounded-3xl">
        <FadeWrapper delay={150}>
          <h2
            className="m-auto mb-6 max-w-2xl text-balance text-center font-melodrama text-4xl sm:text-5xl font-medium text-white">
            Vieni a trovarci, prenota un appuntamento!
          </h2>
        </FadeWrapper>
        <FadeWrapper delay={300}>
          <Link href="https://flowcal.it/book/user_2uwgJYugSGeo9GTWdBivMRaTRp1" target="_blank">
            <button
              className="w-fit items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all
                bg-white text-primary hover:bg-white/80 px-8 py-3 m-auto block cursor-pointer"
            >
              Prenota
            </button>
          </Link>
        </FadeWrapper>
        <SocialIcons className="flex items-center justify-center mt-8 sm:hidden gap-6 text-secondary group"/>
      </div>

      <div className="mt-8 z-10 flex max-sm:flex-col items-center justify-between gap-4">
        <FadeWrapper delay={150}>
          <p className="mb-8 text-center text-sm text-secondary sm:mb-0 sm:text-left">
            © 2025 Acconciature Micelli e Vignati. <br/> All rights reserved.
          </p>
        </FadeWrapper>
        <FadeWrapper delay={300}>
          <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-secondary text-center sm:text-left">
            <div>
              <p>0331 544221</p>
              <p>micelli.vignati@hotmail.it</p>
            </div>
            <div>
              <p><strong>P.IVA:</strong> IT12345678901</p>
              <p>Via Della Vittoria 27, 20025 Legnano, Italia</p>
            </div>
          </div>
        </FadeWrapper>
        <SocialIcons className="flex items-center justify-center max-sm:hidden gap-6 text-secondary group"/>
      </div>

      {/* Sezione crediti */}
      <div className="border-t pt-4 text-center text-sm text-secondary">
        <FadeWrapper delay={450}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <p>
              Website designed and built by{" "}
              <a
                href="https://www.instagram.com/teo_romens/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-highlight transition-colors"
              >
                Matteo Roman
              </a>
            </p>
            <Avatar className="h-6 w-6">
              <AvatarImage src="/matteo.png" alt="Matteo Roman"/>
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
          </div>
        </FadeWrapper>
      </div>
    </footer>
  );
}

export function SocialIcons({className}: { className: string }) {
  return (
    <div className={className}>
      <FadeWrapper delay={300}>
        <a aria-label="Instagram" target="_blank" rel="noopener noreferrer"
           href="https://www.instagram.com/"
           className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100"
        >
          <Instagram className="size-5"/>
        </a>
      </FadeWrapper>
      <FadeWrapper delay={450}>
        <a aria-label="Gmail" target="_blank" rel="noopener noreferrer"
           href="mailto:micelli.vignati@hotmail.it"
           className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100"
        >
          <Mail className="size-5"/>
        </a>
      </FadeWrapper>
    </div>
  );
}