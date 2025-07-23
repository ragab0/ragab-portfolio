import Formatopia from "@/assets/imgs/projects/format_topia/format_topia.png";
import DevBlog from "@/assets/imgs/projects/dev_blog/dev_blog1.png";
import Nabza from "@/assets/imgs/projects/Nabza/home1.png";
import EdepediaPreview from "@/assets/imgs/projects/EDEPedia/EDEPedia-preview.png";
import TodPreview from "@/assets/imgs/projects/TOD/tod_v3.png";
import Diffing from "@/assets/imgs/projects/Diffing/gateway.png";
// import Portfolio from "@/assets/imgs/projects/portfolio.png";
import Resume from "@/assets/imgs/projects/resume.png";
import FirstReactApps from "@/assets/imgs/projects/first-react-apps.png";
import LeResturant from "@/assets/imgs/projects/LeRestaurant/LeResturant.jpg";
import GPT3 from "@/assets/imgs/projects/GPT-3.png";
import HooBank from "@/assets/imgs/projects/HooBank/HooBank.png";
import Fitness from "@/assets/imgs/projects/fitness.png";
import store from "@/assets/imgs/projects/comphy.png";
// import todoList from "@/assets/imgs/projects/todo-list.png";

import NoxeImage from "@/assets/imgs/projects/Noxe/NoxePreview.jpg";
import SimonImage from "@/assets/imgs/projects/Simon/Simon.png";
import Resto from "@/assets/imgs/projects/RestoRestaurant/Resto.png";
import TravelReservation from "@/assets/imgs/projects/TravelReservation/TravelReservation.jpg";
import Kasper from "@/assets/imgs/projects/Kasper/kasper.jpg";
import Leon from "@/assets/imgs/projects/Leon/Leon.jpg";

export const featuredProjectsApi = [
  // P00
  {
    name: "DevBlog",
    srcImg: DevBlog,
    link: "https://ragab-blog.vercel.app/",
    gitLinks: [
      "https://github.com/ragab0/blog-post-api",
      "https://github.com/ragab0/blog-post",
    ],
    description: `
      a modern blog app that allows users to create, edit, and delete blog posts, as well as view other users' posts and comments.
    `,
    coreSkills: [
      "TypeScript",
      "React.js",
      "Shadcn",
      "Tailwindcss",
      "Redux Toolkit",
      "React Hook Form",
      "Nest.js",
      "PostgreSQL",
      "TypeORM",
      "Swagger & REST client",
    ],
  },
  // P01
  {
    name: "Nabza - نبذة",
    srcImg: Nabza,
    link: "https://www.ragab.shop/",
    gitLinks: [
      "https://github.com/ragab0/nabza-platform-api",
      "https://github.com/ragab0/nabza-platform",
    ],
    description: `
      an AI-driven platform helping Arabic speakers to create professional and customizable CVs.
    `,
    coreSkills: [
      "React.js",
      "React-PDF",
      "Redux Toolkit",
      "Next.js",
      "Yup",
      "Express.js",
      "MongoDB",
      "Passport.js",
      "Tailwindcss",
      "Socket.IO",
      "Amazon S3",
      "Adobe XD",
    ],
  },

  {
    name: "EDEPedia - DEPI Academy",
    srcImg: EdepediaPreview,
    link: "https://lms-depi-final-project.vercel.app/",
    gitLinks: [
      "https://github.com/ragab0/lms-web-based-system",
      "https://github.com/ragab0/learning-management-system-api",
    ],
    description: `
      A Learning Management System to manage and track YouTube-based courses, featuring an admin panel for user management and course approvals, mentor dashboards for course setup, and a student app with progress tracking, interactive messaging, lesson comments, and feedback—offering a seamless learning experience tailored to all user roles
    `,
    coreSkills: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "YouTube API",
      "MVC",
      "Bootstrap",
      "Chart.js",
      "Socket.IO",
    ],
  },

  {
    name: "Formatopia",
    srcImg: Formatopia,
    link: "https://format-topia.vercel.app/",
    gitLinks: ["https://github.com/ragab0/format-topia"],
    description: `
      Text formatting & transformation tools. Convert case, trim spaces, preview markdown, and JSON.
    `,
    coreSkills: [
      "TypeScript",
      "Next.js",
      "Zustand",
      "Shadcn/ui",
      "Tailwindcss",
      "Dropzone",
      "Json Viewer",
      "Markdown Processing",
    ],
  },

  // P03
  {
    name: "GPT-3",
    srcImg: GPT3,
    link: "https://ragab-gpt-3.vercel.app/",
    gitLinks: ["https://github.com/ragab0/GPT-3"],
    description: `Responsive landing page built with React, Next.js, and TailwindCSS, transforming a Figma design into a fully functional webpage. Features include AOS scroll animations, cross-browser compatibility, and a user-friendly interface for an engaging and seamless experience`,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Figma",
    ],
    coreSkills: ["Figma", "TailwindCSS", "Next.js"],
  },
];

export const moreProjectsApi = [
  // {
  //   "name": "Ragab-portfolio",
  //   "srcImg": Portfolio,
  //   "link": null,
  //   "gitLink": "https://github.com/ragab0/ragab-portfolio",
  //   "description": ["My personal portfolio where I showcase all of my skills and latest work", "Every single feature had been built from scratch without", "Designed by me"],
  //   "skills": ['HTML5', 'CSS3', "JavaScript", "JSON","React", "Next.js", "TailwindCSS"],
  // },

  {
    name: "HooBank",
    srcImg: HooBank,
    link: "https://ragab-hoo-bank.vercel.app/",
    gitLinks: ["https://github.com/ragab0/Hoo-Bank"],
    description: `
      Modern, responsive landing page with Figma design transformation, and cross-browser compatibility
    `,
    skills: ["Next.js", "Figma", "TailwindCSS"],
  },
  {
    name: "Comphy-Sloth-Store",
    srcImg: store,
    link: "https://comphy-store.vercel.app/",
    gitLinks: ["https://github.com/ragab0/comfy_store"],
    description: `
    E-Commerce platform
    integrated with internal Express.js API and a file-based database,    
    offering cart management, seamless browsing, and filtering with multi-criteria search
    `,
    skills: ["Next.js", "JSON", "Redux", "Figma", "TailwindCSS"],
  },
  {
    name: "Ramy-Fitness-App",
    srcImg: Fitness,
    link: "https://ramy-fitness.vercel.app",
    gitLinks: ["https://github.com/ragab0/Ramy-Fitness"],
    description: `عااااش يا بطـــل…`,
    skills: ["Next.js", "Rapid-API", "Figma", "TailwindCSS"],
  },
  {
    name: "TOD V03 (UnCompleted)",
    srcImg: TodPreview,
    link: "https://todo-tasks-manager.vercel.app",
    gitLinks: ["https://github.com/ragab0/todo-list"],
    description: `Task Management App V03`,
    skills: ["JSON", "Next.js", "TailwindCSS", "Figma"],
    inProgress: true,
  },
  {
    name: "Diffing",
    srcImg: Diffing,
    link: "#",
    gitLinks: ["https://github.com/ragab0/diffing-extension"],
    description: `
      Chrome Extension and PDF parser generates classified documents and markdown format
    `,
    skills: ["React", "Python", "FastAPI"],
  },

  // {
  //   name: "Noxe-Movies-App",
  //   srcImg: NoxeImage,
  //   link: "https://noxe-movies-app.vercel.app",
  //   gitLinks: ["https://github.com/ragab0/noxe-movies-app"],
  //   description: `Movie app integrated with TMDP API`,
  //   skills: [
  //     "React",
  //     "React-Router-DOM",
  //     "React Hook Form",
  //     "Joi",
  //     "Bootstrap",
  //   ],
  // },

  {
    name: "Le-Resturant",
    srcImg: LeResturant,
    link: "https://ragab-resturant.onrender.com",
    gitLinks: ["https://github.com/ragab0/React_Resturant"],
    description: `Transformed Figma design into responsive webpage`,
    skills: ["React", "Figma", "TailwindCSS"],
  },

  {
    name: "friend-simon",
    srcImg: SimonImage,
    link: "https://ragab0.github.io/friend-simon/",
    gitLinks: ["https://github.com/ragab0/friend-simon"],
    description: `Simple portfolio for my friend - Become a Friend and Build Your Portfolio :D`,
    skills: ["HTML5", "CSS3", "Bootstrap-grid-system", "CSS-Columns"],
  },

  {
    name: "Elzero_02",
    srcImg: Kasper,
    link: "https://ragab0.github.io/Kasper",
    gitLinks: ["https://github.com/ragab0/Kasper"],
    skills: ["HTML5", "CSS3"],
  },

  {
    name: "resto-restaurant",
    srcImg: Resto,
    link: "https://ragab0.github.io/resto-restaurant",
    gitLinks: ["https://github.com/ragab0/resto-restaurant"],
    skills: ["HTML5", "CSS3", "Fontawesome", "Googlefonts"],
  },

  {
    name: "Elzero_01",
    srcImg: Leon,
    link: "https://ragab0.github.io/Leon/",
    gitLinks: ["https://github.com/ragab0/Leon"],
    skills: ["HTML5", "CSS3"],
  },

  {
    name: "Travel-Reservation",
    srcImg: TravelReservation,
    link: "https://ragab0.github.io/travel-reservation",
    gitLinks: ["https://github.com/ragab0/travel-reservation"],
    skills: ["HTML", "CSS", "CSS-Float-Layout"],
  },

  {
    name: "My-Old-CV",
    srcImg: Resume,
    link: "https://ragab0.github.io/Ragab-Resume/",
    gitLinks: ["https://github.com/ragab0/Ragab-Resume"],
    skills: ["HTML5", "CSS3", "TailwindCSS", "SEO"],
  },
  {
    name: "Small-React-Apps",
    srcImg: FirstReactApps,
    link: "https://step-two.onrender.com",
    gitLinks: ["https://github.com/ragab0/first-react-apps"],
    skills: ["React..."],
    description:
      "My first apps built in react at the at the beginning of the trip. I learned about how to use React but how to think in React",
  },
];
