'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SiteImage } from '@/components/ui/SiteImage';
import { NAV_LINKS, SITE_NAME, APP_DOWNLOAD_URL } from '@/lib/constants';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const light = isHome;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const headerSurface = light
    ? scrolled
      ? 'border-b border-forest/10 bg-bg-warm/90 shadow-[0_8px_32px_rgb(14_31_1/0.08)] backdrop-blur-xl'
      : 'border-b border-transparent bg-transparent'
    : scrolled || !isHome
      ? 'border-b border-white/10 bg-forest/80 shadow-[0_8px_32px_rgb(14_31_1/0.28)] backdrop-blur-xl'
      : 'border-b border-transparent bg-transparent';

  const brandColor = light ? 'text-forest' : 'text-white';
  const linkColor = light
    ? 'text-text-secondary hover:text-primary'
    : 'text-white/75 hover:text-white';
  const burgerColor = light ? 'bg-forest' : 'bg-white';

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${headerSurface}`}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16 md:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <SiteImage
              src="/assets/didi-avatar-header.png"
              alt={`${SITE_NAME} logo — DIDI mascot`}
              width={36}
              height={36}
              className="rounded-full md:h-10 md:w-10"
            />
            <span className={`font-display text-lg font-bold ${brandColor}`}>{SITE_NAME}</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${linkColor}`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={APP_DOWNLOAD_URL}
              trackingPage="header"
              trackingPosition="desktop-nav"
              className="!px-5 !py-2.5 text-sm"
            >
              Download Free
            </Button>
          </nav>

          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 transition-transform ${burgerColor} ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`block h-0.5 w-6 transition-opacity ${burgerColor} ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-6 transition-transform ${burgerColor} ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduceMotion ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={reduceMotion ? undefined : { x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-40 flex flex-col pt-24 md:hidden ${
              light ? 'bg-bg-warm' : 'bg-forest'
            }`}
          >
            <nav className="flex flex-col gap-2 px-8" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`min-h-11 py-3 text-xl font-semibold ${
                    light ? 'text-forest' : 'text-white'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href={APP_DOWNLOAD_URL}
                trackingPage="header"
                trackingPosition="mobile-menu"
                className="mt-4 w-full"
              >
                Download Free
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
