import "./page.css";
import Who from "./components/Who";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";

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
