import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Clock, DollarSign, Sparkles } from 'lucide-react';

interface ProjectEstimatorProps {
  onQuoteRequested: (quoteDetails: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onQuoteRequested }) => {
  const [projectType, setProjectType] = useState<'business' | 'ecommerce' | 'saas' | 'portfolio' | 'maintenance'>('business');
  const [pageScope, setPageScope] = useState<'landing' | 'standard' | 'multi' | 'enterprise'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo', 'responsive']);

  const typeConfig = {
    business: { label: 'Business Website', basePrice: 400, baseDays: 5 },
    ecommerce: { label: 'E-Commerce Storefront', basePrice: 850, baseDays: 10 },
    saas: { label: 'Custom SaaS & Web App', basePrice: 1200, baseDays: 14 },
    portfolio: { label: 'Creative Portfolio', basePrice: 350, baseDays: 4 },
    maintenance: { label: 'Maintenance & Speed Boost', basePrice: 250, baseDays: 3 },
  };

  const scopeConfig = {
    landing: { label: '1 Page (High-Conversion Landing)', priceMult: 1, daysAdd: 0 },
    standard: { label: '3–5 Pages (Standard Website)', priceMult: 1.35, daysAdd: 2 },
    multi: { label: '6–12 Pages (Expanded Architecture)', priceMult: 1.8, daysAdd: 5 },
    enterprise: { label: '15+ Pages (Enterprise System)', priceMult: 2.6, daysAdd: 10 },
  };

  const addonsList = [
    { id: 'responsive', label: '100% Mobile Responsive Optimization', price: 0, days: 0, defaultChecked: true },
    { id: 'seo', label: 'SEO Friendly Structure & Meta Tags', price: 75, days: 1, defaultChecked: true },
    { id: 'payment', label: 'Payment Integration (Stripe/PayPal)', price: 180, days: 2 },
    { id: 'cms', label: 'Custom Admin CMS / Content Dashboard', price: 250, days: 3 },
    { id: 'auth', label: 'User Accounts & Role Permissions', price: 220, days: 3 },
    { id: 'speed', label: 'Sub-second Core Web Vitals (<0.8s)', price: 120, days: 1 },
    { id: 'fasttrack', label: 'Priority Fast-Track Delivery (Rush)', price: 200, days: -2 },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculations
  const currentBase = typeConfig[projectType];
  const currentScope = scopeConfig[pageScope];
  const addonsCost = selectedAddons.reduce((sum, id) => {
    const addon = addonsList.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);
  const addonsDays = selectedAddons.reduce((sum, id) => {
    const addon = addonsList.find((a) => a.id === id);
    return sum + (addon ? addon.days : 0);
  }, 0);

  const estimatedTotal = Math.round((currentBase.basePrice * currentScope.priceMult) + addonsCost);
  const estimatedDays = Math.max(3, currentBase.baseDays + currentScope.daysAdd + addonsDays);

  const handleRequestQuote = () => {
    const selectedAddonLabels = selectedAddons
      .map((id) => addonsList.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const summary = `Project Scope Request:
- Type: ${currentBase.label}
- Scale: ${currentScope.label}
- Selected Features: ${selectedAddonLabels}
- Estimated Budget Range: $${estimatedTotal - 50} - $${estimatedTotal + 100}
- Target Timeline: ~${estimatedDays} days`;

    onQuoteRequested(summary);
  };

  return (
    <section id="estimator" className="py-20 bg-[#040713] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            Interactive Project Planner · Instant Quote
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Calculate Your Website Scope &amp; Budget
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Transparent pricing based on your exact feature specifications. Get an instant estimate and kick off your web project without ambiguity.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls: Left 8 columns */}
          <div className="lg:col-span-8 space-y-8 bg-[#070c1e] p-6 sm:p-8 rounded-2xl border border-slate-800/90 shadow-xl">
            
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                1. Select Web Solution Type:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {(Object.keys(typeConfig) as Array<keyof typeof typeConfig>).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setProjectType(key)}
                    className={`p-3.5 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                      projectType === key
                        ? 'bg-blue-600/20 border-cyan-400 text-white shadow-md'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="text-white font-bold">{typeConfig[key].label}</div>
                    <div className="text-[11px] text-cyan-400 mt-1">Starting from ${typeConfig[key].basePrice}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Page Scope */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                2. Project Scale &amp; Page Count:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(scopeConfig) as Array<keyof typeof scopeConfig>).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setPageScope(key)}
                    className={`p-3.5 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                      pageScope === key
                        ? 'bg-blue-600/20 border-cyan-400 text-white shadow-md'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="text-white font-bold">{scopeConfig[key].label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Addon features */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                3. Additional Engineering Specifications:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-blue-950/30 border-blue-500/80 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked
                              ? 'bg-blue-600 border-blue-500 text-white'
                              : 'border-slate-700 bg-slate-950'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="font-medium">{addon.label}</span>
                      </div>
                      <span className="font-mono text-cyan-400 text-[11px]">
                        {addon.price > 0 ? `+$${addon.price}` : 'Included'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Card: Right 4 columns */}
          <div className="lg:col-span-4 bg-[#070b1e] p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-2xl pointer-events-none"></div>

            <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">
              Estimated Investment
            </div>
            <h3 className="text-xl font-bold text-white font-outfit mb-6">
              Project Estimate Summary
            </h3>

            {/* Price display */}
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
              <div className="text-xs text-slate-400 mb-1">Approximate Budget Range</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tabular-nums">
                ${estimatedTotal - 50} – ${estimatedTotal + 100}
              </div>
              <div className="text-[11px] text-cyan-400 mt-2">
                * Transparent pricing, zero hidden fees
              </div>
            </div>

            {/* Timeline display */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Estimated Turnaround</div>
                <div className="text-base font-bold text-white tabular-nums">
                  ~{estimatedDays} Working Days
                </div>
              </div>
            </div>

            {/* Included guarantees */}
            <div className="space-y-2 mb-8 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Clean semantic code &amp; Git repository</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>30-day post-launch bug fix guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Complete ownership &amp; zero vendor lock-in</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleRequestQuote}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <span>Lock In This Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-slate-500 mt-3">
              Pre-fills contact inquiry with your selections
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
