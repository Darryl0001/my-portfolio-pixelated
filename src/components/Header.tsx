import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative z-50 h-16 border-b border-border bg-bg-main">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          to="/#home"
          onClick={closeMenu}
          className="text-sm font-semibold tracking-[-0.02em]"
        >
          Darryl.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          <Link
            to="/#projects"
            className="text-sm text-fg-muted transition-colors hover:text-fg-main"
          >
            Work
          </Link>

          <Link
            to="/#about"
            className="text-sm text-fg-muted transition-colors hover:text-fg-main"
          >
            About
          </Link>

          <Link
            to="/#contact"
            className="text-sm text-fg-muted transition-colors hover:text-fg-main"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/#contact"
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
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            flex
            size-9
            items-center
            justify-center
            border
            border-fg-main
            bg-bg-main
            text-fg-main
            md:hidden
          "
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            absolute
            left-0
            top-16
            w-full
            border-b
            border-fg-main
            bg-bg-main
            px-6
            py-6
            shadow-[0_4px_0_var(--color-fg-main)]
            md:hidden
          "
        >
          <nav className="flex flex-col gap-4">
            <Link
              to="/#projects"
              onClick={closeMenu}
              className="text-sm text-fg-muted transition-colors hover:text-fg-main"
            >
              Work
            </Link>

            <Link
              to="/#about"
              onClick={closeMenu}
              className="text-sm text-fg-muted transition-colors hover:text-fg-main"
            >
              About
            </Link>

            <Link
              to="/#contact"
              onClick={closeMenu}
              className="text-sm text-fg-muted transition-colors hover:text-fg-main"
            >
              Contact
            </Link>

            <div className="pt-2">
              <Link
                to="/#contact"
                onClick={closeMenu}
                className="
                  inline-block
                  border-b
                  border-fg-main
                  pb-0.5
                  text-sm
                  font-medium
                "
              >
                Let's talk
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
