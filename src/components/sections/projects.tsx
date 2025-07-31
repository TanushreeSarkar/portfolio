'use client';
import Image from 'next/image';
import SectionWrapper from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { Badge } from '../ui/badge';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Uplifters.Net',
    description: 'A donation and volunteer platform featuring a theme toggle, gallery popups, and animated counters. Achieved 35% faster UX and 40% code optimization.',
    image: 'https://placehold.co/600x400.png',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    github: '#',
    aiHint: 'charity website community'
  },
  {
    name: 'EventEase Dashboard',
    description: 'Tableau dashboard for real-time event analytics. Integrates with Google Sheets with <2s refresh latency and supports filtering for over 500 data points.',
    image: 'https://placehold.co/600x400.png',
    stack: ['Tableau', 'Google Sheets'],
    link: '#',
    github: null,
    aiHint: 'analytics dashboard chart'
  },
  {
    name: 'CRM Sales Pipeline API',
    description: 'A robust Spring Boot backend with 30+ REST APIs for a CRM. Features Firebase authentication, handles 500+ records, and offers analytics with optimized query speed by 40%.',
    image: 'https://placehold.co/600x400.png',
    stack: ['Spring Boot', 'Java', 'Firebase', 'REST'],
    link: null,
    github: '#',
    aiHint: 'api code backend'
  },
   {
    name: 'Portfolio Website',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS, featuring a modern design with glassmorphism and a theme toggle.',
    image: 'https://placehold.co/600x400.png',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
    github: '#',
    aiHint: 'portfolio website code'
  },
  {
    name: 'AI Resume Chatbot',
    description: 'A Genkit-powered AI chatbot trained on my resume, capable of answering questions about my skills and experience.',
    image: 'https://placehold.co/600x400.png',
    stack: ['Genkit', 'Next.js', 'AI'],
    link: '#',
    github: '#',
    aiHint: 'ai chatbot interface'
  },
  {
    name: 'Blockchain-based ML Platform',
    description: 'Ongoing project to develop a decentralized platform for training and deploying machine learning models using blockchain for security and transparency.',
    image: 'https://placehold.co/600x400.png',
    stack: ['Blockchain', 'Python', 'TensorFlow', 'Solidity'],
    link: null,
    github: '#',
    aiHint: 'blockchain machine learning'
  }
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold font-headline text-center mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.name} 
            className="group relative rounded-xl transition-shadow duration-300 bg-card border border-border/60 overflow-hidden flex flex-col hover:shadow-lg hover:shadow-primary/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.aiHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-headline mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>

                <div className="mt-auto flex gap-2">
                  {project.link && (
                    <Button asChild variant="default" className="flex-1">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        Live Demo <ArrowUpRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  )}
                   {project.github && (
                    <Button asChild variant="outline" className="flex-1">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" /> GitHub
                      </Link>
                    </Button>
                   )}
                </div>
              </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
