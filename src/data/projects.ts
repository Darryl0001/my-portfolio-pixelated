export type ProjectSystem = {
  title: string;
  description?: string;
  items: {
    title: string;
    icon?: string;
    items: string[];
  }[];
};

export type ProjectLessons = {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
  closing?: string;
};

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

  system: ProjectSystem;

  lessons: ProjectLessons;

  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "cmu-one",
    number: "01",
    title: "CMU One",
    type: "AI - RAG",
    stack: ["FastAPI", "TypeScript", "React" , "SQLite", "Ollama"],

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

    system: {
      title: "The system behind the assistant.",

      description:
        "Each layer has a specific responsibility, from receiving a student's question to producing a grounded response.",

      items: [
        {
          title: "CMU ONE",
          icon: "globe",
          items: ["Interface", "Sources", "Map"],
        },
        {
          title: "FASTAPI",
          icon: "layers",
          items: ["API", "Auth", "RAG"],
        },
        {
          title: "RETRIEVAL",
          icon: "search",
          items: ["Embeddings", "Search", "Context"],
        },
        {
          title: "DATA",
          icon: "database",
          items: ["Policies", "Offices", "Locations"],
        },
        {
          title: "LLM",
          icon: "bot",
          items: ["Context", "Response"],
        },
      ],
    },

    lessons: {
      title: "My Learnings and decisions",

      description:
        "Building CMU One was less about making the AI work and more about deciding how the system should work around the actual problem.",

      items: [
        {
          title: "The data model shapes the product",
          description:
            "The assistant is only as useful as the information behind it. Structuring, categorizing, and verifying university information became just as important as the AI itself.",
        },
        {
          title: "Keep the AI behind a controlled system",
          description:
            "We chose RAG instead of letting the model answer freely. The goal was not to make it sound intelligent at all costs, but to keep answers grounded in information we actually have.",
        },
        {
          title: "Separate information from location",
          description:
            "Location data was kept connected to knowledge entries instead of being mixed into the AI's context. This kept the retrieval system cleaner while allowing the same information to power the campus map.",
        },
        {
          title: "Build around the actual problem",
          description:
            "We kept the architecture small for the first version: FastAPI, SQLite, vector search, and a simple admin flow. There was no need to introduce a larger stack before the product needed it.",
        },
        {
          title: "Features should work as one system",
          description:
            "The map became more useful when it was connected to the assistant. If an answer tells a student where something is, the next useful step is helping them find it.",
        },
        {
          title: "V1 should stay focused",
          description:
            "A university assistant could eventually do much more, but adding everything early would make the system harder to maintain and trust. The first version focuses on finding information, understanding it, and acting on it.",
        },
      ],

      closing:
        "CMU One is still a work in progress. There is more to improve, but the direction is clear.",
    },

    // Remove these until you have the real URLs.
    // github: "...",
    // live: "...",
  },




  {
    slug: "nook",
    number: "02",
    title: "Nook",
    type: "Marketplace",
    stack: ["React", "TypeScript", "Laravel", "MySQL"],

    thumbnail: "/images/nook/thumbnail.webp",

    images: [
      "/images/nook/01.webp",
      "/images/nook/02.webp",
      "/images/nook/03.webp",
      "/images/nook/04.webp",
      "/images/nook/05.webp",
      "/images/nook/06.webp",
    ],

    description:
      "A second-hand marketplace where users can discover, list, and buy pre-owned items in one place.",

    overview:
      "Nook is a marketplace built around the idea of making second-hand buying and selling simpler. Users can browse listings, save items, manage their own products, purchase items, track orders, and review sellers through a single platform.",

    problem: {
      title: "Selling used items shouldn't feel complicated.",
      content:
        "Second-hand transactions often happen across scattered posts, messages, and informal channels. Buyers have to search through listings manually, while sellers need to manage product details, inquiries, and transactions without a dedicated system.",
    },

    solution: {
      title: "A marketplace for both sides of the transaction.",
      content:
        "Nook brings listings, shopping, checkout, orders, favorites, profiles, and seller reviews into one system. Users can switch between buying and selling without needing separate platforms or workflows.",
    },

    features: [
      "User authentication",
      "Marketplace browsing",
      "Product listings",
      "Listing image uploads",
      "Categories",
      "Favorites",
      "Checkout",
      "Order management",
      "Order tracking",
      "Addresses",
      "Seller profiles",
      "Seller reviews",
    ],

    system: {
      title: "The system behind the marketplace.",

      description:
        "Nook connects listings, users, checkout, and orders into one marketplace flow, with Laravel handling the business logic and MySQL storing the platform data.",

      items: [
        {
          title: "NOOK",
          icon: "globe",
          items: ["Marketplace", "Listings", "Profiles"],
        },
        {
          title: "LARAVEL",
          icon: "layers",
          items: ["API", "Auth", "Business Logic"],
        },
        {
          title: "MARKETPLACE",
          icon: "search",
          items: ["Categories", "Favorites", "Reviews"],
        },
        {
          title: "ORDERS",
          icon: "shopping-bag",
          items: ["Checkout", "Orders", "Tracking"],
        },
        {
          title: "MYSQL",
          icon: "database",
          items: ["Users", "Listings", "Transactions"],
        },
      ],
    },

    lessons: {
      title: "My Learnings and decisions",

      description:
        "Building Nook taught me that a marketplace is less about displaying products and more about connecting the different states of a transaction into one reliable system.",

      items: [
        {
          title: "A marketplace has two users in one",
          description:
            "The same person can be a buyer in one transaction and a seller in another. Designing around both roles made the product more flexible than treating them as completely separate experiences.",
        },
        {
          title: "Listings are more than products",
          description:
            "A listing carries its own images, category, seller, availability, and state. Modeling those relationships properly became important for keeping the marketplace consistent.",
        },
        {
          title: "The transaction needs a clear lifecycle",
          description:
            "Checkout is only one step. Orders, order items, and order events give the system a way to represent what happens after a purchase is made.",
        },
        {
          title: "Images are part of the product experience",
          description:
            "For second-hand items, buyers rely heavily on visual information. Supporting multiple listing images made the product feel more like a real marketplace rather than a simple database of items.",
        },
        {
          title: "Trust has to be part of the system",
          description:
            "Seller profiles, favorites, and reviews give buyers more context before purchasing. These features are small individually, but together they make the marketplace feel more trustworthy.",
        },
        {
          title: "Keep the architecture organized around the domain",
          description:
            "Separating authentication, listings, marketplace features, checkout, orders, profiles, and reviews kept the backend easier to reason about as the number of features grew.",
        },
      ],

      closing:
        "Nook gave me a better understanding of how a real marketplace connects users, products, and transactions into one system.",
    },

    // Add these when you have the real URLs.
    // github: "...",
    // live: "...",
  },
];