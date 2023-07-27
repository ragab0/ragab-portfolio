import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Bitter, Ubuntu } from "next/font/google";
import './globals.css';


export const metadata = {
  title: "Ragab Eid - Personal Portfolio",
  description: "Ragab Eid - Personal Portfolio. Show Ragab's Resume, Skills, Projects and mailing me",
  icon: "/",
}


const bitter = Bitter({
  weight: ['300','400', '500', '600','700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bitter',

})
const ubuntu = Ubuntu({
  weight: ['300','400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',

})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bitter.variable}`}>
        <div className='relative'>
          <main className='relative min-h-screen px-4 mx-auto pb-32 max-w-7xl'>
            <Navbar />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
