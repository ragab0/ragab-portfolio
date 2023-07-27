export default function Projects({data}) {
  return (
    <section className="projects">
      {
        data.map((pro, i) => (
          <article key={i} className="card bg-slate-800 py-16 px-12 text-mainColor rounded-lg min-h-[300px]">
            <header>
              <p>
                GitHub Actions automates your build, test, and deployment workflow with simple and secure CI/CD.
              </p>
              <br />
              <p>Discover GitHub Actions </p>
            </header>
          </article>
        ))
      }
    </section>
  )
}
