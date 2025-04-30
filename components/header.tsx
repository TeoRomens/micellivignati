import Link from "next/link";
import { cn } from "@/lib/utils";
import {Button} from "@/components/ui/button";
import React from "react";
import {ChevronRight} from "lucide-react";

const navItems = [
  { label: "Servizi", href: "#servizi" },
  { label: "Valori", href: "#valori" },
  { label: "Squadra", href: "#squadra" },
  { label: "Reviews", href: "#reviews" },
  { label: "Galleria", href: "#galleria" },
  { label: "Info", href: "#info" },
];

export function Header(){
  return (
    <header className="max-w-7xl mx-auto pointer-events-none sticky left-0 top-0 right-0 z-10 w-full px-0 py-4">
      <nav
        className="pointer-events-auto mx-auto flex w-full items-center justify-between gap-6 rounded-full px-4 py-1"
        style={{backdropFilter: "blur(10px)"}}
      >
        <Link className="font-melodrama text-2xl font-medium sm:text-xl" href="/">
          MV
        </Link>
        <ul className="hidden sm:flex gap-6 text-sm font-satoshi">
          {navItems.map(({ label, href }) => {
            return (
              <li key={label} className="group relative flex items-center gap-2 hover:font-semibold transition-all duration-200">
                <Link href={href}>
                  <span className={cn("relative inline-flex overflow-hidden")}>
                      {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-center gap-2">
          <Link
            className="inline-flex items-center justify-center rounded-full w-fit text-sm font-satoshi bg-transparent px-3 py-1"
            href="https://flowcal.it/book/user_2uwgJYugSGeo9GTWdBivMRaTRp1"
            target="_blank"
          >
            Prenota
            <ChevronRight className="size-4 ml-1"/>
          </Link>
        </div>
      </nav>
    </header>
  );
}