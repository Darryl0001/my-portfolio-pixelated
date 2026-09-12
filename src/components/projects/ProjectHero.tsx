import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Project } from "../../data/projects";
import { technologies } from "../../data/technologies";

type ProjectHeroProps = {
  project: Project;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pixel-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-8 lg:px-12 lg:pb-24">
        {/* Back navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-sm font-medium uppercase tracking-[0.12em] text-fg-muted transition-colors hover:text-fg-main"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-150 group-hover:-translate-x-1"
            />
            Back to work
          </Link>
        </motion.div>

        {/* Project introduction */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="max-w-6xl font-display text-[clamp(4.5rem,11vw,10rem)] font-bold uppercase leading-[0.78] tracking-[-0.075em]"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="mt-8 max-w-2xl text-lg leading-8 text-fg-muted sm:text-xl sm:leading-9"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Main project image */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="group relative mt-14 sm:mt-16 lg:mt-20"
        >
          {/* Mechanical offset */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: 8, y: 8 }}
            transition={{ duration: 0.4, delay: 0.45, ease: EASE }}
            className="
              absolute inset-0
              bg-fg-main
              transition-transform duration-150 ease-out
              group-hover:translate-x-3 group-hover:translate-y-3
            "
          />

          <div
            className="
              relative overflow-hidden
              border-2 border-fg-main
              bg-bg-surface
              transition-transform duration-150 ease-out
              group-hover:-translate-x-1 group-hover:-translate-y-1
            "
          >
            <img
              src={project.thumbnail}
              alt={`${project.title} project preview`}
              decoding="async"
              className="block h-auto w-full object-cover"
            />

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
                className="
                  absolute right-4 top-4
                  flex size-12 items-center justify-center
                  border-2 border-fg-main
                  bg-bg-main
                  transition-transform duration-150
                  hover:-translate-y-1 hover:translate-x-1
                "
              >
                <ArrowUpRight size={20} />
              </a>
            )}
          </div>
        </motion.div>

        {/* Technology signature */}
        {project.stack.length > 0 && (
          <div className="mt-10 border-t border-border pt-6 sm:mt-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="font-mono text-sm font-medium uppercase tracking-[0.12em] text-fg-muted"
            >
              Built with
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.04,
                    delayChildren: 0.45,
                  },
                },
              }}
              className="mt-4 flex flex-wrap gap-2 sm:gap-3"
            >
              {project.stack.map((name) => {
                const technology =
                  technologies[name as keyof typeof technologies];

                if (!technology) {
                  return (
                    <motion.div
                      key={name}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="
                        group relative flex h-14 items-center
                        border border-border
                        bg-bg-main px-4
                        transition-[transform,box-shadow,border-color,background-color]
                        duration-100 ease-out
                        hover:-translate-x-[3px]
                        hover:-translate-y-[3px]
                        hover:border-fg-main
                        hover:bg-bg-elevated
                        hover:shadow-[4px_4px_0_var(--color-fg-main)]
                        sm:h-16 sm:px-5
                      "
                    >
                      <span className="font-display text-sm font-semibold tracking-[-0.02em] sm:text-base">
                        {name}
                      </span>

                      <span
                        aria-hidden
                        className="
                          absolute bottom-0 left-0 size-1.5
                          bg-accent opacity-0
                          transition-opacity duration-100
                          group-hover:opacity-100
                        "
                      />
                    </motion.div>
                  );
                }

                const Icon = technology.icon;

                return (
                  <motion.div
                    key={name}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="
                      group relative flex h-14 items-center gap-3
                      border border-border
                      bg-bg-main px-4
                      transition-[transform,box-shadow,border-color,background-color]
                      duration-100 ease-out
                      hover:-translate-x-[3px]
                      hover:-translate-y-[3px]
                      hover:border-fg-main
                      hover:bg-bg-elevated
                      hover:shadow-[4px_4px_0_var(--color-fg-main)]
                      sm:h-16 sm:px-5
                    "
                  >
                    <div
                      className="
                        transition-transform
                        duration-100
                        group-hover:-translate-y-0.5
                        group-hover:rotate-[-3deg]
                        group-hover:scale-110
                      "
                    >
                      <Icon
                        size={24}
                        color={technology.color}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="font-display text-sm font-semibold tracking-[-0.02em] sm:text-base">
                      {name}
                    </span>

                    <span
                      aria-hidden
                      className="
                        absolute bottom-0 left-0 size-1.5
                        bg-accent opacity-0
                        transition-opacity duration-100
                        group-hover:opacity-100
                      "
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
