"use client";

import type {LenisOptions} from "lenis";
import "lenis/dist/lenis.css";
import type {LenisProps as ReactLenisProps, LenisRef} from "lenis/dist/lenis-react";
import {ReactLenis, useLenis} from "lenis/dist/lenis-react";
import {useEffect, useRef} from "react";
import {useTempus} from "tempus/dist/tempus-react";
import {cancelFrame, frame} from "motion-dom";

interface LenisProps extends Omit<ReactLenisProps, "ref"> {
  root: boolean;
  options?: LenisOptions;
}

export function Lenis({root, options}: LenisProps) {
  const lenisRef = useRef<LenisRef>(null);
  const lenis = useLenis();

  useTempus((time: number) => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.raf(time);
    }
  });

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis
      ref={lenisRef}
      root={root}
      options={{
        ...options,
        lerp: 0.1,
        autoRaf: false,
        anchors: true,
        prevent: (node: Element | null) =>
          node?.nodeName === "VERCEL-LIVE-FEEDBACK" ||
          node?.id === "theatrejs-studio-root",
      }}
    />
  );
}
