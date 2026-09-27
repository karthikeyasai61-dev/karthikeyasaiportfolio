import React, { useEffect } from 'react';
import { X, Shield, FileText, Cookie } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'cookies' | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [type, onClose]);

  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      icon: Shield,
      updated: 'October 2025',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          <p>
            This portfolio website is operated by <strong>Adapa Karthikeya Sai</strong>. I respect your privacy and am committed to maintaining transparent data practices.
          </p>
          <h4 className="text-xs font-bold text-charcoal font-mono uppercase tracking-wider mt-3">Information Collected</h4>
          <p>
            When you contact me using the contact form, the name, email address, and message content you provide are used solely to review and respond to your inquiry. No personal data is sold, monetized, or shared with third-party advertising networks.
          </p>
          <h4 className="text-xs font-bold text-charcoal font-mono uppercase tracking-wider mt-3">External Links &amp; GitHub API</h4>
          <p>
            This website provides direct links to repositories hosted on GitHub. Browsing third-party platforms is subject to their respective terms and privacy policies.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      updated: 'October 2025',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          <p>
            By accessing the portfolio of <strong>Adapa Karthikeya Sai</strong>, you agree to these fair usage terms.
          </p>
          <h4 className="text-xs font-bold text-charcoal font-mono uppercase tracking-wider mt-3">Open Source Intellectual Property</h4>
          <p>
            All code repositories linked on this site are open-source and subject to their respective GitHub project licenses. You are welcome to inspect, reference, and learn from my public codebases.
          </p>
          <h4 className="text-xs font-bold text-charcoal font-mono uppercase tracking-wider mt-3">Accurate Portfolio Record</h4>
          <p>
            All achievements, competition rankings (such as Gram Setu 3rd Prize), and academic metrics documented here reflect verified student records from Godavari Global University.
          </p>
        </div>
      ),
    },
    cookies: {
      title: 'Cookie Policy',
      icon: Cookie,
      updated: 'October 2025',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          <p>
            This portfolio website is strictly privacy-first.
          </p>
          <h4 className="text-xs font-bold text-charcoal font-mono uppercase tracking-wider mt-3">Zero Tracking Cookies</h4>
          <p>
            This site does not employ invasive advertising tracking cookies or third-party behavioral profiling trackers.
          </p>
          <h4 className="text-xs font-bold text-charcoal font-mono uppercase tracking-wider mt-3">Local Storage</h4>
          <p>
            Essential client-side preferences (such as repository filtering state and session caching) may temporarily utilize browser memory to deliver responsive performance.
          </p>
        </div>
      ),
    },
  };

  const currentDoc = contentMap[type];
  const Icon = currentDoc.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-surface rounded-2xl border border-border shadow-modal p-6 md:p-8 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-border mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-slate-100 text-charcoal">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-charcoal">{currentDoc.title}</h3>
              <p className="text-[10px] font-mono text-charcoal-light">Last reviewed: {currentDoc.updated}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-charcoal-muted hover:text-charcoal rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto pr-1">
          {currentDoc.body}
        </div>

        <div className="mt-6 pt-4 border-t border-border flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-charcoal text-white text-xs font-medium hover:bg-charcoal-muted transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
