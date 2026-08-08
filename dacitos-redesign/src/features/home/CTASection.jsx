import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 border-t border-white/10 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Ready to Transform Your Business?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Let's discuss how we can help you achieve your technology goals and drive your business forward with innovative IT solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Mail size={16} /> Get Free Consultation
          </Link>

          <a
            href="tel:+923000000000"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Phone size={16} /> Call Us Now
          </a>
        </div>

        {/* Sub-text disclaimer */}
        <p className="text-[11px] text-slate-400 font-mono tracking-wide">
          Free consultation • No obligation • Quick response within 24 hours
        </p>
      </div>
    </section>
  );
}