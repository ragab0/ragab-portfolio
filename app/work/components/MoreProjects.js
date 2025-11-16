"use client";
import Image from "next/image";
import Link from "next/link";
import Github from "@/assets/svgs/socials/MdiGithub";
import { useState } from "react";

const size = 6;

export default function MoreProjects({ projects = [] }) {
  const [currentCount, setCurrentCount] = useState(size);

  function moreHandler() {
    setCurrentCount((o) => o + size);
  }

  function resetHandler() {
    setCurrentCount(size);
  }

  return (
    <section className="more-projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects
        .slice(0, currentCount)
        .map(({ name, description, skills, srcImg, link, gitLinks }, i) => (
          <figure
            key={i}
            className="flex flex-col w-full gap-4 overflow-hidden rounded-md
              bg-lightNavy duration-300 ease-out p-5 max-w-md mx-auto  shadow-cardShadow
              hover:-translate-y-2
              "
          >
            <Link
              href={link || "#"}
              target={link ? "_blank" : "_top"}
              className="transition-none self-center overflow-hidden rounded-md h-[250px] 
                 text-current"
            >
              <Image
                alt={name.toLocaleLowerCase()}
                src={srcImg}
                className="min-w-full min-h-full object-cover 
                  hover:scale-110"
              />
            </Link>
            <figcaption className="flex-1 grid grid-rows-[1fr_auto]">
              <div>
                <div className="flex items-end justify-between gab-2 mb-2">
                  <h3 className="mb-0">{name}</h3>
                  <div className="flex items-center gap-2">
                    {gitLinks.map((gitLink, i) => (
                      <Link
                        key={i}
                        href={gitLink || "#"}
                        target={gitLink ? "_blank" : "_top"}
                        className="flex items-end hover:opacity-80 font-bold "
                      >
                        <Github width={25} className="block" />
                        {!!i && `#${i + 1}`}
                      </Link>
                    ))}
                  </div>
                </div>
                <p className="text-lightSlate">{description}</p>
              </div>
              <div>
                <ul className="mt-6 flex gap-2 flex-wrap">
                  {skills.map((skill, i) => (
                    <li
                      className="rounded-full  pe-1 text-xs font-medium leading-5  cursor-pointer capitalize"
                      aria-label={skill}
                      key={i}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </figcaption>
          </figure>
        ))}
      <div className="self-end col-span-full text-center mt-4">
        {currentCount >= projects.length ? (
          <button className={`btn-primary`} onClick={resetHandler}>
            reset
            {/* {projects.length - size} */}
          </button>
        ) : (
          <button className={`btn-primary`} onClick={moreHandler}>
            see more {projects.length - currentCount}
          </button>
        )}
      </div>
    </section>
  );
}
