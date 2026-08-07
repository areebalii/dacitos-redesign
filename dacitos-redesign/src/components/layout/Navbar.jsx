import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  Globe,
  Smartphone,
  Cloud,
  Code2,
  Settings,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const serviceItems = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Custom websites & web applications',
    path: '/services#web-development'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'iOS & Android development',
    path: '/services#mobile-apps'
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    desc: 'AWS, Azure & cloud migration',
    path: '/services#cloud-services'
  },
  {
    icon: Code2,
    title: 'Custom Software',
    desc: 'Tailored software solutions',
    path: '/services#custom-software'
  },
  {
    icon: Settings,
    title: 'IT Consulting',
    desc: 'Strategic technology guidance',
    path: '/services#it-consulting'
  }
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07080E]/90 border-b border-white/10 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* --- BRAND LOGO --- */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            {/* Logo Mark with trend chart arrow effect */}
            <span className="text-xl font-black italic">D</span>
            <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Dacitos
            </span>
            <span className="text-[10px] tracking-widest text-blue-400 font-mono -mt-1 uppercase">
              Technologies Pvt Ltd
            </span>
          </div>
        </Link>

        {/* --- DESKTOP NAV LINKS --- */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : 'text-slate-300'}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : 'text-slate-300'}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/work"
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : 'text-slate-300'}`
            }
          >
            Portfolio
          </NavLink>

          {/* SERVICES DROPDOWN TRIGGER */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${servicesOpen
                  ? 'bg-blue-600/10 border border-blue-500/40 text-blue-400'
                  : 'text-slate-300 hover:text-white'
                }`}
            >
              Services
              {servicesOpen ? <ChevronUp size={16} className="text-blue-400" /> : <ChevronDown size={16} />}
            </button>

            {/* SERVICES DROPDOWN MENU PANEL */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full right-0 mt-3 w-80 rounded-2xl bg-[#0F111A] border border-white/10 shadow-2xl shadow-black/80 p-2 overflow-hidden z-50 backdrop-blur-2xl"
                >
                  <div className="space-y-1">
                    {serviceItems.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <Link
                          key={item.title}
                          to={item.path}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors mt-0.5">
                            <IconComp size={18} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-slate-400 leading-snug">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* BOTTOM DROPDOWN CTA */}
                  <div className="mt-2 pt-2 border-t border-white/10 px-3 py-2">
                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View All Services <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : 'text-slate-300'}`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : 'text-slate-300'}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* --- MOBILE TOGGLE --- */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* --- MOBILE DRAWER MENU --- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F111A] border-b border-white/10 px-6 py-6 space-y-4 overflow-hidden"
          >
            <NavLink to="/" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-slate-200">
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-slate-200">
              About
            </NavLink>
            <NavLink to="/work" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-slate-200">
              Portfolio
            </NavLink>

            {/* Mobile Services Accordion */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Services</span>
              <div className="pl-2 space-y-3">
                {serviceItems.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <Link
                      key={item.title}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 text-sm text-slate-300 hover:text-white"
                    >
                      <IconComp size={16} className="text-blue-400" />
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <NavLink to="/blog" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-slate-200 pt-2 border-t border-white/10">
              Blog
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-slate-200">
              Contact
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}