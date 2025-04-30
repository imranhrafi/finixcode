# Finixcode Assignment – Football Event Platform

## Overview

This project is a modern, mobile-first football event platform built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. The goal is to provide a clean, scalable, and accessible codebase that demonstrates best practices in React development, UI consistency, and developer experience. The codebase is designed for maintainability, extensibility, and real-world production readiness.

## Tech Stack

- **Next.js** (App Router, SSR, file-based routing)
- **TypeScript** (strict mode)
- **Tailwind CSS** (utility-first, custom theming)
- **shadcn/ui** (accessible, customizable UI components)
- **Bun** (fast JS runtime & package manager)
- **ESLint** (strict linting)

## Folder Structure

```
src/
  components/
    homepage/         # All homepage-related React components (Hero, InfoSection, etc.)
    ui/               # Reusable UI components (Button, Card, Dialog, etc. from shadcn/ui)
  app/
    navbar/           # Responsive navigation components (mobile & desktop)
    layout.tsx        # Root layout (global styles, fonts, nav)
    page.tsx          # Main page entry
  lib/
    utils.ts          # Utility functions (e.g., className merging)
public/               # Static assets (logo, icons, images)
```

**Why this structure?**

- **Separation of concerns:** UI atoms/molecules in `ui/`, page-specific logic in `homepage/`, navigation in `app/navbar/`.
- **Scalability:** Easy to add new features/pages without clutter.
- **Readability:** Clear, predictable imports and file locations.

## Coding Conventions & Best Practices

- **Naming:**
  - All files and components use `PascalCase` (e.g., `HeroGallery.tsx`, `InfoSection.tsx`).
  - Folder names are descriptive and consistent.
- **Mobile-first design:**
  - All layouts and components are designed for mobile by default, then enhanced for desktop with Tailwind breakpoints.
- **Accessibility:**
  - All interactive elements use semantic HTML and ARIA attributes where needed.
  - shadcn/ui components are accessible out-of-the-box.
- **Styling:**
  - Tailwind CSS for rapid, consistent, and themeable styling.
  - Custom colors are defined in Tailwind config for maintainability.
- **Linting & Formatting:**
  - ESLint with strict rules, enforced via `bun run lint` and pre-commit hooks (husky, lint-staged).
  - TypeScript strict mode for type safety.

## Why These Choices?

- **shadcn/ui:**
  - Provides accessible, production-ready UI primitives that are easy to customize and extend.
- **Tailwind CSS:**
  - Enables rapid prototyping and enforces design consistency across the app.
- **Bun:**
  - Super-fast install, build, and dev experience. Modern alternative to npm/yarn.
- **Folder structure:**
  - Mirrors real-world, scalable React projects. Easy for teams to onboard and contribute.

## How to Run & Develop

1. **Install dependencies:**
   ```bash
   bun install
   ```
2. **Start the development server:**
   ```bash
   bun run dev
   ```
3. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Contribution & Linting

- **Lint before commit:**
  - Pre-commit hooks ensure all code passes linting (`bun run lint`).
- **Type safety:**
  - All code is written in TypeScript with strict mode enabled.
- **Component-driven:**
  - All UI is built from reusable, composable components.

## Future Improvements

- Integrate real API/data fetching (currently uses mock data)
- Add unit and integration tests (Jest, React Testing Library)
- Expand accessibility testing (axe, Lighthouse)
- Add dark mode and theme switching
- Further modularize and document components

_Built with ❤️ for the Finixcode assignment._
