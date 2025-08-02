import SectionWrapper from '@/components/section-wrapper';
import { GraduationCap, School } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering AIML',
    institution: 'Pranveer Singh Institute of Technology, Kanpur',
    period: '2022 – 2026',
    score: 'CGPA: 7.5',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate (ISC Board)',
    institution: 'Bishop Westcott School',
    period: '2020 – 2021',
    score: '87.3%',
    icon: School,
  },
  {
    degree: 'High School (ICSE Board)',
    institution: 'Bishop Westcott School',
    period: '2018 – 2019',
    score: '78.6%',
    icon: School,
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl font-bold font-headline text-center mb-12">
        My Education
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
        <ul className="space-y-12">
          {education.map((item, index) => (
            <li
              key={index}
              className="relative flex items-center"
              style={{
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              }}
            >
              <div className="w-1/2 px-4">
                <div
                  className={`p-6 bg-card rounded-lg border border-border/60 shadow-lg hover:shadow-primary/10 transition-shadow ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                >
                  <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    {index % 2 !== 0 && <item.icon className="h-6 w-6 text-primary" />}
                    <h3 className="text-lg font-semibold font-headline">{item.degree}</h3>
                     {index % 2 === 0 && <item.icon className="h-6 w-6 text-primary" />}
                  </div>
                  <p className="text-muted-foreground">{item.institution}</p>
                  <p className="text-sm text-muted-foreground/80">{item.period}</p>
                  <p className="font-semibold text-primary mt-1">{item.score}</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
