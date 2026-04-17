"use client";

import { Button } from "@heroui/react";
import clsx from "clsx";

export interface FeatureCardProps {
  title: string;
  src: string;
  url: string;
}

export default function FeatureCard({ title, src, url }: FeatureCardProps) {
  return (
    <a 
      href={url}
      className={clsx(
        "group relative flex flex-col items-center justify-between pb-4 pt-4 overflow-hidden cursor-pointer w-full aspect-square",
        "bg-[#f4f4f4] dark:bg-black text-black dark:text-white transition-colors"
      )}
    >
      <div className="z-10 text-center px-4">
        <h3 className="font-bold text-[clamp(1rem,1.5vw,1.25rem)] tracking-tight">{title}</h3>
      </div>

      <div className="relative w-[80%] grow flex items-center justify-center mt-6 mb-8">
        <img 
          src={src} 
          alt={title} 
          className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center translate-y-8 opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100 z-10 pointer-events-none group-hover:pointer-events-auto">
        <Button
          className="bg-black text-white dark:bg-white dark:text-black font-semibold px-8 shadow-lg pointer-events-auto"
        >
          Buy
        </Button>
      </div>
    </a>
  );
}
