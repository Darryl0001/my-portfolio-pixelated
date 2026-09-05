import { motion, type Variants } from "framer-motion";
import {
  SiCss,
  SiExpo,
  SiExpress,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const technologies = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#151515" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Flask", icon: SiFlask, color: "#151515" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "Expo", icon: SiExpo, color: "#151515" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
];

// Snappy mechanical curve matching the hero section
const EASE_BRUTAL = [0.16, 1, 0.3, 1] as const;

// Micro-interaction variants for individual technology blocks
const blockVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
    boxShadow: "0px 0px 0px #151515",
    zIndex: 1,
  },
  hover: {
    x: -3,
    y: -3,
    boxShadow: "4px 4px 0px #151515",
    zIndex: 10,
    transition: {
      duration: 0.15,
      ease: EASE_BRUTAL,
    },
  },
  tap: {
    x: 0,
    y: 0,
    boxShadow: "0px 0px 0px #151515",
    transition: {
      duration: 0.08,
    },
  },
};

const iconVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.1,
    y: -2,
    transition: { duration: 0.15, ease: EASE_BRUTAL },
  },
};

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="
        relative
        overflow-hidden
        border-y
        border-border
        py-20
        sm:px-8
        lg:px-12
        lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            grid
            grid-cols-2
            gap-px
            border
            border-border
            bg-border
            sm:grid-cols-3
            lg:grid-cols-8
          "
        >
          {technologies.map(({ name, icon: Icon, color }, index) => (
            <motion.div
              key={name}
              variants={blockVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="
                group
                relative
                flex
                min-h-[110px]
                cursor-pointer
                items-center
                gap-4
                border
                border-transparent
                bg-bg-main
                px-5
                py-5
                transition-colors
                hover:border-fg-main
                hover:bg-bg-elevated
                sm:min-h-[120px]
                sm:px-6
              "
            >
              {/* Pixel index */}
              <span
                className="
                  absolute
                  right-3
                  top-3
                  font-mono
                  text-[8px]
                  tracking-wider
                  text-fg-subtle
                  transition-colors
                  group-hover:text-fg-main
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Animated Icon */}
              <motion.div variants={iconVariants} className="shrink-0">
                <Icon size={30} color={color} />
              </motion.div>

              {/* Name */}
              <span
                className="
                  font-display
                  text-sm
                  font-semibold
                  tracking-[-0.02em]
                  sm:text-base
                "
              >
                {name}
              </span>

              {/* Pixel corner accent */}
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
                  group-hover:opacity-100
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}