import EdepediaPreview from "@/assets/imgs/projects/EDEPedia/EDEPedia-preview.png";
import TodPreview from "@/assets/imgs/projects/TOD/TodPreview2.png";
import Portfolio from "@/assets/imgs/projects/portfolio.png";
import Resume from "@/assets/imgs/projects/resume.png";
import FirstReactApps from "@/assets/imgs/projects/first-react-apps.png";
import Resturant from "@/assets/imgs/projects/resturant.png";
import GPT3 from "@/assets/imgs/projects/GPT-3.png";
import HooBank from "@/assets/imgs/projects/hoo-bank.png";
import Fitness from "@/assets/imgs/projects/fitness.png";
import store from "@/assets/imgs/projects/comphy.png";
import todoList from "@/assets/imgs/projects/todo-list.png";

export const featuredProjectsApi = [
  // P01
  {
    name: "EDEPedia - DEPI Academy",
    srcImg: EdepediaPreview,
    link: null,
    gitLink: "https://github.com/ragab0/ragab-portfolio",
    description: "Coming...",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "JSON",
      "React",
      "Next.js",
      "TailwindCSS",
    ],
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

  // P02
  {
    name: "Assistant TOD",
    srcImg: TodPreview,
    link: "https://todo-tasks-manager.vercel.app",
    gitLink: "https://github.com/ragab0/todo-list",
    description: "Coming...",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "JSON",
      "React",
      "Next.js",
      "TailwindCSS",
      "Figma",
    ],
    coreSkills: [
      "React.js",
      "Next.js",
      "Node.js",
      "MySQL",
      "NLP.js",
      "TailwindCSS",
    ],
    inProgress: true,
  },

  // P03
  {
    name: "GPT-3",
    srcImg: GPT3,
    link: "https://ragab-gpt-3.vercel.app/",
    gitLink: "https://github.com/ragab0/GPT-3",
    description: `Coming...`,
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
    gitLink: "https://github.com/ragab0/Hoo-Bank",
    description: `
      "The Next Generation Payment Method",
      a Modern website where you can handle your business money
    `,
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
  {
    name: "Comphy-Store",
    srcImg: store,
    link: "https://comphy-store.vercel.app/",
    gitLink: "https://github.com/ragab0/comfy_store",
    description: `Coming...`,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "JSON",
      "Redux",
      "React",
      "Next.js",
      "TailwindCSS",
      "Figma",
    ],
  },
  {
    name: "Ramy-Fitness",
    srcImg: Fitness,
    link: "https://ramy-fitness.vercel.app",
    gitLink: "https://github.com/ragab0/Ramy-Fitness",
    description: `عااااش يا بطـــل…`,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Rapid-API",
      "Figma",
    ],
  },

  {
    name: "Ragab-Resturant",
    srcImg: Resturant,
    link: "https://ragab-resturant.onrender.com",
    gitLink: "https://github.com/ragab0/React_Resturant",
    description: `Coming...`,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Figma"],
  },
  {
    name: "My-Old-CV",
    srcImg: Resume,
    link: "https://ragab0.github.io/Ragab-Resume/",
    gitLink: "https://github.com/ragab0/Ragab-Resume",
    description: `Coming...`,
    skills: ["HTML5", "CSS3", "TailwindCSS", "SEO"],
  },
  {
    name: "Small-React-Apps",
    srcImg: FirstReactApps,
    link: "https://step-two.onrender.com",
    gitLink: "https://github.com/ragab0/first-react-apps",
    description: `Coming...`,
    skills: ["HTML5", "CSS3", "JavaScript", "JSON", "React"],
  },
];
