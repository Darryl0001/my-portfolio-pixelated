import { useParams } from "react-router-dom";

import CMUOnePage from "./projects/CMUOnePage";
import GenericProjectPage from "./projects/GenericProjectPage";

export default function ProjectPage() {
  const { slug } = useParams();

  if (slug === "cmu-one") {
    return <CMUOnePage />;
  }

  return <GenericProjectPage slug={slug} />;
}