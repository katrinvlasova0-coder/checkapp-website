import { Section } from '@/components/ui/Section';
import { Droplets, BarChart3, BellOff } from 'lucide-react';

const PROBLEMS = [
  {
    Icon: Droplets,
    text: 'You forget to drink water until you have a headache.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    Icon: BarChart3,
    text: 'Health apps show charts. Nobody tells you what to do.',
    color: 'text-accent-amber',
    bg: 'bg-accent-amber/10',
  },
  {
    Icon: BellOff,
    text: 'Generic reminders get ignored after day three.',
    color: 'text-text-secondary',
    bg: 'bg-forest/10',
  },
];

export function ProblemSection() {
  return (
    <Section variant="light">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          Most health apps track your data. DIDI talks to you.
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Adults lose up to 2.5&nbsp;L of water daily through normal bodily functions{' '}
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/drinking-water"
            className="text-primary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            (WHO)
          </a>
          . Yet most apps just count glasses — they never ask how you feel.
        </p>
      </div>

      {/* Bento grid */}
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {PROBLEMS.map(({ Icon, text, color, bg }) => (
          <div
            key={text}
            className="surface surface-hover rounded-3xl p-6"
          >
            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${bg}`}>
              <Icon size={24} className={color} />
            </div>
            <p className="text-lg font-medium leading-snug text-text">{text}</p>
          </div>
        ))}
      </div>

      <p className="mt-14 text-center font-display text-2xl font-bold text-primary">
        DIDI is different.
      </p>
    </Section>
  );
}
