import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { MessageCircle, Camera, Video, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    Icon: MessageCircle,
    title: 'Daily Check-ins',
    description: 'DIDI messages you proactively — morning, afternoon, evening. A real question that waits for your answer.',
    accent: 'bg-primary/10 text-primary',
  },
  {
    Icon: Camera,
    title: 'Tongue Scans',
    description: 'Point your camera, tap once. DIDI reads hydration signals from colour, texture, and moisture in seconds.',
    accent: 'bg-primary/10 text-primary',
  },
  {
    Icon: Video,
    title: 'Video Messages',
    description: 'Send a short video message — DIDI watches and responds with personalised guidance.',
    accent: 'bg-accent-amber/10 text-accent-amber',
  },
];

export function HowItWorksTeaser() {
  return (
    <Section variant="light">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
        How DIDI works
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {FEATURES.map(({ Icon, title, description, accent }) => (
          <div
            key={title}
            className="surface surface-hover rounded-3xl p-6"
          >
            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accent}`}>
              <Icon size={22} />
            </div>
            <h3 className="font-display text-xl font-bold text-text">{title}</h3>
            <p className="mt-2 text-text-secondary">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
        >
          See all features <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
