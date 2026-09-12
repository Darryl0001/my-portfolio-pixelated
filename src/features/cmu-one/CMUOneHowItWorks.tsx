import { motion } from "framer-motion";

const EASE_BRUTAL = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    label: "ASK",
  },
  {
    number: "02",
    label: "RETRIEVE",
  },
  {
    number: "03",
    label: "ANSWER",
  },
];

export function CMUOneHowItWorks() {
  return (
    <section className="border-b border-border bg-bg-main">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_BRUTAL }}
        >
          <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[6rem]">
            Ask. Retrieve. Answer.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
            CMU One finds relevant university information before generating an
            answer.
          </p>
        </motion.div>

        {/* Flow */}
        <div className="mt-20 sm:mt-28 lg:mt-32">
          <div className="grid border-y border-border sm:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: EASE_BRUTAL,
                }}
                className={`
                  relative flex min-h-[180px] items-end justify-between
                  py-8 sm:min-h-[240px] sm:p-8 lg:min-h-[280px] lg:p-10
                  ${index > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""}
                `}
              >
                <span className="font-mono text-sm text-fg-muted">
                  {step.number}
                </span>

                <span className="font-display text-5xl font-semibold uppercase leading-none tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  {step.label}
                </span>

                {index < steps.length - 1 && (
                  <span className="absolute right-[-7px] top-1/2 z-10 hidden h-3 w-3 -translate-y-1/2 bg-fg sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical flow */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 font-mono text-xs uppercase tracking-[0.1em] text-fg-muted sm:mt-10 sm:text-sm"
        >
          React → FastAPI → Knowledge Base → RAG → LLM
        </motion.p>
      </div>
    </section>
  );
}