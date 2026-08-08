import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise FinTech Portal',
    category: 'Web App & Cloud Architecture',
    desc: 'A secure financial analytics platform processing high-volume transactional data with sub-second response times.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    title: 'AI Commerce Platform',
    category: 'E-Commerce & Machine Learning',
    desc: 'An automated digital commerce engine complete with personalized AI recommendation agents and inventory synchronization.',
    tags: ['Next.js', 'Express', 'MongoDB', 'Vercel']
  },
  {
    title: 'Logistics Fleet Tracking',
    category: 'Mobile App',
    desc: 'Real-time GPS tracking and driver dispatch portal supporting thousands of concurrent active devices.',
    tags: ['React Native', 'AWS', 'WebSockets']
  }
];

export default function WorkPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-6 space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">Portfolio</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Selected Case Studies</h1>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          Explore a selection of enterprise applications and custom platforms engineered for our global client base.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-[#0F111A] border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">{p.category}</span>
                <Layers size={18} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{p.title}</h2>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                View Project Details <ExternalLink size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}