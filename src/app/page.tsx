import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import RichfamProjectSection from '@/components/sections/richfam-project-section';
import ImpactSection from '@/components/sections/impact-section';
import TimelineSection from '@/components/sections/timeline-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import DataExtractionTool from '@/components/sections/data-extraction-tool';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <RichfamProjectSection />
        <ImpactSection />
        <TimelineSection />
        <TestimonialsSection />
        <DataExtractionTool />
      </main>
      <Footer />
    </div>
  );
}
