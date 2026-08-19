import { Badge } from '@/components/ui/Badge';
import { assetPath } from '@/lib/assetPath';
import type { Project } from '@/lib/types';

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
      <p className="mb-4 font-mono text-xs uppercase tracking-wide text-secondary">
        {project.role}
      </p>

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
        <div>
          <h4 className="mb-1 text-[10px] uppercase tracking-widest text-on-surface-variant">
            Outcome
          </h4>
          <p className="text-secondary">{project.outcome}</p>
        </div>
      </div>

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
