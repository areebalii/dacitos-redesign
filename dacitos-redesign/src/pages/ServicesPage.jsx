import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Code2, Settings, CheckCircle } from 'lucide-react';

const serviceDetails = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    subtitle: 'Custom websites & web applications',
    desc: 'We engineer high-speed, modern React and Next.js web applications designed for conversion, seamless UX, and effortless scaling.',
    features: ['Single Page Applications (SPAs)', 'Server-Side Rendering (SSR)', 'Progressive Web Apps (PWAs)', 'Tailwind CSS UI Systems']
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile Apps',
    subtitle: 'iOS & Android development',
    desc: 'Delivering cross-platform and native mobile apps with smooth 60fps performance and intuitive UI architecture.',
    features: ['React Native & Flutter', 'Offline-first Storage', 'Push Notification Engines', 'App Store Deployment']
  },
  {
    id: 'cloud-services',
    icon: Cloud,
    title: 'Cloud Services',
    subtitle: 'AWS, Azure & cloud migration',
    desc: 'Scalable serverless backends, automated CI/CD pipelines, and secure cloud infrastructure management.',
    features: ['AWS & GCP Cloud Native', 'Docker & Kubernetes', 'Database Clustering', 'Zero-Downtime Deployments']
  },
  {
    id: 'custom-software',
    icon: Code2,
    title: 'Custom Software',
    subtitle: 'Tailored software solutions',
    desc: 'End-to-end software development tailored to complex business logic, enterprise APIs, and real-time processing.',
    features: ['RESTful & GraphQL APIs', 'Microservices Architecture', 'Secure Auth Systems', 'AI & Machine Learning APIs']
  },
  {
    id: 'it-consulting',
    icon: Settings,
    title: 'IT Consulting',
    subtitle: 'Strategic technology guidance',
    desc: 'Audit your existing codebase, modernize legacy systems, and define your long-term technology roadmap.',
    features: ['Codebase Security Audits', 'Architecture Modernization', 'Agile Workflow Optimization', 'Tech Stack Selection']
  }
];

export default function ServicesPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-6 space-y-20">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">Capabilities</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Our Specialized Services</h1>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          From full-stack development to cloud engineering, we build software solutions designed to scale with your enterprise.
        </p>
      </div>

      <div className="space-y-12">
        {serviceDetails.map((s, index) => {
          const IconComp = s.icon;
          return (
            <motion.section
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-[#0F111A] border border-white/10 scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-mono">
                  <IconComp size={16} />
                  <span>{s.subtitle}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{s.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>

              <div className="lg:col-span-5 bg-white/5 p-6 rounded-xl border border-white/5 space-y-3">
                <h3 className="text-xs font-mono uppercase text-slate-300 tracking-wider">Key Deliverables</h3>
                <div className="space-y-2">
                  {s.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle size={15} className="text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}