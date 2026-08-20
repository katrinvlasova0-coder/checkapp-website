import { Gift } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { APP_DOWNLOAD_URL } from '@/lib/constants';

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    features: [
      'Daily check-ins with DIDI',
      'Tongue scans',
      'Streaks & health memory',
    ],
    highlighted: true,
  },
  {
    name: 'Base',
    price: '$9.99/mo',
    features: [
      'Unlimited messages',
      'More scans each month',
      'Full history',
    ],
    highlighted: false,
  },
  {
    name: 'Premium+',
    price: '$19.99/mo',
    features: [
      'Everything in Base',
      'Advanced AI analysis',
      'Priority DIDI responses',
    ],
    highlighted: false,
  },
];

export function PricingCards() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-[1.75rem] border border-primary/20 bg-primary/5 p-6 md:flex-row md:items-center md:gap-6 md:p-7">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_10px_28px_rgb(88_131_23/0.28)]">
          <Gift size={28} strokeWidth={1.75} aria-hidden />
        </div>
        <div>
          <p className="font-display text-xl font-bold text-forest">CheckApp is free</p>
          <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-text-secondary">
            We believe everyone deserves access to quality tools for taking care of their health —
            so the core experience with DIDI stays free. No credit card. No lock-in.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${plan.highlighted ? 'ring-2 ring-primary ring-offset-2 ring-offset-bg-warm' : ''}`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white">
                Start here
              </span>
            )}
            <h3 className="font-display text-xl font-bold">{plan.name}</h3>
            <p className="mt-2 font-display text-3xl font-bold text-primary">{plan.price}</p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-primary" aria-hidden="true">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Card>
        ))}

        <div className="md:col-span-3 mt-4 text-center">
          <Button href={APP_DOWNLOAD_URL} trackingPage="features" trackingPosition="pricing">
            Get Started Free
          </Button>
        </div>
      </div>
    </div>
  );
}
