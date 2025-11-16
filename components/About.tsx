import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { labData } from '../constants/data';

// A reusable wrapper for section animations
const AnimatedSection: React.FC<{ children: React.ReactNode, id: string, className?: string }> = ({ children, id, className }) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
  </div>
);

export const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="bg-white py-16 md:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={labData.about.title} />
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/2">
            <motion.img 
              src={labData.about.imageUrl}
              alt="About LabPro Diagnostics"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 leading-relaxed">
              {labData.about.description}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export const WhyChooseUs: React.FC = () => {
  return (
    <AnimatedSection id="why-us" className="bg-gray-100 py-16 md:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={labData.whyChooseUs.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {labData.whyChooseUs.points.map((point, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center items-center mb-4 text-primary">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export const HowItWorks: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <AnimatedSection id="how-it-works" className="bg-white py-16 md:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={labData.howItWorks.title} />
        <div className="relative">
           <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
           <motion.div 
             className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
           >
            {labData.howItWorks.steps.map((step, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="flex items-center justify-center bg-primary text-white w-20 h-20 rounded-full mx-auto mb-4 relative z-10 border-4 border-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{index + 1}. {step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = labData.testimonials.reviews;
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    }
  };
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <AnimatedSection id="testimonials" className="bg-gray-100 py-16 md:py-24 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={labData.testimonials.title} />
        <div className="relative h-64">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <img src={reviews[currentIndex].avatar} alt={reviews[currentIndex].name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                <p className="text-lg text-gray-600 italic mb-4">"{reviews[currentIndex].review}"</p>
                <h4 className="font-bold text-gray-800">{reviews[currentIndex].name}</h4>
                <p className="text-gray-500">{reviews[currentIndex].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={() => paginate(-1)} aria-label="Previous testimonial" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
           <button onClick={() => paginate(1)} aria-label="Next testimonial" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </AnimatedSection>
  )
}

const AboutComponent = About;
export default AboutComponent;