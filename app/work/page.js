'use client';
import VanillaTilt from "vanilla-tilt";
import { useState, useEffect } from "react";
import { projectsApi } from "@/assets/data/projectsApi";
import { appsApi } from "@/assets/data/appsApi";
import Projects from "./Projects";
import Apps from "./Apps";
import "./work.css";

export default function page() {
    /**
   * Main Source is github cards;
   * But in my way :D;
   */

    const combination = [
      {
        name: "my projects",
        Comp: Projects,
        data: projectsApi
      }, {
        name: "simplest apps",
        Comp: Apps,
        data: appsApi
      }
    ]
    const [currentComp, setCurrentComp] = useState(combination[0]);
  
  return (
    <main className="work-page max-w-7xl rounded-md">
      <section className=" text-center py-16 mb-16 ">
        <h1>
          {"{"} my <span>work</span> {"} "} 
          <span className=" max-lg:block">;</span>
        </h1>
        <div>
          <p>See all my real projects and some of my latest apps that i was learn on.</p>
          <p>You also can get on the source code on github.</p>
          <br />
        </div>
        <ul className="mx-auto flex items-center gap-2 w-fit border-current">
          {
            combination.map((c, i) => (
              <li key={i}
                  onClick={(e) => setCurrentComp(c)}
                  className={`${c.name === currentComp.name && 'title !px-4'} !mb-0 !p-2 flex cursor-pointer`}    
              >
                <h4 className=" text-current">{c.name}</h4>
              </li>
            ))
          }
        </ul>
      </section>
      {
        combination.map(({name, Comp, data}, i) => (
          name === currentComp.name && <Comp key={i} data={data} />
        ))
      }
    </main>
  )
}
