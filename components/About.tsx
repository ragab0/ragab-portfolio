"use client";
import Link from "next/link";
import Image from "next/image";
import ragab from "@/assets/avatars/Ragab.webp";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Docker",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-aboutBg">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0" style={{ top: "200px" }}>
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right_bottom,var(--section-background-glow-from),var(--section-background-glow-via),var(--section-background-glow-to))] rounded-lg blur-3xl"
          style={{ animation: "pulse 4s ease-in-out infinite" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto max-lg:px-6">
        {/* Section Title */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-primary">About </span>
            <span className="text-textPrimary">Me</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-transparent mx-auto lg:mx-0 rounded-full"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Text */}
          <div className="lg:col-span-7 space-y-8 text-textSecondary text-lg leading-relaxed">
            <div className="space-y-4">
              <p>
                Hello! I'm{" "}
                <span className="text-textPrimary font-semibold border-b-2 border-primary/30">
                  Ragab Eid
                </span>
                , a dedicated software developer based in Egypt. My passion for
                web development started with a curiosity about how things work
                on the internet, which led me to dive deep into building
                interactive and high-performance applications.
              </p>
              <p>
                Today, I specialize in architecting scalable solutions that
                blend technical excellence with user-centric design. My
                expertise covers the entire stack, from building dynamic user
                interfaces with
                <span className="text-textPrimary"> React.js</span> and{" "}
                <span className="text-textPrimary">Next.js</span> to developing
                robust backends with{" "}
                <span className="text-textPrimary">Node.js</span>.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-textPrimary font-semibold">
                Technologies I work with:
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-1 text-sm bg-primary/10 border-primary/20 hover:bg-primary/20 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-sm hover:bg-primary/10 transition-colors duration-300 font-mono"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right Column: Animated Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
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
    </section>
  );
}
