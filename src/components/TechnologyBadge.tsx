import React from 'react';

interface TechnologyBadgeProps {
  name: string;
  size?: 'sm' | 'md';
  className?: string;
}

export const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({
  name,
  size = 'sm',
  className = '',
}) => {
  const getBadgeStyle = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes('react') || t.includes('typescript')) {
      return 'bg-blue-50 text-blue-700 border-blue-200/60';
    }
    if (t.includes('python') || t.includes('machine learning') || t.includes('data science')) {
      return 'bg-amber-50 text-amber-800 border-amber-200/60';
    }
    if (t.includes('java') || t.includes('spring')) {
      return 'bg-orange-50 text-orange-800 border-orange-200/60';
    }
    if (t === 'c' || t.includes('c language')) {
      return 'bg-slate-100 text-slate-800 border-slate-300/60';
    }
    if (t.includes('node') || t.includes('express') || t.includes('mongodb') || t.includes('supabase')) {
      return 'bg-emerald-50 text-emerald-800 border-emerald-200/60';
    }
    if (t.includes('firebase') || t.includes('groq') || t.includes('gemini')) {
      return 'bg-amber-50 text-amber-900 border-amber-200/60';
    }
    if (t.includes('html') || t.includes('css') || t.includes('tailwind')) {
      return 'bg-sky-50 text-sky-800 border-sky-200/60';
    }
    return 'bg-slate-50 text-slate-700 border-slate-200/80';
  };

  const getTechDotColor = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes('react') || t.includes('typescript')) return 'bg-blue-500';
    if (t.includes('python') || t.includes('machine learning')) return 'bg-amber-500';
    if (t.includes('java') || t.includes('spring')) return 'bg-orange-500';
    if (t === 'c' || t.includes('c language')) return 'bg-slate-600';
    if (t.includes('node') || t.includes('mongodb') || t.includes('supabase')) return 'bg-emerald-500';
    if (t.includes('firebase') || t.includes('groq') || t.includes('gemini')) return 'bg-amber-500';
    return 'bg-slate-400';
  };

  const sizeClasses = size === 'sm' 
    ? 'text-[11px] px-2.5 py-0.5 tracking-wide' 
    : 'text-xs px-3 py-1 font-medium';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono border transition-colors ${getBadgeStyle(name)} ${sizeClasses} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${getTechDotColor(name)}`} aria-hidden="true" />
      <span>{name}</span>
    </span>
  );
};
