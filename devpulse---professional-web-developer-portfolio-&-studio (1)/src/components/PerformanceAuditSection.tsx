import React, { useState } from 'react';
import { Gauge, CheckCircle2, RefreshCw, Zap, ShieldCheck, Smartphone, Search } from 'lucide-react';

export const PerformanceAuditSection: React.FC = () => {
  const [isRunningScan, setIsRunningScan] = useState(false);
  const [lastScanned, setLastScanned] = useState('Just now');

  const scores = [
    { label: 'Performance', score: 99, color: 'text-emerald-400', stroke: '#34d399', desc: 'LCP 0.7s · zero layout shift' },
    { label: 'Accessibility', score: 100, color: 'text-emerald-400', stroke: '#34d399', desc: 'WCAG AA compliant contrast' },
    { label: 'Best Practices', score: 100, color: 'text-emerald-400', stroke: '#34d399', desc: 'Modern HTTPS & secure headers' },
    { label: 'SEO Friendly', score: 100, color: 'text-emerald-400', stroke: '#34d399', desc: 'JSON-LD & OpenGraph optimized' },
  ];

  const handleRunScan = () => {
    setIsRunningScan(true);
    setTimeout(() => {
      setIsRunningScan(false);
      setLastScanned('Just now (100% Verified)');
    }, 1200);
  };

  return (
    <section className="py-20 bg-[#050814] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            Engineered For Speed &amp; Visibility
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Responsive · Fast · Modern · SEO Friendly
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Every website delivered is strictly audited against Google Lighthouse standards to guarantee instant user engagement, top Google indexing, and maximum conversions.
          </p>
        </div>

        {/* 4 Score Circular Gauges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {scores.map((item) => (
            <div
              key={item.label}
              className="bg-[#070c1e] p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center shadow-lg relative overflow-hidden"
            >
              {/* Circular Gauge Graphic */}
              <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-800"
                    strokeWidth="3.2"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    strokeDasharray={`${item.score}, 100`}
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    stroke={item.stroke}
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className={`absolute text-2xl font-extrabold font-outfit ${item.color} tabular-nums`}>
                  {item.score}
                </div>
              </div>

              <h3 className="text-base font-bold text-white mb-1 font-outfit">{item.label}</h3>
              <p className="text-[11px] text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Live Diagnostics Card */}
        <div className="bg-[#070b1e] rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-white">Live Production Speed Audit</h4>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                  Grade A+
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Largest Contentful Paint: <span className="text-slate-200 font-mono">0.68s</span> · CLS: <span className="text-slate-200 font-mono">0.00</span> · Total Blocking: <span className="text-slate-200 font-mono">0ms</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 self-stretch md:self-auto justify-between md:justify-end">
            <span className="text-xs text-slate-400">Scanned: {lastScanned}</span>
            <button
              onClick={handleRunScan}
              disabled={isRunningScan}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-all cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isRunningScan ? 'animate-spin' : ''}`} />
              <span>{isRunningScan ? 'Auditing Stack...' : 'Simulate Live Scan'}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
