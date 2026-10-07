import React from 'react';
import { PageShell, PageRoute } from './PageShell';
import { ShieldCheck, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';

export const TermsPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  return (
    <PageShell
      category="Trust & Legal"
      title="Terms of Use"
      subtitle="The terms governing your commercial and personal use of ClipVault desktop software and services."
      lastUpdated="October 2026"
      onNavigate={onNavigate}
    >
      <section className="space-y-3">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">1. Agreement to Terms</h2>
        <p className="text-zinc-300">
          By downloading, installing, purchasing, or using ClipVault Desktop AI Video Software ("Software"), you agree to be bound by these Terms of Use. If you disagree with any part of these terms, you may not install or use the Software.
        </p>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">2. Software License Grant</h2>
        <p className="text-zinc-300">
          Subject to your purchase and active tier status, ClipVault grants you a personal, commercial, non-exclusive, revocable license to run the desktop software on your licensed workstation machine.
        </p>
        <ul className="space-y-2 text-xs text-zinc-400 pl-4 list-disc">
          <li><strong>Workstation Scope:</strong> Each standard license permits installation and activation on one primary personal or work computer at any given time.</li>
          <li><strong>Seat Transfers:</strong> You may transfer your license seat to a new or upgraded machine at no extra charge via the license management system.</li>
        </ul>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">3. 100% Commercial Output Ownership</h2>
        <p className="text-zinc-300">
          You retain full, unrestricted commercial ownership over all video clips, rendered media, animated subtitles, and audio files produced through ClipVault.
        </p>
        <div className="p-4 rounded-xl bg-emerald-400/[0.04] border border-emerald-400/20 text-xs text-emerald-300 space-y-1">
          <div className="font-bold text-white flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero Royalties or Revenue Sharing</span>
          </div>
          <p className="text-zinc-300">
            ClipVault claims 0% rights, 0% royalties, and 0% revenue share on any monetized videos published to YouTube Shorts, TikTok, Instagram Reels, commercial client deliverables, or ad campaigns.
          </p>
        </div>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">4. Fair Use &amp; Third-Party Content</h2>
        <p className="text-zinc-300">
          You are solely responsible for ensuring that the video footage, podcasts, and audio clips you import into ClipVault comply with Section 107 of the U.S. Copyright Act (Fair Use Doctrine) or the applicable laws of your jurisdiction. Transformative commentary, critique, education, parody, and news summarization are protected fair use categories in many jurisdictions.
        </p>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">5. Prohibited Activities</h2>
        <p className="text-zinc-300">
          You agree not to reverse engineer, decompile, disassemble, or attempt to derive the source code of cryptographic license verification systems in ClipVault, nor distribute crack binaries or forged license keys.
        </p>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">6. Merchant of Record &amp; Billing</h2>
        <p className="text-zinc-300">
          All order fulfillment, payment processing, tax/VAT compliance, and currency conversions are handled by Lemon Squeezy as our Merchant of Record. Subscription renewals, billing inquiries, and VAT invoices are managed through Lemon Squeezy customer accounts.
        </p>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">7. Disclaimer &amp; Liability</h2>
        <p className="text-zinc-300">
          The software is provided on an "as-is" and "as-available" basis without warranties of any kind. Under no circumstances shall ClipVault be liable for indirect, incidental, or consequential damages resulting from workstation hardware performance or third-party video platform algorithm changes.
        </p>
      </section>
    </PageShell>
  );
};
