import { Terminal } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between py-3 sm:py-4">
        <a
          href="/"
          className="flex items-center gap-2 font-bold text-[var(--sea-ink)] no-underline"
        >
          <Terminal size={20} className="text-[var(--lagoon)]" />
          TaskPilot
        </a>
        <div className="flex items-center gap-4 text-sm font-semibold sm:gap-6">
          <a
            href="#how-it-works"
            className="hidden text-[var(--sea-ink-soft)] no-underline hover:text-[var(--sea-ink)] sm:inline"
          >
            How It Works
          </a>
          <a
            href="#features"
            className="hidden text-[var(--sea-ink-soft)] no-underline hover:text-[var(--sea-ink)] sm:inline"
          >
            Features
          </a>
          <a
            href="#web"
            className="hidden text-[var(--sea-ink-soft)] no-underline hover:text-[var(--sea-ink)] sm:inline"
          >
            Web App
          </a>
          <a
            href="#cli"
            className="hidden text-[var(--sea-ink-soft)] no-underline hover:text-[var(--sea-ink)] sm:inline"
          >
            CLI
          </a>
          <a
            href="#self-hosting"
            className="hidden text-[var(--sea-ink-soft)] no-underline hover:text-[var(--sea-ink)] sm:inline"
          >
            Self-Host
          </a>
          <a
            href="https://ct.joshualevine.me"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--lagoon)] px-4 py-2 text-white no-underline hover:opacity-90"
          >
            Open App
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
