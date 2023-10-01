import { Bitter, Ubuntu } from "next/font/google";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import './globals.css';


export const metadata = {
  title: "Ragab Eid - Personal Portfolio",
  description: "Showcase Ragab's Work, Resume, Skills, and also maile him",
  icon: "/favicon.ico",
}


const bitter = Bitter({
  weight: ['300','400', '500', '600','700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bitter',
  preload: true
})
const ubuntu = Ubuntu({
  weight: ['300','400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
  preload: true
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bitter.variable}`}>
        <div className='relative'>
          <main className='relative min-h-screen px-4 mx-auto pb-32 max-w-7xl'>
            <Cursor />
            <Navbar />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
