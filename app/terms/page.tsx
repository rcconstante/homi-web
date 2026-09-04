import type { Metadata } from 'next';
import LegalShell from '@/components/legal-shell';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms that apply when you use the Homi household management app and website.',
  alternates: { canonical: '/terms/' },
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Terms"
      title="Simple terms for using Homi."
      intro="These terms apply to the Homi mobile application and this website. By using Homi, you agree to them."
      updated="September 4, 2026"
    >
      <section>
        <h2>1. Using Homi</h2>
        <p>Homi helps you organize appliance information, receipts, warranties, documents, maintenance schedules, and household spending. You may use Homi for personal and lawful household purposes.</p>
        <p>You are responsible for the accuracy of information you enter or approve, for keeping your device secure, and for maintaining any backups you require.</p>
      </section>
      <section>
        <h2>2. Receipt recognition</h2>
        <p>Text recognition and structured extraction are convenience features. Results may be incomplete or incorrect. You must review dates, prices, product details, warranty terms, and other extracted information before relying on it.</p>
      </section>
      <section>
        <h2>3. Maintenance and warranty reminders</h2>
        <p>Homi reminders are organizational aids, not professional maintenance, safety, legal, insurance, or warranty advice. A missing, delayed, or incorrect reminder does not replace manufacturer instructions, inspections, recalls, or qualified professional service.</p>
      </section>
      <section>
        <h2>4. Homi Pro purchases</h2>
        <p>Homi may offer a lifetime Homi Pro entitlement as a one-time in-app purchase. The price shown by Apple or Google at checkout is the price that applies and may vary by country, taxes, and store localization.</p>
        <p>Payments, cancellations, refunds, and restores are handled by the store where you purchased Homi Pro and are subject to that store&apos;s terms. A refunded or revoked entitlement may restrict creation of new records beyond the current free limits but will not intentionally delete existing local records.</p>
      </section>
      <section>
        <h2>5. Your content</h2>
        <p>You retain ownership of the records and documents you add. You confirm that you have the right to store that content and that it does not violate law or another person&apos;s rights.</p>
      </section>
      <section>
        <h2>6. License</h2>
        <p>We grant you a limited, personal, non-exclusive, non-transferable, revocable license to use Homi on devices you own or control, subject to these terms and the applicable app-store rules. You may not reverse engineer, resell, sublicense, or use Homi to violate law.</p>
      </section>
      <section>
        <h2>7. Availability and changes</h2>
        <p>We may improve, change, suspend, or discontinue features. Device capabilities, operating-system support, app-store availability, and third-party platform services can affect how features work.</p>
      </section>
      <section>
        <h2>8. Disclaimer</h2>
        <p>Homi is provided on an &quot;as is&quot; and &quot;as available&quot; basis to the extent permitted by law. We do not promise uninterrupted operation, error-free extraction, preservation of local data, or fitness for a particular purpose.</p>
      </section>
      <section>
        <h2>9. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, Homi and its developer will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost data, missed maintenance, warranty loss, property damage, or lost profits arising from use of the app.</p>
      </section>
      <section>
        <h2>10. Changes and contact</h2>
        <p>We may update these terms. Continued use after an update means you accept the revised terms. Questions can be sent to <a href="mailto:hello@rcconstante.dev">hello@rcconstante.dev</a>.</p>
      </section>
    </LegalShell>
  );
}
