"use client";
import Link from "next/link";
import socials from "@/assets/data/socials-data";
import Image from "next/image";
import ragab from "@/assets/avatars/Ragab.webp";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center min-h-[calc(100vh_-_60px)] relative overflow-hidden bg-heroBg max-lg:pt-[000px]"
    >
      <div className="max-w-6xl mx-auto max-lg:px-6 h-full">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center h-full lg:pt-20 relative z-10">
          {/* Left Content */}
          <div className="space-y-6 pt-2 relative z-30 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-primary font-mono text-lg tracking-wider animate-fade-in">
                Salamun Alaykum,
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-textPrimary tracking-tight">
                I'm <span className="text-primary">Ragab Eid</span>
              </h1>
            </div>

            <p className="max-w-xl text-lg md:text-xl text-textSecondary leading-relaxed mx-auto lg:mx-0">
              I am a{" "}
              <span className="text-textPrimary font-semibold">
                skilled web developer
              </span>{" "}
              based in Egypt, specializing in creating interactive,
              high-performance web applications. Let's build something
              exceptional together.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-6 pt-4">
              {socials.map(({ name, link, Ico }, i) => (
                <Link
                  key={i}
                  href={link}
                  target="_blank"
                  aria-label={name}
                  className="text-textMuted hover:text-primary transition-colors duration-300 transform hover:-translate-y-1"
                >
                  <Ico className="w-8 h-8" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Hero Avatar (Desktop) */}
          {/* <HeroAvatar /> */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-primary/20 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute -inset-4 border border-primary/10 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-navy/50 border border-white/10 backdrop-blur-sm shadow-2xl">
                <Image
                  src={ragab}
                  alt="Ragab Eid"
                  fill
                  className="object-cover object-top transition-all duration-700 group-hover:scale-110"
                  placeholder="blur"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-bgTertiary/50 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
