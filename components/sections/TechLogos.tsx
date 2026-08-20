import { MotionReveal } from '@/components/ui/MotionReveal';
import { Section } from '@/components/ui/Section';
import { TechIcon } from '@/components/ui/TechIcon';
import { technologies } from '@/lib/content';

export function TechLogos() {
  return (
    <Section id="technologies" title="Technology Stack">
      <MotionReveal>
        <p className="mb-8 max-w-2xl text-on-surface-variant">
          Production tools and platforms I deploy, operate, and automate across cloud,
          Kubernetes, CI/CD, and observability environments.
        </p>
      </MotionReveal>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {technologies.map((tech, index) => (
          <MotionReveal key={tech.slug} delay={index * 0.03}>
            <div className="hud-card flex flex-col items-center justify-center gap-3 p-4 text-center transition-colors hover:border-primary-container/30">
              <TechIcon
                icon={tech.icon}
                name={tech.name}
                slug={tech.slug}
                className="h-10 w-10"
              />
              <span className="font-mono text-[10px] uppercase tracking-wide text-on-surface-variant">
                {tech.name}
              </span>
            </div>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
