import Link from 'next/link';
import Image from 'next/image';
import Ragab from '@/assets/imgs/green-img.jpeg';


export default function Home() {
  return (
    <div className='home-page lg:mt-32 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-16'>
      <div className='mt-16 lg:mt-0 text-center lg:text-start'>
        <p className='mb-4 text-secondColorLight'>Salamu Alaykum,</p>
        <h1>
          {"{"} i&apos;m <span>ragab</span> eid {"} "}
          <span className=' max-lg:block'>;</span>
        </h1>
        <p className='max-w-lg my-8 text-current'>
          I&apos;m a web developer from Egypt. I build interactive and cool web applications, 
          with un-blievable experience for my clients.
        </p>
        <Link href="/about" aria-label='about me' className='btn-primary'>
          About me
        </Link>
      </div>
      <div className='ragab-img max-md:mx-12 shadow-[8px_8px_0_0]'>
        <Image alt="Ragab-eid" src={Ragab} className='w-96' priority />
      </div>
    </div>
  )
}
