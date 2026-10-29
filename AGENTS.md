## Development Guidelines & Project Conventions

### 1. Gradual Migration to TypeScript and shadcn/ui

- This is an existing portfolio built with React and JavaScript. We will gradually migrate it to TypeScript and replace plain UI implementations with **shadcn/ui components** where suitable components already exist.
- For all new scripts and components, use TypeScript (`.ts` / `.tsx`) instead of JavaScript.
- Prefer existing shadcn/ui components over custom implementations whenever they meet the requirements.
- Follow the existing project structure and coding patterns. Avoid unnecessary refactoring or migrating legacy code unless required by the task.

### 2. Color System & Theme Support

- Support both **light and dark modes** consistently across the entire website.
- Define the color palette and design tokens in a centralized location so colors can be adjusted easily in the future.
- Avoid hardcoding color values directly into individual components. Use shared CSS variables, theme tokens, or the project's existing design system.
- Ensure all new components respect the active theme and maintain consistent contrast, accessibility, and visual hierarchy.

### 3. Single-Page Landing Architecture

- The new website should be a **single landing page**, rather than a collection of separate pages.
- Ignore the existing About, Work, and Contact pages as standalone routes. Their relevant content and functionality should be integrated into the home page where appropriate.
- Build each major landing-page section as a separate, reusable component and import it into the home page.
- Keep components organized according to the existing project structure and avoid creating unnecessary abstractions or files.
- Preserve relevant existing content and functionality while adapting them to the new single-page structure.

### 4. Server-Side Rendering & Component Design

- Prefer server-rendered components wherever possible to reduce unnecessary client-side JavaScript and support SEO and performance.
- Keep components as Server Components by default if the project uses Next.js App Router. Add `"use client"` only when browser APIs, React state, effects, event handlers, or other client-side functionality are genuinely required.
- Do not make an entire page or section a Client Component just because one small part requires interactivity. Isolate interactive behavior into smaller Client Components.
- Use **function declarations** for React components instead of function expressions or arrow functions.

## General rules:
- Don't run the application locally.
