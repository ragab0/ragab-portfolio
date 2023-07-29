"client site"
import Github from "@/assets/svgs/socials/MdiGithub";
import Image from "next/image"
import { useEffect } from "react";

export default function Apps({data}) {

  // useEffect(function() {
  //   const apps = document.querySelectorAll('.projects figure');
  //   VanillaTilt.init(apps, {
  //     max: 3,
  //     perspective: 700,
  //     speed: 700,
  //   })
  // }, [])
    

  return (
    <>
      <span className="scrolling"></span>
      <section className="projects mx-auto">
        {
          data.map(({name, description, skills, srcImg, link}, i) => (
            <figure key={i} className="flex my-16 gap-4 overflow-hidden rounded-md p-4 hover:bg-gray-100 dark:hover:bg-emerald-900/25 duration-300 ease-out"> 
              <a href={link || "#"} className="w-2/3 transition-none self-center overflow-hidden rounded-[inherit] h-[450px] bg-red-400 text-current">
                <Image alt={name.toLocaleLowerCase()} src={srcImg} className="min-w-full min-h-full object-cover pointer-events-none" />
              </a>
              <figcaption className="py-2 px-4 max-w-md ">
                  <h4 className=" text-2xl">{name}</h4>
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
                  <a href="#" className="flex items-end hover:opacity-80 font-bold ">
                    <Github width={30} className="block" /> Source code
                  </a>
              </figcaption>

            </figure>
          ))
        }
      </section>
    </>
  )
}
