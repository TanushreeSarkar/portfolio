import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-background/50 border-t border-border/20 backdrop-blur-sm mt-24">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <Link href="/" className="font-headline font-bold text-2xl tracking-tight animated-gradient-text">
              Tanushree Sarkar
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              A passionate developer building the future of web.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <h4 className="font-semibold text-lg text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-end">
            <h4 className="font-semibold text-lg text-foreground">Connect With Me</h4>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/TanushreeSarkar" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/tanushree-sarkar-32635624b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:sarkartanushree287@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Tanushree Sarkar. All rights reserved. Designed with passion and love by TanushreeSarkar.</p>
        </div>
      </div>
    </footer>
  );
}
