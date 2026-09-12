import { Navigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import { projects } from "../../data/projects";
import CMUOneHero from "../../features/cmu-one/CMUOneHero";
import CMUOneProblem from "../../features/cmu-one/CMUOneProblem";
import { CMUOneProduct } from "../../features/cmu-one/CMUOneProduct";
import { CMUOneSystem } from "../../features/cmu-one/CMUOneSystem";
import { CMUOneLessons } from "../../features/cmu-one/CMUOneLessons";

export default function CMUOnePage() {
  const project = projects.find((item) => item.slug === "cmu-one");

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <MainLayout>
      <CMUOneHero project={project} />
      <CMUOneProblem />
      <CMUOneProduct project={project} />
      <CMUOneSystem />
      <CMUOneLessons />
    </MainLayout>
  );
}