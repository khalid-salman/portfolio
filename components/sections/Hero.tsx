import Image from 'next/image';
import { MapPin, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MotionReveal } from '@/components/ui/MotionReveal';
import { site } from '@/lib/content';
import { assetPath } from '@/lib/assetPath';

export function Hero() {
  const { owner } = site;

  return (
    <section id="hero" className="relative scroll-mt-20 border-b border-border py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-container px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <MotionReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-surface-container-high px-3 py-1.5">
                <span className="pulse-dot" aria-hidden />
                <span className="font-mono text-xs text-secondary">
                  Available for DevOps &amp; Cloud Engineering roles
                </span>
              </div>

              <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary-container">
                {owner.title}
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-on-surface sm:text-5xl lg:text-6xl">
                {owner.name}
              </h1>
              <p className="terminal-line mt-6 max-w-2xl leading-relaxed">
                &gt; {owner.tagline}
              </p>
              {owner.summary && (
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-on-surface-variant md:text-base">
                  {owner.summary}
                </p>
              )}
              <p className="mt-4 flex items-center gap-2 text-sm text-on-surface-variant">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                {owner.location}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="#projects">&gt; View Case Studies</Button>
                <Button variant="secondary" href="#contact">
                  &gt; Get in Touch
                </Button>
                <Button variant="ghost" href={assetPath('/resume.pdf')} download>
                  &gt; Download Resume
                </Button>
              </div>
            </MotionReveal>
          </div>

          <div className="lg:col-span-5">
            <MotionReveal delay={0.1}>
              <div className="hud-card overflow-hidden">
                {owner.photo && (
                  <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-border bg-surface-container">
                    <Image
                      src={assetPath(owner.photo)}
                      alt={`${owner.name}, professional photo`}
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                    <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary-container">
                      <Terminal className="h-4 w-4" aria-hidden />
                      Recruiter Brief
                    </h3>
                    <span className="font-mono text-[10px] uppercase text-on-surface-variant">
                      Online
                    </span>
                  </div>
                  <dl className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-[90px_1fr] gap-3">
                      <dt className="text-on-surface-variant">Experience</dt>
                      <dd className="text-secondary">&gt; 4+ Years Cloud/DevOps</dd>
                    </div>
                    <div className="grid grid-cols-[90px_1fr] gap-3">
                      <dt className="text-on-surface-variant">Top Tools</dt>
                      <dd className="text-on-surface">&gt; OpenShift, K8s, IBM MQ</dd>
                    </div>
                    <div className="grid grid-cols-[90px_1fr] gap-3">
                      <dt className="text-on-surface-variant">Certs</dt>
                      <dd className="text-on-surface">&gt; CKA, AWS SAA, AWS CP</dd>
                    </div>
                    <div className="grid grid-cols-[90px_1fr] gap-3">
                      <dt className="text-on-surface-variant">Location</dt>
                      <dd className="text-on-surface">&gt; Riyadh, Saudi Arabia</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
