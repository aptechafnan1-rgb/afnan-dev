import React, { useState, useEffect } from 'react';
import { Send, Mail, CheckCircle2, Copy, Check, MessageSquare, ArrowRight, Phone } from 'lucide-react';

interface ContactSectionProps {
  initialMessage?: string;
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialMessage = '',
  initialService = 'Website Development',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService);
  const [budget, setBudget] = useState('$500 - $1,500');
  const [message, setMessage] = useState(initialMessage);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('aptechafnan1@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#040713] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            Initiate Collaboration · Fast Response
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-outfit">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Have a project in mind or need expert technical consultation? Send a proposal inquiry or reach out directly. Typical response time is under 4 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct channels & Quick Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#070c1e] p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white font-outfit mb-4">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Connect directly with lead web engineer Afnan. Flexible on timezones (EST, GMT, PKT, GST) for agile remote collaboration.
              </p>

              {/* Email item with copy button */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs text-slate-400">Official Email</div>
                    <a
                      href="mailto:aptechafnan1@gmail.com"
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      aptechafnan1@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Fast Connect Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://wa.me/?text=Hi%20Afnan,%20I%20would%20like%20to%20discuss%20a%20web%20development%20project"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-emerald-400 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-all"
                >
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>Telegram Direct</span>
                </a>
              </div>
            </div>

            {/* Quick Consultation Promise Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm font-outfit">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero-Risk Engagement</span>
              </div>
              <p>
                Every proposal comes with a 100% free discovery call, architectural breakdown, milestone escrow security, and a 30-day post-launch warranty.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7 bg-[#070c1e] p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-outfit">
                  Proposal Inquiry Received!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{name}</span>. Your project inquiry has been queued with highest priority. Afnan will review your requirements and respond back to <span className="text-cyan-400 font-mono">{email}</span> within 4 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service Scope
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition-colors"
                    >
                      <option value="Website Development">Website Development (Business / E-Com / Portfolio)</option>
                      <option value="Custom Web Solutions">Custom Web Solutions (SaaS / Full-Stack)</option>
                      <option value="Website Maintenance">Website Maintenance &amp; Speed Optimization</option>
                      <option value="Technical Consultation">Technical Consultation &amp; System Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Target Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition-colors"
                    >
                      <option value="Under $500">&lt; $500 (Basic)</option>
                      <option value="$500 - $1,500">$500 – $1,500 (Standard)</option>
                      <option value="$1,500 - $3,500">$1,500 – $3,500 (Advanced)</option>
                      <option value="$3,500+">$3,500+ (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Details &amp; Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your goals, required features, timeline, and any design references..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Proposal Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
