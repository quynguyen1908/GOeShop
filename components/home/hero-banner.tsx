"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import clsx from "clsx";

export interface HeroBannerProps {
  title: string;
  subtitle: string;
  src: string;
  url: string;
  textColor?: "white" | "black";
}

export default function HeroBanner({
  title,
  subtitle,
  src,
  url,
  textColor = "black",
}: HeroBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full aspect-4/3 sm:aspect-video max-h-dvh overflow-hidden">
      <img
        src={src}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      <div
        className={clsx(
          "relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-12",
          textColor === "white" ? "text-white" : "text-black"
        )}
      >
        <div
          className={clsx(
            "flex flex-col items-start gap-2 sm:gap-4 transition-all duration-1000 ease-out transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}
        >
          <h1 className="font-bold tracking-tight text-[clamp(1.5rem,3.5vw,3.5rem)] leading-none">
            {title}
          </h1>
          <p className="text-[clamp(0.875rem,1.2vw,1.25rem)] font-light opacity-90 max-w-md">
            {subtitle}
          </p>

          <a
            href={url}
          >
            <Button
              className={clsx(
                "mt-3 sm:mt-5 px-6 sm:px-10 py-5 sm:py-6 text-[clamp(0.875rem,1.1vw,1.25rem)] border transition-all duration-300 hover:scale-105 bg-transparent",
                textColor === "white"
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              )}
            >
              Buy
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
