'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { APP_DOWNLOAD_URL } from '@/lib/constants';
import { ChevronDown, Sparkles, Shield, RefreshCw } from 'lucide-react';

export function HeroHome() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-forest pt-20">
      {/* Background decorative ellipses */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/assets/splash-ellipse-1.png"
          alt=""
          width={500}
          height={500}
          className="absolute -left-24 top-16 opacity-25"
          aria-hidden="true"
        />
        <Image
          src="/assets/splash-ellipse-2.png"
          alt=""
          width={400}
          height={400}
          className="absolute -right-16 bottom-32 opacity-20"
          aria-hidden="true"
        />
        <Image
          src="/assets/splash-ellipse-3.png"
          alt=""
          width={300}
          height={300}
          className="absolute left-1/2 top-1/3 -translate-x-1/2 opacity-10"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 pb-8 pt-5 md:flex-row md:items-center md:gap-10 md:px-8 md:pt-8 md:pb-10">

        {/* Left — copy */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-primary-light" />
            AI-powered wellness companion
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            <span className="bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
              A health check-in
            </span>{' '}
            that&apos;s different every day.
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-lg text-base leading-relaxed text-white/70 md:text-lg"
          >
            DIDI asks new questions every morning, requests different selfies, and adapts its
            guidance based on your data. Not a tracker — a real daily conversation about your health.
          </motion.p>

          {/* USP tags */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {[
              { icon: <RefreshCw size={12} />, text: 'Different every day' },
              { icon: '📸', text: 'Tongue scan in 3 sec' },
              { icon: '💬', text: 'Responds to video messages' },
            ].map(({ icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium text-white/70"
              >
                {typeof icon === 'string' ? icon : icon}
                {text}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
          >
            <Button
              href={APP_DOWNLOAD_URL}
              external
              trackingPage="home"
              trackingPosition="hero-primary"
            >
              Download for Free
            </Button>
            <Button
              href="/how-it-works"
              variant="ghost"
              trackingPage="home"
              trackingPosition="hero-secondary"
            >
              See How It Works
            </Button>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center md:justify-start"
          >
            <span className="flex items-center gap-1.5 text-sm text-white/50">
              <Shield size={13} className="text-primary-light" />
              Not a medical device · Wellness guidance only
            </span>
            <span className="hidden text-white/30 sm:block">·</span>
            <span className="text-sm text-white/50">2,400+ people building healthy habits</span>
          </motion.div>
        </div>

        {/* Right — DIDI clearly separated from UI mockups */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', damping: 18, delay: 0.2 }}
          className="relative flex flex-1 items-end justify-center gap-4 md:items-center"
        >
          {/* DIDI — isolated, no overlapping cards */}
          <div className="relative z-10 flex flex-col items-center">
            <Image
              src="/assets/didi-body-home.png"
              alt="DIDI — your AI health companion character"
              width={160}
              height={300}
              priority
              className="drop-shadow-2xl"
            />
          </div>

          {/* Mockup cards column — separate from DIDI */}
          <div className="flex flex-col gap-3">
            {/* Chat mockup — floats subtly */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-44 rounded-[2rem] border border-white/10 bg-black/50 p-2 shadow-2xl backdrop-blur-md sm:w-52"
            >
              <div className="rounded-[1.5rem] bg-bg-warm p-3">
                <div className="mb-2 flex items-center gap-2">
                  <Image
                    src="/assets/didi-avatar-header.png"
                    alt=""
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-xs font-semibold text-text">DIDI</span>
                  <span className="ml-auto h-2 w-2 rounded-full bg-primary" />
                </div>
                <div className="space-y-2">
                  <div className="rounded-2xl rounded-bl-sm bg-bubble-didi px-3 py-2 text-xs leading-relaxed text-text-secondary">
                    Good morning! Today I want to see your tongue after breakfast — let&apos;s check
                    hydration from a different angle.
                  </div>
                  <div className="ml-auto w-4/5 rounded-2xl rounded-br-sm bg-bubble-user px-3 py-2 text-xs text-text-secondary">
                    On it! 📸
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hydration card — floats opposite phase */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
              className="w-36 rounded-2xl border border-white/10 bg-black/50 px-3 py-2.5 shadow-xl backdrop-blur-md"
            >
              <p className="text-xs font-semibold text-primary-light">Hydration signal</p>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-3/4 rounded-full bg-primary-light" />
              </div>
              <p className="mt-1 text-[11px] text-white/60">Drink one more glass today</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/40"
          aria-hidden="true"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}
