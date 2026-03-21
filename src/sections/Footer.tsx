import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-shore/40 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <Terminal size={16} className="text-lagoon" />
          Claude Trello Bridge
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-ink-soft">
          <a
            href="https://ct.joshualevine.me"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            Web App
          </a>
          <a
            href="https://www.npmjs.com/package/claude-trello-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            npm
          </a>
          <a
            href="https://github.com/JoshJAL/claude-trello"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            GitHub
          </a>
          <a
            href="https://ct.joshualevine.me/docs/cli"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            CLI Docs
          </a>
        </div>
      </div>
    </footer>
  );
}
