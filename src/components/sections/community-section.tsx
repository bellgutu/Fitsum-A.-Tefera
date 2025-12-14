import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 'testimonial-1',
    quote: "Fitsum's vision and dedication are unparalleled. His projects not only succeed financially but also enrich the entire community. It's an honor to work alongside him.",
    name: "Dr. Alemayehu G.",
    title: "Business Partner",
  },
  {
    id: 'testimonial-2',
    quote: "The RICHFAM project is a game-changer for our city's educational landscape. Fitsum's commitment to quality and access is truly inspiring.",
    name: "Hanna T.",
    title: "Community Leader",
  },
  {
    id: 'testimonial-3',
    quote: "Working with Fitsum has been a masterclass in integrity and strategic thinking. He leads with a clear purpose that motivates everyone around him.",
    name: "Yonas M.",
    title: "Project Consultant",
  },
   {
    id: 'testimonial-4',
    quote: "His leadership in the Ethiopian diaspora is crucial. He is a genuine bridge-builder between our community and U.S. institutions.",
    name: "Samuel B.",
    title: "Diaspora Member",
  }
];

export default function CommunitySection() {
    return (
        <section id="community" className="w-full py-20 md:py-28 lg:py-32">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-sm font-bold tracking-wider uppercase text-accent">Community & Diplomacy</span>
                        <h2 className="font-bold text-3xl md:text-4xl mt-2 text-primary">A Voice for Progress</h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                           Fitsum's influence extends far beyond the boardroom. As a respected leader, he has dedicated himself to uplifting the Ethiopian diaspora and fostering crucial dialogues.
                        </p>
                        <div className="mt-8 space-y-6">
                            <Card className="bg-background shadow-sm border-l-4 border-accent">
                                <CardHeader>
                                    <CardTitle>Board Member – African American Community Census</CardTitle>
                                    <CardDescription>
                                        In this vital role, Fitsum works to ensure accurate community representation, influencing policy and promoting equity through precise census data.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                             <Card className="bg-background shadow-sm border-l-4 border-primary/20">
                                <CardHeader>
                                    <CardTitle>President of the Ethiopian Community (U.S.)</CardTitle>
                                    <CardDescription>
                                        Serving as a unifying voice, he has led the diaspora, providing guidance and facilitating U.S.-Ethiopia diplomatic and business dialogues.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                     <Carousel
                        opts={{ align: "start", loop: true }}
                        className="w-full max-w-lg mx-auto"
                    >
                         <h3 className="font-bold text-2xl mb-6 text-primary text-center">What Partners & Peers Say</h3>
                        <CarouselContent>
                            {testimonials.map((testimonial) => {
                                const image = PlaceHolderImages.find(p => p.id === testimonial.id);
                                return (
                                    <CarouselItem key={testimonial.id}>
                                        <Card className="h-full flex flex-col justify-between shadow-lg bg-secondary/30">
                                            <CardContent className="pt-6">
                                                 <Quote className="w-6 h-6 text-accent mb-4" />
                                                <p className="italic text-foreground/80">"{testimonial.quote}"</p>
                                            </CardContent>
                                            <CardFooter className="bg-background/50 p-4 flex items-center gap-4 mt-4">
                                                <Avatar className="w-12 h-12 border-2 border-accent/50">
                                                    {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-semibold text-primary">{testimonial.name}</p>
                                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="-left-4 bg-background/50 hover:bg-background" />
                        <CarouselNext className="-right-4 bg-background/50 hover:bg-background" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
