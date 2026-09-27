import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/projects';
import { ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './TechIcons';

interface NavbarProps {
  projectCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ projectCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'WORKS', href: '#projects' },
    { label: 'ABOUT', href: '#about' },
    { label: 'HACKATHONS', href: '#hackathons' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0F0F11]/90 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Portix Style */}
        <a href="#" className="flex items-center space-x-2 group">
          <span className="font-display text-2xl sm:text-3xl tracking-wider text-white group-hover:text-[#E05A36] transition-colors">
            KARTHIKEYA
          </span>
          <span className="w-2 h-2 rounded-full bg-[#E05A36] inline-block mb-1" />
        </a>

        {/* Navigation Links (Desktop) - Clean Spaced Uppercase */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-[0.22em] text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-200 relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E05A36] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Area: Socials + Let's Talk Button */}
        <div className="flex items-center space-x-3">
          {/* LinkedIn Icon Button */}
          <a
            href={PROFILE_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/50 text-zinc-400 hover:text-[#70B5F9] transition-all shadow-sm"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* GitHub Icon Button */}
          <a
            href={PROFILE_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-zinc-400 hover:text-white transition-all shadow-sm"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Let's Talk CTA Button - Terracotta Accent */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#E05A36] hover:bg-[#EB6644] text-white text-xs font-bold tracking-[0.15em] uppercase shadow-lg shadow-[#E05A36]/25 hover:shadow-[#E05A36]/40 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span className="w-5 h-5 rounded bg-black/20 flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
            <span>LET'S TALK</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#141416]/98 backdrop-blur-2xl px-5 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold tracking-wider text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <a
              href={PROFILE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-[#70B5F9] hover:underline"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-zinc-300 hover:underline"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
