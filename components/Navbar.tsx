import React, { useState, useEffect } from 'react';
// FIX: Imported Variants to fix type error with menuVariants.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { labData } from '../constants/data';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navLinkClasses = `font-medium px-4 py-2 transition duration-150 ease-in-out rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`;
  const stickyClasses = 'text-gray-700 hover:text-primary focus-visible:ring-primary';
  const transparentClasses = `text-white hover:bg-white/10 focus-visible:ring-white`;

  const menuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className={`text-2xl font-extrabold transition-colors duration-300 ${isSticky ? 'text-primary' : 'text-white'}`}>
              {labData.name}
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {labData.navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`${navLinkClasses} ${isSticky ? stickyClasses : transparentClasses}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-full py-2 px-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
            >
              Book a Test
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${isSticky ? 'text-gray-600' : 'text-white'} hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {labData.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
               <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="block w-full text-left mt-2 px-3 py-3 rounded-lg text-base font-medium bg-primary text-white text-center">
                    Book a Test
                  </a>
                </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;