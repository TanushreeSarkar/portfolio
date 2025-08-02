'use client';

import SectionWrapper from '@/components/section-wrapper';
import { Award, BrainCircuit, Code, Star, Target, Bot, Briefcase, BookCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const achievements = [
  {
    category: 'Certifications',
    items: [
      {
        title: 'Google Cloud Certified: Gemini for Data Scientist and Analyst',
        icon: Award,
        source: 'Google Cloud',
        link: 'https://www.cloudskillsboost.google/public_profiles/0135c11e-8fdb-4b6d-adb4-d16b239dee65/badges/14439287',
      },
      {
        title: 'Data Analytics on Google Cloud',
        icon: Award,
        source: 'Google Cloud',
        link: 'https://www.cloudskillsboost.google/public_profiles/82b9fa63-7e03-45e1-83ad-0170092342c2/badges/6278695',
      },
      {
        title: 'Generative AI',
        icon: Award,
        source: 'Google',
        link: 'https://www.cloudskillsboost.google/public_profiles/82b9fa63-7e03-45e1-83ad-0170092342c2/badges/6277845',
      },
      {
        title: 'Azure AI Fundamentals',
        icon: Award,
        source: 'Microsoft',
        link: 'https://www.linkedin.com/in/tanushree-sarkar-32635624b/details/certifications/',
      },
      {
        title: 'JavaScript Specialist Certification',
        icon: Star,
        source: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/5e443dd464db',
      },
      {
        title: 'Business Analysis & Process Management',
        icon: BookCheck,
        source: 'Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/NQYYWGMPIXJU',
      },
    ],
  },
  {
    category: 'Virtual Job Simulations',
    items: [
      {
        title: 'Software Engineer Intern Certificate',
        icon: Briefcase,
        source: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/iframe/48a3b4d374ea',
      },
      {
        title: 'Data Analytics Job Simulation',
        icon: Briefcase,
        source: 'Deloitte Australia (Forage)',
        link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_rLRHEFQ3aevn3Zs9Q_1752597597316_completion_certificate.pdf',
      },
      {
        title: 'Advanced Software Engineering Job Simulation',
        icon: Briefcase,
        source: 'Walmart Global Tech India',
        link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_rLRHEFQ3aevn3Zs9Q_1729499078433_completion_certificate.pdf',
      },
    ],
  },
  {
    category: 'Other Achievements',
    items: [
      {
        title: '5★ in Java, Python, SQL, Algorithms',
        icon: Star,
        source: 'HackerRank',
        link: 'https://www.hackerrank.com/profile/CS_2212256_T', 
      },
      {
        title: '220+ problems solved on LeetCode',
        icon: Code,
        source: 'LeetCode',
        link: 'https://leetcode.com/u/CS_2212256_T/', 
      },
      {
        title: '250+ challenges solved on HackerRank',
        icon: BrainCircuit,
        source: 'HackerRank',
        link: 'https://www.hackerrank.com/profile/CS_2212256_T', 
      },
      {
        title: 'Focus on optimization and clean code',
        icon: Target,
        source: 'Practice',
        link: '',
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
                <motion.a
                  key={index}
                  href={item.link || '#'}
                  target={item.link ? "_blank" : "_self"}
                  rel="noopener noreferrer"
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
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
