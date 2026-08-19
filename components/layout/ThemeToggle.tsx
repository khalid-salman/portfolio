'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const prefersLight = stored === 'light';
    setIsLight(prefersLight);
    document.documentElement.classList.toggle('light', prefersLight);
    document.documentElement.classList.toggle('dark', !prefersLight);
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle('light', next);
    document.documentElement.classList.toggle('dark', !next);
    localStorage.setItem('theme', next ? 'light' : 'dark');
  }

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="rounded border border-border bg-surface-container p-2 text-muted"
      >
        <Sun className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="rounded border border-border bg-surface-container p-2 text-foreground transition-colors hover:border-primary-container hover:text-primary-container"
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
