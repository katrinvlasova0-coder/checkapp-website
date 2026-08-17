import { type ReactNode } from 'react';
import { SiteImage } from '@/components/ui/SiteImage';

type FeatureRowProps = {
  title: string;
  description: string;
  visual: ReactNode;
  reversed?: boolean;
};

export function FeatureRow({ title, description, visual, reversed = false }: FeatureRowProps) {
  return (
    <div
      className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${
        reversed ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="flex-1">
        <h3 className="font-display text-2xl font-bold md:text-3xl">{title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">{description}</p>
      </div>
      <div className="flex flex-1 justify-center">{visual}</div>
    </div>
  );
}

export function ChatBubbleVisual() {
  return (
    <div className="w-full max-w-sm rounded-[1.75rem] border border-black/[0.06] bg-bg-warm p-5 shadow-[0_1px_2px_rgb(14_31_1/0.04),0_16px_40px_rgb(14_31_1/0.06)]">
      <div className="mb-3 flex items-center gap-2">
        <SiteImage src="/assets/didi-avatar-header.png" alt="" width={28} height={28} className="rounded-full" />
        <span className="text-sm font-semibold">DIDI</span>
      </div>
      <div className="space-y-3">
        <div className="rounded-2xl rounded-bl-sm bg-bubble-didi px-4 py-3 text-sm text-text-secondary">
          Good morning! How are you feeling today? 🌅
        </div>
        <div className="ml-auto w-4/5 rounded-2xl rounded-br-sm bg-bubble-user px-4 py-3 text-sm text-text-secondary">
          A bit tired, but okay!
        </div>
        <div className="rounded-2xl rounded-bl-sm bg-bubble-didi px-4 py-3 text-sm text-text-secondary">
          Let&apos;s start with a glass of water 💧
        </div>
      </div>
    </div>
  );
}

export function HydrationMeterVisual() {
  return (
    <div className="w-full max-w-sm rounded-[1.75rem] border border-black/[0.06] bg-card p-6 shadow-[0_1px_2px_rgb(14_31_1/0.04),0_16px_40px_rgb(14_31_1/0.06)]">
      <p className="text-sm font-semibold text-text-secondary">Tongue Scan Result</p>
      <div className="mt-4 h-4 overflow-hidden rounded-full bg-black/[0.08]">
        <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-accent-amber to-primary" />
      </div>
      <p className="mt-2 text-lg font-bold text-primary">65% Hydrated</p>
      <p className="mt-1 text-sm text-text-secondary">Drink 1-2 more glasses today</p>
    </div>
  );
}

export function VideoCircleVisual() {
  return (
    <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-primary bg-forest/5 shadow-lg">
      <span className="text-4xl" aria-hidden="true">🎥</span>
    </div>
  );
}

export function StreakVisual() {
  return (
    <div className="w-full max-w-sm rounded-[1.75rem] border border-black/[0.06] bg-card p-6 shadow-[0_1px_2px_rgb(14_31_1/0.04),0_16px_40px_rgb(14_31_1/0.06)]">
      <div className="flex items-center gap-3">
        <SiteImage src="/assets/streak-flame.png" alt="Streak flame" width={40} height={40} />
        <div>
          <p className="font-display text-2xl font-bold">12 days</p>
          <p className="text-sm text-text-secondary">Hydration streak</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        {['done', 'done', 'done', 'today', 'empty', 'empty', 'empty'].map((state, i) => (
          <SiteImage
            key={i}
            src={`/assets/streak-tick-${state}.png`}
            alt=""
            width={24}
            height={24}
          />
        ))}
      </div>
    </div>
  );
}

export function NotificationVisual() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-black/[0.06] bg-card p-4 shadow-[0_1px_2px_rgb(14_31_1/0.04),0_16px_40px_rgb(14_31_1/0.06)]">
      <div className="flex items-start gap-3">
        <SiteImage src="/assets/didi-app-icon.png" alt="" width={36} height={36} className="rounded-lg" />
        <div>
          <p className="text-xs text-text-secondary">CheckApp · now</p>
          <p className="font-semibold text-text">DIDI</p>
          <p className="text-sm text-text-secondary">Hey! It&apos;s been 22 hours — how&apos;s your water intake today? 💧</p>
        </div>
      </div>
    </div>
  );
}

export function TimelineVisual() {
  return (
    <div className="w-full max-w-sm space-y-4">
      {[
        { day: 'Mon', mood: '😊', water: '6 glasses' },
        { day: 'Tue', mood: '😐', water: '4 glasses' },
        { day: 'Wed', mood: '😊', water: '7 glasses' },
      ].map((entry) => (
        <div key={entry.day} className="flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-card p-4">
          <span className="w-10 text-sm font-semibold text-text-secondary">{entry.day}</span>
          <span className="text-xl">{entry.mood}</span>
          <span className="text-sm text-text-secondary">{entry.water}</span>
        </div>
      ))}
    </div>
  );
}
