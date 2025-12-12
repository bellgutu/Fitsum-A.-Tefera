
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'RICHFAM Project', href: '#richfam' },
  { name: 'Impact', href: '#impact' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Testimonials', href: '#testimonials' },
];

function NavContent({ onLinkClick }: { onLinkClick: () => void }) {
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onLinkClick}
          className="text-lg font-medium hover:text-primary transition-colors block py-2 md:text-sm md:py-0"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}


function MobileMenu({ isOpen, onOpenChange, closeMenu }: { isOpen: boolean, onOpenChange: (open: boolean) => void, closeMenu: () => void }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={closeMenu} className="font-headline text-xl font-bold text-primary">
              Fitsum A. Tefera
            </Link>
            <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <NavContent onLinkClick={closeMenu} />
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md border-b' : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="font-headline text-2xl font-bold text-primary" onClick={closeMobileMenu}>
          Fitsum A. Tefera
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavContent onLinkClick={() => {}} />
        </nav>
        <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
                <MobileMenu 
                isOpen={isMobileMenuOpen}
                onOpenChange={setMobileMenuOpen}
                closeMenu={closeMobileMenu}
                />
            </div>
        </div>
      </div>
    </header>
  );
}
