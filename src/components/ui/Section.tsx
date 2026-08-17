import { type ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  id?: string;
  variant?: 'light' | 'dark' | 'warm' | 'gradient';
  className?: string;
  containerClassName?: string;
};

const variantClasses = {
  light: 'bg-card text-text',
  dark: 'bg-forest text-white',
  warm: 'bg-bg-warm text-text',
  gradient: 'bg-gradient-to-br from-primary-light via-primary to-forest text-white',
};

export function Section({
  children,
  id,
  variant = 'warm',
  className = '',
  containerClassName = '',
}: SectionProps) {
  return (
    <section id={id} className={`py-14 md:py-24 ${variantClasses[variant]} ${className}`}>
      <div className={`mx-auto max-w-6xl px-5 md:px-8 ${containerClassName}`}>{children}</div>
    </section>
  );
}
