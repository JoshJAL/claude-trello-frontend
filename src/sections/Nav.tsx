import { Terminal } from "lucide-react";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-shore/40 bg-sand/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-bold text-ink">
          <Terminal size={20} className="text-lagoon" />
          Claude Trello Bridge
        </a>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#how-it-works" className="text-ink-soft transition hover:text-ink">
            How It Works
          </a>
          <a href="#features" className="text-ink-soft transition hover:text-ink">
            Features
          </a>
          <a href="#cli" className="text-ink-soft transition hover:text-ink">
            CLI
          </a>
          <a
            href="https://ct.joshualevine.me"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-lagoon px-4 py-2 text-white transition hover:bg-lagoon-light"
          >
            Open App
          </a>
        </div>
      </nav>
    </header>
  );
}
