import React from "react";
import { motion } from "framer-motion";

const informationItems = [
  {
    label: "Announcement",
    text: "Registrar notice",
    position: "left-[4%] top-[8%]",
    rotate: -2,
    initialOffset: { x: -40, y: -30 },
  },
  {
    label: "Office",
    text: "Where do I go?",
    position: "right-[8%] top-[18%]",
    rotate: 2,
    initialOffset: { x: 50, y: -20 },
  },
  {
    label: "Policy",
    text: "Student guidelines",
    position: "left-[17%] top-[46%]",
    rotate: 1,
    initialOffset: { x: -30, y: 40 },
  },
  {
    label: "Document",
    text: "Request form",
    position: "right-[22%] top-[50%]",
    rotate: -1,
    initialOffset: { x: 40, y: 30 },
  },
  {
    label: "Location",
    text: "Find an office",
    position: "left-[5%] bottom-[8%]",
    rotate: 2,
    initialOffset: { x: -50, y: 50 },
  },
];

export default function CMUOneProblem() {
  return (
    <section className="border-b border-border bg-bg-main overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        {/* Main statement */}
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl font-display text-[clamp(3.5rem,7.5vw,7.5rem)] font-bold leading-[0.82] tracking-[-0.07em]"
          >
            University information
            <br />
            exists everywhere.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-sm text-base leading-7 text-fg-muted sm:text-lg sm:leading-8"
          >
            The problem is not a lack of information. It is the friction
            between knowing that something exists and actually finding it.
          </motion.p>
        </div>

        {/* Scattered information Container */}
        <div className="relative mt-20 min-h-[560px] border-y border-border sm:mt-28 lg:min-h-[650px]">
          {/* Desktop information fragments */}
          <div className="absolute inset-0 hidden sm:block">
            {informationItems.map((item, index) => (
              <motion.div
                key={item.label}
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                dragElastic={0.05}
                dragSnapToOrigin
                initial={{
                  opacity: 0,
                  x: item.initialOffset.x,
                  y: item.initialOffset.y,
                  rotate: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: item.rotate,
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.04,
                  rotate: 0,
                  zIndex: 20,
                  transition: { duration: 0.15 },
                }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`absolute ${item.position} w-56 cursor-grab active:cursor-grabbing border-2 border-fg-main bg-bg-surface px-5 py-5 shadow-[4px_4px_0_var(--color-fg-main)]`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-fg-muted select-none">
                    {item.label}
                  </span>

                  <span
                    aria-hidden
                    className="size-2 shrink-0 bg-accent"
                  />
                </div>

                <p className="mt-6 font-display text-xl font-semibold uppercase leading-none tracking-[-0.03em] select-none">
                  {item.text}
                </p>
              </motion.div>
            ))}

            {/* Central question */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: "-45%" }}
              whileInView={{ opacity: 1, scale: 1, y: "-50%" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute left-1/2 top-1/2 w-[min(460px,42vw)] -translate-x-1/2 z-10"
            >
              <div className="relative border-2 border-fg-main bg-fg-main px-7 py-7 text-bg-main shadow-[7px_7px_0_var(--color-accent)] sm:px-9 sm:py-9">
                <p className="font-display text-[clamp(2.75rem,4vw,4.5rem)] font-bold uppercase leading-[0.84] tracking-[-0.06em]">
                  Where do I
                  <br />
                  find this?
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mobile composition */}
          <div className="flex flex-col gap-3 py-12 sm:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-2 border-fg-main bg-fg-main px-6 py-7 text-bg-main shadow-[5px_5px_0_var(--color-accent)]"
            >
              <p className="font-display text-4xl font-bold uppercase leading-[0.88] tracking-[-0.05em]">
                Where do I
                <br />
                find this?
              </p>
            </motion.div>

            <div className="mt-4 grid gap-3">
              {informationItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className="flex items-center justify-between border-2 border-fg-main bg-bg-surface px-5 py-4 shadow-[3px_3px_0_var(--color-fg-main)]"
                >
                  <div>
                    <span className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-fg-muted">
                      {item.label}
                    </span>

                    <p className="mt-2 font-display text-lg font-semibold uppercase leading-none tracking-[-0.02em]">
                      {item.text}
                    </p>
                  </div>

                  <span
                    aria-hidden
                    className="size-2 shrink-0 bg-accent"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative accent */}
          <span
            aria-hidden
            className="absolute bottom-0 right-0 hidden size-3 bg-accent sm:block"
          />
        </div>
      </div>
    </section>
  );
}