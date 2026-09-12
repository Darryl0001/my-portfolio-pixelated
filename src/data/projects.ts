export type Project = {
  slug: string;
  number: string;
  title: string;
  type: string;
  stack: string[];

  thumbnail: string;
  images: string[];

  description: string;
  overview: string;

  problem: {
    title: string;
    content: string;
  };

  solution: {
    title: string;
    content: string;
  };

  features: string[];

  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "cmu-one",
    number: "01",
    title: "CMU One",
    type: "AI - RAG",
    stack: ["FastAPI", "TypeScript", "React", "SQLite", "Ollama"],

    thumbnail: "/images/cmu1/thumbnail.webp",

    images: [
      "/images/cmu1/01.webp",
      "/images/cmu1/02.webp",
      "/images/cmu1/03.webp",
    ],

    description:
      "An AI-powered university assistant designed to make Central Mindanao University information easier to find, understand, and use.",

    overview:
      "CMU One combines a retrieval-augmented AI assistant with a searchable university knowledge base and interactive campus map. The goal is to give students a more direct way to find reliable information instead of searching through scattered documents, pages, and announcements.",

    problem: {
      title: "Finding information shouldn't be difficult.",
      content:
        "University information can be spread across different sources, offices, documents, and online channels. Students often have to figure out where information lives before they can even find the answer they need.",
    },

    solution: {
      title: "One place for university information.",
      content:
        "CMU One uses a verified knowledge base and retrieval-augmented generation to answer questions using available university information. Relevant sources are returned with the answer, while the campus map helps users find physical offices and locations.",
    },

    features: [
      "AI-powered university assistant",
      "Retrieval-augmented generation",
      "Verified knowledge base",
      "Source references",
      "Interactive campus map",
      "Location actions from chat",
      "Knowledge management",
      "Chat history",
    ],

    github: "https://github.com/example/cmu-one",
    live: "https://example.com",
  },

  {
    slug: "project-two",
    number: "02",
    title: "Project Two",
    type: "Mobile Application",
    stack: ["React Native", "Expo", "SQLite"],

    thumbnail: "/images/2.png",

    images: [
      "/images/project-two/01.png",
      "/images/project-two/02.png",
    ],

    description:
      "A mobile application built around a simple workflow for managing everyday tasks.",

    overview:
      "Project Two explores how a focused mobile interface can make a repetitive workflow faster and easier to manage.",

    problem: {
      title: "Too many steps for simple tasks.",
      content:
        "The existing workflow required users to move between different screens and manually keep track of information.",
    },

    solution: {
      title: "Keep the workflow focused.",
      content:
        "The application brings the most important actions into a single mobile experience while keeping the interface lightweight and easy to understand.",
    },

    features: [
      "Mobile-first interface",
      "Offline data storage",
      "Task management",
      "Search and filtering",
    ],

    github: "https://github.com/example/project-two",
  },

  {
    slug: "project-three",
    number: "03",
    title: "Project Three",
    type: "Web Application",
    stack: ["Laravel", "MySQL", "Tailwind CSS"],

    thumbnail: "/images/3.png",

    images: [
      "/images/project-three/01.png",
      "/images/project-three/02.png",
    ],

    description:
      "A web application focused on organizing information and simplifying an administrative workflow.",

    overview:
      "Project Three was built to replace a manual process with a centralized web-based system.",

    problem: {
      title: "Manual processes become difaficult to manage.",
      content:
        "Information was previously handled across separate files and manual processes, making it difficult to keep everything organized.",
    },

    solution: {
      title: "Centralize the workflow.",
      content:
        "The application provides a single system for managing records, searching information, and performing common administrative tasks.",
    },

    features: [
      "Record management",
      "Search and filtering",
      "Authentication",
      "Responsive interface",
    ],

    github: "https://github.com/example/project-three",
  },
];