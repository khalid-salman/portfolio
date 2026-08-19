# Khalid Salman — DevOps Portfolio

Next.js static portfolio deployed to GitHub Pages from the `new_version` branch.

**Live site:** https://khalid-salman.github.io/portfolio/

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run validate:content
npm run build
```

For local preview matching GitHub Pages paths:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
npx serve out
```

## Deploy

Pushes to `new_version` trigger `.github/workflows/deploy.yml` (lint → validate → build → Trivy → GitHub Pages).
