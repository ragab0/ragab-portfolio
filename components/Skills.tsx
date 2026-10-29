"use client";

import Image from "next/image";
import {
  CATEGORIES,
  ALSO_EXPERIENCED_WITH,
  type Skill,
  type Category,
} from "@/assets/data/skills-data";

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div
      className="rounded-lg border p-6 bg-card/40 border-border transition-all duration-300 shadow-sm animate-fade-up flex flex-col items-center justify-center cursor-default hover:border-border-hover"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-center flex flex-col items-center justify-center gap-5">
        <Image
          src={skill.icon}
          alt={`${skill.name} icon`}
          width={52}
          height={52}
          className="inline-block h-12 w-12 object-contain"
        />
        <h4 className="text-sm font-medium text-textSecondary">{skill.name}</h4>
      </div>
    </div>
  );
}

function CategorySection({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-start lg:justify-between w-full">
      {/* Left Sidebar */}
      <div className="self-start xl:px-0 pr-8 md:w-[200px] w-full shrink-0 mb-8 md:mb-0">
        <h4 className="font-mono text-xs uppercase tracking-widest opacity-70 mb-4 font-light text-textSecondary">
          <div className=" font-mono inline-block whitespace-pre-wrap tracking-tight">
            <span className="inline" style={{ color: "inherit" }}>
              {`{ ${index + 1} }`}
            </span>
            <span
              className="ml-1 inline-block animate-blink"
              style={{ opacity: 0.8 }}
            >
              _
            </span>
          </div>
        </h4>
        <div>
          <h5 className="font-medium text-2xl mb-4 xl:leading-5 text-textPrimary">
            <span className="inline-block word">{category.label}</span>
          </h5>
          <p className="text-sm text-textSecondary/60 leading-relaxed max-w-[180px]">
            {category.summary}
          </p>
        </div>
      </div>

      {/* Right Grid */}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 flex-1">
        {category.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-aboutBg">
      {/* Soft ambient glow */}
      {/* <div
        aria-hidden
        className="about-gradient pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-10"
      /> */}

      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-24 text-center">
          <h2 className="text-textPrimary text-4xl md:text-5xl font-bold mb-6 mx-auto text-center">
            Technical Stack
          </h2>
          <p className="max-w-2xl text-lg text-textSecondary leading-relaxed mx-auto text-center">
            Technologies and tools I use to bring ideas to life
            {/* build high-performance web applications. */}
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-32">
          {CATEGORIES.map((category, index) => (
            <CategorySection
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Extra Skills */}
        <div className="flex flex-col md:flex-row md:items-start lg:justify-between w-full mt-32 pt-32 border-t border-border">
          <div className="self-start xl:px-0 pr-8 md:w-[200px] w-full shrink-0 mb-8 md:mb-0">
            <h4 className="font-mono text-xs uppercase tracking-widest opacity-70 mb-4 font-light text-textSecondary">
              <div className="font-mono inline-block whitespace-pre-wrap tracking-tight">
                <span className="inline" style={{ color: "inherit" }}>
                  {`{ + }`}
                </span>
                <span
                  className="ml-1 inline-block animate-blink"
                  style={{ opacity: 0.8 }}
                >
                  _
                </span>
              </div>
            </h4>
            <div>
              <h5 className="font-medium text-2xl mb-8 xl:leading-5 text-textPrimary">
                <span className="inline-block word">Others</span>
              </h5>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 flex-1 pt-2">
            {ALSO_EXPERIENCED_WITH.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 border border-border text-textSecondary text-sm font-medium hover:border-border-hover transition-all duration-300 bg-card/30 rounded-md animate-fade-up cursor-default"
                style={{ animationDelay: `${(index + 5) * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
