"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { links } from "@/assets/data/data";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Dev Notice */}
      <div className="bg-primary/10 border-b border-primary/20 py-2 text-center text-[10px] md:text-xs text-textSecondary px-6 relative z-50">
        This website is under development (Oct 25 to 10 Nov). Access the old
        website:{" "}
        <a
          href="https://ragab-portfolio-git-legend-ragab0s-projects.vercel.app/"
          className="text-primary hover:underline ml-1"
        >
          https://ragab-portfolio-git-legend-ragab0s-projects.vercel.app/
        </a>
      </div>

      <div
        className={cn(
          "w-full transition-all duration-300 px-6 relative z-50",
          scrolled || isOpen
            ? "bg-background/80 backdrop-blur-md py-4 shadow-lg"
            : "bg-transparent py-8",
        )}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link
            href="#home"
            className="text-2xl font-bold text-textPrimary z-[60]"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-primary">Ragab</span>.
          </Link>

          {/* Desktop Nav */}
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
                href="https://drive.google.com/file/d/1AILE8hj8UjYLoPNA_rwxsYmzgA-ARMhJ/view?usp=sharing"
                className="border border-primary text-primary px-4 py-2 rounded-sm hover:bg-primary/10 transition-colors duration-300"
              >
                Resume
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary z-[60] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none translate-x-full",
        )}
      >
        <ul className="flex flex-col items-center gap-8 font-mono text-lg">
          {links.map(({ name, router }, i) => (
            <li
              key={i}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Link
                href={router}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "capitalize transition-colors duration-300 flex flex-col items-center",
                  activeHash === router ? "text-primary" : "text-textSecondary",
                )}
              >
                <span className="text-primary text-sm mb-1">0{i + 1}.</span>
                {name}
              </Link>
            </li>
          ))}
          <li
            className="mt-4 animate-fade-up"
            style={{ animationDelay: `${links.length * 0.1}s` }}
          >
            <Link
              href="https://drive.google.com/file/d/1AILE8hj8UjYLoPNA_rwxsYmzgA-ARMhJ/view?usp=sharing"
              className="border border-primary text-primary px-10 py-4 rounded-sm hover:bg-primary/10 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
