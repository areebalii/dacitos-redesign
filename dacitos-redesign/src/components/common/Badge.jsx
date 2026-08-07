import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Badge({ children, icon: Icon = Sparkles }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
      {Icon && <Icon className="w-4 h-4 text-indigo-400 animate-pulse" />}
      <span className="text-xs font-semibold text-slate-200 tracking-wide">
        {children}
      </span>
    </div>
  );
}