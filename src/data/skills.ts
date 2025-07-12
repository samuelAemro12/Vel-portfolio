export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: string;
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Expert" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "Sass/SCSS", level: "Advanced" },
      { name: "Responsive Design", level: "Expert" }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "Flask", level: "Intermediate" },
      { name: "Django", level: "Intermediate" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "Socket.io", level: "Intermediate" }
    ]
  },
  {
    category: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Firebase", level: "Advanced" },
      { name: "AWS", level: "Intermediate" },
      { name: "Vercel", level: "Advanced" },
      { name: "Docker", level: "Intermediate" }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", level: "Intermediate" },
      { name: "PyTorch", level: "Beginner" },
      { name: "Scikit-learn", level: "Intermediate" },
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "OpenAI API", level: "Advanced" },
      { name: "Data Visualization", level: "Advanced" }
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "VS Code", level: "Expert" },
      { name: "Figma", level: "Intermediate" },
      { name: "Postman", level: "Advanced" },
      { name: "Jest", level: "Intermediate" },
      { name: "Cypress", level: "Beginner" },
      { name: "Webpack", level: "Intermediate" },
      { name: "Vite", level: "Advanced" }
    ]
  }
];

export const getSkillsByCategory = (category: string): Skill[] => {
  const categoryData = skillsData.find(cat => cat.category === category);
  return categoryData ? categoryData.skills : [];
};

export const getAllSkills = (): Skill[] => {
  return skillsData.flatMap(category => category.skills);
};
