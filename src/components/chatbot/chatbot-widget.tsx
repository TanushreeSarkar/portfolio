'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, CornerDownLeft, Loader, MessageSquare, Send, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { resumeChatbot } from '@/ai/flows/resume-chatbot';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'bot';
  text: string;
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          role: 'bot',
          text: "Hello! I'm Kitty, an AI assistant creadetd by Tanushree. Ask me anything about her.",
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    setTimeout(() => {
        if(scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, 100)
  }, [messages]);
  

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await resumeChatbot({ query: input });
      const botMessage: Message = { role: 'bot', text: result.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'bot',
        text: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <Button
            size="icon"
            className="rounded-full h-16 w-16 bg-primary hover:bg-primary/90 shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Chatbot"
          >
            {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[60vh] bg-card rounded-xl border shadow-xl flex flex-col glassmorphism"
          >
            <header className="p-4 border-b flex items-center gap-3">
              <Bot className="h-6 w-6 text-primary" />
              <h3 className="font-semibold font-headline">AI Assistant "Kitty"</h3>
            </header>

            <ScrollArea className="flex-1 p-4">
              <div ref={scrollAreaRef} className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={cn('flex items-start gap-3', message.role === 'user' ? 'justify-end' : 'justify-start')}>
                    {message.role === 'bot' && (
                      <Avatar className="w-8 h-8">
                         <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="w-5 h-5"/></AvatarFallback>
                      </Avatar>
                    )}
                    <div className={cn(
                        'max-w-[80%] rounded-xl px-4 py-2 text-sm',
                        message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    )}>
                        {message.text}
                    </div>
                     {message.role === 'user' && (
                      <Avatar className="w-8 h-8">
                         <AvatarFallback><User className="w-5 h-5"/></AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-start gap-3 justify-start">
                     <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="w-5 h-5"/></AvatarFallback>
                     </Avatar>
                      <div className="bg-muted rounded-xl px-4 py-2 flex items-center gap-2">
                        <Loader className="w-4 h-4 animate-spin"/>
                        <span>Kitty is typing...</span>
                      </div>
                   </div>
                )}
              </div>
            </ScrollArea>

            <footer className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading || !input}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
