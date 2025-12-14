import Image from "next/image";
import { Quote } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/30">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="relative aspect-[4/5] max-w-md mx-auto group">
                        <div className="absolute -inset-2.5 bg-gradient-to-br from-accent to-green-500 rounded-lg blur-md opacity-40 group-hover:opacity-60 transition duration-500"></div>
                        <Image
                            src="/fitsum-tefera.jpg"
                            alt="A professional portrait of Fitsum A. Tefera."
                            width={600}
                            height={750}
                            className="relative rounded-lg object-cover shadow-2xl w-full h-full"
                        />
                    </div>
                    <div className="space-y-6">
                        <div>
                            <span className="text-sm font-bold tracking-wider uppercase text-accent">The Man Behind the Vision</span>
                            <h2 className="font-bold text-3xl md:text-4xl mt-2 text-primary">About Fitsum A. Tefera</h2>
                            <p className="mt-4 text-muted-foreground">
                                Renowned for his integrity and humility, Fitsum is a God-fearing family man who builds bridges between people, markets, and governments. As President of the Ethiopian Community in the U.S. and an unofficial liaison to the Ethiopian government, he fosters diplomatic and economic ties. His network includes valuable contacts within the U.S. Department of Defense, reflecting his capacity to manage high-stakes professional relationships.
                            </p>
                        </div>
                        
                        <div className="bg-background/50 rounded-lg p-6 border border-dashed border-accent/50">
                            <Quote className="w-8 h-8 text-accent mb-2" />
                            <blockquote className="text-lg italic text-primary">
                                "True leadership is built on integrity, empathy, and the courage to bridge divides."
                            </blockquote>
                        </div>

                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <CheckIcon />
                                <span>Humble, God-fearing, family man</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckIcon />
                                <span>U.S. Department of Defense contacts</span>
                            </li>
                             <li className="flex items-center gap-3">
                                <CheckIcon />
                                <span>President of Ethiopian Community in the U.S.</span>
                            </li>
                             <li className="flex items-center gap-3">
                                <CheckIcon />
                                <span>Unofficial diplomatic liaison</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 shrink-0">
        <path d="M20 6 9 17l-5-5"/>
    </svg>
);
