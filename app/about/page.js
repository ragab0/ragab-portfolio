import "./page.css";
import socials from "@/assets/data/socials";
import Link from "next/link";
import Who from "@/components/Who";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Ragab from "@/assets/svgs/Ragab";

export default function AboutPage() {
  return (
    <div className="about-page ">
      <header className="md:sticky md:top-12 left-0 max-md:mb-14  mx-auto">
        <Ragab className="w-[200] h-[200px] md:h-[300px] max-md:rounded-full" />
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
            href="https://ragab0.github.io/Ragab-Resume/"
            className="btn-primary w-full block text-center"
          >
            Resume
          </Link>
        </h3>
      </header>
      <main className="about-paillers">
        <Who />
        <Experience />
        <Education />
        <Skills />
      </main>
    </div>
  );
}
