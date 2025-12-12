import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Landmark, Recycle, Sprout } from "lucide-react";

const impactPoints = [
    {
        icon: Briefcase,
        title: "Job Creation",
        description: "Generating hundreds of direct and indirect employment opportunities, fostering economic stability for local families."
    },
    {
        icon: Landmark,
        title: "Tax Contributions",
        description: "Significantly contributing to the national economy through substantial tax revenues, funding public services."
    },
    {
        icon: Sprout,
        title: "Community Programs",
        description: "Investing in local communities through scholarships, workshops, and support for grassroots initiatives."
    },
    {
        icon: Recycle,
        title: "Environmental Stewardship",
        description: "Implementing sustainable practices and green technologies in all projects to protect and preserve our natural resources."
    }
];

export default function ImpactSection() {
    return (
        <section id="impact" className="w-full py-20 md:py-28 lg:py-32">
            <div className="container space-y-16">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-sm font-bold tracking-wider uppercase text-primary">Socioeconomic Impact</span>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">Building a Stronger, More Prosperous Future</h2>
                    <p className="mt-4 text-muted-foreground">
                        Our projects are designed not just for financial returns, but to create a lasting positive legacy for society and the environment.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impactPoints.map((point, index) => (
                        <Card key={index} className="border-2 border-transparent hover:border-accent hover:shadow-2xl transition-all duration-300 group">
                           <CardHeader className="items-center text-center">
                                <div className="bg-secondary rounded-full p-4 mb-4 group-hover:bg-accent transition-colors duration-300">
                                    <point.icon className="w-10 h-10 text-primary group-hover:text-accent-foreground" />
                                </div>
                                <CardTitle className="font-headline text-xl">{point.title}</CardTitle>
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
