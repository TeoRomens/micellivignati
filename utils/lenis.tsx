"use client"

import {useEffect, useState, createContext, useContext} from "react";
import Lenis from "lenis";
import {ref} from "yup";

const SmoothScrollContext = createContext<Lenis | null>(null);

export const useSmoothScroll = () => useContext(SmoothScrollContext);
export default function ScrollContext({
                                        children,
                                      }: Readonly<{
  children: React.ReactNode;
}>) {
  const [lenisRef, setLenisRef] = useState<Lenis | null>(null)
  const [rafState, setRafState] = useState<number | null>(null)

  useEffect(() => {
    const scroller = new Lenis();
    let rf;

    function raf(time: number) {
      scroller.raf(time)
      requestAnimationFrame(raf)
    }

    rf = requestAnimationFrame(raf)
    setRafState(rf)
    setLenisRef(scroller)

    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rf)
        lenisRef?.destroy()
      }
    }
  }, []);

  return (
      <SmoothScrollContext.Provider value={lenisRef}>
        {children}
      </SmoothScrollContext.Provider>
  )
}