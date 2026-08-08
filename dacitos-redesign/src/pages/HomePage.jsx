import React from 'react';
import Hero from '../features/home/Hero';
import ServicesGrid from '../features/home/ServicesGrid';
import WhyChooseUs from '../features/home/WhyChooseUs';
import TechStack from '../features/home/TechStack';
import Testimonials from '../features/home/Testimonials';
import CTASection from '../features/home/CTASection';

export default function HomePage() {
  return (
    <div className="space-y-4">
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <TechStack />
      <Testimonials />
      <CTASection />
    </div>
  );
}