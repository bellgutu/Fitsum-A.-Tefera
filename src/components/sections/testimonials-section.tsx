import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
  }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="w-full py-20 md:py-28 lg:py-32">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-bold tracking-wider uppercase text-primary">Testimonials</span>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">What Partners & Peers Say</h2>
                </div>
                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial) => {
                            const image = PlaceHolderImages.find(p => p.id === testimonial.id);
                            return (
                                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="h-full flex flex-col justify-between">
                                            <CardContent className="pt-6">
                                                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                                            </CardContent>
                                            <div className="bg-secondary p-4 flex items-center gap-4">
                                                <Avatar>
                                                    {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-semibold">{testimonial.name}</p>
                                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
