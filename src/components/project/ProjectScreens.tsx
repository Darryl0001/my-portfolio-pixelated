import { motion, type Variants } from "framer-motion";

import type { Project } from "../../data/projects";

type ProjectScreensProps = {
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
    y: 18,
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

const imageVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
  },
  hover: {
    x: -3,
    y: -3,
    transition: {
      duration: 0.12,
      ease: EASE_BRUTAL,
    },
  },
};

export default function ProjectScreens({
  project,
}: ProjectScreensProps) {
  return (
    <section className="border-b border-border">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
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
        {/* Section header */}
        <motion.div
          variants={itemVariants}
          className="flex items-end justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] font-medium tracking-[0.16em] text-fg-muted">
              03
            </span>

            <span
              aria-hidden="true"
              className="size-1.5 bg-accent"
            />

            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-fg-muted">
              Selected Screens
            </span>
          </div>

          <span className="font-mono text-[9px] tracking-[0.14em] text-fg-subtle">
            {String(project.images.length).padStart(2, "0")} / SCREENS
          </span>
        </motion.div>

        {/* Screens */}
        <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-20 lg:space-y-24">
          {project.images.map((image, index) => (
            <motion.figure
              key={image}
              variants={itemVariants}
            >
              <motion.div
                variants={imageVariants}
                initial="rest"
                whileHover="hover"
                className="relative"
              >
                {/* Lime offset */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    translate-x-2
                    translate-y-2
                    bg-accent
                  "
                />

                {/* Screenshot */}
                <div className="relative overflow-hidden border-2 border-fg-main bg-bg-surface">
                  <img
                    src={image}
                    alt={`${project.title} screen ${index + 1}`}
                    className="
                      h-auto
                      w-full
                      object-cover
                    "
                  />
                </div>
              </motion.div>

              {/* Caption */}
              <figcaption className="mt-4 flex items-start justify-between gap-6">
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-fg-muted">
                  Screen {String(index + 1).padStart(2, "0")}
                </span>

                <span className="max-w-md text-right text-xs leading-5 text-fg-subtle">
                  {getScreenCaption(project, index)}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function getScreenCaption(
  project: Project,
  index: number,
): string {
  if (project.slug === "cmu-one") {
    const captions = [
      "The main assistant interface for asking questions about university information.",
      "Relevant sources are shown alongside the AI response to make answers easier to verify.",
      "The campus map connects university information with physical locations.",
    ];

    return captions[index] ?? "";
  }

  return "";
}

