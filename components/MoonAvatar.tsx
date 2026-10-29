"use client";
import Image from "next/image";
import ragab from "@/assets/avatars/ragab-eid.webp";

export default function MoonAvatar() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
      {/* Moon Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-bgTertiary to-primary/20 shadow-[0_0_50px_rgba(var(--primary),0.2)] animate-pulse"></div>
      
      {/* Avatar Container */}
      <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary/30 bg-bgSecondary">
        <Image
          alt="Ragab Eid"
          src={ragab}
          fill
          className="object-cover object-top scale-110"
          placeholder="blur"
        />
      </div>

      {/* Decorative Moon elements (optional) */}
      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/10 blur-xl"></div>
      <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-primary/5 blur-2xl"></div>
    </div>
  );
}
