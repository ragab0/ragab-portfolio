"use client";
import Image from "next/image";
// import photo1 from "@/assets/avatars/Avatar1.avif";
// import photo1 from "@/assets/avatars/ragab-eid.webp";
import photo1 from "@/assets/avatars/Ragab.webp";

const roles = [
  { label: "Software Dev" },
  { label: "Frontend Dev" },
  { label: "Full-Stack Dev" },
];

export default function HeroAvatar() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mr-0">
      {/* Animated gradient background circle (behind everything) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right_bottom,var(--section-background-glow-from),var(--section-background-glow-via),var(--section-background-glow-to))] rounded-full blur-3xl opacity-30 z-0 animate-pulse"></div>
      {/* Large gradient background circle positioned behind the photo */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-radial from-[var(--section-background-glow-from)] via-[var(--section-background-glow-via)] to-[var(--section-background-glow-to)] border-2 border-foreground/10 rounded-full z-10 shadow-circle"></div>
      {/* Hero Photo - full image, positioned to overflow the circle */}
      <div className="relative z-20 bottom-0 mt-10 photo-hover-container cursor-pointer group">
        <div className="relative w-full aspect-[4/5]">
          <Image
            src={photo1}
            alt="Ragab Eid - Full-Stack Developer"
            fill
            priority
            className="object-contain object-bottom transition-all duration-500 photo-default"
          />
        </div>
      </div>
    </div>
  );
}
