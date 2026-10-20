import React, { useState } from 'react';
import { TECH_STACK, SkillItem } from '../data/portfolioData';
import { Layers, Terminal, Database, Wrench, CheckCircle } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend & Database' | 'Tools & Deployment'>('All');

  const filteredTech = TECH_STACK.filter((tech) => {
    if (activeCategory === 'All') return true;
    return tech.category === activeCategory;
  });

  return (
    <section id="tech-stack" className="py-20 bg-[#040713] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
              Production Arsenal · Modern Stack
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
              Mastered Technologies &amp; Frameworks
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              From the original HTML, CSS, JavaScript, React, Node.js, MongoDB, and Git stack to modern cloud containerization and edge performance frameworks.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            {(['All', 'Frontend', 'Backend & Database', 'Tools & Deployment'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTech.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-2xl bg-[#070c1e] border border-slate-800/90 hover:border-slate-700/80 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-3.5 h-3.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <h3 className="text-lg font-bold text-white font-outfit group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <span className="text-[11px] font-mono font-medium text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {item.level}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-slate-500">{item.category}</span>
                <span className="text-cyan-400 font-mono font-medium">{item.experienceYears}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Highlights Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-cyan-950/30 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Full-Stack Production Ready Guarantee</div>
              <div className="text-xs text-slate-300">Clean code practices, strict TypeScript linting, 100% responsive cross-device testing.</div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-xs font-mono text-cyan-300 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
              MERN Stack · Next.js · PostgreSQL
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
