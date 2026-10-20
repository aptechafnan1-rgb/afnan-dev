import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BannerItem } from '../data/portfolioData';
import { Maximize2, Download, Sparkles, Check, ArrowRight, Eye, GraduationCap } from 'lucide-react';

interface BannerGallerySectionProps {
  onInspectBanner: (banner: BannerItem) => void;
  onSelectBannerStyle: (banner: BannerItem) => void;
}

export const BannerGallerySection: React.FC<BannerGallerySectionProps> = ({
  onInspectBanner,
  onSelectBannerStyle,
}) => {
  const { banners } = useApp();
  const [filterCategory, setFilterCategory] = useState<'all' | 'aptech' | 'identity' | 'solutions'>('all');

  const filteredBanners = banners.filter((b) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'aptech') return b.isAptech;
    if (filterCategory === 'identity') return b.isPrimary || b.id.includes('primary');
    if (filterCategory === 'solutions') return !b.isAptech && !b.isPrimary;
    return true;
  });

  return (
    <section className="py-20 bg-[#040713] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
              Visual Brand Suite · Aptech &amp; Custom Banners
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-outfit">
              Featured Portfolio Banners &amp; Visual Assets
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Showcasing the official Aptech Diploma banners, student-to-developer evolution, neon code themes, and modern studio assets.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Assets ({banners.length})
            </button>
            <button
              onClick={() => setFilterCategory('aptech')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'aptech'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Aptech Certified
            </button>
            <button
              onClick={() => setFilterCategory('identity')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'identity'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Signatures
            </button>
            <button
              onClick={() => setFilterCategory('solutions')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'solutions'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Solutions
            </button>
          </div>
        </div>

        {/* Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredBanners.map((banner, index) => (
            <div
              key={banner.id}
              className={`group relative bg-[#070b1e] rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden flex flex-col ${
                banner.isPrimary ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div 
                className={`relative w-full ${
                  banner.isPrimary ? 'aspect-[2.2/1] max-h-[460px]' : 'aspect-[16/9]'
                } overflow-hidden bg-slate-950 cursor-pointer`}
                onClick={() => onInspectBanner(banner)}
              >
                <img
                  src={banner.imageSrc}
                  alt={banner.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b1e] via-transparent to-black/20" />

                {/* Inspect button overlay on hover */}
                <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-semibold shadow-2xl border border-cyan-400/40">
                    <Maximize2 className="w-4 h-4 text-cyan-400" />
                    <span>Click to Inspect Full 8K Asset</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  {banner.isAptech && (
                    <div className="px-3 py-1 rounded-md bg-amber-950/90 border border-amber-600 text-amber-300 text-xs font-bold shadow flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Aptech Official</span>
                    </div>
                  )}
                  {banner.isPrimary && (
                    <div className="px-3 py-1 rounded-md bg-blue-600/90 text-white text-xs font-bold shadow-lg">
                      Signature Banner
                    </div>
                  )}
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-[11px] font-mono text-cyan-300 border border-slate-700/60">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Banner Details Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-cyan-400 font-semibold">{banner.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{banner.tagline}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-outfit mb-2 group-hover:text-cyan-300 transition-colors">
                    {banner.title}
                  </h3>

                  <p className="text-sm text-slate-300 mb-4">
                    {banner.subtitle}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {banner.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-xs text-slate-300 bg-slate-800/80 border border-slate-700/60 rounded-md px-2.5 py-1"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between gap-4">
                  <button
                    onClick={() => onInspectBanner(banner)}
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Resolution</span>
                  </button>

                  <button
                    onClick={() => onSelectBannerStyle(banner)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-500 text-white text-xs font-semibold shadow transition-all cursor-pointer"
                  >
                    <span>Build In This Style</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
