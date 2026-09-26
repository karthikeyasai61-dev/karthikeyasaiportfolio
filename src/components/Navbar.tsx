import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/projects';
import { ExternalLink, Menu, X, Sparkles, FolderGit2 } from 'lucide-react';
import { Github, Linkedin } from './TechIcons';

interface NavbarProps {
  projectCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ projectCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Hackathons', href: '#hackathons' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0C0A09]/90 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Monogram */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#784421] via-[#A05C2C] to-[#D97736] p-[1px] shadow-lg shadow-[#D97736]/20 group-hover:shadow-[#D97736]/40 transition-shadow">
            <div className="w-full h-full bg-[#19120E] rounded-[11px] flex items-center justify-center font-bold text-xs tracking-wider text-[#F6B17A]">
              KS
            </div>
          </div>
          <div>
            <div className="font-bold text-stone-100 text-sm tracking-tight group-hover:text-[#F39C5A] transition-colors">
              {PROFILE_INFO.name}
            </div>
            <div className="text-[10px] text-stone-400 font-mono hidden sm:block">
              Full-Stack &bull; Data Science
            </div>
          </div>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs font-medium text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Area */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Projects Badge */}
          <a
            href="#projects"
            className="hidden lg:inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#8A5028]/25 border border-[#B87B44]/40 text-[#F39C5A] text-xs font-mono font-medium hover:bg-[#8A5028]/40 transition-colors"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-[#F39C5A]" />
            <span>{projectCount} Projects</span>
          </a>

          {/* LinkedIn Link Button */}
          <a
            href={PROFILE_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2]/15 hover:bg-[#0A66C2]/25 border border-[#0A66C2]/40 text-xs font-medium text-[#70B5F9] transition-all shadow-sm hover:scale-[1.02]"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          {/* GitHub Link Button */}
          <a
            href={PROFILE_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 text-xs font-medium text-white transition-all shadow-sm hover:border-[#D97736]/30"
            title="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5 text-stone-300" />
            <span className="hidden sm:inline">GitHub</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#140E0A]/95 backdrop-blur-2xl px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-stone-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
            <a
              href={PROFILE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs text-[#70B5F9] hover:underline"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs text-[#F39C5A] hover:underline"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
