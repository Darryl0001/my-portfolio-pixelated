import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-hidden">
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(21,21,21,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,21,21,0.035)_1px,transparent_1px)]
          bg-[size:40px_40px]
          mask-[linear-gradient(to_bottom,black_0%,transparent_90%)]
        "
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* --------------------------------------------------
              COPY
          -------------------------------------------------- */}

          <div className="relative z-10 max-w-3xl">
            <h1
              className="
                text-[clamp(3.75rem,8vw,7.5rem)]
                font-black
                leading-[0.84]
                tracking-[-0.075em]
              "
            >
              <span className="block">Software</span>

              <span className="relative mt-2 block w-fit">
                Developer
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-1
                    left-0
                    -z-10
                    h-[0.16em]
                    w-full
                    bg-accent
                  "
                />
              </span>
            </h1>

            <p
              className="
                mt-9
                max-w-xl
                text-base
                leading-7
                text-fg-muted
                sm:text-lg
              "
            >
              I build practical software across web, mobile, and
              backend systems.
            </p>

            <div className="mt-9">
              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-fg-main
                  bg-fg-main
                  px-5
                  py-3.5
                  text-sm
                  font-medium
                  text-bg-main
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                "
              >
                View my work

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* --------------------------------------------------
              PHOTO
          -------------------------------------------------- */}

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">

            {/* Lime offset block */}
            <div
              aria-hidden="true"
              className="
                absolute
                -right-3
                -bottom-3
                h-full
                w-full
                bg-accent
              "
            />

            {/* Pixel corner details */}
            <div
              aria-hidden="true"
              className="
                absolute
                -top-4
                -left-4
                z-10
                grid
                grid-cols-3
                gap-1.5
              "
            >
              <span className="size-2 bg-fg-main" />
              <span className="size-2 bg-fg-main" />
              <span className="size-2 bg-fg-main" />
              <span className="size-2 bg-fg-main" />
              <span className="size-2 bg-accent" />
              <span className="size-2 bg-fg-main" />
            </div>

            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                border
                border-fg-main
                bg-bg-surface
              "
            >
              <img
                src="/profile.jpg"
                alt="Darryl Macarandan"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  grayscale-[15%]
                "
              />
            </div>

            {/* Small pixel marker */}
            <div
              aria-hidden="true"
              className="
                absolute
                -right-5
                top-1/2
                grid
                grid-cols-2
                gap-1.5
              "
            >
              <span className="size-2 bg-fg-main" />
              <span className="size-2 bg-accent" />
              <span className="size-2 bg-accent" />
              <span className="size-2 bg-fg-main" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}