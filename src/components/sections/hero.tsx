'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 container mx-auto px-4 md:px-6"
      >
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight mb-4 animated-gradient-text">
          Tanushree Sarkar
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          <Typewriter
              words={['Full-Stack Developer', 'Data Viz Enthusiast', 'AI Learner']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" className="bg-primary/90 hover:bg-primary">
            <a href="/resume.pdf" download="Tanushree_Sarkar_Resume.pdf">
              <Download className="mr-2" /> Resume
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://www.linkedin.com/in/tanushree-sarkar-454559253/" target="_blank">
              <Linkedin className="mr-2"/> LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/Tanushree287" target="_blank">
                <Github className="mr-2"/> GitHub
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
