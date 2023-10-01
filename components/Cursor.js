'use client';
import { useEffect } from "react";


export default function Cursor() {
  function cursorHandler(e, cursor) {
    if (document.documentElement.classList.contains("dark")) {
      cursor.style.setProperty("background-image", `radial-gradient(
        600px at ${e.clientX + "px"} ${e.clientY + "px"}, rgb(55 130 61 / 5%), transparent 80%`);
    }
  }

  useEffect(function() {
    const cursor = document.querySelector("#cursor");
    document.onmousemove= (e) => cursorHandler(e, cursor);
    return function() {
      document.removeEventListener("mousemove", cursorHandler);
    }
  }, [])


  return (
    <span id="cursor" className='fixed w-full h-full left-0 top-0 pointer-events-none'></span>
  )
}


// Another way you can use tailwind with it;
// cursor.style.setProperty("--x", e.clientX + "px");
// cursor.style.setProperty("--y", e.clientY + "px");

// poe.com :ITs Examples not the best SO:
// https://www.youtube.com/watch?v=nMGVwP3ww2M :A good video that will provide you with the basic;
// https://codemyui.com/flashlight-mouse-pointer/ :A good article has the main idea;
// Main source is https://brittanychiang.com/ V5; :A better way beside the prev art;