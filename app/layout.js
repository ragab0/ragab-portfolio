import { Karla } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import "./globals.css";

export const metadata = {
  title: "Ragab Eid - Software Developer & Web Developer Portfolio",
  description:
    "Ragab Eid is a software developer specializing in building exceptional web applications. Explore my portfolio of projects and expertise in web development.",
  keywords:
    "Ragab, Ragab Eid, Ragab Portfolio, Ragab Eid Portfolio, software developer, web developer, portfolio, web applications",
  authors: [{ name: "Ragab Eid" }],
  creator: "Ragab Eid",
  openGraph: {
    title: "Ragab Eid - Software Developer & Web Developer Portfolio",
    description:
      "Ragab Eid is a software developer specializing in building exceptional web applications.",
    url: "https://ragab.vercel.com",
    siteName: "Ragab Eid Portfolio",
    images: [
      {
        url: "https://ragab.vercel.app/ragab-picture.jpg",
        width: 1200,
        height: 630,
        alt: "Ragab Eid - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  canonical: "https://ragab.vercel.com",
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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ragab Eid",
    url: "https://ragab.vercel.com",
    jobTitle: "Software Developer",
    image: "https://ragab.vercel.com/ragab-picture.jpg",
    sameAs: ["https://linkedin.com/in/ragab-eid", "https://github.com/ragab0"],
    description:
      "A software developer specializing in building exceptional web applications",
    profiles: [
      {
        "@type": "ProfilePage",
        name: "LinkedIn",
        url: "https://linkedin.com/in/ragab-eid",
      },
      {
        "@type": "ProfilePage",
        name: "GitHub",
        url: "https://github.com/ragab0",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <link rel="canonical" href="https://ragab.vercel.com" />
        {/* <meta
          name="google-site-verification"
          content="your-verification-code"
        /> */}
      </head>
      <body className={`${mainFont.variable}`}>
        <div className="relative">
          <div className="text-center text-sm text-gray-500 bg-gray-900 py-5">
            <strong>Note As of July 2025:</strong> Last main update was on 2024.
            This version of the site is DEPRECATED and it will be replaced with
            a newer one soon.
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
