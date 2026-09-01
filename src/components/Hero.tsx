import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        h-[calc(100svh-64px)]
        w-full
        overflow-hidden
        px-6
        py-3
        sm:px-8
        lg:px-12
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          [background-image:linear-gradient(to_right,rgba(21,21,21,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,21,21,0.04)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* Left pixel marker */}
      <div
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
      </div>

      {/* =====================================================
          MAIN SCREEN CONTAINER
      ====================================================== */}
      <div
        className="
          relative
          mx-auto
          flex
          h-full
          max-w-7xl
          flex-col
          justify-between
        "
      >
        {/* ===================================================
            TOP ROW: Headline Left | Description Right
        ==================================================== */}
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
              <span
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
              </span>

              <span className="block">I BUILD</span>

              <span className="relative block w-fit">
                SOFTWARE
                <span
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
              </span>

              <span className="relative block w-fit">
                THAT MAKES
                <span
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
              </span>

              <span className="relative block w-fit">
                SENSE.
                <span
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
              </span>
            </h1>
          </div>

          {/* Spacer for Center Portrait */}
          <div className="hidden lg:col-span-1 lg:block" />

          {/* Description (Right) */}
          <div className="lg:col-span-5 lg:pl-6">
            <p
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
            </p>
          </div>
        </div>

        {/* ===================================================
            CENTER PORTRAIT & FLOATING CTA (OVERLAY)
        ==================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >
          {/* Large Center Portrait Card */}
          <div
            className="
              pointer-events-auto
              relative
              z-10
              w-[clamp(260px,46vh,370px)]
            "
          >
            {/* Lime pixel offset backing */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                translate-x-3.5
                translate-y-3.5
                bg-accent
                [clip-path:polygon(0_8px,8px_8px,8px_0,calc(100%-8px)_0,calc(100%-8px)_8px,100%_8px,100%_calc(100%-8px),calc(100%-8px)_calc(100%-8px),calc(100%-8px)_100%,8px_100%,8px_calc(100%-8px),0_calc(100%-8px))]
              "
            />

            {/* Frame Container */}
            <div
              className="
                relative
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
                      Player 01
                    </span>
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-fg-muted">
                    Online
                  </span>
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
                      duration-500
                      group-hover:scale-[1.025]
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

                  <span className="font-mono text-[8px] text-fg-muted">
                    01
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Right Action Badge */}
          <div
            className="
              pointer-events-auto
              absolute
              right-0
              top-[62%]
              z-20
              hidden
              -translate-y-1/2
              border-2
              border-fg-main
              bg-bg-elevated
              p-3.5
              shadow-[4px_4px_0px_#151515]
              lg:block
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
                transition-all
                hover:bg-accent
                hover:text-fg-main
              "
            >
              View My Work
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* ===================================================
            BOTTOM ROW: Metadata Left | Role Right
        ==================================================== */}
        <div
          className="
            relative
            z-20
            flex
            shrink-0
            items-end
            justify-between
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
        </div>
      </div>
    </section>
  );
}