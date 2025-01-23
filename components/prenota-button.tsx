import {Sparkles} from "lucide-react";

export async function PrenotaButton() {
  return (
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
  );
}
