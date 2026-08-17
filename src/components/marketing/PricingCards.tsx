import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TESTFLIGHT_URL } from '@/lib/constants';

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    features: [
      '5 DIDI messages/month',
      '3 tongue scans',
      'Basic streaks',
    ],
    highlighted: false,
  },
  {
    name: 'Base',
    price: '$9.99/mo',
    features: [
      'Unlimited messages',
      '10 scans/month',
      'Full history',
    ],
    highlighted: true,
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
    <div className="grid gap-6 md:grid-cols-3">
      {PLANS.map((plan) => (
        <Card
          key={plan.name}
          className={`relative ${plan.highlighted ? 'ring-2 ring-primary ring-offset-2 ring-offset-bg-warm' : ''}`}
        >
          {plan.highlighted && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white">
              Popular
            </span>
          )}
          <h3 className="font-display text-xl font-bold">{plan.name}</h3>
          <p className="mt-2 font-display text-3xl font-bold text-primary">{plan.price}</p>
          <ul className="mt-6 space-y-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-primary" aria-hidden="true">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </Card>
      ))}

      <div className="md:col-span-3 mt-4 text-center">
        <Button href={TESTFLIGHT_URL} external trackingPage="features" trackingPosition="pricing">
          Get Started Free
        </Button>
      </div>
    </div>
  );
}
