'use client';
import SectionWrapper from '@/components/section-wrapper';
import {
  SiPython, SiC, SiJavascript, SiHtml5, SiCss3, SiFigma, SiWix,
  SiSpring, SiReact, SiNodedotjs, SiDjango, SiExpress, SiTableau,
  SiLooker, SiGooglebigquery, SiFirebase, SiAmazon, SiGooglecloud, SiDocker,
  SiGit, SiPostman, SiTensorflow, SiMongodb, SiVercel, SiNextdotjs, SiMysql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const skillsByCategory = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'C', icon: <SiC /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'SQL', icon: <SiMysql /> },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'Spring Boot', icon: <SiSpring /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Express.js', icon: <SiExpress /> },
    ],
  },
  {
    category: 'Web & Design',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'Wix', icon: <SiWix /> },
    ],
  },
  {
    category: 'Data & Analytics',
    skills: [
      { name: 'Tableau', icon: <SiTableau /> },
      { name: 'Looker', icon: <SiLooker /> },
      { name: 'BigQuery', icon: <SiGooglebigquery /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: <SiAmazon /> },
      { name: 'GCP', icon: <SiGooglecloud /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Vercel', icon: <SiVercel /> },
    ],
  },
  {
    category: 'AI/ML',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow /> },
    ],
  },
];

const currentlyLearning = [
    { name: 'Advanced DSA', icon: <BrainCircuit/> },
    { name: 'Cloud Native Technologies', icon: <SiGooglecloud /> },
    { name: 'Generative AI', icon: <SiTensorflow /> },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl font-bold font-headline text-center mb-12">
        Tools & Technologies
      </h2>
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsByCategory.map(({ category, skills }) => (
          <motion.div key={category} className="bg-card p-6 rounded-lg border" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2 bg-muted p-2 rounded-md transition-all hover:bg-accent hover:shadow-lg"
                  title={skill.name}
                >
                  <div className="text-2xl text-muted-foreground group-hover:text-primary transition-colors">
                    {skill.icon}
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground transition-colors">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
         <motion.div className="bg-card p-6 rounded-lg border lg:col-span-3" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-primary">Currently Learning</h3>
             <div className="flex flex-wrap gap-4">
              {currentlyLearning.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2 bg-muted p-2 rounded-md transition-all hover:bg-accent hover:shadow-lg"
                  title={skill.name}
                >
                  <div className="text-2xl text-muted-foreground group-hover:text-primary transition-colors">
                    {skill.icon}
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground transition-colors">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
