'use client';

import { useState } from 'react';
import { Menu, Terminal, X } from 'lucide-react';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#impact', label: 'Metrics' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#technologies', label: 'Stack' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certs' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[var(--header-bg)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-container items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
        <a
          href="#hero"
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:text-primary-container"
        >
          <Terminal className="h-4 w-4" aria-hidden />
          INFRA_ARCHITECT
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary-container"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <Button variant="ghost" href="#contact" className="px-4 py-2 text-xs">
            Contact
          </Button>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded border border-border p-2 text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-4 py-3 xl:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary-container"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
