"use client";
import { cn } from "@/lib/utils";

export const Gallery = ({
                                images,
                                className,
                              }: {
  images: string[];
  className?: string;
}) => {
  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-8 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <div key={"grid-1" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <div key={"grid-2" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <div key={"grid-3" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};