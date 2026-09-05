const principles = [
  {
    number: "01",
    title: "Problem first",
    text: "Understand what actually needs solving before reaching for a solution.",
  },
  {
    number: "02",
    title: "Systems matter",
    text: "Figure out how the pieces connect and make those relationships clear.",
  },
  {
    number: "03",
    title: "Fit the tool",
    text: "Choose technology based on the problem, the needs, and the scope.",
  },
  {
    number: "04",
    title: "Make it useful",
    text: "A good solution should ultimately make something easier or better for the person using it.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        border-t
        border-border
        bg-bg-main
      "
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
          [background-image:linear-gradient(to_right,rgba(21,21,21,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,21,21,0.035)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-24
          sm:px-8
          sm:py-28
          lg:px-12
          lg:py-32
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2 bg-accent" />

            <span
              className="
                font-mono
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-fg-muted
              "
            >
              About
            </span>
          </div>

        </div>

        {/* =====================================================
            MAIN INTRO
        ====================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-16
            lg:mt-20
            lg:grid-cols-12
            lg:items-center
            lg:gap-8
          "
        >
          {/* ---------------------------------------------------
              LEFT — IDENTITY + STATEMENT
          ---------------------------------------------------- */}

          <div className="lg:col-span-8">
            {/* Identity */}
            <div className="mb-8 flex items-end gap-4 sm:mb-10">
              <div>
                <p
                  className="
                    mt-1
                    font-display
                    text-xl
                    font-bold
                    uppercase
                    leading-none
                    tracking-[-0.045em]
                    sm:text-2xl
                  "
                >
                  Darryl Macarandan
                </p>
              </div>

              <span
                aria-hidden="true"
                className="
                  mb-1
                  size-2
                  shrink-0
                  bg-accent
                "
              />
            </div>

            {/* Main statement */}
            <div className="max-w-4xl">
              <h2
                className="
                  font-display
                  text-[clamp(3rem,3.5vw,6.5rem)]
                  font-semibold
                  uppercase
                  leading-[0.82]
                  tracking-[-0.075em]
                "
              >
                I LIKE
                <br />

                <span className="relative inline-block">
                  INTERESTING

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-[0.02em]
                      left-0
                      -z-10
                      h-[0.18em]
                      w-full
                      bg-accent
                    "
                  />
                </span>

                <br />
                PROBLEMS.
              </h2>

              {/* Supporting copy */}
              <div
                className="
                  mt-8
                  flex
                  max-w-2xl
                  items-start
                  gap-4
                  sm:gap-6
                "
              >
                
                <p
                  className="
                    max-w-xl
                    text-sm
                    leading-6
                    text-fg-muted
                    sm:text-base
                    sm:leading-7
                  "
                >
                  I enjoy building things, solving problems, figuring out how
                  systems fit together, and turning ideas into software people
                  can actually use.
                </p>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------
              RIGHT — EDUCATION ARCHIVE
          ---------------------------------------------------- */}

          <div
            className="
              lg:col-span-4
              lg:flex
              lg:justify-end
            "
          >
            <div className="relative w-full max-w-[340px]">
              {/* Archive Seal */}
              <div
                className="
                  relative
                  mx-auto
                  flex
                  size-[220px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-fg-main
                  sm:size-[240px]
                "
              >
                {/* Inner ring */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-3
                    rounded-full
                    border
                    border-border
                  "
                />

                {/* Top crosshair */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-3
                    w-px
                    -translate-x-1/2
                    bg-fg-main
                  "
                />

                {/* Bottom crosshair */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-3
                    w-px
                    -translate-x-1/2
                    bg-fg-main
                  "
                />

                {/* University mark */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    size-[136px]
                    rotate-[-4deg]
                    items-center
                    justify-center
                    border-2
                    border-fg-main
                    bg-accent
                    px-4
                    text-center
                    sm:size-[146px]
                  "
                >
                  <span
                    className="
                      font-display
                      text-[20px]
                      font-bold
                      uppercase
                      leading-[0.86]
                      tracking-[-0.055em]
                      sm:text-[21px]
                    "
                  >
                    Central
                    <br />
                    Mindanao
                    <br />
                    University
                  </span>
                </div>

                {/* Registration marks */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-[19px]
                    top-[19px]
                    size-1.5
                    bg-accent
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-[19px]
                    right-[19px]
                    size-1.5
                    bg-accent
                  "
                />
              </div>

              {/* Education information */}
              <div className="mt-7 border-t border-border pt-4">
                <div className="flex flex-col items-center justify-center text-center">
                  <p
                    className="
                      font-display
                      text-lg
                      font-bold
                      uppercase
                      leading-[0.9]
                      tracking-[-0.04em]
                    "
                  >
                    BS Information Technology
                  </p>
                </div>
              </div>

              {/* Registration line */}
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-border" />

                <span
                  className="
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.14em]
                    text-fg-subtle
                  "
                >
                  · 
                </span>

                <span className="h-px w-8 bg-border" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER / PHILOSOPHY
        ====================================================== */}

        <div
          className="
            mt-24
            border-t-2
            border-fg-main
            pt-5
            sm:mt-32
          "
        >
        
        </div>

        {/* =====================================================
            PRINCIPLES
        ====================================================== */}

        <div className="mt-2">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="
                group
                grid
                grid-cols-[42px_1fr]
                gap-4
                border-b
                border-border
                py-7
                transition-colors
                hover:bg-bg-surface/50
                sm:grid-cols-[60px_260px_1fr]
                sm:gap-6
                sm:py-8
                lg:grid-cols-[72px_300px_1fr]
              "
            >
              {/* Number */}
              <span
                className="
                  pt-1
                  font-mono
                  text-[9px]
                  tracking-[0.12em]
                  text-fg-subtle
                "
              >
                {principle.number}
              </span>

              {/* Title */}
              <h3
                className="
                  font-display
                  text-xl
                  font-bold
                  uppercase
                  leading-[0.9]
                  tracking-[-0.045em]
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                  sm:text-2xl
                  lg:text-3xl
                "
              >
                {principle.title}
              </h3>

              {/* Description */}
              <p
                className="
                  col-start-2
                  max-w-md
                  text-xs
                  leading-5
                  text-fg-muted
                  sm:col-start-auto
                  sm:text-sm
                  sm:leading-6
                "
              >
                {principle.text}
              </p>

              {/* Pixel indicator */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  size-1.5
                  translate-y-1
                  bg-accent
                  opacity-0
                  transition-opacity
                  group-hover:opacity-100
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}