import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--sea-ink)]">
          <Terminal size={16} className="text-[var(--lagoon)]" />
          TaskPilot
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--sea-ink-soft)]">
          <a
            href="https://account.task-pilot.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-[var(--sea-ink)]"
          >
            Web App
          </a>
          <a
            href="https://www.npmjs.com/package/@joshjal/taskpilot"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-[var(--sea-ink)]"
          >
            npm
          </a>
          <a
            href="https://github.com/JoshJAL/claude-trello"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-[var(--sea-ink)]"
          >
            GitHub
          </a>
          <a
            href="https://account.task-pilot.dev/docs/cli"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-[var(--sea-ink)]"
          >
            CLI Docs
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--shore-line)]">
          <a
            href="https://account.task-pilot.dev/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-[var(--sea-ink-soft)]"
          >
            Privacy Policy
          </a>
          <a
            href="https://account.task-pilot.dev/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-[var(--sea-ink-soft)]"
          >
            Terms of Service
          </a>
          <a
            href="https://account.task-pilot.dev/cookies"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-[var(--sea-ink-soft)]"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
