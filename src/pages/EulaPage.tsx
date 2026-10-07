import React from 'react';
import { PageShell, PageRoute } from './PageShell';
import { ShieldCheck, FileCheck, CheckCircle2, Lock } from 'lucide-react';

export const EulaPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  return (
    <PageShell
      category="Trust & Legal"
      title="End User License Agreement (EULA)"
      subtitle="Version 2.5 (Workstation Binding Edition) governing local installation, commercial usage, and machine activation."
      lastUpdated="October 2026"
      onNavigate={onNavigate}
    >
      <section className="space-y-3">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">1. Binding Legal Agreement</h2>
        <p className="text-zinc-300">
          This End User License Agreement ("EULA") is a legal agreement between you (the "Licensee") and ClipVault AI Studio governing your installation, activation, and usage of the ClipVault Desktop AI Video Software suite.
        </p>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">2. Workstation Machine Binding</h2>
        <p className="text-zinc-300">
          ClipVault desktop software utilizes hardware-assisted machine binding to ensure licensing integrity:
        </p>
        <ul className="space-y-2 text-xs text-zinc-400 pl-4 list-disc">
          <li><strong>Single Active Workstation:</strong> A single Creator Pro license grants activation on one (1) active workstation at a time. Creator Max licenses support multi-seat activations on up to three (3) active workstations.</li>
          <li><strong>Free Seat Reassignment:</strong> When upgrading computers or replacing hardware components, you may reassign your workstation license free of charge through the licensing portal.</li>
        </ul>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">3. Commercial Rights &amp; Output Ownership</h2>
        <p className="text-zinc-300">
          The Licensee retains full, perpetual, worldwide commercial ownership over all video clips, rendered media, subtitle configurations, and exported content produced using the Software.
        </p>
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-300 space-y-1">
          <p>
            You are entitled to monetize all outputs across commercial streaming platforms, YouTube Partner Program channels, brand campaigns, and client video contracts without paying royalties, licensing fees, or revenue percentages to ClipVault.
          </p>
        </div>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">4. License Restrictions</h2>
        <p className="text-zinc-300">
          You may not:
        </p>
        <ul className="space-y-2 text-xs text-zinc-400 pl-4 list-disc">
          <li>Decompile, reverse engineer, disassemble, or crack the cryptographic license validation modules of the Software.</li>
          <li>Distribute, resell, rent, lease, or sub-license the binary software files without an explicit enterprise distribution contract.</li>
          <li>Offer the desktop binary as a hosted public multi-tenant cloud service (SaaS wrapper) to third parties.</li>
        </ul>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">5. Updates &amp; Bug Fixes</h2>
        <p className="text-zinc-300">
          Active license holders receive continuous stability updates, hardware compatibility improvements, and bug fixes delivered directly through the automatic desktop updater.
        </p>
      </section>
    </PageShell>
  );
};
