import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/30">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-sm font-bold tracking-wider uppercase text-accent">Get In Touch</span>
                    <h2 className="font-bold text-3xl md:text-4xl mt-2 text-primary">Contact & Collaboration</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Open to strategic partnerships, investment opportunities, and cross-continental collaborations.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Input placeholder="Your Name" type="text" className="bg-background" />
                            <Input placeholder="Your Email" type="email" className="bg-background" />
                        </div>
                        <Input placeholder="Subject" type="text" className="bg-background" />
                        <Textarea placeholder="Your Message" rows={6} className="bg-background" />
                        <div className="text-center">
                            <Button type="submit" size="lg" className="w-full md:w-auto">Send Message</Button>
                        </div>
                    </form>
                    <p className="text-center text-xs text-muted-foreground mt-6">
                        For business inquiries regarding RICHFAM investments, U.S.-Ethiopia trade, or community initiatives, please use this form.
                    </p>
                </div>
            </div>
        </section>
    )
}
