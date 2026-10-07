import React from 'react';
import { PageShell, PageRoute } from './PageShell';
import { Download, Monitor, Cpu, Sparkles, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export const SetupPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  return (
    <PageShell
      category="Resources"
      title="Workstation Setup & Quick Start"
      subtitle="Everything you need to set up ClipVault on your Windows workstation and generate your first viral clip in under 60 seconds."
      onNavigate={onNavigate}
    >
      {/* System Requirements Banner */}
      <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Monitor className="w-5 h-5 text-emerald-400" />
          <span>System Requirements</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <span className="text-zinc-500 uppercase font-mono text-[10px]">Operating System</span>
            <div className="font-bold text-white">Windows 10 / 11</div>
            <div className="text-zinc-400">64-bit architecture</div>
          </div>

          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <span className="text-zinc-500 uppercase font-mono text-[10px]">System Memory</span>
            <div className="font-bold text-white">8GB RAM Minimum</div>
            <div className="text-zinc-400">16GB recommended for 4K</div>
          </div>

          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <span className="text-zinc-500 uppercase font-mono text-[10px]">Graphics Processing</span>
            <div className="font-bold text-white">NVIDIA RTX (Optional)</div>
            <div className="text-zinc-400">CPUs supported automatically</div>
          </div>
        </div>
      </section>

      {/* 4-Step Quick Start Guide */}
      <section className="space-y-6 pt-2">
        <h2 className="text-xl font-bold text-white tracking-tight">4-Step Quick Start Guide</h2>

        <div className="space-y-4">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-bold text-xs flex items-center justify-center">1</span>
              <h3 className="font-bold text-white text-base">Download the Windows Installer</h3>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed pl-10">
              Download the official ClipVault installer executable (`.exe`). Run the installer and launch ClipVault from your desktop or start menu.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-bold text-xs flex items-center justify-center">2</span>
              <h3 className="font-bold text-white text-base">Activate Your License Key (Optional)</h3>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed pl-10">
              If you purchased Creator Pro or Creator Max, enter your license key during first startup. Free Community users can proceed straight into the 1-Click Auto Clipper with no license key needed.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-bold text-xs flex items-center justify-center">3</span>
              <h3 className="font-bold text-white text-base">Paste Any Video Link or Drop Local Footage</h3>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed pl-10">
              Paste a YouTube podcast URL or drag an MP4/MOV file directly from your computer into the clipper window. Choose your preferred target clip length (e.g., 30s, 60s).
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-bold text-xs flex items-center justify-center">4</span>
              <h3 className="font-bold text-white text-base">Click Generate &amp; Inspect in Saved Vault</h3>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed pl-10">
              ClipVault will detect the speakers, transcribe the speech, crop into 9:16 vertical format, and animate dynamic captions. Your finished clips will be saved safely into your dedicated Saved Vault folder.
            </p>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="space-y-4 pt-4 border-t border-white/5">
        <h2 className="text-xl font-bold text-white tracking-tight">Troubleshooting Tips</h2>

        <div className="space-y-3 text-xs text-zinc-300">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <strong className="text-white block mb-1">Windows SmartScreen Notice:</strong>
            As a newly downloaded desktop app, Windows Defender SmartScreen may display a "Windows protected your PC" banner. Simply click <strong>"More info"</strong> and <strong>"Run anyway"</strong>.
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <strong className="text-white block mb-1">Enabling NVIDIA GPU Acceleration:</strong>
            Make sure your NVIDIA graphics card drivers are up to date through the official NVIDIA GeForce Experience app or GeForce Driver portal to enable full NVENC hardware encoding.
          </div>
        </div>
      </section>

      <section className="p-6 rounded-2xl bg-emerald-400/[0.04] border border-emerald-400/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-white text-sm">Need help setting up your workstation?</h3>
          <p className="text-xs text-zinc-400 mt-0.5">We provide free one-on-one installation support for all users.</p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('support')}
          className="px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-bold transition-all cursor-pointer"
        >
          Contact Support Desk
        </button>
      </section>
    </PageShell>
  );
};
