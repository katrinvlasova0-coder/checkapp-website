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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light to-primary p-8 text-center text-white md:p-12">
      {/* Dark radial overlay on top-right for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 85% 10%, rgba(0,0,0,0.22) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 10% 90%, rgba(0,0,0,0.15) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Geometric line pattern — much higher opacity for visible texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        {/* Diagonal stripes */}
        <line x1="0"   y1="35%" x2="100%" y2="-5%"  stroke="white" strokeOpacity="0.18" strokeWidth="1" />
        <line x1="0"   y1="60%" x2="100%" y2="20%"  stroke="white" strokeOpacity="0.14" strokeWidth="1" />
        <line x1="0"   y1="85%" x2="100%" y2="45%"  stroke="white" strokeOpacity="0.10" strokeWidth="1" />
        <line x1="0"   y1="110%" x2="100%" y2="70%" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        <line x1="0"   y1="-5%"  x2="55%"  y2="105%" stroke="white" strokeOpacity="0.14" strokeWidth="1" />
        <line x1="45%" y1="-5%"  x2="100%" y2="105%" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
        {/* Horizontal accent lines */}
        <line x1="0"   y1="22%"  x2="25%"  y2="22%"  stroke="white" strokeOpacity="0.22" strokeWidth="1.5" />
        <line x1="75%" y1="78%"  x2="100%" y2="78%"  stroke="white" strokeOpacity="0.22" strokeWidth="1.5" />
        <line x1="0"   y1="78%"  x2="18%"  y2="78%"  stroke="white" strokeOpacity="0.14" strokeWidth="1" />
        {/* Large corner arcs */}
        <circle cx="0"    cy="0"    r="180" fill="none" stroke="white" strokeOpacity="0.14" strokeWidth="1.5" />
        <circle cx="100%" cy="100%" r="220" fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />
        <circle cx="100%" cy="0"    r="120" fill="none" stroke="white" strokeOpacity="0.10" strokeWidth="1" />
        <circle cx="0"    cy="100%" r="90"  fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        {/* Small decorative dots */}
        <circle cx="92%" cy="12%"  r="3" fill="white" fillOpacity="0.25" />
        <circle cx="8%"  cy="85%"  r="2" fill="white" fillOpacity="0.20" />
        <circle cx="50%" cy="5%"   r="2" fill="white" fillOpacity="0.18" />
      </svg>

      <div className="relative z-10">
        <h2 className="font-display text-2xl font-bold md:text-4xl">{headline}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">{subheadline}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={APP_DOWNLOAD_URL}
            external
            variant="ghost"
            trackingPage={page}
            trackingPosition={position}
            className="!border-white !text-white hover:!bg-white/10"
          >
            Get CheckApp Free
          </Button>
          <Link
            href="/features"
            className="inline-flex items-center gap-1 text-sm font-semibold text-white/80 underline hover:text-white"
          >
            See all features <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
