'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface HorizontalScrollProps {
  items: string[];
  className?: string;
}

export default function HorizontalScroll({
  items,
  className,
}: HorizontalScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ['0%', '0%'] : ['0%', '-12%']
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        style={{ x }}
        className="flex items-center gap-10 whitespace-nowrap py-6 sm:gap-14"
      >
        {items.map((item, index) => (
          <span
            key={item}
            className="flex items-center gap-10 sm:gap-14"
          >
            <span className="font-display text-5xl font-medium tracking-tight text-espresso-800/70 sm:text-6xl lg:text-7xl">
              {item}
            </span>
            {index < items.length - 1 && (
              <span className="h-1.5 w-1.5 rounded-full bg-clay-400/50" aria-hidden="true" />
            )}
          </span>
        ))}
      </motion.div>
    </div>
  );
}