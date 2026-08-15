'use client';

import { useEffect, useState } from 'react';
import { getCafeStatus } from '@/lib/opening-hours';

export default function OpeningStatus({ className }: { className?: string }) {
  const [status, setStatus] = useState(() => getCafeStatus());

  useEffect(() => {
    // Update status every minute
    const interval = setInterval(() => {
      setStatus(getCafeStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex items-center gap-2 ${className ?? ''}`}>
      <span
        className={`h-2 w-2 rounded-full ${
          status.isOpen ? 'bg-olive-500' : 'bg-clay-500'
        }`}
        aria-hidden="true"
      />
      <span className="text-xs font-medium uppercase tracking-wide text-espresso-700">
        {status.message}
      </span>
    </div>
  );
}