import React, { useState } from "react";
import { ArrowUpRight, Check, Mail, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "darrylmacarandan01@gmail.com",
    href: "mailto:darrylmacarandan01@gmail.com",
    icon: Mail,
    isCopyable: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Darryl0001",
    href: "https://github.com/Darryl0001",
    icon: GithubIcon,
    isCopyable: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/darryl-macarandan-90149b32a",
    href: "https://www.linkedin.com/in/darryl-macarandan-90149b32a/",
    icon: LinkedinIcon,
    isCopyable: false,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleCopyEmail = (e: React.MouseEvent, href: string, isCopyable: boolean) => {
    if (!isCopyable) return;
    e.preventDefault();
    const email = href.replace("mailto:", "");
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3500);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-t
        border-border
        bg-bg-main
      "
    >
      {/* Background Grid */}
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
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="size-2 bg-accent"
            />
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-fg-muted">
              Contact
            </span>
          </div>
        </div>

        {/* INTRO */}
        <div className="mt-16 grid grid-cols-1 gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <h2
              className="
                font-display
                text-[clamp(4rem,9vw,9rem)]
                font-bold
                
                leading-[0.78]
                tracking-[-0.085em]
              "
            >
              LET'S
              <br />
              <span className="relative inline-block">
                BUILD
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-[0.02em]
                    left-0
                    -z-10
                    h-[0.16em]
                    w-full
                    bg-accent
                  "
                />
              </span>
              <br />
              SOMETHING.
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4 lg:justify-end">
            <div className="max-w-xs">
              <p
                className="
                  font-display
                  text-2xl
                  font-bold
                  uppercase
                  leading-[0.9]
                  tracking-[-0.045em]
                  sm:text-3xl
                "
              >
                Freelance
                <br />
                Collaboration
                <br />
                Interesting projects
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT LINKS */}
        <div className="mt-20 border-t-2 border-fg-main sm:mt-28">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            const isEmail = link.isCopyable;

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                onClick={(e) => handleCopyEmail(e, link.href, link.isCopyable)}
                whileHover={{ x: 6 }}
                whileTap={{ x: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="
                  group
                  relative
                  grid
                  grid-cols-[28px_65px_1fr_auto]
                  items-center
                  gap-4
                  border-b
                  border-border
                  py-6
                  transition-colors
                  hover:bg-bg-surface/50
                  sm:grid-cols-[32px_90px_1fr_auto]
                  sm:py-7
                "
              >
                <Icon
                  className="
                    size-4
                    text-fg-muted
                    transition-colors
                    group-hover:text-fg-main
                  "
                  strokeWidth={1.8}
                />

                <span
                  className="
                    font-mono
                    text-[12px]
                    uppercase
                    tracking-[0.16em]
                    text-fg-subtle
                  "
                >
                  {link.label}
                </span>

                <span
                  className="
                    min-w-0
                    truncate
                    font-display
                    text-base
                    font-bold
                    uppercase
                    tracking-[-0.025em]
                    sm:text-xl
                  "
                >
                  {isEmail && copied ? (
                    <span className="text-accent">COPIED TO CLIPBOARD!</span>
                  ) : (
                    link.value
                  )}
                </span>

                <div className="relative flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {isEmail && copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      >
                        <Check className="size-4 text-accent" strokeWidth={2.5} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="arrow"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <ArrowUpRight
                          className="
                            size-4
                            shrink-0
                            transition-transform
                            duration-200
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                          "
                          strokeWidth={1.8}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-accent
                    transition-all
                    duration-200
                    group-hover:w-10
                  "
                />
              </motion.a>
            );
          })}
        </div>

        {/* MESSAGE */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="mt-4 max-w-xs text-sm leading-6 text-fg-muted">
              Have something worth building? Tell me what you're working on.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="
              lg:col-span-8
              lg:border-l
              lg:border-border
              lg:pl-10
            "
          >
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              {/* NAME */}
              <label className="group relative block">
                <span
                  className="
                    font-mono
                    text-[12px]
                    uppercase
                    tracking-[0.16em]
                    text-fg-subtle
                    transition-colors
                    group-focus-within:text-fg-main
                  "
                >
                  Name
                </span>

                <div className="relative mt-2">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="
                      peer
                      h-12
                      w-full
                      border-2
                      border-fg-main
                      bg-bg-elevated
                      px-4
                      font-mono
                      text-xs
                      text-fg-main
                      outline-none
                      shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.1)]
                      transition-all
                      placeholder:text-fg-subtle
                      hover:border-accent
                      focus:border-accent
                      focus:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.2),4px_4px_0px_0px_rgba(0,0,0,1)]
                    "
                  />

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -top-1
                      -left-1
                      size-1.5
                      bg-accent
                      opacity-0
                      transition-opacity
                      peer-focus:opacity-100
                    "
                  />
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-1
                      -right-1
                      size-1.5
                      bg-accent
                      opacity-0
                      transition-opacity
                      peer-focus:opacity-100
                    "
                  />
                </div>
              </label>

              {/* EMAIL */}
              <label className="group relative block">
                <span
                  className="
                    font-mono
                    text-[12px]
                    uppercase
                    tracking-[0.16em]
                    text-fg-subtle
                    transition-colors
                    group-focus-within:text-fg-main
                  "
                >
                  Email
                </span>

                <div className="relative mt-2">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="
                      peer
                      h-12
                      w-full
                      border-2
                      border-fg-main
                      bg-bg-elevated
                      px-4
                      font-mono
                      text-xs
                      text-fg-main
                      outline-none
                      shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.1)]
                      transition-all
                      placeholder:text-fg-subtle
                      hover:border-accent
                      focus:border-accent
                      focus:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.2),4px_4px_0px_0px_rgba(0,0,0,1)]
                    "
                  />

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -top-1
                      -left-1
                      size-1.5
                      bg-accent
                      opacity-0
                      transition-opacity
                      peer-focus:opacity-100
                    "
                  />
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-1
                      -right-1
                      size-1.5
                      bg-accent
                      opacity-0
                      transition-opacity
                      peer-focus:opacity-100
                    "
                  />
                </div>
              </label>
            </div>

            {/* MESSAGE */}
            <label className="group relative mt-7 block">
              <span
                className="
                  font-mono
                  text-[12px]
                  uppercase
                  tracking-[0.16em]
                  text-fg-subtle
                  transition-colors
                  group-focus-within:text-fg-main
                "
              >
                Message
              </span>

              <div className="relative mt-2">
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about the problem you're trying to solve..."
                  className="
                    peer
                    w-full
                    resize-none
                    border-2
                    border-fg-main
                    bg-bg-elevated
                    px-4
                    py-3.5
                    font-mono
                    text-xs
                    leading-6
                    text-fg-main
                    outline-none
                    shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.1)]
                    transition-all
                    placeholder:text-fg-subtle
                    hover:border-accent
                    focus:border-accent
                    focus:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.2),4px_4px_0px_0px_rgba(0,0,0,1)]
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -top-1
                    -left-1
                    size-1.5
                    bg-accent
                    opacity-0
                    transition-opacity
                    peer-focus:opacity-100
                  "
                />
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -bottom-1
                    -right-1
                    size-1.5
                    bg-accent
                    opacity-0
                    transition-opacity
                    peer-focus:opacity-100
                  "
                />
              </div>
            </label>

            {/* SUBMIT BUTTON */}
            <motion.button
              type="submit"
              disabled={status !== "idle"}
              whileHover={status === "idle" ? { x: -2, y: -2 } : {}}
              whileTap={status === "idle" ? { x: 0, y: 0 } : {}}
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                border-2
                border-fg-main
                bg-fg-main
                px-5
                py-3
                font-mono
                text-[9px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-bg-main
                shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                transition-shadow
                hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                active:shadow-none
                disabled:cursor-not-allowed
                disabled:opacity-80
              "
            >
              {status === "submitting" && (
                <>
                  <span>SENDING...</span>
                  <Loader2 className="size-3.5 animate-spin" />
                </>
              )}

              {status === "success" && (
                <>
                  <span>MESSAGE SENT</span>
                  <Check className="size-3.5 text-accent" strokeWidth={2.5} />
                </>
              )}

              {status === "idle" && (
                <>
                  <span>Send message</span>
                  <ArrowUpRight
                    className="
                      size-3.5
                      transition-transform
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                    strokeWidth={2}
                  />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}