import React from 'react';
import { Download } from 'lucide-react';

export type PageRoute = 'home' | 'about' | 'faq' | 'support' | 'setup' | 'terms' | 'privacy' | 'refunds' | 'eula';

interface PageShellProps {
  category: 'Company' | 'Product' | 'Resources' | 'Trust & Legal';
  title: string;
  subtitle: string;
  lastUpdated?: string;
  onNavigate: (route: PageRoute, anchor?: string) => void;
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  category,
  title,
  subtitle,
  lastUpdated,
  onNavigate,
  children,
}) => {
  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 selection:bg-emerald-400 selection:text-black flex flex-col justify-between">
      {/* ── TOP NAV BAR (STANDALONE PRODUCTION HEADER) ── */}
      <nav className="fixed top-0 inset-x-0 z-50 h-16 border-b border-white/5 bg-[#08090d]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 font-display text-xl sm:text-2xl font-black tracking-tight text-white hover:text-emerald-400 transition-colors group cursor-pointer"
          >
            <img src="/logo.png" alt="ClipVault" className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg shadow-sm group-hover:scale-105 transition-transform" />
            <span>ClipVault</span>
          </button>

          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold text-zinc-400">
            <button
              type="button"
              onClick={() => onNavigate('home', 'demo')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Interactive Studio
            </button>
            <button
              type="button"
              onClick={() => onNavigate('home', 'comparison')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Why Local?
            </button>
            <button
              type="button"
              onClick={() => onNavigate('home', 'pricing')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button
              type="button"
              onClick={() => onNavigate('faq')}
              className={`hover:text-emerald-400 transition-colors cursor-pointer ${title.includes('FAQ') ? 'text-emerald-400 font-bold' : ''}`}
            >
              FAQ
            </button>
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className={`hover:text-emerald-400 transition-colors cursor-pointer ${title.includes('About') ? 'text-emerald-400 font-bold' : ''}`}
            >
              About
            </button>
            <button
              type="button"
              onClick={() => onNavigate('support')}
              className={`hover:text-emerald-400 transition-colors cursor-pointer ${title.includes('Support') ? 'text-emerald-400 font-bold' : ''}`}
            >
              Support
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('home', 'pricing')}
              className="text-xs font-bold px-3.5 py-2 rounded-lg text-zinc-300 hover:text-white transition-colors hidden sm:block cursor-pointer"
            >
              Pro Plans
            </button>
            <a
              href="https://clipvault.lemonsqueezy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold px-4 py-2 rounded-lg bg-emerald-400 text-black hover:bg-emerald-300 transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Free (.exe)</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="pt-28 pb-20 px-4 sm:px-6 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Dedicated Page Header */}
          <div className="mb-12 pb-8 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-emerald-400/20 text-xs font-medium text-emerald-400 mb-4 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{category}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {lastUpdated && (
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            )}
          </div>

          {/* Page Body */}
          <div className="space-y-10 text-zinc-300 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </main>

      {/* ── 4-COLUMN FOOTER ── */}
      <footer className="pt-16 pb-12 px-4 sm:px-6 border-t border-white/10 bg-[#06070a] text-zinc-400 text-xs">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Column 1: Company */}
            <div>
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('about')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    About ClipVault
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('support')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Contact Support
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Product */}
            <div>
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-4">Product</h4>
              <ul className="space-y-2.5">
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('home', 'features')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    1-Click Auto Clipper
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('home', 'interactive-suite')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Timeline Editor &amp; Trimmer
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('home', 'advantage')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Core Capabilities
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('home', 'pricing')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Creator Pro &amp; Max Plans
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2.5">
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('faq')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Help Center &amp; FAQ
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('home', 'demo')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Interactive Demo
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('setup')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Setup Assistance
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('refunds')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    14-Day Money-Back Guarantee
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Trust & Legal */}
            <div>
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-4">Trust &amp; Legal</h4>
              <ul className="space-y-2.5">
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('terms')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Terms of Use
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('privacy')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Privacy Policy (Zero Ingestion)
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('eula')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Workstation EULA v2.5
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onNavigate('refunds')} 
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    Refund Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ClipVault" className="w-5 h-5 rounded shadow" />
              <span className="text-white font-bold text-xs">ClipVault</span>
              <span>© 2026 ClipVault AI. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-500">
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
