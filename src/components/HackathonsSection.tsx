import React, { useState } from 'react';
import { HACKATHONS_DATA } from '../data/projects';
import type { HackathonItem } from '../types/project';
import { 
  Trophy, 
  CheckCircle2, 
  ExternalLink, 
  Building2, 
  Flag,
  ArrowRight,
  ShieldCheck,
  X
} from 'lucide-react';

export const HackathonsSection: React.FC = () => {
  const [selectedHackathon, setSelectedHackathon] = useState<HackathonItem | null>(null);

  return (
    <section id="hackathons" className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#0F0F11] relative scroll-mt-16">
      {/* Anchor alias for achievements links */}
      <div id="achievements" className="absolute top-0 left-0 scroll-mt-16 pointer-events-none" />

      {/* Background radial gradient glow for subtle depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E05A36]/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Competitive Journey</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Hackathons &amp; Competitions
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            From my first 3rd-prize finish to participating in national and university-level hackathons, each competition has helped me turn ideas into working solutions.
          </p>
        </div>

        {/* HACKATHON SUMMARY METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#161619]/90 border border-white/[0.08] backdrop-blur-md flex items-center justify-between">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                6
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 font-medium mt-0.5">
                Hackathons
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#E05A36]/15 border border-[#E05A36]/30 text-[#FF8A65] flex items-center justify-center font-bold">
              <Flag className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-500/[0.1] to-[#161619]/90 border border-amber-500/30 backdrop-blur-md flex items-center justify-between shadow-lg shadow-amber-500/5">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono flex items-center gap-1.5">
                <span>1</span>
                <span className="text-xs font-sans text-amber-400/80 font-normal">(3rd Prize)</span>
              </div>
              <div className="text-xs sm:text-sm text-amber-200/90 font-medium mt-0.5">
                Award
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center font-bold">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#161619]/90 border border-white/[0.08] backdrop-blur-md flex items-center justify-between">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                Multiple
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 font-medium mt-0.5">
                Real-World Projects
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* VISUAL TIMELINE JOURNEY */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/[0.08]">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF8A65]">
                Visual Timeline
              </span>
              <span className="text-zinc-600">&bull;</span>
              <span className="text-xs text-zinc-400 font-mono">
                Chronological Journey (01 &rarr; 06)
              </span>
            </div>
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block relative py-6">
            {/* Connecting Track Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500/60 via-[#E05A36]/50 to-zinc-700/40 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-6 gap-3 relative z-10">
              {HACKATHONS_DATA.map((item) => {
                const isAward = item.isAward;
                return (
                  <div 
                    key={item.id} 
                    className="flex flex-col items-center text-center group cursor-pointer"
                    onClick={() => {
                      const el = document.getElementById(`card-${item.id}`);
                      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  >
                    {/* Top order tag */}
                    <div className="mb-3 font-mono text-[11px] font-bold text-zinc-400 group-hover:text-white transition-colors">
                      {item.order}
                    </div>

                    {/* Timeline Node Badge */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 shadow-md ${
                      isAward 
                        ? 'bg-amber-500 text-zinc-950 ring-4 ring-amber-500/20 scale-110 shadow-amber-500/30' 
                        : 'bg-[#18181B] border-2 border-white/20 text-zinc-200 group-hover:border-[#E05A36] group-hover:scale-105'
                    }`}>
                      {isAward ? <Trophy className="w-4 h-4 fill-zinc-950" /> : item.order}
                    </div>

                    {/* Content Pill below node */}
                    <div className="mt-4 flex flex-col items-center">
                      <span className="text-xs font-bold text-white leading-tight line-clamp-2 max-w-[150px] group-hover:text-[#FF8A65] transition-colors">
                        {item.name}
                      </span>
                      
                      <div className="mt-2">
                        {isAward ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm">
                            <span>🥉 3rd Prize</span>
                          </span>
                        ) : (
                          <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                            Participated
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile & Tablet Vertical Timeline */}
          <div className="block lg:hidden relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-amber-500/80 before:via-[#E05A36]/50 before:to-zinc-800">
            {HACKATHONS_DATA.map((item) => (
              <div 
                key={item.id}
                className="relative group cursor-pointer"
                onClick={() => {
                  const el = document.getElementById(`card-${item.id}`);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                {/* Node circle on the vertical spine */}
                <div className={`absolute -left-[27px] sm:-left-[35px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold shadow-md ${
                  item.isAward 
                    ? 'bg-amber-500 text-zinc-950 ring-2 ring-amber-500/40' 
                    : 'bg-[#18181B] border border-white/20 text-zinc-200'
                }`}>
                  {item.isAward ? <Trophy className="w-3 h-3 fill-zinc-950" /> : item.order}
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#E05A36]/40 transition-all flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-[#FF8A65] font-semibold">{item.order}</span>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{item.name}</h4>
                    </div>
                    <span className="text-[11px] text-zinc-400">{item.organization}</span>
                  </div>

                  <div>
                    {item.isAward ? (
                      <span className="inline-flex items-center text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 whitespace-nowrap">
                        🥉 3rd Prize
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] whitespace-nowrap">
                        Participated
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HACKATHON INDIVIDUAL CARDS GRID */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/[0.08]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
              Individual Hackathon Cards
            </span>
            <span className="text-xs font-mono text-zinc-500">
              6 Verified Milestones
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HACKATHONS_DATA.map((item) => {
              const isAward = item.isAward;

              return (
                <article
                  key={item.id}
                  id={`card-${item.id}`}
                  className={`rounded-2xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative group hover:-translate-y-1 ${
                    isAward
                      ? 'bg-gradient-to-b from-[#1C1714] via-[#161619] to-[#121214] border-2 border-amber-500/50 hover:border-amber-400 shadow-xl shadow-amber-500/10'
                      : 'bg-[#161619]/90 backdrop-blur-md border border-white/[0.08] hover:border-[#E05A36]/50 hover:shadow-[0_8px_30px_rgba(224,90,54,0.18)]'
                  }`}
                >
                  {/* Subtle top decoration for award card */}
                  {isAward && (
                    <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1">
                      <span className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Top Row: Number & Status Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${
                        isAward 
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                          : 'bg-white/[0.04] text-zinc-400 border border-white/[0.06]'
                      }`}>
                        {item.order}
                      </span>

                      {/* Prize or Participation Badge */}
                      {isAward ? (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold shadow-sm">
                          <Trophy className="w-3.5 h-3.5 text-amber-400" />
                          <span>🥉 3rd Prize</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 text-xs font-mono">
                          <span>Participated</span>
                        </div>
                      )}
                    </div>

                    {/* Hackathon Name */}
                    <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-2 transition-colors ${
                      isAward ? 'text-white group-hover:text-amber-300' : 'text-white group-hover:text-[#FF8A65]'
                    }`}>
                      {item.name}
                    </h3>

                    {/* Organization */}
                    <div className="flex items-center space-x-1.5 text-xs text-zinc-400 font-mono mb-4">
                      <Building2 className="w-3.5 h-3.5 text-[#E05A36] shrink-0" />
                      <span>{item.organization}</span>
                    </div>

                    {/* Experience Tag / Subtitle */}
                    <div className={`p-3 rounded-xl text-xs leading-relaxed mb-4 border font-medium ${
                      isAward 
                        ? 'bg-amber-500/[0.08] text-amber-200/90 border-amber-500/20' 
                        : 'bg-white/[0.02] text-zinc-300 border-white/[0.06]'
                    }`}>
                      {item.experienceText}
                    </div>

                    {/* Description Summary */}
                    <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                      {item.summary}
                    </p>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedHackathon(item)}
                      className={`inline-flex items-center space-x-1 text-xs font-semibold transition-colors cursor-pointer ${
                        isAward 
                          ? 'text-amber-400 hover:text-amber-300' 
                          : 'text-zinc-300 hover:text-[#FF8A65]'
                      }`}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>

                    {item.projectLink && (
                      <a
                        href={item.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-1 rounded-lg border border-emerald-500/30 transition-colors"
                        title="View Hackathon Repository"
                      >
                        <span>Project Repo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>

      {/* DETAIL MODAL FOR HACKATHON CARDS */}
      {selectedHackathon && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-modal-in"
          onClick={() => setSelectedHackathon(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-[#161619] border border-white/[0.12] rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative text-zinc-100 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-[#FF8A65] font-bold px-2 py-0.5 rounded bg-[#E05A36]/15 border border-[#E05A36]/30">
                  Hackathon {selectedHackathon.order}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  {selectedHackathon.name}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  {selectedHackathon.organization}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {selectedHackathon.isAward ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span>🥉 3rd Prize</span>
                  </span>
                ) : (
                  <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1]">
                    Participated
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedHackathon(null)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Experience Box */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1">
                Experience Milestone
              </span>
              <p className="text-sm text-zinc-200">
                {selectedHackathon.experienceText}
              </p>
            </div>

            {/* Overview */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-2">
                Overview &amp; Participation Summary
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {selectedHackathon.summary}
              </p>
            </div>

            {/* Verified Note */}
            <div className="flex items-center space-x-2 text-xs text-emerald-400 font-mono pt-2 border-t border-white/[0.06]">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verified Hackathon Experience Record</span>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              {selectedHackathon.projectLink ? (
                <a
                  href={selectedHackathon.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-200 transition-colors"
                >
                  <span>View Project on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs text-zinc-500 font-mono">Participated in hackathon challenge</span>
              )}

              <button
                type="button"
                onClick={() => setSelectedHackathon(null)}
                className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
