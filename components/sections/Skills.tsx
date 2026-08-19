import { MotionReveal } from '@/components/ui/MotionReveal';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';
import { skills } from '@/lib/content';

export function Skills() {
  return (
    <Section id="skills" title="Skills Matrix">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.categories.map((category, index) => (
          <MotionReveal key={category.id} delay={index * 0.05}>
            <div className="hud-card p-6">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary-container">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
