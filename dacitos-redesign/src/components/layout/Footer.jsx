import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040508] py-16 text-slate-400 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">D</div>
            <span className="font-extrabold text-lg text-white tracking-tight">DACITOS</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Dacitos Technologies Pvt. Ltd. is an enterprise software engineering agency crafting high-availability digital solutions.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider font-mono">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Services</Link></li>
            <li><Link to="/work" className="hover:text-indigo-400 transition-colors">Case Studies</Link></li>
            <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider font-mono">Capabilities</h4>
          <ul className="space-y-2 text-xs">
            <li className="hover:text-indigo-400 cursor-pointer">React & Next.js Platforms</li>
            <li className="hover:text-indigo-400 cursor-pointer">Cloud Architecture & AWS</li>
            <li className="hover:text-indigo-400 cursor-pointer">AI Agents & LLM Integration</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider font-mono">Connect</h4>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 text-slate-300 hover:text-white transition-all">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 text-slate-300 hover:text-white transition-all">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 text-slate-300 hover:text-white transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Dacitos Technologies Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}