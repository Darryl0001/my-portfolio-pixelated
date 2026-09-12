
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import CMUOnePage from "./pages/projects/CMUOnePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Dedicated project pages */}
        <Route path="/projects/cmu-one" element={<CMUOnePage />} />

        {/* Generic project pages */}
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
