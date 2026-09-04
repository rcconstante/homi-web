import type { Metadata } from 'next';
import LegalShell from '@/components/legal-shell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Homi handles household records, documents, receipt scans, notifications, and purchase information.',
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Privacy"
      title="Your home data stays yours."
      intro="Homi is a local-first household organizer. This policy explains what the app stores, when platform services are involved, and the choices you control."
      updated="September 4, 2026"
    >
      <section>
        <h2>1. Information stored by Homi</h2>
        <p>Homi stores the profile name and preferred currency you choose, appliance records, maintenance records, receipts, imported documents, notes, and app settings. These records are stored locally in the app&apos;s private storage on your device.</p>
        <p>Homi does not require an account and does not operate a cloud database for household records. Your data does not sync between devices.</p>
      </section>
      <section>
        <h2>2. Camera and receipt processing</h2>
        <p>Camera access is used only when you choose to scan a receipt. Captured images are processed on the device using supported Apple or Android text-recognition services. You can review and edit extracted details before saving them.</p>
        <p>Receipt images, recognized text, and extracted appliance details are not uploaded by Homi to a remote server. If recognition is unavailable, you can complete the fields manually.</p>
      </section>
      <section>
        <h2>3. Documents and photos</h2>
        <p>When you import a PDF or image, Homi copies the selected file into the app&apos;s local storage so it can appear in the Warranty Vault. Homi accesses only files you explicitly select through the system picker.</p>
      </section>
      <section>
        <h2>4. Notifications</h2>
        <p>If you grant notification permission, Homi schedules local reminders for maintenance and warranty dates. Reminder information is handled by your device&apos;s operating system. You can disable notifications in system settings at any time.</p>
      </section>
      <section>
        <h2>5. Purchases</h2>
        <p>Homi Pro purchases are processed by Apple App Store or Google Play and managed through RevenueCat. These providers may process transaction identifiers, product information, entitlement status, device or app identifiers, and diagnostic information under their own privacy policies.</p>
        <p>Homi receives entitlement status needed to unlock Pro. Homi does not receive or store your full payment-card details.</p>
      </section>
      <section>
        <h2>6. Analytics, advertising, and sales</h2>
        <p>Homi does not include third-party advertising, does not sell personal information, and does not use your household records to build advertising profiles. The current app does not send household usage analytics to Homi.</p>
      </section>
      <section>
        <h2>7. Retention and deletion</h2>
        <p>Records remain on your device until you delete them or uninstall the app. Deleting an appliance or document removes that record from Homi. Operating-system backups may retain app data according to your device and backup settings.</p>
        <p>Because Homi does not hold a cloud copy of household records, we cannot recover local data after it is deleted or the app is removed.</p>
      </section>
      <section>
        <h2>8. Children</h2>
        <p>Homi is a general household utility and is not directed to children under 13. We do not knowingly collect children&apos;s personal information.</p>
      </section>
      <section>
        <h2>9. Changes to this policy</h2>
        <p>We may update this policy when Homi&apos;s features or legal obligations change. The revised date will appear at the top of this page.</p>
      </section>
      <section>
        <h2>10. Contact</h2>
        <p>Questions about privacy can be sent to <a href="mailto:hello@rcconstante.dev">hello@rcconstante.dev</a>.</p>
      </section>
    </LegalShell>
  );
}
