'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) setVisible(true);
    } catch {
      // localStorage unavailable (e.g. private mode some browsers)
    }
  }, []);

  const handleAccept = () => {
    try { localStorage.setItem('cookie-consent', 'accepted'); } catch { /* */ }
    setVisible(false);
  };

  const handleDecline = () => {
    try { localStorage.setItem('cookie-consent', 'declined'); } catch { /* */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] p-3 sm:p-5"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-black/8 bg-white shadow-2xl">
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
          <p className="text-sm leading-relaxed text-gray-600">
            We use cookies and similar technologies to improve your experience, analyse site
            traffic, and personalise content.{' '}
            <Link
              href="/privacy"
              className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Privacy policy
            </Link>
          </p>

          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={handleDecline}
              className="rounded-xl border border-gray-200 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              Necessary only
            </button>
            <button
              onClick={handleAccept}
              className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
