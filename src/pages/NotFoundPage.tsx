import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-bg-main px-6 py-16 sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          {/* Main */}
          <div>
            <p
              className="
                mb-6
                font-mono
                text-[10px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-fg-muted
              "
            >
              Error / Page not found
            </p>

            <div className="relative">
              <h1
                className="
                  font-display
                  text-[clamp(7rem,22vw,18rem)]
                  font-bold
                  leading-[0.72]
                  tracking-[-0.09em]
                "
              >
                404
              </h1>

              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-[5%]
                  left-[2%]
                  -z-10
                  h-[0.16em]
                  w-[4.5em]
                  bg-accent
                "
              />
            </div>

            <div className="mt-10 max-w-md">
              <h2
                className="
                  font-display
                  text-2xl
                  font-bold
                  uppercase
                  tracking-[-0.04em]
                  sm:text-3xl
                "
              >
                Looks like this page got lost.
              </h2>

              <p className="mt-3 text-sm leading-6 text-fg-muted">
                The page you're looking for doesn't exist or may have moved.
              </p>

              <Link
                to="/"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  border-2
                  border-fg-main
                  bg-fg-main
                  px-4
                  py-3
                  font-mono
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-bg-main
                  shadow-[4px_4px_0_var(--color-accent)]
                  transition-transform
                  duration-150
                  hover:-translate-x-0.5
                  hover:-translate-y-0.5
                  hover:shadow-[5px_5px_0_var(--color-accent)]
                  active:translate-x-1
                  active:translate-y-1
                  active:shadow-none
                "
              >
                <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
                Back home
              </Link>
            </div>
          </div>

          {/* Decorative coordinate */}
          <div
            className="
              hidden
              border-l-2
              border-fg-main
              pl-5
              font-mono
              text-[10px]
              uppercase
              leading-5
              tracking-[0.12em]
              text-fg-muted
              lg:block
            "
          >
            <div>STATUS: LOST</div>
            <div>ROUTE: UNKNOWN</div>
            <div className="mt-3 flex items-center gap-2 text-fg-main">
              <ArrowUpRight size={14} aria-hidden="true" />
              <span>RETURN TO START</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}