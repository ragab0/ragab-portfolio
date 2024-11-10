import { Karla } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import "./globals.css";

export const metadata = {
  title: "Ragab Eid - Personal Portfolio",
  description: "Showcase Ragab's Work, Resume, Skills, and also maile him",
  icon: "/favicon.ico",
};

const mainFont = Karla({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-main",
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mainFont.variable}`}>
        <div className="relative">
          <main className="relative min-h-screen px-4 mx-auto pb-32 max-w-6xl">
            <Cursor />
            <Navbar />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
