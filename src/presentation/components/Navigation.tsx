"use client";

import { siteContent } from "@/config/siteContent";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Journey", href: "#journey" }
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("#work");
  const isScrollingTo = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingTo.current) return;

      const scrollY = window.scrollY;
      for (const item of [...navItems].reverse()) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY + 100) {
          setActiveSection(item.href);
          return;
        }
      }
      setActiveSection("#work");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(href: string) {
    setActiveSection(href);
    isScrollingTo.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isScrollingTo.current = false;
    }, 800);
  }

  function getLinkClass(href: string) {
    if (activeSection === href) {
      return "font-headline text-xs font-bold uppercase tracking-tighter text-primary-fixed";
    }
    return "font-headline text-xs font-bold uppercase tracking-tighter text-on-surface opacity-60 hover:text-primary-container hover:opacity-100";
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/10 bg-[#080808]/70 shadow-[0_10px_40px_rgba(233,196,0,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <div className="font-headline text-lg font-black tracking-widest text-primary-container md:text-xl">
          {siteContent.brand}
        </div>
        <div className="hidden gap-12 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={getLinkClass(item.href)}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <a
            className="whitespace-nowrap rounded-md bg-primary-container px-7 py-3 font-label text-[10px] font-bold uppercase tracking-widest text-on-primary-container transition-colors hover:bg-primary-fixed"
            href="#contact"
          >
            Send Message
          </a>
        </div>
      </div>
    </nav>
  );
}
