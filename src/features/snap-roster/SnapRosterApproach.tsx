import { motion } from "framer-motion";
import { PenLine, ScanLine } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SnapRosterApproach() {
  return (
    <section className="border-b border-border bg-bg-main">
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 lg:px-12">
        {/* Editorial Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-4xl font-display text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[6rem]"
        >
          Paper and pen are already convenient for students.
        </motion.h2>

        {/* Structural Formula Block */}
        <div className="mt-14 grid overflow-hidden border-y border-border sm:grid-cols-[1fr_auto_1fr]">
          {/* Traditional: Slides from left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="flex items-center gap-5 py-7 sm:py-8"
          >
            <div className="flex size-12 shrink-0 items-center justify-center border border-border bg-bg-surface">
              <PenLine className="size-5" strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-lg font-medium tracking-[-0.02em]">
                Paper + Pen
              </p>
            </div>
          </motion.div>

          {/* Plus Sign: Snaps into place */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
            className="flex items-center justify-center border-y border-border py-4 sm:border-x sm:border-y-0 sm:px-8"
          >
            <span className="font-display text-3xl font-semibold">+</span>
          </motion.div>

          {/* Technology: Slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="flex items-center gap-5 py-7 sm:py-8 sm:pl-8"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: [0.9, 1.05, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4, ease: EASE }}
              className="flex size-12 shrink-0 items-center justify-center border border-fg-main bg-accent shadow-[2px_2px_0_var(--color-fg-main)]"
            >
              <ScanLine className="size-5" strokeWidth={1.7} />
            </motion.div>

            <div>
              <p className="text-lg font-medium tracking-[-0.02em]">
                Computer Vision
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}