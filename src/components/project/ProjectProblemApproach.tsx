import { motion, type Variants } from "framer-motion";

import type { Project } from "../../data/projects";

type ProjectProblemApproachProps = {
  project: Project;
};

const EASE_BRUTAL = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: EASE_BRUTAL,
    },
  },
};

export default function ProjectProblemApproach({
  project,
}: ProjectProblemApproachProps) {
  return (
    <section className="border-b border-border">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="
          mx-auto
          max-w-7xl
          px-6
          py-20
          sm:px-8
          sm:py-24
          lg:px-12
          lg:py-28
        "
      >
        {/* Section heading */}
        <motion.h2
          variants={itemVariants}
          className="
            font-mono
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-fg-muted
          "
        >
          Problem & Approach
        </motion.h2>

        {/* Content */}
        <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Problem */}
          <motion.article variants={itemVariants}>
            <div className="border-t border-fg-main pt-6">
              <div className="flex items-end justify-between gap-6">
                <span
                  className="
                    font-mono
                    text-sm
                    font-medium
                    tracking-[0.08em]
                    text-fg-muted
                  "
                >
                  01
                </span>

                <span
                  className="
                    font-mono
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-fg-subtle
                  "
                >
                  Problem
                </span>
              </div>

              <h3
                className="
                  mt-8
                  max-w-xl
                  font-display
                  text-3xl
                  font-semibold
                  uppercase
                  leading-[0.94]
                  tracking-[-0.05em]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {project.problem.title}
              </h3>

              <p
                className="
                  mt-8
                  max-w-lg
                  text-sm
                  leading-6
                  text-fg-muted
                  sm:text-base
                  sm:leading-7
                "
              >
                {project.problem.content}
              </p>
            </div>
          </motion.article>

          {/* Approach */}
          <motion.article variants={itemVariants}>
            <div className="border-t border-fg-main pt-6">
              <div className="flex items-end justify-between gap-6">
                <span
                  className="
                    font-mono
                    text-sm
                    font-medium
                    tracking-[0.08em]
                    text-fg-muted
                  "
                >
                  02
                </span>

                <span
                  className="
                    font-mono
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-fg-subtle
                  "
                >
                  Approach
                </span>
              </div>

              <h3
                className="
                  mt-8
                  max-w-xl
                  font-display
                  text-3xl
                  font-semibold
                  uppercase
                  leading-[0.94]
                  tracking-[-0.05em]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {project.solution.title}
              </h3>

              <p
                className="
                  mt-8
                  max-w-lg
                  text-sm
                  leading-6
                  text-fg-muted
                  sm:text-base
                  sm:leading-7
                "
              >
                {project.solution.content}
              </p>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
