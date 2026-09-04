import type { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Brand from '@/components/brand';

export const metadata: Metadata = {
  title: 'You are on the list',
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main className="thanks-page">
      <Brand />
      <section className="thanks-card">
        <span className="thanks-check"><Check size={32} /></span>
        <p>Early access</p>
        <h1>You&apos;re on the Homi list.</h1>
        <span>We will send meaningful launch updates to the email address you provided.</span>
        <Link className="button button-primary" href="/">Back to Homi <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}
