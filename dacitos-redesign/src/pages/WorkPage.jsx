import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Web App', 'E-Commerce', 'Mobile App', 'Cloud Architecture'];

const projects = [
  {
    id: 1,
    title: 'Enterprise FinTech Analytics Portal',
    category: 'Web App',
    client: 'Apex Global Financials',
    impact: '3x Faster Processing',
    desc: 'A high-throughput financial analytics engine processing high-volume transactional data with sub-second response times and real-time dashboarding.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
    borderColor: 'group-hover:border-blue-500/50'
  },
  {
    id: 2,
    title: 'AI Commerce Recommendation Engine',
    category: 'E-Commerce',
    client: 'Mehta Fashion House',
    impact: '200% Sales Growth',
    desc: 'An automated digital commerce engine complete with personalized AI recommendation agents, real-time cart recovery, and ERP inventory synchronization.',
    tags: ['Next.js', 'Express', 'MongoDB', 'Vercel', 'Tailwind CSS'],
    gradient: 'from-cyan-600/20 via-blue-600/10 to-transparent',
    borderColor: 'group-hover:border-cyan-500/50'
  },
  {
    id: 3,
    title: 'Logistics Fleet Tracking & Dispatch',
    category: 'Mobile App',
    client: 'Vanguard Logistics',
    impact: '10k+ Live Devices',
    desc: 'Real-time GPS tracking and automated driver dispatch portal supporting thousands of concurrent active mobile devices with offline-first sync.',
    tags: ['React Native', 'AWS IoT', 'WebSockets', 'Node.js'],
    gradient: 'from-purple-600/20 via-pink-600/10 to-transparent',
    borderColor: 'group-hover:border-purple-500/50'
  },
  {
    id: 4,
    title: 'Healthcare SaaS Patient Portal',
    category: 'Web App',
    client: 'CarePulse Health',
    impact: 'HIPAA Compliant',
    desc: 'Encrypted patient health records portal with integrated telehealth video conferencing and automated appointment scheduling workflows.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
    borderColor: 'group-hover:border-emerald-500/50'
  },
  {
    id: 5,
    title: 'Multi-Region Microservices Migration',
    category: 'Cloud Architecture',
    client: 'OmniCloud Systems',
    impact: '99.99% Uptime',
    desc: 'Architected and deployed a multi-region cloud migration strategy reducing infrastructure expenditure while improving failover resiliency.',
    tags: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
    gradient: 'from-amber-600/20 via-orange-600/10 to-transparent',
    borderColor: 'group-hover:border-amber-500/50'
  },
  {
    id: 6,
    title: 'On-Demand Service Marketplace',
    category: 'Mobile App',
    client: 'ServNow Network',
    impact: '100k+ Active Users',
    desc: 'Cross-platform mobile application matching service professionals with local customers, featuring real-time chat and automated payment escrow.',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'Stripe API'],
    gradient: 'from-blue-600/20 via-cyan-600/10 to-transparent',
    borderColor: 'group-hover:border-blue-500/50'
  }
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 space-y-16">

      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
          <Sparkles size={14} /> Proven Technical Track Record
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Engineering Showcase
        </h1>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Explore a selection of enterprise applications, scalable platforms, and cloud infrastructure engineered by Dacitos.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mr-2">
          <Filter size={14} /> Filter:
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${activeFilter === cat
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`rounded-3xl bg-[#0F111A] border border-white/10 ${p.borderColor} transition-all duration-300 flex flex-col justify-between group overflow-hidden relative shadow-xl hover:-translate-y-1`}
            >
              {/* Visual Card Top Accent Banner */}
              <div className={`h-28 w-full bg-gradient-to-br ${p.gradient} border-b border-white/5 p-6 flex flex-col justify-between relative`}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-blue-300 uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                    {p.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:scale-110 transition-all">
                    <Layers size={16} />
                  </div>
                </div>
                <div className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1">
                  ✦ {p.impact}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-slate-500">{p.client}</div>
                  <h2 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {p.title}
                  </h2>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {p.desc}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                      Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Contact CTA Bar */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 border border-white/10 p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Have a complex application to build?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Our engineering team is ready to design, build, and deploy your next digital product.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-100 transition-all shadow-lg"
        >
          Discuss Your Project <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
}