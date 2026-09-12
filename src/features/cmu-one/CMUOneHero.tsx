import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  SiFastapi,
  SiLeaflet,
  SiReact,
  SiSqlite,
  SiTypescript,
} from "react-icons/si";
import { Link } from "react-router-dom";

import type { Project } from "../../data/projects";

type CMUOneHeroProps = {
  project: Project;
};

const EASE_BRUTAL = [0.16, 1, 0.3, 1] as const;

const stackIcons = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "SQLite", icon: SiSqlite, color: "#003B57" },
  { name: "Leaflet", icon: SiLeaflet, color: "#199900" },
];

const blockVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
    boxShadow: "0px 0px 0px #151515",
    zIndex: 1,
  },
  hover: {
    x: -3,
    y: -3,
    boxShadow: "4px 4px 0px #151515",
    zIndex: 10,
    transition: {
      duration: 0.15,
      ease: EASE_BRUTAL,
    },
  },
  tap: {
    x: 0,
    y: 0,
    boxShadow: "0px 0px 0px #151515",
    transition: {
      duration: 0.08,
    },
  },
};

const iconVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.1,
    y: -2,
    transition: {
      duration: 0.15,
      ease: EASE_BRUTAL,
    },
  },
};

export default function CMUOneHero({ project }: CMUOneHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pixel-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-8 lg:px-12 lg:pb-24">
        {/* Back navigation */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE_BRUTAL }}
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
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.05,
              ease: EASE_BRUTAL,
            }}
            className="max-w-6xl font-display text-[clamp(4.5rem,11vw,10rem)] font-bold uppercase leading-[0.78] tracking-[-0.075em]"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.12,
              ease: EASE_BRUTAL,
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-fg-muted sm:text-xl sm:leading-9"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Main project image */}
        <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.65,
            delay: 0.18,
            ease: EASE_BRUTAL,
        }}
        className="group relative mt-14 sm:mt-16 lg:mt-20"
        >
        {/* Hover-only mechanical offset */}
        <div
            aria-hidden="true"
            className="
            absolute inset-0
            bg-fg-main
            translate-x-0 translate-y-0
            transition-transform duration-200 ease-out
            group-hover:translate-x-2 group-hover:translate-y-2
            "
        />

        <div
            className="
            relative overflow-hidden
            border-2 border-fg-main
            bg-bg-surface
            transition-transform duration-200 ease-out
            group-hover:-translate-x-1 group-hover:-translate-y-1
            "
        >
            <img
            src={project.thumbnail}
            alt={`${project.title} project preview`}
            className="
                h-auto w-full object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-[1.01]
            "
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
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.32,
            ease: EASE_BRUTAL,
          }}
          className="mt-10 border-t border-border pt-6 sm:mt-12"
        >
          <p className="font-mono text-sm font-medium uppercase tracking-[0.12em] text-fg-muted">
            Built with
          </p>

          <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
            {stackIcons.map(({ name, icon: Icon, color }) => (
              <motion.div
                key={name}
                variants={blockVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="group relative flex h-14 items-center gap-3 border border-border bg-bg-main px-4 transition-colors hover:border-fg-main hover:bg-bg-elevated sm:h-16 sm:px-5"
              >
                <motion.div variants={iconVariants}>
                  <Icon
                    size={24}
                    color={color}
                    aria-hidden="true"
                  />
                </motion.div>

                <span className="font-display text-sm font-semibold tracking-[-0.02em] sm:text-base">
                  {name}
                </span>

                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 size-1.5 bg-accent opacity-0 transition-opacity group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
