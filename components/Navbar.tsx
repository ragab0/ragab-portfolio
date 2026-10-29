"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { links } from "@/assets/data/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "work", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveHash(`#${currentSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="bg-primary/10 border-b border-primary/20 py-2 text-center text-[10px] md:text-xs text-textSecondary px-6">
        This website is under development (Oct 25 to 10 Nov). Access the old
        website:{" "}
        <a
          href="https://vercel.com/ragab0s-projects/ragab-portfolio/3hp4hNFzngyC4kvsc9u7wkvT9N9s"
          className="text-primary hover:underline ml-1"
        >
          https://vercel.com/ragab0s-projects/ragab-portfolio/3hp4hNFzngyC4kvsc9u7wkvT9N9s
        </a>
      </div>
      <div
        className={cn(
          "w-full transition-all duration-300 px-6",
          scrolled
            ? "bg-background/80 backdrop-blur-md py-4 shadow-lg"
            : "bg-transparent py-8",
        )}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="#home" className="text-2xl font-bold text-textPrimary">
            <span className="text-primary">Ragab</span>.
          </Link>

          <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
            {links.map(({ name, router }, i) => (
              <li key={i}>
                <Link
                  href={router}
                  className={cn(
                    "capitalize transition-colors duration-300",
                    activeHash === router
                      ? "text-primary"
                      : "text-textSecondary hover:text-primary",
                  )}
                >
                  <span className="text-primary mr-1">0{i + 1}.</span>
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="border border-primary text-primary px-4 py-2 rounded-sm hover:bg-primary/10 transition-colors duration-300"
              >
                Resume
              </Link>
            </li>
          </ul>

          {/* Mobile menu could be added here */}
        </div>
      </div>
    </nav>
  );
}
