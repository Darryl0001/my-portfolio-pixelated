import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

import { projects, type Project } from "../data/projects";

const EASE_BRUTAL = [0.16, 1, 0.3, 1] as const;

const cardVariants: Variants = {
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

const imageVariants: Variants = {
  rest: {
    scale: 1,
  },

  hover: {
    scale: 1.025,
    transition: {
      duration: 0.25,
      ease: EASE_BRUTAL,
    },
  },
};

const arrowVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
    opacity: 0,
  },

  hover: {
    x: 2,
    y: -2,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: EASE_BRUTAL,
    },
  },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group relative block"
      >
        <div className="relative overflow-hidden border-2 border-fg-main bg-fg-main">
          {/* Pixel offset */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              translate-x-2 translate-y-2
              bg-accent
              transition-transform duration-200
              group-hover:translate-x-3
              group-hover:translate-y-3
            "
          />

          {/* Thumbnail */}
          <div className="relative aspect-[16/10] overflow-hidden bg-bg-surface">
            <motion.img
              variants={imageVariants}
              src={project.thumbnail}
              alt={`${project.title} project preview`}
              className="h-full w-full object-cover"
            />

            {/* Open project */}
            <motion.span
              variants={arrowVariants}
              className="
                absolute right-3 top-3
                flex size-9
                items-center justify-center
                border border-fg-main
                bg-bg-main
              "
            >
              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </motion.span>
          </div>

          {/* Project information */}
          <div
            className="
              relative
              border-t-2 border-fg-main
              bg-bg-main
              px-4 py-4
              sm:px-5 sm:py-5
            "
          >
            <div className="flex items-start justify-between gap-4">
              {/* Project identity */}
              <div className="flex min-w-0 items-start gap-3">
                {project.logo && (
                  <div className="flex size-9 shrink-0 items-center justify-center">
                    <img
                      src={project.logo}
                      alt=""
                      aria-hidden="true"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}

                <div className="min-w-0">
                  <h3
                    className="
                      font-display
                      text-xl
                      font-bold
                      uppercase
                      leading-none
                      tracking-[-0.045em]
                      sm:text-2xl
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[12px]
                      font-medium
                      uppercase
                      tracking-[0.14em]
                      text-fg-muted
                    "
                  >
                    {project.type}
                  </p>
                </div>
              </div>

              {/* Project number */}
              <span
                className="
                  shrink-0
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.14em]
                  text-fg-subtle
                "
              >
                {project.number}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        border-t
        border-border
        px-6
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <h2
          className="
            font-display
            text-4xl
            font-bold
            uppercase
            leading-none
            tracking-[-0.06em]
            sm:text-5xl
            lg:text-6xl
          "
        >
          Projects
        </h2>

        <div className="flex items-center gap-2 sm:pb-1">
          <span
            className="
              font-mono
              text-[10px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-fg-muted
            "
          >
            Click project to view case study
          </span>

          <ArrowDown
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
      </div>
        {/* Project grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
