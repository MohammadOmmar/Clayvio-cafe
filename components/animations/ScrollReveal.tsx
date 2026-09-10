'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
  variant?: 'default' | 'clip' | 'fade';
}

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  once = true,
  variant = 'default',
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (variant === 'clip') {
    return (
      <motion.div
        className={className}
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0 0 0)' }}
        viewport={{ once, margin: '-60px' }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.77, 0, 0.175, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === 'fade') {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, margin: '-60px' }}
        transition={{
          duration: 0.8,
          delay,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}