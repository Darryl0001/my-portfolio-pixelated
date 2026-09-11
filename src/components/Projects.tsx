import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={large ? "lg:col-span-2" : ""}
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

          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-bg-surface">
            <motion.img
              variants={imageVariants}
              src={project.thumbnail}
              alt={`${project.title} project preview`}
              className="h-full w-full object-cover"
            />

            {/* Project number */}
            <span
              className="
                absolute left-3 top-3
                border border-fg-main
                bg-bg-main
                px-2.5 py-1.5
                font-mono
                text-[9px]
                font-medium
                tracking-[0.12em]
              "
            >
              {project.number}
            </span>

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
              <ArrowUpRight size={16} />
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
            <div className="flex items-start justify-between gap-5">
              <div>
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

                <div className="mt-2 flex items-center gap-2">
                  <span className="size-1.5 bg-accent" />

                  <p
                    className="
                      font-mono
                      text-[9px]
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

              <span
                className="
                  shrink-0
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.14em]
                  text-fg-subtle
                "
              >
                {project.number} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            {/* Tech stack */}
            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-x-3
                gap-y-2
                border-t
                border-border
                pt-3
              "
            >
              <span
                className="
                  mr-1
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.16em]
                  text-fg-subtle
                "
              >
                Built with
              </span>

              {project.stack.map((tech, index) => (
                <span
                  key={tech}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    font-mono
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.1em]
                  "
                >
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="size-1.5 bg-accent"
                    />
                  )}

                  {tech}
                </span>
              ))}
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
        <div className="mb-10 flex items-end justify-between sm:mb-12">
          <div>
            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-fg-muted
              "
            >
              Selected work
            </span>

            <h2
              className="
                mt-2
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
          </div>

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-fg-subtle
            "
          >
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>

        {/* Project grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              large={index === 0 || index === 4 || index === 8}
            />
          ))}
        </div>
      </div>
    </section>
  );
}