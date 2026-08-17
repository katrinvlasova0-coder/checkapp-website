import Link from 'next/link';
import { ArrowRight, UserCircle, TrendingUp, ShieldCheck, MessageSquareHeart } from 'lucide-react';
import { BlogRelatedCard } from '@/components/blog/BlogRelatedCard';
import { getFourPMedicinePosts } from '@/lib/blog';

const PILLARS = [
  {
    number: '01',
    Icon: UserCircle,
    title: 'Personalisation',
    subtitle: 'Your data. Your story.',
    description:
      'DIDI learns your rhythms — sleep patterns, hydration habits, how you feel after a rough night. Every suggestion is shaped by you, not by an average population curve.',
    example: 'Example: DIDI knows you drink less water on Mondays and nudges you earlier that day.',
    accent: 'from-primary/30 to-transparent',
    iconColor: 'text-primary-light',
    iconBg: 'bg-primary/20',
  },
  {
    number: '02',
    Icon: TrendingUp,
    title: 'Prediction',
    subtitle: 'Catch signals before they become problems.',
    description:
      'Small changes in tongue colour, skin texture, or energy levels can signal shifts worth monitoring. DIDI tracks these patterns and flags them early — so you can act, not react.',
    example: 'Example: Consistent dry-tongue signals over three days prompt DIDI to suggest a hydration focus week.',
    accent: 'from-primary-light/20 to-transparent',
    iconColor: 'text-primary-light',
    iconBg: 'bg-white/10',
  },
  {
    number: '03',
    Icon: ShieldCheck,
    title: 'Prevention',
    subtitle: 'Daily micro-habits. Long-term impact.',
    description:
      'The cheapest healthcare is the kind you never need. DIDI suggests small, sustainable actions — drink one more glass, step outside for five minutes, try breathing before bed — that accumulate into lasting change.',
    example: 'Example: DIDI notices low hydration streaks and suggests keeping a water bottle at your desk.',
    accent: 'from-accent-amber/25 to-transparent',
    iconColor: 'text-accent-amber',
    iconBg: 'bg-accent-amber/15',
  },
  {
    number: '04',
    Icon: MessageSquareHeart,
    title: 'Participativeness',
    subtitle: 'You are the expert on you.',
    description:
      'DIDI doesn\'t broadcast. She listens. Through daily conversations, video circles, and streak celebrations, you stay in active dialogue with your own wellness — not just a passive tracker.',
    example: 'Example: You send a video circle showing you\'re tired. DIDI responds with context-aware suggestions instead of a generic alert.',
    accent: 'from-white/10 to-transparent',
    iconColor: 'text-white',
    iconBg: 'bg-white/10',
  },
];

export function FourPMedicine() {
  const articles = getFourPMedicinePosts(4);

  return (
    <section className="relative overflow-hidden bg-forest py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgb(147_176_80/0.22),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary-light/30 bg-primary-light/10 px-4 py-1.5 text-sm font-semibold text-primary-light">
            Built on 4P Medicine
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">
            Wellness that actually works for you
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            4P Medicine — Personalised, Predictive, Preventive, and Participative — is the
            framework driving everything DIDI does. It's the science of treating the individual,
            not the symptom.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {PILLARS.map(({ number, Icon, title, subtitle, description, example, accent, iconColor, iconBg }) => (
            <div
              key={title}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${accent} border border-white/10 p-8 backdrop-blur-sm`}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}>
                  <Icon size={24} className={iconColor} />
                </div>
                <span className="font-display text-4xl font-black text-white/10">{number}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
              <p className={`mt-1 text-sm font-semibold ${iconColor}`}>{subtitle}</p>
              <p className="mt-3 leading-relaxed text-white/70">{description}</p>
              <p className="mt-4 rounded-xl bg-white/5 px-4 py-3 text-sm italic text-white/50">
                {example}
              </p>
            </div>
          ))}
        </div>

        {/* Attribution */}
        <p className="mt-10 text-center text-sm text-white/40">
          4P Medicine framework developed by Leroy Hood, PhD. CheckApp applies these principles for
          consumer wellness guidance only — not for clinical use.
        </p>

        {articles.length > 0 && (
          <div className="mt-16 border-t border-white/10 pt-12">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                  Learn more about 4P Medicine
                </h3>
                <p className="mt-2 max-w-xl text-white/60">
                  Deep dives from our blog — personalised, predictive, preventive, and participative
                  wellness in practice.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary-light hover:underline"
              >
                All articles <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {articles.map((post) => (
                <BlogRelatedCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
