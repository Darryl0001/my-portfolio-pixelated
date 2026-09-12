import { useMemo } from "react";
import { Navigate } from "react-router-dom";

import { projects } from "../../data/projects";
import CMUOneHero from "../../features/cmu-one/CMUOneHero";
import CMUOneProblem from "../../features/cmu-one/CMUOneProblem";

export default function CMUOnePage() {
  const project = useMemo(
    () => projects.find((item) => item.slug === "cmu-one"),
    [],
  );

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <CMUOneHero project={project} />
      <CMUOneProblem />

    </>
  );
}