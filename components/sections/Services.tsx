import { MotionReveal } from '@/components/ui/MotionReveal';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const services = [
  {
    title: 'Platform Setup & Migration',
    description:
      'Stand up production-grade Kubernetes/OpenShift clusters or migrate legacy workloads to GKE/EKS, including networking, RBAC, and secrets management from day one.',
  },
  {
    title: 'CI/CD Pipeline Design',
    description:
      'Build GitLab CI/CD or GitHub Actions pipelines with automated testing, container scanning, and zero-downtime rolling deployments from first commit to production.',
  },
  {
    title: 'Infrastructure as Code',
    description:
      'Terraform and Ansible modules for multi-cloud provisioning VPCs, load balancers, GPU clusters, and air-gapped/zero-trust network boundaries.',
  },
  {
    title: 'Observability & Reliability',
    description:
      'Prometheus/Grafana/Loki stacks for unified metrics, logging, and alerting across hybrid or multi-cloud environments, tuned for fast incident detection.',
  },
  {
    title: 'Security & Compliance Hardening',
    description:
      'IAM least-privilege design, container scanning (Trivy), SSO integration (Keycloak), and network isolation for regulated industries (banking, government, healthcare).',
  },
  {
    title: 'How I Work',
    description:
      'Available for full engagements, fixed-scope projects, or ongoing part-time/retainer support. Typically start with a short scoping call before proposing an approach.',
  },
];

export function Services() {
  return (
    <Section id="services" title="What I Can Do For You">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <MotionReveal key={service.title} delay={index * 0.04}>
            <div className="hud-card flex h-full flex-col p-5 md:p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-primary-container">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                {service.description}
              </p>
            </div>
          </MotionReveal>
        ))}
      </div>
      <MotionReveal delay={0.2}>
        <div className="mt-8">
          <Button href="mailto:Khalid.salman1996@gmail.com?subject=Project%20Inquiry">
            &gt; Start a Project
          </Button>
        </div>
      </MotionReveal>
    </Section>
  );
}
