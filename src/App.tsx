import React, { useState, useEffect } from 'react';
import type { Project } from './types/project';
import { ALL_PROJECTS } from './data/projects';
import { fetchGitHubProjects, GitHubSyncStatus } from './services/github';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AboutAndSkills } from './components/AboutAndSkills';
import { HackathonsSection } from './components/HackathonsSection';
import { EducationSection } from './components/EducationSection';
import { ContactAndFooter } from './components/ContactAndFooter';
import { Sparkles } from 'lucide-react';

export function App() {
  const [projects, setProjects] = useState<Project[]>(ALL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [syncStatus, setSyncStatus] = useState<GitHubSyncStatus>({
    synced: false,
    repoCount: ALL_PROJECTS.length,
    lastChecked: '',
    source: 'local-cache'
  });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Attempt asynchronous synchronization with GitHub API
    fetchGitHubProjects().then(({ projects: updatedProjects, status }) => {
      setProjects(updatedProjects);
      setSyncStatus(status);
      if (status.synced) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4500);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F11] text-zinc-100 flex flex-col font-sans selection:bg-[#E05A36] selection:text-white relative">
      {/* Toast Notification for GitHub Live Sync */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-[#18181B]/95 border border-[#E05A36]/40 text-[#FF8A65] text-xs font-mono shadow-2xl backdrop-blur-xl flex items-center gap-2.5 animate-modal-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Synced {projects.length} repositories &amp; projects live</span>
        </div>
      )}

      {/* Modern Navbar */}
      <Navbar projectCount={projects.length} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero projectCount={projects.length} />

        {/* Dedicated 21 Projects Catalog Section */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          syncSource={syncStatus.source}
        />

        {/* About & Verified Technical Skills */}
        <AboutAndSkills />

        {/* Dedicated Hackathons & Competitions Section */}
        <HackathonsSection />

        {/* Education & Academic Foundation */}
        <EducationSection />

        {/* Contact Form & Footer with Legal Modals */}
        <ContactAndFooter />
      </main>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
