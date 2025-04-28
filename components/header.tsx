import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/" },
  { label: "Squadra", href: "/" },
  { label: "Reviews", href: "/" },
  { label: "Galleria", href: "/" },
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
        <ul className="gap-6 text-sm flex font-satoshi">
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

        </div>
      </nav>
    </header>
  );
}