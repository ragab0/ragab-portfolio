import Hero from "@/components/Hero";
import WaveDivider from "@/components/dividers/WaveDivider";
// import DiagonalDivider from "@/components/dividers/DiagonalDivider";
import ArrowButton from "@/components/ArrowButton";
import Skills from "@/components/Skills";
// import Work from "@/components/Work";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Ragab Eid - Software Developer Portfolio",
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
    <div className="flex flex-col">
      <div className="relative">
        <Hero />
        <div className="relative -translate-y-20 z-30">
          <ArrowButton />
        </div>
        <WaveDivider />
      </div>
      <Skills />
      {/* <DiagonalDivider nextColor="hsl(var(--bg-tertiary))" /> */}
      {/* <Work /> */}
      {/* <WaveDivider /> */}
      <Contact />
    </div>
  );
}
