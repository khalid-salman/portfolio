import { Mail, MapPin, Linkedin, Download, Phone } from 'lucide-react';
import { assetPath } from '@/lib/assetPath';
import { Button } from '@/components/ui/Button';
import { MotionReveal } from '@/components/ui/MotionReveal';
import { Section } from '@/components/ui/Section';
import { site } from '@/lib/content';

const projectMailto =
  'mailto:Khalid.salman1996@gmail.com?subject=Project%20Inquiry';

export function Contact() {
  const { owner, contact } = site;

  return (
    <Section id="contact" title="Initialize Contact">
      <div className="grid gap-6 md:grid-cols-2">
        <MotionReveal>
          <div className="hud-card flex h-full flex-col p-6 md:p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary-container">
              For Recruiters &amp; Hiring Managers
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
              Open to Senior DevOps, Cloud, and Platform Engineering roles.
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-sm text-on-surface transition-colors hover:text-primary-container"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-on-surface transition-colors hover:text-primary-container"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Button href={assetPath('/resume.pdf')} download>
                <Download className="h-4 w-4" aria-hidden />
                Download Resume
              </Button>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.05}>
          <div className="hud-card flex h-full flex-col p-6 md:p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary-container">
              For Project &amp; Contract Work
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
              Available for fixed-scope projects, contract engagements, and ongoing part-time
              support.
            </p>
            <div className="mt-6">
              <Button href={projectMailto}>&gt; Start a Project</Button>
            </div>
          </div>
        </MotionReveal>
      </div>

      <MotionReveal delay={0.1}>
        <div className="mt-6 flex flex-col gap-3 font-mono text-sm text-on-surface-variant sm:flex-row sm:flex-wrap sm:gap-6">
          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary-container"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {contact.phone.replace(/^(\+\d{3})(\d{3})(\d{3})(\d{3})$/, '$1 $2 $3 $4')}
            </a>
          )}
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {owner.location}
          </span>
        </div>
      </MotionReveal>
    </Section>
  );
}
