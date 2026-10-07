import React, { useState } from 'react';
import { PageShell, PageRoute } from './PageShell';
import { ChevronDown, Search, HelpCircle, Cpu, Zap, Lock, CreditCard } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
  cat: 'hardware' | 'minutes' | 'privacy' | 'billing' | 'workflow';
}

const FAQ_DATA: FaqItem[] = [
  {
    q: "Do I need an expensive graphics card to use ClipVault?",
    a: "No! ClipVault runs reliably on modern multi-core CPUs (Intel Core i5/i7/i9 or AMD Ryzen). However, if an NVIDIA RTX GPU is detected, ClipVault automatically utilizes hardware NVENC acceleration to render your clips up to 10x faster.",
    cat: 'hardware',
  },
  {
    q: "How do unlimited processing minutes work?",
    a: "Because ClipVault renders footage locally on your workstation rather than on expensive cloud servers, there are zero monthly minute meters, queue delays, or surprise overage bills. You can generate clips from 1 hour, 5 hours, or 10 hours of video without hitting limits.",
    cat: 'minutes',
  },
  {
    q: "Are my video files, audio, and transcripts kept private?",
    a: "Yes, 100%. Your raw video files, generated clips, and subtitle text never leave your computer or touch our servers. ClipVault operates with a strict Zero-Ingestion architecture.",
    cat: 'privacy',
  },
  {
    q: "How does the BYOK (Bring Your Own Key) AI work?",
    a: "ClipVault connects directly from your workstation to your chosen AI provider (Google Gemini 2.5 Flash, Groq, or OpenAI). We never proxy your requests or charge markups on token usage. Free tier keys from Gemini provide essentially free clip discovery.",
    cat: 'workflow',
  },
  {
    q: "Can I use the exported clips for commercial client work and monetized channels?",
    a: "Yes. You maintain 100% commercial ownership of all rendered files. You can publish them to YouTube Shorts, TikTok, Instagram Reels, client deliverables, and broadcast networks with 0% royalties or revenue sharing.",
    cat: 'workflow',
  },
  {
    q: "How does the 14-day refund guarantee work?",
    a: "If ClipVault does not run smoothly on your workstation hardware or does not fit your editing workflow, simply email studioclipvault@gmail.com within 14 days of purchase for a prompt, 100% full refund.",
    cat: 'billing',
  },
  {
    q: "Can I move my license to a new PC or laptop?",
    a: "Yes! While each license is bound to one active workstation at a time, you can deactivate and transfer your seat to a new machine at any time through our automated license management portal.",
    cat: 'billing',
  },
  {
    q: "What video resolutions and formats are supported?",
    a: "ClipVault supports MP4, MOV, MKV, and WEBM source footage and exports clean 9:16 vertical MP4 files up to 4K 60fps with customized subtitles, active-speaker framing, and high-bitrate masters.",
    cat: 'workflow',
  },
];

export const FaqPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.cat === activeCategory;
    const matchesSearch = item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <PageShell
      category="Resources"
      title="Help Center & FAQ"
      subtitle="Comprehensive answers about workstation requirements, processing speeds, licensing, and workflow."
      onNavigate={onNavigate}
    >
      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search questions (e.g. GPU, minutes, refunds, privacy)..."
          className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-emerald-400/50 transition-colors"
        />
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {[
          { id: 'all', label: 'All Questions' },
          { id: 'hardware', label: 'Hardware & GPU' },
          { id: 'minutes', label: 'Unlimited Minutes' },
          { id: 'privacy', label: 'Privacy & Security' },
          { id: 'workflow', label: 'Workflow & Formats' },
          { id: 'billing', label: 'Billing & Refunds' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveCategory(tab.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-emerald-400 text-black'
                : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Questions Accordion */}
      <div className="space-y-3 pt-2">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-semibold text-white text-sm">
                  {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 bg-black/20">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 text-zinc-500 text-xs">
            No matching questions found for "{searchQuery}". Email our support team directly!
          </div>
        )}
      </div>

      {/* Direct Contact Banner */}
      <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-white text-sm">Still have questions?</h3>
          <p className="text-xs text-zinc-400 mt-0.5">Reach out to our engineering team and get a direct answer.</p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('support')}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all cursor-pointer"
        >
          Open Support Desk
        </button>
      </section>
    </PageShell>
  );
};
