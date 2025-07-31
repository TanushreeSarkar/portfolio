import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Achievements from '@/components/sections/achievements';
import Footer from '@/components/layout/footer';
import ChatbotWidget from '@/components/chatbot/chatbot-widget';
import { Separator } from '@/components/ui/separator';
import Contact from '@/components/sections/contact';
import Education from '@/components/sections/education';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Separator className="my-16 bg-border/20" />
        <Skills />
        <Separator className="my-16 bg-border/20" />
        <Projects />
        <Separator className="my-16 bg-border/20" />
        <Education />
        <Separator className="my-16 bg-border/20" />
        <Achievements />
        <Separator className="my-16 bg-border/20" />
        <Contact />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
