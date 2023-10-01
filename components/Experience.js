import experience from '@/assets/data/experience'


export default function Experience() {
  return (
    <section>
      <header>
        <h3>Experience</h3>
      </header>
      <div className='content'>
        {
          experience.map(({title, name, duration}, i) => (
            <article key={i}>
              <div>
                <h4 className='title'>{title}</h4>
                <p>{name}</p>
                <data>{duration}</data>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}
