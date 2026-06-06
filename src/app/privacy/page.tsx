import { JsonLd } from '@/components/layout/JsonLd';
import { Section } from '@/components/ui/Section';
import { createMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Privacy Policy — CheckApp',
  description:
    'CheckApp privacy policy: how we collect, use, and protect your health data, AI processing, and your rights.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ])}
      />

      <Section variant="light" className="pt-24 md:pt-28">
        <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-text-secondary">Last updated: June 1, 2026</p>

        <div className="prose-checkapp mt-10 max-w-3xl">
          <h2>What data we collect</h2>
          <p>
            When you use CheckApp, we may collect: account information (email, name), health check-in
            data (mood, symptoms, hydration logs), tongue scan photos, short video messages,
            device information, and usage analytics.
          </p>

          <h2>How we use AI</h2>
          <p>
            DIDI uses AI (including Claude Vision) to analyze tongue photos, generate wellness
            guidance, and respond to your messages. Your health data is processed to provide
            personalized recommendations. We do not use your data to train third-party AI models
            without your explicit consent.
          </p>

          <h2>Data storage and security</h2>
          <p>
            Your data is stored securely using industry-standard encryption. Tongue scan photos and
            video messages are stored in encrypted cloud storage. We retain data as long as your
            account is active or as required by law.
          </p>

          <h2>Your rights</h2>
          <p>
            You have the right to access, export, correct, or delete your personal data at any time.
            Contact us at hello@checkapp.health to exercise these rights. If you are in the EU/EEA,
            you have additional rights under GDPR including data portability and the right to lodge
            a complaint with a supervisory authority.
          </p>

          <h2>Third-party services</h2>
          <p>
            We use Supabase (database and auth), Vercel (hosting), PostHog (analytics), and Apple
            (app distribution). Each service has its own privacy policy governing data
            they process on our behalf.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions: <a href="mailto:hello@checkapp.health">hello@checkapp.health</a>
          </p>
        </div>
      </Section>
    </>
  );
}
