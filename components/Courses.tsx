import React, { useState, useMemo, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { labData } from '../constants/data';
import { Test, HealthPackage } from '../types';

// Modal component for Test Details
const TestDetailsModal: React.FC<{ test: Test | null; onClose: () => void }> = ({ test, onClose }) => (
  <AnimatePresence>
    {test && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">{test.name}</h3>
          <p className="text-gray-600 mb-4">{test.description}</p>
          <div className="space-y-3 text-sm">
            <p><strong className="font-semibold text-gray-800">Category:</strong> {test.category}</p>
            <p><strong className="font-semibold text-gray-800">Preparation:</strong> {test.preparation}</p>
            <p><strong className="font-semibold text-gray-800">Report Turnaround:</strong> {test.turnaroundTime}</p>
            <p className="text-2xl font-bold text-gray-800 mt-4">₹{test.price}</p>
          </div>
          <button
            onClick={onClose}
            className="mt-6 w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close test details"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const TestCard: React.FC<{ test: Test; onViewDetails: (test: Test) => void }> = ({ test, onViewDetails }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md p-6 flex flex-col transition-shadow duration-300 hover:shadow-xl relative"
    whileHover={{ y: -5 }}
  >
    {test.isPopular && (
      <div className="absolute top-0 right-0 bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">Popular</div>
    )}
    <h3 className="text-lg font-bold text-gray-800 mb-2">{test.name}</h3>
    <p className="text-gray-600 flex-grow mb-4 text-sm">{test.description}</p>
    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
      <span className="font-bold text-primary text-xl">₹{test.price}</span>
      <button onClick={() => onViewDetails(test)} className="bg-primary-dark/10 text-primary font-semibold py-2 px-4 rounded-full hover:bg-primary/20 transition duration-300 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
        View Details
      </button>
    </div>
  </motion.div>
);

export const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);

  const filteredTests = useMemo(() => {
    return labData.services.tests.filter(test => {
      const matchesCategory = activeCategory === 'All' || test.category === activeCategory;
      const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <>
      <TestDetailsModal test={selectedTest} onClose={() => setSelectedTest(null)} />
      <motion.section 
        id="services" 
        className="py-16 md:py-24 bg-gray-100 scroll-mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{labData.services.title}</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="search"
              placeholder="Search for a test..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Search for a diagnostic test"
            />
            <div className="flex flex-wrap gap-2">
              {labData.services.categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTests.length > 0 ? (
              filteredTests.map((test) => <TestCard key={test.id} test={test} onViewDetails={setSelectedTest} />)
            ) : (
              <p className="col-span-full text-center text-gray-600">No tests found matching your criteria.</p>
            )}
          </div>
        </div>
      </motion.section>
    </>
  );
};

const PackageCard: React.FC<{ pkg: HealthPackage }> = ({ pkg }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-shadow duration-300 border-t-4 border-primary relative"
      // FIX: Changed 'shadow' to 'boxShadow' to fix invalid framer-motion property.
      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }}
    >
      {pkg.isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">Recommended</div>
      )}
      <div className="flex items-start gap-4 mb-3">
        {pkg.icon && <div className="text-primary">{pkg.icon}</div>}
        <h3 className="text-xl font-bold text-gray-800 ">{pkg.name}</h3>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{pkg.description}</p>
      <div className="mb-6">
        <span className="text-4xl font-extrabold text-primary">₹{pkg.price}</span>
        <span className="text-gray-500">/package</span>
      </div>
      <div className="mb-6">
        <button onClick={() => setIsExpanded(!isExpanded)} className="font-semibold text-primary hover:underline text-sm flex items-center gap-1">
          {isExpanded ? 'Hide' : 'View'} Tests Included
          <motion.svg animate={{ rotate: isExpanded ? 180 : 0 }} className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></motion.svg>
        </button>
        <AnimatePresence>
        {isExpanded && (
          <motion.ul 
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            className="text-gray-600 space-y-2 text-sm overflow-hidden"
          >
            {pkg.testsIncluded.map((test, i) => (
              <motion.li 
                key={i} 
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                {test}
              </motion.li>
            ))}
          </motion.ul>
        )}
        </AnimatePresence>
      </div>
      <a href="#contact" className="w-full text-center mt-auto self-start bg-primary text-white font-semibold py-3 px-5 rounded-lg hover:bg-primary-dark transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">
        Book Package
      </a>
    </motion.div>
  )
};


export const HealthPackages: React.FC = () => {
  return (
    <motion.section 
      id="packages" 
      className="py-16 md:py-24 bg-white scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{labData.healthPackages.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {labData.healthPackages.packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Courses = Services;
export default Courses;