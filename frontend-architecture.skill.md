# Frontend Architecture & Best Practices

## Purpose
This document outlines the standard frontend architecture, project structure, component organization, and naming conventions for our React projects. Adhering to these guidelines ensures a clean, maintainable, scalable, and visually excellent codebase.

## 1. Project Structure & Folder Setup

A clean, predictable file structure is crucial for scalability. We follow a feature-based or modular architecture within the `src` directory.

```text
src/
├── assets/         # Static assets (images, fonts, global CSS/SCSS)
├── components/     # Global, reusable UI components (buttons, inputs, modals)
├── config/         # Global configurations (environment variables, constants)
├── context/        # React Context providers for global state
├── hooks/          # Custom reusable React hooks
├── layouts/        # Layout components (wrappers, navigation, footer)
├── pages/          # Page components (routed views)
├── services/       # API calls and external integrations
├── store/          # Global state management (Redux, Zustand, etc.)
├── types/          # TypeScript interfaces and type definitions (if applicable)
├── utils/          # Helper functions and utility scripts
├── App.jsx         # Root application component
└── main.jsx        # Entry point
```

## 2. React Architecture & Component Organization

### Component Hierarchy
- **Pages:** Act as container components. They fetch data, manage page-level state, and pass props down to smaller components.
- **Layouts:** Define the structural framework of the app (e.g., MainLayout containing a Navbar, Sidebar, and the main Content area).
- **Reusable Components:** Small, stateless (or localized state) UI pieces. They should be "dumb" components, meaning they receive data via props and emit events via callbacks.

### Reusable Components
- Components in `src/components` should be highly generic and reusable across different pages.
- Group related components into subfolders if necessary (e.g., `src/components/Forms/`, `src/components/UI/`).
- Each component folder should typically contain the component file, its styles, and a test file:
  ```text
  Button/
  ├── Button.jsx
  ├── Button.module.css (or styled-components, Tailwind, etc.)
  └── Button.test.jsx
  ```

## 3. Naming Conventions

Consistency in naming makes the codebase navigable.

- **Folders:** Use `PascalCase` for component folders (e.g., `UserProfile/`), and `camelCase` or `kebab-case` for standard directories (e.g., `utils`, `services`).
- **Files:**
  - React Components: `PascalCase.jsx` or `PascalCase.tsx` (e.g., `UserProfile.jsx`, `Button.jsx`).
  - Helper functions/Utils: `camelCase.js` (e.g., `formatDate.js`, `apiHelper.js`).
  - Hooks: Prefix with `use` and use `camelCase.js` (e.g., `useFetch.js`, `useAuth.js`).
- **Variables & Functions:** Use `camelCase` (e.g., `handleClick`, `userData`).
- **Constants:** Use `UPPER_SNAKE_CASE` (e.g., `API_BASE_URL`, `MAX_RETRIES`).
- **Classes/Interfaces:** Use `PascalCase` (e.g., `UserModel`).

## 4. Responsive-First Workflow

We prioritize a responsive-first workflow to ensure our applications look great on all devices and load efficiently.

- **Mobile-First Approach:** Start styling for the smallest screens first, then progressively enhance the layout for larger screens using `min-width` media queries. This reduces the CSS payload on mobile devices.
- **Fluid Layouts:** Use relative units (%, vh, vw, rem, em) over absolute units (px) for layouts and typography to allow elements to scale naturally.
- **Modern CSS Layouts:** Utilize modern CSS layout modules (Grid & Flexbox) for complex alignments and responsive structures.
- **Breakpoints:** Define standard breakpoints in your CSS/theme configuration and use them consistently.
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px

## Summary Checklist
- [ ] Components are small, focused, and reusable.
- [ ] File and folder naming conventions are strictly followed.
- [ ] Business logic is separated from UI components (using hooks or utility functions).
- [ ] The app is designed mobile-first and tested across different screen sizes.
- [ ] The design feels premium, using modern web aesthetics (subtle animations, high-quality typography).
