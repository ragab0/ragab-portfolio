"client site"
import Github from "@/assets/svgs/socials/MdiGithub";
import Image from "next/image"
import Link from "next/link";
import { useEffect } from "react";

export default function Apps({data: datas}) {

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
    datas.map((data, j) => (
      <section key={j} className="apps grid gap-8 place-content-center mb-32">
        {
          data.map(({name, description, srcImg, link, gitLink}, i) => (
            <figure key={i} className=" bg-gray-100/50 shadow-md dark:bg-black rounded-md overflow-hidden w-full max-w-[550px] mx-auto  grid grid-rows-[auto,1fr]"> 
              <Link href={link || "#"} target="_blank" className=" h-[300px] overflow-hidden bg-red-400">
                {
                  srcImg 
                  && 
                  <Image alt={name.toLocaleLowerCase()} src={srcImg} className="min-w-full min-h-full object-cover pointer-events-none" />
                }
              </Link>
              <figcaption className="p-4 pb-0">
                <h4>{name}</h4>
                <p className=" my-2">{description}</p>
              </figcaption>
              <div className="flex justify-between items-end px-4 py-2 border-t-2 dark:border-slate-800 font-bold">
                <Link href={gitLink || "#"} className="flex items-end hover:opacity-80"><Github width={30} className="block" /> Source code</Link>
                <span className="italic opacity-50">(#{String(i+1).padStart(String(data.length).length, 0)} / {data.length})</span>
              </div>
            </figure>
          ))
        }
      </section>
    ))
  )
}
