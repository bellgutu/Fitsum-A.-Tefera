import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { DollarSign, MapPin, TrendingUp, Users, Zap, Droplets } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '../ui/badge';

const Landmark = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="3" x2="21" y1="22" y2="22" />
        <line x1="6" x2="6" y1="18" y2="11" />
        <line x1="10" x2="10" y1="18" y2="11" />
        <line x1="14" x2="14" y1="18" y2="11" />
        <line x1="18" x2="18" y1="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
    </svg>
);

const metrics = [
    { icon: DollarSign, title: 'Investment', value: '~9.7M USD' },
    { icon: TrendingUp, title: 'IRR', value: '48.37%' },
    { icon: Users, title: 'Jobs Created', value: '58+' },
    { icon: Landmark, title: 'Annual Tax', value: '~1.12M USD'},
];

export default function RichfamProjectSection() {
    const renders = PlaceHolderImages.filter(p => p.id.startsWith('richfam-render'));

    return (
        <section id="richfam" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/30">
            <div className="container space-y-16">
                <div className="text-center max-w-4xl mx-auto">
                    <span className="text-sm font-bold tracking-wider uppercase text-accent">Flagship Project</span>
                    <h2 className="font-bold text-3xl md:text-4xl mt-2 text-primary">RICHFAM International School</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        A Montessori-based, holistic K-12 educational institution in Addis Ababa, featuring an integrated amusement park and agro-innovation hub.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric) => (
                        <Card key={metric.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-accent">
                            <CardHeader className="items-center">
                                <div className="bg-primary/5 text-primary rounded-full p-3 mb-2">
                                    <metric.icon className="w-7 h-7" />
                                </div>
                                <CardTitle className="text-lg">{metric.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold text-primary">{metric.value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <Carousel className="w-full max-w-xl mx-auto group">
                        <CarouselContent>
                            {renders.map((render, index) => (
                                <CarouselItem key={index}>
                                    <Card className="overflow-hidden shadow-xl">
                                        <CardContent className="p-0 aspect-video relative">
                                            <Image
                                                src={render.imageUrl}
                                                alt={render.description}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                data-ai-hint={render.imageHint}
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 bg-background/50 hover:bg-background" />
                        <CarouselNext className="right-2 bg-background/50 hover:bg-background" />
                    </Carousel>
                    <div>
                        <h3 className="font-bold text-2xl mb-4 text-primary">Project Vision & Location</h3>
                        <div className="flex items-start gap-4 mb-6">
                            <MapPin className="w-10 h-10 text-accent mt-1 shrink-0" />
                            <div>
                                <p className="font-semibold text-lg">Addis Ababa, Ethiopia</p>
                                <p className="text-muted-foreground">Strategically located in a prime, developing area to maximize accessibility and community integration.</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            The feasibility study, prepared by leading consultants, confirms the project's viability with an NPV of ~$35M. The 3D architectural renders visualize a modern, eco-friendly campus with cutting-edge facilities.
                        </p>
                         <div className="flex flex-wrap gap-4">
                            <Badge variant="outline" className="flex items-center gap-2 py-1 px-3 text-sm border-green-500/50 text-green-700 dark:text-green-400">
                                <Zap className="w-4 h-4" /> Solar-Powered
                            </Badge>
                             <Badge variant="outline" className="flex items-center gap-2 py-1 px-3 text-sm border-blue-500/50 text-blue-700 dark:text-blue-400">
                                <Droplets className="w-4 h-4" /> Water-Recycling
                            </Badge>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
