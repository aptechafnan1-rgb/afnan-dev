import React from 'react';
import { SERVICES, ServiceItem } from '../data/portfolioData';
import { Globe, Code2, Cloud, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (type: ServiceItem['iconType']) => {
    switch (type) {
      case 'globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-blue-400" />;
      case 'cloud':
        return <Cloud className="w-6 h-6 text-sky-400" />;
      default:
        return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#050814] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            Core Service Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Comprehensive Web Development Services
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Engineered precisely according to modern industry standards. From bespoke business portals to complex full-stack web applications and 24/7 technical maintenance.
          </p>
        </div>

        {/* 3 Core Cards from the Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#070c1e] rounded-2xl border border-slate-800/90 hover:border-slate-700/80 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group relative shadow-lg"
            >
              <div>
                {/* Icon & Index header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.iconType)}
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    0{index + 1}
                  </span>
                </div>

                {/* Subtitle / Scope Pill */}
                <div className="text-xs font-medium text-cyan-400 mb-2">
                  {service.subtitle}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white font-outfit mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Key Deliverables:
                  </div>
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Target Audience & CTA */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="text-[11px] text-slate-400 mb-4">
                  <span className="font-semibold text-slate-300">Best for: </span>
                  {service.idealFor}
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 border border-slate-700/80 text-white text-xs font-semibold transition-all cursor-pointer shadow group-hover:bg-blue-600"
                >
                  <span>Select &amp; Estimate Cost</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
