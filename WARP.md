# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website showcasing professional and personal projects. The site is built as a static Next.js application and deployed to GitHub Pages, featuring a timeline-based layout with dark/light mode support.

## Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS 3 with dark mode support
- **Animations**: Framer Motion for page transitions and animations
- **Icons**: Heroicons and FontAwesome icons
- **Deployment**: GitHub Pages with GitHub Actions
- **Package Manager**: npm

## Development Commands

```bash
# Development server
npm run dev

# Build for production (static export)
npm run build

# Start production server locally
npm start

# Lint code
npm run lint
```

## Architecture Overview

### Project Structure
- `pages/` - Next.js pages (Pages Router architecture)
  - `index.tsx` - Main landing page with hero section
  - `_app.tsx` - App wrapper with global styles
- `components/` - React components for UI sections
- `data/` - Static data files for projects and timeline content
- `types/` - TypeScript type definitions
- `utils/` - Utility functions (date formatting)
- `styles/` - Global CSS with Tailwind customizations
- `public/` - Static assets and images

### Core Components Architecture

The site uses a timeline-based architecture where content is organized as timeline items:

- **Timeline Items**: Union type supporting three item types:
  - `Project` - Professional projects with company info, dates, technologies
  - `TimelineEvent` - Career milestones (promotions, job starts)  
  - `Spacer` - Visual spacing elements for timeline layout

- **Experience Sections**: 
  - `ProfessionalExperience` - Timeline view of career progression
  - `PersonalExperience` - Grid layout of personal projects

- **Data-Driven Content**: All project and timeline data is centralized in `/data` files, making content updates straightforward without component changes

### Styling System

- **Theme**: Custom Tailwind configuration with primary blue color palette
- **Dark Mode**: Class-based dark mode with localStorage persistence
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Animations**: Framer Motion for page load animations and hover effects

### Static Export Configuration

The site uses Next.js static export (`output: 'export'`) with:
- Image optimization disabled for static hosting
- Automatic GitHub Pages deployment via Actions
- Build output in `/out` directory

### Content Management

- Professional projects in `data/professionalProjects.ts` with company icons, blog post links, and detailed descriptions
- Personal projects in `data/personalProjects.ts` with GitHub links and technology tags
- Type-safe content structure ensures consistency across timeline items

### Key Features

- **Responsive Timeline**: Professional experience displayed as an interactive timeline
- **Project Cards**: Personal projects shown in responsive grid layout
- **Theme Toggle**: Persistent dark/light mode with smooth transitions
- **SEO Optimized**: Comprehensive meta tags and structured content
- **Performance**: Static generation for fast loading and CDN caching

## Development Notes

- All dates use ISO format (YYYY-MM) in data files and are formatted using `utils/date.ts`
- Components use consistent naming: kebab-case files with PascalCase exports
- Timeline items are processed sequentially with automatic indexing for animations
- Icon integration uses both Heroicons (outline style) and FontAwesome (brand icons)
- Static assets in `public/` directory are referenced with absolute paths from root