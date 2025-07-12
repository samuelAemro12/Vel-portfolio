import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
// import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="container-custom text-center">
        {/* Main Content */}
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary-400 p-1">
              <div className="w-full h-full rounded-full bg-neutral-100 flex items-center justify-center">
                <span className="text-4xl font-bold text-gradient">SA</span>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-800 mb-4">
            Samuel Aemro
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gradient mb-6">
            Full Stack Web Developer
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            I build clean, scalable frontend applications and explore machine learning 
            and API integrations to create innovative digital experiences.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/samuelAemro12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-neutral-700 hover:text-primary-500"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/samuel-aemro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-neutral-700 hover:text-primary-500"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:samuelaemrowork12@gmail.com"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-neutral-700 hover:text-primary-500"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToProjects}
              className="btn-primary group"
            >
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-200" />
            </button>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Download Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto h-6 w-6 text-neutral-400" />
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-400"></div>
      </div>
    </section>
  );
};

export default Hero;
