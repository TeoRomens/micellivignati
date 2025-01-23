import Link from "next/link";

import {PrenotaButton} from "@/components/prenota-button";

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
              <span className="sr-only">Origin UI</span>
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
              <PrenotaButton/>
            </div>
          </div>
        </div>
      </header>
  );
}
