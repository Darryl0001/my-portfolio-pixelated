import { motion } from "framer-motion";
import {
  Bot,
  Database,
  Globe,
  Layers3,
  Search,
} from "lucide-react";

const layers = [
  {
    number: "01",
    title: "CMU ONE",
    icon: Globe,
    color: "#38BDF8",
    items: ["Interface", "Sources", "Map"],
  },
  {
    number: "02",
    title: "FASTAPI",
    icon: Layers3,
    color: "#10B981",
    items: ["API", "Auth", "RAG"],
  },
  {
    number: "03",
    title: "RETRIEVAL",
    icon: Search,
    color: "#F59E0B",
    items: ["Embeddings", "Search", "Context"],
  },
  {
    number: "04",
    title: "DATA",
    icon: Database,
    color: "#8B5CF6",
    items: ["Policies", "Offices", "Locations"],
  },
  {
    number: "05",
    title: "LLM",
    icon: Bot,
    color: "#F43F5E",
    items: ["Context", "Response"],
  },
];

const EASE = [0.16, 1, 0.3, 1];

export function CMUOneSystem() {
  return (
    <section className="border-b border-border bg-bg-main overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[6rem]">
            The system behind
            <br />
            the assistant.
          </h2>
        </motion.div>

        {/* Architecture Grid */}
        <div className="mt-14 sm:mt-20 lg:mt-28">
          <div
            className="
              grid
              grid-cols-1
              gap-px
              border
              border-border
              bg-border
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {layers.map(
              ({ number, title, icon: Icon, color, items }, index) => (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: EASE,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[220px]
                    flex-col
                    border
                    border-transparent
                    bg-bg-main
                    px-6
                    py-6
                    transition-all
                    duration-100
                    ease-out
                    hover:-translate-x-[3px]
                    hover:-translate-y-[3px]
                    hover:border-fg-main
                    hover:bg-bg-elevated
                    hover:shadow-[4px_4px_0_var(--color-fg-main)]
                    sm:min-h-[230px]
                    sm:px-7
                    sm:py-7
                    lg:min-h-[250px]
                    lg:px-8
                    lg:py-8
                  "
                >
                  {/* Pixel index */}
                  <span
                    className="
                      absolute
                      right-3
                      top-3
                      font-mono
                      text-[8px]
                      tracking-wider
                      text-fg-subtle
                      transition-colors
                      group-hover:text-fg-main
                    "
                  >
                    {number}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      flex
                      size-11
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-border
                      bg-bg-main
                      transition-all
                      duration-100
                      group-hover:-translate-y-0.5
                      group-hover:rotate-[-3deg]
                      group-hover:scale-105
                      group-hover:border-fg-main
                    "
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      color={color}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-8
                      font-display
                      text-[2rem]
                      font-semibold
                      uppercase
                      leading-[0.9]
                      tracking-[-0.05em]
                      transition-transform
                      duration-100
                      group-hover:-translate-y-0.5
                      sm:text-4xl
                      lg:mt-10
                      lg:text-[2.6rem]
                    "
                  >
                    {title}
                  </h3>

                  {/* Items */}
                  <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-8">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="
                          flex
                          items-center
                          gap-2
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-wide
                          text-fg-muted
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="
                            size-1.5
                            shrink-0
                            transition-transform
                            duration-100
                            group-hover:scale-125
                          "
                        />

                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Pixel corner accent */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-0
                      size-1.5
                      bg-accent
                      opacity-0
                      transition-opacity
                      duration-100
                      group-hover:opacity-100
                    "
                  />
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}