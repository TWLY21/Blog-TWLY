export type ProjectItem = {
  id: string;
  category: string;
  year: string;
  title: string;
  description: string;
  tech: string[];
  role: string;
  preview: string;
  github?: string;
  demo?: string;
};

export const projects: ProjectItem[] = [
  {
    id: "leave-system",
    category: "Full-Stack Platform",
    year: "2026",
    title: "Leave Management System",
    description:
      "Production-oriented leave system with employee/admin workflows, RBAC, and a data-driven Playwright automation layer for scalable leave-rule validation.",
    tech: ["Node.js", "Express", "Vue 3", "PostgreSQL", "SQLite", "Playwright", "GitHub Actions"],
    role: "Designed API modules, role-based flows, and a maintainable Playwright framework (fixtures + flows + scenario data) with CI-ready structure.",
    preview: "/covers/cover-1.svg",
    github: "https://github.com/TWLY21/leave-system"
  },
  {
    id: "mini-erp-system",
    category: "Business Systems",
    year: "2026",
    title: "Mini ERP System",
    description:
      "Internal ERP starter with modular backend, responsive Vue frontend, and role-based authorization for admin, manager, and employee flows.",
    tech: ["Vue 3", "Vite", "Node.js", "Express", "PostgreSQL", "JWT", "bcrypt"],
    role: "Structured backend modules, auth architecture, and frontend admin workflow foundation.",
    preview: "/covers/cover-2.svg",
    github: "https://github.com/TWLY21/Mini-ERP-System"
  },
  {
    id: "swipe-match-app",
    category: "Mobile App",
    year: "2026",
    title: "Swipe Match App",
    description:
      "Swipe-based matching mobile app with reusable card UI, gesture interaction, match-state handling, and tabbed mobile navigation.",
    tech: ["React Native", "JavaScript", "React Navigation", "Context API"],
    role: "Implemented swipe interactions, match logic, and modular screen/component architecture.",
    preview: "/covers/cover-3.svg",
    github: "https://github.com/TWLY21/swipe-match-app"
  },
  {
    id: "inventory-management-app",
    category: "Mobile + Backend",
    year: "2026",
    title: "Inventory Management App",
    description:
      "Production-style inventory management skeleton combining a React Native client with Node.js/Express/PostgreSQL backend design.",
    tech: ["React Native CLI", "Node.js", "Express", "PostgreSQL", "JWT"],
    role: "Defined scalable project structure and integration plan for mobile-backend workflows.",
    preview: "/covers/cover-1.svg",
    github: "https://github.com/TWLY21/Inventory-Management-app"
  },
  {
    id: "music-player-react",
    category: "Frontend Product",
    year: "2026",
    title: "PulseDeck Music Player",
    description:
      "Modern music player with synchronized audio state, playlist interactions, and responsive UI design focused on polished UX.",
    tech: ["React", "Vite", "HTML5 Audio API", "CSS"],
    role: "Built playback state synchronization, interaction polish, and responsive layout behavior.",
    preview: "/covers/cover-2.svg",
    github: "https://github.com/TWLY21/music-player-react"
  }
];
