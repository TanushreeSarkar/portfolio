'use server';

/**
 * @fileOverview An AI chatbot trained on Tanushree's resume.
 *
 * - resumeChatbot - A function that handles the chatbot interactions.
 * - ResumeChatbotInput - The input type for the resumeChatbot function.
 * - ResumeChatbotOutput - The return type for the resumeChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeChatbotInputSchema = z.object({
  query: z.string().describe('The user query about Tanushree Sarkar.'),
});
export type ResumeChatbotInput = z.infer<typeof ResumeChatbotInputSchema>;

const ResumeChatbotOutputSchema = z.object({
  response: z.string().describe('The response from the chatbot.'),
});
export type ResumeChatbotOutput = z.infer<typeof ResumeChatbotOutputSchema>;

export async function resumeChatbot(input: ResumeChatbotInput): Promise<ResumeChatbotOutput> {
  return resumeChatbotFlow(input);
}

const resumePrompt = ai.definePrompt({
  name: 'resumeChatbotPrompt',
  input: {schema: ResumeChatbotInputSchema},
  output: {schema: ResumeChatbotOutputSchema},
  prompt: `You are a chatbot named Kitty trained on Tanushree Sarkar's resume. Use the following resume to answer questions about Tanushree's Education, skills, tools project, certifications,projects.

Resume: Tanushree Sarkar is a B.Tech Computer Science student at PSIT Kanpur (2022–2026) with a passion for full-stack development and data visualization.

Education:
- B.Tech CSE, Pranveer Singh Institute of Technology, Kanpur (2022–2026), CGPA: 7.5
- Intermediate, Bishop Westcott School (2020–21), 87.3%
- High School, Bishop Westcott School (2018–19), 78.6%

Skills:
- Languages: Java, Python, C, JavaScript, SQL
- Frameworks & Libraries: Spring Boot, React, Node.js, Next.js, Django, Express.js
- Web & Design: HTML5, CSS3, Figma, Wix
- Data & Analytics: Tableau, Power BI, Looker, BigQuery, MongoDB
- Cloud & DevOps: AWS, GCP, Firebase, Docker, Git, Postman, Vercel
- AI/ML: TensorFlow

Projects:
- Uplifters.Net: A donation and volunteer platform (HTML, CSS, JS) that achieved 35% faster UX and 40% code optimization.
- EventEase Dashboard: A Tableau dashboard for real-time event analytics with Google Sheets integration, supporting 500+ data points with <2s refresh latency.
- CRM Sales Pipeline API: A Spring Boot backend with 30+ REST APIs, Firebase authentication, and optimized query speed by 40%.

Certifications:
- Google Cloud: Intro to Generative AI, Gemini for Data Scientists, Analytics
- Microsoft: Azure AI Fundamentals
- HackerRank: JavaScript Specialist, 5★ in Java, Python, SQL, Algorithms

Achievements:
- Solved 220+ problems on LeetCode.
- Solved 250+ challenges on HackerRank.

Respond to the following query:

{{query}}`,
});

const resumeChatbotFlow = ai.defineFlow(
  {
    name: 'resumeChatbotFlow',
    inputSchema: ResumeChatbotInputSchema,
    outputSchema: ResumeChatbotOutputSchema,
  },
  async input => {
    const {output} = await resumePrompt(input);
    return output!;
  }
);
