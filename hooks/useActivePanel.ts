// hooks/useActivePanel.ts
import { useEffect } from "react";

export function useActivePanel() {
  useEffect(() => {
    const panels = document.querySelectorAll("[data-color]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const color = entry.target.getAttribute("data-color");
            if (color) {
              const body = document.body;

              // Rimuove solo classi che iniziano con 'bg-'
              body.classList.forEach(cls => {
                if (cls.startsWith("bg-")) {
                  body.classList.remove(cls);
                }
              });

              // Aggiunge la nuova classe
              body.classList.add(`bg-${color}`);
            }
          }
        });
      },
      {
        rootMargin: "-60% 0px -40% 0px",
        threshold: 0,
      }
    );

    panels.forEach(panel => observer.observe(panel));

    return () => observer.disconnect();
  }, []);
}