import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Landmark, Recycle, Sprout } from "lucide-react";

const impactPoints = [
    {
        icon: Briefcase,
        title: "Job Creation",
        description: "Generating hundreds of direct and indirect employment opportunities in both the U.S. and Ethiopia."
    },
    {
        icon: Landmark,
        title: "Economic Contribution",
        description: "Significantly contributing to national economies through substantial tax revenues and investments."
    },
    {
        icon: Sprout,
        title: "Educational Advancement",
        description: "Pioneering high-quality, accessible education in Ethiopia to cultivate future leaders."
    },
    {
        icon: Recycle,
        title: "Sustainable Practices",
        description: "Implementing green technologies and sustainable business models in all projects."
    }
];

export default function LegacySection() {
    return (
        <section id="legacy" className="w-full py-20 md:py-28 lg:py-32">
            <div className="container space-y-16">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-sm font-bold tracking-wider uppercase text-accent">Impact & Legacy</span>
                    <h2 className="font-bold text-3xl md:text-4xl mt-2 text-primary">Building a Stronger, More Prosperous Future</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Projects are designed not just for financial returns, but to create a lasting positive legacy for society and the environment.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impactPoints.map((point, index) => (
                        <Card key={index} className="border-2 border-transparent hover:border-accent hover:shadow-2xl transition-all duration-300 group bg-secondary/30 hover:bg-background">
                           <CardHeader className="items-center text-center">
                                <div className="bg-background rounded-full p-4 mb-4 group-hover:bg-accent transition-colors duration-300">
                                    <point.icon className="w-10 h-10 text-primary group-hover:text-accent-foreground" />
                                </div>
                                <CardTitle>{point.title}</CardTitle>
                           </CardHeader>
                           <CardContent>
                               <p className="text-center text-muted-foreground">{point.description}</p>
                           </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
