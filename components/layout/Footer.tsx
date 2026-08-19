import { ExternalLink } from 'lucide-react';
import { site } from '@/lib/content';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-8">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-12">
        <p className="font-mono text-xs text-on-surface-variant">{site.footer.pipelineNote}</p>
        <a
          href={site.footer.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-primary-container hover:underline"
        >
          View deployment pipeline
          <ExternalLink className="h-3 w-3" />
        </a>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
          © {new Date().getFullYear()} {site.owner.name} · Riyadh, SA
        </p>
      </div>
    </footer>
  );
}
