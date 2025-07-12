export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Chapa integration",
    longDescription: "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing with Stripe, and admin dashboard. Built with modern web technologies and responsive design.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Chapa API", "Tailwind CSS"],
    githubUrl: "https://github.com/samuelAemro12/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat app with OpenAI integration and smart responses",
    longDescription: "An intelligent chat application that integrates OpenAI's GPT API for smart responses. Features real-time messaging, user authentication, chat history, and AI-powered conversation assistance.",
    techStack: ["React", "TypeScript", "Socket.io", "OpenAI API", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/samuelAemro12/ai-chat-app",
    liveUrl: "https://ai-chat-demo.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "Machine Learning Dashboard",
    description: "Data visualization dashboard for ML model performance tracking",
    longDescription: "A comprehensive dashboard for monitoring machine learning model performance with interactive charts, real-time metrics, and data visualization. Built with Python backend and React frontend.",
    techStack: ["React", "Python", "TensorFlow", "D3.js", "Flask", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/samuelAemro12/ml-dashboard",
    featured: true
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    longDescription: "A modern task management application with team collaboration features, real-time updates, drag-and-drop functionality, and project organization tools.",
    techStack: ["React", "TypeScript", "Firebase", "Material-UI", "React DnD"],
    githubUrl: "https://github.com/samuelAemro12/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    featured: false
  }
];

export const featuredProjects = projects.filter(project => project.featured);
