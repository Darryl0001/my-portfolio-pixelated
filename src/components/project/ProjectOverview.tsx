import { motion, type Variants } from "framer-motion";

import type { Project } from "../../data/projects";

type ProjectOverviewProps = {
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
    y: 14,
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

export default function ProjectOverview({
  project,
}: ProjectOverviewProps) {
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
          Overview
        </motion.h2>

        {/* Content */}
        <div className="mt-10 grid lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16">
          {/* Empty editorial space on desktop */}
          <div className="hidden lg:block" />

          <div className="max-w-4xl">
            <motion.h3
              variants={itemVariants}
              className="
                font-display
                text-3xl
                font-semibold
                uppercase
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-4xl
                lg:text-5xl
                xl:text-[3.75rem]
              "
            >
              {project.description}
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="
                mt-10
                max-w-2xl
                border-t
                border-border
                pt-8
                text-base
                leading-7
                text-fg-muted
                sm:text-lg
                sm:leading-8
              "
            >
              {project.overview}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
