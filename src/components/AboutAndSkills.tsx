import React from 'react';
import { PROFILE_INFO } from '../data/projects';
import { Code2, Brain, Terminal, Sparkles } from 'lucide-react';

export const AboutAndSkills: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 border-b border-white/[0.06] bg-[#0C0A09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F39C5A] mb-3 px-3 py-1 rounded-full bg-[#8A5028]/25 border border-[#B87B44]/40">
            <Sparkles className="w-3 h-3 text-[#F39C5A]" />
            <span>Background &amp; Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About Karthikeya Sai
          </h2>
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-medium">
            3rd-year B.Tech undergraduate studying Computer Science and Engineering with a specialization in Data Science at Godavari Global University, maintaining a 9.0 CGPA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#161210]/85 border border-white/[0.08] hover:border-[#D97736]/50 transition-all shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#8A5028]/25 border border-[#B87B44]/40 text-[#F39C5A] flex items-center justify-center mb-5">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Full-Stack Architecture
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Building responsive frontend applications using React, Next.js 15, and TypeScript connected with Node.js, Express, Firebase, and Drizzle ORM data pipelines.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#161210]/85 border border-white/[0.08] hover:border-[#F39C5A]/50 transition-all shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#A05C2C]/25 border border-[#C88A52]/40 text-[#F6B17A] flex items-center justify-center mb-5">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Data Science &amp; Applied AI
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Specialized training in data science algorithms, Google Gemini AI integrations, cybersecurity telemetry modeling, and OpenCV computer vision pipelines.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#161210]/85 border border-white/[0.08] hover:border-[#B87B44]/50 transition-all shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#B87B44]/25 border border-[#D97736]/40 text-[#E8C39E] flex items-center justify-center mb-5">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Core Systems &amp; Low-Level C
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Strong computer science fundamentals demonstrated by procedural C simulations (Zomato ordering, ATM banking, Coffee POS) and Java enterprise OOP modeling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
