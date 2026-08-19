'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MotionReveal({ children, className, delay = 0 }: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
