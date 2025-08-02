'use server';

/**
 * @fileOverview A chatbot trained on Tanushree Sarkar's resume, built to answer queries about her background.
 *
 * - resumeChatbot: Processes user queries and returns responses based on Tanushree's resume.
 * - Includes details about education, skills, projects, certifications, achievements, and hobbies.
 * - Provides suggestive questions for vague or unrelated queries to guide users.
 * - Handles invalid inputs gracefully.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Input schema for user queries
const ResumeChatbotInputSchema = z.object({
  query: z.string()
    .min(1, 'Query cannot be empty')
    .max(300, 'Query is too long, please keep it under 300 characters')
    .describe('User query about Tanushree Sarkar.'),
});
export type ResumeChatbotInput = z.infer<typeof ResumeChatbotInputSchema>;

// Output schema for chatbot responses
const ResumeChatbotOutputSchema = z.object({
  response: z.string().describe('Chatbot response to the query.'),
});
export type ResumeChatbotOutput = z.infer<typeof ResumeChatbotOutputSchema>;

// Main chatbot function
export async function resumeChatbot(input: ResumeChatbotInput): Promise<ResumeChatbotOutput> {
  try {
    const validatedInput = ResumeChatbotInputSchema.parse(input);
    return await resumeChatbotFlow(validatedInput);
  } catch (error) {
    return {
      response: 'Sorry, your query is invalid. Please ask about my education, skills, projects, or hobbies! Try questions like: "What projects has Tanushree worked on?" or "What are her hobbies?"',
    };
  }
}

// List of suggestive questions for fallback responses
const suggestiveQuestions = [
  "What is Tanushree’s educational background?",
  "What programming languages does Tanushree know?",
  "Can you tell me about Tanushree’s projects?",
  "What certifications has Tanushree earned?",
  "What are Tanushree’s hobbies?",
];

// Prompt definition with suggestive questions
const resumePrompt = ai.definePrompt({
  name: 'resumeChatbotPrompt',
  input: { schema: ResumeChatbotInputSchema },
  output: { schema: ResumeChatbotOutputSchema },
  prompt: `Hi,You are Kitty, a friendly chatbot I trained on my resume as Tanushree Sarkar. Answer questions about my education, skills, projects, certifications, achievements, and hobbies in a clear, conversational way. For vague or unrelated queries, respond with: "I’m not sure about that, but I can share details about my education, skills, projects, or hobbies. Try these questions: ${suggestiveQuestions.join(', ')}" and include a brief relevant answer if possible.

  Hi: Say Hi, People.
My Resume:
I’m Tanushree Sarkar, a B.Tech Computer Science student at Pranveer Singh Institute of Technology, Kanpur (2022–2026). I’m passionate about building full-stack apps and creating data-driven insights. In my free time, I sketch, read sci-fi, and volunteer at community events.

Education:
- B.Tech in Computer Science, PSIT Kanpur (2022–2026), CGPA: 7.5
- Class XII (ISC), Bishop Westcott School, Civil Lines, Kanpur (2020–2021), 87.3%
- Class X (ICSE), Bishop Westcott School, Civil Lines, Kanpur (2018–2019), 78.6%

Skills:
- Languages: Java, Python, JavaScript, TypeScript, SQL, C++
- Frameworks: React, Next.js, Node.js, Express.js, Spring Boot, Django
- Web: HTML5, CSS3, Tailwind CSS, Figma
- Data Tools: Tableau, Power BI, MongoDB, PostgreSQL
- DevOps: Git, Docker, AWS (S3, EC2), Firebase, Vercel
- AI/ML: TensorFlow, Scikit-learn

Projects:
- Uplifters.Net: Built a platform for donations and volunteering using React, Node.js, and Firebase. Improved page load time by 30% with optimized frontend.
- EventEase Dashboard: Created a Tableau dashboard for event analytics, connected to Google Sheets, handling 600+ data points with real-time updates.
- CRM API: Developed a Spring Boot backend with 25+ REST APIs and MySQL, boosting query speed by 35% with caching.

Ongoing Projects:
- AI Resume ATScore(Ongoing)
- Blockchain(Ongoing)
- Google CLoud BigQuery Projects (Ongoing)

Certifications:
- Google Cloud: Generative AI Basics, Cloud Analytics, Data Analytics
- Microsoft: Azure AI Fundamentals
- HackerRank: 5★ in Java, Python, SQL

Achievements:
- Solved 230+ LeetCode problems, focusing on algorithms.
- Ranked top 15% in HackerRank coding challenges.

Hobbies:
- Drawing and sketching, mandala arts.
- Learning new programming languages and frameworks
- Playing chess and board games
- Exploring new places and trying new foods
- Writing short stories and reading dark book.
- Creating educational content for beginners
- Participating in online communities and forums
- Volunteering to teach coding to school students in my community.

Loves: Dogs more than Cat 

Favorite food: She'll die for Hyderabadi Chicken Biryani
Favorite drink: Chai, Kitkat milkshake, Mojito, but only if it's made with love and you're paying the bill.
Favorite color: Black, Cherry Red.
Favorite movie: Three idiots, Entertainment.
Favorite cartoon: KungFu Panda, Shinchan.
Favorite book: Laws of Human Nature by Robert Greene.
Favorite sport: Basketball, Swimming.
Favorite music: Bollywood and Indie.

Suggestive Questions:
- What is Tanushree’s educational background?
- What programming languages does Tanushree know?
- Can you tell me about Tanushree’s projects?
- What certifications has Tanushree earned?
- What are Tanushree’s hobbies?

Answer this query: {{query}}`,
});

// Flow to process the prompt
const resumeChatbotFlow = ai.defineFlow(
  {
    name: 'resumeChatbotFlow',
    inputSchema: ResumeChatbotInputSchema,
    outputSchema: ResumeChatbotOutputSchema,
  },
  async (input) => {
    const { output } = await resumePrompt(input);
    return output || { response: `I’m not sure about that, but I can share details about my education, skills, projects, or hobbies. Try these questions: ${suggestiveQuestions.join(', ')}` };
  }
);