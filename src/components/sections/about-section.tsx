import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Briefcase, Heart, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const highlights = [
  { icon: Briefcase, text: 'Decades of experience in strategic business development and investment.' },
  { icon: Users, text: 'Founder and visionary behind the RICHFAM International School project.' },
  { icon: Award, text: 'Recognized leader in community development initiatives.' },
  { icon: Heart, text: 'Passionate about creating sustainable and impactful socioeconomic growth.' },
];

export default function AboutSection() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'about-photo');

    return (
        <section id="about" className="w-full py-20 md:py-28 lg:py-32">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="relative aspect-[4/5] max-w-md mx-auto">
                        {aboutImage && (
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                fill
                                className="rounded-lg object-cover shadow-xl"
                                data-ai-hint={aboutImage.imageHint}
                            />
                        )}
                        <div className="absolute -bottom-4 -right-4 bg-accent w-24 h-24 rounded-full -z-10"></div>
                        <div className="absolute -top-4 -left-4 bg-primary w-32 h-32 rounded-lg -z-10"></div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <span className="text-sm font-bold tracking-wider uppercase text-primary">About Me</span>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">A Commitment to Progress and People</h2>
                            <p className="mt-4 text-muted-foreground">
                                With a career rooted in strategic innovation and a heart for community upliftment, Fitsum Tefera has consistently turned visionary ideas into tangible, impactful realities.
                            </p>
                        </div>
                        <ul className="space-y-4">
                            {highlights.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="bg-primary text-primary-foreground rounded-full p-2">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span className="flex-1 pt-1">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground">
                            "True success is measured not by what we accumulate, but by the positive impact we leave on the lives of others and the communities we serve."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
