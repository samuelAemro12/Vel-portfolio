import React from 'react';
// import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-neutral-300">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Samuel Aemro
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Full Stack Web Developer passionate about creating exceptional 
                digital experiences with modern technologies.
              </p>
              <div className="flex items-center text-sm text-neutral-400">
                <span>Made with</span>
                <span className="mx-1 text-red-500">❤️</span>
                <span>using React & TypeScript</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {[
                  { name: 'Home', href: '#hero' },
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Get In Touch
              </h4>
              <div className="space-y-2 text-neutral-400">
                <p>samuelaemrowork12@gmail.com</p>
                <p>San Francisco, CA</p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://github.com/samuelAemro12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/samuel-aemro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/samuel_aemro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {currentYear} Samuel Aemro. All rights reserved.
            </p>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200 group"
            >
              <span className="mr-2">Back to top</span>
              <span className="text-lg">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
