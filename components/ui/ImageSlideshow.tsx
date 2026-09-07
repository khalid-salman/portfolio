'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assetPath } from '@/lib/assetPath';
import type { DiagramRef } from '@/lib/types';

interface ImageSlideshowProps {
  label: string;
  images: DiagramRef[];
  autoPlayMs?: number;
}

export function ImageSlideshow({
  label,
  images,
  autoPlayMs = 5000,
}: ImageSlideshowProps) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const count = images.length;

  useEffect(() => {
    if (count <= 1 || prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, autoPlayMs);
    return () => window.clearInterval(id);
  }, [autoPlayMs, count, prefersReducedMotion]);

  if (count === 0) return null;

  const current = images[index];
  const go = (next: number) => setIndex((next + count) % count);

  return (
    <div>
      <h4 className="mb-2 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
        {label}
      </h4>
      <div className="overflow-hidden rounded border border-border bg-surface-container-high">
        <div className="relative aspect-[16/10] bg-surface-container">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={current.path}
              src={assetPath(current.path)}
              alt={current.alt}
              className="absolute inset-0 h-full w-full object-contain p-2"
              initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              loading="lazy"
            />
          </AnimatePresence>

          {count > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous sample"
                onClick={() => go(index - 1)}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded border border-border bg-surface/90 p-1.5 text-on-surface backdrop-blur transition hover:border-primary-container hover:text-primary-container"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next sample"
                onClick={() => go(index + 1)}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded border border-border bg-surface/90 p-1.5 text-on-surface backdrop-blur transition hover:border-primary-container hover:text-primary-container"
              >
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border px-3 py-2">
          <p className="min-w-0 flex-1 truncate font-mono text-[11px] text-on-surface-variant">
            {current.alt}
          </p>
          {count > 1 && (
            <div className="flex shrink-0 items-center gap-1.5" role="tablist" aria-label="Slide indicators">
              {images.map((image, i) => (
                <button
                  key={image.path}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show sample ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? 'w-5 bg-secondary'
                      : 'w-1.5 bg-on-surface-variant/40 hover:bg-on-surface-variant/70'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
