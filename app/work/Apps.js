"client site"
import Github from "@/assets/svgs/socials/MdiGithub";
import Image from "next/image"
import { useEffect } from "react";

export default function Apps({data}) {

  // const cards = document.querySelectorAll('.projects article');
  // VanillaTilt.init(cards, {
  //   max: 1,
  //   perspective: 700,
  //   speed: 1000,
  // })


  useEffect(function() {
    const apps = document.querySelectorAll('.apps figure');
    VanillaTilt.init(apps, {
      max: 10,
      perspective: 700,
      speed: 700,
    })
  }, [])
    

  return (
    <section className="apps grid  gap-8">
      {
        data.map(({name, description, srcImg, link}, i) => (
          <figure key={i} className=" bg-gray-100/50 dark:bg-black rounded-md overflow-hidden w-full max-w-[550px] mx-auto  grid grid-rows-[auto,1fr]"> 
            <a href={link || "#"} className=" h-[300px] overflow-hidden bg-red-400">
              {
                srcImg 
                && 
                <Image alt={name.toLocaleLowerCase()} src={srcImg} className="min-w-full min-h-full object-cover pointer-events-none" />
              }
            </a>
            <figcaption className="p-4 pb-0">
              <h4>{name}</h4>
              <p className=" my-2">{description}</p>
            </figcaption>
            <div className="flex justify-between items-end px-4 py-2 border-t-2 dark:border-slate-800 font-bold">
              <a href="#" className="flex items-end hover:opacity-80"><Github width={30} className="block" /> Source code</a>
              <span className="italic opacity-50">(#{String(i+1).padStart(String(data.length).length, 0)} / {data.length})</span>
            </div>
          </figure>
        ))
      }
    </section>
  )
}
