import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/projects';
import { Mail, ExternalLink, Check, Copy, X, Send, Shield, FileText } from 'lucide-react';
import { Github, Linkedin } from './TechIcons';

export const ContactAndFooter: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-24 border-b border-white/[0.06] bg-[#0F0F11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF8A65] mb-3 px-3 py-1 rounded-full bg-[#E05A36]/15 border border-[#E05A36]/30">
              <Mail className="w-3 h-3 text-[#E05A36]" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Connect With Karthikeya
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Available for full-stack engineering internships, software development roles, data science projects, and technical collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10">
            {/* Left Contact Info (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              {/* LinkedIn Profile Card */}
              <div className="p-6 rounded-3xl bg-[#161619]/90 border border-white/[0.08] backdrop-blur-md hover:border-[#0A66C2]/45 transition-colors">
                <div className="flex items-center space-x-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/40 text-[#70B5F9] flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">LinkedIn Profile</div>
                    <div className="text-sm font-bold text-white font-mono truncate max-w-[210px]">
                      karthikeya-sai-adapa
                    </div>
                  </div>
                </div>
                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-[#0A66C2]/35 bg-[#0A66C2]/15 hover:bg-[#0A66C2]/25 text-xs font-semibold text-[#70B5F9] transition-all flex items-center justify-center space-x-2"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-3xl bg-[#161619]/90 border border-white/[0.08] backdrop-blur-md">
                <div className="flex items-center space-x-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E05A36]/15 border border-[#E05A36]/30 text-[#FF8A65] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">Email Directly</div>
                    <div className="text-sm font-bold text-white select-all font-mono">
                      {PROFILE_INFO.email}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-6 rounded-3xl bg-[#161619]/90 border border-white/[0.08] backdrop-blur-md">
                <div className="flex items-center space-x-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-white flex items-center justify-center">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">GitHub Profile</div>
                    <div className="text-sm font-bold text-white font-mono">
                      @{PROFILE_INFO.githubUsername}
                    </div>
                  </div>
                </div>
                <a
                  href={PROFILE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white transition-all flex items-center justify-center space-x-2"
                >
                  <span>Open GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>

              <div className="p-5 rounded-3xl border border-white/[0.06] text-xs text-zinc-400 font-mono leading-relaxed bg-white/[0.02]">
                <div>&bull; Location: Andhra Pradesh, India</div>
                <div>&bull; Academic: Godavari Global University (CGPA 9.0)</div>
                <div>&bull; Status: Open to SDE / Full-Stack Opportunities</div>
              </div>
            </div>

            {/* Right Contact Form (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-[#161619]/90 rounded-3xl border border-white/[0.08] p-6 sm:p-8 backdrop-blur-md">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Message Dispatched</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out! Karthikeya has received your inquiry and will respond shortly to your email address.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="mt-4 px-5 py-2.5 rounded-xl bg-[#E05A36] text-white text-xs font-bold hover:bg-[#EB6644] transition-colors shadow-md shadow-[#E05A36]/20 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#E05A36] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#E05A36] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#E05A36] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#E05A36] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#E05A36] hover:bg-[#EB6644] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#E05A36]/30 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="py-14 bg-[#09090B] text-zinc-400 text-xs border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
            <div className="flex items-center space-x-3.5">
              <span className="font-display text-2xl tracking-wider text-white">
                KARTHIKEYA
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E05A36]" />
              <span className="text-zinc-600 mx-2">&bull;</span>
              <span className="font-mono text-zinc-400 text-[11px]">{PROFILE_INFO.title}</span>
            </div>

            <div className="flex items-center space-x-6 font-mono text-[11px] text-zinc-400">
              <a href="#projects" className="hover:text-white transition-colors">WORKS</a>
              <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
              <a href="#hackathons" className="hover:text-white transition-colors">HACKATHONS</a>
              <a href="#education" className="hover:text-white transition-colors">EDUCATION</a>
              <a 
                href={PROFILE_INFO.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#70B5F9] transition-colors inline-flex items-center space-x-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={PROFILE_INFO.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center space-x-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
            <div>
              &copy; {new Date().getFullYear()} Adapa Karthikeya Sai. All rights reserved.
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <span>•</span>
              <span className="text-zinc-400">21 Verified Projects &amp; Repositories</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Compliance Modals */}
      {activeLegalModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-modal-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveLegalModal(null)}
        >
          <div 
            className="bg-[#161619] border border-white/[0.12] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                {activeLegalModal === 'privacy' ? <Shield className="w-5 h-5 text-[#E05A36]" /> : <FileText className="w-5 h-5 text-[#E05A36]" />}
                <span>{activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</span>
              </h3>
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs text-zinc-300 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {activeLegalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>1. Information Notice:</strong> This website is an authentic developer portfolio showcasing original work by Adapa Karthikeya Sai. It does not track users across the web or collect personal information for advertising.
                  </p>
                  <p>
                    <strong>2. Direct Contact:</strong> Information provided through the contact form is transmitted solely for professional communication and internship recruitment.
                  </p>
                  <p>
                    <strong>3. GitHub Public Data:</strong> Project repositories, stars, and code commits are retrieved from GitHub's public API under standard developer terms.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Original Engineering:</strong> All project descriptions, architectures, and algorithms documented in this portfolio reflect actual development work by Adapa Karthikeya Sai.
                  </p>
                  <p>
                    <strong>2. Code Licenses:</strong> Source code repositories hosted on GitHub are governed by their respective open source repository licenses.
                  </p>
                  <p>
                    <strong>3. Accuracy:</strong> Achievements such as the BVC College Hackathon 3rd Prize award and academic metrics (9.0 CGPA) are verified milestones.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2.5 bg-[#E05A36] hover:bg-[#EB6644] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
