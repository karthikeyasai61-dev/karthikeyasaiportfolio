import React, { useEffect } from 'react';
import type { Project } from '../types/project';
import { TechnologyBadge } from './TechnologyBadge';
import { GitHubButton } from './GitHubButton';
import { ProjectVisual } from './ProjectVisual';
import { 
  X, 
  ExternalLink, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Star, 
  GitFork, 
  ArrowRight
} from 'lucide-react';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const badgeLabel = project.achievement || project.badgeText;
  const isAward = badgeLabel && (badgeLabel.includes('Prize') || badgeLabel.includes('Winner'));
  const descriptionText = project.longDescription || project.overview || project.description;
  const featuresList = project.features || project.keyFeatures || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-charcoal/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-surface rounded-2xl border border-border shadow-modal animate-slide-up flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 border-b border-border backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-charcoal-muted uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            {badgeLabel && (
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  isAward
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-slate-100 text-slate-800 border border-slate-200'
                }`}
              >
                {isAward && <Award className="w-3.5 h-3.5 text-amber-700" />}
                {badgeLabel}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-block font-mono text-[11px] text-charcoal-light border border-border rounded px-1.5 py-0.5 bg-slate-50">
              ESC
            </kbd>
            <button
              onClick={onClose}
              className="p-1.5 text-charcoal-muted hover:text-charcoal rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Title and Metadata */}
          <div>
            <h2 id="project-title" className="text-2xl md:text-3xl font-bold text-charcoal tracking-tight">
              {project.displayName}
            </h2>
            <p className="mt-2 text-base text-charcoal-muted leading-relaxed">
              {project.tagline}
            </p>

            {/* Quick stats ribbon */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-charcoal-light pt-3 border-t border-border-subtle">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Updated: {project.updatedAt || 'Recent'}
              </span>
              {(project.language || project.primaryLanguage) && (
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-600" />
                  Primary: {project.language || project.primaryLanguage}
                </span>
              )}
              {project.stars !== undefined && project.stars > 0 && (
                <span className="flex items-center gap-1 text-amber-600 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  {project.stars} {project.stars === 1 ? 'Star' : 'Stars'}
                </span>
              )}
              {project.forks !== undefined && project.forks > 0 && (
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5" />
                  {project.forks} Forks
                </span>
              )}
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="rounded-xl border border-border overflow-hidden bg-slate-100">
            <ProjectVisual project={project} detailed={true} />
          </div>

          {/* Overview */}
          <section>
            <h3 className="text-sm font-mono uppercase tracking-wider text-charcoal-light font-semibold mb-2">
              Overview
            </h3>
            <p className="text-sm md:text-base text-charcoal-muted leading-relaxed">
              {descriptionText}
            </p>
          </section>

          {/* Problem & Solution Dual Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-border bg-slate-50/70">
              <h4 className="text-xs font-mono uppercase tracking-wider text-charcoal-light font-semibold mb-2">
                The Problem
              </h4>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-border bg-slate-50/70">
              <h4 className="text-xs font-mono uppercase tracking-wider text-charcoal-light font-semibold mb-2">
                The Solution
              </h4>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          {featuresList.length > 0 && (
            <section>
              <h3 className="text-sm font-mono uppercase tracking-wider text-charcoal-light font-semibold mb-3">
                Key Features
              </h3>
              <ul className="space-y-2.5">
                {featuresList.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Architecture / Workflow */}
          {project.architecture ? (
            <section className="p-5 rounded-xl border border-border bg-white shadow-subtle">
              <h3 className="text-sm font-mono uppercase tracking-wider text-charcoal-light font-semibold mb-3">
                Architecture &amp; Workflow
              </h3>
              <p className="text-xs text-charcoal-muted mb-4 font-mono leading-relaxed">
                {project.architecture.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {project.architecture.nodes.map((node, i) => (
                  <React.Fragment key={node}>
                    <div className="px-3 py-1.5 rounded-lg border border-border bg-slate-50 text-xs font-mono text-charcoal font-medium">
                      {node}
                    </div>
                    {i < (project.architecture?.nodes.length ?? 0) - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-charcoal-light shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </section>
          ) : project.architectureWorkflow && project.architectureWorkflow.length > 0 ? (
            <section className="p-5 rounded-xl border border-border bg-white shadow-subtle">
              <h3 className="text-sm font-mono uppercase tracking-wider text-charcoal-light font-semibold mb-3">
                Architecture &amp; Workflow
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.architectureWorkflow.map((step) => (
                  <div key={step.step} className="p-3.5 rounded-lg bg-slate-50 border border-border">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-charcoal text-white font-mono text-[10px] flex items-center justify-center font-bold">
                        {step.step}
                      </span>
                      <h4 className="text-xs font-semibold text-charcoal">{step.title}</h4>
                    </div>
                    <p className="text-[11px] text-charcoal-muted leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* Technology Stack */}
          <section>
            <h3 className="text-sm font-mono uppercase tracking-wider text-charcoal-light font-semibold mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <TechnologyBadge key={t} name={t} size="md" />
              ))}
            </div>
          </section>

          {/* Action Links */}
          <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <GitHubButton
                url={project.githubUrl}
                label="View on GitHub"
                variant="primary"
              />

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-border text-charcoal text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors active:scale-[0.99]"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-charcoal-muted hover:text-charcoal font-medium underline underline-offset-4"
            >
              Back to all projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
