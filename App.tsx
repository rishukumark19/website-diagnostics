import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, WhyChooseUs, HowItWorks, Testimonials } from './components/About';
import { Services, HealthPackages } from './components/Courses';
import { Contact, Centers } from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <HealthPackages />
        <WhyChooseUs />
        <HowItWorks />
        <Centers />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;