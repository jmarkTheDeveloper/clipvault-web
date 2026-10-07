import React from 'react';
import { PageShell, PageRoute } from './PageShell';
import { ShieldCheck, CheckCircle2, Clock, Mail, ExternalLink } from 'lucide-react';

export const RefundsPage: React.FC<{ onNavigate: (route: PageRoute) => void }> = ({ onNavigate }) => {
  return (
    <PageShell
      category="Trust & Legal"
      title="14-Day Money-Back Guarantee"
      subtitle="Try ClipVault completely risk-free on your workstation. If it doesn't fit your workflow, get a prompt, 100% full refund."
      lastUpdated="October 2026"
      onNavigate={onNavigate}
    >
      {/* Guarantee Hero Card */}
      <div className="p-6 rounded-2xl bg-emerald-400/[0.04] border border-emerald-400/25 space-y-3">
        <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>100% Risk-Free Guarantee</span>
        </div>
        <p className="text-zinc-200 text-sm leading-relaxed">
          We want you to be entirely satisfied with ClipVault's rendering performance, active speaker tracking, and timeline editor. If ClipVault does not perform reliably on your computer or does not suit your video editing requirements, you are entitled to a full 100% refund within 14 days of your initial purchase date.
        </p>
      </div>

      <section className="space-y-4 pt-2">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">How to Claim Your Refund (2 Simple Methods)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Method 1 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <span className="w-6 h-6 rounded-lg bg-emerald-400/10 text-emerald-400 font-bold text-xs flex items-center justify-center">1</span>
            <h3 className="font-bold text-white text-sm">Send a Direct Email</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Email us directly at <span className="text-emerald-400 font-mono">studioclipvault@gmail.com</span> with your checkout email or order number. No complicated questionnaires or justifications required.
            </p>
            <a
              href="mailto:studioclipvault@gmail.com?subject=ClipVault%20Refund%20Request"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline pt-1"
            >
              <span>Email Support Team</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Method 2 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
            <span className="w-6 h-6 rounded-lg bg-emerald-400/10 text-emerald-400 font-bold text-xs flex items-center justify-center">2</span>
            <h3 className="font-bold text-white text-sm">Lemon Squeezy Self-Service</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Log into <span className="text-zinc-200 font-mono">app.lemonsqueezy.com/my-orders</span>, locate your ClipVault order receipt, and click <strong>"Request Refund"</strong>.
            </p>
            <a
              href="https://app.lemonsqueezy.com/my-orders"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline pt-1"
            >
              <span>Open Customer Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">Refund Processing Timeline</h2>
        <ul className="space-y-2 text-xs text-zinc-300">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Refund requests are reviewed and initiated within <strong>24 to 48 business hours</strong>.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Funds are credited directly back to your original payment method (Credit Card, PayPal, Apple Pay, Google Pay).</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Depending on your issuing bank, the balance will appear on your statement within 3–7 business days.</span>
          </li>
        </ul>
      </section>

      <section className="space-y-3 pt-4 border-t border-white/5">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">Subscription Cancellations</h2>
        <p className="text-zinc-300 text-xs leading-relaxed">
          You can cancel recurring monthly or annual renewals at any moment with 1 click in your Lemon Squeezy order dashboard. Your access will continue through the end of the paid billing period with zero recurring charges thereafter.
        </p>
      </section>
    </PageShell>
  );
};
