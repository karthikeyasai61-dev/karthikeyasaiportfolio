import type { Project, ProjectCategory } from '../types/project';
import { INITIAL_PROJECTS } from '../data/projects';

const GITHUB_USERNAME = 'karthikeyasai61-dev';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;

interface RawGitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  topics: string[];
  fork: boolean;
}

function inferCategoryFromRepo(repo: RawGitHubRepo): ProjectCategory {
  const lang = (repo.language || '').toLowerCase();
  const name = repo.name.toLowerCase();
  const desc = (repo.description || '').toLowerCase();

  if (name.includes('java') || lang === 'java') return 'Java';
  if (lang === 'python' || name.includes('ai') || desc.includes('machine learning') || desc.includes('groq')) return 'Data / AI';
  if (lang === 'c' || name.includes('-using-c') || name.includes('c-project')) return 'Backend';
  if (name.includes('flipkart') || name.includes('amazon') || name.includes('skyfit') || name.includes('ui')) return 'UI / UX';
  if (desc.includes('full-stack') || desc.includes('full stack') || name.includes('gramsetu') || name.includes('skillbridge') || name.includes('bloodconnect') || name.includes('innovator')) return 'Full Stack';
  if (lang === 'typescript' || lang === 'javascript' || lang === 'html' || lang === 'css') return 'Frontend';
  return 'Other';
}

function formatDisplayName(name: string): string {
  return name
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function fetchAllProjects(): Promise<{ projects: Project[]; fromLiveGitHub: boolean }> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout for snappy UX

    const response = await fetch(GITHUB_API_URL, {
      signal: controller.signal,
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`GitHub API returned status ${response.status}. Using verified local repository catalogue.`);
      return { projects: INITIAL_PROJECTS, fromLiveGitHub: false };
    }

    const repos: RawGitHubRepo[] = await response.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      return { projects: INITIAL_PROJECTS, fromLiveGitHub: false };
    }

    // Map existing initial projects by lowercase name for fast lookup
    const initialMap = new Map<string, Project>();
    for (const p of INITIAL_PROJECTS) {
      initialMap.set(p.name.toLowerCase(), p);
    }

    const mergedProjects: Project[] = [];
    const seenNames = new Set<string>();

    // 1. Process all repositories from GitHub API
    for (const repo of repos) {
      const lowerName = repo.name.toLowerCase();
      seenNames.add(lowerName);

      const existing = initialMap.get(lowerName);

      if (existing) {
        // Enrich with latest live stars, dates, and liveUrl if available
        mergedProjects.push({
          ...existing,
          stars: typeof repo.stargazers_count === 'number' ? repo.stargazers_count : existing.stars,
          forks: typeof repo.forks_count === 'number' ? repo.forks_count : existing.forks,
          updatedAt: repo.updated_at ? repo.updated_at.split('T')[0] : existing.updatedAt,
          liveUrl: repo.homepage || existing.liveUrl,
        });
      } else {
        // Discovered a new repository not in initial list! Generate project card dynamically
        const category = inferCategoryFromRepo(repo);
        const displayName = formatDisplayName(repo.name);
        const description = repo.description || `Public repository showcasing ${repo.language || 'software'} implementation by Adapa Karthikeya Sai.`;

        mergedProjects.push({
          id: repo.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
          name: repo.name,
          displayName,
          tagline: description,
          description,
          longDescription: `${displayName} is an open-source project hosted on GitHub, written primarily in ${repo.language || 'modern software technologies'}.`,
          problem: 'Addressing technical challenges and workflow optimization through code.',
          solution: 'Developed modular architecture adhering to modern software engineering patterns.',
          githubUrl: repo.html_url,
          liveUrl: repo.homepage || undefined,
          technologies: [repo.language || 'Code', ...(repo.topics || [])].filter(Boolean),
          techCategories: {
            backend: repo.language ? [repo.language] : [],
            aiAndTools: ['Git', 'GitHub']
          },
          language: repo.language || undefined,
          features: [
            `Built with ${repo.language || 'standard technologies'}`,
            'Public GitHub source code with commit history',
            'Structured repository layout and clean codebase'
          ],
          category,
          featured: false,
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
          updatedAt: repo.updated_at ? repo.updated_at.split('T')[0] : undefined,
          createdAt: repo.created_at ? repo.created_at.split('T')[0] : undefined,
          previewType: 'code'
        });
      }
    }

    // 2. Ensure any initial project not returned by API (e.g., if page size cutoff or temporary issue) is preserved
    for (const p of INITIAL_PROJECTS) {
      if (!seenNames.has(p.name.toLowerCase())) {
        mergedProjects.push(p);
      }
    }

    return { projects: mergedProjects, fromLiveGitHub: true };
  } catch (error) {
    console.warn('Network issue fetching GitHub repos. Using offline-ready local catalogue.', error);
    return { projects: INITIAL_PROJECTS, fromLiveGitHub: false };
  }
}

export interface GitHubSyncStatus {
  synced: boolean;
  repoCount: number;
  lastChecked: string;
  source: 'live' | 'local-cache';
}

export async function fetchGitHubProjects(): Promise<{ projects: Project[]; status: GitHubSyncStatus }> {
  const result = await fetchAllProjects();
  return {
    projects: result.projects,
    status: {
      synced: result.fromLiveGitHub,
      repoCount: result.projects.length,
      lastChecked: new Date().toLocaleTimeString(),
      source: result.fromLiveGitHub ? 'live' : 'local-cache'
    }
  };
}
