'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  parallaxAmount?: number;
}

export default function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  width = 800,
  height = 600,
  priority = false,
  sizes,
  parallaxAmount = 40,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-parallaxAmount, parallaxAmount]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ''}`}>
      <motion.div style={{ y }} className="h-full w-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`h-full w-full object-cover ${imgClassName ?? ''}`}
        />
      </motion.div>
    </div>
  );
}