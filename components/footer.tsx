import Link from "next/link";
import {FadeWrapper} from "@/components/fade-wrapper";
import {Instagram, Mail} from "lucide-react";

export function SocialIcons({className}: { className: string }) {
  return (
    <div className={className}>
      <FadeWrapper delay={300}>
        <a aria-label="Instagram" target="_blank" rel="noopener noreferrer"
           href="https://www.instagram.com/teo_romens/"
           className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100"
        >
          <Instagram className="size-5"/>
        </a>
      </FadeWrapper>
      <FadeWrapper delay={450}>
        <a aria-label="Gmail" target="_blank" rel="noopener noreferrer"
           href="mailto:matteoroman4@gmail.com"
           className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100"
        >
          <Mail className="size-5"/>
        </a>
      </FadeWrapper>
    </div>
  );
}

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
          <Link href="/">
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
            © 2025 Acconciature Micelli e Viganti. <br/> All rights reserved.
          </p>
        </FadeWrapper>
        <FadeWrapper delay={300}>
          <div className="flex gap-2">
          <span className="text-sm text-secondary">
            <p className="text-center sm:text-left">
              +39 123 456 7890
            </p>
            <p className="text-center sm:text-left">
              info@example.com
            </p>
          </span>
            <span className="text-sm text-secondary">
            <p className="text-center sm:text-left">
              <strong>P.IVA:</strong> IT12345678901
            </p>
            <p className="text-center sm:text-left">
              Via Esempio 123, 00100 Roma, Italia
            </p>
          </span>
          </div>
        </FadeWrapper>
        <SocialIcons className="flex items-center justify-center max-sm:hidden gap-6 text-secondary group"/>
      </div>
    </footer>
  )
}