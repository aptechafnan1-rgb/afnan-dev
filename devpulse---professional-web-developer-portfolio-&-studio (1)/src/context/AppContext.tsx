import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  INITIAL_BANNERS, 
  INITIAL_VIDEOS, 
  INITIAL_PROJECTS, 
  INITIAL_SEO, 
  APTECH_INFO, 
  BannerItem, 
  VideoItem, 
  ProjectItem, 
  SeoSettings, 
  AptechDiplomaInfo 
} from '../data/portfolioData';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'creator' | 'client';
  avatar?: string;
  institution?: string;
  diploma?: string;
}

interface AppContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  viewMode: 'public' | 'dashboard';
  setViewMode: (mode: 'public' | 'dashboard') => void;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  login: (email: string, pass: string) => boolean;
  signup: (name: string, email: string, pass: string, role?: 'admin' | 'creator' | 'client') => boolean;
  logout: () => void;
  demoLoginAsAfnan: () => void;

  // Media & Videos
  videos: VideoItem[];
  addVideo: (video: Omit<VideoItem, 'id' | 'dateAdded'>) => void;
  deleteVideo: (id: string) => void;

  // Banners
  banners: BannerItem[];
  addBanner: (banner: Omit<BannerItem, 'id'>) => void;
  deleteBanner: (id: string) => void;

  // Projects
  projects: ProjectItem[];
  addProject: (proj: Omit<ProjectItem, 'id'>) => void;
  deleteProject: (id: string) => void;

  // Aptech Diploma & Info
  aptechInfo: AptechDiplomaInfo;
  updateAptechInfo: (info: Partial<AptechDiplomaInfo>) => void;

  // SEO
  seoSettings: SeoSettings;
  updateSeoSettings: (settings: Partial<SeoSettings>) => void;

  // Reset to default
  resetAllDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  USER: 'devpulse_user_v2',
  VIDEOS: 'devpulse_videos_v2',
  BANNERS: 'devpulse_banners_v2',
  PROJECTS: 'devpulse_projects_v2',
  SEO: 'devpulse_seo_v2',
  APTECH: 'devpulse_aptech_v2'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Auth state
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USER);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [viewMode, setViewMode] = useState<'public' | 'dashboard'>('public');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Videos state
  const [videos, setVideos] = useState<VideoItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.VIDEOS);
      return saved ? JSON.parse(saved) : INITIAL_VIDEOS;
    } catch {
      return INITIAL_VIDEOS;
    }
  });

  // Banners state
  const [banners, setBanners] = useState<BannerItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BANNERS);
      return saved ? JSON.parse(saved) : INITIAL_BANNERS;
    } catch {
      return INITIAL_BANNERS;
    }
  });

  // Projects state
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  // SEO state
  const [seoSettings, setSeoSettings] = useState<SeoSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SEO);
      return saved ? JSON.parse(saved) : INITIAL_SEO;
    } catch {
      return INITIAL_SEO;
    }
  });

  // Aptech Info state
  const [aptechInfo, setAptechInfo] = useState<AptechDiplomaInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.APTECH);
      return saved ? JSON.parse(saved) : APTECH_INFO;
    } catch {
      return APTECH_INFO;
    }
  });

  // Persist handlers
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BANNERS, JSON.stringify(banners));
  }, [banners]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SEO, JSON.stringify(seoSettings));
    // Dynamically update document title from SEO settings
    if (seoSettings.siteTitle) {
      document.title = seoSettings.siteTitle;
    }
  }, [seoSettings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.APTECH, JSON.stringify(aptechInfo));
  }, [aptechInfo]);

  // Auth functions
  const login = (email: string, pass: string): boolean => {
    if (!email.trim() || !pass.trim()) return false;
    
    // Check if it's Afnan or standard user
    const isAdmin = email.toLowerCase().includes('afnan') || email.toLowerCase().includes('admin');
    const user: User = {
      id: 'usr_' + Date.now(),
      name: isAdmin ? 'Afnan' : email.split('@')[0],
      email: email,
      role: isAdmin ? 'admin' : 'client',
      institution: 'Aptech Computer Education',
      diploma: 'Diploma in Information Technology & Web Development'
    };
    setCurrentUser(user);
    setIsAuthModalOpen(false);
    setViewMode('dashboard');
    return true;
  };

  const signup = (name: string, email: string, pass: string, role: 'admin' | 'creator' | 'client' = 'admin'): boolean => {
    if (!name.trim() || !email.trim() || !pass.trim()) return false;
    const user: User = {
      id: 'usr_' + Date.now(),
      name: name,
      email: email,
      role: role,
      institution: 'Aptech Computer Education',
      diploma: 'Diploma in Information Technology'
    };
    setCurrentUser(user);
    setIsAuthModalOpen(false);
    setViewMode('dashboard');
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    setViewMode('public');
  };

  const demoLoginAsAfnan = () => {
    const user: User = {
      id: 'usr_afnan_aptech',
      name: 'Afnan',
      email: 'aptechafnan1@gmail.com',
      role: 'admin',
      institution: 'Aptech Computer Education',
      diploma: 'Diploma in Information Technology & Web Development'
    };
    setCurrentUser(user);
    setIsAuthModalOpen(false);
    setViewMode('dashboard');
  };

  // Video operations
  const addVideo = (videoData: Omit<VideoItem, 'id' | 'dateAdded'>) => {
    const newVideo: VideoItem = {
      ...videoData,
      id: 'vid_' + Date.now(),
      dateAdded: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };
    setVideos([newVideo, ...videos]);
  };

  const deleteVideo = (id: string) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  // Banner operations
  const addBanner = (bannerData: Omit<BannerItem, 'id'>) => {
    const newBanner: BannerItem = {
      ...bannerData,
      id: 'banner_' + Date.now()
    };
    setBanners([newBanner, ...banners]);
  };

  const deleteBanner = (id: string) => {
    setBanners(banners.filter((b) => b.id !== id));
  };

  // Project operations
  const addProject = (projData: Omit<ProjectItem, 'id'>) => {
    const newProject: ProjectItem = {
      ...projData,
      id: 'proj_' + Date.now()
    };
    setProjects([newProject, ...projects]);
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  // Aptech & SEO updates
  const updateAptechInfo = (info: Partial<AptechDiplomaInfo>) => {
    setAptechInfo((prev) => ({ ...prev, ...info }));
  };

  const updateSeoSettings = (settings: Partial<SeoSettings>) => {
    setSeoSettings((prev) => ({ ...prev, ...settings }));
  };

  const resetAllDefaults = () => {
    setVideos(INITIAL_VIDEOS);
    setBanners(INITIAL_BANNERS);
    setProjects(INITIAL_PROJECTS);
    setSeoSettings(INITIAL_SEO);
    setAptechInfo(APTECH_INFO);
    localStorage.clear();
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        viewMode,
        setViewMode,
        isAuthModalOpen,
        openAuthModal: () => setIsAuthModalOpen(true),
        closeAuthModal: () => setIsAuthModalOpen(false),
        login,
        signup,
        logout,
        demoLoginAsAfnan,
        videos,
        addVideo,
        deleteVideo,
        banners,
        addBanner,
        deleteBanner,
        projects,
        addProject,
        deleteProject,
        aptechInfo,
        updateAptechInfo,
        seoSettings,
        updateSeoSettings,
        resetAllDefaults
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
