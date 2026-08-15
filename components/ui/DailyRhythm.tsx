'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SVGProps } from 'react';
import KulhadChai from '@/components/illustrations/KulhadChai';
import CoffeeCup from '@/components/illustrations/CoffeeCup';
import Botanical from '@/components/illustrations/Botanical';
import { getCafeStatus } from '@/lib/opening-hours';

type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'closing';

const timeOfDayMap: { [key in TimeOfDay]: { label: string; description: string } } = {
  morning: {
    label: '9:00 AM',
    description: 'Morning chai brewing',
  },
  afternoon: {
    label: '2:00 PM',
    description: 'Coffee and food',
  },
  evening: {
    label: '6:00 PM',
    description: 'Warm conversations',
  },
  closing: {
    label: '8:30 PM',
    description: 'Closing time',
  },
};

function getCurrentTimeOfDay(): TimeOfDay {
  const istTime = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Calcutta' })
  );
  const hours = istTime.getHours();
  if (hours >= 5 && hours < 12) return 'morning';
  if (hours >= 12 && hours < 17) return 'afternoon';
  if (hours >= 17 && hours < 20) return 'evening';
  return 'closing';
}

export default function DailyRhythm() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(getCurrentTimeOfDay());
  const [status, setStatus] = useState(() => getCafeStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfDay(getCurrentTimeOfDay());
      setStatus(getCafeStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

const illustrations = {
    morning: <KulhadChai className="h-16 w-16" />,
    afternoon: <CoffeeCup className="h-16 w-16" />,
    evening: <Botanical className="h-16 w-16" />,
    closing: <Botanical className="h-16 w-16" />,
  };

  type IllustrationKey = keyof typeof illustrations;

  const illustrationRef = (key: IllustrationKey) => illustrations[key];

  const labels = {
    morning: '9:00 AM',
    afternoon: '2:00 PM',
    evening: '6:00 PM',
    closing: '8:30 PM',
  };

  const descriptions = {
    morning: 'Morning chai brewing',
    afternoon: 'Coffee and food',
    evening: 'Warm conversations',
    closing: 'Closing time',
  };

  const items = [
    { key: 'morning' as IllustrationKey, ...timeOfDayMap.morning },
    { key: 'afternoon' as IllustrationKey, ...timeOfDayMap.afternoon },
    { key: 'evening' as IllustrationKey, ...timeOfDayMap.evening },
    { key: 'closing' as IllustrationKey, ...timeOfDayMap.closing },
  ];

  return (
    <section className="mb-16 border-y border-parchment-200 py-8">
      <div className="container-cafe">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-semibold text-espresso-900">
            Illustrated Daily Rhythm
          </h2>
          <span className="text-xs font-medium uppercase tracking-wide text-clay-600">
            {labels[timeOfDay]}
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="wait">
            {items.map((item) => (
              <div
                key={item.key}
                className="relative aspect-square rounded-lg bg-parchment-50 flex flex-col items-center justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -10 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -20, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="h-12 w-12 mb-3"
                >
                  {illustrationRef(item.key)}
                </motion.div>

                <p className="text-xs font-medium uppercase tracking-wide text-clay-600">
                  {item.label}
                </p>
                <p className="text-[10px] text-clay-500 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-6 pt-6 border-t border-parchment-200">
          <p className="font-script text-lg text-clay-600">
            {status.isOpen ? 'OPEN NOW' : 'CLOSED · OPENS AT 9:00 AM'}
          </p>
        </div>
      </div>
    </section>
  );
}
