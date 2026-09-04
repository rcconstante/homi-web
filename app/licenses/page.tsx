import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import LegalShell from '@/components/legal-shell';

export const metadata: Metadata = {
  title: 'Open Source Licenses',
  description: 'Open-source projects used to build Homi and the Homi website.',
  alternates: { canonical: '/licenses/' },
};

const libraries = [
  { name: 'React Native', license: 'MIT', url: 'https://github.com/facebook/react-native/blob/main/LICENSE' },
  { name: 'Expo', license: 'MIT', url: 'https://github.com/expo/expo/blob/main/LICENSE' },
  { name: 'Expo Router', license: 'MIT', url: 'https://github.com/expo/router/blob/main/LICENSE' },
  { name: 'React', license: 'MIT', url: 'https://github.com/facebook/react/blob/main/LICENSE' },
  { name: 'Next.js', license: 'MIT', url: 'https://github.com/vercel/next.js/blob/canary/license.md' },
  { name: 'SQLite', license: 'Public Domain', url: 'https://www.sqlite.org/copyright.html' },
  { name: 'Lucide', license: 'ISC', url: 'https://github.com/lucide-icons/lucide/blob/main/LICENSE' },
] as const;

export default function LicensesPage() {
  return (
    <LegalShell
      eyebrow="Licenses"
      title="Built with open-source software."
      intro="Homi benefits from the work of open-source maintainers. The links below lead to the license text published by each project."
    >
      <div className="license-list">
        {libraries.map((library) => (
          <a href={library.url} target="_blank" rel="noreferrer" key={library.name}>
            <span><strong>{library.name}</strong><small>{library.license}</small></span>
            <ExternalLink size={17} />
          </a>
        ))}
      </div>
      <section>
        <h2>Notices</h2>
        <p>This summary is provided for convenience and is not a replacement for license notices distributed with the application. Copyright remains with each project and its contributors.</p>
      </section>
    </LegalShell>
  );
}
