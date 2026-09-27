import React from 'react';
import type { ProjectCategory } from '../types/project';

interface ProjectFiltersProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  categoryCounts: Record<string, number>;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        const count = categoryCounts[cat] || 0;

        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 ${
              isActive
                ? 'bg-charcoal text-white shadow-subtle'
                : 'bg-white text-charcoal-muted border border-border hover:border-slate-300 hover:text-charcoal'
            }`}
          >
            <span>{cat}</span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-charcoal-light'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
