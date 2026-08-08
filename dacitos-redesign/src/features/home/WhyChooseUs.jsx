import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users, Clock, Lightbulb } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Results-Driven',
    desc: 'We focus on delivering measurable outcomes that directly impact your business growth and efficiency.'
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tech',
    desc: 'Always using the latest technologies and best practices to keep your business ahead of the competition.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    desc: 'Our certified professionals bring years of experience across multiple industries and technologies.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    desc: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly.'
  }
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Planning',
    desc: 'Understanding your needs'
  },
  {
    num: '02',
    title: 'Design & Development',
    desc: 'Building your solution'
  },
  {
    num: '03',
    title: 'Testing & Deployment',
    desc: 'Ensuring quality delivery'
  },
  {
    num: '04',
    title: 'Support & Maintenance',
    desc: 'Ongoing partnership'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      {/* Light Top Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-medium">
          <Lightbulb size={14} /> Why Choose Us
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Heading, Subtext & 2x2 Grid */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Built for Innovation, Designed for Growth
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-4 leading-relaxed max-w-xl">
              We combine technical expertise with business acumen to deliver solutions that not only work but drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => {
              const IconComp = b.icon;
              return (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{b.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Process Card with Blue Gradient */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 border border-white/10 p-8 shadow-2xl relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Our Process</h3>

            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 text-blue-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                    <p className="text-xs text-slate-300/80">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}