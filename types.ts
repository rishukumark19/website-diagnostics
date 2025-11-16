import type React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Test {
  id: string;
  name:string;
  category: string;
  description: string;
  price: number;
  isPopular?: boolean;
  preparation?: string;
  turnaroundTime?: string;
}

export interface HealthPackage {
  id: string;
  name: string;
  price: number;
  testsIncluded: string[];
  description: string;
  isPopular?: boolean;
  icon?: React.ReactNode;
}

export interface Center {
  id: string;
  city: string;
  name: string;
  address: string;
  timings: string;
  phone: string;
  mapLink: string;
  facilities?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  review: string;
  avatar: string;
}

export interface LabData {
  name: string;
  navLinks: NavLink[];
  hero: {
    headline: string;
    subtext: string;
    cta1: string;
    cta2: string;
    heroImage: string;
  };
  services: {
    title: string;
    categories: string[];
    tests: Test[];
  };
  healthPackages: {
    title: string;
    packages: HealthPackage[];
  };
  whyChooseUs: {
    title: string;
    points: {
      icon: React.ReactNode;
      title: string;
      description: string;
    }[];
  };
  howItWorks: {
    title: string;
    steps: {
      icon: React.ReactNode;
      title: string;
      description: string;
    }[];
  };
  centers: {
    title: string;
    cities: string[];
    locations: Center[];
  };
  about: {
    title: string;
    description: string;
    imageUrl: string;
  };
  testimonials: {
    title: string;
    reviews: Testimonial[];
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
  };
  footer: {
    description: string;
    quickLinks: NavLink[];
    contactInfo: {
      label: string;
      value: string;
      href: string;
    }[];
    socials: {
      name: string;
      href: string;
      icon: React.ReactNode;
    }[];
    copyright: string;
  }
}