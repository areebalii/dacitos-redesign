import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#07080E] text-slate-100 flex items-center justify-center p-6 text-center">
      <div className="space-y-6 max-w-md">
        <span className="text-6xl font-mono font-extrabold text-blue-500">404</span>
        <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
        <p className="text-xs text-slate-400">
          The path you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-500 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Homepage
        </Link>
      </div>
    </div>
  );
}