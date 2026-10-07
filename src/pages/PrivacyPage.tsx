import React from 'react';
import { PageShell, PageRoute } from './PageShell';
import { ShieldCheck, Lock, CheckCircle2, HardDrive, Key } from 'lucide-react';

export const PrivacyPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  return (
    <PageShell
      category="Trust & Legal"
      title="Privacy Policy"
      subtitle="ClipVault operates with a strict Zero-Ingestion architecture. Your raw video footage and transcripts never touch our servers."
      lastUpdated="October 2026"
      onNavigate={onNavigate}
    >
      <section className="space-y-3">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">1. Our Core Privacy Philosophy: Zero Ingestion</h2>
        <p className="text-zinc-300">
          Unlike cloud-based editing software where your confidential unreleased media files are uploaded across the internet and stored on third-party cloud buckets, ClipVault executes on your workstation machine.
        </p>
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
          <div className="font-bold text-white flex items-center gap-1.5">
            <HardDrive className="w-4 h-4 text-emerald-400" />
            <span>100% On-Device Execution</span>
          </div>
          <p className="text-zinc-300">
            Video frames, audio waveforms, speaker tracking data, and rendered output MP4 files exist solely on your local storage drive. ClipVault servers have zero access to your video streams.
          </p>
        </div>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">2. Direct BYOK Cloud AI Endpoints</h2>
        <p className="text-zinc-300">
          When you supply your own API key for cloud intelligence models (such as Google Gemini, Groq, or OpenAI), API calls travel directly from your local computer to the respective provider's HTTPS endpoint.
        </p>
        <ul className="space-y-2 text-xs text-zinc-400 pl-4 list-disc">
          <li><strong>No Middleman Proxy:</strong> We do not operate an intermediary server that logs or inspects your prompt data.</li>
          <li><strong>Encrypted Local Storage:</strong> Your API keys are stored securely on your local operating system and never synchronized to any external ClipVault cloud.</li>
        </ul>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">3. Information We Collect for Licensing</h2>
        <p className="text-zinc-300">
          We collect only the bare minimum technical data necessary to confirm subscription status and protect your workstation license:
        </p>
        <ul className="space-y-2 text-xs text-zinc-400 pl-4 list-disc">
          <li><strong>License Activation Token:</strong> A cryptographic machine identifier used to ensure one active workstation per seat.</li>
          <li><strong>Order Email:</strong> Used to transmit order receipts, activation keys, and critical product security notices.</li>
        </ul>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">4. Zero Behavioral Tracking or Ad Beacons</h2>
        <p className="text-zinc-300">
          We do not embed third-party advertising trackers, keystroke monitors, or behavioral telemetry beacons into the ClipVault desktop application. What you clip, edit, and export remains strictly between you and your audience.
        </p>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">5. Contact Regarding Privacy</h2>
        <p className="text-zinc-300">
          If you have privacy inquiries, questions regarding data retention, or security audits, contact us directly at <span className="text-emerald-400 font-mono">studioclipvault@gmail.com</span>.
        </p>
      </section>
    </PageShell>
  );
};
