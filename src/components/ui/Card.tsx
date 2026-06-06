import { type ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function Card({ children, className = '', dark = false }: CardProps) {
  return (
    <div
      className={`rounded-3xl p-6 md:p-8 ${
        dark
          ? 'bg-forest/80 text-white shadow-xl'
          : 'bg-card text-text shadow-lg shadow-black/5'
      } ${className}`}
    >
      {children}
    </div>
  );
}
