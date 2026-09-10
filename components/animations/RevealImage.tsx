'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealImageProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
  scale?: boolean;
}

export default function RevealImage({
  children,
  delay = 0,
  className,
  once = true,
  scale = true,
}: RevealImageProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={className}>
      <motion.div
        initial={{
          clipPath: 'inset(100% 0 0 0)',
          scale: scale && !prefersReducedMotion ? 1.1 : 1,
        }}
        whileInView={{
          clipPath: 'inset(0 0 0 0)',
          scale: 1,
        }}
        viewport={{ once, margin: '-60px' }}
        transition={{
          duration: 1,
          delay,
          ease: [0.77, 0, 0.175, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}