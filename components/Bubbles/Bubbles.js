import Link from "next/link";
import "./Bubbles.css";


export default function Bubbles({text="Loading", error=false}) {
  return (
    <section className={`bubbles-section mt-32 text-center ${error ? "bubbles-section--red" : ""}`}>
      {
        [...Array(5)].map((_, i) => (
          <div key={i} className="bubbles relative flex justify-center gap-2 mb-2" style={{animationDelay:i*2000 + 200 + "ms"}}>
            {
              text.split("").map((char, j) => (
                <span key={j} 
                      className={`w-6 h-6 text-center rounded-full text-slate-800 cursor-pointer hover:opacity-80 active:opacity-0 ${error ? "bg-red-400" : "bg-mainColor"}`}
                      style={{animationDelay: ((i*j* Math.random()*1000 ) || Math.random()*1000 || (133)) + "ms"}}>{char}</span>
              ))
            }
          </div>
        ))
      }
      {
        error && <Link href="/" className={`${error ? "btn-primary-red" : "btn-primary"} block w-fit mx-auto my-16`}>Go home !</Link>
      }
    </section>
  )
}
