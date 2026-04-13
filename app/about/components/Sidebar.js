import Link from "next/link";
import socials from "@/assets/data/socials";
import Ragab from "@/assets/svgs/Ragab";
import ragab from "@/assets/ragab-eid.jpg";
import ragab2 from "@/assets/ragab-eid.jpg";
import ragab3 from "@/assets/ragab-picture.jpg";

import Image from "next/image";

export default function Sidebar() {
  return (
    <header className="md:sticky md:top-12 left-0 max-md:mb-14 mx-auto">
      {/* <Ragab className="w-[200] h-[200px] md:h-[300px] max-md:rounded-full" /> */}
      <div className="shadow-[0px_0px_5px_12px] text-lightestNavy">
        <Image
          alt="Ragab Eid personal sidebar picture"
          src={ragab3}
          className="aspect-square object-cover object-top"
          placeholder="blur"
        />
      </div>
      <ul className="items-list my-8 flex mx-auto w-fit gap-2">
        {socials.map(({ name, link, Ico }, i) => (
          <li key={i}>
            <Link
              target="_blank"
              href={link}
              aria-label={name}
              className="block p-2"
            >
              <Ico />
            </Link>
          </li>
        ))}
      </ul>
      <h3 alt="Ragab-Resume">
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/1AILE8hj8UjYLoPNA_rwxsYmzgA-ARMhJ/view?usp=sharing"
          className="btn-primary w-full block text-center"
        >
          Resume
        </Link>
      </h3>
    </header>
  );
}
