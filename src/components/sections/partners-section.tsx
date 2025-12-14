import Image from "next/image";

const partners = [
    { name: "U.S. Department of Defense", logo: "/logos/dod.svg" },
    { name: "Virginia DMV & SCC", logo: "/logos/virginia.svg" },
    { name: "Dukascopy Bank SA", logo: "/logos/dukascopy.svg" },
    { name: "Ethiopian Embassy", logo: "/logos/ethiopia.svg" },
    { name: "AACC", logo: "/logos/aacc.svg" },
    { name: "Amazon", logo: "/logos/amazon.svg" },
];

export default function PartnersSection() {
    return (
        <section id="partners" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/30">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-sm font-bold tracking-wider uppercase text-accent">Global Network</span>
                    <h2 className="font-bold text-3xl md:text-4xl mt-2 text-primary">Recognized Partners & Affiliates</h2>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" title={partner.name}>
                            <p className="text-lg font-semibold text-muted-foreground">{partner.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
