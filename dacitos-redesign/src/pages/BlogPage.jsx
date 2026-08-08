import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, Clock, Calendar, User, ArrowUpRight, Sparkles } from 'lucide-react';

const categories = ['All', 'Web Development', 'Cloud & Architecture', 'AI & ML', 'Best Practices'];

const articles = [
  {
    id: 1,
    title: 'Building Resilient Microservices with React 19 & Node.js',
    category: 'Web Development',
    excerpt: 'Explore structural patterns for designing decoupled, high-throughput microservices using modern React server components and Express architecture.',
    author: 'Areeb Ali',
    date: 'Aug 2026',
    readTime: '6 min read',
    featured: true
  },
  {
    id: 2,
    title: 'Optimizing Cloud Performance: Multi-Region Database Architecture',
    category: 'Cloud & Architecture',
    excerpt: 'How to structure MongoDB Atlas and PostgreSQL replication topologies to ensure continuous sub-100ms database reads across global availability zones.',
    author: 'Dacitos Tech Lead',
    date: 'Jul 2026',
    readTime: '8 min read',
    featured: false
  },
  {
    id: 3,
    title: 'Integrating Custom AI Agents into Enterprise Workflows',
    category: 'AI & ML',
    excerpt: 'A practical guide on leveraging LLM APIs, function calling, and custom vector databases within existing SaaS platforms.',
    author: 'Areeb Ali',
    date: 'Jun 2026',
    readTime: '10 min read',
    featured: false
  },
  {
    id: 4,
    title: 'Zero-Downtime Deployment Strategies with Docker & Vercel',
    category: 'Best Practices',
    excerpt: 'Eliminate production service interruption with automated blue-green deployment pipelines and instant atomic rollback triggers.',
    author: 'DevOps Engineering',
    date: 'May 2026',
    readTime: '5 min read',
    featured: false
  },
  {
    id: 5,
    title: 'Mastering Component Performance in Large-Scale Web Apps',
    category: 'Web Development',
    excerpt: 'Eliminate unnecessary React re-renders, optimize heavy DOM trees with virtual lists, and implement smart dynamic imports.',
    author: 'Frontend Team',
    date: 'Apr 2026',
    readTime: '7 min read',
    featured: false
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 space-y-16">

      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
          <BookOpen size={14} /> Insights & Thought Leadership
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Technical Articles & Insights
        </h1>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Deep dives into full-stack web development, cloud scalability, software design patterns, and emerging technologies.
        </p>
      </div>

      {/* Search and Category Filter Header */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles by topic, framework, or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#0F111A] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${activeCategory === cat
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 font-semibold'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article Box (Showed if "All" is active and no search active) */}
      {activeCategory === 'All' && !searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-blue-950/60 via-[#0F111A] to-cyan-950/60 border border-blue-500/30 relative overflow-hidden group space-y-6 shadow-2xl"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
            <Sparkles size={14} /> FEATURED ARTICLE
          </div>

          <div className="space-y-3 max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
              {articles[0].title}
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              {articles[0].excerpt}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <User size={14} className="text-cyan-400" /> {articles[0].author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {articles[0].date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {articles[0].readTime}
              </span>
            </div>

            <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Read Article <ArrowUpRight size={14} />
            </span>
          </div>
        </motion.div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((art) => (
            <motion.article
              layout
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-3xl bg-[#0F111A] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    {art.category}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Clock size={12} /> {art.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <User size={13} className="text-cyan-400" />
                  <span>{art.author}</span>
                </div>

                <span className="text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1 font-semibold">
                  Read <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}