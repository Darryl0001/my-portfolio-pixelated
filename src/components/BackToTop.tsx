import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER = 600;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={[
        "fixed bottom-5 right-5 z-50",
        "flex h-11 w-11 items-center justify-center",
        "border-2 border-fg-main bg-bg-main",
        "text-fg-main shadow-[4px_4px_0_var(--color-fg-main)]",
        "transition-all duration-200",
        "hover:-translate-x-0.5 hover:-translate-y-0.5",
        "hover:shadow-[5px_5px_0_var(--color-fg-main)]",
        "active:translate-x-1 active:translate-y-1",
        "active:shadow-none",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg-main",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      ].join(" ")}
    >
      <ArrowUp
        className="h-4 w-4"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    </button>
  );
}