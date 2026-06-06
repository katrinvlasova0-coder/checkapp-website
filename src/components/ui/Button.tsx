'use client';

import Link from 'next/link';
import { type ReactNode } from 'react';
import { trackCtaClick } from '@/lib/analytics';

type ButtonVariant = 'primary' | 'ghost' | 'secondary';

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  external?: boolean;
  trackingPage?: string;
  trackingPosition?: string;
  ariaLabel?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 hover:scale-[1.03]',
  ghost:
    'border-2 border-white/30 text-white hover:bg-white/10 hover:scale-[1.03]',
  secondary:
    'border-2 border-primary text-primary hover:bg-primary/5 hover:scale-[1.03]',
};

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  external,
  trackingPage = 'unknown',
  trackingPosition = 'unknown',
  ariaLabel,
}: ButtonProps) {
  const baseClasses = `inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-8 py-3 text-[15px] font-semibold transition-all duration-200 ${variantClasses[variant]} ${className}`;

  function handleClick() {
    const label = typeof children === 'string' ? children : ariaLabel ?? 'button';
    trackCtaClick(trackingPage, label, trackingPosition);
    onClick?.();
  }

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          onClick={handleClick}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClasses} onClick={handleClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
