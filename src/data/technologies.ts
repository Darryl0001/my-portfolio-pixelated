// src/data/technologies.ts

import {
  SiCss,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiJavascript,
  SiLaravel,
  SiLeaflet,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiPhp,
  SiPython,
  SiReact,
  SiReactivex,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const technologies = {
  React: {
    icon: SiReact,
    color: "#61DAFB",
  },
  "React Native": {
    icon: SiReactivex,
    color: "#61DAFB",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
  },
  JavaScript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  FastAPI: {
    icon: SiFastapi,
    color: "#009688",
  },
  Express: {
    icon: SiExpress,
    color: "#000000",
  },
  Node: {
    icon: SiNodedotjs,
    color: "#5FA04E",
  },
  Python: {
    icon: SiPython,
    color: "#3776AB",
  },
  Flask: {
    icon: SiFlask,
    color: "#000000",
  },
  Laravel: {
    icon: SiLaravel,
    color: "#FF2D20",
  },
  PHP: {
    icon: SiPhp,
    color: "#777BB4",
  },
  MySQL: {
    icon: SiMysql,
    color: "#4479A1",
  },
  SQLite: {
    icon: SiSqlite,
    color: "#003B57",
  },
  MongoDB: {
    icon: SiMongodb,
    color: "#47A248",
  },
  Leaflet: {
    icon: SiLeaflet,
    color: "#199900",
  },
  Ollama: {
    icon: SiOllama,
    color: "#000000",
  },
  Expo: {
    icon: SiExpo,
    color: "#000000",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "#000000",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  CSS: {
    icon: SiCss,
    color: "#1572B6",
  },
} as const;