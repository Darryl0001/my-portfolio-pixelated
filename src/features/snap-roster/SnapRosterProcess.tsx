import { motion } from "framer-motion";
import type { Project } from "../../data/projects";

type SnapRosterProcessProps = {
  project: Project;
};

const moments = [
  {
    number: "01",
    title: "GENERATE",
    description: "Create a standardized attendance sheet.",
    imageIndex: 0,
  },
  {
    number: "02",
    title: "PRINT",
    description: "Print the generated sheet.",
    imageIndex: 1,
  },
  {
    number: "03",
    title: "FILL",
    description: "Students mark their attendance.",
    imageIndex: 2,
  },
  {
    number: "04",
    title: "SCAN",
    description: "Upload the completed sheet.",
    imageIndex: 3,
  },
  {
    number: "05",
    title: "DETECT",
    description: "Computer vision reads the marks.",
    imageIndex: 4,
  },
  {
    number: "06",
    title: "REVIEW",
    description: "Review the detected results.",
    imageIndex: 5,
  },
  {
    number: "07",
    title: "SAVE",
    description: "Store the final attendance records.",
    imageIndex: 6,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SnapRosterProcess({
  project,
}: SnapRosterProcessProps) {
  const hasOddCount = moments.length % 2 !== 0;

  return (
    <section className="border-b border-border bg-bg-main">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p className="font-mono text-[10px] tracking-[0.14em] text-fg-subtle">
            02 / THE PROCESS
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            From paper
            <br className="hidden sm:block" /> to digital records.
          </h2>

          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-fg-muted sm:text-base">
            One workflow from a printed attendance sheet to a stored record.
          </p>
        </motion.div>

        {/* Process grid */}
        <div className="mt-14 sm:mt-20">
          <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 md:gap-y-20">
            {moments.map((moment, index) => {
              const image = project?.images?.[moment.imageIndex] ?? "";
              const isLast = index === moments.length - 1;

              return (
                <motion.article
                  key={moment.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 2) * 0.1,
                    ease: EASE,
                  }}
                  className={
                    hasOddCount && isLast
                      ? "md:col-span-2 md:w-[calc(50%-0.75rem)] md:justify-self-center"
                      : ""
                  }
                >
                  <div className="group">
                    {/* Image */}
                    <div className="relative">
                      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-fg-main transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

                      <div className="relative overflow-hidden border-2 border-fg-main bg-bg-surface">
                        {image ? (
                          <img
                            src={image}
                            alt={`Attendance V2 ${moment.title.toLowerCase()} step`}
                            loading="lazy"
                            decoding="async"
                            className="block aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                          />
                        ) : (
                          <div className="block aspect-[16/10] w-full bg-bg-muted" />
                        )}
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="mt-6 grid gap-4 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-6">
                      <span className="font-mono text-[16px] tracking-[0.12em] text-fg-subtle">
                        {moment.number}
                      </span>

                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                          {moment.title}
                        </h3>

                        <p className="mt-3 max-w-lg text-[14px] leading-6 text-fg-muted sm:text-[15px] sm:leading-7">
                          {moment.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}