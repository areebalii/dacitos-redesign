import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Chatbot from '../components/Chatbot'; // Import Chatbot widget

export default function MainLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#07080E] text-slate-100 selection:bg-indigo-500 selection:text-white antialiased relative">
      {/* Top Scroll Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 z-50 origin-left"
        style={{ scaleX }}
      />
      <ScrollToTop />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Floating Chatbot Widget */}
      <Chatbot />

      <Footer />
    </div>
  );
}