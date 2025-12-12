import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'about-photo');

    return (
        <section id="about" className="w-full py-20 md:py-28 lg:py-32">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
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
                    <div className="space-y-6">
                        <div>
                            <span className="text-sm font-bold tracking-wider uppercase text-primary">About Me</span>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">FITSUM A. TEFERA</h2>
                            <p className="mt-4 text-muted-foreground">
                                Fitsum A. Tefera is a dynamic entrepreneur, dedicated community leader, and ethical business professional whose career is defined by his ability to connect people, markets, and governments across continents. Spanning successful ventures in both the United States and Ethiopia, Fitsum has built a reputation not only for business acumen but also for profound integrity, humility, and a deep commitment to upliftment.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="font-headline text-xl font-semibold text-primary">Community Leadership and Diplomatic Engagement</h3>
                            <p className="mt-2 text-muted-foreground">
                                Fitsum's influence extends far beyond the boardroom. A passionate advocate for the Ethiopian diaspora, he has actively led the Ethiopian community as a President in the United States, providing support, guidance, and a unifying voice. Crucially, Fitsum operates as an unofficial but highly effective bridge to the Ethiopian government within the U.S., facilitating communication and understanding between the diaspora, American stakeholders, and official Ethiopian bodies. His role as a respected community figure and connector allows him to support Ethiopian interests and foster collaborative relationships aimed at progress and mutual benefit.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-headline text-xl font-semibold text-primary">Global Entrepreneurship and Strategic Partnerships</h3>
                            <p className="mt-2 text-muted-foreground">
                                A natural builder of organizations, Fitsum's entrepreneurial journey is marked by diversity and strategic depth. In the United States, he established and successfully managed a thriving car dealership and a robust transport business. His strategic insight has also led to valuable contacts within the U.S. Department of Defense (DOD). Simultaneously, he is spearheading the RichFam mega project in Ethiopia centered on Education and Tourism. He holds an Associate Degree in Interior and Exterior Design, complementing his practical skills.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-headline text-xl font-semibold text-primary">Character and Leadership Philosophy</h3>
                            <p className="mt-2 text-muted-foreground">
                                What truly distinguishes Fitsum is his character. He is renowned as a remarkably friendly and humble individual who cultivates close and meaningful relationships. His leadership style is rooted in empathy and love, making him a strong team player. A spiritual and God-fearing person, Fitsum is a happily married father of two, prioritizing family and integrity. He is a diligent professional, skilled at delegating, and remains committed to personal growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
