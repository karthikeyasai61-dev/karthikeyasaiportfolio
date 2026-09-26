import React from 'react';
import { TechnologyBadge } from './TechnologyBadge';
import { Terminal, Layout, Server, BrainCircuit, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Terminal,
      description: 'Core languages used across systems programming, scripting, and web logic.',
      skills: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      title: 'Frontend Engineering',
      icon: Layout,
      description: 'Frameworks and design methodologies for building interactive interfaces.',
      skills: ['React', 'Angular', 'Vite', 'Next.js', 'Tailwind CSS', 'CSS Modules'],
    },
    {
      title: 'Backend & Systems',
      icon: Server,
      description: 'Server runtimes, REST architectural services, and enterprise frameworks.',
      skills: ['Node.js', 'Express', 'Spring', 'REST APIs', 'PostgreSQL', 'Drizzle ORM'],
    },
    {
      title: 'Data & Artificial Intelligence',
      icon: BrainCircuit,
      description: 'Machine learning applications, structured data analysis, and LLM inference.',
      skills: ['Data Science', 'Machine Learning', 'AI', 'Google Gemini AI', 'Groq LPU', 'Computer Vision'],
    },
    {
      title: 'Tools & Infrastructure',
      icon: Wrench,
      description: 'Development pipelines, databases, version control, and design tooling.',
      skills: ['Git', 'GitHub', 'Figma', 'Firebase', 'MongoDB', 'Supabase', 'Netlify'],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-border bg-canvas">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted font-semibold">
            Technical Competencies
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal mt-2">
            Skills &amp; Capabilities
          </h2>
          <p className="mt-2 text-sm text-charcoal-muted leading-relaxed">
            Every technology listed below is verified by active code, repository commits, and functional prototypes within my public development portfolio.
          </p>
        </div>

        {/* Categorized Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-6 rounded-xl border border-border bg-white shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-charcoal">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-charcoal">{cat.title}</h3>
                  </div>
                  <p className="text-xs text-charcoal-muted mb-4 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-subtle">
                  {cat.skills.map((skill) => (
                    <TechnologyBadge key={skill} name={skill} size="md" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
