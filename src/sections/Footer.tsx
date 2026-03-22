import { Terminal } from "lucide-react";
import { Link } from "../router";

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
            href="#cli"
            className="no-underline hover:text-[var(--sea-ink)]"
          >
            CLI Docs
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--shore-line)]">
          <Link
            to="/privacy"
            className="no-underline hover:text-[var(--sea-ink-soft)]"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="no-underline hover:text-[var(--sea-ink-soft)]"
          >
            Terms of Service
          </Link>
          <Link
            to="/data-policy"
            className="no-underline hover:text-[var(--sea-ink-soft)]"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
