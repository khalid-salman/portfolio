import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        primary: 'var(--primary)',
        'primary-container': 'var(--primary-container)',
        'on-primary-container': 'var(--on-primary-container)',
        secondary: 'var(--secondary)',
        'on-surface': 'var(--on-surface)',
        'on-surface-variant': 'var(--on-surface-variant)',
        'surface-container': 'var(--surface-container)',
        'surface-container-high': 'var(--surface-container-high)',
        accent: 'var(--primary-container)',
      },
      maxWidth: {
        container: '80rem',
      },
      boxShadow: {
        glow: '0 0 16px var(--glow-primary)',
        'glow-sm': '0 0 8px var(--glow-secondary)',
      },
    },
  },
  plugins: [],
};

export default config;
