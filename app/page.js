import Link from "next/link";
import Ragab0 from "@/assets/svgs/RagabBig";
import ragab1 from "@/assets/ragab-picture.jpg";
import ragab2 from "@/assets/ragab-eid.jpg";
import Image from "next/image";

export const metadata = {
  title: "Ragab Eid - Software Developer Portfolio | Home",
  description:
    "Welcome to Ragab Eid's portfolio. Discover my expertise in web development, software engineering, and building exceptional digital experiences.",
  openGraph: {
    title: "Ragab Eid - Software Developer Portfolio",
    description:
      "Welcome to Ragab Eid's portfolio. Discover my expertise in web development and software engineering.",
    url: "https://ragab.vercel.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="home-page lg:mt-32 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-16">
      <div className="mt-16 lg:mt-0 text-center lg:text-start">
        <p className="mb-4 text-[#64ffda] font-mono">Salamun Alaykum,</p>
        <h1>
          I'm <span>Ragab Eid</span>
        </h1>
        <p className="max-w-lg mt-8 mb-12 text-current">
          I am a skilled web developer based in Egypt, specializing in creating
          interactive, high-performance web applications. Let's know more about
          me!
        </p>
        <Link href="/about" aria-label="about me" className="btn-primary">
          About me
        </Link>
      </div>
      <div className="max-md:mx-12 shadow-[12px_12px_5px_0] text-lightestNavy">
        {/* <ragab0 className="w-full h-full max-w-[400px]" /> */}
        <Image
          alt="ragab-eid picture"
          src={ragab1}
          className="w-full h-full max-w-[400px] rounded-sm"
        />
        <img />
      </div>
    </div>
  );
}
