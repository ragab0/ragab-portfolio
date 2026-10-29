"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Github from "@/assets/svgs/socials/MdiGithub";
import {
  featuredProjectsApi,
  moreProjectsApi,
} from "@/assets/data/projectsApi";

export default function Work() {
  const [showMore, setShowMore] = useState(false);
  const displayMore = showMore ? moreProjectsApi : moreProjectsApi.slice(0, 3);

  return (
    <section id="work" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-primary">My </span>
            <span className="text-textPrimary">Work</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto lg:mx-0"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24">
          {featuredProjectsApi.map((project, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="flex-1 w-full group relative">
                <Link
                  href={project.link || "#"}
                  target="_blank"
                  className="block relative aspect-video overflow-hidden rounded-lg bg-bgTertiary"
                >
                  <Image
                    src={project.srcImg}
                    alt={project.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </Link>
              </div>
              <div
                className={`flex-1 space-y-4 text-center ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
              >
                <p className="text-primary font-mono text-sm">
                  Featured Project
                </p>
                <h3 className="text-3xl font-bold text-textPrimary">
                  {project.name}
                </h3>
                <div className="bg-bgSecondary p-6 rounded-lg shadow-xl relative z-10 lg:-mx-4">
                  <p className="text-textSecondary">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 ${i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"} justify-center font-mono text-xs text-textMuted`}
                >
                  {project.coreSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"} justify-center`}
                >
                  {project.gitLinks?.map((gitLink, index) => (
                    <Link
                      key={index}
                      href={gitLink}
                      target="_blank"
                      className="text-textPrimary hover:text-primary transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-32">
          <h3 className="text-3xl font-bold text-center mb-12 text-textPrimary">
            Other Noteworthy Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayMore.map((project, i) => (
              <div
                key={i}
                className="bg-bgSecondary p-8 rounded-lg border border-primary/10 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex gap-3">
                    {project.gitLinks?.map((gitLink, index) => (
                      <Link
                        key={index}
                        href={gitLink}
                        target="_blank"
                        className="text-textSecondary hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    ))}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-textPrimary mb-2">
                  {project.name}
                </h4>
                <p className="text-textSecondary text-sm flex-grow">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-3 mt-6 font-mono text-[10px] text-textMuted">
                  {project.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="border border-primary text-primary px-8 py-3 rounded-sm hover:bg-primary/10 transition-colors duration-300 font-mono"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
