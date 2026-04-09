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
      "Production-style inventory management skeleton combining a mobile client mindset with backend API planning and scalable structure.",
    tech: ["React Native", "Node.js", "Express", "PostgreSQL", "JWT"],
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
      "Modern music player with synchronized playback state, playlist interactions, and responsive UI behavior.",
    tech: ["React", "Vite", "HTML5 Audio API", "CSS"],
    role: "Built playback state synchronization, interaction polish, and responsive layout behavior.",
    preview: "/covers/cover-2.svg",
    github: "https://github.com/TWLY21/music-player-react"
  },
  {
    id: "blog-twly",
    category: "Portfolio Platform",
    year: "2026",
    title: "Blog TWLY",
    description:
      "Editorial-style portfolio blog for publishing engineering writeups and showcasing projects through a structured content system.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown"],
    role: "Designed and maintained the content architecture, project indexing flow, and editorial presentation.",
    preview: "/covers/cover-3.svg",
    github: "https://github.com/TWLY21/Blog-TWLY"
  },  {
    id: "ai-bug-report-assistant",
    category: "AI Workflow Tool",
    year: "2026",
    title: "AI Bug Report Assistant",
    description:
      "Project focused on improving bug reporting workflow with AI-assisted issue structuring and clearer defect communication.",
    tech: ["AI Workflow", "Automation", "Documentation"],
    role: "Explored structured reporting flow and developer-friendly issue detail generation.",
    preview: "/covers/cover-2.svg",
    github: "https://github.com/TWLY21/AI-Bug-Report-Assistant"
  },
  {
    id: "notification-system-api",
    category: "Backend API",
    year: "2026",
    title: "Notification System API",
    description:
      "Backend-oriented project for handling notification delivery patterns and message workflow structure.",
    tech: ["Node.js", "API Design", "Backend"],
    role: "Implemented API-first structure and messaging workflow foundations.",
    preview: "/covers/cover-3.svg",
    github: "https://github.com/TWLY21/Notification-System-API"
  },
  {
    id: "weather-api",
    category: "API Integration",
    year: "2025-2026",
    title: "Weather API",
    description:
      "Practice project integrating weather data retrieval with clean request/response handling.",
    tech: ["API Integration", "JavaScript", "HTTP"],
    role: "Built API consumption flow and structured response handling patterns.",
    preview: "/covers/cover-1.svg",
    github: "https://github.com/TWLY21/weatherAPI"
  },
  {
    id: "hostel-system",
    category: "System Prototype",
    year: "2026",
    title: "Hostel System",
    description:
      "System prototype for accommodation workflow management, emphasizing basic operations and structure planning.",
    tech: ["System Design", "CRUD", "Workflow"],
    role: "Designed initial project skeleton and operations flow.",
    preview: "/covers/cover-2.svg",
    github: "https://github.com/TWLY21/hostel-system"
  },
  {
    id: "workzy",
    category: "Product Concept",
    year: "2025-2026",
    title: "Workzy",
    description:
      "Early-stage project concept repository focused on practical productivity-oriented application ideas.",
    tech: ["Product Concept", "Prototype"],
    role: "Explored feature scope and project direction.",
    preview: "/covers/cover-3.svg",
    github: "https://github.com/TWLY21/Workzy"
  },
  {
    id: "moodmate-app",
    category: "Mobile App",
    year: "2026",
    title: "MoodMate App",
    description:
      "Mobile-focused concept app centered on mood-oriented interactions and lightweight personal tracking.",
    tech: ["Mobile App", "UX", "State Handling"],
    role: "Implemented app flow structure and core interaction ideas.",
    preview: "/covers/cover-1.svg",
    github: "https://github.com/TWLY21/MoodMate-app"
  },
  {
    id: "personality-studio",
    category: "Interactive Tool",
    year: "2026",
    title: "Personality Studio",
    description:
      "Interactive concept project exploring personality-oriented user experiences and simple scoring logic.",
    tech: ["Frontend", "Interaction", "Logic"],
    role: "Built and iterated on interaction-first feature ideas.",
    preview: "/covers/cover-2.svg",
    github: "https://github.com/TWLY21/Personality-studio"
  },
  {
    id: "pixel-pet-v2",
    category: "Game/Interaction",
    year: "2026",
    title: "Pixel Pet v2",
    description:
      "Small interactive project experimenting with pixel-style virtual pet mechanics and playful UI behavior.",
    tech: ["Interactive UI", "Game Logic", "Frontend"],
    role: "Explored lightweight game-state and interaction patterns.",
    preview: "/covers/cover-3.svg",
    github: "https://github.com/TWLY21/pixel-pet-v2"
  },
  {
    id: "memoryg",
    category: "Frontend Mini App",
    year: "2026",
    title: "memoryG",
    description:
      "Mini project focused on memory-style interaction patterns and quick front-end prototyping practice.",
    tech: ["Frontend", "Interaction", "Prototype"],
    role: "Practiced modular mini-app structure and game-like event handling.",
    preview: "/covers/cover-1.svg",
    github: "https://github.com/TWLY21/memoryG"
  },
  {
    id: "okea",
    category: "Web Platform",
    year: "2025-2026",
    title: "OKEA",
    description:
      "Larger web platform repository used to practice scalable structure, modular features, and iterative product delivery.",
    tech: ["Web App", "Modular Architecture", "Frontend + Backend"],
    role: "Worked across structure planning, feature iteration, and codebase organization.",
    preview: "/covers/cover-2.svg",
    github: "https://github.com/TWLY21/OKEA"
  },
  {
    id: "about-me",
    category: "Personal Site",
    year: "2026",
    title: "AboutMe",
    description:
      "Personal profile-style project presenting background, skill set, and portfolio identity.",
    tech: ["Frontend", "Personal Branding", "UI"],
    role: "Designed and implemented profile presentation and content layout.",
    preview: "/covers/cover-3.svg",
    github: "https://github.com/TWLY21/AboutMe"
  },
  {
    id: "calculator",
    category: "Frontend Fundamentals",
    year: "2025-2026",
    title: "Calculator",
    description:
      "Core calculator implementation project used to practice event handling, state updates, and logic correctness.",
    tech: ["JavaScript", "UI Logic", "State"],
    role: "Implemented operation flow, input handling, and arithmetic validation behavior.",
    preview: "/covers/cover-1.svg",
    github: "https://github.com/TWLY21/Calculator"
  },
  {
    id: "calculator-flutter",
    category: "Mobile Fundamentals",
    year: "2026",
    title: "Calculator Flutter",
    description:
      "Flutter version of a calculator app for mobile UI composition and state-management practice.",
    tech: ["Flutter", "Dart", "Mobile UI"],
    role: "Built calculator behavior with mobile-first layout structure.",
    preview: "/covers/cover-2.svg",
    github: "https://github.com/TWLY21/Calculator-Flutter"
  },
  {
    id: "tic-tac-toe",
    category: "Game Logic",
    year: "2025-2026",
    title: "TicTacToe",
    description:
      "Classic game implementation to practice win-condition checks, state control, and interaction feedback.",
    tech: ["JavaScript", "Game Logic", "Frontend"],
    role: "Implemented board state flow and winner-detection logic.",
    preview: "/covers/cover-3.svg",
    github: "https://github.com/TWLY21/TicTacToe"
  },
  {
    id: "todo-list",
    category: "Productivity Mini App",
    year: "2026",
    title: "todoList",
    description:
      "Task-list mini app focused on CRUD behavior and simple productivity workflow interactions.",
    tech: ["Frontend", "CRUD", "State"],
    role: "Built task create/update/delete flow and usability basics.",
    preview: "/covers/cover-1.svg",
    github: "https://github.com/TWLY21/todoList"
  },
  {
    id: "countdown-app",
    category: "Utility App",
    year: "2026",
    title: "Countdown App",
    description:
      "Lightweight utility app for countdown behavior, timer updates, and event-driven UI refresh.",
    tech: ["JavaScript", "Timer Logic", "Frontend"],
    role: "Implemented countdown engine and UI synchronization behavior.",
    preview: "/covers/cover-2.svg",
    github: "https://github.com/TWLY21/countdown-app"
  },
  {
    id: "path-solving",
    category: "Algorithm Practice",
    year: "2026",
    title: "Path Solving",
    description:
      "Algorithm-focused practice repository exploring path-solving logic and structured problem solving.",
    tech: ["Algorithms", "Problem Solving", "Logic"],
    role: "Practiced computational thinking and implementation clarity.",
    preview: "/covers/cover-3.svg",
    github: "https://github.com/TWLY21/Path-Solving"
  },
  {
    id: "rocket-thrust-gauge",
    category: "Simulation Prototype",
    year: "2026",
    title: "Rocket Thrust Gauge",
    description:
      "Small prototype experimenting with gauge visualization and simulation-oriented UI ideas.",
    tech: ["Visualization", "Frontend", "Prototype"],
    role: "Built proof-of-concept interaction and display behavior.",
    preview: "/covers/cover-1.svg",
    github: "https://github.com/TWLY21/rocket-thrust-gauge"
  },
  {
    id: "gd-g-1",
    category: "Graphics/Design",
    year: "2026",
    title: "GD G 1",
    description:
      "Repository for graphic or game-design exploration with iterative visual and interaction experiments.",
    tech: ["Design", "Creative Coding", "Prototype"],
    role: "Explored concept iterations and implementation structure for visual ideas.",
    preview: "/covers/cover-2.svg",
    github: "https://github.com/TWLY21/GD-G-1"
  },
  {
    id: "gd-g-2",
    category: "Graphics/Design",
    year: "2026",
    title: "GD G 2",
    description:
      "Follow-up repository for design/game-oriented experimentation and feature refinement.",
    tech: ["Design", "Creative Coding", "Prototype"],
    role: "Expanded and refined project experiments from prior iteration.",
    preview: "/covers/cover-3.svg",
    github: "https://github.com/TWLY21/GD-G-2"
  },
  {
    id: "lab-tf-quiz-app",
    category: "Learning Project",
    year: "2025",
    title: "Lab TF Quiz App",
    description:
      "Lab-based quiz application project focused on true/false logic and educational app flow fundamentals.",
    tech: ["Quiz Logic", "App Fundamentals", "Learning"],
    role: "Implemented quiz flow and basic answer-validation behavior.",
    preview: "/covers/cover-1.svg",
    github: "https://github.com/TWLY21/Lab-TFQuizApp"
  },
  {
    id: "android-quiz-starter",
    category: "Android Learning",
    year: "2025",
    title: "Android Quiz Starter",
    description:
      "Starter-level Android quiz project for learning mobile fundamentals, flow control, and screen interaction.",
    tech: ["Android", "Java/Kotlin", "Mobile Fundamentals"],
    role: "Built baseline quiz structure and mobile interaction workflow.",
    preview: "/covers/cover-2.svg",
    github: "https://github.com/TWLY21/Android-quiz-starter"
  },
  {
    id: "intern-td",
    category: "Internship Work",
    year: "2026",
    title: "intern TD",
    description:
      "Internship-related repository tracking practical implementation tasks and learning outcomes.",
    tech: ["Practical Engineering", "Documentation", "Execution"],
    role: "Applied internship project discipline and iterative task delivery.",
    preview: "/covers/cover-3.svg",
    github: "https://github.com/TWLY21/intern-TD"
  }
];

