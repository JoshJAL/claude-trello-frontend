import { Globe } from "lucide-react";

export function WebDocsHeader() {
  return (
    <div className="mb-16 text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--kicker)]">
        Web App
      </p>
      <h2 className="mb-4 text-3xl font-extrabold text-[var(--sea-ink)] sm:text-4xl">
        Your AI task control center
      </h2>
      <p className="text-lg text-[var(--sea-ink-soft)]">
        Connect task sources, configure AI providers, and launch coding
        sessions — all from your browser.
      </p>
      <a
        href="https://account.task-pilot.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--sea-ink)] no-underline hover:bg-[var(--foam)]"
      >
        <Globe size={14} />
        Open App
      </a>
    </div>
  );
}
