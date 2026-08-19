import siteData from '@/content/site.json';
import impactData from '@/content/impact.json';
import projectsData from '@/content/projects.json';
import skillsData from '@/content/skills.json';
import experienceData from '@/content/experience.json';
import certificationsData from '@/content/certifications.json';
import educationData from '@/content/education.json';
import technologiesData from '@/content/technologies.json';

import type {
  Site,
  Impact,
  Project,
  Skills,
  ExperienceEntry,
  Certification,
  EducationEntry,
  Technologies,
} from '@/lib/types';

export const site: Site = siteData as Site;
export const impact: Impact = impactData as Impact;
export const projects: Project[] = [...(projectsData as Project[])].sort(
  (a, b) => (a.displayOrder ?? 99) - (b.displayOrder ?? 99),
);
export const skills: Skills = skillsData as Skills;
export const experience: ExperienceEntry[] = [...(experienceData as ExperienceEntry[])].sort(
  (a, b) => (a.displayOrder ?? 99) - (b.displayOrder ?? 99),
);
export const certifications: Certification[] = certificationsData as Certification[];
export const education: EducationEntry[] = [...(educationData as EducationEntry[])].sort(
  (a, b) => (a.displayOrder ?? 99) - (b.displayOrder ?? 99),
);
export const technologies = (technologiesData as Technologies).technologies;

export function getSite(): Site {
  return site;
}

export function getImpact(): Impact {
  return impact;
}

export function getProjects(): Project[] {
  return projects;
}

export function getSkills(): Skills {
  return skills;
}

export function getExperience(): ExperienceEntry[] {
  return experience;
}

export function getCertifications(): Certification[] {
  return certifications;
}

export function getEducation(): EducationEntry[] {
  return education;
}

export function getTechnologies() {
  return technologies;
}
