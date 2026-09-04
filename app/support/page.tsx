import type { Metadata } from 'next';
import LegalShell from '@/components/legal-shell';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with Homi appliance records, receipt scanning, reminders, documents, and Homi Pro.',
  alternates: { canonical: '/support/' },
};

const questions = [
  {
    question: 'Where does Homi store my household data?',
    answer: 'Homi stores your records and imported documents locally in the app on your device. Homi does not currently sync household data to a cloud account.',
  },
  {
    question: 'Why could Homi not read my receipt?',
    answer: 'Use bright, even lighting, keep the receipt flat, and fit the full receipt inside the frame. You can retry the scan or enter the appliance details manually. Failed recognition does not count as a successful free scan.',
  },
  {
    question: 'How do I restore Homi Pro?',
    answer: 'Open the Homi Pro screen and choose Restore Purchases while signed into the same Apple or Google store account used for the original purchase.',
  },
  {
    question: 'Why did I not receive a reminder?',
    answer: 'Check that notifications are allowed for Homi in system settings and that the maintenance or warranty date is still in the future. Device power-saving settings can also affect delivery.',
  },
  {
    question: 'Can I move my Homi data to another phone?',
    answer: 'Homi is currently local-first and has no account sync. Platform device backups may include app data, but availability and restoration depend on your operating-system settings.',
  },
  {
    question: 'How do I delete a document or appliance?',
    answer: 'Open the item, choose Edit or the item menu, then select Delete. Deleting an appliance frees one active appliance slot for free users.',
  },
] as const;

export default function SupportPage() {
  return (
    <LegalShell
      eyebrow="Support"
      title="Help for your Homi."
      intro="Find quick answers below or send a message with your device model, operating-system version, and a short description of what happened."
    >
      <section className="support-contact">
        <h2>Email support</h2>
        <p>For bug reports, purchase help, privacy questions, or feature requests.</p>
        <a className="contact-button" href="mailto:hello@rcconstante.dev?subject=Homi%20support">hello@rcconstante.dev</a>
      </section>
      <section>
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section>
        <h2>Before contacting support</h2>
        <p>Force-close and reopen Homi, confirm that the app is updated, and check camera or notification permission in system settings. Never email payment-card details, full receipts containing sensitive information, or device passcodes.</p>
      </section>
    </LegalShell>
  );
}
