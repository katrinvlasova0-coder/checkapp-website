import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { APP_DOWNLOAD_URL } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

type CtaBannerProps = {
  headline?: string;
  subheadline?: string;
  page?: string;
  position?: string;
};

export function CtaBanner({
  headline = 'Your health deserves a friend, not a dashboard.',
  subheadline = 'Start free. No credit card. DIDI is waiting for you.',
  page = 'unknown',
  position = 'banner',
}: CtaBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-forest via-forest-mid to-primary p-8 text-center text-white md:p-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 90% 0%, rgb(147 176 80 / 0.32) 0%, transparent 58%), radial-gradient(ellipse 50% 50% at 0% 100%, rgb(88 131 23 / 0.2) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{headline}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">{subheadline}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={APP_DOWNLOAD_URL}
            external
            trackingPage={page}
            trackingPosition={position}
            className="!bg-white !text-forest !shadow-[0_8px_24px_rgb(0_0_0/0.18)] hover:!bg-white/90"
          >
            Get CheckApp Free
          </Button>
          <Link
            href="/features"
            className="inline-flex items-center gap-1 text-sm font-semibold text-white/80 transition-colors hover:text-white"
          >
            See all features <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
