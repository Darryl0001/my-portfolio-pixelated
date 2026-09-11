import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Project } from "../../data/projects";

type ProjectHeroProps = {
  project: Project;
};

const EASE_BRUTAL = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.04,
    },
  },
};

const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: EASE_BRUTAL,
    },
  },
};

const titleLineVariants: Variants = {
  hidden: {
    y: "110%",
    opacity: 0,
    scaleY: 1.08,
  },
  visible: {
    y: "0%",
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.3,
      ease: EASE_BRUTAL,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: 0.16,
      ease: EASE_BRUTAL,
    },
  },
};

/**
 * Physical block interaction used throughout the portfolio.
 * The image lifts and gains a hard shadow on hover.
 */
const blockVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
    boxShadow: "0px 0px 0px #151515",
    zIndex: 1,
  },
  hover: {
    x: -4,
    y: -4,
    boxShadow: "6px 6px 0px #151515",
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

/**
 * Smaller version of the same 3D block interaction
 * for the project action buttons.
 */
const buttonVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
    boxShadow: "0px 0px 0px #151515",
  },
  hover: {
    x: -2,
    y: -2,
    boxShadow: "4px 4px 0px #151515",
    transition: {
      duration: 0.12,
      ease: EASE_BRUTAL,
    },
  },
  tap: {
    x: 0,
    y: 0,
    boxShadow: "0px 0px 0px #151515",
    transition: {
      duration: 0.06,
    },
  },
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative w-full overflow-hidden border-b-2 border-fg-main">
      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
          [background-image:linear-gradient(to_right,rgba(21,21,21,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,21,21,0.035)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          pb-16
          pt-7
          sm:px-8
          sm:pb-20
          lg:px-12
          lg:pb-24
        "
      >
        {/* TOP NAV */}
        <motion.div
          variants={fadeInVariants}
          className="flex items-center justify-between"
        >
          <Link
            to="/#projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              font-mono
              text-[9px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-fg-muted
              transition-colors
              hover:text-fg-main
            "
          >
            <ArrowLeft
              size={13}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-100
                group-hover:-translate-x-1
              "
            />
            Back to work
          </Link>

          <div
            className="
              hidden
              items-center
              gap-2
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-fg-subtle
              sm:flex
            "
          >
            <span className="size-1.5 bg-accent" />
            Project / {project.number}
          </div>
        </motion.div>

        {/* PROJECT HEADER */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
       


          {/* TITLE */}
          <div className="mt-5">
            <h1
              className="
                font-display
                text-[clamp(4rem,11vw,10rem)]
                font-bold
                uppercase
                leading-[0.78]
                tracking-[-0.075em]
              "
            >
              <span className="block overflow-hidden">
                <motion.span
                  variants={titleLineVariants}
                  className="block"
                >
                  {project.title}
                </motion.span>
              </span>
            </h1>
          </div>

          

          {/* DESCRIPTION + ACTIONS */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-7
              border-t
              border-border/70
              pt-5
              sm:mt-10
              sm:pt-6
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-12
            "
          >
            <motion.p
              variants={fadeInVariants}
              className="
                max-w-xl
                text-sm
                leading-6
                text-fg-muted
                sm:text-base
                sm:leading-7
              "
            >
              {project.description}
            </motion.p>

            {(project.github || project.live) && (
              <motion.div
                variants={fadeInVariants}
                className="
                  flex
                  shrink-0
                  flex-wrap
                  items-center
                  gap-3
                "
              >
                {/* PRIMARY — LIVE DEMO */}
                {project.live && (
                  <motion.a
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      border-2
                      border-fg-main
                      bg-accent
                      px-4
                      py-2.5
                      font-mono
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-fg-main
                    "
                  >
                    Live Demo

                    <ArrowUpRight
                      size={13}
                      strokeWidth={2}
                      className="
                        transition-transform
                        duration-100
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </motion.a>
                )}

                {/* SECONDARY — GITHUB */}
                {project.github && (
                  <motion.a
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      border-2
                      border-fg-main
                      bg-bg-main
                      px-4
                      py-2.5
                      font-mono
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-fg-main
                      transition-colors
                      hover:bg-bg-elevated
                    "
                  >
                    GitHub

                    <ArrowUpRight
                      size={13}
                      strokeWidth={2}
                      className="
                        transition-transform
                        duration-100
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </motion.a>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* HERO IMAGE */}
        <motion.div
          variants={imageVariants}
          className="relative mt-14 sm:mt-16 lg:mt-20"
        >
          {/* Main image block */}
          <motion.div
            variants={blockVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="
              group
              relative
              overflow-hidden
              border-2
              border-fg-main
              bg-bg-surface
            "
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={project.thumbnail}
                alt={`${project.title} project preview`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-200
                  group-hover:scale-[1.015]
                "
              />
            </div>
          </motion.div>
        </motion.div>

        {/* FOOTER DETAIL */}
        <motion.div
          variants={fadeInVariants}
          className="mt-5 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 bg-fg-main" />
            <span className="size-1.5 bg-accent" />
            <span className="size-1.5 bg-fg-main" />
          </div>

          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-fg-subtle
            "
          >
            Selected work
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}