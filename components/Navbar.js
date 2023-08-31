"use client";
import Moon from '@/assets/svgs/moon';
import Sun from '@/assets/svgs/sun';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


const links = [ 
  { 
    name: "home",
    router: "/",
  }, {
    name: "about",
    router: "/about",
  }, {
    name: "work",
    router: "/work",
  }, {
    name: "mail me",
    router: "/contact",
  }
]


export default function Navbar() {
  const currentPath = usePathname();
  const [isDark, setDark] = useState(
    (typeof window !== "undefined") && (JSON.parse(localStorage.getItem("isDark")) ?? false)
  )

  useEffect(() => {
    document.documentElement.classList = isDark ? "dark" : "";
    localStorage.setItem("isDark", isDark)
  }, [isDark])

  function themeHandler(e) {
    setDark(old => !old);
  }


  return (
    <nav className='mb-16 z-100'>
      <div className='h-32 flex justify-center items-center gap-2'>
        <button onClick={themeHandler}>
          <span className='sun w-16 hidden dark:block hover:text-white'><Sun /></span>
          <span className='moon w-16 block dark:hidden hover:text-black'><Moon /></span>
        </button>
      </div>
      <ul className='items-list flex justify-between xs:justify-center xs:gap-4 font-bold text-[10px] sm:text-xs'>
        {
          links.map(({name, router}, i) => {
            return (
              <li key={i} className={`${currentPath === router ? "active" : ""}`}>
                <Link href={`${router}`} 
                      className="capitalize p-2 xs:p-4"
                >
                  {`{ ${name} }`},
                </Link>
              </li>)
            }
          )
        }
      </ul>
    </nav>
  )
}
