import React, { useEffect } from 'react';
import type { Project } from '../types/project';
import { 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Star, 
  GitFork, 
  Code2, 
  Sparkles, 
  Layers, 
  FileCode, 
  Workflow, 
  Award 
} from 'lucide-react';
import { Github } from './TechIcons';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const badge = project.badgeText || project.achievement;
  const features = project.keyFeatures || project.features || [];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-modal-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div 
        className="bg-[#161619] border border-white/[0.12] rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col relative text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-[#161619]/95 backdrop-blur-xl px-6 sm:px-8 py-4 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#E05A36]/15 text-[#FF8A65] border border-[#E05A36]/30">
              {project.category}
            </span>
            {badge && (
              <span className={`inline-flex items-center gap-1 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                badge.includes('Freelance')
                  ? 'bg-[#E05A36]/20 text-[#FF8A65] border-[#E05A36]/40'
                  : badge.includes('Prize') || badge.includes('Winner')
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-[#E05A36]/15 text-[#FF8A65] border-[#E05A36]/30'
              }`}>
                {badge.includes('Prize') ? (
                  <Award className="w-3 h-3 text-amber-400" />
                ) : badge.includes('Freelance') ? (
                  <Sparkles className="w-3 h-3 text-[#FF8A65]" />
                ) : (
                  <Sparkles className="w-3 h-3 text-[#FF8A65]" />
                )}
                <span>{badge}</span>
              </span>
            )}
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
              {project.name}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Heading & Tagline */}
          <div>
            <h2 id="modal-project-title" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              {project.displayName}
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 pb-6 border-b border-white/[0.08]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-bold transition-all shadow-md"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition-all shadow-md shadow-emerald-600/20"
              >
                <span>Live Demo ({project.liveUrl.replace('https://', '')})</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <div className="flex items-center space-x-4 text-xs text-zinc-400 font-mono ml-auto">
              {project.stars !== undefined && project.stars > 0 && (
                <span className="flex items-center space-x-1 text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{project.stars} Stars</span>
                </span>
              )}
              {project.forks !== undefined && (
                <span className="flex items-center space-x-1 text-zinc-400">
                  <GitFork className="w-3.5 h-3.5" />
                  <span>{project.forks} Forks</span>
                </span>
              )}
              {project.updatedAt && (
                <span>Updated: {project.updatedAt}</span>
              )}
            </div>
          </div>

          {/* Problem & Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-[#FF8A65] font-mono mb-2.5">
                <span>01 &bull; The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-emerald-400 font-mono mb-2.5">
                <span>02 &bull; Implemented Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Detailed Overview Story */}
          {project.overview && (
            <div>
              <h3 className="text-sm uppercase tracking-wider font-bold text-zinc-200 font-mono mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#E05A36]" />
                <span>Project Narrative &amp; Overview</span>
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed bg-white/[0.02] border border-white/[0.08] p-5 sm:p-6 rounded-2xl">
                {project.overview}
              </p>
            </div>
          )}

          {/* Key Verified Features */}
          {features.length > 0 && (
            <div>
              <h3 className="text-sm uppercase tracking-wider font-bold text-zinc-200 font-mono mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Features in Repository</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feat, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-zinc-300 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-bold text-zinc-200 font-mono mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#FF8A65]" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] text-zinc-200 border border-white/[0.08] font-mono text-xs font-semibold"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E05A36]" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Architecture / Workflow */}
          {project.architectureWorkflow && project.architectureWorkflow.length > 0 && (
            <div>
              <h3 className="text-sm uppercase tracking-wider font-bold text-zinc-200 font-mono mb-3 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[#E05A36]" />
                <span>System Architecture &amp; Pipeline</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {project.architectureWorkflow.map((step) => (
                  <div key={step.step} className="p-4 rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#E05A36] text-white font-mono text-xs flex items-center justify-center font-bold">
                        {step.step}
                      </span>
                      <h4 className="text-xs font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Discovered Repository Files */}
          {project.filesSnippet && project.filesSnippet.length > 0 && (
            <div className="bg-[#0F0F11] rounded-2xl p-5 border border-white/[0.08] font-mono text-xs">
              <div className="text-zinc-400 text-[11px] mb-3 flex justify-between items-center">
                <span className="flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-[#FF8A65]" />
                  <span>Verified Git File Tree</span>
                </span>
                <span className="text-emerald-400">Direct From Repository</span>
              </div>
              <div className="flex flex-wrap gap-2 text-zinc-300">
                {project.filesSnippet.map((file, idx) => (
                  <span key={idx} className="bg-white/[0.04] px-3 py-1 rounded-lg border border-white/[0.06] text-zinc-300 text-[11px]">
                    {file}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Bar */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs text-zinc-500 font-mono truncate max-w-sm">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF8A65] hover:underline">
                {project.githubUrl}
              </a>
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-bold text-white transition-colors cursor-pointer"
            >
              Back to Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
