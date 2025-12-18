import Header from '@/components/header';
import Footer from '@/components/footer';
import HighlightsSection from '@/components/sections/highlights-section';
import AboutSection from '@/components/sections/about-section';
import VenturesSection from '@/components/sections/ventures-section';
import RichfamProjectSection from '@/components/sections/richfam-project-section';
import CommunitySection from '@/components/sections/community-section';
import PartnersSection from '@/components/sections/partners-section';
import LegacySection from '@/components/sections/legacy-section';
import ContactSection from '@/components/sections/contact-section';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AboutSection />
        <VenturesSection />
        <HighlightsSection />
        <RichfamProjectSection />
        <CommunitySection />
        <PartnersSection />
        <LegacySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
