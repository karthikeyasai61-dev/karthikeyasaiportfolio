import React from 'react';
import { PROFILE_INFO } from '../data/projects';
import { ArrowRight, ExternalLink, Award, Sparkles, Code2, Globe } from 'lucide-react';
import { Github, Linkedin } from './TechIcons';
import profileImg from '../assets/profile.jpg';

interface HeroProps {
  projectCount: number;
}

export const Hero: React.FC<HeroProps> = ({ projectCount }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pb-32 overflow-hidden bg-[#0F0F11] border-b border-white/[0.08]">
      
      {/* Ambient background glow mesh */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E05A36]/[0.07] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#E05A36]/[0.10] rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Headline & Content | Right Portrait & Terracotta Sun Disk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Stacked Editorial Headline & Highlights */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
            
            {/* Tag / Eyebrow: Portix style square bullet */}
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-400">
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#E05A36] inline-block shadow-sm shadow-[#E05A36]/50" />
              <span>FULL-STACK DEVELOPER &bull; DATA SCIENCE</span>
            </div>

            {/* Massive Portix-Style Condensed Headline */}
            <div className="space-y-0.5 sm:space-y-1">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-[5.5rem] tracking-tight leading-[0.92] uppercase">
                <span className="block text-white font-normal drop-shadow-sm">
                  CODE THAT
                </span>
                <span className="block text-zinc-600 font-normal select-none">
                  TRANSFORMS IDEAS
                </span>
                <span className="block text-zinc-600 font-normal select-none">
                  INTO IMPACT
                </span>
              </h1>
            </div>

            {/* Concise Bio & Statement */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl">
              Hi, I'm <strong className="text-white font-semibold">{PROFILE_INFO.name}</strong> — 3rd-year Computer Science undergraduate at Godavari Global University (CGPA 9.0). Builder of 21 verified GitHub repositories, production systems, and 3rd Prize winner at BVC Hackathon.
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <div className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#E05A36]" />
                <span className="text-white font-bold">{projectCount}</span> Projects
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">9.0</span> CGPA
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-300 font-bold">3rd Prize</span> Hackathon
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={scrollToProjects}
                className="group inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-[#E05A36] hover:bg-[#EB6644] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xl shadow-[#E05A36]/30 hover:shadow-[#E05A36]/50 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>EXPLORE ALL {projectCount} WORKS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={PROFILE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-[#0A66C2]/15 hover:bg-[#0A66C2]/25 border border-[#0A66C2]/40 text-[#70B5F9] text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <Linkedin className="w-4 h-4 text-[#70B5F9]" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href={PROFILE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <Github className="w-4 h-4 text-zinc-300" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Terracotta Sun Disk & Portrait Composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* The Signature Terracotta Sun Disk (Backdrop) */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] flex items-center justify-center">
              
              {/* Outer Radiant Glow */}
              <div className="absolute w-[320px] sm:w-[420px] lg:w-[460px] h-[320px] sm:h-[420px] lg:h-[460px] rounded-full bg-[#E05A36]/30 blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

              {/* Terracotta / Sunset Gradient Circle (like the Portix screenshot) */}
              <div 
                className="absolute w-[290px] sm:w-[380px] lg:w-[420px] h-[290px] sm:h-[380px] lg:h-[420px] rounded-full -z-10 shadow-2xl transition-transform duration-700"
                style={{
                  background: 'radial-gradient(circle at 40% 35%, #EA6B48 0%, #E05A36 30%, #B83E1B 60%, #591B0B 95%)',
                  boxShadow: '0 25px 60px -15px rgba(224, 90, 54, 0.45)'
                }}
              />

              {/* Portrait Container */}
              <div className="relative z-10 w-[270px] sm:w-[350px] lg:w-[390px] aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-black/90 border border-white/10">
                <img
                  src={profileImg}
                  alt={PROFILE_INFO.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.04] brightness-95 group-hover:brightness-100"
                  loading="eager"
                />
                
                {/* Subtle bottom fade to blend with dark canvas */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-transparent to-transparent opacity-60" />
                
                {/* Top Location Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-300">
                    India
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Available for hire
                  </span>
                </div>
              </div>

              {/* Circular Terracotta Floating Button: "HIRE ME NOW" (exact match to Portix screenshot) */}
              <button
                type="button"
                onClick={scrollToContact}
                aria-label="Hire Karthikeya Now"
                className="absolute -bottom-5 left-4 sm:left-6 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#E05A36] hover:bg-[#EB6644] text-white flex flex-col items-center justify-center text-center p-2 shadow-2xl shadow-[#E05A36]/60 border-2 border-[#0F0F11] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
              >
                <span className="font-display text-base sm:text-lg tracking-wider leading-none text-white uppercase group-hover:tracking-widest transition-all">
                  HIRE ME
                </span>
                <span className="font-display text-sm sm:text-base tracking-wider leading-none text-white/90 uppercase mt-0.5">
                  NOW
                </span>
                <span className="text-[10px] text-white/80 font-mono mt-0.5">&rarr;</span>
              </button>

              {/* Floating Verified Achievement Tag 1: BVC Hackathon 3rd Prize */}
              <div className="absolute -top-4 -right-2 sm:-right-4 z-20 animate-float-slow hidden sm:block">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#161619]/95 backdrop-blur-xl border border-amber-500/40 shadow-xl shadow-black/80 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-300 flex items-center gap-1">
                      <span>🥉 3rd Prize</span>
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono">
                      BVC Hackathon
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Verified Achievement Tag 2: Sensovec Freelance Client Work */}
              <div className="absolute top-1/2 -right-6 sm:-right-8 -translate-y-1/2 z-20 animate-float hidden md:block">
                <div className="px-3.5 py-2 rounded-2xl bg-[#161619]/95 backdrop-blur-xl border border-[#E05A36]/40 shadow-xl shadow-black/80 hover:scale-105 transition-transform text-left">
                  <div className="text-[11px] font-bold text-[#FF8A65] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E05A36]" />
                    <span>Sensovec Freelance</span>
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                    Production Client Work
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Massive Bottom Architectural Typography: "KARTHIKEYA SAI" (exact match to "PORTIX WILLSON") */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-4 border-t border-white/[0.06] overflow-hidden select-none">
          <div className="text-center">
            <span className="font-display block text-5xl sm:text-8xl md:text-9xl lg:text-[11.5rem] xl:text-[13.5rem] tracking-tighter leading-none text-white font-normal uppercase drop-shadow-md hover:text-[#E05A36] transition-colors duration-500 cursor-default">
              KARTHIKEYA SAI
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
