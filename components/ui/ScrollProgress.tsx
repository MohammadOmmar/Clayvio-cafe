'use client';

import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.max(0, Math.min(100, (scrollTop / docHeight) * 100));

      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return <div id="scroll-progress" className="fixed top-0 left-0 h-0.5 w-0 bg-brass-400/60 z-50 transition-[width] duration-100" aria-hidden="true" />;
}