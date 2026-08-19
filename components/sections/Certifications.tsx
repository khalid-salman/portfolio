import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { MotionReveal } from '@/components/ui/MotionReveal';
import { Section } from '@/components/ui/Section';
import { certifications } from '@/lib/content';

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert, index) => (
          <MotionReveal key={cert.id} delay={index * 0.05}>
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group hud-card block overflow-hidden transition-colors hover:border-primary-container/40"
            >
              {cert.badgeImage && (
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-surface-container-high">
                  <Image
                    src={cert.badgeImage}
                    alt={`${cert.name} certificate`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-medium text-on-surface group-hover:text-primary-container">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-on-surface-variant">{cert.issuer}</p>
                <p className="mt-2 font-mono text-xs text-on-surface-variant">
                  {cert.issuedDate}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-primary-container">
                  Verify credential
                  <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </a>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
