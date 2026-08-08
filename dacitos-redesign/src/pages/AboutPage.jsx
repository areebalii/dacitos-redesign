import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  Users,
  Terminal,
  Target,
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '50+', label: 'Projects Delivered', sub: 'Across 10+ industries' },
  { value: '99.9%', label: 'Uptime SLA', sub: 'For deployed cloud platforms' },
  { value: '24/7', label: 'Technical Monitoring', sub: 'Proactive issue resolution' },
  { value: '100%', label: 'Client Satisfaction', sub: 'On-time milestone completion' },
];

const coreValues = [
  {
    icon: ShieldCheck,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'hover:border-blue-500/40',
    title: 'Security-First Architecture',
    desc: 'Strict adherence to modern OWASP security standards, encrypted data pipelines, and rigorous vulnerability assessments.'
  },
  {
    icon: Terminal,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'hover:border-cyan-500/40',
    title: 'Modern Tech Stack',
    desc: 'Engineering resilient solutions powered by React 19, Next.js, Node.js, Tailwind CSS v4, AWS, and enterprise databases.'
  },
  {
    icon: Users,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'hover:border-purple-500/40',
    title: 'Agile Execution',
    desc: 'Collaborative sprint cycles, complete transparent code access, weekly demo releases, and zero-downtime deployment workflows.'
  },
  {
    icon: Award,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'hover:border-emerald-500/40',
    title: 'Proven Code Quality',
    desc: 'Sub-second page rendering, clean modular code design, automated unit testing, and scalable microservice integration.'
  }
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 space-y-24">

      {/* --- HERO HEADER --- */}
      <div className="text-center space-y-5 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span className="text-xs font-semibold tracking-wide">About Dacitos Technologies</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
        >
          Driven by Innovation, <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            Defined by Engineering
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-base md:text-lg leading-relaxed font-normal"
        >
          Dacitos Technologies Pvt Ltd is a modern software engineering agency specializing in custom web applications, cross-platform mobile products, and enterprise cloud architecture.
        </motion.p>
      </div>

      {/* --- STATS METRICS BAR --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-gradient-to-b from-[#0F111A] to-[#0A0C14] border border-white/10 shadow-2xl backdrop-blur-xl"
      >
        {stats.map((item, idx) => (
          <div key={idx} className="text-center space-y-1 p-4 border-r last:border-r-0 border-white/5">
            <div className="text-3xl md:text-4xl font-mono font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
              {item.value}
            </div>
            <div className="text-sm font-bold text-white">{item.label}</div>
            <div className="text-[11px] text-slate-400 font-mono">{item.sub}</div>
          </div>
        ))}
      </motion.div>

      {/* --- MISSION & VISION GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 rounded-3xl bg-[#0F111A] border border-white/10 space-y-4 relative overflow-hidden group hover:border-blue-500/40 transition-all"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
            <Target size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            To empower enterprises and forward-thinking businesses by building ultra-fast, highly secure, and intuitive digital software solutions that fuel sustained revenue growth.
          </p>
          <ul className="space-y-2 pt-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
              <span>Zero compromise on code maintainability & performance</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
              <span>Transparent technical communication and goal alignment</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 rounded-3xl bg-[#0F111A] border border-white/10 space-y-4 relative overflow-hidden group hover:border-cyan-500/40 transition-all"
        >
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
            <Compass size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            To become a globally recognized software partner renowned for engineering enterprise-grade applications that seamlessly scale to millions of active users.
          </p>
          <ul className="space-y-2 pt-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
              <span>Pioneering next-gen web frameworks and cloud tech</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
              <span>Long-term strategic partnership over short-term builds</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* --- CORE PILLARS / VALUES --- */}
      <div className="space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">Our DNA</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Built on Core Pillars</h2>
          <p className="text-slate-400 text-sm">
            How we ensure every project meets enterprise engineering standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl bg-[#0F111A] border border-white/10 ${item.borderColor} transition-all space-y-4 flex flex-col justify-between hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.color} flex items-center justify-center`}>
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- BOTTOM CTA CARD --- */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 border border-white/10 p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Want to collaborate with our engineering team?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Whether you need a brand-new application or want to modernize legacy architecture, we are ready to bring your vision to life.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold text-white text-sm shadow-xl shadow-blue-500/25 hover:scale-105 transition-all"
        >
          Start a Conversation <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}