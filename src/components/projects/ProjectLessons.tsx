import { motion } from "framer-motion";

import type { Project } from "../../data/projects";

type ProjectLessonsProps = {
  project: Project;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProjectLessons({
  project,
}: ProjectLessonsProps) {
  const { lessons } = project;

  return (
    <section className="border-b border-border bg-bg-main">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <h2 className="max-w-4xl text-4xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-6xl">
            {lessons.title}
          </h2>

     
        </motion.div>

        {/* Lessons */}
        <div className="mt-14 sm:mt-20">
          {lessons.items.map((item, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: EASE,
                }}
                className="border-t border-border py-9 sm:py-11"
              >
                <div className="grid gap-5 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8">
                  <span className="pt-1 font-mono text-[10px] tracking-[0.12em] text-fg-subtle">
                    {number}
                  </span>

                  <div className="max-w-3xl">
                    <h3 className="max-w-2xl text-xl font-medium leading-[1.15] tracking-[-0.025em] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-[15px] leading-7 text-fg-muted sm:mt-5 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}

          <div className="border-t border-border" />
        </div>

        {/* Closing */}
        {lessons.closing && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: EASE }}
            className="pt-14 sm:pt-16"
          >
            <p className="max-w-xl text-[15px] leading-7 text-fg-muted sm:text-base">
              {lessons.closing}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}