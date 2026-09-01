const principles = [
  {
    number: "01",
    title: "Start with the problem",
    text: "Understand what actually needs to be solved before deciding how to solve it.",
  },
  {
    number: "02",
    title: "Figure out the system",
    text: "Break things down, understand how the pieces connect, and build from there.",
  },
  {
    number: "03",
    title: "Fit the tool",
    text: "Choose technologies based on the problem, the needs, and the scope.",
  },
  {
    number: "04",
    title: "Make it useful",
    text: "A good technical solution should ultimately make something easier or better for the person using it.",
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
      <div
        className="
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
            INTRO
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-12
            lg:gap-8
          "
        >
          {/* Label */}
          <div className="lg:col-span-2">
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

          {/* Main statement */}
          <div className="lg:col-span-7">
            <h2
              className="
                font-display
                text-[clamp(2.5rem,5vw,5.25rem)]
                font-bold
                uppercase
                leading-[0.88]
                tracking-[-0.065em]
              "
            >
              I like building things
              <br />
              that have a reason
              <br />
              to exist.
            </h2>

            <p
              className="
                mt-8
                max-w-xl
                text-sm
                leading-6
                text-fg-muted
                sm:text-base
                sm:leading-7
              "
            >
              I enjoy solving problems, figuring out how systems fit
              together, and turning ideas into software people can
              actually use.
            </p>
          </div>

          {/* Small identity block */}
          <div
            className="
              flex
              items-end
              lg:col-span-3
              lg:justify-end
            "
          >
            <div
              className="
                relative
                w-full
                max-w-[230px]
                border-2
                border-fg-main
                bg-bg-elevated
                p-4
              "
            >
              {/* Pixel corner */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  -right-1.5
                  -top-1.5
                  size-3
                  bg-accent
                "
              />

              <span
                className="
                  block
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.16em]
                  text-fg-subtle
                "
              >
                Currently
              </span>

              <p
                className="
                  mt-5
                  font-display
                  text-sm
                  font-bold
                  uppercase
                  leading-tight
                  tracking-[-0.02em]
                "
              >
                Central Mindanao
                <br />
                University
              </p>

              <div className="mt-3 border-t border-border pt-3">
                <p
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.1em]
                    text-fg-muted
                  "
                >
                  BSIT · Student
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="my-20 h-px bg-border sm:my-24" />

        {/* =====================================================
            PRINCIPLES
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-12
            lg:gap-8
          "
        >
          {/* Section label */}
          <div className="lg:col-span-3">
            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-fg-muted
              "
            >
              How I build
            </span>

            <p
              className="
                mt-4
                max-w-[220px]
                text-xs
                leading-5
                text-fg-subtle
              "
            >
              A few principles I try to keep in mind when turning
              problems into software.
            </p>
          </div>

          {/* Principles */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 border-t border-border sm:grid-cols-2">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="
                    group
                    relative
                    border-b
                    border-border
                    py-7
                    sm:px-6
                    sm:py-8
                    lg:px-8
                    lg:py-9
                    lg:first:border-r
                  "
                >
                  {/* Number */}
                  <span
                    className="
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
                      mt-5
                      max-w-xs
                      font-display
                      text-xl
                      font-bold
                      uppercase
                      leading-[0.95]
                      tracking-[-0.04em]
                      transition-transform
                      duration-200
                      group-hover:-translate-x-0.5
                      sm:text-2xl
                    "
                  >
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      max-w-sm
                      text-xs
                      leading-5
                      text-fg-muted
                      sm:text-sm
                      sm:leading-6
                    "
                  >
                    {principle.text}
                  </p>

                  {/* Pixel accent */}
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
                      duration-200
                      group-hover:opacity-100
                    "
                  />
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING LINE
        ====================================================== */}

        <div
          className="
            mt-20
            flex
            flex-col
            gap-4
            border-t
            border-border
            pt-6
            sm:mt-24
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-fg-subtle
            "
          >
            Problem · System · Tool · Solution
          </span>

          <span
            className="
              font-display
              text-sm
              font-semibold
              tracking-[-0.02em]
            "
          >
            Build what makes sense.
          </span>
        </div>
      </div>
    </section>
  );
}
