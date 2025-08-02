import Image from 'next/image';
import SectionWrapper from '@/components/section-wrapper';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1">
          <Image
            src="/portfoliopic.jpg"
            alt="Tanushree Sarkar"
            width={400}
            height={400}
            className="rounded-full mx-auto shadow-lg border-4 border-primary/20"
            data-ai-hint="professional woman portrait"
          />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-3xl font-bold font-headline mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:mx-0">
            I am a passionate and results-oriented B.Tech Computer Science student at PSIT Kanpur, graduating in 2026. My journey in tech is driven by a fascination for building efficient, scalable full-stack applications and uncovering insights from data. With a strong foundation in Java, Python, and modern web technologies like React and Spring Boot, I enjoy tackling complex problems and turning ideas into tangible solutions. I'm actively seeking opportunities to contribute to innovative projects and grow as a developer and problem-solver.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
