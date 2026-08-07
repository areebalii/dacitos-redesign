import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-28 md:pb-32 max-w-7xl mx-auto px-6 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-cyan-400/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Column: Headline & Action CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-200 tracking-wide">
              Next-Gen Software Engineering Agency
            </span>
          </motion.div>

          {/* Heading matching assignment reference */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Your Trusted <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              IT Partner
            </span>{" "}
            for Success
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed"
          >
            We deliver cutting-edge IT solutions and software development services that drive growth, enhance efficiency, and transform your business for the digital age.
          </motion.p>

          {/* Key Value Bullets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-3 pt-2 text-xs font-medium text-slate-300 max-w-md"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-400" />
              <span>Tailored Cloud Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-400" />
              <span>Full-Stack Web & Mobile</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-400" />
              <span>Enterprise AI Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-cyan-400" />
              <span>Dedicated Agile Teams</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 font-semibold text-white flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 hover:scale-105 transition-all text-sm"
            >
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <Link
              to="/work"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 font-semibold text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md text-sm"
            >
              Explore Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Interactive Graphic Card */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-6 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden"
          >
            {/* Top Browser Bar */}
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-auto text-[10px] font-mono text-slate-400">dacitos.com/core-v2</span>
            </div>

            {/* Dashboard Mock Content */}
            <div className="space-y-4">
              <div className="h-28 rounded-xl bg-blue-500/10 border border-blue-500/20 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-blue-400">System Performance</span>
                  <Zap size={16} className="text-amber-400 animate-bounce" />
                </div>
                <div className="text-2xl font-mono font-bold text-white">99.98% Uptime</div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-300 h-full w-[95%]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono">Active Deployments</span>
                  <div className="text-lg font-bold text-white">120+</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono">Security Grade</span>
                  <div className="text-lg font-bold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck size={16} /> A+ SSL
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}