import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Video, 
  Upload, 
  GraduationCap, 
  Search, 
  FolderKanban, 
  Image as ImageIcon, 
  ArrowLeft, 
  LogOut, 
  Trash2, 
  Plus, 
  Check, 
  ExternalLink, 
  Play, 
  Eye, 
  Save, 
  RotateCcw,
  Sparkles,
  Film,
  Globe,
  Award,
  Download
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const { 
    currentUser, 
    logout, 
    setViewMode, 
    videos, 
    addVideo, 
    deleteVideo,
    aptechInfo,
    updateAptechInfo,
    seoSettings,
    updateSeoSettings,
    projects,
    addProject,
    deleteProject,
    banners,
    resetAllDefaults
  } = useApp();

  const [activeTab, setActiveTab] = useState<'videos' | 'aptech' | 'seo' | 'projects' | 'banners'>('videos');

  // Video upload form state
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDesc, setVideoDesc] = useState('');
  const [videoCategory, setVideoCategory] = useState<'Project Showcase' | 'Tutorial & Code' | 'Client Review' | 'Aptech Demo'>('Aptech Demo');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoDuration, setVideoDuration] = useState('03:30');
  const [videoTags, setVideoTags] = useState('Aptech, React, FullStack');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoSuccess, setVideoSuccess] = useState(false);

  // Aptech edit form state
  const [degreeName, setDegreeName] = useState(aptechInfo.degreeName);
  const [statement, setStatement] = useState(aptechInfo.statement);
  const [aptechYear, setAptechYear] = useState(aptechInfo.year);
  const [aptechPhone, setAptechPhone] = useState(aptechInfo.phone);
  const [aptechEmail, setAptechEmail] = useState(aptechInfo.email);
  const [newCourse, setNewCourse] = useState('');
  const [aptechSuccess, setAptechSuccess] = useState(false);

  // SEO edit form state
  const [siteTitle, setSiteTitle] = useState(seoSettings.siteTitle);
  const [metaDesc, setMetaDesc] = useState(seoSettings.metaDescription);
  const [authorName, setAuthorName] = useState(seoSettings.authorName);
  const [keywords, setKeywords] = useState(seoSettings.keywords);
  const [canonicalUrl, setCanonicalUrl] = useState(seoSettings.canonicalUrl);
  const [seoSuccess, setSeoSuccess] = useState(false);

  // Project upload form state
  const [projTitle, setProjTitle] = useState('');
  const [projCategory, setProjCategory] = useState<'E-Commerce' | 'Web Applications' | 'Business Websites' | 'Portfolio & Creative'>('Web Applications');
  const [projClient, setProjClient] = useState('');
  const [projYear, setProjYear] = useState('2025');
  const [projMetrics, setProjMetrics] = useState('+40% Speed · 100% Responsive');
  const [projDetails, setProjDetails] = useState('');
  const [projTech, setProjTech] = useState('React, Node.js, MongoDB');
  const [projSuccess, setProjSuccess] = useState(false);

  // Video file upload handler
  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setVideoFile(file);
      // Create local object URL for preview
      const objectUrl = URL.createObjectURL(file);
      setVideoUrl(objectUrl);
    }
  };

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoTitle.trim() || !videoUrl.trim()) return;

    addVideo({
      title: videoTitle,
      description: videoDesc || 'Web development project demonstration video.',
      category: videoCategory,
      videoUrl: videoUrl,
      videoType: videoFile ? 'file' : 'url',
      duration: videoDuration,
      tags: videoTags.split(',').map((t) => t.trim()).filter(Boolean),
      thumbnail: aptechInfo.bannerImages[0]
    });

    setVideoTitle('');
    setVideoDesc('');
    setVideoUrl('');
    setVideoFile(null);
    setVideoSuccess(true);
    setTimeout(() => setVideoSuccess(false), 3000);
  };

  const handleSaveAptech = (e: React.FormEvent) => {
    e.preventDefault();
    updateAptechInfo({
      degreeName,
      statement,
      year: aptechYear,
      phone: aptechPhone,
      email: aptechEmail
    });
    setAptechSuccess(true);
    setTimeout(() => setAptechSuccess(false), 2500);
  };

  const handleAddCourse = () => {
    if (!newCourse.trim()) return;
    updateAptechInfo({
      coursework: [...aptechInfo.coursework, newCourse.trim()]
    });
    setNewCourse('');
  };

  const handleRemoveCourse = (index: number) => {
    const updated = aptechInfo.coursework.filter((_, i) => i !== index);
    updateAptechInfo({ coursework: updated });
  };

  const handleSaveSeo = (e: React.FormEvent) => {
    e.preventDefault();
    updateSeoSettings({
      siteTitle,
      metaDescription: metaDesc,
      authorName,
      keywords,
      canonicalUrl
    });
    setSeoSuccess(true);
    setTimeout(() => setSeoSuccess(false), 2500);
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projTitle.trim()) return;

    addProject({
      title: projTitle,
      category: projCategory,
      client: projClient || 'Independent Client',
      year: projYear,
      metrics: projMetrics,
      summary: projDetails.slice(0, 100) + '...',
      details: projDetails,
      image: aptechInfo.bannerImages[1] || banners[0].imageSrc,
      technologies: projTech.split(',').map((t) => t.trim()).filter(Boolean),
      highlights: ['Clean code implementation', 'Responsive across mobile & desktop', 'Tested for maximum speed']
    });

    setProjTitle('');
    setProjClient('');
    setProjDetails('');
    setProjSuccess(true);
    setTimeout(() => setProjSuccess(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#030612] text-slate-100 flex flex-col">
      
      {/* Top Bar for Dashboard */}
      <header className="sticky top-0 z-40 bg-[#050818]/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* User info & logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
              {currentUser?.name?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-outfit text-base font-bold text-white">
                  Afnan<span className="text-cyan-400">.dev</span> Studio Board
                </span>
                <span className="px-2 py-0.5 rounded-full bg-blue-900/60 text-cyan-300 border border-blue-700/60 text-[10px] uppercase font-bold">
                  {currentUser?.role || 'Admin'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Aptech Computer Education · Certified Web Developer Hub
              </p>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode('public')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
              <span>Back to Public Website</span>
            </button>

            <button
              onClick={logout}
              className="p-2 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-800/80 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Board Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar Navigation */}
        <div className="w-full md:w-64 shrink-0 space-y-2">
          
          <div className="p-4 rounded-2xl bg-[#070b20] border border-slate-800/90 mb-4">
            <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              Active Control Room
            </div>
            <div className="text-sm font-bold text-white font-outfit">
              Content &amp; Media Manager
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Persistent updates to public website
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('videos')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'videos'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Video Studio &amp; Upload</span>
              <span className="ml-auto text-[10px] font-mono bg-black/30 px-1.5 py-0.5 rounded">
                {videos.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('aptech')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'aptech'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Aptech Diploma Credentials</span>
            </button>

            <button
              onClick={() => setActiveTab('seo')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'seo'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>SEO &amp; Google Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>Projects &amp; Portfolio CMS</span>
              <span className="ml-auto text-[10px] font-mono bg-black/30 px-1.5 py-0.5 rounded">
                {projects.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('banners')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'banners'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Banners &amp; Visual Suite</span>
              <span className="ml-auto text-[10px] font-mono bg-black/30 px-1.5 py-0.5 rounded">
                {banners.length}
              </span>
            </button>
          </nav>

          <div className="pt-6 border-t border-slate-900 space-y-2">
            <a
              href="/afnan_dev_website_setup.zip"
              download="afnan_dev_website_setup.zip"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-cyan-300 bg-blue-950/60 hover:bg-blue-900/80 border border-blue-700/60 transition-all shadow-md"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Project ZIP</span>
            </a>

            <button
              onClick={resetAllDefaults}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-[11px] text-slate-500 hover:text-red-400 hover:bg-red-950/20 border border-slate-900 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset State to Defaults</span>
            </button>
          </div>

        </div>

        {/* Right Content Area */}
        <div className="flex-1 min-w-0">
          
          {/* TAB 1: VIDEO STUDIO & UPLOAD */}
          {activeTab === 'videos' && (
            <div className="space-y-8 animate-fade-in">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#070b20] border border-slate-800 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white font-outfit">Video Upload &amp; Demo Studio</h2>
                    <p className="text-xs text-slate-400">Upload video files or external URLs to display on your public website</p>
                  </div>
                </div>

                {videoSuccess && (
                  <div className="my-4 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Video uploaded successfully and published to live website!</span>
                  </div>
                )}

                <form onSubmit={handleAddVideo} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Video Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={videoTitle}
                        onChange={(e) => setVideoTitle(e.target.value)}
                        placeholder="e.g. Aptech Final Project Walkthrough"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Video Category
                      </label>
                      <select
                        value={videoCategory}
                        onChange={(e) => setVideoCategory(e.target.value as any)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                      >
                        <option value="Aptech Demo">Aptech Demo &amp; Capstone</option>
                        <option value="Project Showcase">Project Showcase</option>
                        <option value="Tutorial & Code">Tutorial &amp; Code Review</option>
                        <option value="Client Review">Client Review</option>
                      </select>
                    </div>
                  </div>

                  {/* Video File Upload Drag/Drop zone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Upload Video File (MP4, WebM, MOV) or Paste Link
                    </label>
                    <div className="p-6 rounded-2xl border-2 border-dashed border-slate-800 hover:border-cyan-500/60 bg-slate-900/40 text-center transition-colors">
                      <input
                        type="file"
                        accept="video/mp4,video/webm,video/ogg,video/quicktime"
                        id="video-file-input"
                        onChange={handleVideoFileChange}
                        className="hidden"
                      />
                      <label htmlFor="video-file-input" className="cursor-pointer block">
                        <Upload className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                        <div className="text-xs font-bold text-white">
                          {videoFile ? `Selected: ${videoFile.name}` : 'Click to select a video file from your computer'}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">
                          Supports local MP4, WebM up to 500MB
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Video URL fallback */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Or Video Link / MP4 Stream URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      placeholder="https://example.com/demo.mp4 or YouTube / Vimeo URL"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Duration (MM:SS)
                      </label>
                      <input
                        type="text"
                        value={videoDuration}
                        onChange={(e) => setVideoDuration(e.target.value)}
                        placeholder="03:45"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Tags (comma separated)
                      </label>
                      <input
                        type="text"
                        value={videoTags}
                        onChange={(e) => setVideoTags(e.target.value)}
                        placeholder="Aptech, React, Responsive"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Video Description
                    </label>
                    <textarea
                      rows={3}
                      value={videoDesc}
                      onChange={(e) => setVideoDesc(e.target.value)}
                      placeholder="Explain what this video demonstrates..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload &amp; Publish Video</span>
                  </button>
                </form>
              </div>

              {/* Uploaded Videos List */}
              <div className="p-6 rounded-3xl bg-[#070b20] border border-slate-800">
                <h3 className="text-base font-bold text-white font-outfit mb-4">
                  Current Published Videos ({videos.length})
                </h3>

                <div className="space-y-4">
                  {videos.map((vid) => (
                    <div
                      key={vid.id}
                      className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-blue-950 flex items-center justify-center text-cyan-400 shrink-0">
                          <Film className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{vid.title}</div>
                          <div className="text-xs text-slate-400">
                            {vid.category} · {vid.duration} · Added: {vid.dateAdded}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <a
                          href={vid.videoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800"
                          title="Open video URL"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => deleteVideo(vid.id)}
                          className="p-2 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-800"
                          title="Delete video"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: APTECH DIPLOMA & CREDENTIALS */}
          {activeTab === 'aptech' && (
            <div className="space-y-8 animate-fade-in">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#070b20] border border-slate-800 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white font-outfit">Aptech Diploma &amp; Certification Profile</h2>
                    <p className="text-xs text-slate-400">Update diploma statements, coursework, and contact verification</p>
                  </div>
                </div>

                {aptechSuccess && (
                  <div className="my-4 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Aptech diploma information updated on public website!</span>
                  </div>
                )}

                <form onSubmit={handleSaveAptech} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Degree / Diploma Title
                      </label>
                      <input
                        type="text"
                        value={degreeName}
                        onChange={(e) => setDegreeName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Session / Year
                      </label>
                      <input
                        type="text"
                        value={aptechYear}
                        onChange={(e) => setAptechYear(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Personal Statement (Aapka Diploma ka statement)
                    </label>
                    <textarea
                      rows={3}
                      value={statement}
                      onChange={(e) => setStatement(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="text"
                        value={aptechPhone}
                        onChange={(e) => setAptechPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={aptechEmail}
                        onChange={(e) => setAptechEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Diploma Settings</span>
                  </button>
                </form>

                {/* Coursework Manager */}
                <div className="mt-8 pt-8 border-t border-slate-800">
                  <h4 className="text-sm font-bold text-white mb-3">Coursework &amp; Modules Manager</h4>
                  
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      value={newCourse}
                      onChange={(e) => setNewCourse(e.target.value)}
                      placeholder="Add certified module (e.g. Next.js App Router)"
                      className="flex-1 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleAddCourse}
                      className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {aptechInfo.coursework.map((c, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-300"
                      >
                        <span>{c}</span>
                        <button
                          onClick={() => handleRemoveCourse(i)}
                          className="text-slate-500 hover:text-red-400 ml-2"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: SEO & GOOGLE ENGINE */}
          {activeTab === 'seo' && (
            <div className="space-y-8 animate-fade-in">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#070b20] border border-slate-800 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white font-outfit">Website SEO &amp; Search Visibility</h2>
                    <p className="text-xs text-slate-400">Configure title, meta description, keywords, and live Google preview</p>
                  </div>
                </div>

                {seoSuccess && (
                  <div className="my-4 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>SEO parameters updated! Document title and meta updated live.</span>
                  </div>
                )}

                {/* Google Search Live Preview */}
                <div className="my-6 p-5 rounded-2xl bg-[#050814] border border-slate-800">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Google Search Result Snippet Preview</span>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-slate-800/80 font-sans">
                    <div className="text-xs text-slate-400 truncate mb-1">
                      {canonicalUrl || 'https://devpulse-afnan.com'}
                    </div>
                    <div className="text-base text-blue-400 font-semibold hover:underline cursor-pointer">
                      {siteTitle || 'Afnan | Professional Web Developer'}
                    </div>
                    <div className="text-xs text-slate-300 mt-1 line-clamp-2">
                      {metaDesc || 'Professional Web Developer with Aptech Diploma in Information Technology.'}
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSaveSeo} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Website Meta Title (Title tag)
                    </label>
                    <input
                      type="text"
                      value={siteTitle}
                      onChange={(e) => setSiteTitle(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Meta Description
                      </label>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {metaDesc.length}/160 characters
                      </span>
                    </div>
                    <textarea
                      rows={3}
                      value={metaDesc}
                      onChange={(e) => setMetaDesc(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Author Name / Creator
                      </label>
                      <input
                        type="text"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Canonical URL
                      </label>
                      <input
                        type="url"
                        value={canonicalUrl}
                        onChange={(e) => setCanonicalUrl(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Target SEO Keywords (Comma separated)
                    </label>
                    <textarea
                      rows={2}
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Live SEO Settings</span>
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB 4: PROJECTS CMS */}
          {activeTab === 'projects' && (
            <div className="space-y-8 animate-fade-in">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#070b20] border border-slate-800 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <FolderKanban className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white font-outfit">Add New Portfolio Project</h2>
                    <p className="text-xs text-slate-400">Showcase recent client websites, capstones, and web applications</p>
                  </div>
                </div>

                {projSuccess && (
                  <div className="my-4 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>New project added and published to portfolio!</span>
                  </div>
                )}

                <form onSubmit={handleAddProject} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Project Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={projTitle}
                        onChange={(e) => setProjTitle(e.target.value)}
                        placeholder="e.g. NeoMart E-Commerce"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Category
                      </label>
                      <select
                        value={projCategory}
                        onChange={(e) => setProjCategory(e.target.value as any)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                      >
                        <option value="Web Applications">Web Applications</option>
                        <option value="E-Commerce">E-Commerce</option>
                        <option value="Business Websites">Business Websites</option>
                        <option value="Portfolio & Creative">Portfolio &amp; Creative</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Client / Organization
                      </label>
                      <input
                        type="text"
                        value={projClient}
                        onChange={(e) => setProjClient(e.target.value)}
                        placeholder="e.g. Apex Global"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Year
                      </label>
                      <input
                        type="text"
                        value={projYear}
                        onChange={(e) => setProjYear(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Impact Metric
                      </label>
                      <input
                        type="text"
                        value={projMetrics}
                        onChange={(e) => setProjMetrics(e.target.value)}
                        placeholder="+50% Sales · 0.6s Speed"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Technologies Used (comma separated)
                    </label>
                    <input
                      type="text"
                      value={projTech}
                      onChange={(e) => setProjTech(e.target.value)}
                      placeholder="React, Next.js, Node.js, Tailwind CSS"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Details &amp; Architecture
                    </label>
                    <textarea
                      rows={3}
                      value={projDetails}
                      onChange={(e) => setProjDetails(e.target.value)}
                      placeholder="Describe the solution architecture and outcome..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-xs outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Publish Project</span>
                  </button>
                </form>
              </div>

              {/* Projects List */}
              <div className="p-6 rounded-3xl bg-[#070b20] border border-slate-800">
                <h3 className="text-base font-bold text-white font-outfit mb-4">
                  Active Projects ({projects.length})
                </h3>
                <div className="space-y-3">
                  {projects.map((p) => (
                    <div
                      key={p.id}
                      className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="text-sm font-bold text-white">{p.title}</div>
                        <div className="text-xs text-cyan-400">{p.category} · {p.client} ({p.year})</div>
                      </div>
                      <button
                        onClick={() => deleteProject(p.id)}
                        className="p-2 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-800"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: BANNERS SUITE */}
          {activeTab === 'banners' && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#070b20] border border-slate-800 shadow-xl">
                <h2 className="text-xl font-bold text-white font-outfit mb-2">
                  Active Studio Banners &amp; Visual Assets ({banners.length})
                </h2>
                <p className="text-xs text-slate-400 mb-6">
                  Including your Aptech Diploma Banner, Student to Developer Journey, Neon Studio, and Signature Full-Stack banners.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {banners.map((b) => (
                    <div
                      key={b.id}
                      className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden flex flex-col justify-between"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-black">
                        <img
                          src={b.imageSrc}
                          alt={b.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-cyan-400 font-semibold mb-1">{b.category}</div>
                        <div className="text-sm font-bold text-white line-clamp-1">{b.title}</div>
                        <div className="text-xs text-slate-400 mt-1 line-clamp-1">{b.tagline}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
