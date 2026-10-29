export type Skill = { name: string; icon: string };

export type Category = {
  id: string;
  label: string;
  summary: string;
  skills: Skill[];
};

// Icon paths follow your existing /public/images/skills/* convention.
const icon = (file: string) => `/images/skills/${file}`;

export const CATEGORIES: Category[] = [
  {
    id: "front-end",
    label: "Front-End",
    summary: "Interfaces that are fast, accessible and a pleasure to use.",
    skills: [
      { name: "HTML", icon: icon("html.svg") },
      { name: "CSS", icon: icon("css.svg") },
      { name: "Sass", icon: icon("sass.png") },
      { name: "Bootstrap", icon: icon("bootstrap.svg") },
      { name: "JavaScript", icon: icon("js.svg") },
      { name: "jQuery", icon: icon("jquery.png") },
      { name: "Tailwind CSS", icon: icon("tailwind-css.svg") },
      { name: "React", icon: icon("react.png") },
      { name: "TypeScript", icon: icon("typescript.svg") },
      { name: "Next.js", icon: icon("nextjs.svg") },
      { name: "Redux", icon: icon("redux.svg") },
      { name: "Zustand", icon: icon("zustand.png") },
    ],
  },
  {
    id: "back-end",
    label: "Back-End",
    summary: "APIs and data layers that stay reliable under load.",
    skills: [
      { name: "Node.js", icon: icon("nodejs.svg") },
      { name: "Express.js", icon: icon("express-js.svg") },
      { name: "Nest.js", icon: icon("nest-js.svg") },
      { name: "MongoDB", icon: icon("mongodb.svg") },
      { name: "Next.js", icon: icon("nextjs.svg") },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    summary: "Shipping code safely, repeatedly and at the edge.",
    skills: [
      { name: "Git", icon: icon("git.svg") },
      { name: "CI/CD", icon: icon("ci-cd.png") },
      { name: "Docker", icon: icon("docker.svg") },
    ],
  },
];

export const ALSO_EXPERIENCED_WITH = [
  "REST APIs",
  "GraphQL",
  "Figma",
  "React Native",
  "Expo",
  "Framer Motion",
  "Styled Components",
  "Chart.js",
  "Jest",
  "Webpack",
  "Vite",
  "Vercel",
  "SQLite",
  "MySQL",
  "PostgreSQL",
  "Socket.IO",
];
