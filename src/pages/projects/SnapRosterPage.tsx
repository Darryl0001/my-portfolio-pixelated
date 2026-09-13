import MainLayout from "../../layouts/MainLayout";
import ProjectHero from "../../components/projects/ProjectHero";
import ProjectSystem from "../../components/projects/ProjectSystem";
import ProjectLessons from "../../components/projects/ProjectLessons";
import { projects } from "../../data/projects";
import SnapRosterApproach from "../../features/snap-roster/SnapRosterApproach";
import SnapRosterProcess from "../../features/snap-roster/SnapRosterProcess";
import BackToTop from "../../components/BackToTop";

const project = projects.find((item) => item.slug === "snap-roster");
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