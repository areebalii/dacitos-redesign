import React from 'react';
import Hero from '../features/home/Hero';
import ServicesGrid from '../features/home/ServicesGrid';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <ServicesGrid />
    </div>
  );
}