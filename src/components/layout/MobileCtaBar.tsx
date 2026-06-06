'use client';

import { Button } from '@/components/ui/Button';
import { APP_DOWNLOAD_URL } from '@/lib/constants';

export function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/5 bg-card/95 p-3 backdrop-blur-md md:hidden">
      <Button
        href={APP_DOWNLOAD_URL}
        external
        trackingPage="mobile-bar"
        trackingPosition="sticky-bottom"
        className="w-full"
      >
        Get CheckApp Free
      </Button>
    </div>
  );
}
