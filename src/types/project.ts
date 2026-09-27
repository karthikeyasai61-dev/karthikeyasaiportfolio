export type ProjectCategory = 
  | 'All' 
  | 'Full Stack' 
  | 'Frontend' 
  | 'Backend' 
  | 'Java' 
  | 'C / Systems' 
  | 'Python'
  | 'Python / AI' 
  | 'Data / AI' 
  | 'UI / UX' 
  | 'Other';

export interface TechStackCategories {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  aiAndTools?: string[];
}

export interface ArchitectureStep {
  step: number;
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  name: string;
  displayName: string;
  tagline: string;
  description: string;
  longDescription?: string;
  overview?: string;
  problem: string;
  solution: string;
  keyFeatures?: string[];
  features?: string[];
  githubUrl: string;
  liveUrl?: string;
  primaryLanguage?: string;
  language?: string;
  technologies: string[];
  techCategories?: TechStackCategories;
  category: ProjectCategory;
  stars?: number;
  forks?: number;
  updatedAt?: string;
  createdAt?: string;
  featured?: boolean;
  achievement?: string;
  badgeText?: string;
  architectureWorkflow?: ArchitectureStep[];
  architecture?: {
    nodes: string[];
    description: string;
  };
  filesSnippet?: string[];
  previewType?: 'dashboard' | 'mobile' | 'code' | 'terminal' | 'network' | 'ecommerce';
  visualTheme?: 'indigo' | 'emerald' | 'amber' | 'slate' | 'cyan' | 'rose' | 'teal' | 'burgundy' | 'brown';
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    projectsUsedIn: string[];
  }[];
}

export interface Achievement {
  title: string;
  role: 'Winner' | 'Participated' | 'Academic' | 'Certification';
  event: string;
  date: string;
  badge: string;
  description: string;
  verified: boolean;
  projectLink?: string;
}

export interface HackathonItem {
  id: string;
  order: string; // '01', '02', '03', '04', '05', '06'
  name: string;
  organization: string;
  status: '3rd Prize' | 'Participated';
  isAward: boolean;
  badge: string;
  experienceText: string;
  summary: string;
  projectLink?: string;
}

export type LegalDocType = 'privacy' | 'terms' | 'cookies' | null;

export const TYPES_LOADED = true;
