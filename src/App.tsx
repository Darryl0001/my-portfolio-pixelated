import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import About from "./components/About";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <Technologies />
      <Projects />
      <About />
    </MainLayout>
  );
}