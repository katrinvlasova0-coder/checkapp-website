import { Section } from '@/components/ui/Section';

const TESTIMONIALS = [
  {
    quote: 'I drank 3x more water in my first week just because DIDI kept asking.',
    author: 'Sarah K.',
    role: 'nurse',
    stars: 5,
  },
  {
    quote: 'Finally a health app that feels like a conversation, not a spreadsheet.',
    author: 'Marcus T.',
    role: 'entrepreneur',
    stars: 5,
  },
  {
    quote: "The tongue scan thing sounds weird but I'm obsessed. It's actually accurate.",
    author: 'Lena V.',
    role: 'designer',
    stars: 5,
  },
];

const METRICS = [
  { value: '2,400+', label: 'users' },
  { value: '94%', label: 'daily retention week 1' },
  { value: '4.8★', label: 'average rating' },
];

export function TestimonialCarousel() {
  return (
    <Section variant="dark">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
        Loved by people who hate health apps
      </h2>

      <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="min-w-[280px] flex-shrink-0 snap-center rounded-3xl bg-white/5 p-6 backdrop-blur-sm md:min-w-0"
          >
            <div className="text-accent-amber" aria-label={`${t.stars} out of 5 stars`}>
              {'★'.repeat(t.stars)}
            </div>
            <p className="mt-4 text-lg leading-relaxed text-white/90">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-4 text-sm text-white/50">
              — {t.author}, {t.role}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8">
        {METRICS.map((m) => (
          <div key={m.label} className="text-center">
            <div className="font-display text-3xl font-bold text-primary-light">{m.value}</div>
            <div className="text-sm text-white/50">{m.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
