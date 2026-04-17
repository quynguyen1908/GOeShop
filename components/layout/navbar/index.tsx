"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import LogoIcon from "@/components/logo";
import { ThemeSwitch } from "@/components/layout/theme-switch";
import { Magnifier, ShoppingCart, Person, Bars } from "@gravity-ui/icons";

const NAV_CATEGORIES = [
  "Mobile",
  "TV & AV",
  "Appliances",
  "Computers & Monitors",
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8",
        "bg-white dark:bg-black text-black dark:text-white border-b border-gray-200 dark:border-gray-800",
        "transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex items-center gap-2 h-full">
        <a href="/" className="flex items-center gap-2 group">
          <LogoIcon className="h-8! w-8! sm:h-10! sm:w-10! transition-transform group-hover:scale-105" />
          <span className="font-bold text-lg sm:text-2xl tracking-widest hidden sm:block">GOESHOP</span>
        </a>
      </div>

      <ul className="hidden lg:flex items-center h-full gap-8">
        {NAV_CATEGORIES.map((cat) => (
          <li key={cat} className="h-full relative group cursor-pointer flex items-center">
            <span className="font-medium text-sm xl:text-base group-hover:text-blue-500 transition-colors">
              {cat}
            </span>
            <div className="absolute -bottom-px left-0 right-0 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 sm:gap-6 h-full">
        <div className="hidden sm:block">
          <ThemeSwitch />
        </div>
        <button className="hover:text-blue-500 hover:cursor-pointer transition-colors">
          <Magnifier width={20} height={20} className="sm:w-6 sm:h-6" />
        </button>
        <button className="hover:text-blue-500 hover:cursor-pointer transition-colors">
          <ShoppingCart width={20} height={20} className="sm:w-6 sm:h-6" />
        </button>
        <button className="hover:text-blue-500 hover:cursor-pointer transition-colors">
          <Person width={20} height={20} className="sm:w-6 sm:h-6" />
        </button>
        <button className="flex lg:hidden hover:text-blue-500 transition-colors ml-2 sm:ml-0">
          <Bars width={24} height={24} className="sm:w-7 sm:h-7" />
        </button>
      </div>
    </nav>
  );
}
