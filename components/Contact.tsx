import React, { useState, useMemo } from 'react';
// FIX: Imported AnimatePresence to resolve 'Cannot find name' error.
import { motion, AnimatePresence } from 'framer-motion';
import { labData } from '../constants/data';
import { Center } from '../types';

const facilityIcons: { [key: string]: React.ReactNode } = {
  'Parking': <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v.25h1.5a.75.75 0 010 1.5h-1.5v4.5h.75a.75.75 0 010 1.5h-.75v4.5h1.5a.75.75 0 010 1.5h-1.5v.25a.75.75 0 01-1.5 0v-.25H8.5a.75.75 0 010-1.5h1.5v-4.5H8a.75.75 0 010-1.5h2V4.5H8.5a.75.75 0 010-1.5h1.5V2.75A.75.75 0 0110 2zM8.5 4.5h1.5V6H8.5V4.5zm1.5 7.5H8.5V10.5h1.5v1.5z" clipRule="evenodd" /></svg>,
  'Wheelchair Accessible': <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 3.5a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5V3.5zM4.5 12.5a.5.5 0 01.5-.5h2.25a.75.75 0 000-1.5H5a2 2 0 00-2 2v2.25a.75.75 0 001.5 0V13h1.75a.75.75 0 000-1.5H4.5v-.5zM15.5 10.5a.5.5 0 01.5.5v1.75a.75.75 0 001.5 0V11a2 2 0 00-2-2h-2.25a.75.75 0 000 1.5H15v.25a.75.75 0 001.5 0V10.5z" /></svg>,
  '24/7 Service': <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" /></svg>,
};


const CenterCard: React.FC<{ center: Center }> = ({ center }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary"
    whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }}
  >
    <h3 className="text-lg font-bold text-primary mb-2">{center.name}</h3>
    <p className="text-gray-600 text-sm mb-1">{center.address}</p>
    <p className="text-gray-600 text-sm mb-1"><strong>Timings:</strong> {center.timings}</p>
    <p className="text-gray-600 text-sm mb-4"><strong>Phone:</strong> <a href={`tel:${center.phone}`} className="hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded">{center.phone}</a></p>
    {center.facilities && center.facilities.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {center.facilities.map(facility => (
          <div key={facility} className="flex items-center gap-1.5 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            {facilityIcons[facility]}
            <span>{facility}</span>
          </div>
        ))}
      </div>
    )}
    <a href={center.mapLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded">Get Directions &rarr;</a>
  </motion.div>
);

export const Centers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');

  const cityCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    labData.centers.locations.forEach(loc => {
      counts[loc.city] = (counts[loc.city] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredCenters = useMemo(() => {
    return labData.centers.locations.filter(center => {
      const matchesCity = selectedCity === 'All' || center.city === selectedCity;
      const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) || center.address.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCity && matchesSearch;
    });
  }, [searchTerm, selectedCity]);

  return (
    <motion.section 
      id="centers" 
      className="py-16 md:py-24 bg-gray-100 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{labData.centers.title}</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
          <select 
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Select a city to filter centers"
          >
            {labData.centers.cities.map(city => 
              <option key={city} value={city}>
                {city === 'All' ? 'All Cities' : `${city} (${cityCounts[city] || 0})`}
              </option>
            )}
          </select>
          <input
            type="search"
            placeholder="Search by center name or address..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Search for a center"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredCenters.length > 0 ? (
            filteredCenters.map((center) => <CenterCard key={center.id} center={center} />)
          ) : (
            <p className="col-span-full text-center text-gray-600">No centers found matching your criteria.</p>
          )}
        </div>
      </div>
    </motion.section>
  )
}

const InfoItem: React.FC<{ icon: React.ReactNode; title: string; content: React.ReactNode }> = ({ icon, title, content }) => (
    <div className="flex items-start space-x-4">
      <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
);

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.message) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setIsSuccess(false), 5000); // Hide success message after 5s
            }, 1500);
        }
    };

  return (
    <motion.section 
      id="contact" 
      className="bg-white py-16 md:py-24 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {labData.contact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <InfoItem icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>} title="Address" content={labData.contact.address} />
            <InfoItem icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>} title="Phone" content={<a href={`tel:${labData.contact.phone}`} className="hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded">{labData.contact.phone}</a>} />
            <InfoItem icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>} title="Email" content={<a href={`mailto:${labData.contact.email}`} className="hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded">{labData.contact.email}</a>} />
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl shadow-sm">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="text-center py-10"
                >
                  <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <h3 className="text-xl font-semibold mt-4">Message Sent!</h3>
                  <p className="text-gray-600 mt-2">Thank you for reaching out. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  noValidate
                >
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-primary'}`} aria-required="true" aria-invalid={!!errors.name} />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-primary'}`} aria-required="true" aria-invalid={!!errors.email} />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-primary'}`} aria-required="true" aria-invalid={!!errors.message}></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full h-12 bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-dark transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center">
                    {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : 'Send Message'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const ContactComponent = Contact;
export default ContactComponent;