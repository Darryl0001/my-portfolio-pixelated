import type { Project } from "../../data/projects";
import { motion } from "framer-motion";

type CMUOneProductProps = {
  project: Project;
};

const moments = [
  {
    number: "01",
    label: "ASK",
    title: "Get a direct answer.",
    description:
      "Ask questions in plain language instead of figuring out which office, document, or page contains the information you need.",
    imageIndex: 0,
    align: "leftss",
  },
  {
    number: "02",
    label: "VERIFY",
    title: "See where it came from.",
    description:
      "Responses point back to the university information used to answer the question, making the result easier to verify.",
    imageIndex: 1,
    align: "right",
  },
  {
    number: "03",
    label: "FIND",
    title: "Know where to go next.",
    description:
      "When an answer is connected to a physical office, CMU One links it to the campus map so students can find it.",
    imageIndex: 2,
    align: "left",
  },
];

// Clean, predictable ease curve for structural UI elements
const EASE = [0.16, 1, 0.3, 1];

export function CMUOneProduct({ project }: CMUOneProductProps) {
  return (
    <section className="border-b border-border bg-bg-main overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
          <div />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="max-w-5xl font-display text-5xl font-semibold leading-[0.88] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[6.4rem]">
              A single place
              <br />
              to <span className="text-primary">ask.</span>
              <br />
              <span className="text-fg-muted">verify.</span>
              <br />
              find.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
              CMU One brings university information, source references, and
              campus locations into one interface. Ask a question, understand
              the answer, and know what to do next.
            </p>
          </motion.div>
        </div>

        {/* Main product image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="relative mt-20 sm:mt-28"
        >
          {/* Shadow element revealing with slight delay */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, x: 0, y: 0 }}
            whileInView={{ opacity: 1, x: 8, y: 8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
            className="absolute inset-0 bg-fg-main"
          />

          <div className="relative overflow-hidden border-2 border-fg-main bg-bg-surface">
            <img
              src={project.images[0] ?? project.thumbnail}
              alt="CMU One assistant interface"
              decoding="async"
              className="block h-auto w-full object-cover"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
              CMU One / Assistant
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
              01
            </span>
          </div>
        </motion.div>

        {/* Product moments */}
        <div className="mt-28 sm:mt-40">
          {moments.map((moment, index) => {
            const image = project.images[moment.imageIndex];

            return (
              <div
                key={moment.number}
                className={`
                  border-t border-border
                  py-16 sm:py-20 lg:py-24
                  ${index === moments.length - 1 ? "border-b" : ""}
                `}
              >
                <div
                  className={`
                    grid items-start gap-10
                    lg:grid-cols-12 lg:gap-16
                    ${
                      moment.align === "right"
                        ? "lg:[&>div:first-child]:order-2"
                        : ""
                    }
                  `}
                >
                  {/* Text Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="lg:col-span-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-fg-muted">
                        {moment.number}
                      </span>

                      <span
                        aria-hidden="true"
                        className="size-2 bg-primary"
                      />

                      <span className="font-mono text-xs font-medium uppercase tracking-[0.14em]">
                        {moment.label}
                      </span>
                    </div>

                    <h3 className="mt-7 max-w-md font-display text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] sm:text-5xl">
                      {moment.title}
                    </h3>

                    <p className="mt-6 max-w-md text-sm leading-relaxed text-fg-muted sm:text-base">
                      {moment.description}
                    </p>
                  </motion.div>

                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
                    className="lg:col-span-8"
                  >
                    <div className="relative">
                      <motion.div
                        aria-hidden="true"
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        whileInView={{ opacity: 1, x: 8, y: 8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.35, ease: EASE }}
                        className="absolute inset-0 bg-fg-main"
                      />

                      <div className="relative overflow-hidden border-2 border-fg-main bg-bg-surface">
                        {image ? (
                          <img
                            src={image}
                            alt={`CMU One ${moment.label.toLowerCase()} interface`}
                            loading="lazy"
                            decoding="async"
                            className="block h-auto w-full object-cover"
                          />
                        ) : (
                          <div className="flex aspect-[16/10] items-center justify-center bg-bg-surface">
                            <span className="font-mono text-xs uppercase tracking-[0.14em] text-fg-muted">
                              Image unavailable
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
                        CMU One / {moment.label}
                      </span>

                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
                        {moment.number}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}