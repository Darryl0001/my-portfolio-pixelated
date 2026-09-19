import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./layouts/ScrollToTop";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import CMUOnePage from "./pages/projects/CMUOnePage";
import NookPage from "./pages/projects/NookPage";
import SnapRosterPage from "./pages/projects/SnapRosterPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Dedicated project pages */}
        <Route path="/projects/cmu-one" element={<CMUOnePage />} />
        <Route path="/projects/nook" element={<NookPage />} />
        <Route path="/projects/snax" element={<SnapRosterPage />} />

        {/* Generic project pages */}
        <Route path="/projects/:slug" element={<ProjectPage />} />

         <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
