import React from 'react';
import { skillsData } from '../data/skills';
// import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'Beginner':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getSkillLevelWidth = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'w-full';
      case 'Advanced':
        return 'w-4/5';
      case 'Intermediate':
        return 'w-3/5';
      case 'Beginner':
        return 'w-2/5';
      default:
        return 'w-2/5';
    }
  };

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="card animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-semibold text-neutral-800 mb-6 flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-400 rounded-full mr-3"></div>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="animate-slide-in-left"
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 50)}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-neutral-700">
                        {skill.name}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full text-white ${getSkillLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    
                    {/* Skill Progress Bar */}
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillLevelColor(skill.level)} ${getSkillLevelWidth(skill.level)}`}
                        style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 50) + 500}ms` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in animation-delay-200">
              <div className="text-3xl font-bold text-primary-500 mb-2">5+</div>
              <div className="text-neutral-600">Years Experience</div>
            </div>
            <div className="animate-fade-in animation-delay-400">
              <div className="text-3xl font-bold text-primary-500 mb-2">20+</div>
              <div className="text-neutral-600">Technologies</div>
            </div>
            <div className="animate-fade-in animation-delay-600">
              <div className="text-3xl font-bold text-primary-500 mb-2">15+</div>
              <div className="text-neutral-600">Projects Completed</div>
            </div>
            <div className="animate-fade-in animation-delay-600">
              <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
              <div className="text-neutral-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Certifications or Learning Path */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
          <h3 className="text-2xl font-semibold text-neutral-800 mb-4 text-center">
            Continuous Learning
          </h3>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-6">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies 
            and best practices in web development and machine learning.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React 19', 'Next.js 15', 'TypeScript 5', 'AI/ML Integration', 'Cloud Architecture', 'DevOps'].map((learning) => (
              <span
                key={learning}
                className="px-4 py-2 bg-white text-neutral-700 rounded-full text-sm font-medium shadow-sm"
              >
                {learning}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
