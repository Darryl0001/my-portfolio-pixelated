import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <Technologies />
      <Projects />
    </MainLayout>
  );
}