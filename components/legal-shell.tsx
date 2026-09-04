import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Brand from './brand';

type LegalShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  children: React.ReactNode;
};

export default function LegalShell({ eyebrow, title, intro, updated, children }: LegalShellProps) {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <Brand compact />
        <nav aria-label="Legal navigation">
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/support/">Support</Link>
        </nav>
      </header>
      <main className="legal-main">
        <Link className="back-link" href="/"><ArrowLeft size={17} /> Back to Homi</Link>
        <div className="legal-title">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          {updated ? <small>Last updated: {updated}</small> : null}
        </div>
        <div className="legal-content">{children}</div>
      </main>
      <footer className="legal-footer">
        <Brand compact />
        <p>(c) 2026 Homi. All rights reserved.</p>
      </footer>
    </div>
  );
}
