import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Mechanical cubic-bezier easing for hard, snappy motion
const EASE_BRUTAL = [0.16, 1, 0.3, 1] as const;

// Orchestration container with crisp staggered delays
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
};

// Masked vertical snap with slight overshoot scale for blocky impact
const textLineVariants: Variants = {
  hidden: { y: "110%", opacity: 0, scaleY: 1.15 },
  visible: {
    y: "0%",
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.28, ease: EASE_BRUTAL },
  },
};

// Accent underline wipe-in animation
const underlineVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.3, delay: 0.25, ease: EASE_BRUTAL },
  },
};

// Direct fade-in for secondary metadata
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: EASE_BRUTAL },
  },
};

// Hard drop-in reveal for central portrait card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_BRUTAL },
  },
};

// Hard offset lock for the lime backing block with snap-in delay
const accentVariants: Variants = {
  hidden: { x: 0, y: 0, opacity: 0 },
  visible: {
    x: 12,
    y: 12,
    opacity: 1,
    transition: { duration: 0.2, delay: 0.15, ease: EASE_BRUTAL },
  },
};

// Block interaction variants for the ID card
const cardInteractiveVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
  },
  hover: {
    x: -4,
    y: -4,
    transition: { duration: 0.1, ease: EASE_BRUTAL },
  },
  tap: {
    x: 0,
    y: 0,
    transition: { duration: 0.04 },
  },
};

// Block interaction variants for the CTA badge
const ctaInteractiveVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
    boxShadow: "4px 4px 0px #151515",
  },
  hover: {
    x: -2,
    y: -2,
    boxShadow: "6px 6px 0px #151515",
    transition: { duration: 0.1, ease: EASE_BRUTAL },
  },
  tap: {
    x: 2,
    y: 2,
    boxShadow: "2px 2px 0px #151515",
    transition: { duration: 0.04 },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        overflow-visible
        px-6
        py-10
        sm:px-8
        sm:py-12
        lg:h-[calc(100svh-64px)]
        lg:overflow-hidden
        lg:px-12
        lg:py-3
      "
    >
      {/* Background Grid Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          [background-image:linear-gradient(to_right,rgba(21,21,21,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,21,21,0.04)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* Left pixel marker */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, delay: 0.35, ease: EASE_BRUTAL }}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          top-1/2
          hidden
          -translate-y-1/2
          lg:block
        "
      >
        <div className="flex gap-1">
          <span className="size-2 bg-fg-main" />
          <span className="size-2 bg-accent" />
          <span className="size-2 bg-fg-main" />
        </div>
        <div className="mt-1 flex gap-1">
          <span className="size-2 bg-fg-main" />
          <span className="size-2 bg-fg-main" />
          <span className="size-2 bg-accent" />
        </div>
      </motion.div>

      {/* MAIN SCREEN CONTAINER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          mx-auto
          flex
          h-full
          max-w-7xl
          flex-col
          justify-between
          gap-10
          lg:gap-0
        "
      >
        {/* TOP ROW: Headline Left | Description Right */}
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-4
            pt-2
            lg:grid-cols-12
            lg:gap-6
            lg:pt-4
          "
        >
          {/* Main Headline (Left) */}
          <div className="lg:col-span-6">
            <h1
              className="
                font-display
                text-[clamp(2.5rem,5.5vw,5.5rem)]
                font-bold
                uppercase
                leading-[0.82]
                tracking-[-0.07em]
              "
            >
              <motion.span
                variants={fadeInVariants}
                className="
                  mb-2
                  block
                  font-mono
                  text-[0.28em]
                  font-normal
                  normal-case
                  tracking-[0.08em]
                  text-fg-muted
                "
              >
                Hi! I am, Darryl
              </motion.span>

              {/* Masked text reveals */}
              <span className="block overflow-hidden py-0.5">
                <motion.span variants={textLineVariants} className="block">
                  I BUILD
                </motion.span>
              </span>

              <span className="block overflow-hidden py-0.5">
                <motion.span
                  variants={textLineVariants}
                  className="relative block w-fit"
                >
                  SOFTWARE
                  <motion.span
                    variants={underlineVariants}
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-0
                      -z-10
                      h-[0.2em]
                      w-full
                      bg-accent
                    "
                  />
                </motion.span>
              </span>

              <span className="block overflow-hidden py-0.5">
                <motion.span
                  variants={textLineVariants}
                  className="relative block w-fit"
                >
                  THAT MAKES
                  <motion.span
                    variants={underlineVariants}
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-0
                      -z-10
                      h-[0.2em]
                      w-full
                      bg-accent
                    "
                  />
                </motion.span>
              </span>

              <span className="block overflow-hidden py-0.5">
                <motion.span
                  variants={textLineVariants}
                  className="relative block w-fit"
                >
                  SENSE.
                  <motion.span
                    variants={underlineVariants}
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-0
                      -z-10
                      h-[0.2em]
                      w-full
                      bg-accent
                    "
                  />
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Spacer for Center Portrait */}
          <div className="hidden lg:col-span-1 lg:block" />

          {/* Description (Right) */}
          <div className="lg:col-span-5 lg:pl-6">
            <motion.p
              variants={fadeInVariants}
              className="
                max-w-xs
                text-xs
                leading-5
                text-fg-muted
                sm:text-sm
                sm:leading-6
                lg:ml-auto
                lg:text-right
              "
            >
              I design and build web and mobile applications with a focus on real
              problems, practical solutions, and thoughtful details.
            </motion.p>
          </div>
        </div>

        {/* CENTER PORTRAIT & FLOATING CTA */}
        <div
          className="
            relative
            flex
            flex-col
            items-center
            gap-8
            py-2
            lg:pointer-events-none
            lg:absolute
            lg:inset-0
            lg:flex
            lg:flex-row
            lg:items-center
            lg:justify-center
            lg:gap-0
            lg:py-0
          "
        >
          {/* Large Center Portrait Card */}
          <motion.div
            variants={cardVariants}
            className="
              relative
              z-10
              w-[clamp(220px,60vw,320px)]
              sm:w-[clamp(260px,42vw,340px)]
              lg:pointer-events-auto
              lg:w-[clamp(260px,46vh,370px)]
            "
          >
            {/* Lime pixel offset backing */}
            <motion.div
              variants={accentVariants}
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-accent
                [clip-path:polygon(0_8px,8px_8px,8px_0,calc(100%-8px)_0,calc(100%-8px)_8px,100%_8px,100%_calc(100%-8px),calc(100%-8px)_calc(100%-8px),calc(100%-8px)_100%,8px_100%,8px_calc(100%-8px),0_calc(100%-8px))]
              "
            />

            {/* Interactive Frame Container */}
            <motion.div
              variants={cardInteractiveVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="
                relative
                cursor-pointer
                border-2
                border-fg-main
                bg-fg-main
                p-1.5
                [clip-path:polygon(0_8px,8px_8px,8px_0,calc(100%-8px)_0,calc(100%-8px)_8px,100%_8px,100%_calc(100%-8px),calc(100%-8px)_calc(100%-8px),calc(100%-8px)_100%,8px_100%,8px_calc(100%-8px),0_calc(100%-8px))]
              "
            >
              <div className="bg-bg-main p-1">
                {/* Status Bar */}
                <div
                  className="
                    flex
                    h-6
                    items-center
                    justify-between
                    border-b-2
                    border-fg-main
                    px-2
                  "
                >
                  <div className="flex items-center gap-1.5">
                    <span className="size-1.5 bg-accent" />
                    <span className="font-mono text-[8px] font-medium uppercase tracking-[0.14em]">
                      Player
                    </span>
                  </div>
                </div>

                {/* Main Photo */}
                <div className="group relative mt-1 aspect-[4/5] overflow-hidden bg-bg-surface">
                  <img
                    src="/my_profile.jpg"
                    alt="Darryl Macarandan"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-150
                      group-hover:scale-[1.02]
                    "
                  />
                  {/* Pixel grid overlay */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-[0.08]
                      [background-image:linear-gradient(to_right,rgba(21,21,21,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,21,21,0.5)_1px,transparent_1px)]
                      [background-size:8px_8px]
                      mix-blend-multiply
                    "
                  />
                </div>

                {/* Footer Label */}
                <div
                  className="
                    flex
                    items-end
                    justify-between
                    border-t
                    border-fg-main
                    px-2
                    py-2
                  "
                >
                  <div>
                    <p className="text-[11px] font-semibold tracking-tight">
                      Darryl Macarandan
                    </p>
                    <p
                      className="
                        mt-0.5
                        font-mono
                        text-[7px]
                        uppercase
                        tracking-[0.12em]
                        text-fg-muted
                      "
                    >
                      Software Developer
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Primary Action Badge */}
          <motion.div
            variants={fadeInVariants}
            className="
              relative
              z-20
              lg:pointer-events-auto
              lg:absolute
              lg:right-0
              lg:top-[62%]
              lg:-translate-y-1/2
            "
          >
            <motion.div
              variants={ctaInteractiveVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="
                border-2
                border-fg-main
                bg-bg-elevated
                p-3.5
              "
            >
              <p className="font-mono text-[9px] uppercase tracking-wider text-fg-muted">
                Primary Action
              </p>
              <a
                href="#projects"
                className="
                  group
                  mt-1.5
                  inline-flex
                  items-center
                  gap-2.5
                  bg-fg-main
                  px-3.5
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.06em]
                  text-bg-main
                  transition-colors
                  hover:bg-accent
                  hover:text-fg-main
                "
              >
                View My Work
                <span className="inline-block transition-transform duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM ROW: Metadata Left | Role Right */}
        <motion.div
          variants={fadeInVariants}
          className="
            relative
            z-20
            flex
            shrink-0
            flex-wrap
            items-end
            justify-between
            gap-2
            border-t
            border-border/50
            pb-1.5
            pt-2
          "
        >
          {/* Bottom Left: Counter / Talk Link */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="
                hidden
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-fg-muted
                underline
                decoration-border-strong
                underline-offset-4
                transition-colors
                hover:text-fg-main
                sm:block
              "
            >
              Let's talk
            </a>
          </div>

          {/* Bottom Right: Role Signature */}
          <div className="text-right">
            <span
              className="
                block
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-fg-subtle
              "
            >
              Role
            </span>
            <span
              className="
                font-display
                text-xs
                font-bold
                uppercase
                tracking-tight
                sm:text-sm
              "
            >
              Full-Stack Developer.
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}