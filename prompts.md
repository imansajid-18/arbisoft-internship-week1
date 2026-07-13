# Cursor Prompts — Modern React App

Use these prompts in order inside Cursor Agent mode. Each step builds on the previous one. The project is preconfigured with **Vite 7**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **ESLint**, and **Cursor rules** in `.cursor/rules/react-patterns.mdc`.

---

## Prerequisites

Before running the prompts, install dependencies and start the dev server:

```bash
npm install
npm run dev
```

---

## Prompt 1 — Verify the setup

```
Review this project's React setup. Confirm Vite, TypeScript strict mode, Tailwind CSS v4,
the @ path alias, and ESLint flat config are configured correctly. Fix anything missing
and explain what each config file does.
```

**Expected outcome:** Working dev server, no TypeScript or ESLint errors, `@/` imports resolve.

---

## Prompt 2 — Project structure

```
Create a scalable folder structure under src/ with components/, hooks/, lib/, and types/.
Move App.tsx logic into a HomePage component and keep App.tsx as a thin shell.
Follow the conventions in .cursor/rules/react-patterns.mdc.
```

**Expected outcome:** Clean separation of concerns and named exports throughout.

---

## Prompt 3 — Reusable UI components

```
Build a small design system with Button, Card, and Input components in src/components/ui/.
Use Tailwind CSS, TypeScript props interfaces, and forward refs where appropriate.
Include variants (primary/secondary/ghost for Button) and export everything from
src/components/ui/index.ts.
```

**Expected outcome:** Composable, accessible UI primitives used by feature components.

---

## Prompt 4 — Feature: task list

```
Implement a task list feature:
- Add TaskList, TaskItem, and AddTaskForm components
- Support add, toggle complete, and delete
- Persist tasks to localStorage via a custom useLocalStorage hook in src/hooks/
- Show empty state and task count
- Style with Tailwind; match the existing dark theme in App.tsx
```

**Expected outcome:** Fully functional CRUD-style task list with persistence.

---

## Prompt 5 — Routing

```
Add React Router v7 with routes for Home (/) and About (/about).
Use createBrowserRouter and lazy-loaded route components.
Add a responsive nav bar with active link styling.
```

**Expected outcome:** Client-side routing with code-split pages.

---

## Prompt 6 — Data fetching

```
Create a Users page that fetches from https://jsonplaceholder.typicode.com/users.
Use a custom useFetch hook with loading, error, and data states.
Display users in a responsive Card grid. Add retry on error.
```

**Expected outcome:** Robust async UI with loading and error handling.

---

## Prompt 7 — Forms and validation

```
Add a Contact form on /contact using controlled inputs and Zod validation.
Show inline field errors, disable submit while invalid, and display a success toast
after submit (no real API — simulate with setTimeout).
```

**Expected outcome:** Validated form with clear user feedback.

---

## Prompt 8 — Testing

```
Add Vitest and React Testing Library. Write tests for:
- useLocalStorage hook
- Button component variants
- AddTaskForm validation behavior
Configure npm run test and ensure all tests pass.
```

**Expected outcome:** Test script in package.json and passing unit/component tests.

---

## Prompt 9 — Production polish

```
Run npm run build and fix any type or lint issues. Add a README section with setup
instructions, available scripts, and project structure. Optimize the Home page for
mobile and add meta tags in index.html for SEO.
```

**Expected outcome:** Clean production build and documented project.

---

## Prompt 10 — Cursor rules refinement

```
Review .cursor/rules/react-patterns.mdc against the current codebase. Update the rules
to reflect patterns we actually use (hooks, folder layout, naming). Add a rule file
for testing conventions if Vitest was added.
```

**Expected outcome:** AI rules aligned with the evolved codebase.

---

## Tips for best results

1. **Use Agent mode** for multi-file changes; use Ask mode to explore code without edits.
2. **Reference files** with `@src/App.tsx` or `@.cursor/rules/react-patterns.mdc` for context.
3. **One feature per prompt** — smaller prompts produce cleaner diffs.
4. **Run `npm run lint` and `npm run build`** after each major step.
5. **Commit incrementally** so you can revert a single step if needed.

---

## Quick reference — stack

| Tool | Purpose |
|------|---------|
| Vite | Dev server and production bundler |
| React 19 | UI library |
| TypeScript | Static typing (strict) |
| Tailwind CSS v4 | Utility-first styling |
| ESLint 9 | Linting (flat config) |
| Cursor Rules | Persistent AI coding conventions |
