'use client';

import posthog from 'posthog-js';

let initialized = false;

export function initPostHog() {
  if (typeof window === 'undefined' || initialized) return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return;

  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
    capture_pageview: true,
    loaded: () => {
      initialized = true;
    },
  });
}

export function trackEvent(
  event: string,
  properties?: Record<string, string | number | boolean>,
) {
  if (typeof window === 'undefined') return;
  posthog.capture(event, properties);
}

export function trackCtaClick(page: string, buttonLabel: string, position: string) {
  trackEvent('cta_click', { page, button_label: buttonLabel, position });
  if (buttonLabel.toLowerCase().includes('download') || buttonLabel.toLowerCase().includes('get checkapp') || buttonLabel.toLowerCase().includes('free')) {
    trackEvent('app_download_click', { source_page: page, source_component: position });
  }
}

export function trackFaqOpen(page: string, question: string) {
  trackEvent('faq_open', { page, question });
}
