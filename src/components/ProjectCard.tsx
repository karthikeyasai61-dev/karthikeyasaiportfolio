import React from 'react';
import type { Project } from '../types/project';
import { ExternalLink, ArrowRight, Star, Award, Sparkles, FolderGit2 } from 'lucide-react';
import { Github } from './TechIcons';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  const badge = project.badgeText || project.achievement;
  const lang = project.primaryLanguage || project.language || 'Code';

  return (
    <article className="group bg-[#161210]/85 backdrop-blur-md rounded-2xl border border-white/[0.08] hover:border-[#D97736]/60 hover:shadow-[0_8px_30px_rgba(217,119,54,0.20)] transition-all duration-300 flex flex-col h-full overflow-hidden hover:-translate-y-1">
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Card Header: Category, Language & Award Badge */}
          <div className="flex items-center justify-between gap-2 text-xs font-mono mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#F39C5A] font-medium px-2.5 py-0.5 rounded-full bg-[#8A5028]/25 border border-[#B87B44]/40">
                {project.category}
              </span>
              <span className="text-stone-300 text-[11px] hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97736]" />
                <span>{lang}</span>
              </span>
            </div>

            {/* Badge or Stars/Date */}
            {badge ? (
              <span className={`inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border shadow-sm ${
                badge.includes('Freelance')
                  ? 'bg-[#8A5028]/30 text-[#F6B17A] border-[#B87B44]/50 shadow-[#8A5028]/10'
                  : badge.includes('Prize') || badge.includes('Winner')
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-amber-500/10'
                  : 'bg-[#8A5028]/25 text-[#F39C5A] border-[#B87B44]/40 shadow-[#8A5028]/10'
              }`}>
                {badge.includes('Prize') ? (
                  <Award className="w-3 h-3 text-amber-400" />
                ) : badge.includes('Freelance') ? (
                  <Sparkles className="w-3 h-3 text-[#F6B17A]" />
                ) : (
                  <Sparkles className="w-3 h-3 text-[#F39C5A]" />
                )}
                <span>{badge}</span>
              </span>
            ) : project.stars !== undefined && project.stars > 0 ? (
              <span className="flex items-center space-x-1 text-amber-400 font-bold text-xs">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{project.stars}</span>
              </span>
            ) : project.updatedAt ? (
              <span className="text-[11px] text-stone-500 font-mono">
                {project.updatedAt}
              </span>
            ) : null}
          </div>

          {/* Project Title */}
          <h3 
            className="text-lg font-bold text-white group-hover:text-[#F39C5A] transition-colors cursor-pointer leading-snug mb-2.5"
            onClick={() => onSelectProject(project)}
          >
            {project.displayName}
          </h3>

          {/* Tagline / Description */}
          <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Bottom Section: Tech Badges & Action Toolbar */}
        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech}
                className="text-[11px] px-2.5 py-0.5 rounded-lg bg-white/[0.04] text-stone-300 border border-white/[0.06] font-mono"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] px-2 py-0.5 rounded-lg bg-white/[0.02] text-stone-500 border border-white/[0.04] font-mono">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Toolbar */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center text-xs font-semibold text-stone-200 hover:text-[#F39C5A] transition-colors group-hover:translate-x-0.5"
            >
              <span>Explore Story</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center space-x-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-1 rounded-lg border border-emerald-500/30 transition-colors"
                  title="Open live demo website"
                >
                  <span>Live</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                title={`Open ${project.name} on GitHub`}
                aria-label={`View ${project.name} repository on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
