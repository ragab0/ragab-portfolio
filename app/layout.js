import { Karla } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import "./globals.css";

export const metadata = {
  title: "Ragab Eid",
  description:
    "A software developer specializing in building exceptional web applications",
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
          <div className="text-center text-sm text-gray-500 bg-gray-900 py-5">
            <strong>Note As of 23 July 2025:</strong> Last main update was on
            2024. This version of the site is DEPRECATED and it will be replaced
            with a new version soon.
          </div>
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
