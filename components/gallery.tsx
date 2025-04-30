"use client";
import { cn } from "@/lib/utils";
import {FadeWrapper} from "@/components/fade-wrapper";

export const Gallery = ({
                          images,
                          className,
                        }: {
  images: string[];
  className?: string;
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-10 max-w-5xl mx-auto py-4 px-10">
        {images.map((elem, idx) => (
          <FadeWrapper key={idx}>
            <img
              src={elem}
              className="aspect-square object-cover object-center rounded-lg"
              alt={`thumbnail-${idx}`}
            />
          </FadeWrapper>
        ))}
      </div>
    </div>
  );
};