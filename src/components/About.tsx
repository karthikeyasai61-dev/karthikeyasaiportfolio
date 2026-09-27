import React from 'react';
import { UserCheck, Target, Sparkles, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const focusAreas = [
    { title: 'Full-Stack Development', desc: 'Crafting responsive client interfaces linked to resilient backend APIs and state management systems.' },
    { title: 'Frontend & UI/UX', desc: 'Designing intentional, typography-driven digital interfaces that prioritize user clarity and accessibility.' },
    { title: 'Data Science & AI', desc: 'Leveraging modern LLM inference, computer vision, and structured data analysis to solve tangible problems.' },
    { title: 'Building Practical Products', desc: 'Transforming concepts into deployed, production-ready tools with zero fluff and real-world utility.' },
  ];

  return (
    <section id="about" className="py-20 border-t border-border bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Section Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted font-semibold flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-600" />
              Background &amp; Philosophy
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-charcoal">
            About Me
          </h2>

          <div className="mt-6 space-y-4 text-base text-charcoal-muted leading-relaxed">
            <p>
              I am a B.Tech Computer Science (Data Science) undergraduate student at Godavari Global University with a passionate drive for engineering practical, high-impact digital systems. Rather than building speculative demos, I focus on shipping real software that addresses tangible communication, education, and workflow hurdles.
            </p>
            <p>
              My development philosophy centers on end-to-end craftsmanship: understanding low-level procedural programming in C, architecting object-oriented domains in Java, and deploying modern reactive web applications with TypeScript, React, Express, Next.js, and cloud databases.
            </p>
          </div>

          {/* Core Areas Bento */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="p-5 rounded-xl border border-border bg-slate-50/70 hover:border-slate-300 transition-colors shadow-2xs"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-charcoal" />
                  <h3 className="text-sm font-semibold text-charcoal">{area.title}</h3>
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed pl-3.5">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quote / Principle */}
          <div className="mt-8 p-4 rounded-xl border border-border bg-slate-50/50 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs font-mono text-charcoal-light leading-relaxed">
              "Every repository represents an honest step in understanding computer architecture, algorithmic flow, and human interaction design."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
