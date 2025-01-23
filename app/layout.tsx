import Header from "@/components/header";
import {ThemeProvider} from "@/components/theme-provider";
import type {Metadata, Viewport} from "next";
import {Figtree, Inter as FontSans} from "next/font/google";
import Script from "next/script";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Acconciature Micelli e Vignati",
};

const FigTree = Figtree({ weight: "variable", subsets: ['latin'] })

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={`${FigTree.className} bg-background font-sans antialiased`}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </ThemeProvider>
      </body>
      </html>
  );
}
