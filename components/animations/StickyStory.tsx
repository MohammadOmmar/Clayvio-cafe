'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion';
import Image from 'next/image';

interface StickyStoryProps {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}

export default function StickyStory({
  title,
  description,
  images,
}: StickyStoryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const activeImage = useTransform(scrollYProgress, (v) => {
    if (prefersReducedMotion) return 0;
    const range = 1 / images.length;
    return Math.min(Math.floor(v / range), images.length - 1);
  });

  useMotionValueEvent(activeImage, 'change', (latest) => {
    setActiveIndex(latest);
  });

  return (
    <div ref={ref} className="relative">
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="container-cafe grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Sticky text */}
          <div className="order-2 lg:order-1">
            <p className="eyebrow">The Clayvio Way</p>
            <h2 className="heading-display mt-4">{title}</h2>
            <div className="divider-warm mt-6 ml-0" />
            <p className="text-body mt-6">{description}</p>
          </div>

          {/* Transitioning images */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-warm-lg">
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: index === activeIndex ? 1 : 0 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}