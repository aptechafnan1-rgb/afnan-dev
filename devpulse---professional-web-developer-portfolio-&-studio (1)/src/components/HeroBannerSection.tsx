import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BannerItem } from '../data/portfolioData';
import { 
  Sparkles, 
  Maximize2, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  Layers, 
  Zap, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';

interface HeroBannerSectionProps {
  onContactClick: () => void;
  onInspectBanner: (banner: BannerItem) => void;
}

export const HeroBannerSection: React.FC<HeroBannerSectionProps> = ({
  onContactClick,
  onInspectBanner,
}) => {
  const { banners, aptechInfo } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeIndex = currentIndex < banners.length ? currentIndex : 0;
  const activeBanner = banners[activeIndex] || banners[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section id="banners" className="relative pt-8 pb-16 lg:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Top Kicker */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-medium text-cyan-300 shadow-inner mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Aptech Certified Web Developer Diploma Graduate</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">Available For Hire</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl font-outfit text-balance">
            Build Your Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">Digital Reality</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed text-balance">
            {aptechInfo.statement}
          </p>

          {/* Quick Pillar Highlights */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-slate-400">
            <span className="text-slate-200">Aptech Certified</span>
            <span aria-hidden="true" className="text-cyan-500">/</span>
            <span className="text-slate-200">Responsive Design</span>
            <span aria-hidden="true" className="text-cyan-500">/</span>
            <span className="text-slate-200">Clean Code</span>
            <span aria-hidden="true" className="text-cyan-500">/</span>
            <span className="text-slate-200">Fast Performance</span>
            <span aria-hidden="true" className="text-cyan-500">/</span>
            <span className="text-slate-200">SEO Friendly</span>
          </div>
        </div>

        {/* Primary Interactive Banner Showcase Frame */}
        <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-slate-900/60 shadow-2xl glow-blue">
          <div className="relative bg-[#060a1a] rounded-[22px] sm:rounded-[26px] overflow-hidden border border-slate-800/80">
            
            {/* Banner Media Container */}
            <div className="relative w-full aspect-[21/9] sm:aspect-[2.35/1] min-h-[260px] max-h-[560px] bg-slate-950 flex items-center justify-center overflow-hidden group">
              <img
                src={activeBanner.imageSrc}
                alt={activeBanner.title}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />

              {/* Scrim overlay at the bottom for metadata legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-[#050814]/20 to-transparent pointer-events-none" />

              {/* Top controls: Category & Lightbox inspect button */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-2 bg-[#050814]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 text-xs font-semibold text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span>{activeBanner.category}</span>
                  {activeBanner.isAptech && (
                    <span className="ml-1 text-[10px] uppercase tracking-wider text-amber-300 font-bold bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-700/60">
                      Aptech Official
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onInspectBanner(activeBanner)}
                  className="flex items-center gap-1.5 bg-[#050814]/80 backdrop-blur-md hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/70 text-xs font-medium text-slate-200 hover:text-white transition-all shadow-lg cursor-pointer"
                  title="Inspect banner in full resolution"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">Inspect Full 8K Banner</span>
                </button>
              </div>

              {/* Bottom metadata inside banner */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-20">
                <div>
                  <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                    {activeBanner.tagline}
                  </p>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-outfit drop-shadow-md">
                    {activeBanner.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 drop-shadow mt-0.5">
                    {activeBanner.subtitle}
                  </p>
                </div>

                {/* Banner Action CTA */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={onContactClick}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-cyan-500/25 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{activeBanner.ctaText}</span>
                  </button>
                </div>
              </div>

              {/* Carousel navigation arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-white transition-all z-20 shadow-xl cursor-pointer"
                aria-label="Previous Banner"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-white transition-all z-20 shadow-xl cursor-pointer"
                aria-label="Next Banner"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Carousel Selector Strip */}
            <div className="p-4 sm:p-5 bg-[#080d22] border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-slate-200">Switch Banner:</span>
                <span>{activeIndex + 1} of {banners.length} assets</span>
              </div>

              {/* Interactive Thumbnail Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
                {banners.map((banner, idx) => (
                  <button
                    key={banner.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                      idx === activeIndex
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                        : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    <span className="font-mono text-[11px] opacity-75">0{idx + 1}</span>
                    <span>{banner.category.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4-Column KPI Trust Strip below hero */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl bg-[#070b1f] border border-slate-800/80 shadow-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-outfit tabular-nums">Aptech</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Diploma in Web Dev</div>
            <div className="text-[11px] text-cyan-400/90 mt-2">Official IT Certified</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#070b1f] border border-slate-800/80 shadow-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-outfit tabular-nums">140+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Projects Delivered</div>
            <div className="text-[11px] text-cyan-400/90 mt-2">Websites, SaaS &amp; E-Com</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#070b1f] border border-slate-800/80 shadow-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-outfit tabular-nums">99.8%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Client Satisfaction</div>
            <div className="text-[11px] text-cyan-400/90 mt-2">5-Star verified reviews</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#070b1f] border border-slate-800/80 shadow-md">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-outfit tabular-nums">&lt; 0.8s</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Average Load Speed</div>
            <div className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Core Web Vitals 99+</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
