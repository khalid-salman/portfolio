export interface Owner {
  name: string;
  title: string;
  tagline: string;
  summary?: string;
  location: string;
  photo?: string;
}

export interface Seo {
  title: string;
  description: string;
  ogImage?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  linkedin: string;
  github?: string;
}

export interface Footer {
  pipelineNote: string;
  repositoryUrl: string;
}

export interface Site {
  owner: Owner;
  seo: Seo;
  contact: Contact;
  footer: Footer;
}

export interface Metric {
  value: string;
  label: string;
  description?: string;
}

export interface Impact {
  metrics: Metric[];
}

export interface DiagramRef {
  path: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  period?: string;
  problem: string;
  solution: string;
  stack: string[];
  outcome: string;
  confidentiality?: 'public' | 'generic-enterprise';
  diagram: DiagramRef;
  screenshot?: DiagramRef;
  displayOrder?: number;
}

export type SkillCategoryId =
  | 'cloud-infrastructure'
  | 'cicd-devsecops'
  | 'observability'
  | 'iac-automation'
  | 'kubernetes-containers'
  | 'security-networking'
  | 'enterprise-messaging';

export interface SkillCategory {
  id: SkillCategoryId;
  name: string;
  skills: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface ExperienceEntry {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  displayOrder?: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;
  badgeImage?: string;
  verificationUrl: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  grade: string;
  displayOrder?: number;
}

export interface Technology {
  name: string;
  slug: string;
  icon: string;
}

export interface Technologies {
  technologies: Technology[];
}
