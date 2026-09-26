import React from 'react';
import { Search, X } from 'lucide-react';

interface ProjectSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalFiltered: number;
}

export const ProjectSearch: React.FC<ProjectSearchProps> = ({
  searchQuery,
  onSearchChange,
  totalFiltered,
}) => {
  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-charcoal-light pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search my projects by name, technology (e.g. Java, AI, React)..."
          className="w-full pl-10 pr-9 py-2 rounded-lg bg-white border border-border text-xs sm:text-sm text-charcoal placeholder:text-charcoal-light focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all shadow-2xs"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 p-0.5 text-charcoal-light hover:text-charcoal"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {searchQuery && (
        <div className="absolute left-0 -bottom-5 text-[11px] font-mono text-charcoal-light">
          Found {totalFiltered} matching {totalFiltered === 1 ? 'project' : 'projects'}
        </div>
      )}
    </div>
  );
};
