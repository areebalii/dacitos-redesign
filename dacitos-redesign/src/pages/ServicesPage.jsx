import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Cloud,
  Code2,
  Settings,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const servicesList = [
  {
    id: 'web-development',
    slug: 'web-development',
    icon: Globe,
    title: 'Web Development',
    subtitle: 'Custom Web Apps & High-Conversion Digital Platforms',
    desc: 'We construct enterprise-grade web applications with React 19, Next.js, and Node.js. Optimized for performance, security, and search engine ranking.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    highlights: ['Sub-second load speeds', 'Custom API & CMS integrations', 'Responsive cross-device layouts'],
    badge: 'Popular Choice'
  },
  {
    id: 'mobile-apps',
    slug: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: 'Native & Cross-Platform iOS and Android Engineering',
    desc: 'High-performance mobile solutions built with React Native and Flutter. Designed for fluid 60fps interaction and offline feature support.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    highlights: ['Native UI performance', 'Offline-first synchronization', 'Store publishing support'],
    badge: 'Mobile First'
  },
  {
    id: 'cloud-services',
    slug: 'cloud-services',
    icon: Cloud,
    title: 'Cloud Services & DevOps',
    subtitle: 'AWS, Azure Cloud Migration & Microservices Infrastructure',
    desc: 'Scalable cloud infrastructure management, serverless setup, container orchestration, and continuous integration (CI/CD) pipelines.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'],
    highlights: ['99.99% uptime guarantee', 'Automated deployment triggers', 'Cloud cost optimization'],
    badge: 'Scalable Cloud'
  },
  {
    id: 'custom-software',
    slug: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    subtitle: 'Tailored Enterprise Dashboards & Backend Systems',
    desc: 'Bespoke enterprise software, administrative portals, payment gateway integrations, and robust database architectures.',
    tags: ['Express', 'Python', 'PostgreSQL', 'REST APIs', 'GraphQL'],
    highlights: ['Custom ERP/CRM tools', 'Encrypted data security', 'Scalable microservices'],
    badge: 'Enterprise Grade'
  },
  {
    id: 'it-consulting',
    slug: 'it-consulting',
    icon: Settings,
    title: 'IT & Technical Consulting',
    subtitle: 'Strategic Software Advisory & Codebase Audits',
    desc: 'Expert technical guidance, codebase security audits, performance profiling, UI/UX refinement, and cloud architecture reviews.',
    tags: ['Code Audits', 'Architecture', 'UI/UX Review', 'Security'],
    highlights: ['Comprehensive tech reviews', 'Database query optimization', 'Agile process setup'],
    badge: 'Strategic Advisory'
  }
];

export default function ServicesPage() {
  const { hash } = useLocation();

  // Handle Hash Deep-Linking (e.g. /services#cloud-services)
  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.replace('#', ''));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 space-y-20">

      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
          <Sparkles size={14} /> Complete Software Engineering Capabilities
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Services & Technical Solutions
        </h1>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          From full-stack web applications to cloud architecture and mobile engineering, we deliver modern software built for performance.
        </p>
      </div>

      {/* Services Grid Section */}
      <div className="space-y-12">
        {servicesList.map((service, idx) => {
          const IconComp = service.icon;
          return (
            <motion.div
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="scroll-mt-28 p-8 md:p-10 rounded-3xl bg-[#0F111A] border border-white/10 hover:border-blue-500/40 transition-all space-y-6 group shadow-2xl relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconComp size={28} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                      {service.badge}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h2>
                  </div>
                </div>

                {/* Direct Link to Service Detail Page */}
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-xs font-semibold text-white transition-all"
                >
                  Explore Details <ExternalLink size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm font-semibold text-slate-200">{service.subtitle}</p>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{service.desc}</p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Highlights Box */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <h4 className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">Key Highlights</h4>
                  <ul className="space-y-2">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 inline-flex items-center gap-1 hover:underline"
                    >
                      View full service breakdown <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Footer */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 border border-white/10 p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
          Need a custom solution for your enterprise?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Our senior engineering leads are available to evaluate your system requirements and provide transparent project proposals.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-100 transition-all shadow-xl"
        >
          Contact Our Engineering Team <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
}