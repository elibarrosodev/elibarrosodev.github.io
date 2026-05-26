import { ContactSection } from '@/presentation/components/ContactSection';
import { ExpertiseSection } from '@/presentation/components/ExpertiseSection';
import { Footer } from '@/presentation/components/Footer';
import { HeroSection } from '@/presentation/components/HeroSection';
import { Navigation } from '@/presentation/components/Navigation';
import { PhilosophySection } from '@/presentation/components/PhilosophySection';
import { ProjectsSection } from '@/presentation/components/ProjectsSection';
import { TimelineSection } from '@/presentation/components/TimelineSection';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <HeroSection />
        <PhilosophySection />
        <ProjectsSection />
        <ExpertiseSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
