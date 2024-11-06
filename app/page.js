import Link from "next/link";
import Ragab from "@/assets/svgs/Ragab";
import RagabBig from "@/assets/svgs/RagabBig";

export default function Home() {
  return (
    <div className="home-page lg:mt-32 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-16">
      <div className="mt-16 lg:mt-0 text-center lg:text-start">
        <p className="mb-4 text-secondColorLight">Salamu Alaykum,</p>
        <h1>
          {"{"} i&apos;m <span>ragab</span> eid {"} "}
          <span className=" max-lg:block">;</span>
        </h1>
        <p className="max-w-lg my-8 text-current">
          I am a skilled web developer based in Egypt, specializing in creating
          interactive, high-performance web applications. Let's know more about
          me!
        </p>
        <Link href="/about" aria-label="about me" className="btn-primary">
          About me
        </Link>
      </div>
      <div className="ragab-img max-md:mx-12">
        <RagabBig className="w-full h-full" />
      </div>
    </div>
  );
}
