import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { DollarSign, MapPin, TrendingUp, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const metrics = [
    { icon: DollarSign, title: 'Investment', value: '$10M+', description: 'Total project investment' },
    { icon: TrendingUp, title: 'Projected ROI', value: '15-20%', description: 'Annual return on investment' },
    { icon: Users, title: 'Jobs Created', value: '500+', description: 'During and post-construction' },
];

export default function RichfamProjectSection() {
    const renders = PlaceHolderImages.filter(p => p.id.startsWith('richfam-render'));

    return (
        <section id="richfam" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/50">
            <div className="container space-y-16">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-sm font-bold tracking-wider uppercase text-primary">Flagship Project</span>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">RICHFAM International School</h2>
                    <p className="mt-4 text-muted-foreground">
                        A state-of-the-art educational institution designed to cultivate the next generation of leaders and innovators in Ethiopia, blending international curriculum with local values.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {metrics.map((metric) => (
                        <Card key={metric.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="items-center">
                                <div className="bg-primary text-primary-foreground rounded-full p-3 mb-2">
                                    <metric.icon className="w-8 h-8" />
                                </div>
                                <CardTitle className="font-headline">{metric.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold text-primary">{metric.value}</p>
                                <p className="text-sm text-muted-foreground mt-1">{metric.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="font-headline text-2xl font-bold mb-4">Project Location & Vision</h3>
                        <div className="flex items-start gap-4 mb-6">
                            <MapPin className="w-8 h-8 text-primary mt-1 shrink-0" />
                            <div>
                                <p className="font-semibold">Addis Ababa, Ethiopia</p>
                                <p className="text-muted-foreground">Strategically located in a prime, developing area to maximize accessibility and community integration.</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            The feasibility study, prepared by leading consultants, confirms the project's viability and outlines a phased development plan. The 3D architectural renders visualize a modern, eco-friendly campus with cutting-edge facilities for academics, sports, and arts.
                        </p>
                    </div>
                    <Carousel className="w-full max-w-xl mx-auto">
                        <CarouselContent>
                            {renders.map((render, index) => (
                                <CarouselItem key={index}>
                                    <Card className="overflow-hidden">
                                        <CardContent className="p-0 aspect-[4/3] relative">
                                            <Image
                                                src={render.imageUrl}
                                                alt={render.description}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={render.imageHint}
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
