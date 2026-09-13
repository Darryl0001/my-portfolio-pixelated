import MainLayout from "../../layouts/MainLayout";
import ProjectHero from "../../components/projects/ProjectHero";
import ProjectSystem from "../../components/projects/ProjectSystem";
import ProjectLessons from "../../components/projects/ProjectLessons";
import BackToTop from "../../components/BackToTop";

import { projects } from "../../data/projects";

import SnapRosterApproach from "../../features/snap-roster/SnapRosterApproach";
import SnapRosterProcess from "../../features/snap-roster/SnapRosterProcess";

const project = projects.find((item) => item.slug === "snax");

export default function SnapRosterPage() {
  if (!project) {
    return null;
  }

  return (
    <MainLayout>
      <ProjectHero project={project} />

      <SnapRosterApproach />

      <SnapRosterProcess project={project} />

      <ProjectSystem project={project} />

      <ProjectLessons project={project} />

      <BackToTop />
    </MainLayout>
  );
}
