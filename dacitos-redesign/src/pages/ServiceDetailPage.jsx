import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Cloud,
  Code2,
  Settings,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-react';

const serviceData = {
  'web-development': {
    icon: Globe,
    title: 'Web Development',
    subtitle: 'High-performance React & Next.js applications built for scale, performance, and search visibility.',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    description: 'We construct ultra-fast, responsive single-page and server-rendered web applications utilizing React 19, Next.js, and Node.js backend pipelines. Our web applications are engineered for enterprise scale, maximum security, and search engine optimization.',
    features: [
      'Custom React & Next.js Single Page Applications (SPAs)',
      'Server-Side Rendering (SSR) & Static Site Generation (SSG)',
      'Headless CMS Integrations & E-Commerce Engines',
      'Sub-second page loading speed optimization',
      'Progressive Web Applications (PWA) capability'
    ],
    techStack: ['React 19', 'Next.js', 'Tailwind CSS', 'Node.js', 'TypeScript', 'GraphQL', 'MongoDB', 'Vercel'],
    deliverables: ['Responsive Web App', 'Production Deployment', 'API Integration', 'Performance Audit Score 90+']
  },
  'mobile-apps': {
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: 'Cross-platform mobile applications engineered with React Native and Flutter for native performance.',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    description: 'Our mobile engineering team creates seamless iOS and Android applications using unified codebases. We focus on smooth 60fps UI performance, offline data synchronization, biometric authentication, and instant push notification workflows.',
    features: [
      'Cross-platform iOS & Android engineering',
      'Native device hardware integration (GPS, Camera, Biometrics)',
      'Offline-first SQLite and Realm storage engines',
      'App Store (iOS) & Google Play Store release management',
      'Real-time push notifications & analytics'
    ],
    techStack: ['React Native', 'Flutter', 'iOS / Swift', 'Android / Kotlin', 'Firebase', 'Appwrite', 'Redux Toolkit'],
    deliverables: ['iOS & Android Builds', 'Store Submission Support', 'Backend API Connector', 'Crash Analytics Hub']
  },
  'cloud-services': {
    icon: Cloud,
    title: 'Cloud Services & DevOps',
    subtitle: 'AWS, Azure, and Google Cloud infrastructure automation, microservices, and serverless hosting.',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    description: 'We design resilient cloud architectures that scale automatically with your traffic demands. From containerizing legacy platforms with Docker & Kubernetes to setting up CI/CD delivery pipelines on AWS or Railway.',
    features: [
      'AWS & Azure Serverless Infrastructure Design',
      'Containerization via Docker & Kubernetes orchestration',
      'Automated Zero-Downtime CI/CD Pipelines',
      'Database replication, backup automation & failover',
      'Cloud security hardening & SOC2 compliance auditing'
    ],
    techStack: ['AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'Railway', 'Vercel', 'Nginx'],
    deliverables: ['Infrastructure Code', 'Automated CI/CD Pipeline', 'Security Assessment', 'Cloud Monitoring Panel']
  },
  'custom-software': {
    icon: Code2,
    title: 'Custom Software & API Engineering',
    subtitle: 'Bespoke enterprise software platforms, backend microservices, and database systems.',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    description: 'When off-the-shelf software falls short, we design custom enterprise software tailored specifically to your operational requirements. From complex ERP dashboards to secure REST/GraphQL backend architecture.',
    features: [
      'Tailored ERP, CRM, and internal operational dashboards',
      'Scalable RESTful & GraphQL API gateway development',
      'High-throughput SQL & NoSQL database architecture',
      'Legacy system refactoring & codebase modernization',
      'Third-party software payment and SaaS integrations'
    ],
    techStack: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM', 'Docker'],
    deliverables: ['Custom Backend / API', 'Database Schema', 'Automated Unit Tests', 'API Documentation']
  },
  'it-consulting': {
    icon: Settings,
    title: 'IT & Technical Consulting',
    subtitle: 'Strategic architecture reviews, code quality audits, and digital transformation roadmaps.',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    description: 'Avoid costly tech debt and scale your digital infrastructure with confidence. Our senior software architects perform deep-dive audits, review system security, optimize database bottlenecks, and guide technology adoption.',
    features: [
      'Comprehensive codebase & security vulnerability audits',
      'Database query optimization & speed bottleneck resolution',
      'Technology stack selection & migration strategies',
      'UI/UX design system reviews & accessibility compliance',
      'DevOps team mentorship & agile sprint workflow setup'
    ],
    techStack: ['System Architecture', 'Code Audits', 'OWASP Security', 'Performance Profiling', 'UI/UX Auditing'],
    deliverables: ['Audit Report', 'Refactoring Roadmap', 'Architecture Diagrams', 'Executive Consultation']
  }
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  // Fallback to services list if service identifier is invalid
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = service.icon;

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 space-y-20">

      {/* Top Back Nav */}
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors"
      >
        <ArrowLeft size={14} /> Back to All Services
      </Link>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold ${service.badgeColor}`}>
            <Sparkles size={14} /> Specialized Service Capability
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            {service.subtitle}
          </p>

          <p className="text-slate-400 text-sm leading-relaxed">
            {service.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 transition-all inline-flex items-center gap-2"
            >
              Request {service.title} Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Floating Card */}
        <div className="lg:col-span-5">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0F111A] to-[#0A0C14] border border-white/10 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
              <IconComponent size={28} />
            </div>

            <h3 className="text-xl font-bold text-white">What We Deliver</h3>

            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <div className="text-xs font-mono text-slate-400">Guaranteed SLAs:</div>
              <div className="flex items-center gap-4 text-xs font-semibold text-white">
                <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-blue-400" /> Security Compliant</span>
                <span className="flex items-center gap-1"><Zap size={14} className="text-cyan-400" /> High Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features & Key Capabilities */}
      <div className="space-y-8">
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
            Core Features & Scope
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Key capabilities included in our {service.title.toLowerCase()} service offerings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0F111A] border border-white/10 flex items-start gap-4 hover:border-blue-500/30 transition-all"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                0{idx + 1}
              </div>
              <span className="text-sm font-medium text-slate-200 leading-snug">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="p-8 rounded-3xl bg-[#0A0C14] border border-white/10 space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold">
          <Layers size={16} /> Stack & Tools Used
        </div>
        <div className="flex flex-wrap gap-2.5">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 border border-white/10 p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
          Ready to launch your {service.title.toLowerCase()} project?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Contact our technical leads today for a free architecture review and project estimate.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-100 transition-all shadow-xl"
        >
          Get Free Consultation <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
}