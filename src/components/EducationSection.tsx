import React from 'react';
import { PROFILE_INFO } from '../data/projects';
import { GraduationCap, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-24 border-b border-white/[0.06] bg-[#0F0F11] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF8A65] mb-3 px-3 py-1 rounded-full bg-[#E05A36]/15 border border-[#E05A36]/30">
            <GraduationCap className="w-3.5 h-3.5 text-[#E05A36]" />
            <span>Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Education
          </h2>
          <p className="text-sm text-zinc-400">
            Rigorous undergraduate computer science and data science curriculum at Godavari Global University.
          </p>
        </div>

        <div className="max-w-4xl bg-[#161619]/90 rounded-3xl border border-white/[0.08] p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E05A36]/15 border border-[#E05A36]/30 text-[#FF8A65] flex items-center justify-center flex-shrink-0 mt-1">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {PROFILE_INFO.degree}
                </h3>
                <div className="text-sm font-semibold text-zinc-300 mt-1">
                  {PROFILE_INFO.institution}
                </div>
                <div className="text-xs text-zinc-400 font-mono mt-1">
                  {PROFILE_INFO.stage} &bull; 2023 &ndash; 2027
                </div>
              </div>
            </div>

            <div className="sm:text-right bg-white/[0.02] sm:bg-transparent p-4 sm:p-0 rounded-2xl border sm:border-0 border-white/[0.06]">
              <div className="text-3xl font-extrabold font-mono text-emerald-400">
                {PROFILE_INFO.cgpa}
              </div>
              <div className="text-xs text-zinc-400 font-mono mt-0.5">
                Cumulative GPA
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#E05A36]" />
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
                  className="text-xs px-3 py-1.5 rounded-xl bg-white/[0.04] text-zinc-300 font-mono border border-white/[0.06]"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
