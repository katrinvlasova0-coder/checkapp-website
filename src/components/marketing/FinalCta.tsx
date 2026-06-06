import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { CtaBanner } from './CtaBanner';

export function FinalCta() {
  return (
    <Section variant="light" className="relative overflow-hidden">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="flex-1">
          <CtaBanner page="home" position="final-cta" />
        </div>
        {/* Didi — static, no animation */}
        <Image
          src="/assets/didi-home-character.png"
          alt="DIDI the AI health companion"
          width={220}
          height={220}
          className="drop-shadow-xl mix-blend-multiply"
        />
      </div>
    </Section>
  );
}
