import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] md:min-h-screen flex items-center bg-secondary/30">
        <div className="absolute inset-0 bg-[url('/globe-bg.png')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="container relative text-center z-10">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                    Fitsum A. Tefera
                </h1>
                <p className="text-2xl font-medium text-primary/90">
                    Entrepreneur | Community Leader | Transcontinental Visionary
                </p>
                <p className="text-md leading-8 text-muted-foreground md:text-lg max-w-2xl mx-auto">
                    Connecting markets, governments, and communities across continents with integrity and vision.
                    <br />
                    <span className="font-semibold text-primary">Board Member, African American Community Census | Founder, RICHFAM International School</span>
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                        <Link href="#ventures">View Portfolio</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="shadow-lg">
                        <Link href="#richfam">Explore RICHFAM</Link>
                    </Button>
                    <Button asChild size="lg" variant="ghost">
                        <Link href="#contact">Contact for Collaboration</Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
