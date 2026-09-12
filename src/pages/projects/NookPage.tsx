import MainLayout from "../../layouts/MainLayout";
import ProjectHero from "../../components/projects/ProjectHero";
import ProjectLessons from "../../components/projects/ProjectLessons";
import ProjectSystem from "../../components/projects/ProjectSystem";
import NookIdea from "../../features/nook/NookIdea";

import { projects } from "../../data/projects";

const project = projects.find((item) => item.slug === "nook");

export default function NookPage() {
  if (!project) {
    return null;
  }

  return (
    <MainLayout>
      <ProjectHero project={project} />
      <NookIdea project={project} />
      <ProjectSystem project={project} />
      <ProjectLessons project={project} />
    </MainLayout>
  );
}
