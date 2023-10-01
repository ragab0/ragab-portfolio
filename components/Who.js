import Link from "next/link";


export default function Who() {
  return (
    <section>
      <header><h3>Who is Me ?</h3></header>
      <article>
        <p>
          Hello there, I'm Ragab, a software developer specillized in web development. I aim to provide great and 
          un-believable experience for my clients. I have many skills that enables me create interactive and cool 
          web applications, build accessible and user-friendly websites as I worked on various projects such as 
          e-commerce websites, e-learning platfroms, beautiful landing pages, and some simple game web apps.
        </p>
        <br />
        <p>
          I'm Commited to continous growth, Know new people and learn from each other, I love to work on different 
          and complex products, enabling me imporove from myself, gaining new experience in order to
          make the best use of waht i have, and leave an un-forgotten impression.
        </p>
        <br />
        <p>
          Have you such as an opportunity? please <Link 
            href="/contact" className='font-bold'
          >mail me</Link> and ask for a video call, and let us know more about each other :)
        </p>
      </article>
    </section>
  )
}