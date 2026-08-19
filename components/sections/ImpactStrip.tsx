import { MotionReveal } from '@/components/ui/MotionReveal';
import { Section } from '@/components/ui/Section';
import { impact } from '@/lib/content';

export function ImpactStrip() {
  return (
    <Section id="impact" title="System Metrics">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {impact.metrics.map((metric, index) => (
          <MotionReveal key={metric.label} delay={index * 0.05}>
            <div className="hud-card flex flex-col gap-2 p-6">
              <p className="font-mono text-2xl font-bold text-on-surface md:text-3xl">
                {metric.value}
              </p>
              <p className="font-mono text-xs uppercase tracking-wide text-on-surface">
                {metric.label}
              </p>
              {metric.description && (
                <p className="text-xs text-on-surface-variant">{metric.description}</p>
              )}
            </div>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
