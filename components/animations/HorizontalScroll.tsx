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
    prefersReducedMotion ? ['0%', '0%'] : ['0%', '-15%']
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        style={{ x }}
        className="flex items-center gap-8 whitespace-nowrap py-8 sm:gap-12"
      >
        {items.map((item, index) => (
          <span
            key={item}
            className="flex items-center gap-8 sm:gap-12"
          >
            <span className="font-display text-4xl font-medium tracking-tight text-espresso-800/80 sm:text-5xl lg:text-6xl">
              {item}
            </span>
            {index < items.length - 1 && (
              <span className="h-2 w-2 rounded-full bg-clay-500/60" aria-hidden="true" />
            )}
          </span>
        ))}
      </motion.div>
    </div>
  );
}