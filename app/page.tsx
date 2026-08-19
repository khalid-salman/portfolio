import { Hero } from '@/components/sections/Hero';
import { ImpactStrip } from '@/components/sections/ImpactStrip';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { TechLogos } from '@/components/sections/TechLogos';
import { Experience } from '@/components/sections/Experience';
import { Certifications } from '@/components/sections/Certifications';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactStrip />
      <Projects />
      <TechLogos />
      <Skills />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
    </main>
  );
}
