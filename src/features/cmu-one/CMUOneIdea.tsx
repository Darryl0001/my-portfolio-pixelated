import { motion } from "framer-motion";

const EASE_BRUTAL = [0.16, 1, 0.3, 1] as const;

export function CMUOneIdea() {
  return (
    <section className="border-b border-border bg-bg-main">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end lg:gap-24">
          {/* Main idea */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: EASE_BRUTAL }}
            className="max-w-5xl font-display text-[clamp(4rem,9vw,9rem)] font-bold uppercase leading-[0.8] tracking-[-0.075em]"
          >
            One place.
            <br />
            <span className="text-fg-muted">One starting</span>
            <br />
            point.
          </motion.h2>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: EASE_BRUTAL,
            }}
            className="max-w-sm text-base leading-7 text-fg-muted sm:text-lg sm:leading-8"
          >
            Instead of searching across different places, students can start
            with a question and let CMU One guide them to the information they
            need.
          </motion.p>
        </div>

        {/* Simple idea */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.55,
            delay: 0.1,
            ease: EASE_BRUTAL,
          }}
          className="mt-20 border-y-2 border-fg-main sm:mt-28"
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-1 py-8 sm:py-10">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-fg-muted">
                Ask
              </span>

              <p className="mt-4 font-display text-3xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-4xl">
                “Where do I
                <br />
                request a transcript?”
              </p>
            </div>

            <div
              aria-hidden
              className="h-px w-full bg-fg-main md:h-12 md:w-px"
            />

            <div className="flex-1 bg-fg-main px-6 py-8 text-bg-main sm:px-8 sm:py-10">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-bg-main/60">
                CMU One
              </span>

              <p className="mt-4 font-display text-3xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-4xl">
                Find the
                <br />
                answer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
