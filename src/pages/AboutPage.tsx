import React from 'react';
import { PageShell, PageRoute } from './PageShell';
import { Cpu, ShieldCheck, Zap, Layers, Sparkles, Mail, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  return (
    <PageShell
      category="Company"
      title="About ClipVault"
      subtitle="Workstation autonomy and sovereign processing for modern video creators and editors."
      onNavigate={onNavigate}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-tight">Our Mission</h2>
        <p className="text-zinc-300 leading-relaxed">
          ClipVault was founded with a singular conviction: video creators, podcast editors, and digital agencies shouldn't have their creative output throttled by cloud server queues, artificial monthly minute meters, or privacy concerns.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          While traditional tools treat your local machine as an inert terminal that must upload heavy raw files across the internet to compute elsewhere, modern personal workstations possess astonishing computing power. ClipVault leverages this untapped horsepower to give you instantaneous clipping and zero recurring minute fees.
        </p>
      </section>

      <section className="space-y-6 pt-4 border-t border-white/5">
        <h2 className="text-xl font-bold text-white tracking-tight">Core Pillars</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
            <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider">Local-First Speed</div>
            <h3 className="font-bold text-white text-base">Uncensored GPU Power</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Video rendering and active-speaker tracking run directly on your NVIDIA RTX hardware or multi-core CPU. Exports finish in 20–30 seconds with no upload latency.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
            <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider">Complete Sovereignty</div>
            <h3 className="font-bold text-white text-base">100% Commercial Rights</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              You own every exported clip outright. We charge zero royalties, zero per-minute fees, and zero revenue share on your monetization channels.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
            <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider">Zero-Ingestion Privacy</div>
            <h3 className="font-bold text-white text-base">On-Device Confidentiality</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Your confidential client footage, raw interviews, and audio tracks never touch our servers. Everything resides strictly on your local disk.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-4 border-t border-white/5">
        <h2 className="text-xl font-bold text-white tracking-tight">How We Built ClipVault</h2>
        <p className="text-zinc-300 leading-relaxed">
          ClipVault is engineered specifically for Windows workstations. It combines fast local transcription, deep facial landmark tracking, and an intelligent narrative story-arc selector to automatically discover the most compelling hooks in hours-long video content.
        </p>
        <ul className="space-y-2 text-xs text-zinc-300 pt-2">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Multi-Model AI Integration:</strong> Use your own API key directly with Google Gemini, Groq, or OpenAI for virality detection without markups.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Hardware Accelerated Pipeline:</strong> Native NVENC and AV1 encoder support for maximum rendering throughput.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Dedicated Local Storage:</strong> All produced clips and assets remain neatly structured in your dedicated Saved Vault.</span>
          </li>
        </ul>
      </section>

      <section className="p-6 rounded-2xl bg-emerald-400/[0.04] border border-emerald-400/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-white text-base">Have Questions or Suggestions?</h3>
          <p className="text-xs text-zinc-400 mt-1">Our engineering team reads every message directly.</p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('support')}
          className="px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-bold transition-all cursor-pointer"
        >
          Contact Engineering Support
        </button>
      </section>
    </PageShell>
  );
};
