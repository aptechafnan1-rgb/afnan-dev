import React from 'react';
import { useApp } from '../context/AppContext';
import { GraduationCap, Award, CheckCircle, ExternalLink, Sparkles, BookOpen, Phone, Mail, MapPin, Maximize2 } from 'lucide-react';

interface AptechDiplomaSectionProps {
  onInspectImage: (imgSrc: string, title: string) => void;
}

export const AptechDiplomaSection: React.FC<AptechDiplomaSectionProps> = ({ onInspectImage }) => {
  const { aptechInfo } = useApp();

  return (
    <section id="aptech-diploma" className="py-20 bg-[#040713] border-t border-slate-800/80 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-xs font-semibold text-cyan-300 mb-4 shadow-sm">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Academic &amp; Professional Certification</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Aptech Certified Web Developer
          </h2>

          <p className="mt-3 text-base text-cyan-300/90 font-medium">
            &ldquo;Maine Aptech Computer Education se Web Development ka Diploma mukammal kiya hai.&rdquo;
          </p>

          <p className="mt-2 text-sm text-slate-300 max-w-2xl mx-auto">
            Rigorous hands-on training from Aptech student foundations to architecting enterprise-grade real world web applications.
          </p>
        </div>

        {/* Featured Aptech Banners Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {aptechInfo.bannerImages.map((imgSrc, index) => {
            const titles = [
              'Official Aptech IT & Web Development Diploma Banner',
              'From Aptech Student to Web Developer Journey Banner',
              'Neon Modern Developer & Code Today Studio Banner'
            ];
            const captions = [
              'Framed Diploma & Core Stack Credentials',
              'Student Evolution: Same Dream, Bigger Skills',
              'High-Impact UI Architecture & Performance'
            ];

            return (
              <div
                key={imgSrc + index}
                className="group relative bg-[#070c1e] rounded-2xl border border-slate-800 hover:border-cyan-500/60 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div 
                  className="relative aspect-[16/9] overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => onInspectImage(imgSrc, titles[index])}
                >
                  <img
                    src={imgSrc}
                    alt={titles[index]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070c1e] via-transparent to-transparent opacity-70" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-blue-600/90 text-white text-[11px] font-bold shadow">
                    Aptech Official Asset
                  </div>

                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-900/80 text-cyan-400 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-white font-outfit mb-1 group-hover:text-cyan-300 transition-colors">
                    {titles[index]}
                  </h3>
                  <p className="text-xs text-slate-400 mb-3">{captions[index]}</p>
                  
                  <button
                    onClick={() => onInspectImage(imgSrc, titles[index])}
                    className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                  >
                    <span>Inspect Full 8K Image</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Aptech Credentials & Coursework Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 7 Columns: Formal Diploma Details */}
          <div className="lg:col-span-7 bg-[#070c1e] p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-outfit">{aptechInfo.degreeName}</h3>
                    <p className="text-xs text-cyan-400 font-medium">{aptechInfo.institution} · {aptechInfo.year}</p>
                  </div>
                </div>

                <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono font-bold">
                  Verified Graduate
                </span>
              </div>

              {/* Personal statement */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-6 text-xs text-slate-300 leading-relaxed italic border-l-2 border-l-cyan-400">
                &ldquo;{aptechInfo.statement}&rdquo;
              </div>

              {/* Key highlights */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Diploma Highlights &amp; Competencies:
                </div>
                {aptechInfo.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Verification Contacts */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-200 font-mono">{aptechInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-200">{aptechInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Aptech Computer Education</span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Aptech Mastered Curriculum */}
          <div className="lg:col-span-5 bg-[#070c1e] p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-outfit">Certified Coursework</h3>
                  <p className="text-xs text-slate-400">Mastered Curriculum Modules</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {aptechInfo.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-cyan-400 font-bold text-[11px]">0{idx + 1}</span>
                      <span>{course}</span>
                    </div>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 text-center">
              Curriculum validated by Aptech Academic Council &middot; 100% Practical Labs
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
