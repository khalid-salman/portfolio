import { GraduationCap } from 'lucide-react';
import { MotionReveal } from '@/components/ui/MotionReveal';
import { Section } from '@/components/ui/Section';
import { education } from '@/lib/content';

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {education.map((entry, index) => (
          <MotionReveal key={entry.degree} delay={index * 0.05}>
            <article className="hud-card p-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                <div>
                  <h3 className="font-semibold text-on-surface">{entry.degree}</h3>
                  <p className="mt-1 text-sm text-primary-container">{entry.institution}</p>
                  {entry.location && (
                    <p className="text-sm text-on-surface-variant">{entry.location}</p>
                  )}
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-on-surface-variant">
                    <span>{entry.period}</span>
                    <span>Grade: {entry.grade}</span>
                  </div>
                </div>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
