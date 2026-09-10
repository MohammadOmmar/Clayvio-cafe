'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
  direction = 'up',
  scale = false,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  const getInitial = () => {
    const base: Record<string, number> = { opacity: 0 };
    if (!prefersReducedMotion) {
      if (direction === 'up') base.y = y;
      if (direction === 'down') base.y = -y;
      if (direction === 'left') base.x = y;
      if (direction === 'right') base.x = -y;
      if (scale) base.scale = 0.96;
    }
    return base;
  };

  const getAnimate = () => {
    const base: Record<string, number> = { opacity: 1, y: 0, x: 0 };
    if (scale) base.scale = 1;
    return base;
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}