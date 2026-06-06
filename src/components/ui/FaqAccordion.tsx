'use client';

import { useState } from 'react';
import { trackFaqOpen } from '@/lib/analytics';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  page?: string;
};

export function FaqAccordion({ items, page = 'unknown' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="overflow-hidden rounded-2xl border border-black/5 bg-card">
            <button
              type="button"
              className="flex w-full min-h-11 items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-text"
              aria-expanded={isOpen}
              onClick={() => {
                setOpenIndex(isOpen ? null : index);
                if (!isOpen) trackFaqOpen(page, item.question);
              }}
            >
              <span>{item.question}</span>
              <span className="text-primary text-xl" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-black/5 px-5 pb-4 pt-2 text-text-secondary leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
