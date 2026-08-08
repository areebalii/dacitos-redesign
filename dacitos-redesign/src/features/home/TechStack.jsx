import React from 'react';

const techList = [
  'React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Azure', 'Docker',
  'Kubernetes', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Flutter', 'React Native', 'DevOps'
];

export default function TechStack() {
  return (
    <section className="py-16 border-y border-white/5 bg-[#0A0C14]">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Technologies We Master
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Leveraging the latest and most reliable technologies to build your solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {techList.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}