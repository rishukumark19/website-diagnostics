import React from 'react';
import { motion } from 'framer-motion';
import { labData } from '../constants/data';

const Hero: React.FC = () => {
  const handleHeroButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="relative text-white min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('${labData.hero.heroImage}')` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-center md:text-left">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {labData.hero.headline}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {labData.hero.subtext}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#contact"
              onClick={(e) => handleHeroButtonClick(e, '#contact')}
              className="inline-block bg-primary text-white font-bold rounded-full py-4 px-10 shadow-lg hover:bg-primary-dark transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 focus-visible:ring-white"
            >
              {labData.hero.cta1}
            </a>
            <a 
              href="#centers"
              onClick={(e) => handleHeroButtonClick(e, '#centers')}
              className="inline-block bg-white text-primary font-bold rounded-full py-4 px-10 shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 focus-visible:ring-primary"
            >
              {labData.hero.cta2}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;