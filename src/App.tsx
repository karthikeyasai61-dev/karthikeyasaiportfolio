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
import bgVideo from './assets/background.mp4';

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
      {/* Global Background Ambient Video - Bright, Vivid & Slow Motion */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 select-none">
        <video
          ref={(el) => {
            if (el) {
              el.defaultMuted = true;
              el.muted = true;
              el.playbackRate = 0.5; // Smooth slow motion (50% speed)
              el.play().catch(() => {});
            }
          }}
          autoPlay
          loop
          muted
          playsInline
          src={bgVideo || '/background.mp4'}
          className="w-full h-full object-cover opacity-60 filter brightness-110 contrast-115"
        >
          <source src={bgVideo} type="video/mp4" />
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* Light veil so video is clearly visible and vivid while maintaining sharp text readability */}
        <div className="absolute inset-0 bg-[#0F0F11]/40" />
      </div>

      {/* Main Content Area Layered Above Background Video */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Toast Notification for GitHub Live Sync */}
        {showToast && (
          <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-[#18181B]/95 border border-[#E05A36]/40 text-[#FF8A65] text-xs font-mono shadow-2xl backdrop-blur-xl flex items-center gap-2.5 animate-modal-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Synced {projects.length} repositories &amp; projects live</span>
          </div>
        )}

        {/* Modern Navbar */}
        <Navbar projectCount={projects.length} />

        {/* Main Content Sections */}
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
    </div>
  );
}

export default App;
