# **App Name**: TanushreeSarkar Portfolio

## Core Features:

- Hero Section: Hero section with 'Tanushree Sarkar' title, 'Building [your tagline]' subtitle, and an animated gradient background.
- About Section: About section with a brief (3 lines max) fresher-focused bio and a casual avatar.
- Skills Showcase: Skills section showcasing icons-only grid of technical skills, with hover scaling effect.
- Projects Display: Projects section with 5 project cards, replicating harshbanka.tech design exactly, including hover effects, project name, description, and tech stack icons.  The layout will adapt for different screen sizes.
- Achievements List: Achievements section presenting certifications/hackathons in expandable cards.
- AI Resume Chatbot: AI Chatbot (named Kitty) trained on Tanushree's resume.  The tool can respond to questions about Tanushree's qualifications. UI will use a floating button, chat bubbles, and typing indicators. LLM reasoning used to incorporate information in chat output.
- Learning Journey Timeline: Replace 'Experience' section with an animated timeline of courses/certifications: Learning Journey.

## Style Guidelines:

- Background color: Dark mode with #0a0a0a background and #ffffff text.
- Accent color: #00f0a0 (bright green) for highlights, CTAs, and the chatbot button.
- Vibrant Gradients: Use vibrant, contrasting gradients in the hero section and as accents throughout the site (e.g., #FF416C to #FF4B2B, #00c6fb to #5b86e5) to create visual interest and a modern feel.
- Primary font: 'Inter' (sans-serif) for all text (weight 400 regular, 600 bold). Note: currently only Google Fonts are supported.
- Code font: 'JetBrains Mono' (monospace) for any displayed code snippets.  Note: currently only Google Fonts are supported.
- Use react-icons SVG icons for skills, projects tech stacks, and potentially within the timeline; strive for crisp visuals.
- Single-page layout with scrollable sections, sticky header, left-aligned section titles, and subtle horizontal line dividers. Grid layouts used for projects (2-column desktop, 1-column mobile) and skills (icon grid). Glassmorphism design implemented where relevant.
- Scroll animations (fade-in with translateY reduction). Project card hover effects (scale up to 102%, smooth shadow box-shadow: 0 10px 20px rgba(0, 240, 160, 0.1)). Hamburger menu morphing animation.  Animated gradient in Hero section. Learning journey timeline with animated appearance of entries.