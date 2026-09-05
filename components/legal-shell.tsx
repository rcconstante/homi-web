import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

type LegalShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  children: React.ReactNode;
};

export default function LegalShell({ eyebrow, title, intro, updated, children }: LegalShellProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gray-900"><ChevronLeft size={16} /> Back to Homi</Link>
        <header className="mb-12">
          <div className="mb-6 flex items-center gap-3"><img src="/app-icon.png" alt="" className="h-10 w-10 rounded-xl" /><span className="text-2xl font-extrabold tracking-tight">Homi</span></div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#075A39]">{eyebrow}</p>
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-gray-900">{title}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-500">{intro}</p>
          {updated ? <p className="mt-3 text-sm text-gray-400">Last updated: {updated}</p> : null}
        </header>
        <div className="mb-12 h-px bg-gray-100" />
        <div className="legal-content space-y-10 leading-relaxed text-gray-600">{children}</div>
        <div className="mb-8 mt-16 h-px bg-gray-100" />
        <footer className="flex items-center justify-between gap-4 text-xs text-gray-400">
          <span>© 2026 Homi</span>
          <nav className="flex gap-4" aria-label="Legal pages"><Link href="/privacy/" className="hover:text-gray-900">Privacy</Link><Link href="/terms/" className="hover:text-gray-900">Terms</Link><Link href="/support/" className="hover:text-gray-900">Support</Link></nav>
        </footer>
      </main>
    </div>
  );
}
