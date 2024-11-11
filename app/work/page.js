import "./work.css";
import FeaturedProjects from "./components/FeaturedProjects";
import MoreProjects from "./components/MoreProjects";
import {
  featuredProjectsApi,
  moreProjectsApi,
} from "@/assets/data/projectsApi";

export default function WorkPage() {
  return (
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
  );
}
