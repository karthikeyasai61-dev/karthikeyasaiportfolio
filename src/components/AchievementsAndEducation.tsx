import React from 'react';
import { ACHIEVEMENTS, PROFILE_INFO } from '../data/projects';
import { Award, GraduationCap, ExternalLink, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export const AchievementsAndEducation: React.FC = () => {
  return (
    <>
      {/* Hackathons & Achievements */}
      <section id="achievements" className="py-20 sm:py-24 border-b border-white/[0.06] bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Award className="w-3 h-3 text-amber-400" />
              <span>Competitions &amp; Recognitions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Hackathons &amp; Achievements
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Transparently documented hackathon track record. Competitive winner awards and national level participations are clearly distinguished.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((item, idx) => (
              <div 
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                  item.role === 'Winner'
                    ? 'bg-amber-950/20 border-amber-500/30 hover:border-amber-500/50 shadow-lg shadow-amber-950/20'
                    : 'bg-white/[0.03] border-white/[0.08] hover:border-white/[0.15]'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      item.role === 'Winner'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-white/[0.05] text-slate-300 border border-white/[0.08]'
                    }`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        {item.event} &bull; {item.date}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                    item.role === 'Winner'
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-white/[0.05] text-slate-300 border-white/[0.1]'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-xs pt-3.5 border-t border-white/[0.06] font-mono">
                  <span className="flex items-center space-x-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Competition Milestone</span>
                  </span>
                  {item.projectLink && (
                    <a
                      href={item.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center space-x-1"
                    >
                      <span>Explore Project</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 sm:py-24 border-b border-white/[0.06] bg-[#0B0F19]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 mb-3 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              <GraduationCap className="w-3 h-3 text-indigo-400" />
              <span>Academic Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              Education
            </h2>
          </div>

          <div className="max-w-4xl bg-white/[0.03] rounded-3xl border border-white/[0.08] p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {PROFILE_INFO.degree}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-1">
                    {PROFILE_INFO.institution}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-1">
                    {PROFILE_INFO.stage} &bull; 2023 &ndash; 2027
                  </div>
                </div>
              </div>

              <div className="sm:text-right bg-white/[0.02] sm:bg-transparent p-4 sm:p-0 rounded-2xl border sm:border-0 border-white/[0.06]">
                <div className="text-3xl font-extrabold font-mono text-emerald-400">
                  {PROFILE_INFO.cgpa}
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  Cumulative GPA
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span>Core Computer Science &amp; Data Science Coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'Database Management Systems (DBMS)',
                  'Object-Oriented Programming (Java/C++)',
                  'Operating Systems',
                  'Machine Learning & Data Mining',
                  'Computer Networks',
                  'Web Technologies'
                ].map((course) => (
                  <span
                    key={course}
                    className="text-xs px-3 py-1.5 rounded-xl bg-white/[0.04] text-slate-300 font-mono border border-white/[0.06]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
