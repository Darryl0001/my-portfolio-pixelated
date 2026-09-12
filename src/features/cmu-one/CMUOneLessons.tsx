import { motion } from "framer-motion";

const notes = [
  {
    number: "01",
    title: "The data model shapes the product",
    description:
      "The assistant is only as useful as the information behind it. Structuring, categorizing, and verifying university information became just as important as the AI itself.",
  },
  {
    number: "02",
    title: "Keep the AI behind a controlled system",
    description:
      "We chose RAG instead of letting the model answer freely. The goal was not to make it sound intelligent at all costs, but to keep answers grounded in information we actually have.",
  },
  {
    number: "03",
    title: "Separate information from location",
    description:
      "Location data was kept connected to knowledge entries instead of being mixed into the AI's context. This kept the retrieval system cleaner while allowing the same information to power the campus map.",
  },
  {
    number: "04",
    title: "Build around the actual problem",
    description:
      "We kept the architecture small for the first version: FastAPI, SQLite, vector search, and a simple admin flow. There was no need to introduce a larger stack before the product needed it.",
  },
  {
    number: "05",
    title: "Features should work as one system",
    description:
      "The map became more useful when it was connected to the assistant. If an answer tells a student where something is, the next useful step is helping them find it.",
  },
  {
    number: "06",
    title: "V1 should stay focused",
    description:
      "A university assistant could eventually do much more, but adding everything early would make the system harder to maintain and trust. The first version focuses on finding information, understanding it, and acting on it.",
  },
];

const EASE = [0.16, 1, 0.3, 1];

export function CMUOneLessons() {
  return (
    <section className="border-b border-border bg-bg-main">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <h2 className="text-4xl font-semibold leading-none tracking-[-0.045em] sm:text-5xl">
            My Learnings and decisions
          </h2>
        </motion.div>

        {/* Notes */}
        <div className="mt-12 sm:mt-16">
          {notes.map((note) => (
            <motion.article
              key={note.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="border-t border-border py-9 sm:py-11"
            >
              <div className="grid gap-5 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8">
                {/* Number */}
                <span className="pt-1 font-mono text-[10px] tracking-[0.12em] text-fg-subtle">
                  {note.number}
                </span>

                {/* Content */}
                <div className="max-w-3xl">
                  <h3 className="max-w-2xl text-xl font-medium leading-[1.15] tracking-[-0.025em] sm:text-2xl">
                    {note.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-[15px] leading-7 text-fg-muted sm:text-base sm:leading-7">
                    {note.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}

          <div className="border-t border-border" />
        </div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="pt-14 sm:pt-16"
        >
          <p className="max-w-lg text-[15px] leading-7 text-fg-muted sm:text-base">
            CMU One is still a work in progress. There is more to improve,
            but the direction is clear.
          </p>
        </motion.div>
      </div>
    </section>
  );
}