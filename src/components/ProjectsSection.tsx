import React, { useState, useMemo } from 'react';
import type { Project, ProjectCategory } from '../types/project';
import { ProjectCard } from './ProjectCard';
import { Search, X, FolderGit2, Sparkles, Filter } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  syncSource?: 'live' | 'local-cache';
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Full Stack',
  'Frontend',
  'Backend',
  'Java',
  'C / Systems',
  'Python / AI',
  'UI / UX'
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
  syncSource = 'local-cache'
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = projects.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(query) || p.displayName.toLowerCase().includes(query);
      const matchDesc = p.description.toLowerCase().includes(query) || (p.overview || '').toLowerCase().includes(query);
      const matchTech = p.technologies.some((t) => t.toLowerCase().includes(query));
      const matchLang = (p.primaryLanguage || p.language || '').toLowerCase().includes(query);
      const matchCat = p.category.toLowerCase().includes(query);

      return matchName || matchDesc || matchTech || matchLang || matchCat;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F39C5A] mb-3 px-3 py-1 rounded-full bg-[#8A5028]/25 border border-[#B87B44]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Portfolio &bull; 21 Verified Projects</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              All {projects.length} Verified Projects
            </h2>
            <p className="text-sm sm:text-base text-stone-400 leading-relaxed">
              Every public GitHub repository, client freelance engineering project (such as Sensovec), and civic platform is individually represented below. Click on any card to explore the full story, problem/solution breakdown, verified features, and live links.
            </p>
          </div>

          {/* Sync indicator */}
          <div className="flex items-center space-x-2 text-xs font-mono text-stone-400 bg-white/[0.04] border border-white/[0.08] px-3.5 py-2 rounded-xl">
            <FolderGit2 className="w-4 h-4 text-emerald-400" />
            <span>{syncSource === 'live' ? 'Synchronized Live with GitHub' : 'Verified Project Catalog'}</span>
          </div>
        </div>

        {/* Filter and Search Toolbar */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Dynamic Project Counter */}
            <div className="flex items-baseline space-x-2.5">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                {filteredProjects.length}
              </span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-wider font-mono">
                {filteredProjects.length === 1 ? 'Project' : 'Projects'} Displayed
              </span>
              {filteredProjects.length !== projects.length && (
                <span className="text-xs text-slate-500 font-mono">
                  (out of {projects.length} total)
                </span>
              )}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, technologies..."
                className="w-full pl-9 pr-9 py-2.5 text-xs sm:text-sm bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D97736] focus:border-transparent transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
                  aria-label="Clear search input"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium font-mono whitespace-nowrap transition-all flex items-center space-x-2 border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#8A5028] to-[#D97736] text-white border-[#B87B44] shadow-md shadow-[#D97736]/30'
                      : 'bg-white/[0.04] text-stone-300 border-white/[0.08] hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-[#5C3318] text-[#FCD8B8]' : 'bg-white/[0.08] text-stone-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Responsive Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={onSelectProject}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 px-4 bg-white/[0.02] rounded-3xl border border-dashed border-white/10">
            <div className="max-w-md mx-auto space-y-3">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-stone-400 font-mono text-base font-bold">
                0
              </div>
              <h3 className="text-lg font-bold text-white">
                No matching projects found
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                No projects matched "{searchQuery}" under "{activeCategory}". Try clearing your search or switching categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-3 inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#8A5028] to-[#D97736] hover:opacity-95 transition-opacity shadow-sm"
              >
                Reset Search &amp; Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
