import Image from "next/image";
import { Quote } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="w-full py-20 md:py-28 lg:py-32 bg-background">
            <div className="container">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-sm font-bold tracking-wider uppercase text-accent">The Man Behind the Vision</span>
                    <h1 className="font-bold text-4xl md:text-5xl mt-2 text-primary">About Fitsum A. Tefera</h1>
                </div>

                <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
                    <div className="md:col-span-2 relative aspect-[4/5] max-w-md mx-auto group">
                        <div className="absolute -inset-2.5 bg-gradient-to-br from-accent to-green-500 rounded-lg blur-md opacity-40 group-hover:opacity-60 transition duration-500"></div>
                        <Image
                            src="/fitsum-tefera.jpg"
                            alt="A professional portrait of Fitsum A. Tefera."
                            width={600}
                            height={750}
                            className="relative rounded-lg object-cover shadow-2xl w-full h-full"
                        />
                    </div>
                    <div className="md:col-span-3 space-y-8">
                        <div>
                            
                            <p className="mt-4 text-muted-foreground text-lg">
                                Fitsum A. Tefera is a dynamic entrepreneur, dedicated community leader, and ethical business professional whose career is defined by his ability to connect people, markets, and governments across continents. Spanning successful ventures in both the United States and Ethiopia, Fitsum has built a reputation not only for business acumen but also for profound integrity, humility, and a deep commitment to upliftment.
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <h3 className="font-semibold text-xl text-primary border-b-2 border-accent/50 pb-2">Global Entrepreneurship and Strategic Partnerships</h3>
                            <p className="text-muted-foreground">
                                A natural builder of organizations, Fitsum's entrepreneurial journey is marked by diversity and strategic depth. In the United States, he served as a logistics contractor for the U.S. Department of Defense (DOD), where his strategic insight and reliable performance underscored his capacity to manage high-stakes professional relationships. He also established and successfully managed a thriving car dealership and a robust transport business, demonstrating his ability to navigate competitive markets. Simultaneously, Fitsum maintains an active business presence in Ethiopia, leveraging his intimate knowledge of the local economy. He is currently spearheading the RichFam mega-project centered on Education and Tourism. Fitsum holds an Associate Degree in Interior and Exterior Design, complementing his practical skills with a deep understanding of structural and aesthetic project development.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-xl text-primary border-b-2 border-accent/50 pb-2">Community Leadership and Diplomatic Engagement</h3>
                            <p className="text-muted-foreground">
                                Fitsum's influence extends far beyond the boardroom. A passionate advocate for the Ethiopian diaspora, he has actively led the Ethiopian community as a President in the United States, providing support, guidance, and a unifying voice. Crucially, Fitsum operates as an unofficial but highly effective bridge to the Ethiopian government within the U.S., facilitating communication and understanding between the diaspora, American stakeholders, and official Ethiopian bodies. His role as a respected community figure and connector allows him to support Ethiopian interests and foster collaborative relationships aimed at progress and mutual benefit.
                            </p>
                        </div>
                        
                        <div className="bg-secondary/30 rounded-lg p-6 border border-dashed border-accent/50">
                            <Quote className="w-8 h-8 text-accent mb-2" />
                            <blockquote className="text-lg italic text-primary">
                                "True leadership is built on integrity, empathy, and the courage to bridge divides."
                            </blockquote>
                        </div>

                         <div className="space-y-4">
                            <h3 className="font-semibold text-xl text-primary border-b-2 border-accent/50 pb-2">Character and Leadership Philosophy</h3>
                            <p className="text-muted-foreground">
                                What truly distinguishes Fitsum is his character. He is renowned as a remarkably friendly and humble individual who cultivates close and meaningful relationships with people from all walks of life. His leadership style is rooted in empathy and love, making him a strong team player who consistently encourages and uplifts others. A spiritual and God-fearing person with strong ethical values, Fitsum is happily married and a proud father of two, prioritizing family and demonstrating integrity in both speech and action. He is a diligent professional who is hardworking and highly intentional about building and sustaining networks. He is skilled at delegating responsibilities effectively and is thoughtfully considerate, ensuring every team member receives fair recognition and reward. Fitsum remains committed to personal growth, values knowledge, and willingly learns from others, a reflection of his enduring humility.
                            </p>
                        </div>
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
