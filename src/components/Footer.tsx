import React from 'react';
import type { LegalDocType } from './LegalModal';
import { Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-canvas border-t border-border pt-16 pb-12 text-xs text-charcoal-muted">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-border">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-charcoal text-white font-mono font-bold text-xs flex items-center justify-center">
                KS
              </div>
              <span className="font-bold text-sm text-charcoal">
                Adapa Karthikeya Sai
              </span>
            </div>
            <p className="text-xs text-charcoal-muted max-w-sm leading-relaxed">
              B.Tech Computer Science (Data Science) student at Godavari Global University. Focused on full-stack development, modern interfaces, and building usable digital products.
            </p>
            <p className="text-[11px] font-mono text-charcoal-light">
              Location: Andhra Pradesh, India
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal font-semibold">
              Explore Portfolio
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:text-charcoal transition-colors">
                  All 18 GitHub Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-charcoal transition-colors">
                  About &amp; Philosophy
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-charcoal transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-charcoal transition-colors">
                  Education &amp; Academics
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-charcoal transition-colors">
                  Hackathon Achievements
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-charcoal transition-colors">
                  Contact &amp; Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Legal and Compliance */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal font-semibold">
              Policies &amp; Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-charcoal transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-charcoal transition-colors text-left"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('cookies')}
                  className="hover:text-charcoal transition-colors text-left"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/karthikeyasai61-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal transition-colors"
                >
                  GitHub Source Index
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-charcoal-light">
            © {new Date().getFullYear()} Adapa Karthikeya Sai. Built with React, TypeScript &amp; Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/karthikeyasai61-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-charcoal-muted hover:text-charcoal hover:bg-slate-100 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/karthikeyasai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-charcoal-muted hover:text-charcoal hover:bg-slate-100 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 shrink-0 fill-current text-blue-700" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a
              href="mailto:karthikeyasai61@gmail.com"
              className="p-1.5 rounded-lg text-charcoal-muted hover:text-charcoal hover:bg-slate-100 transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-charcoal-light hover:text-charcoal px-2.5 py-1 rounded border border-border hover:border-slate-300 ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3 h-3" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
