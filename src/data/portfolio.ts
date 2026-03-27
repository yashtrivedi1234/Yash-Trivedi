export const portfolioData = {
  name: "Yash Trivedi",
  title: "Full-Stack MERN Developer | AI Integrator",
  tagline: "Building Scalable, High-Performance Web Applications",
  location: "Sitapur, Uttar Pradesh, India",
  email: "yashtrivedi.contact@gmail.com",
  phone: "+91 9452819739",
  summary: "Full-Stack MERN Developer with experience in scalable applications, AI integrations, real-time systems, and DevOps. Built 10+ production apps and solved 20+ weekly issues.",
  heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  aboutImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  
  stats: [
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "Experience", value: 2, suffix: " Years" },
    { label: "Issues Solved", value: 20, suffix: "/week" },
  ],

  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux", "Zustand", "Tailwind", "Framer Motion", "GSAP", "Three.js"],
    backend: ["Node.js", "Express", "GraphQL", "WebRTC", "Socket.io", "FastAPI"],
    database: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "Firebase"],
    devops: ["Docker", "CI/CD", "AWS", "Nginx", "GitHub Actions"],
    ai: ["OpenAI", "Gemini", "LangChain", "n8n Automation", "Vector DBs"]
  },

  experience: [
    {
      company: "Code Crafter Web Solutions Pvt Ltd",
      role: "Full-Stack Developer",
      period: "Full-Time",
      description: "Leading development of scalable web applications using MERN stack and integrating AI solutions.",
      achievements: [
        "Architected and deployed high-performance production applications.",
        "Integrated advanced AI workflows to optimize business processes.",
        "Mentored junior developers and improved code quality standards."
      ]
    },
    {
      company: "DigiCoders Technologies",
      role: "Full-Stack Intern",
      period: "Internship",
      description: "Worked on various client projects focusing on frontend and backend integration.",
      achievements: [
        "Developed responsive UI components using React and Tailwind.",
        "Built RESTful APIs and managed database schemas."
      ]
    },
    {
      company: "ERA Foundation India",
      role: "Web Developer",
      period: "Contract",
      description: "Developed and maintained web platforms for educational initiatives.",
      achievements: [
        "Optimized website performance and SEO.",
        "Implemented secure authentication and data management systems."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Authentication System",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
      description: "Advanced secure authentication system with JWT, OAuth, and multi-factor support.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      details: "A robust authentication system featuring secure password hashing with bcrypt, JWT-based session management, and OAuth2 integration for Google and GitHub. Includes multi-factor authentication (MFA) and account recovery workflows.",
      features: ["JWT & Refresh Tokens", "OAuth2 Integration", "MFA Support", "Rate Limiting"],
      live: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Codivra Solutions",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      description: "A comprehensive platform for developer collaboration and project management.",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      details: "Codivra is a real-time collaboration tool for developers. It features a shared code editor, project kanban boards, and instant messaging. Built with scalability in mind using a microservices architecture.",
      features: ["Real-time Code Editing", "Kanban Boards", "Team Chat", "File Sharing"],
      live: "#",
      github: "#"
    },
    {
      id: 3,
      title: "MaurMart E-commerce",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
      description: "Modern e-commerce platform with real-time inventory and payment integration.",
      tech: ["Next.js", "Prisma", "Stripe", "Tailwind"],
      details: "A full-featured e-commerce solution with a focus on user experience and conversion. Includes a powerful admin dashboard for inventory management, Stripe integration for secure payments, and SEO optimization.",
      features: ["Stripe Integration", "Admin Dashboard", "Inventory Tracking", "SEO Optimized"],
      live: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Video Calling Chat App",
      category: "Real-time",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
      description: "Real-time communication app with video calling and instant messaging features.",
      tech: ["WebRTC", "Socket.io", "React", "Express"],
      details: "A peer-to-peer video calling application using WebRTC for low-latency communication. Features include screen sharing, group calls, and end-to-end encrypted messaging.",
      features: ["P2P Video Calling", "Screen Sharing", "Group Chat", "E2E Encryption"],
      live: "#",
      github: "#"
    }
  ],

  socials: [
    { name: "LinkedIn", url: "#" },
    { name: "GitHub", url: "#" },
    { name: "LeetCode", url: "#" },
    { name: "Email", url: "mailto:yashtrivedi.contact@gmail.com" }
  ],

  testimonials: [
    {
      name: "Alex Johnson",
      role: "CEO, TechFlow",
      content: "Yash is a rare talent who understands both the technical and business aspects of a project. His AI integrations saved us 40 hours of manual work per week.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Sarah Chen",
      role: "Product Manager, CreativeCo",
      content: "The attention to detail in the UI and the robustness of the backend Yash built was impressive. He's our go-to for complex full-stack applications.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Michael Smith",
      role: "Founder, EduStart",
      content: "Working with Yash was a breeze. He delivered a high-performance platform on time and exceeded our expectations with his proactive problem-solving.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    }
  ]
};
