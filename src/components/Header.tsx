export default function Header() {
  return (
    <header className="relative z-50 h-16">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="text-sm font-semibold tracking-[-0.02em]"
        >
          Darryl.
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#projects"
            className="text-sm text-fg-muted transition-colors hover:text-fg-main"
          >
            Work
          </a>

          <a
            href="#about"
            className="text-sm text-fg-muted transition-colors hover:text-fg-main"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-fg-muted transition-colors hover:text-fg-main"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="
            hidden
            border-b
            border-fg-main
            pb-0.5
            text-sm
            font-medium
            md:block
          "
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}