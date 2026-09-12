import { motion } from "framer-motion";
import type { Project } from "../../data/projects";

type NookIdeaProps = {
  project: Project;
};

const EASE = [0.16, 1, 0.3, 1] as const;


const moments = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Browse second-hand items through listings, categories, and product details.",
    imageIndex: 1,
    className: "md:col-span-2",
  },
  {
    number: "02",
    title: "LIST",
    description:
      "Create and manage listings with images, categories, and product details.",
    imageIndex: 2,
    className: "md:col-span-1",
  },
  {
    number: "03",
    title: "BUY",
    description:
      "Move from a product listing into checkout and complete the purchase.",
    imageIndex: 3,
    className: "md:col-span-1",
  },
  {
    number: "04",
    title: "TRACK",
    description:
      "Follow purchases through their order status after checkout.",
    imageIndex: 4,
    className: "md:col-span-1",
  },
  {
    number: "05",
    title: "REVIEW",
    description:
      "Review sellers after a transaction and add another layer of trust to the marketplace.",
    imageIndex: 5,
    className: "md:col-span-2",
  },
];

export default function NookIdea({ project }: NookIdeaProps) {
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
            02 / THE IDEA
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            A marketplace built around
            <br className="hidden sm:block" /> the full transaction.
          </h2>

          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-fg-muted sm:text-base">
            Nook was built as a second-hand marketplace where the same user
            can discover items, sell their own products, complete purchases,
            and review sellers.
          </p>
        </motion.div>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mt-14 sm:mt-20"
        >
          <div className="relative">
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-fg-main" />

            <div className="relative overflow-hidden border-2 border-fg-main bg-bg-surface">
              <img
                src={project.images[0]}
                alt="Nook marketplace interface"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Product moments */}
        <div className="mt-20 sm:mt-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-6 md:gap-y-20">
            {moments.map((moment, index) => {
              const image = project.images[moment.imageIndex];

              return (
                <motion.article
                  key={moment.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: EASE,
                  }}
                  className={moment.className}
                >
                  <div className="group">
                    <div className="relative">
                      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-fg-main transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

                      <div className="relative overflow-hidden border-2 border-fg-main bg-bg-surface">
                        <img
                          src={image}
                          alt={`Nook ${moment.title.toLowerCase()} interface`}
                          className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                        />
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-6">
                      <span className="font-mono text-[10px] tracking-[0.12em] text-fg-subtle">
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

        {/* Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-20 border-y border-border py-8 sm:mt-28 sm:py-10"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 font-mono text-[10px] tracking-[0.12em] text-fg-main sm:gap-x-5 sm:text-xs">
            {["DISCOVER", "LIST", "BUY", "TRACK", "REVIEW"].map(
              (item, index, items) => (
                <div key={item} className="flex items-center gap-x-3 sm:gap-x-5">
                  <span>{item}</span>

                  {index < items.length - 1 && (
                    <span className="text-fg-subtle">→</span>
                  )}
                </div>
              ),
            )}
          </div>
        </motion.div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mt-8 max-w-2xl text-[15px] leading-7 text-fg-muted sm:mt-10 sm:text-base"
        >
          The idea was simple: bring the different parts of a second-hand
          transaction into one connected marketplace instead of treating
          listings, purchases, and sellers as separate experiences.
        </motion.p>
      </div>
    </section>
  );
}