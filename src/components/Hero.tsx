import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/projects';
import { ArrowRight, ExternalLink, Award, Sparkles, Code2, GraduationCap, Layers, Globe } from 'lucide-react';
import { Github, Linkedin } from './TechIcons';

interface HeroProps {
  projectCount: number;
}

const SKILL_PILLS = [
  { name: 'React & Vite', icon: Layers },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Python & AI', icon: Sparkles },
  { name: 'Next.js & APIs', icon: Globe },
];

export const Hero: React.FC<HeroProps> = ({ projectCount }) => {
  const [activePill, setActivePill] = useState<number | null>(null);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden glow-mesh border-b border-white/[0.06]">
      {/* Decorative Blur Orbs - Brown, Bronze, Copper */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[620px] h-96 sm:h-[620px] bg-[#784421]/22 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#D97736]/18 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-[#B87B44]/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-stone-300 text-xs font-mono backdrop-blur-md shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PROFILE_INFO.institution} &bull; {PROFILE_INFO.stage}</span>
              <span className="text-stone-500">•</span>
              <span className="text-[#F39C5A] font-semibold">CGPA {PROFILE_INFO.cgpa}</span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="gradient-accent-text">{PROFILE_INFO.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-stone-300 mt-3 flex items-center gap-2">
                <span>{PROFILE_INFO.title}</span>
              </p>
            </div>

            {/* Statement Quote */}
            <p className="text-xl sm:text-2xl text-stone-200 font-medium leading-relaxed border-l-2 border-[#D97736] pl-4 italic">
              "{PROFILE_INFO.statement}"
            </p>

            {/* Supporting Bio */}
            <p className="text-sm sm:text-base text-stone-400 leading-relaxed max-w-xl">
              {PROFILE_INFO.summary}
            </p>

            {/* Interactive Quick Skill Highlights */}
            <div className="flex flex-wrap gap-2 pt-1">
              {SKILL_PILLS.map((pill, idx) => {
                const Icon = pill.icon;
                const isActive = activePill === idx;
                return (
                  <button
                    key={pill.name}
                    type="button"
                    onMouseEnter={() => setActivePill(idx)}
                    onMouseLeave={() => setActivePill(null)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#8A5028] to-[#D97736] text-white border border-[#F6B17A]/50 shadow-md shadow-[#D97736]/35 scale-105'
                        : 'bg-white/[0.04] text-stone-300 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-[#F39C5A]" />
                    <span>{pill.name}</span>
                  </button>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#784421] via-[#A05C2C] to-[#D97736] text-white text-sm font-semibold hover:opacity-95 transition-all shadow-lg shadow-[#D97736]/25 hover:shadow-[#D97736]/40 hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore All {projectCount} Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={PROFILE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-[#0A66C2]/15 hover:bg-[#0A66C2]/25 border border-[#0A66C2]/40 text-[#70B5F9] text-sm font-semibold transition-all shadow-sm hover:scale-[1.02]"
              >
                <Linkedin className="w-4 h-4 text-[#70B5F9]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href={PROFILE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white text-sm font-semibold transition-all shadow-sm hover:border-[#D97736]/30 hover:scale-[1.02]"
              >
                <Github className="w-4 h-4 text-stone-300" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-5 py-3.5 rounded-xl text-stone-300 hover:text-white text-sm font-medium hover:bg-white/[0.05] transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Metric Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 pt-6 border-t border-white/[0.08]">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm hover:border-[#D97736]/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center gap-1.5">
                  <Code2 className="w-5 h-5 text-[#F39C5A]" />
                  <span>{projectCount}</span>
                </div>
                <div className="text-xs text-stone-400 font-mono mt-1">
                  Verified Projects
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono flex items-center gap-1.5">
                  <span>{PROFILE_INFO.cgpa}</span>
                </div>
                <div className="text-xs text-stone-400 font-mono mt-1">
                  B.Tech CGPA
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm hover:border-amber-500/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono flex items-center gap-1.5">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>3rd</span>
                </div>
                <div className="text-xs text-stone-400 font-mono mt-1">
                  Hackathon Winner
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm hover:border-[#D97736]/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F39C5A] font-mono flex items-center gap-1.5">
                  <Sparkles className="w-5 h-5 text-[#F39C5A]" />
                  <span>100%</span>
                </div>
                <div className="text-xs text-stone-400 font-mono mt-1">
                  Verified Codebase
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Animated Portrait Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Spinning Gradient Halo - Brown, Bronze, Copper */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-[2.5rem] bg-gradient-to-tr from-[#784421]/45 via-[#B87B44]/35 to-[#D97736]/40 blur-2xl opacity-80 animate-pulse-glow -z-10" />

            {/* Rotating Ambient Border Ring */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#784421] via-[#D97736] to-[#B87B44] opacity-50 blur-sm animate-spin-slow -z-10" />

            {/* Main Floating Container */}
            <div className="relative group w-full max-w-[380px] sm:max-w-[420px] animate-float">
              
              {/* Image Frame Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#B87B44]/30 bg-gradient-to-b from-stone-900 to-[#140E0A] shadow-2xl shadow-black/85">
                
                {/* Photo Element */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-950">
                  <img
                    src="/profile.jpg"
                    alt={PROFILE_INFO.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.02] brightness-95 group-hover:brightness-100"
                    loading="eager"
                  />
                  
                  {/* Subtle Dark Vignette / Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A] via-transparent to-transparent opacity-65" />
                  
                  {/* Top Bar Glass Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[11px] font-mono text-stone-300">
                      Hyderabad, India
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Available for hire
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#140E0A]/85 backdrop-blur-md border border-[#B87B44]/30 shadow-lg">
                    <div className="text-white text-sm font-bold flex items-center justify-between">
                      <span>{PROFILE_INFO.name}</span>
                      <span className="text-[#F39C5A] text-xs font-mono">B.Tech 3rd Yr</span>
                    </div>
                    <div className="text-stone-300 text-xs mt-0.5 truncate">
                      {PROFILE_INFO.institution} &bull; {PROFILE_INFO.degree}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Hackathon 3rd Prize (Top-Right) */}
              <div className="absolute -top-5 -right-3 sm:-right-6 animate-float-slow">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#140E0A]/95 backdrop-blur-xl border border-amber-500/40 shadow-xl shadow-black/70 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-300 flex items-center gap-1">
                      <span>🥉 3rd Prize</span>
                    </div>
                    <div className="text-[10px] text-stone-400 font-mono">
                      BVC Hackathon
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: CGPA & Discipline (Bottom-Left) */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 animate-float-reverse">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#140E0A]/95 backdrop-blur-xl border border-emerald-500/40 shadow-xl shadow-black/70 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold font-mono text-xs">
                    9.0
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                      <span>CGPA 9.0</span>
                    </div>
                    <div className="text-[10px] text-stone-400 font-mono">
                      CSE (Data Science)
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Freelance & Projects (Middle-Right Accent) */}
              <div className="hidden sm:flex absolute top-1/2 -right-8 -translate-y-1/2 animate-float">
                <div className="px-3 py-2 rounded-xl bg-[#140E0A]/95 backdrop-blur-xl border border-[#D97736]/50 shadow-lg shadow-black/70 hover:scale-105 transition-transform text-left">
                  <div className="text-[11px] font-bold text-[#F39C5A] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#F39C5A]" />
                    <span>Sensovec Freelance</span>
                  </div>
                  <div className="text-[10px] text-stone-400 font-mono">
                    Production Client Work
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

