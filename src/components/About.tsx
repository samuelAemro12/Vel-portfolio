import React from 'react';
// import { Code, Database, Brain, Globe } from 'lucide-react';
// import { motion } from 'framer-motion';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <span className="text-2xl">💻</span>,
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces with React, JavaScript, TypeScript, and modern CSS frameworks."
    },
    {
      icon: <span className="text-2xl">🗄️</span>,
      title: "Backend Integration",
      description: "Creating robust APIs and database solutions with Node.js, Express, Firestore and various MongoDb technologies."
    },
    {
      icon: <span className="text-2xl">🧠</span>,
      title: "Machine Learning",
      description: "Exploring AI/ML applications with Python, Google Colab and data visualization libraries."
    },
    {
      icon: <span className="text-2xl">🌐</span>,
      title: "API Integration",
      description: "Seamlessly connecting applications with third-party services and external APIs such as Stripe, Chapa, fakestoreAPI and The movie database ."
    }
  ];

  const techLogos = [
    { name: 'React', color: 'text-blue-500' },
    { name: 'TypeScript', color: 'text-blue-600' },
    { name: 'Node.js', color: 'text-green-600' },
    { name: 'Python', color: 'text-yellow-500' },
    { name: 'MongoDB', color: 'text-green-500' },
    { name: 'Tailwind', color: 'text-cyan-500' },
    { name: 'Firebase', color: 'text-yellow-600' }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Passionate full-stack developer with a focus on creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
              Hi, I'm Samuel! 👋
            </h3>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                I'm a passionate Full Stack Web Developer with a strong focus on frontend development. 
                I love creating clean, scalable applications that provide exceptional user experiences.
              </p>
              <p>
                My journey in web development has led me to explore various technologies, from modern 
                JavaScript frameworks to machine learning integrations. I'm particularly interested in 
                how AI can enhance web applications and create more intelligent user interactions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or learning about the latest trends in web development and artificial intelligence.
              </p>
            </div>

            {/* Tech Stack Grid */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-neutral-800 mb-4">Technologies I work with:</h4>
              <div className="grid grid-cols-4 gap-4">
                {techLogos.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors duration-200"
                  >
                    <div className={`w-8 h-8 rounded-full bg-current ${tech.color} opacity-80 mb-2`}></div>
                    <span className="text-xs font-medium text-neutral-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="animate-slide-in-right">
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="card hover:border-primary-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary-100 rounded-lg text-primary-600">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-neutral-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
