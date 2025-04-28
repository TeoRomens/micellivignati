import type {Metadata} from "next";
import "./globals.css";
import {Toaster as Sonner} from "@/components/ui/sonner";
import React from "react";
import localFont from "next/font/local";
import {AosWrapper} from "@/components/aos";
import {Lenis} from "@/components/lenis";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Acconciature Micelli e Vignati",
  creator: "Matteo Roman",
};

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  display: "swap",
  variable: "--font-satoshi"
});

const melodrama = localFont({
  src: "../public/fonts/Melodrama-Variable.woff2",
  display: "swap",
  variable: "--font-melodrama"
});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
    <AosWrapper>
      <body className={`${satoshi.variable} ${melodrama.variable} bg-background antialiased transition-colors duration-400 ease-in-out`}>
      <Lenis root/>
      <div className="relative flex flex-col h-full min-h-dvh font-satoshi overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
      </div>
      <Sonner richColors/>
      </body>
    </AosWrapper>
    </html>
  );
}
