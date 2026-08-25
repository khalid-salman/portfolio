import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { assetPath } from '@/lib/assetPath';
import type { Project, ProjectSnippet } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

function ProjectImage({
  label,
  path,
  alt,
}: {
  label: string;
  path: string;
  alt: string;
}) {
  return (
    <div>
      <h4 className="mb-2 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
        {label}
      </h4>
      <div className="overflow-hidden rounded border border-border bg-surface-container-high p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(path)}
          alt={alt}
          className="mx-auto h-auto w-full max-w-full rounded-sm object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function SnippetBlock({ snippet }: { snippet: ProjectSnippet }) {
  return (
    <details className="group rounded border border-border bg-surface-container-high open:border-primary-container/40">
      <summary className="cursor-pointer list-none px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-primary-container marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="inline-flex w-full items-center justify-between gap-3">
          <span>{snippet.title}</span>
          <span className="text-[10px] text-on-surface-variant group-open:hidden">Expand</span>
          <span className="hidden text-[10px] text-on-surface-variant group-open:inline">Collapse</span>
        </span>
      </summary>
      <pre className="overflow-x-auto border-t border-border p-4 text-left font-mono text-[11px] leading-relaxed text-on-surface-variant">
        <code>{snippet.code}</code>
      </pre>
    </details>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="hud-card p-6 md:p-8">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold text-primary-container md:text-xl">
          {project.title}
        </h3>
        {project.period && (
          <span className="font-mono text-xs text-on-surface-variant">{project.period}</span>
        )}
      </div>
      <p className="mb-4 font-mono text-xs tracking-wide text-secondary">
        {project.role}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={`${metric.value}-${metric.label}`}
              className="rounded border border-border bg-surface-container-high px-3 py-3"
            >
              <p className="text-start font-mono text-lg font-bold text-secondary">{metric.value}</p>
              <p className="mt-1 text-start font-mono text-[10px] uppercase tracking-wide text-on-surface-variant">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {project.screenshot && (
        <div className="mb-6">
          <ProjectImage
            label="Production Main Page"
            path={project.screenshot.path}
            alt={project.screenshot.alt}
          />
        </div>
      )}

      <div className="space-y-4 font-mono text-sm">
        <div>
          <h4 className="mb-1 text-[10px] uppercase tracking-widest text-on-surface-variant">
            Problem
          </h4>
          <p className="text-on-surface-variant">{project.problem}</p>
        </div>
        <div>
          <h4 className="mb-1 text-[10px] uppercase tracking-widest text-on-surface-variant">
            Outcome
          </h4>
          <p className="text-secondary">{project.outcome}</p>
        </div>
        <div>
          <h4 className="mb-1 text-[10px] uppercase tracking-widest text-on-surface-variant">
            Solution
          </h4>
          <p className="text-on-surface-variant">{project.solution}</p>
        </div>
        <div>
          <h4 className="mb-1 text-[10px] uppercase tracking-widest text-on-surface-variant">
            Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>

      {project.artifacts && project.artifacts.length > 0 && (
        <div className="mt-6">
          <h4 className="mb-2 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
            Open Source Artifacts
          </h4>
          <ul className="space-y-2">
            {project.artifacts.map((artifact) => (
              <li key={artifact.url}>
                <a
                  href={artifact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-primary-container hover:underline"
                >
                  {artifact.label}
                  <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.snippets && project.snippets.length > 0 && (
        <div className="mt-6 space-y-3">
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
            Demo Snippets
          </h4>
          {project.snippets.map((snippet) => (
            <SnippetBlock key={snippet.title} snippet={snippet} />
          ))}
        </div>
      )}

      <div className="mt-6">
        <ProjectImage
          label="Architecture Flow"
          path={project.diagram.path}
          alt={project.diagram.alt}
        />
      </div>
    </article>
  );
}
