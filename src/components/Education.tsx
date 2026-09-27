import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-border bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted font-semibold">
            Academic Background
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal mt-2">
            Education
          </h2>
        </div>

        {/* Compact Education Card */}
        <div className="max-w-3xl p-6 sm:p-8 rounded-2xl border border-border bg-slate-50/60 shadow-subtle">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-charcoal text-white shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-charcoal tracking-tight">
                  B.Tech — Computer Science (Data Science)
                </h3>
                <p className="text-sm font-medium text-charcoal-muted mt-0.5">
                  Godavari Global University
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-mono text-charcoal-light">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Current Stage: 3rd Year
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-charcoal bg-white px-2 py-0.5 rounded border border-border">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    CGPA: 9.0
                  </span>
                </div>
              </div>
            </div>

            <span className="self-start inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              Currently Enrolled
            </span>
          </div>

          <div className="mt-6 pt-5 border-t border-border-subtle text-xs text-charcoal-muted leading-relaxed">
            <p>
              Core coursework covers Data Structures &amp; Algorithms, Object-Oriented Analysis, Machine Learning Foundations, Database Management Systems, Computer Networks, and Statistical Methods for Data Science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
