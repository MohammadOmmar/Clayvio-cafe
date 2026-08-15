'use client';

import { useEffect, useState } from 'react';
import { getTimeAwareMessage } from '@/lib/opening-hours';

export default function TimeAwareMessage({ className }: { className?: string }) {
  const [message, setMessage] = useState(() => getTimeAwareMessage());

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(getTimeAwareMessage());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className={`font-script text-2xl text-clay-600 sm:text-3xl ${className ?? ''}`}>
      {message}
    </p>
  );
}