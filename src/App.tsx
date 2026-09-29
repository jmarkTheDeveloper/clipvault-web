import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Video, 
  Zap, 
  Download, 
  CheckCircle2, 
  Play, 
  Pause,
  ChevronRight, 
  Sliders, 
  Layers, 
  HardDrive, 
  Lock, 
  ExternalLink,
  ChevronDown, 
  Cpu, 
  Monitor, 
  Heart,
  MessageSquare,
  Bot,
  Scissors,
  ArrowRight,
  Gauge,
  Key,
  Check,
  Film
} from 'lucide-react';

interface Preset {
  id: string;
  title: string;
  speaker: string;
  timestamp: string;
  virality: number;
  hook: string;
  caption1: string;
  caption2: string;
  caption3: string;
  sfx: string;
  boxX: string;
}

const PRESETS: Preset[] = [
  {
    id: 'podcast',
    title: 'Joe Rogan Experience #2144',
    speaker: 'Active Speaker 1 (Guest)',
    timestamp: '04:12.00 ➔ 04:52.00 (40s)',
    virality: 97,
    hook: 'Extreme curiosity hook in the opening 2.4s',
    caption1: 'MOST PEOPLE NEVER',
    caption2: 'REALIZE HOW SIMPLE',
    caption3: 'THIS ACTUALLY IS',
    sfx: '💥 AUDIO IMPACT WHOOSH',
    boxX: 'left-[26%]'
  },
  {
    id: 'hormozi',
    title: 'Alex Hormozi Business Breakdown',
    speaker: 'Solo Keynote Speaker',
    timestamp: '18:30.00 ➔ 19:15.00 (45s)',
    virality: 94,
    hook: 'Counter-intuitive financial insight for 2026',
    caption1: 'IF YOU WANT TO MAKE',
    caption2: 'YOUR FIRST $100K',
    caption3: 'STOP DOING THIS TODAY',
    sfx: '⚡ BASS DROP & POP',
    boxX: 'left-[46%]'
  },
  {
    id: 'tech',
    title: 'Lex Fridman AI & Robotics Lab',
    speaker: 'Head of Robotics Research',
    timestamp: '32:10.00 ➔ 32:48.00 (38s)',
    virality: 91,
    hook: 'High tech revelation with viral visual pacing',
    caption1: 'WE TRAINED THE MODEL',
    caption2: 'TO SOLVE PROBLEMS',
    caption3: 'IN PURE REAL-TIME',
    sfx: '🤖 SYNTH GLITCH HOOK',
    boxX: 'left-[58%]'
  }
];

const GPU_BENCHMARKS = [
  { name: 'NVIDIA RTX 4090 / 4080', time: '14 seconds', speed: '98%', status: 'Ultra Fast' },
  { name: 'NVIDIA RTX 4070 / 3080', time: '19 seconds', speed: '92%', status: 'Blazing Fast' },
  { name: 'NVIDIA RTX 3060 / 4060', time: '24 seconds', speed: '85%', status: 'Fast' },
  { name: 'AMD Radeon RX 7800 / 6700', time: '27 seconds', speed: '81%', status: 'Hardware Accelerated' },
  { name: 'Intel Core i7 / AMD Ryzen (CPU Only)', time: '68 seconds', speed: '50%', status: 'Software Fallback' }
];

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isPlayingPreview, setIsPlayingPreview] = useState<boolean>(true);
  const [selectedPreset, setSelectedPreset] = useState<Preset>(PRESETS[0]);
  const [captionStyle, setCaptionStyle] = useState<'hormozi' | 'mrbeast' | 'neon'>('hormozi');
  const [faceTrackingEnabled, setFaceTrackingEnabled] = useState<boolean>(true);
  const [selectedGpuIndex, setSelectedGpuIndex] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'preview' | 'askStudio'>('preview');

  // Interactive Ask Studio State
  const [chatPrompt, setChatPrompt] = useState<string>('Why will this clip perform well on TikTok?');
  const [chatResponse, setChatResponse] = useState<string>(
    'The first 3 seconds contain a polarizing contrarian statement that immediately interrupts the user scrolling habit. With the 9:16 Steadicam keeping the speaker centered and yellow punch-word subtitles, retention is estimated at 84% through the 30-second mark.'
  );
  const [isTypingChat, setIsTypingChat] = useState<boolean>(false);

  // Playhead animation cycle
  const [progress, setProgress] = useState<number>(35);

  useEffect(() => {
    if (!isPlayingPreview) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 98 ? 10 : prev + 1));
    }, 120);
    return () => clearInterval(interval);
  }, [isPlayingPreview]);

  const handleAskPrompt = (question: string, reply: string) => {
    setChatPrompt(question);
    setIsTypingChat(true);
    setChatResponse('');
    setTimeout(() => {
      setChatResponse(reply);
      setIsTypingChat(false);
    }, 600);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Direct checkout link for Lemon Squeezy store
  const LEMON_CHECKOUT_URL = 'https://clipvault.lemonsqueezy.com';

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 selection:bg-amber-400 selection:text-black">
      {/* ── TOP NAV BAR ── */}
      <nav className="fixed top-0 inset-x-0 z-50 h-16 border-b border-white/5 bg-[#08090d]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 glow-amber-sm">
              <Video className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold tracking-tight text-white">ClipVault</span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                Studio AI
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold text-zinc-400">
            <a href="#demo" className="hover:text-amber-400 transition-colors">Interactive Studio</a>
            <a href="#ask-studio" className="hover:text-amber-400 transition-colors">Ask Studio AI</a>
            <a href="#workflow" className="hover:text-amber-400 transition-colors">Workflow</a>
            <a href="#comparison" className="hover:text-amber-400 transition-colors">Why Local?</a>
            <a href="#benchmarks" className="hover:text-amber-400 transition-colors">GPU Benchmarks</a>
            <a href="#pricing" className="hover:text-amber-400 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="text-xs font-bold px-3.5 py-2 rounded-lg text-zinc-300 hover:text-white transition-colors hidden sm:block"
            >
              Lifetime Pass
            </a>
            <a
              href="#pricing"
              className="text-xs font-bold px-4 py-2 rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Free (.exe)</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-44 right-10 w-[350px] h-[350px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-amber-400/20 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-zinc-200">ClipVault Desktop Studio v2.4</span>
            <span className="text-zinc-600">•</span>
            <span className="text-amber-400 font-semibold">100% Local GPU Powered</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Turn Any Long YouTube Video Into Viral Shorts <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
              In 30 Seconds.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Smart 9:16 Active Speaker Steadicam Tracking, Alex Hormozi animated karaoke subtitles, Ask Studio AI Assistant, and 3-second stream slicing.
            <span className="text-white font-semibold"> Runs 100% on your PC. Zero monthly subscriptions. Zero minute limits.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              id="download-hero"
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 text-black font-extrabold text-sm flex items-center justify-center gap-2.5 hover:bg-amber-300 transition-all glow-amber hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download for Windows (.exe)</span>
            </a>

            <a
              href="#pricing"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/10 hover:border-amber-400/40 transition-all backdrop-blur-md"
            >
              <Key className="w-4 h-4 text-amber-400" />
              <span>Get Lifetime License ($29)</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </a>
          </div>

          {/* Social Proof & Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/10 text-left">
            <div className="p-3">
              <div className="font-display text-xl sm:text-2xl font-bold text-white">4K &amp; 8K</div>
              <div className="text-xs text-zinc-400">Master Video Resolution</div>
            </div>
            <div className="p-3">
              <div className="font-display text-xl sm:text-2xl font-bold text-amber-400">0% Cloud</div>
              <div className="text-xs text-zinc-400">100% Sovereign Privacy</div>
            </div>
            <div className="p-3">
              <div className="font-display text-xl sm:text-2xl font-bold text-white">20–30s</div>
              <div className="text-xs text-zinc-400">NVIDIA NVENC Render</div>
            </div>
            <div className="p-3">
              <div className="font-display text-xl sm:text-2xl font-bold text-white">Unlimited</div>
              <div className="text-xs text-zinc-400">No Monthly Minute Caps</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE STUDIO SIMULATOR ── */}
      <section id="demo" className="py-16 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-2 block">
              Interactive Product Showcase
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Experience the Desktop AI Clipping Engine
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Test how ClipVault tracks speakers, renders animated karaoke captions, and optimizes virality right on your machine.
            </p>
          </div>

          {/* Preset Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPreset(p)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  selectedPreset.id === p.id
                    ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.35)]'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>{p.title}</span>
              </button>
            ))}
          </div>

          {/* Interactive Window Mockup */}
          <div className="glass-card-amber rounded-2xl p-3 sm:p-5 shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Titlebar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-zinc-400 hidden sm:inline">
                  ClipVault Desktop — {selectedPreset.title}.mp4
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 border border-amber-400/20 text-[10px] font-mono text-amber-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  <span>NVENC 60 FPS</span>
                </div>
              </div>
            </div>

            {/* Studio Workspace Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left Column: Stream Slicing & Settings */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                  <div className="text-xs font-bold text-zinc-200 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      HTTP Stream Slicer
                    </span>
                    <span className="text-[10px] text-amber-400 font-mono">0.03s slice</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mb-3">
                    Extracts only the high-retention segment directly from the video stream. Zero 10GB raw video downloads.
                  </p>
                  <div className="bg-zinc-950 rounded-lg p-2.5 font-mono text-[11px] text-zinc-300 border border-white/5 flex items-center justify-between">
                    <span>{selectedPreset.timestamp}</span>
                    <span className="text-amber-400 font-bold">18 MB</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/50 border border-white/5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-amber-400" />
                      Live Engine Controls
                    </div>

                    <div className="space-y-2 text-xs">
                      {/* Face Tracking Toggle */}
                      <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                        <span className="text-zinc-400">Face Steadicam</span>
                        <button
                          onClick={() => setFaceTrackingEnabled(!faceTrackingEnabled)}
                          className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                            faceTrackingEnabled ? 'bg-amber-400 text-black' : 'bg-zinc-800 text-zinc-400'
                          }`}
                        >
                          {faceTrackingEnabled ? 'ON (ACTIVE)' : 'OFF (FIXED)'}
                        </button>
                      </div>

                      {/* Subtitle Style Switcher */}
                      <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                        <span className="text-zinc-400">Caption Style</span>
                        <div className="flex items-center gap-1">
                          {(['hormozi', 'mrbeast', 'neon'] as const).map((style) => (
                            <button
                              key={style}
                              onClick={() => setCaptionStyle(style)}
                              className={`px-2 py-0.5 rounded text-[10px] font-mono capitalize transition-all ${
                                captionStyle === style
                                  ? 'bg-amber-400 text-black font-bold'
                                  : 'bg-zinc-800/80 text-zinc-400 hover:text-white'
                              }`}
                            >
                              {style}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Resolution Output */}
                      <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                        <span className="text-zinc-400">Export Aspect</span>
                        <span className="font-mono text-zinc-200 font-semibold">9:16 (1080x1920) 60FPS</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setIsPlayingPreview(!isPlayingPreview)}
                      className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-white/5"
                    >
                      {isPlayingPreview ? (
                        <>
                          <Pause className="w-3.5 h-3.5 text-amber-400" />
                          <span>Pause Interactive Player</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 text-amber-400" />
                          <span>Play Interactive Player</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Center Column: 9:16 Vertical Video Output Simulation */}
              <div className="lg:col-span-5 flex items-center justify-center p-4 bg-black/70 rounded-xl border border-white/5 relative min-h-[440px]">
                {/* 9:16 Canvas Simulation */}
                <div className="relative w-[235px] h-[420px] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border-2 border-white/20 shadow-2xl flex flex-col justify-between p-4">
                  {/* Top Bar inside Video Preview */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
                    <span className="px-1.5 py-0.5 rounded bg-black/70 border border-white/10 text-white">9:16 PREVIEW</span>
                    <span className="text-amber-400 font-bold">{selectedPreset.speaker}</span>
                  </div>

                  {/* Speaker Face Tracking Bounding Box Simulation */}
                  <div className="relative my-auto flex flex-col items-center">
                    <div
                      className={`relative w-28 h-32 rounded-xl transition-all duration-500 flex flex-col justify-between p-1.5 ${
                        faceTrackingEnabled
                          ? 'border-2 border-amber-400 animate-tracking bg-amber-400/5'
                          : 'border border-dashed border-zinc-700 bg-transparent'
                      }`}
                    >
                      <div className="flex justify-between text-[8px] font-mono font-bold text-amber-400">
                        <span>[+]</span>
                        <span>98.6%</span>
                      </div>
                      <div className="text-[7.5px] font-mono text-center text-white bg-black/85 rounded py-0.5 px-1">
                        {faceTrackingEnabled ? 'ACTIVE SPEAKER LOCK' : 'STATIC CENTER'}
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Alex Hormozi Karaoke Captions Preview */}
                  <div className="mb-4 text-center space-y-1 z-10">
                    <div className="inline-block px-2 py-0.5 rounded bg-black/80 text-[9px] font-mono text-amber-400 border border-amber-400/30">
                      {selectedPreset.sfx}
                    </div>

                    {captionStyle === 'hormozi' && (
                      <div className="space-y-0.5">
                        <div className="font-display font-black text-sm tracking-wide text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                          {selectedPreset.caption1}
                        </div>
                        <div className="font-display font-black text-base tracking-wide text-amber-400 uppercase drop-shadow-[0_2px_8px_rgba(250,204,21,0.5)]">
                          {selectedPreset.caption2}
                        </div>
                        <div className="font-display font-black text-xs tracking-wide text-zinc-300 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                          {selectedPreset.caption3}
                        </div>
                      </div>
                    )}

                    {captionStyle === 'mrbeast' && (
                      <div className="space-y-0.5">
                        <div className="font-display font-black text-sm text-yellow-300 uppercase bg-black/90 px-1 py-0.5 rounded inline-block">
                          {selectedPreset.caption1}
                        </div>
                        <div className="font-display font-black text-base text-red-500 uppercase bg-black/90 px-1.5 py-0.5 rounded block">
                          {selectedPreset.caption2}
                        </div>
                      </div>
                    )}

                    {captionStyle === 'neon' && (
                      <div className="space-y-0.5">
                        <div className="font-display font-black text-sm text-cyan-300 uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                          {selectedPreset.caption1}
                        </div>
                        <div className="font-display font-black text-sm text-pink-400 uppercase drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]">
                          {selectedPreset.caption2}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Playhead Progress Bar inside phone screen */}
                  <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-400 h-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Virality & Audio Insights */}
              <div className="lg:col-span-3 flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                  <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Virality Score
                    </span>
                    <span className="font-display text-lg font-bold text-amber-400">{selectedPreset.virality}/100</span>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden mb-3">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-500"
                      style={{ width: `${selectedPreset.virality}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-zinc-400 leading-relaxed mb-3">
                    {selectedPreset.hook}
                  </p>

                  {/* Simulated Audio Spectrum Wave */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Audio Peak Track</span>
                    <div className="flex items-end gap-1 h-6">
                      <div className="w-1 bg-amber-400 rounded-full wave-bar-1" />
                      <div className="w-1 bg-amber-400 rounded-full wave-bar-2" />
                      <div className="w-1 bg-amber-400 rounded-full wave-bar-3" />
                      <div className="w-1 bg-amber-400 rounded-full wave-bar-4" />
                      <div className="w-1 bg-amber-400 rounded-full wave-bar-5" />
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/50 border border-white/5 flex-1">
                  <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <HardDrive className="w-3.5 h-3.5 text-amber-400" />
                    Local Privacy Pipeline
                  </div>
                  <div className="space-y-2 text-xs text-zinc-400">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Zero cloud video uploads</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Encrypted DPAPI machine activation</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Direct-to-drive MP4 exports</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ASK STUDIO AI ASSISTANT SHOWCASE ── */}
      <section id="ask-studio" className="py-20 px-4 sm:px-6 bg-zinc-950/60 border-y border-white/5 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold mb-3 border border-amber-400/20">
              <Bot className="w-3.5 h-3.5" />
              <span>Built-in Conversational Co-Pilot</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Ask Studio: Your Personal AI Video Strategist
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Ask questions directly about your active video clip. Brainstorm viral titles, analyze retention drop-offs, and generate social captions in real-time.
            </p>
          </div>

          <div className="glass-card-amber rounded-2xl p-6 border border-white/10 shadow-2xl">
            {/* Interactive Prompt Chips */}
            <div className="mb-4">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Click a sample question to test:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  {
                    q: 'Why will this clip perform well on TikTok?',
                    r: 'The clip possesses a high contrast statement in the opening 2 seconds. TikTok algorithms reward watch-time percentage, and this segment has an estimated 85% completion rate.'
                  },
                  {
                    q: 'Generate 3 high-converting title options',
                    r: '1. Why 99% of People Fail at This (Avoid This Mistake)\n2. The Secret Trick Nobody Is Telling You in 2026\n3. Do This For 30 Days and Watch What Happens'
                  },
                  {
                    q: 'Write an Instagram Reels caption with hashtags',
                    r: 'Stop overcomplicating your workflow. Here is the exact framework to 10x your output without burning out. Save this for later! #productivity #contentcreator #editingtips #clipvault'
                  },
                  {
                    q: 'Suggest an optimal sound effect for the hook',
                    r: 'A deep sub-bass impact drop accompanied by a camera whoosh sound at 00:01.20 when the primary keyword is spoken.'
                  }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAskPrompt(item.q, item.r)}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-all border ${
                      chatPrompt === item.q
                        ? 'bg-amber-400 text-black font-bold border-amber-400 shadow-[0_0_12px_rgba(250,204,21,0.3)]'
                        : 'bg-black/40 text-zinc-300 border-white/10 hover:border-amber-400/40 hover:text-white'
                    }`}
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Conversation Box */}
            <div className="bg-black/60 rounded-xl p-4 border border-white/5 space-y-4 font-mono text-xs">
              {/* User Message */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 font-bold">
                  U
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-xl rounded-tl-none border border-white/5 text-zinc-200 flex-1">
                  {chatPrompt}
                </div>
              </div>

              {/* AI Response */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-zinc-900/90 p-3 rounded-xl rounded-tl-none border border-amber-400/20 text-zinc-100 flex-1">
                  {isTypingChat ? (
                    <div className="flex items-center gap-1.5 text-amber-400 py-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      <span>Analyzing clip semantics &amp; virality metrics...</span>
                    </div>
                  ) : (
                    <div className="whitespace-pre-line leading-relaxed">
                      {chatResponse}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-STEP AUTOMATED WORKFLOW ── */}
      <section id="workflow" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-2 block">
              Streamlined Production
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
              From Raw YouTube Video to Viral 9:16 In 5 Steps
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
              No complex timelines. No keyframing manually. ClipVault automates the entire short-form pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Paste URL or File',
                desc: 'Paste any YouTube link or drop a local MP4/MKV file into the studio dashboard.'
              },
              {
                step: '02',
                title: 'HTTP Stream Slice',
                desc: 'ClipVault grabs only the highlight segment in 3 seconds. Saves 99% bandwidth.'
              },
              {
                step: '03',
                title: 'Steadicam Centering',
                desc: 'MediaPipe AI tracks active speaker facial landmarks with smooth ease-in transitions.'
              },
              {
                step: '04',
                title: 'Karaoke Captions',
                desc: 'faster-whisper neural transcription produces word-by-word bouncing viral subtitles.'
              },
              {
                step: '05',
                title: 'Instant 4K Export',
                desc: 'Direct NVIDIA/AMD hardware render delivers a pristine 60FPS vertical video.'
              }
            ].map((step, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-amber-400/40 transition-all">
                <div>
                  <div className="font-mono text-2xl font-black text-amber-400/40 mb-3">{step.step}</div>
                  <h3 className="font-display text-sm font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-[10px] font-mono text-amber-400">
                  <span>AUTOMATED</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GPU BENCHMARK & HARDWARE ACCELERATION ── */}
      <section id="benchmarks" className="py-20 px-4 sm:px-6 bg-zinc-950/60 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-2 block">
              Performance Testing
            </span>
            <h2 className="font-display text-3xl font-extrabold text-white mb-3">
              How Fast Does It Render on Your PC?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
              ClipVault talks directly to your graphics card using native FFmpeg hardware encoders.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Select your system hardware:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {GPU_BENCHMARKS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedGpuIndex(idx)}
                  className={`p-3 rounded-xl text-left transition-all border ${
                    selectedGpuIndex === idx
                      ? 'bg-amber-400/10 border-amber-400 text-white shadow-[0_0_15px_rgba(250,204,21,0.2)]'
                      : 'bg-black/30 border-white/5 text-zinc-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="text-xs font-bold mb-1 truncate">{item.name}</div>
                  <div className="text-[11px] font-mono text-amber-400">{item.time} render</div>
                </button>
              ))}
            </div>

            {/* Benchmark Display Card */}
            <div className="mt-6 p-5 rounded-xl bg-black/60 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-zinc-400 mb-1">
                  Render Time for a 40-Second 1080x1920 Short:
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-amber-400">
                  {GPU_BENCHMARKS[selectedGpuIndex].time}
                </div>
                <div className="text-xs text-zinc-500 mt-1">
                  Engine: {GPU_BENCHMARKS[selectedGpuIndex].status}
                </div>
              </div>

              <div className="w-full sm:w-48 text-right">
                <div className="text-[11px] font-mono text-zinc-400 mb-1">Efficiency Rating</div>
                <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-400 h-full transition-all duration-300"
                    style={{ width: GPU_BENCHMARKS[selectedGpuIndex].speed }}
                  />
                </div>
                <div className="text-[10px] font-mono text-amber-400 mt-1">
                  {GPU_BENCHMARKS[selectedGpuIndex].speed} of peak hardware
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE (CLIPVAULT VS CLOUD SAAS) ── */}
      <section id="comparison" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Why Creators Are Quitting Cloud SaaS For ClipVault
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
              Cloud clipping platforms lock your workflow behind monthly credit caps and steep renewal fees.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-zinc-300">Feature</th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-red-400">Cloud SaaS (Opus/Munch)</th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-amber-400 bg-amber-400/5">ClipVault Desktop AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Monthly Subscription</td>
                  <td className="p-4 sm:p-5 text-zinc-400">$29 – $49 / month (recurring)</td>
                  <td className="p-4 sm:p-5 text-amber-400 font-bold bg-amber-400/5">$0 / mo (Free or $29 Lifetime)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Monthly Minute Limits</td>
                  <td className="p-4 sm:p-5 text-zinc-400">Capped at 60 – 150 minutes/mo</td>
                  <td className="p-4 sm:p-5 text-amber-400 font-bold bg-amber-400/5">Unlimited Minutes</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Processing Queue</td>
                  <td className="p-4 sm:p-5 text-zinc-400">5 – 15 minutes waiting in line</td>
                  <td className="p-4 sm:p-5 text-amber-400 font-bold bg-amber-400/5">Instant Local GPU (20–30s)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Maximum Resolution</td>
                  <td className="p-4 sm:p-5 text-zinc-400">1080p Max (compressed)</td>
                  <td className="p-4 sm:p-5 text-amber-400 font-bold bg-amber-400/5">Up to 4K UHD &amp; 8K Master</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Privacy &amp; Data Security</td>
                  <td className="p-4 sm:p-5 text-zinc-400">Uploaded to third-party cloud servers</td>
                  <td className="p-4 sm:p-5 text-amber-400 font-bold bg-amber-400/5">100% Local On-Device Sovereignty</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-white">Content Rights</td>
                  <td className="p-4 sm:p-5 text-zinc-400">Subject to third-party cloud ToS</td>
                  <td className="p-4 sm:p-5 text-amber-400 font-bold bg-amber-400/5">100% Creator Ownership (0% Royalties)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PRICING SECTION (LEMON SQUEEZY COMPATIBLE) ── */}
      <section id="pricing" className="py-20 px-4 sm:px-6 bg-zinc-950/60 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-2 block">
              Transparent Commercial Pricing
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Pay Once. Keep It Forever.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
              No sneaky recurring fees. Instant automated license delivery powered by Lemon Squeezy with 14-day refund protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Free Tier */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">Community Free</h3>
                <p className="text-xs text-zinc-400 mb-6">For hobbyists and beginner creators</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-4xl font-extrabold text-white">$0</span>
                  <span className="text-xs text-zinc-400 font-medium">forever</span>
                </div>

                <div className="space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>720p / 1080p Video Exports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Fast YouTube Stream Slicing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Auto 9:16 Face Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Standard Subtitle Presets</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#pricing"
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Free (.exe)</span>
                </a>
              </div>
            </div>

            {/* Lifetime Pro (Featured) */}
            <div className="glass-card-amber p-6 sm:p-8 rounded-2xl border-2 border-amber-400/80 flex flex-col justify-between relative shadow-[0_0_50px_rgba(250,204,21,0.25)]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-black font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                Most Popular • Early Bird Deal
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">Creator Lifetime Pass</h3>
                <p className="text-xs text-zinc-400 mb-6">For YouTubers, TikTokers &amp; Video Editors</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-extrabold text-amber-400">$29</span>
                  <span className="text-xs text-zinc-500 line-through font-medium">$49</span>
                  <span className="text-xs text-zinc-400 font-medium">one-time payment</span>
                </div>

                <div className="space-y-3 text-xs text-zinc-200">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Unlimited 4K &amp; 8K Exports</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Ask Studio AI Co-Pilot Full Access</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>All Viral Subtitle Presets &amp; SFX</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>NVIDIA NVENC, QuickSync &amp; AMF</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Encrypted BYOK AI Freedom</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Commercial EULA v2.4 Rights</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={LEMON_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-amber-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-amber-300 transition-all glow-amber hover:scale-105 active:scale-95"
                >
                  <Key className="w-3.5 h-3.5" />
                  <span>Get Lifetime License ($29)</span>
                </a>
                <div className="text-[10px] text-zinc-400 text-center mt-2">
                  14-Day Money-Back Guarantee • Instant Key Delivery
                </div>
              </div>
            </div>

            {/* Studio / Agency Pass */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">Agency / Team Pass</h3>
                <p className="text-xs text-zinc-400 mb-6">For editing agencies &amp; multi-editor teams</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-4xl font-extrabold text-white">$79</span>
                  <span className="text-xs text-zinc-400 font-medium">one-time payment</span>
                </div>

                <div className="space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Everything in Creator Pass</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Up to 5 Workstation Activations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Batch Video Processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Priority 1-on-1 Founder Support</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={LEMON_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
                >
                  <span>Buy Agency License ($79)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIPVAULT STUDIO MISSION ── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto glass-card p-8 rounded-2xl border border-white/10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-semibold mb-4 border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The ClipVault Studio Mission</span>
          </div>
          <h3 className="font-display text-2xl font-extrabold text-white mb-3">
            High-Performance AI Video Clipping Without Subscriptions
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto mb-6">
            We built ClipVault because creators shouldn't have to pay $30 to $50 every month just to process short-form video on their own hardware. By combining state-of-the-art MediaPipe computer vision, whisper neural models, and direct FFmpeg GPU encoders, ClipVault delivers 4K vertical exports with 100% data sovereignty, zero cloud waitlists, and zero recurring fees.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-zinc-400">
            <a href="mailto:support@clipvault.app" className="hover:text-amber-400 transition-colors">
              support@clipvault.app
            </a>
            <span>•</span>
            <a 
              href={LEMON_CHECKOUT_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>Official Store</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section id="faq" className="py-20 px-4 sm:px-6 bg-zinc-950/60 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-extrabold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-zinc-400">Everything you need to know about ClipVault</p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Do I need an expensive high-end GPU to run ClipVault?",
                a: "No! While ClipVault leverages NVIDIA NVENC, AMD AMF, and Intel QuickSync GPUs for super-fast renders (~20-30s), it also has a 100% CPU software fallback (libx264) that works on any standard Windows 10/11 laptop."
              },
              {
                q: "How does Bring-Your-Own-Key (BYOK) work?",
                a: "You can plug in your own free or pay-as-you-go API key from Google Gemini, Groq, or OpenAI. Google gives thousands of free requests per day, meaning you pay $0 for AI virality scoring and Ask Studio queries!"
              },
              {
                q: "How does the license key activation work?",
                a: "Upon purchasing from Lemon Squeezy, you will instantly receive your unique License Key via email and screen. Enter it once inside ClipVault Desktop, and our encrypted Windows DPAPI engine activates your PC. It works 100% offline afterward."
              },
              {
                q: "Are the rendered clips safe to monetize on YouTube, TikTok, and Reels?",
                a: "Yes! ClipVault is designed for transformative commentary and podcast highlighting under Section 107 of the U.S. Copyright Act (Fair Use Doctrine). You retain 100% intellectual property and commercial monetization rights."
              },
              {
                q: "What is your refund policy?",
                a: "We offer a 14-day money-back guarantee. If ClipVault doesn't work on your computer or meet your expectations, send an email to support@clipvault.app for a prompt refund."
              },
              {
                q: "Is ClipVault available for Mac or Linux?",
                a: "The initial launch is dedicated to Windows 10 & 11 (64-bit). Mac and Linux builds are on our immediate roadmap!"
              }
            ].map((item, idx) => (
              <div key={idx} className="glass-card rounded-xl border border-white/5 overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-amber-400 transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-amber-400' : 'text-zinc-500'}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-4 sm:px-6 border-t border-white/10 bg-[#08090d] text-zinc-500 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Video className="w-4 h-4" />
            </div>
            <span className="font-display font-bold text-white text-sm">ClipVault AI Video Studio</span>
          </div>

          <div className="flex items-center gap-6 text-zinc-400 text-xs">
            <a href="#pricing" className="hover:text-white transition-colors">
              EULA v2.4
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              DMCA Fair Use
            </a>
            <a href="mailto:support@clipvault.app" className="hover:text-white transition-colors">
              Support
            </a>
          </div>

          <div className="text-center md:text-right text-[11px]">
            <div>© 2026 ClipVault AI Studio. All rights reserved.</div>
            <div className="text-zinc-600 mt-0.5">All trademarks belong to their respective owners.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
