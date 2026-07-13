export function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 px-6 text-slate-100">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
          ESLint + Prettier
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Clean code, consistent formatting, and fewer errors.
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
          This project is ready for linting and formatting with ESLint and
          Prettier so your code stays neat and reliable.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm text-sky-300">
          ESLint
        </span>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
          Prettier
        </span>
        <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-sm text-fuchsia-300">
          Vite
        </span>
      </div>
    </main>
  )
}
