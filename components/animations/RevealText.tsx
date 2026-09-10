'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
  type?: 'words' | 'lines';
}

export default function RevealText({
  children,
  delay = 0,
  className,
  once = true,
  type = 'lines',
}: RevealTextProps) {
  const prefersReducedMotion = useReducedMotion();

  if (typeof children !== 'string') {
    return <div className={className}>{children}</div>;
  }

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === 'words' ? 0.04 : 0.12,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: '110%' },
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    },
  };

  if (type === 'words') {
    const words = children.split(' ');
    return (
      <div className={className}>
        <motion.span
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once, margin: '-40px' }}
          aria-label={children}
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                variants={prefersReducedMotion ? {} : item}
                className="inline-block"
              >
                {word}{i < words.length - 1 ? '\u00A0' : ''}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </div>
    );
  }

  const lines = children.split('\n');
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: prefersReducedMotion ? 0 : '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once, margin: '-40px' }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}