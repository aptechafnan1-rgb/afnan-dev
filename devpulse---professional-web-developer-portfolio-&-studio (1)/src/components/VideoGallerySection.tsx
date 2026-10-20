import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { VideoItem } from '../data/portfolioData';
import { 
  Play, 
  Clock, 
  X, 
  UploadCloud, 
  Film, 
  Code2, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Terminal, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export const VideoGallerySection: React.FC = () => {
  const { videos, isAuthenticated, setViewMode, openAuthModal } = useApp();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [playerMode, setPlayerMode] = useState<'video' | 'liveSimulator'>('video');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const categories = ['All', 'Aptech Demo', 'Project Showcase', 'Tutorial & Code'];

  const filteredVideos = videos.filter((v) => {
    if (activeCategory === 'All') return true;
    return v.category === activeCategory;
  });

  const getYouTubeEmbedUrl = (url: string) => {
    try {
      if (url.includes('youtube.com/watch')) {
        const id = new URL(url).searchParams.get('v');
        return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1` : null;
      }
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]?.split('?')[0];
        return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1` : null;
      }
      if (url.includes('youtube.com/embed/')) {
        return url;
      }
    } catch {
      return null;
    }
    return null;
  };

  return (
    <section id="videos" className="py-20 bg-[#050814] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
              Project Screen Recordings · Video Demonstrations
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
              Live Web Development Demos &amp; Videos
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Real screen recordings of live web apps, Aptech capstone MERN projects, responsive mobile testing, and interactive code walkthroughs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quick Upload CTA */}
            <button
              onClick={() => {
                if (isAuthenticated) {
                  setViewMode('dashboard');
                } else {
                  openAuthModal();
                }
              }}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all cursor-pointer whitespace-nowrap"
            >
              <UploadCloud className="w-4 h-4" />
              <span>Upload Video</span>
            </button>
          </div>
        </div>

        {/* Informative helper callout explaining what these videos are */}
        <div className="mb-10 p-4 rounded-2xl bg-[#070c20] border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white">Yeh Videos Kis Liye Hain? </span>
              <span>Yeh videos aapke Aptech ke practical projects, live client websites, aur responsive coding ki screen recordings hain. Aap Studio Dashboard se apni naye project videos bhi upload kar sakte hain!</span>
            </div>
          </div>
          <button
            onClick={() => {
              if (isAuthenticated) setViewMode('dashboard');
              else openAuthModal();
            }}
            className="text-cyan-400 hover:text-white font-semibold underline shrink-0 cursor-pointer"
          >
            Manage / Add Videos &rarr;
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-[#070c1e] rounded-2xl border border-slate-800 hover:border-cyan-500/60 overflow-hidden shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail / Play Trigger */}
                <div 
                  className="relative aspect-[16/9] overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => {
                    setSelectedVideo(video);
                    setPlayerMode('video');
                  }}
                >
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-950">
                      <Film className="w-12 h-12 text-slate-700" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-cyan-500 transition-all border border-white/20">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono text-white flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{video.duration}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-blue-600/90 text-[11px] font-semibold text-white shadow">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white font-outfit mb-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {video.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between text-xs text-slate-400">
                <span>Added: {video.dateAdded}</span>
                <button
                  onClick={() => {
                    setSelectedVideo(video);
                    setPlayerMode('video');
                  }}
                  className="text-cyan-400 hover:text-white font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player & Live Interactive Code Simulator Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
            <div 
              className="relative max-w-5xl w-full bg-[#080d24] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#050816]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-cyan-400 flex items-center justify-center">
                    <Film className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-cyan-400">{selectedVideo.category}</span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-outfit">{selectedVideo.title}</h3>
                  </div>
                </div>

                {/* Switch between Video Stream and Interactive Code Simulator */}
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                    <button
                      onClick={() => setPlayerMode('video')}
                      className={`px-3 py-1 rounded-md font-semibold transition-colors ${
                        playerMode === 'video' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Screen Recording
                    </button>
                    <button
                      onClick={() => setPlayerMode('liveSimulator')}
                      className={`px-3 py-1 rounded-md font-semibold transition-colors flex items-center gap-1 ${
                        playerMode === 'liveSimulator' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Live Code &amp; UI</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Player Display Area */}
              <div className="flex-1 overflow-auto bg-black">
                {playerMode === 'video' ? (
                  <div className="aspect-video max-h-[60vh] w-full flex items-center justify-center bg-black">
                    {getYouTubeEmbedUrl(selectedVideo.videoUrl) ? (
                      <iframe
                        src={getYouTubeEmbedUrl(selectedVideo.videoUrl)!}
                        title={selectedVideo.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={selectedVideo.videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-contain"
                      >
                        Your browser does not support HTML5 video playback.
                      </video>
                    )}
                  </div>
                ) : (
                  /* Interactive Live Code & Screen Simulator */
                  <div className="grid grid-cols-1 lg:grid-cols-12 h-[55vh] border-b border-slate-800">
                    
                    {/* Left: VS Code style code display */}
                    <div className="lg:col-span-5 bg-[#050814] p-4 border-r border-slate-800/80 font-mono text-xs overflow-auto flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                            <span className="text-slate-300 ml-1">App.tsx &middot; React 19</span>
                          </div>
                          <span className="text-cyan-400 font-bold">Aptech Certified</span>
                        </div>

                        <pre className="text-slate-300 leading-relaxed overflow-x-auto">
                          <code>{`// Aptech Diploma Capstone Project
import React, { useState } from 'react';
import { ShoppingCart, Zap } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState(3);
  const [speed] = useState("0.6s LCP");

  return (
    <div className="modern-store bg-[#050814]">
      <header className="flex justify-between">
        <h2>Aurora Luxury Store</h2>
        <span className="badge">Speed: {speed}</span>
      </header>
      <main className="grid grid-cols-2 gap-4">
        <ProductCard title="S1 Workstation" />
        <ProductCard title="Quantum OLED" />
      </main>
    </div>
  );
}`}</code>
                        </pre>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 flex items-center gap-2 mt-4">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Build: Success &middot; 0 errors &middot; 99.8% Test Coverage</span>
                      </div>
                    </div>

                    {/* Right: Live Responsive Preview Window */}
                    <div className="lg:col-span-7 bg-[#070b1e] p-4 flex flex-col justify-between overflow-auto">
                      {/* Responsive device switch bar */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Live Interactive UI Output</span>
                        </span>

                        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                          <button
                            onClick={() => setPreviewDevice('desktop')}
                            className={`p-1 rounded ${previewDevice === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
                            title="Desktop Preview"
                          >
                            <Monitor className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setPreviewDevice('tablet')}
                            className={`p-1 rounded ${previewDevice === 'tablet' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
                            title="Tablet Preview"
                          >
                            <Tablet className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setPreviewDevice('mobile')}
                            className={`p-1 rounded ${previewDevice === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
                            title="Mobile Preview"
                          >
                            <Smartphone className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Interactive Mini-App Render */}
                      <div className="flex-1 flex items-center justify-center p-2">
                        <div 
                          className={`bg-[#050814] rounded-xl border border-cyan-500/30 p-4 transition-all duration-300 shadow-xl overflow-hidden ${
                            previewDevice === 'mobile' ? 'w-[280px]' : previewDevice === 'tablet' ? 'w-[420px]' : 'w-full'
                          }`}
                        >
                          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                            <span className="font-bold text-white font-outfit">Aurora Luxury Store</span>
                            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-mono">
                              0.6s LCP
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 my-3">
                            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                              <div className="text-[11px] font-bold text-white">S1 Workstation</div>
                              <div className="text-[10px] text-cyan-400">$1,299</div>
                              <button className="mt-1 px-2 py-0.5 bg-blue-600 hover:bg-blue-500 text-[9px] text-white rounded cursor-pointer">
                                In Stock
                              </button>
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                              <div className="text-[11px] font-bold text-white">Quantum OLED</div>
                              <div className="text-[10px] text-cyan-400">$849</div>
                              <button className="mt-1 px-2 py-0.5 bg-blue-600 hover:bg-blue-500 text-[9px] text-white rounded cursor-pointer">
                                In Stock
                              </button>
                            </div>
                          </div>

                          <div className="text-[10px] text-slate-400 text-center">
                            Full-Stack React + Node.js + MongoDB API Connected
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Video Details & Meta Footer */}
              <div className="p-5 sm:p-6 bg-[#060a1a] border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="max-w-2xl">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedVideo.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mt-2">
                    <span>Duration: <span className="font-mono text-cyan-400">{selectedVideo.duration}</span></span>
                    <span>&middot;</span>
                    <span>Released: {selectedVideo.dateAdded}</span>
                    <span>&middot;</span>
                    <span className="text-slate-300">Format: {selectedVideo.videoType === 'file' ? 'Uploaded Video File' : 'Stream URL'}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg cursor-pointer shrink-0"
                >
                  Close Player
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
