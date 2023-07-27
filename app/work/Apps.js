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
    <section className="apps">
      {
        data.map(({name, description, srcImg}, i) => (
          <figure key={i} className=" bg-gray-100/50 dark:bg-black rounded-md w-full max-w-[550px] mx-auto overflow-hidden grid grid-rows-[auto,1fr]"> 
            <div className=" h-[300px] overflow-hidden bg-red-400">
              {
                srcImg 
                && 
                <Image alt={name.toLocaleLowerCase()} src={srcImg} className="min-w-full min-h-full pointer-events-none" />
              }
            </div>
            <figcaption className="p-4 flex flex-col justify-between">
              <h4 className="">{name}</h4>
              <p className="my-2">{description}</p>
              <div className="flex justify-between items-end font-bold">
                <a href="#" className="flex items-end"><Github width={30} className="block" /> Source code</a>
                <span className=" italic">(#{String(i+1).padStart(String(data.length).length, 0)} / {data.length})</span>
              </div>
            </figcaption>
          </figure>
        ))
      }
    </section>
  )
}
