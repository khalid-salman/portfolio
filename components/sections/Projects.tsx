import { MotionReveal } from '@/components/ui/MotionReveal';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { projects } from '@/lib/content';

export function Projects() {
  return (
    <Section id="projects" title="Featured Enterprise Case Studies">
      <div className="space-y-8">
        {projects.map((project, index) => (
          <MotionReveal key={project.slug} delay={index * 0.05}>
            <ProjectCard project={project} />
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
