import React from "react";
import {cn} from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  dataColor?: string;
};

export function Section({ children, className = "", dataColor = "white" }: SectionProps) {
  return (
    <section
      className={cn("sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl px-4 md:px-6 lg:px-8 mx-auto w-full py-16 sm:py-24", className)}
      data-color={dataColor}
    >
      {children}
    </section>
  );
}