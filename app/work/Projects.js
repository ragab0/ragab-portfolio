import Github from "@/assets/svgs/socials/MdiGithub";
import Image from "next/image"
import Link from "next/link";
import { projectsApi } from "@/assets/data/projectsApi";

export default function Apps() {


  return (
    <>
      <span className="scrolling"></span>
      <section className="projects">
        {
          projectsApi.map(({name, description, skills, srcImg, link, gitLink, inProgress}, i) => (
            <figure key={i} className="flex my-16 gap-4 overflow-hidden rounded-md p-4 hover:bg-gray-100 dark:hover:bg-emerald-900/25 duration-300 ease-out"> 
              <Link href={link || "#"} target="_blank" className="transition-none self-center overflow-hidden rounded-[inherit] h-[450px] bg-red-400 text-current">
                <Image alt={name.toLocaleLowerCase()} src={srcImg} className="min-w-full min-h-full object-cover hover:scale-110" />
                {/* pointer-events-none  */}
              </Link>
              <figcaption className="py-2 px-4 max-w-md ">
                  <h4 className=" text-2xl">
                    <span>{name} </span>
                    {inProgress && <span className="cursor-wait text-[.75em] underline text-red-400">InProgress </span>}
                  </h4>
                  <div className="my-4">{description.map((e, i) => <p key={i} className=" mb-2">{e}</p>)}</div>
                  <ul className="my-4 flex gap-2 flex-wrap">
                    {skills.map((skill, i) => (
                      <li className="p-2 text-sm rounded-2xl cursor-pointer bg-gray-50 dark:bg-emerald-900/25 hover:!bg-transparent" 
                          aria-label={skill} key={i}
                      >
                        {skill}
                      </li>
                    )
                  )}
                  </ul>
                  <Link href={gitLink || "#"} className="flex items-end hover:opacity-80 font-bold ">
                    <Github width={30} className="block" /> Source code
                  </Link>
              </figcaption>
            </figure>
          ))
        }
      </section>
    </>
  )
}
