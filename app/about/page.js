import "./page.css";
import Who from "./components/Who";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "About Ragab Eid - Software Developer & Web Developer",
  description:
    "Learn more about Ragab Eid, a passionate software developer with expertise in building scalable web applications. Discover my journey, skills, and experience.",
  openGraph: {
    title: "About Ragab Eid - Software Developer",
    description:
      "Learn about Ragab Eid's journey, skills, and experience in software development.",
    url: "https://ragab.vercel.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="about-page ">
      <Sidebar />
      <main className="about-paillers">
        <Who />
        <Experience />
        <Education />
        <Skills />
      </main>
    </div>
  );
}
