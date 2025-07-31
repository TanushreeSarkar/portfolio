'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { HTMLMotionProps } from 'framer-motion';

interface SectionWrapperProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export default function SectionWrapper({
  children,
  className,
  id,
  ...props
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn('container mx-auto max-w-5xl py-16 px-4 md:px-6', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
