import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const accreditations = ["TWIC®", "EIN Verified", "VA-SCC", "VA-DMV Certified"];

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container pt-12 pb-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-3 md:col-span-1">
            <h3 className="font-semibold text-lg text-primary mb-4">Fitsum A. Tefera</h3>
            <p className="text-sm text-muted-foreground">Entrepreneur | Community Leader | Transcontinental Visionary</p>
          </div>
          <div className="col-span-3 md:col-span-2">
             <h4 className="font-semibold mb-3">Accreditations & Verifications</h4>
             <div className="flex flex-wrap gap-2">
                {accreditations.map(cred => <Badge key={cred} variant="outline" className="border-accent/50 text-accent-foreground">{cred}</Badge>)}
             </div>
             <p className="text-xs text-muted-foreground mt-4">Feasibility study by Washera Consulting PLC.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Fitsum A. Tefera. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
