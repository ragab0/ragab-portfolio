import Image from 'next/image';
import Ragab from '@/assets/imgs/green-img.jpeg';
import socials from '@/assets/data/socials';
import Link from 'next/link';
import Who from '@/components/Who';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import './page.css';


export default function AboutPage() {
  return (
    <div className="about-page dark:max-md:pt-0">
      <header className='md:sticky top-12 left-0 max-md:mb-14  mx-auto'>
        <div className='ragab-img w-[200] h-[200px] md:h-[300px] max-md:rounded-full shadow-[4px_4px_0_0] max-md:shadow-[0px_0px_0_5px]'>
          <Image alt="Ragab-eid" src={Ragab} className='w-full h-full scale-[3.0] translate-x-[33px] 
            translate-y-[130px] md:translate-x-[40px] md:translate-y-[200px]' 
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
        <h3 alt='Ragab-Resume'>
          <Link target='_blank' href="https://ragab0.github.io/Ragab-Resume/" 
            className="btn-primary w-full block text-center"
          >
            Resume
          </Link>
        </h3>
      </header>
      <main className='about-paillers'>
        <Who />
        <Experience />
        <Education />
        <Skills />
      </main>
    </div>
  )
}