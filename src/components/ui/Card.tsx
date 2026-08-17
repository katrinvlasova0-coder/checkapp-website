import { type ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function Card({ children, className = '', dark = false }: CardProps) {
  return (
    <div
      className={`rounded-[1.75rem] p-6 md:p-8 ${
        dark
          ? 'border border-white/10 bg-forest/90 text-white shadow-[0_20px_50px_rgb(14_31_1/0.35)]'
          : 'border border-black/[0.06] bg-card text-text shadow-[0_1px_2px_rgb(14_31_1/0.04),0_16px_40px_rgb(14_31_1/0.06)]'
      } ${className}`}
    >
      {children}
    </div>
  );
}
