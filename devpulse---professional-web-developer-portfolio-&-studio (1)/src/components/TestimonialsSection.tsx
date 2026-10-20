import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#050814] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            Client Endorsements · Quantitative Proof
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            What Founders &amp; Engineering Leads Say
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Real outcomes from entrepreneurs, SaaS founders, and enterprise organizations worldwide.
          </p>
        </div>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#070c1e] p-7 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl relative"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Outcome badge */}
                <div className="inline-block px-3 py-1 rounded-md bg-blue-950/70 border border-blue-800/80 text-xs font-semibold text-cyan-300 mb-4 font-mono">
                  {t.outcome}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author attribution */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="font-bold text-white text-sm font-outfit">{t.name}</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {t.role} · <span className="text-slate-300">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
