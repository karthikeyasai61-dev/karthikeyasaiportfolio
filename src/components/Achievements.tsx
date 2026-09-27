import React from 'react';
import { Award, Trophy, CheckCircle, ExternalLink } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Gram Setu — Rural Civic Connectivity',
      event: 'Hackathon Innovation Competition',
      result: '3rd Prize — Hackathon Winner',
      isWinner: true,
      description: 'Awarded 3rd Prize for developing an accessible rural assistance platform integrating localized dialect speech translation, text assistance, and real-time WebRTC video calling.',
      tag: 'Award Winner',
      projectLink: '#projects',
    },
    {
      title: 'Google Developer Hackathon',
      event: 'Google Developer Student Clubs & Developer Ecosystem',
      result: 'Participated',
      isWinner: false,
      description: 'Participated in building rapid cloud-native and AI-assisted prototypes under competitive time constraints with Google technologies.',
      tag: 'Verified Participant',
    },
    {
      title: 'IBM National Hackathon',
      event: 'IBM National Computing & Enterprise Challenge',
      result: 'Participated',
      isWinner: false,
      description: 'Tackled national engineering challenges utilizing cloud architecture, data pipelines, and intelligent operational modeling.',
      tag: 'Verified Participant',
    },
  ];

  return (
    <section id="achievements" className="py-20 border-t border-border bg-canvas">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted font-semibold">
            Competitive Recognition
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal mt-2">
            Hackathons &amp; Achievements
          </h2>
          <p className="mt-2 text-sm text-charcoal-muted leading-relaxed">
            Verified competitive programming and hackathon records. Participation and winning awards are documented transparently without exaggerated claims.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className={`p-6 rounded-xl border flex flex-col justify-between transition-all duration-200 ${
                item.isWinner
                  ? 'bg-amber-50/50 border-amber-200/90 shadow-subtle'
                  : 'bg-white border-border shadow-subtle'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold ${
                      item.isWinner
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {item.isWinner ? (
                      <Trophy className="w-3 h-3 text-amber-700" />
                    ) : (
                      <CheckCircle className="w-3 h-3 text-slate-500" />
                    )}
                    {item.result}
                  </span>

                  <span className="text-[10px] font-mono text-charcoal-light">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-charcoal tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-charcoal-light mt-1">
                  {item.event}
                </p>

                <p className="mt-3 text-xs text-charcoal-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.projectLink && (
                <div className="mt-6 pt-4 border-t border-amber-200/60 flex items-center justify-between">
                  <a
                    href={item.projectLink}
                    className="text-xs font-medium text-amber-900 hover:text-amber-950 inline-flex items-center gap-1"
                  >
                    <span>View Gram Setu in Projects</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
