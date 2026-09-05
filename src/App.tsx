import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { ArrowUpRight } from "lucide-react";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <Technologies />
      <Projects />
      <About />
      <Contact />

      <footer className="border-t-2 border-fg-main bg-bg-main">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_auto_auto] sm:items-end">
            {/* Identity */}
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-fg-muted">
                © 2026 Darryl Macarandan
              </p>

              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-fg-subtle">
                Software Developer
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="#projects"
                className="font-mono text-[8px] uppercase tracking-[0.14em] text-fg-muted transition-colors hover:text-fg-main"
              >
                Work
              </a>

              <a
                href="#about"
                className="font-mono text-[8px] uppercase tracking-[0.14em] text-fg-muted transition-colors hover:text-fg-main"
              >
                About
              </a>

              <a
                href="#contact"
                className="font-mono text-[8px] uppercase tracking-[0.14em] text-fg-muted transition-colors hover:text-fg-main"
              >
                Contact
              </a>
            </nav>

            {/* Back to top */}
            <a
              href="#"
              className="group inline-flex items-center gap-2 justify-self-start font-mono text-[8px] uppercase tracking-[0.14em] text-fg-muted transition-colors hover:text-fg-main sm:justify-self-end"
            >
              <span
                aria-hidden="true"
                className="size-2 bg-accent transition-transform duration-200 group-hover:-translate-y-0.5"
              />

              Top

              <ArrowUpRight
                className="size-3 rotate-[-45deg] transition-transform duration-200 group-hover:-translate-y-0.5"
                strokeWidth={1.8}
              />
            </a>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
}
