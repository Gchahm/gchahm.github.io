# AI-Powered Interactive CV

A modern, interactive portfolio website featuring an AI assistant trained on my professional experience. Built with Next.js, React, and integrated with a Hugging Face-hosted chatbot for dynamic Q&A about my career, projects, and technical expertise.

**Live Demo:** [gchahm.github.io](https://gchahm.github.io)

## Features

### AI Chat Interface
- **Interactive AI Assistant**: Chat with an AI trained on my professional background, projects, and technical skills
- **Real-time Responses**: Powered by Hugging Face Spaces with Gradio integration
- **Natural Conversations**: Ask questions about my experience, project details, or technical capabilities
- **24/7 Availability**: Get insights about my work anytime

### Modern UI/UX
- **Dark/Light Mode**: Persistent theme toggle with system preference detection
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Glassmorphism Effects**: Modern backdrop blur and translucent components

## Tech Stack

### Frontend
- **Framework**: Next.js 14 with React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom dark mode
- **Animations**: Framer Motion
- **Icons**: Heroicons & Font Awesome

### AI Integration
- **Platform**: Hugging Face Spaces
- **Interface**: Gradio web components
- **Deployment**: Embedded iframe with custom styling

### Deployment
- **Hosting**: GitHub Pages
- **Build**: Static site generation with Next.js
- **CI/CD**: Automated deployment on push to master

## Key Technical Highlights

### AI Assistant Implementation
The ChatInterface component dynamically loads Gradio's web component and embeds a Hugging Face Space, creating a seamless chat experience:
- Custom TypeScript declarations for Gradio web components
- Lazy loading of external scripts for optimal performance
- Responsive container with dark mode support

### Timeline Architecture
A flexible timeline system supporting multiple item types:
- **Project Items**: Detailed professional work with tags and links
- **Event Items**: Career milestones and achievements
- **Spacer Items**: Dynamic spacing for visual hierarchy

### Theme System
Persistent dark/light mode with:
- LocalStorage persistence
- System preference detection
- Smooth transitions across all components
- Default dark mode for modern aesthetic

## Project Structure

```
├── components/           # React components
│   ├── ChatInterface.tsx      # AI chat integration
│   ├── ProfessionalExperience.tsx
│   ├── PersonalExperience.tsx
│   └── TimelineItem.tsx
├── data/                # Data files
│   ├── professionalProjects.ts
│   └── personalProjects.ts
├── pages/               # Next.js pages
│   ├── index.tsx             # Main portfolio page
│   └── _app.tsx
├── types/               # TypeScript definitions
└── utils/               # Utility functions
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/gchahm/gchahm.github.io.git

# Navigate to directory
cd gchahm.github.io

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Development Highlights

### Responsive Design
Mobile-first approach with Tailwind breakpoints:
- Adaptive layouts for all screen sizes
- Touch-optimized chat interface
- Collapsible timeline items on mobile

### Performance Optimization
- Static site generation for fast load times
- Lazy loading of chat interface components
- Optimized images and assets
- Minimal JavaScript bundle size

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance

## Future Enhancements

- [ ] Add multi-language support for AI assistant
- [ ] Implement RAG (Retrieval-Augmented Generation) for more accurate responses
- [ ] Add blog section with technical articles
- [ ] Integrate analytics to track chat interactions
- [ ] Add downloadable PDF version of CV

## License

This project is open source and available under the MIT License.

## Contact

For questions or collaboration opportunities, feel free to chat with my AI assistant or reach out through:
- **GitHub**: [@gchahm](https://github.com/gchahm)
- **LinkedIn**: [Gustavo Francelino](https://www.linkedin.com/in/gustavo-francelino/)

---

Built with passion for modern web technologies and AI integration.
