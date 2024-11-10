"use client";
import Sun from "@/assets/svgs/sun";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { links } from "@/assets/data/data";

export default function Navbar() {
  const currentPath = usePathname();
  const [isDark, setDark] = useState(
    typeof window !== "undefined" &&
      (JSON.parse(localStorage.getItem("isDark")) ?? false)
  );

  useEffect(() => {
    // document.documentElement.classList = isDark ? "dark" : "";
    document.documentElement.classList = "dark";
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  function themeHandler(e) {
    setDark((old) => !old);
  }

  return (
    <nav className="mb-16 z-100">
      <div className="py-8 flex justify-center items-center gap-2">
        <button onClick={themeHandler}>
          <Sun width={48} className="sun block hover:text-white" />
        </button>
      </div>
      <ul className="items-list flex justify-between xs:justify-center xs:gap-4 font-bold text-[8px] sm:text-[10px]">
        {links.map(({ name, router }, i) => {
          return (
            <li key={i} className={`${currentPath === router ? "active" : ""}`}>
              <Link href={`${router}`} className="capitalize p-2 xs:p-4">
                {`{ ${name} }`},
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
