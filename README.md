# React + TypeScript + Vite Application

A modern React application configured with TypeScript, Vite, ESLint, and Prettier.

## Features

- ⚡ Vite for fast development and optimized builds
- 📘 TypeScript for type safety
- ⚛️ React 18 with React DOM
- 🔍 ESLint for code quality
- 🎨 Prettier for code formatting
- 🔥 Hot Module Replacement (HMR)

## Project Structure

```
.
├── src/                 # Source files
│   ├── App.tsx         # Main App component
│   ├── App.css         # App styles
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── .eslintrc.json      # ESLint configuration
└── .prettierrc.json    # Prettier configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build

## Configuration Details

### TypeScript
- Target: ES2020
- Strict mode enabled
- JSX support for React

### ESLint
- Parser: @typescript-eslint/parser
- Rules: React hooks, TypeScript recommended
- Auto-fixing: `npm run lint`

### Prettier
- Print Width: 80 characters
- Tab Width: 2 spaces
- Semi-colons: enabled
- Quotes: single
- Trailing Commas: ES5 compatible

## Troubleshooting

If you encounter PowerShell execution policy issues:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run `npm install` again.

## License

MIT
