import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Code2, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'High-performance React & Next.js web applications built for scale and conversion.',
    tags: ['React', 'Next.js', 'Tailwind']
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native-feel iOS and Android mobile solutions built with React Native and Flutter.',
    tags: ['React Native', 'iOS', 'Android']
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    desc: 'AWS and GCP serverless architecture, microservices, and cloud infrastructure management.',
    tags: ['AWS', 'Docker', 'Kubernetes']
  },
  {
    icon: Code2,
    title: 'Custom Software',
    desc: 'Bespoke enterprise platforms, REST/GraphQL APIs, and complex backend integration.',
    tags: ['Node.js', 'Python', 'PostgreSQL']
  },
  {
    icon: Settings,
    title: 'IT Consulting',
    desc: 'Strategic technology advisory, code audits, UI/UX refinement, and digital transformation.',
    tags: ['UI/UX', 'Architecture', 'Audits']
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">What We Do</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Our Core Services</h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm">
          Comprehensive software development and digital transformation capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, idx) => {
          const IconComp = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/50 backdrop-blur-xl transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <IconComp size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}