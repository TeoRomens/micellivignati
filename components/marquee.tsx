import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";
import { RiStarFill } from "@remixicon/react"
import {User} from "lucide-react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

const reviews = [
  {
    name: "Ivan",
    body: "Si distinguono sopratutto per la disponibilità, la professionalità, l'esperienza e la bravura Simona e Barbara. Offrono un servizio completo in tutti settori dando consigli e professionalità!",
  },
  {
    name: "Federica",
    body: "Ambiente raccolto e pulito. Le titolari del negozio sono davvero competenti e gentilissime. Ve lo consiglio, provate per credere 👌",
  },
  {
    name: "Patrizia",
    body: "Barbara bravissima nel suo lavoro, poi è cordiale, simpatica e sempre pronta a rispondere ad ogni domanda.",
  },
  {
    name: "Alessandro",
    body: "Precisione, cura e ascolto. Hanno saputo valorizzare il mio stile personale. Una garanzia!",
  },
  {
    name: "Elena",
    body: "Dal colore al taglio, tutto è stato perfetto. Si vede la passione che mettono in quello che fanno.",
  },
  {
    name: "Marco",
    body: "Ambiente accogliente e professionisti veri. È diventato il mio salone di fiducia.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
                      name,
                      body,
                    }: {
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-muted bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex items-center justify-center bg-white border border-muted rounded-full w-8 h-8">
          <User className="text-highlight" size={20} />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <span
            className="inline-flex items-center text-yellow-500"
            aria-hidden="true"
          >
            <RiStarFill size={12} />
            <RiStarFill size={12} />
            <RiStarFill size={12} />
            <RiStarFill size={12} />
            <RiStarFill size={12} />
          </span>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function ReviewCarousel() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:60s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={`rev_${index}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:60s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={`rev_${index}`} {...review} />
        ))}
      </Marquee>
    </div>
  );
}

