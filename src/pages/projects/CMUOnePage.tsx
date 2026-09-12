import { Navigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import { projects } from "../../data/projects";
import CMUOneProblem from "../../features/cmu-one/CMUOneProblem";
import { CMUOneProduct } from "../../features/cmu-one/CMUOneProduct";
import ProjectLessons from "../../components/projects/ProjectLessons";
import ProjectHero from "../../components/projects/ProjectHero";
import ProjectSystem from "../../components/projects/ProjectSystem";

export default function CMUOnePage() {
  const project = projects.find((item) => item.slug === "cmu-one");

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <MainLayout>
      <ProjectHero project={project} />
      <CMUOneProblem />
      <CMUOneProduct project={project} />
      <ProjectSystem project={project} />
      <ProjectLessons project={project} />
    </MainLayout>
  );
}