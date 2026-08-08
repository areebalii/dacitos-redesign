import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Award } from 'lucide-react';

const testimonials = [
  {
    quote: "Their eCommerce development team delivered exactly what we needed. Our online sales doubled within 6 months after launching the new platform.",
    author: "Priya Mehta",
    role: "Managing Director",
    company: "Mehta Fashion House",
    initials: "P"
  },
  {
    quote: "Dacitos transformed our cloud infrastructure and reduced operational costs by 40%. Their team works like a true extension of our company.",
    author: "David Chen",
    role: "CTO",
    company: "Apex Global Solutions",
    initials: "D"
  },
  {
    quote: "Exceptional code quality and timely delivery. The custom mobile application surpassed our expectations in design and performance.",
    author: "Sarah Jenkins",
    role: "Product Lead",
    company: "Vanguard Tech",
    initials: "S"
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 text-center">
      {/* Section Badge */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-medium mb-4">
        <Award size={14} /> Client Success Stories
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-12">
        What Our Clients Say
      </h2>

      {/* Testimonial Card */}
      <div className="max-w-3xl mx-auto min-h-[260px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-gradient-to-b from-cyan-950/20 to-blue-950/20 border border-white/10 p-8 sm:p-12 shadow-2xl space-y-6 backdrop-blur-xl"
          >
            {/* 5-Star Rating */}
            <div className="flex justify-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed italic">
              "{testimonials[activeIdx].quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="w-11 h-11 rounded-full bg-cyan-800 text-white font-bold text-sm flex items-center justify-center">
                {testimonials[activeIdx].initials}
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">{testimonials[activeIdx].author}</div>
                <div className="text-xs text-slate-400">{testimonials[activeIdx].role}</div>
                <div className="text-[11px] font-semibold text-cyan-400">{testimonials[activeIdx].company}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2 rounded-full transition-all ${idx === activeIdx ? 'w-8 bg-blue-500' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}