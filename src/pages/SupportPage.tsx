import React, { useState } from 'react';
import { PageShell, PageRoute } from './PageShell';
import { Mail, Clock, ShieldCheck, CheckCircle2, ExternalLink, Copy, Check } from 'lucide-react';

export const SupportPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('studioclipvault@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <PageShell
      category="Company"
      title="Contact & Engineering Support"
      subtitle="Direct assistance from the developers building ClipVault. Quick resolutions for license keys, hardware acceleration, and workflow issues."
      onNavigate={onNavigate}
    >
      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Email Card */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Direct Email Support</h3>
            <p className="text-xs text-zinc-400 mt-1">
              Send us bug reports, license transfer requests, or feedback directly:
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-black/40 border border-white/10 font-mono text-xs">
            <span className="text-emerald-400 font-semibold select-all flex-1">studioclipvault@gmail.com</span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=studioclipvault@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2.5 text-center rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-bold transition-all shadow-md shadow-emerald-400/20"
          >
            Open in Gmail
          </a>
        </div>

        {/* Response Guarantee Card */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Guaranteed Response Times</h3>
            <p className="text-xs text-zinc-400 mt-1">
              Every message is read directly by developers—not an outsourced chatbot:
            </p>
          </div>

          <ul className="space-y-2 text-xs text-zinc-300 pt-1">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span><strong>Creator Pro Users:</strong> &lt; 12-hour resolution</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span><strong>Creator Max Holders:</strong> 24/7 priority developer response</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span><strong>Free Community:</strong> Typical replies within 24 hours</span>
            </li>
          </ul>
        </div>
      </div>

      {/* License Key & Order Retrieval */}
      <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-bold text-white text-sm">Need to retrieve your license key or invoice?</h3>
          <a
            href="https://app.lemonsqueezy.com/my-orders"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Lemon Squeezy Customer Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          All ClipVault transactions are securely fulfilled by our Merchant of Record, Lemon Squeezy. You can look up your active order, find your license key, download VAT invoices, or manage your renewal at any time through their self-service portal.
        </p>
      </section>

      {/* Helpful Pre-Checks */}
      <section className="space-y-3 pt-4 border-t border-white/5">
        <h3 className="font-bold text-white text-sm">Helpful Information to Include in Your Bug Report:</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-400">
          <li className="p-3 rounded-xl bg-black/30 border border-white/5">
            <strong>1. Windows Version:</strong> Windows 10 (64-bit) or Windows 11
          </li>
          <li className="p-3 rounded-xl bg-black/30 border border-white/5">
            <strong>2. GPU / Processor:</strong> e.g., NVIDIA RTX 3060, Intel i7-12700K
          </li>
          <li className="p-3 rounded-xl bg-black/30 border border-white/5">
            <strong>3. Video Source:</strong> YouTube URL or local file format (MP4/MOV)
          </li>
          <li className="p-3 rounded-xl bg-black/30 border border-white/5">
            <strong>4. Error Notice:</strong> Screenshot or description of the error prompt
          </li>
        </ul>
      </section>
    </PageShell>
  );
};
