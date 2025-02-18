import Link from "next/link";

import {Sparkles} from "lucide-react";

export default function Header() {
  return (
      <header className="fixed left-0 right-0 z-50">
        <div className="px-6">
          <div className="mx-auto flex h-[72px] w-full items-center justify-between gap-3">
            <Link
                href="/"
                aria-label="Home"
                className="rounded-full outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
            >
              <span className="sr-only">Micelli Vignati</span>
              <svg
                  className="stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
              >
                <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8"/>
              </svg>
            </Link>
            <div className="flex items-center gap-2">
              <a
                  className="dark inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full bg-white px-3 py-2 text-sm font-medium text-primary-foreground shadow-md shadow-black/5 outline-offset-2 transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50"
                  href="./booking"
                  target="_blank"
              >
                <Sparkles
                    className="mr-1.5"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                />
                <span className="flex items-baseline gap-1">Prenota</span>
              </a>
            </div>
          </div>
        </div>
      </header>
  );
}
