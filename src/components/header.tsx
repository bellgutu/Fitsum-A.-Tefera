'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { name: 'Credentials', href: '#credentials' },
  { name: 'Ventures', href: '#ventures' },
  { name: 'RICHFAM', href: '#richfam' },
  { name: 'Community', href: '#community' },
  { name: 'Contact', href: '#contact' },
];

function NavContent({ onLinkClick }: { onLinkClick: () => void }) {
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onLinkClick}
          className="text-lg font-medium hover:text-accent transition-colors block py-2 md:text-sm md:py-0"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}


function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={() => setIsOpen(false)} className="font-headline text-xl font-bold text-primary">
              Fitsum A. Tefera
            </Link>
          </div>
          <nav className="flex flex-col gap-4">
            <NavContent onLinkClick={() => setIsOpen(false)} />
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-primary">
          Fitsum A. Tefera
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavContent onLinkClick={() => {}} />
        </nav>
        <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden md:flex" size="sm">
                <Link href="#contact">Contact</Link>
            </Button>
            <div className="md:hidden">
                <MobileMenu />
            </div>
        </div>
      </div>
    </header>
  );
}
