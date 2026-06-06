import { type ReactNode } from 'react';

type AnswerBlockProps = {
  children: ReactNode;
  /** 'dark' renders the block for use inside dark (forest) sections */
  variant?: 'light' | 'dark';
};

export function AnswerBlock({ children, variant = 'light' }: AnswerBlockProps) {
  if (variant === 'dark') {
    return (
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
        <p className="text-lg font-light leading-relaxed text-white/75">{children}</p>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-2xl border-l-4 border-primary bg-primary/5 p-5 md:p-6">
      <p className="text-lg font-light leading-relaxed text-text-secondary">{children}</p>
    </div>
  );
}
