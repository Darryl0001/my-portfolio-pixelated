import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Project One",
    type: "Web Application",
    stack: "React · TypeScript",
    image: "images/1.png",
    featured: true,
  },
  {
    number: "02",
    title: "Project Two",
    type: "Mobile Application",
    stack: "React Native · Expo",
    image: "images/2.png",
    featured: false,
  },
  {
    number: "03",
    title: "Project Three",
    type: "Web Application",
    stack: "Laravel · MySQL",
    image: "images/3.png",
    featured: false,
  },
  {
    number: "04",
    title: "Project Four",
    type: "Web Application",
    stack: "React · Node.js",
    image: "images/4.png",
    featured: false,
  },
  {
    number: "05",
    title: "Project Five",
    type: "Mobile Application",
    stack: "React Native · SQLite",
    image: "images/5.png",
    featured: true,
  },
  {
    number: "06",
    title: "Project Six",
    type: "Web Application",
    stack: "Flask · MySQL",
    image: "images/6.png",
    featured: false,
  },
  {
    number: "07",
    title: "Project Seven",
    type: "Web Application",
    stack: "React · Express",
    image: "images/7.png",
    featured: false,
  },
  {
    number: "08",
    title: "Project Eight",
    type: "Mobile Application",
    stack: "React Native · Expo",
    image: "images/8.png",
    featured: false,
  },
  {
    number: "09",
    title: "Project Nine",
    type: "Web Application",
    stack: "Laravel · MySQL",
    image: "images/9.png",
    featured: true,
  },
];

const EASE_BRUTAL = [0.16, 1, 0.3, 1] as const;

const cardVariants: Variants = {
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

const imageVariants: Variants = {
  rest: {
    scale: 1,
  },

  hover: {
    scale: 1.025,
    transition: {
      duration: 0.25,
      ease: EASE_BRUTAL,
    },
  },
};

const arrowVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
    opacity: 0,
  },

  hover: {
    x: 2,
    y: -2,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: EASE_BRUTAL,
    },
  },
};

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof projects)[number];
  large?: boolean;
}) {
  return (
    <motion.a
      href="#"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={`
        group
        relative
        block
        ${large ? "lg:col-span-2" : ""}
      `}
    >
      <div className="relative overflow-hidden border-2 border-fg-main bg-fg-main">
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            translate-x-2 translate-y-2
            bg-accent
            transition-transform duration-200
            group-hover:translate-x-3
            group-hover:translate-y-3
          "
        />

        <div className="relative aspect-[16/10] overflow-hidden bg-bg-surface">
          <motion.img
            variants={imageVariants}
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />

          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-fg-main/0
              transition-colors duration-200
              group-hover:bg-fg-main/5
            "
          />

          <span
            className="
              absolute left-3 top-3
              border border-fg-main
              bg-bg-main
              px-2 py-1
              font-mono
              text-[9px]
              font-medium
              tracking-[0.12em]
            "
          >
            {project.number}
          </span>

          <motion.span
            variants={arrowVariants}
            className="
              absolute right-3 top-3
              flex size-8
              items-center justify-center
              border border-fg-main
              bg-bg-main
            "
          >
            <ArrowUpRight
              size={15}
              strokeWidth={2}
            />
          </motion.span>
        </div>

        <div
          className="
            relative
            flex items-end justify-between
            gap-4
            border-t-2 border-fg-main
            bg-bg-main
            px-3 py-3
            sm:px-4 sm:py-3.5
          "
        >
          <div className="min-w-0">
            <h3
              className="
                font-display
                text-base
                font-bold
                tracking-[-0.025em]
                sm:text-lg
              "
            >
              {project.title}
            </h3>

            <p
              className="
                mt-0.5
                font-mono
                text-[8px]
                uppercase
                tracking-[0.1em]
                text-fg-muted
                sm:text-[9px]
              "
            >
              {project.type}
            </p>
          </div>

          <span
            className="
              shrink-0
              font-mono
              text-[8px]
              uppercase
              tracking-[0.08em]
              text-fg-muted
            "
          >
            {project.stack}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        border-t
        border-border
        px-6
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between sm:mb-12">
          <div>
            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-fg-muted
              "
            >
              Selected work
            </span>

            <h2
              className="
                mt-2
                font-display
                text-4xl
                font-bold
                uppercase
                leading-none
                tracking-[-0.06em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Projects
            </h2>
          </div>

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-fg-subtle
            "
          >
            09 projects
          </span>
        </div>

        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-4
            lg:gap-6
          "
        >
          <ProjectCard
            project={projects[0]}
            large
          />

          <ProjectCard
            project={projects[1]}
          />

          <ProjectCard
            project={projects[2]}
          />

          <ProjectCard
            project={projects[3]}
          />

          <ProjectCard
            project={projects[4]}
            large
          />

          <ProjectCard
            project={projects[5]}
          />

          <ProjectCard
            project={projects[6]}
          />

          <ProjectCard
            project={projects[7]}
          />

          <ProjectCard
            project={projects[8]}
            large
          />
        </div>
      </div>
    </section>
  );
}