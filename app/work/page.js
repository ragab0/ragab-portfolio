import "./work.css";
import FeaturedProjects from "./components/FeaturedProjects";
import MoreProjects from "./components/MoreProjects";
import {
  featuredProjectsApi,
  moreProjectsApi,
} from "@/assets/data/projectsApi";

export const metadata = {
  title: "Projects & Work - Ragab Eid | Software Developer Portfolio",
  description:
    "Explore Ragab Eid's portfolio projects. View my latest web development work, case studies, and technical implementations showcasing my expertise.",
  openGraph: {
    title: "Projects & Work - Ragab Eid",
    description:
      "Explore my latest web development projects and technical implementations.",
    url: "https://ragab.vercel.com/work",
    type: "website",
  },
};

export default function WorkPage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio Projects",
    description: "A collection of my best web development projects",
    url: "https://ragab.vercel.com/work",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <main className="work-page max-w-7xl rounded-md">
        <span className="scroll-static-progress"></span>
        <section className="mt-32">
          <h2 className="text-4xl mb-12 mx-auto">My latest projects</h2>
          <FeaturedProjects projects={featuredProjectsApi} />
        </section>
        <section className="my-64">
          <h2 className="text-4xl mb-12 mx-auto">More projects</h2>
          <MoreProjects projects={moreProjectsApi} />
        </section>
      </main>
    </>
  );
}
