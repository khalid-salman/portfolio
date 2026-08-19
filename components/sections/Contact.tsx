import { Mail, MapPin, Linkedin, Download, Phone } from 'lucide-react';
import { assetPath } from '@/lib/assetPath';
import { Button } from '@/components/ui/Button';
import { MotionReveal } from '@/components/ui/MotionReveal';
import { Section } from '@/components/ui/Section';
import { site } from '@/lib/content';

export function Contact() {
  const { owner, contact } = site;

  return (
    <Section id="contact" title="Initialize Contact">
      <MotionReveal>
        <div className="hud-card max-w-2xl p-6 md:p-8">
          <p className="font-mono text-sm text-on-surface-variant">
            &gt; Open to DevOps, Cloud, and Platform Engineering roles.
          </p>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-on-surface transition-colors hover:text-primary-container"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {contact.email}
              </a>
            </li>
            {contact.phone && (
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center gap-2 text-on-surface transition-colors hover:text-primary-container"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {contact.phone.replace(/^(\+\d{3})(\d{3})(\d{3})(\d{3})$/, '$1 $2 $3 $4')}
                </a>
              </li>
            )}
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-on-surface transition-colors hover:text-primary-container"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-on-surface-variant">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              {owner.location}
            </li>
          </ul>
          <div className="mt-8">
            <Button href={assetPath('/resume.pdf')} download>
              <Download className="h-4 w-4" aria-hidden />
              Download Resume
            </Button>
          </div>
        </div>
      </MotionReveal>
    </Section>
  );
}
