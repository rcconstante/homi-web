import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://homi.rcconstante.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Homi | Your home remembers everything',
    template: '%s | Homi',
  },
  description:
    'Track appliances, organize warranties and receipts, schedule maintenance, and understand household spending with Homi.',
  keywords: [
    'Homi',
    'home maintenance app',
    'appliance tracker',
    'warranty organizer',
    'receipt scanner',
    'household management',
  ],
  authors: [{ name: 'Richmond Constante', url: 'https://rcconstante.dev' }],
  creator: 'Richmond Constante',
  applicationName: 'Homi',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Homi',
    title: 'Homi | Your home remembers everything',
    description:
      'Keep appliances, warranties, receipts, maintenance, and spending in one private home record.',
    images: [
      {
        url: '/onboarding-home.png',
        width: 624,
        height: 1024,
        alt: 'Homi home management app introduction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homi | Your home remembers everything',
    description:
      'Keep appliances, warranties, receipts, maintenance, and spending in one private home record.',
    images: ['/onboarding-home.png'],
  },
  icons: {
    icon: '/app-icon.png',
    apple: '/app-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b4a34',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable}`}>{children}</body>
    </html>
  );
}
