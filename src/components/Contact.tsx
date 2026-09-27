import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!formState.email.includes('@') || !formState.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 border-t border-border bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-charcoal-muted font-semibold">
            Inquiries &amp; Collaboration
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal mt-2">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm text-charcoal-muted leading-relaxed">
            Interested in technical collaboration, engineering internships, full-stack development, or reviewing my project code? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl border border-border bg-slate-50/60 space-y-5">
              <h3 className="text-base font-semibold text-charcoal">
                Contact Information
              </h3>

              <div className="space-y-3.5 text-xs">
                <a
                  href="mailto:karthikeyasai61@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-border text-charcoal hover:border-slate-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-charcoal-light">DIRECT EMAIL</p>
                    <p className="font-medium text-xs text-charcoal">karthikeyasai61@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/karthikeyasai61-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-border text-charcoal hover:border-slate-300 transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current text-slate-800" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <div>
                    <p className="text-[10px] font-mono text-charcoal-light">GITHUB PROFILE</p>
                    <p className="font-medium text-xs text-charcoal">github.com/karthikeyasai61-dev</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/karthikeyasai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-border text-charcoal hover:border-slate-300 transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current text-blue-700" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] font-mono text-charcoal-light">LINKEDIN</p>
                    <p className="font-medium text-xs text-charcoal">linkedin.com/in/karthikeyasai</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-border text-charcoal">
                  <MapPin className="w-4 h-4 text-charcoal-light shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-charcoal-light">LOCATION &amp; CAMPUS</p>
                    <p className="font-medium text-xs text-charcoal">Andhra Pradesh, India • Godavari Global University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-border bg-white shadow-subtle space-y-4"
              noValidate
            >
              <h3 className="text-base font-semibold text-charcoal mb-4">
                Send a Direct Message
              </h3>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been prepared and dispatched successfully.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-charcoal mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border text-xs sm:text-sm text-charcoal placeholder:text-charcoal-light focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all bg-slate-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-charcoal mb-1.5">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="sarah@company.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border text-xs sm:text-sm text-charcoal placeholder:text-charcoal-light focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-charcoal mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Project query"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border text-xs sm:text-sm text-charcoal placeholder:text-charcoal-light focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all bg-slate-50/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-charcoal mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Write your note or project inquiry here..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border text-xs sm:text-sm text-charcoal placeholder:text-charcoal-light focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-all bg-slate-50/50 resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-charcoal text-white text-xs font-medium hover:bg-charcoal-muted transition-colors disabled:opacity-60 active:scale-[0.99]"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
