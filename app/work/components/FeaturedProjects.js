import Image from "next/image";
import Link from "next/link";
import Github from "@/assets/svgs/socials/MdiGithub";

export default function FeaturedProjects({ projects }) {
  return (
    <section className="featured-projects">
      {projects.map(
        (
          {
            name,
            description,
            coreSkills,
            srcImg,
            link,
            inProgress,
            gitLinks = [],
          },
          i
        ) => (
          <figure
            key={i}
            className="flex my-16 gap-8 overflow-hidden lg:rounded-md p-4 -m-4
              hover:bg-lightNavy duration-300 ease-out"
          >
            <Link
              href={link || "#"}
              target={link ? "_blank" : "_top"}
              className="transition-none self-center overflow-hidden rounded-md h-[350px] 
                 text-current w-full md:w-1/2"
            >
              <Image
                alt={name.toLocaleLowerCase()}
                src={srcImg}
                className="min-w-full min-h-full object-cover 
                  hover:scale-110"
              />
            </Link>
            <figcaption className="w-full md:w-1/2 max-w-lg ">
              <h3>
                <span>{name} </span>
                {inProgress && (
                  <span className="cursor-wait text-[.75em] underline text-red-400">
                    InProgress{" "}
                  </span>
                )}
              </h3>
              <p>{description}</p>
              <ul className="my-4 flex gap-2 flex-wrap">
                {coreSkills.map((skill, i) => (
                  <li
                    className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 cursor-pointer
                    capitalize"
                    aria-label={skill}
                    key={i}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              {gitLinks.map((gitLink, i) => (
                <Link
                  key={i}
                  href={gitLink || "#"}
                  target={gitLink ? "_blank" : "_top"}
                  className="flex items-end hover:opacity-80 font-bold "
                >
                  <Github width={30} className="block" /> Source code
                  {!!i && i + 1}
                </Link>
              ))}
            </figcaption>
          </figure>
        )
      )}
    </section>
  );
}
