import React from 'react';
import { LabData } from '../types';

// Helper for creating SVG elements
// FIX: Updated Svg helper to accept children, fixing multiple arity errors.
const Svg = (props: React.SVGProps<SVGSVGElement>, ...children: React.ReactNode[]) => React.createElement('svg', props, ...children);
const Path = (props: React.SVGProps<SVGPathElement>) => React.createElement('path', props);

export const labData: LabData = {
  name: "LabPro Diagnostics",
  navLinks: [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Centers', href: '#centers' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ],
  hero: {
    headline: "Fast, Accurate, and Reliable Diagnostic Services",
    subtext: "Your health is our priority. Get precise results with state-of-the-art technology and expert care. Book your test today.",
    cta1: "Book a Test Now",
    cta2: "Find a Center Near You",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  services: {
    title: "Our Services",
    categories: ['All', 'Blood Tests', 'Radiology', 'Pathology', 'Cardiology'],
    tests: [
      { id: 't1', name: 'Complete Blood Count (CBC)', category: 'Blood Tests', description: 'Measures different components of your blood.', price: 300, isPopular: true, preparation: 'No special preparation needed.', turnaroundTime: '24 hours' },
      { id: 't2', name: 'Lipid Profile', category: 'Blood Tests', description: 'Measures cholesterol and triglyceride levels.', price: 500, isPopular: true, preparation: '10-12 hours of fasting is required.', turnaroundTime: '24 hours' },
      { id: 't3', name: 'Liver Function Test (LFT)', category: 'Blood Tests', description: 'Assesses the health of your liver.', price: 700, preparation: 'No special preparation needed.', turnaroundTime: '24-48 hours' },
      { id: 't4', name: 'Thyroid Profile (T3, T4, TSH)', category: 'Blood Tests', description: 'Checks for thyroid gland problems.', price: 600, preparation: 'No special preparation needed.', turnaroundTime: '24 hours' },
      { id: 't5', name: 'X-Ray Chest PA View', category: 'Radiology', description: 'Produces images of the heart, lungs, and bones.', price: 400, isPopular: true, preparation: 'Remove any metal objects. Inform the technician if you are pregnant.', turnaroundTime: 'Same day' },
      { id: 't6', name: 'Ultrasound (Abdomen)', category: 'Radiology', description: 'Uses sound waves to create images of organs.', price: 1200, preparation: 'Fasting for 6-8 hours is required.', turnaroundTime: 'Same day' },
      { id: 't7', name: 'CT Scan (Head)', category: 'Radiology', description: 'Detailed images of the brain and skull.', price: 2500, preparation: 'Inform your doctor about any allergies or medical conditions.', turnaroundTime: '24-48 hours' },
      { id: 't8', name: 'Urine Routine & Microscopy', category: 'Pathology', description: 'General evaluation of urine for health issues.', price: 200, preparation: 'A clean-catch midstream urine sample is required.', turnaroundTime: '24 hours' },
      { id: 't9', name: 'Biopsy', category: 'Pathology', description: 'Examines tissue sample for diseases.', price: 1500, preparation: 'Varies by biopsy type. Follow your doctor\'s instructions.', turnaroundTime: '3-5 days' },
      { id: 't10', name: 'Electrocardiogram (ECG)', category: 'Cardiology', description: 'Checks for problems with the electrical activity of your heart.', price: 350, preparation: 'Avoid oily or greasy skin creams and lotions on the day of the test.', turnaroundTime: 'Same day' },
      { id: 't11', name: 'Echocardiogram', category: 'Cardiology', description: 'Ultrasound of the heart.', price: 2000, preparation: 'No special preparation needed.', turnaroundTime: 'Same day' },
      { id: 't12', name: 'HbA1c (Glycated Hemoglobin)', category: 'Blood Tests', description: 'Average blood sugar levels for the last two to three months.', price: 450, isPopular: true, preparation: 'No fasting required.', turnaroundTime: '24 hours' },
      { id: 't13', name: 'Vitamin D Test', category: 'Blood Tests', description: 'Measures the level of Vitamin D in your blood.', price: 1000, preparation: 'No special preparation needed.', turnaroundTime: '24-48 hours' },
      { id: 't14', name: 'MRI (Knee)', category: 'Radiology', description: 'Detailed images of the knee joint.', price: 4500, preparation: 'Remove all metal objects. Inform staff about any implants.', turnaroundTime: '24-48 hours' },
      { id: 't15', name: 'Pap Smear', category: 'Pathology', description: 'Screens for cervical cancer.', price: 800, preparation: 'Avoid douching, tampons, or intercourse for 48 hours before the test.', turnaroundTime: '3-5 days' },
    ],
  },
  healthPackages: {
    title: "Popular Health Packages",
    packages: [
      { id: 'p1', name: 'Basic Health Checkup', price: 999, testsIncluded: ['CBC', 'Blood Sugar', 'Urine R/M'], description: 'Ideal for a quick overview of your health.', icon: Svg({ className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" })) },
      { id: 'p2', name: 'Full Body Checkup', price: 2499, testsIncluded: ['CBC', 'LFT', 'KFT', 'Lipid Profile', 'Thyroid Profile'], description: 'A comprehensive package for a complete health assessment.', isPopular: true, icon: Svg({ className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })) },
      { id: 'p3', name: 'Diabetes Panel', price: 1299, testsIncluded: ['HbA1c', 'Fasting Blood Sugar', 'Lipid Profile'], description: 'Essential tests for monitoring and managing diabetes.', icon: Svg({ className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19.5 5.5l-6.5 6.5-6.5-6.5" })) },
      { id: 'p4', name: 'Heart Health Package', price: 1999, testsIncluded: ['Lipid Profile', 'ECG', 'Echocardiogram'], description: 'Specialized package for assessing cardiovascular health.', isPopular: true, icon: Svg({ className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" })) },
      { id: 'p5', name: "Women's Wellness", price: 2999, testsIncluded: ['CBC', 'Thyroid Profile', 'Vitamin D', 'Pap Smear'], description: 'A complete package tailored for women\'s health needs.', icon: Svg({ className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" })) },
      { id: 'p6', name: 'Senior Citizen Package', price: 1799, testsIncluded: ['CBC', 'KFT', 'Blood Sugar', 'ECG'], description: 'Comprehensive tests for individuals above 60 years.', icon: Svg({ className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" })) },
    ],
  },
  whyChooseUs: {
    title: "Why Choose Us",
    points: [
      { icon: Svg({ className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })), title: "NABL Accredited", description: "Our labs adhere to the highest standards of quality and accuracy." },
      { icon: Svg({ className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" })), title: "Home Sample Collection", description: "Convenient and safe sample collection from the comfort of your home." },
      { icon: Svg({ className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" })), title: "Accurate Reports", description: "Get precise and reliable results delivered online, on time." },
      { icon: Svg({ className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" })), title: "Experienced Staff", description: "Our team of qualified pathologists and technicians ensure you receive the best care." },
    ],
  },
  howItWorks: {
    title: "How It Works",
    steps: [
      { icon: Svg({ className: "w-10 h-10", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" })), title: "Book a Test", description: "Choose your test or package online and schedule a convenient time." },
      { icon: Svg({ className: "w-10 h-10", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }), Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })), title: "Home Sample Collection", description: "Our certified phlebotomist will visit you for a safe and hygienic sample collection." },
      { icon: Svg({ className: "w-10 h-10", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, Path({ strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z" })), title: "Get Reports Online", description: "Access your accurate reports securely online within 24-48 hours." },
    ]
  },
  centers: {
    title: "Our Centers",
    cities: ["All", "Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai"],
    locations: [
      { id: 'c1', city: 'Mumbai', name: 'Andheri West Center', address: '123, SV Road, Andheri West, Mumbai', timings: '7 AM - 8 PM', phone: '+91 98765 43210', mapLink: 'https://maps.google.com', facilities: ['Parking', 'Wheelchair Accessible'] },
      { id: 'c2', city: 'Mumbai', name: 'Dadar Center', address: '456, NC Kelkar Road, Dadar, Mumbai', timings: '8 AM - 9 PM', phone: '+91 98765 43211', mapLink: 'https://maps.google.com', facilities: ['24/7 Service'] },
      { id: 'c3', city: 'Delhi', name: 'Connaught Place Center', address: 'Block A, Connaught Place, New Delhi', timings: '7 AM - 8 PM', phone: '+91 87654 32109', mapLink: 'https://maps.google.com', facilities: ['Parking', 'Wheelchair Accessible', '24/7 Service'] },
      { id: 'c4', city: 'Delhi', name: 'South Extension Center', address: 'G-12, South Extension Part-1, New Delhi', timings: '8 AM - 9 PM', phone: '+91 87654 32108', mapLink: 'https://maps.google.com', facilities: ['Parking'] },
      { id: 'c5', city: 'Bangalore', name: 'Koramangala Center', address: '1st Main, 5th Block, Koramangala, Bangalore', timings: '7 AM - 8 PM', phone: '+91 76543 21098', mapLink: 'https://maps.google.com', facilities: ['Parking', 'Wheelchair Accessible'] },
      { id: 'c6', city: 'Bangalore', name: 'Indiranagar Center', address: 'CMH Road, Indiranagar, Bangalore', timings: '8 AM - 9 PM', phone: '+91 76543 21097', mapLink: 'https://maps.google.com', facilities: [] },
      { id: 'c7', city: 'Kolkata', name: 'Salt Lake Center', address: 'Sector V, Salt Lake, Kolkata', timings: '7 AM - 8 PM', phone: '+91 65432 10987', mapLink: 'https://maps.google.com', facilities: ['Parking', '24/7 Service'] },
      { id: 'c8', city: 'Kolkata', name: 'Park Street Center', address: '10, Park Street, Kolkata', timings: '8 AM - 9 PM', phone: '+91 65432 10986', mapLink: 'https://maps.google.com', facilities: ['Wheelchair Accessible'] },
      { id: 'c9', city: 'Chennai', name: 'T. Nagar Center', address: '15, Usman Road, T. Nagar, Chennai', timings: '7 AM - 8 PM', phone: '+91 54321 09876', mapLink: 'https://maps.google.com', facilities: ['Parking'] },
      { id: 'c10', city: 'Chennai', name: 'Anna Nagar Center', address: '22, 2nd Avenue, Anna Nagar, Chennai', timings: '8 AM - 9 PM', phone: '+91 54321 09875', mapLink: 'https://maps.google.com', facilities: ['Parking', 'Wheelchair Accessible'] },
    ],
  },
  about: {
    title: "About LabPro Diagnostics",
    description: "Founded with a mission to provide accurate, reliable, and accessible diagnostic services, LabPro Diagnostics has become a trusted name in healthcare. We combine state-of-the-art technology with a team of experienced professionals to ensure you receive the highest quality of care. Our commitment to excellence drives us to continually innovate and improve, making health monitoring simpler and more effective for everyone.",
    imageUrl: "https://images.unsplash.com/photo-1554734867-bf3c00a49371?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  testimonials: {
    title: "What Our Patients Say",
    reviews: [
      { id: 'rev1', name: 'Priya Sharma', location: 'Mumbai', review: 'The home sample collection was so convenient and the staff was very professional. Reports were delivered on time as promised. Highly recommend!', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { id: 'rev2', name: 'Raj Verma', location: 'Delhi', review: 'Excellent service and very clean facility. The full body checkup package was comprehensive and affordable. Great experience overall.', avatar: 'https://randomuser.me/api/portraits/men/46.jpg' },
      { id: 'rev3', name: 'Anjali Singh', location: 'Bangalore', review: 'I was impressed with the accuracy and detailed nature of the reports. The online portal is easy to use. LabPro is now my go-to for any diagnostic tests.', avatar: 'https://randomuser.me/api/portraits/women/47.jpg' },
      { id: 'rev4', name: 'Suresh Kumar', location: 'Chennai', review: 'The staff at the Anna Nagar center were very helpful and courteous. The process was quick and efficient. I got my reports faster than I expected.', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
    ]
  },
  contact: {
    title: "Get In Touch",
    address: "LabPro Diagnostics HQ, 789 Health St, Medical City, Mumbai, 400001",
    phone: "+91 1800 123 4567",
    email: "contact@labprodiagnostics.com",
  },
  footer: {
    description: "Your trusted partner in health. Providing precise diagnostic services with care and expertise.",
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'Services', href: '#services' },
      { name: 'Packages', href: '#packages' },
      { name: 'Centers', href: '#centers' },
    ],
    contactInfo: [
      { label: 'Phone', value: '+91 1800 123 4567', href: 'tel:+9118001234567' },
      { label: 'Email', value: 'contact@labpro.com', href: 'mailto:contact@labpro.com' },
    ],
    socials: [
      { name: 'Facebook', href: '#', icon: Svg({ className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" }, Path({ d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" })) },
      { name: 'Twitter', href: '#', icon: Svg({ className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" }, Path({ d: "M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" })) },
      { name: 'LinkedIn', href: '#', icon: Svg({ className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" }, Path({ d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" })) },
    ],
    copyright: `© ${new Date().getFullYear()} LabPro Diagnostics. All rights reserved.`
  }
};