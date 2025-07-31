'use client';
import SectionWrapper from '@/components/section-wrapper';
import { Award, BrainCircuit, Code, Star, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const achievements = [
  {
    category: 'Certifications',
    items: [
      {
        title: 'Google Cloud: Intro to Generative AI, Gemini for Data Scientists, Analytics',
        icon: Award,
        source: 'Google',
      },
      {
        title: 'Microsoft: Azure AI Fundamentals',
        icon: Award,
        source: 'Microsoft',
      },
      {
        title: 'HackerRank: JavaScript Specialist',
        icon: Award,
        source: 'HackerRank',
      },
      {
        title: '5★ in Java, Python, SQL, Algorithms',
        icon: Star,
        source: 'HackerRank',
      },
    ],
  },
  {
    category: 'Competitive Programming',
    items: [
      {
        title: '220+ problems solved on LeetCode',
        icon: Code,
        source: 'LeetCode',
      },
      {
        title: '250+ challenges solved on HackerRank',
        icon: BrainCircuit,
        source: 'HackerRank',
      },
      {
        title: 'Focus on optimization and clean code',
        icon: Target,
        source: 'Practice',
      },
    ]
  }
];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <h2 className="text-3xl font-bold font-headline text-center mb-12">
        Achievements & Certifications
      </h2>
      <div className="max-w-4xl mx-auto">
        {achievements.map((group) => (
          <div key={group.category} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">{group.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.items.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-card p-4 rounded-lg border flex items-start gap-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="p-2 bg-primary/10 rounded-full">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <Badge variant="secondary" className="mt-1">{item.source}</Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
