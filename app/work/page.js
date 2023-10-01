import Projects from "@/components/Projects";
import "./work.css";


export default function WorkPage() {
  return (
    <main className="work-page max-w-7xl rounded-md">
      <section className=" text-center py-16 mb-16 ">
        <h1>
          {"{"} my <span>work</span> {"} "} 
          <span className=" max-lg:block">;</span>
        </h1>
        <div>
          <p>See my latest projects</p>
          <p>You also can get on the source code on github.</p>
          <br />
        </div>
      </section>
      <Projects />
    </main>
  )
}
