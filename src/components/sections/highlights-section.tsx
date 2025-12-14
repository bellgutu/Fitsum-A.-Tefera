import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Banknote, FileBadge, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const credentials = [
  {
    icon: ShieldCheck,
    title: "TWIC® Card",
    description: "Transportation Security Administration clearance.",
    image: "/credentials/twic-card.png"
  },
  {
    icon: FileBadge,
    title: "VA Business Licenses",
    description: "REHOBOTH TRUCKING, LLC & LIGHT LLC (NEMT).",
    image: "/credentials/va-license.png"
  },
  {
    icon: Banknote,
    title: "IRS EIN & Bank SA",
    description: "Verified Taxpayer ID & Swiss banking relationship.",
    image: "/credentials/irs-dukscopy.png"
  },
  {
    icon: BadgeCheck,
    title: "Board Member & ID",
    description: "African American Community Census & Ethiopian Origin ID.",
    image: "/credentials/board-member.png"
  },
];

export default function HighlightsSection() {
  return (
    <section id="credentials" className="w-full py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-bold tracking-wider uppercase text-accent">Verified Credentials</span>
            <h2 className="font-bold text-3xl md:text-4xl mt-2 text-primary">Professional Highlights & Certifications</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer text-center group hover:bg-secondary/50 transition-colors duration-300">
                  <CardHeader className="items-center">
                    <div className="bg-primary/5 text-primary rounded-full p-4 mb-3">
                      <cred.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{cred.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cred.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{cred.title}</DialogTitle>
                  <DialogDescription>{cred.description}</DialogDescription>
                </DialogHeader>
                <div className="relative mt-4 aspect-video bg-muted rounded-lg">
                    {/* Placeholder for scanned document */}
                    <div className="flex items-center justify-center h-full">
                        <p className="text-muted-foreground">Scanned document preview for {cred.title}</p>
                    </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
