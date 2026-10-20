import React from 'react';
import { WORK_PROCESS } from '../data/portfolioData';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#040713] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            Execution Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Turning Ideas Into Websites
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A rigorous, transparent 4-stage engineering lifecycle from initial concept and UI blueprints to robust clean code and lightning-fast deployment.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_PROCESS.map((proc, index) => (
            <div
              key={proc.step}
              className="p-6 rounded-2xl bg-[#070c1e] border border-slate-800/90 flex flex-col justify-between relative group hover:border-slate-700 transition-all duration-300"
            >
              <div>
                <div className="text-3xl font-extrabold font-mono text-cyan-400/80 mb-4">
                  {proc.step}
                </div>

                <h3 className="text-lg font-bold text-white font-outfit mb-2 group-hover:text-cyan-300 transition-colors">
                  {proc.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proc.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Milestones</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
