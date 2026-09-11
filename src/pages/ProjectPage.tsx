import { Navigate, useParams } from "react-router-dom";

import { projects } from "../data/projects";
import ProjectHero from "../components/project/ProjectHero";
import ProjectOverview from "../components/project/ProjectOverview";
import ProjectProblemApproach from "../components/project/ProjectProblemApproach";

export default function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/#projects" replace />;
  }

  return (
    <main>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectProblemApproach project={project} />
    </main>
  );
}