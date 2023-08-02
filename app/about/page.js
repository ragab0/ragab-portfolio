import Image from 'next/image';
import Ragab from '@/assets/imgs/green-img.jpeg';
import skills from '@/assets/data/skills';
import experience from '@/assets/data/experience';

import './about.css';
import socials from '@/assets/data/socials';

export default function page() {
  // bg-zinc-200 GOOD;
  // #e4e4e7
  return (
    <div className="about-page dark:max-md:pt-0">
      <header className='md:sticky top-12 left-0 max-md:mb-14'>
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
                <a href={link} 
                   aria-label={name} 
                   className='block p-2'
                >
                  <Ico />
                </a>
              </li>
            ))
          }
        </ul>
        <h3 alt='ragab resume'>
          <button className='btn-primary w-full'>
            <a href="https://ragab0.github.io/Ragab-Resume/">Resume</a>
          </button>
        </h3>
      </header>
      <main className='about-paillers'>
        <section>
          <header><h3>Who is Ragab ?</h3></header>
          <article>
            <p>I'm a passionate software developer, specialized in web development, I build beautiful, dynamic,
              and user-friendly web applications with great user-experience.
            </p>
            <br />
            <p>
              I've been a few years in programming. In this duration I've learned a lot of technologies at my field
              to build cool products. So, please don't hesitate to <a href='/contact' className=' font-bold'>contact</a> me if you need a beautiful web application,
              or if you have an opportunity that matches my skills.
            </p>
          </article>
        </section>
        <section>
          <header><h3>Experience</h3></header>
          <div className='content'>
            {
              experience.map(({title, name, duration}) => (
                <article>
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
            <ul className='skills mt-2 gap-3 bg-blend-difference z-[999999999] relative '>
              {
                skills.map(({name,LogoSrc}, i) => (
                  <li aria-label={name}>
                    <LogoSrc width={50} height={50} />
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