import skills from '@/assets/data/skills'


export default function Skills() {
  return (
    <section>
      <header>
        <h3>Skills</h3>
      </header>
      <article>
        <h4 className='title'>Programming skills</h4>
        <ul className='skills mt-2 gap-3 bg-blend-difference relative '>
          {
            skills.map(({name,LogoSrc}, i) => (
              <li aria-label={name} key={i}>
                {LogoSrc && <LogoSrc width={50} height={50} />}
                <h4>{name}</h4>
              </li>
            ))
          }
        </ul>
      </article>
    </section>
  )
}
