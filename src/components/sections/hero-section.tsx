import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full py-24 md:py-32 lg:py-48 bg-secondary/50">
      <div className="container text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Fitsum A. Tefera: Visionary Entrepreneur & Community Leader
          </h1>
          <p className="text-lg leading-8 text-muted-foreground md:text-xl">
            Driving Socioeconomic Growth Through Strategic Investments and Pioneering Projects.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#richfam">Explore RICHFAM Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#timeline">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
