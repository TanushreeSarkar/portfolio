'use client';
import { useState, type FormEvent } from 'react';
import SectionWrapper from '@/components/section-wrapper';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Loader, Mail, Send } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl font-bold font-headline text-center mb-12">
        Get In Touch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="flex flex-col">
          <p className="text-lg text-muted-foreground mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
          </p>
          <div className="space-y-4">
             <Link href="mailto:sarkartanushree287@gmail.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                <Mail className="w-6 h-6 text-primary"/>
                <span>sarkartanushree287@gmail.com</span>
            </Link>
             <Link href="https://www.linkedin.com/in/tanushree-sarkar-32635624b/" target="_blank" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                <Linkedin className="w-6 h-6 text-primary"/>
                <span>Linkedin.com</span>
            </Link>
             <Link href="https://github.com/TanushreeSarkar" target="_blank" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                <Github className="w-6 h-6 text-primary"/>
                <span>Github.com</span>
            </Link>
          </div>
          <div className="mt-8">
            <Button asChild size="lg" className="w-full md:w-auto">
                <a href="/Tanushree_Sarkar_Resume.pdf" download="Tanushree_Sarkar_Resume.pdf">
                    Download Resume
                </a>
            </Button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-xl border">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sarrkartanushree287@gmail.com"
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message here..."
              required
              rows={5}
              disabled={isLoading}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
                <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                </>
            ) : (
                <>
                    Send Message <Send className="ml-2 h-4 w-4"/>
                </>
            )}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
}
