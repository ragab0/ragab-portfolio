## Development Guidelines & Project Conventions

### 1. General Migratation to TypeScript and shadcn/ui

- Prefer existing shadcn/ui components over custom implementations whenever they meet the requirements.
- Follow the existing project structure and coding patterns. Avoid unnecessary refactoring or migrating legacy code unless required by the task.

### 2. Color System & Theme Support

- Define the color palette and design tokens in a centralized location so colors can be adjusted easily in the future.
- Avoid hardcoding color values directly into individual components. Use shared CSS variables, theme tokens, or the project's existing design system.
- Ensure all new components respect the active theme and maintain consistent contrast, accessibility, and visual hierarchy.

### 3. Single-Page Landing Architecture

- The website should be a **single landing page**, rather than a collection of separate pages.
- Build each major landing-page section as a separate, reusable component and import it into the home page in its suitable section.

### 4. Server-Side Rendering & Component Design

- Prefer server-rendered components wherever possible to reduce unnecessary client-side JavaScript and support SEO and performance.
- Do not make an entire page or section a Client Component just because one small part requires interactivity. Isolate interactive behavior into smaller Client Components.

## General rules:

- Don't run or build the application locally.
- Use **function declarations** for React components instead of function expressions or arrow functions.
