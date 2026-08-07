import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer";

  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] border border-white/10 px-6 py-3 text-sm",
    secondary: "bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20 backdrop-blur-md px-6 py-3 text-sm",
    glass: "glass-panel text-white hover:bg-white/10 px-5 py-2.5 text-xs font-mono uppercase tracking-wider"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}