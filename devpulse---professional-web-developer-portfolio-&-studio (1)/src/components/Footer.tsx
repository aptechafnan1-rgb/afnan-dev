import React from 'react';
import { ArrowUp, Code2, Heart, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03050d] border-t border-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-outfit text-lg font-bold text-white">
                Afnan<span className="text-cyan-400">.dev</span>
              </span>
              <p className="text-xs text-slate-500">
                Aptech Certified Professional Web Developer &amp; Solutions Architect
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#banners" className="hover:text-cyan-400 transition-colors">Banners</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#tech-stack" className="hover:text-cyan-400 transition-colors">Tech Stack</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#estimator" className="hover:text-cyan-400 transition-colors">Estimator</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/afnan_dev_website_setup.zip"
              download="afnan_dev_website_setup.zip"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/60 hover:bg-blue-900 border border-blue-800/80 text-xs text-cyan-300 hover:text-white transition-all cursor-pointer"
              title="Download complete website source code as ZIP"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download ZIP</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Afnan. Build Your Ideas Into Reality. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Responsive</span>
            <span>·</span>
            <span>Fast</span>
            <span>·</span>
            <span>Modern</span>
            <span>·</span>
            <span>SEO Friendly</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
