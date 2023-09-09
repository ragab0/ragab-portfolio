import Image from 'next/image';
import Ragab from '@/assets/imgs/green-img.jpeg';
import skills from '@/assets/data/skills';
import experience from '@/assets/data/experience';


import socials from '@/assets/data/socials';
import './about.css';
import Link from 'next/link';


export default function page() {
  return (
    <div className="about-page dark:max-md:pt-0">
      <header className='md:sticky top-12 left-0 max-md:mb-14  mx-auto'>
        <div className='ragab-img w-[200] h-[200px] md:h-[300px] max-md:rounded-full shadow-[4px_4px_0_0] max-md:shadow-[0px_0px_0_5px]'>
          {/* Using the same image for saving internet bandwitch TO introduce a great user-expercine and a better optimization web  */}
          <Image alt="Ragab eid, ragab0" 
                 src={Ragab} 
                 className='w-full h-full scale-[3.0] translate-x-[33px] translate-y-[130px] md:translate-x-[40px] md:translate-y-[200px]' 
          />
        </div>
        <ul className='items-list my-8 flex mx-auto w-fit gap-2'>
          {
            socials.map(({name, link, Ico}, i) => (
              <li key={i}>
                <Link target="_blank" href={link} 
                   aria-label={name} 
                   className='block p-2'
                >
                  <Ico />
                </Link>
              </li>
            ))
          }
        </ul>
        <h3 alt='ragab resume'>
          <Link target='_blank' href="https://ragab0.github.io/Ragab-Resume/" className="btn-primary w-full block text-center">Resume</Link>
        </h3>
      </header>
      <main className='about-paillers'>
        <section>
          <header><h3>Who is Ragab ?</h3></header>
          <article>
            <p>Hello there, he's a highly motivated web developer, he has different skills in web development 
              enabling him creating beautiful and coll web applications. He worked on different projects 
              such as e-commerce websites, e-learning platfroms, beautiful landing pages, and some simple game web apps. 
            </p>
            <br />
            <p>
              As Ragab, I love to work on complex projects that enabling me imporoving from mymself, gaining new expperience, 
              and also to make the best use of waht i have.
              So, Please <Link href="/contact" className=' font-bold'>mail me</Link> ans ask for a video call if you have such as an opportunity and let us know more about each other :)
            </p>
          </article>
        </section>
        <section>
          <header><h3>Experience</h3></header>
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
        <section>
          <header><h3>Education</h3></header>
          <article>
            <div className='art-content'>
              <h4 className='title'>Bachelor Of FAC: Faculity Of Commerce</h4>
              <p>Cairo university - Giza - Egypt</p>
              <data>Undergraduate, 2022 - 2026 (As expected إنشاء ٱللَّٰه)</data>
            </div>
          </article>
        </section>
        <section>
          <header><h3>Skills</h3></header>
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
      </main>
    </div>
  )
}