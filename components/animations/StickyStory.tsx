'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion';
import { SVGProps, JSX } from 'react';

interface StickyStoryProps {
  title: string;
  description: string;
  illustrations: { component: (props: SVGProps<SVGSVGElement>) => JSX.Element; alt: string }[];
}

export default function StickyStory({
  title,
  description,
  illustrations,
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
    const range = 1 / illustrations.length;
    return Math.min(Math.floor(v / range), illustrations.length - 1);
  });

  useMotionValueEvent(activeImage, 'change', (latest) => {
    setActiveIndex(latest);
  });

  return (
    <div ref={ref} className="relative">
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="container-cafe grid items-center gap-16 lg:grid-cols-12">
          {/* Sticky text */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="eyebrow">The Clayvio Way</p>
            <h2 className="text-display mt-5 text-balance">{title}</h2>
            <div className="divider-warm-left mt-8" />
            <p className="text-body-editorial mt-8 max-w-md">{description}</p>
            <div className="mt-10 flex items-center gap-3">
              {illustrations.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? 'w-8 bg-clay-500'
                      : 'w-1.5 bg-espresso-200'
                  }`}
                  aria-label={`View illustration ${index + 1}`}
                  onClick={() => {
                    // Scroll to trigger next image
                    const targetProgress = (index + 0.5) / illustrations.length;
                    const containerHeight = ref.current?.scrollHeight ?? 0;
                    const viewportHeight = window.innerHeight;
                    const targetScroll = targetProgress * (containerHeight - viewportHeight);
                    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                  }}
                />
              ))}
            </div>
          </div>

          {/* Transitioning illustrations */}
          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-espresso-900/8 bg-parchment-50 shadow-editorial-lg">
              {illustrations.map((illustration, index) => {
                const Illustration = illustration.component;
                return (
                  <motion.div
                    key={illustration.alt}
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0,
                      scale: index === activeIndex ? 1 : 1.05,
                    }}
                    transition={{
                      opacity: { duration: 0.7, ease: 'easeInOut' },
                      scale: { duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] },
                    }}
                  >
                    <Illustration className="h-full w-full object-cover" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}