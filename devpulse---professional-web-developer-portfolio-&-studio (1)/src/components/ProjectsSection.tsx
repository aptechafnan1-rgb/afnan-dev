import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProjectItem } from '../data/portfolioData';
import { ExternalLink, ArrowRight, X, Check, BarChart3, Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = useApp();
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = ['All', 'E-Commerce', 'Web Applications', 'Business Websites'];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-20 bg-[#050814] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
              Featured Case Studies · Delivered Works
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
              Selected Web Engineering Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Real production web applications and custom systems engineered with high performance, measurable business ROI, and spotless code.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#070c1e] rounded-2xl border border-slate-800/90 hover:border-slate-700/80 overflow-hidden flex flex-col group transition-all duration-300 shadow-xl"
            >
              {/* Media Thumbnail */}
              <div 
                className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070c1e] via-transparent to-transparent opacity-80" />
                
                {/* Metric pill */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-xs font-semibold text-cyan-300 border border-slate-700/70">
                  {project.metrics}
                </div>

                <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-slate-900/80 text-[11px] font-mono text-slate-400 border border-slate-800">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-cyan-400 font-semibold mb-1">
                    {project.category} · {project.client}
                  </div>

                  <h3 className="text-xl font-bold text-white font-outfit mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 mb-4 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] text-slate-300 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Production Deployed</span>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in">
            <div 
              className="relative max-w-3xl w-full bg-[#080d22] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#050814]">
                <div>
                  <span className="text-xs font-semibold text-cyan-400">{selectedProject.category}</span>
                  <h3 className="text-xl font-bold text-white font-outfit">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="overflow-y-auto p-6 space-y-6">
                <div className="rounded-xl overflow-hidden aspect-[16/9] border border-slate-800">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">Project Overview</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.details}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-semibold text-cyan-400 mb-1">Key Impact Metric:</div>
                  <div className="text-base font-bold text-white font-outfit">{selectedProject.metrics}</div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">Key Technical Highlights</h4>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-[#050814] border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Client: {selectedProject.client} ({selectedProject.year})</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
