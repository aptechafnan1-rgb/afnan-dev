import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Menu, X, ArrowUpRight, Send, Code2, User as UserIcon, LayoutDashboard, LogIn } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const { currentUser, isAuthenticated, setViewMode, openAuthModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Banners', href: '#banners' },
    { label: 'Aptech Diploma', href: '#aptech-diploma' },
    { label: 'Services', href: '#services' },
    { label: 'Videos', href: '#videos' },
    { label: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#050814]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand title, one line */}
        <a 
          href="#" 
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-outfit text-xl font-extrabold text-white">
            Afnan<span className="text-cyan-400">.dev</span>
          </span>
        </a>

        {/* Zone 2: 4-5 single-line clean nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + Auth Trigger */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {isAuthenticated ? (
            <button
              onClick={() => setViewMode('dashboard')}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0"
              title="Open Creator Dashboard"
            >
              <LayoutDashboard className="w-4 h-4 text-cyan-400" />
              <span>Studio Board</span>
            </button>
          ) : (
            <button
              onClick={openAuthModal}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <LogIn className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sign In</span>
            </button>
          )}

          <button
            onClick={onContactClick}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-xl shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Let&apos;s Work Together</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          {isAuthenticated ? (
            <button
              onClick={() => setViewMode('dashboard')}
              className="p-2 text-cyan-400 hover:text-white"
            >
              <LayoutDashboard className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={openAuthModal}
              className="p-2 text-slate-300 hover:text-white text-xs font-bold"
            >
              Sign In
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#070c1d] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (isAuthenticated) {
                  setViewMode('dashboard');
                } else {
                  openAuthModal();
                }
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-cyan-300 bg-slate-900 border border-slate-700 rounded-xl"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>{isAuthenticated ? 'Open Studio Board' : 'Sign In / Register'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl"
            >
              <Send className="w-4 h-4" />
              <span>Let&apos;s Work Together</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
