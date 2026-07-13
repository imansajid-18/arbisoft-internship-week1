import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 px-6 text-slate-100">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
          Modern React Setup
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Vite + React + TypeScript
        </h1>
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
          Tailwind CSS, ESLint flat config, path aliases, and Cursor rules are
          ready. Use the prompts in <code className="text-sky-300">prompts.md</code>{' '}
          to build features step by step.
        </p>
      </div>

      <button
        type="button"
        className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
        onClick={() => setCount((value) => value + 1)}
      >
        Count is {count}
      </button>
    </main>
  )
}
