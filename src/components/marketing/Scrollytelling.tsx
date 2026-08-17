'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';

/* ─── App-accurate screen mockups ────────────────────────────────────────── */

function ChatMorningScreen() {
  return (
    <div className="flex flex-col gap-3 p-2">
      {/* DIDI header */}
      <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">D</div>
        <div>
          <p className="text-xs font-bold text-text">DIDI</p>
          <p className="text-[10px] text-text-secondary/50">your health companion</p>
        </div>
        <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
      </div>

      {/* Chat bubbles */}
      <div className="space-y-2">
        <div className="flex items-end gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-[9px] font-bold">D</div>
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-bubble-didi px-3 py-2 text-[11px] leading-relaxed text-text-secondary">
            Good morning! ☀️ Today I&apos;d like to try something different — show me your tongue from a new angle. How&apos;s your energy so far?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl rounded-br-sm bg-bubble-user px-3 py-2 text-[11px] text-text-secondary">
            Feeling okay, a bit groggy 😴
          </div>
        </div>
        <div className="flex items-end gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-[9px] font-bold">D</div>
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-bubble-didi px-3 py-2 text-[11px] leading-relaxed text-text-secondary">
            That&apos;s normal. Let&apos;s check hydration first — it affects morning energy a lot.
          </div>
        </div>
      </div>

      {/* Tap to check button */}
      <button className="mt-1 w-full rounded-xl bg-primary py-2.5 text-[11px] font-semibold text-white">
        Tap to Check Up
      </button>
    </div>
  );
}

function TongueScanScreen() {
  return (
    <div className="flex flex-col gap-3 p-2">
      {/* Header */}
      <p className="text-center text-xs font-bold text-text">Scan Result</p>

      {/* Scan visual */}
      <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-bubble-didi to-primary/15 shadow-inner">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-bubble-didi">
          <span className="text-3xl">👅</span>
        </div>
        <div className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg">
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/></svg>
        </div>
      </div>

      {/* Hydration level */}
      <div className="rounded-2xl bg-primary/10 p-3">
        <div className="mb-1.5 flex justify-between text-[10px]">
          <span className="font-semibold text-primary">Hydration Level</span>
          <span className="font-bold text-primary">74%</span>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-black/10">
          <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-primary-light to-primary" />
        </div>
        <p className="mt-2 text-[10px] text-text-secondary">Moderately hydrated. Drink one more glass before lunch.</p>
      </div>

      {/* Observations */}
      <div className="space-y-1.5">
        {['Slight coating — consider more water', 'Colour normal, no redness'].map((obs) => (
          <div key={obs} className="flex items-center gap-1.5 text-[10px] text-text-secondary">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            {obs}
          </div>
        ))}
      </div>
    </div>
  );
}

function VideoMessageScreen() {
  return (
    <div className="flex flex-col items-center gap-3 p-2">
      {/* DIDI prompt */}
      <div className="flex items-end gap-2 self-start">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white text-[9px] font-bold">D</div>
        <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-bubble-didi px-3 py-2 text-[10px] leading-relaxed text-text-secondary">
          Send me a short video — just 15 seconds. Show your face and tell me how you&apos;re feeling today.
        </div>
      </div>

      {/* Video circle mockups */}
      <div className="flex items-center gap-4">
        {/* Incoming from DIDI */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-primary shadow-lg ring-4 ring-primary/30">
            <svg viewBox="0 0 24 24" fill="white" className="h-8 w-8 opacity-90"><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
          </div>
          <p className="text-[9px] text-text-secondary">DIDI · 0:12</p>
        </div>

        {/* Record button */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary bg-primary/10 shadow">
            <div className="h-6 w-6 rounded-full bg-primary" />
          </div>
          <p className="text-[9px] font-semibold text-primary">Record</p>
        </div>
      </div>

      <p className="text-center text-[10px] text-text-secondary">
        Short video messages — DIDI watches and responds
      </p>
    </div>
  );
}

function StreakSummaryScreen() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const done = [true, true, true, true, true, false, false];

  return (
    <div className="flex flex-col gap-3 p-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold text-text">Evening Summary</p>
        <span className="rounded-full bg-accent-amber/15 px-2 py-0.5 text-[10px] font-bold text-accent-amber">🔥 5 days</span>
      </div>

      {/* Streak dots */}
      <div className="flex justify-between gap-1">
        {days.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold ${done[i] ? 'bg-primary text-white' : 'bg-bg-warm text-text-secondary/50'}`}>
              {done[i] ? '✓' : d}
            </div>
            <span className="text-[9px] text-text-secondary/50">{d}</span>
          </div>
        ))}
      </div>

      {/* Day stats */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'Check-ins', val: '3/3', ok: true },
          { label: 'Hydration', val: '74%', ok: true },
          { label: 'Tongue scans', val: '1', ok: true },
          { label: 'Mood', val: 'Good', ok: true },
        ].map(({ label, val, ok }) => (
          <div key={label} className="rounded-xl bg-bg-warm p-2 text-center">
            <p className={`text-sm font-bold ${ok ? 'text-primary' : 'text-text-secondary/50'}`}>{val}</p>
            <p className="text-[9px] text-text-secondary">{label}</p>
          </div>
        ))}
      </div>

      {/* DIDI summary bubble */}
      <div className="flex items-start gap-2">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-[9px] font-bold">D</div>
        <div className="rounded-2xl rounded-tl-sm bg-bubble-didi px-2.5 py-2 text-[10px] leading-relaxed text-text-secondary">
          Great day! You hit all 3 check-ins and stayed on track. Tomorrow I&apos;ll ask about your sleep quality.
        </div>
      </div>
    </div>
  );
}

/* ─── Step data ───────────────────────────────────────────────────────────── */

const STEPS = [
  {
    title: 'DIDI checks in every morning with a fresh question',
    description: 'Not a generic notification. A real question crafted for you — different every day, based on your recent history.',
    visual: <ChatMorningScreen />,
  },
  {
    title: 'Tongue scan → hydration insight in 3 seconds',
    description: 'AI-powered analysis of color, coating, and moisture levels from a single selfie.',
    visual: <TongueScanScreen />,
  },
  {
    title: 'Send a short video message. DIDI watches and responds.',
    description: 'Circular video bubbles — like voice messages, but DIDI actually sees you.',
    visual: <VideoMessageScreen />,
  },
  {
    title: 'DIDI tracks your patterns and adapts over time',
    description: 'Streaks, wellness trends, daily summaries — and tomorrow\'s questions will already know about today.',
    visual: <StreakSummaryScreen />,
  },
];

/* ─── Component ───────────────────────────────────────────────────────────── */

export function Scrollytelling() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(index);
        },
        { threshold: 0.6, rootMargin: '-20% 0px -20% 0px' },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <Section variant="warm">
      <h2 className="mb-12 text-center font-display text-3xl font-bold md:text-5xl">
        See DIDI in action
      </h2>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-24 md:space-y-32">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              ref={(el) => { stepRefs.current[index] = el; }}
              className={`transition-opacity duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-40'}`}
            >
              <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
              <h3 className="mt-2 font-display text-2xl font-bold">{step.title}</h3>
              <p className="mt-2 text-text-secondary">{step.description}</p>
              <div className="mt-4 md:hidden">
                <div className="mx-auto w-64 rounded-[2.5rem] border-4 border-forest/10 bg-card p-4 shadow-2xl">
                  <div className="rounded-[2rem] bg-bg-warm p-3 min-h-[320px] flex flex-col justify-center">
                    {step.visual}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky phone mockup — desktop only */}
        <div className="hidden md:block">
          <div className="sticky top-32">
            {/* Phone chrome */}
            <div className="mx-auto w-64 rounded-[2.5rem] border-4 border-black/10 bg-white shadow-2xl ring-1 ring-black/5">
              {/* Notch */}
              <div className="flex h-6 items-center justify-center rounded-t-[2rem]">
                <div className="h-3 w-20 rounded-full bg-black/10" />
              </div>
              {/* Status bar */}
              <div className="flex items-center justify-between px-4 pb-1 text-[9px] text-text-secondary/50">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>●●●</span>
                  <span>WiFi</span>
                  <span>100%</span>
                </div>
              </div>
              {/* Screen content */}
              <div className="min-h-[380px] bg-bg-warm px-1 pb-4">
                {STEPS[activeStep].visual}
              </div>
              {/* Home indicator */}
              <div className="flex h-6 items-center justify-center rounded-b-[2rem]">
                <div className="h-1 w-24 rounded-full bg-black/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
