"use client";
import Sun from "@/assets/svgs/sun";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/assets/data/data";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="mb-16 z-100">
      <div className="py-8 flex justify-center items-center gap-2">
        <button className=" cursor-not-allowed">
          <Sun width={48} className="sun block hover:text-white" />
          {/* <CurlyBrackets width={48} className=" fill-current" /> */}
          {/* <span className=" text-2xl">{"</>"}</span> */}
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
