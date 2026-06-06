import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type BlogInlineCtaProps = {
  slug: string;
};

/** Subtle mid-article nudge — not a duplicate of the green download banner. */
export function BlogInlineCta({ slug }: BlogInlineCtaProps) {
  return (
    <aside
      className="my-12 rounded-2xl border border-primary/15 bg-primary/5 p-6 md:p-8"
      aria-label="Related product"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
        Try it in CheckApp
      </p>
      <h2 className="mt-2 font-display text-xl font-bold text-text md:text-2xl">
        Let DIDI turn this advice into a daily habit
      </h2>
      <p className="mt-2 text-text-secondary">
        Morning check-ins, tongue scans, and personalised nudges — so you don&apos;t have to
        remember everything yourself.
      </p>
      <Link
        href="/features"
        className="mt-4 inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
        data-cta={`blog-${slug}-inline-features`}
      >
        See how DIDI works <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </aside>
  );
}
