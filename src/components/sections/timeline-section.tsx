import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, GraduationCap, Star, Users } from "lucide-react";

const timelineEvents = [
    {
        icon: GraduationCap,
        date: "1995-1999",
        title: "B.A. in Economics",
        description: "Graduated with honors, laying the foundation for a career in business and finance."
    },
    {
        icon: Building,
        date: "2000-2010",
        title: "Early Career in Imports",
        description: "Established a successful import-export business, gaining deep insights into international trade and logistics."
    },
    {
        icon: Users,
        date: "2011-Present",
        title: "Community Leadership",
        description: "Actively involved in various community development boards and philanthropic organizations."
    },
    {
        icon: Star,
        date: "2023",
        title: "Launch of RICHFAM Project",
        description: "Initiated the landmark RICHFAM International School project, marking a new chapter in educational investment."
    }
];

export default function TimelineSection() {
    return (
        <section id="timeline" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/50">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-bold tracking-wider uppercase text-primary">Professional Journey</span>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">Milestones of a Visionary</h2>
                </div>
                <div className="relative">
                    {/* The vertical line */}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => (
                            <div key={index} className="relative flex items-center justify-center">
                                <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
                                    <Card className="shadow-lg hover:shadow-xl transition-shadow">
                                        <CardHeader>
                                            <p className="text-sm text-muted-foreground">{event.date}</p>
                                            <CardTitle className="font-headline">{event.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>{event.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="order-2 w-1/12 flex justify-center">
                                    <div className="z-10 bg-primary text-primary-foreground rounded-full p-3 ring-8 ring-background">
                                        <event.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="w-5/12 order-1"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
