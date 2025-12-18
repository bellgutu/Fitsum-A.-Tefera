import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building, Globe, Star, Users, Briefcase, Plane, ShieldCheck } from "lucide-react";

const ventures = [
    {
        icon: ShieldCheck,
        title: "U.S. Department of Defense",
        description: "Serving as a trusted logistics contractor, providing essential transport and supply chain solutions."
    },
    {
        icon: Briefcase,
        title: "Rehoboth Trucking, LLC",
        description: "Virginia-based logistics and transport solutions provider, crucial to regional supply chains."
    },
    {
        icon: Users,
        title: "Light LLC",
        description: "Certified Non-Emergency Medical Transportation Carrier, serving communities in Virginia."
    },
    {
        icon: Star,
        title: "U.S. Car Dealership",
        description: "Established and successfully managed a thriving automotive retail and transport business."
    },
    {
        icon: Globe,
        title: "Dukascopy Bank SA",
        description: "Engaging in international finance and trading through a respected Swiss banking relationship."
    },
    {
        icon: Plane,
        title: "RICHFAM Int'l School",
        description: "Spearheading a ~$9.7M flagship educational and tourism mega-project in Ethiopia."
    }
];

export default function VenturesSection() {
    return (
        <section id="ventures" className="w-full py-20 md:py-28 lg:py-32">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-bold tracking-wider uppercase text-accent">Ventures & Portfolio</span>
                    <h2 className="font-bold text-3xl md:text-4xl mt-2 text-primary">A Legacy of Entrepreneurial Success</h2>
                     <p className="mt-4 text-muted-foreground text-lg">
                        From logistics in the U.S. to transformative educational projects in Ethiopia, Fitsum's portfolio is marked by diversity and strategic depth.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ventures.map((venture, index) => (
                         <Card key={index} className="shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group bg-background">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="bg-primary/5 text-primary p-3 rounded-lg">
                                    <venture.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <CardTitle>{venture.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{venture.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
