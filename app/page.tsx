import Hero from "@/components/Hero";
import WaveDivider from "@/components/dividers/WaveDivider";
// import DiagonalDivider from "@/components/dividers/DiagonalDivider";
import ArrowButton from "@/components/ArrowButton";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
// import Work from "@/components/Work";
import Contact from "@/components/Contact";
import ZigzagDivider from "@/components/dividers/ZigzagDivider";

export const metadata = {
  title: "Ragab Eid | Software Developer Portfolio",
  description:
    "Welcome to Ragab Eid's portfolio. Discover my expertise in web development, software engineering, and building exceptional digital experiences.",
  openGraph: {
    title: "Ragab Eid | Software Developer Portfolio",
    description:
      "Welcome to Ragab Eid's portfolio. Discover my expertise in web development and software engineering.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="home flex flex-col">
      <div className="relative">
        <Hero />
        <div className="relative -translate-y-20 z-30">
          <ArrowButton />
        </div>
        <WaveDivider />
      </div>
      <div className="relative">
        <Skills />
        <ZigzagDivider transition="secondary-to-main" />
      </div>
      <div className="relative">
        <Journey />
        {/* <WaveDivider /> */}
      </div>

      {/* <Work /> */}
      {/* <WaveDivider /> */}
      <Contact />
    </div>
  );
}
