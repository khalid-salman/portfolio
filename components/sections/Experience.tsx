import { MotionReveal } from '@/components/ui/MotionReveal';
import { Section } from '@/components/ui/Section';
import { experience } from '@/lib/content';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experience.map((entry, index) => (
          <MotionReveal key={`${entry.company}-${entry.startDate}`} delay={index * 0.05}>
            <article className="hud-card border-l-2 border-l-primary-container p-6 pl-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-on-surface">{entry.title}</h3>
                <span className="font-mono text-xs text-on-surface-variant">
                  {entry.startDate} – {entry.endDate}
                </span>
              </div>
              <p className="mt-1 text-sm text-primary-container">
                {entry.company}
                {entry.employmentType ? ` (${entry.employmentType})` : ''}
              </p>
              <p className="text-sm text-on-surface-variant">{entry.location}</p>
              <ul className="mt-3 list-inside list-disc space-y-1 font-mono text-sm text-on-surface-variant">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
