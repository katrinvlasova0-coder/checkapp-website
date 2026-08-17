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
    'bg-primary text-white shadow-[0_8px_24px_rgb(88_131_23/0.28)] hover:bg-primary-dark hover:shadow-[0_10px_28px_rgb(88_131_23/0.35)]',
  ghost:
    'border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10',
  secondary:
    'border border-primary/25 bg-transparent text-primary hover:bg-primary/10',
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
  const baseClasses = `inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-8 py-3 text-[15px] font-semibold tracking-[-0.01em] transition-[background-color,box-shadow,transform,border-color] duration-200 ease-out active:scale-[0.98] ${variantClasses[variant]} ${className}`;

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
