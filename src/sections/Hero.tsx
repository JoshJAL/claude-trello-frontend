import { ArrowRight, Package } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-20 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-1.5 text-sm font-medium text-[var(--sea-ink-soft)]">
          <Package size={14} className="text-[var(--lagoon)]" />
          Now available on npm
        </div>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--sea-ink)] sm:text-5xl lg:text-6xl">
          AI coding agents for{" "}
          <span className="text-[var(--lagoon)]">your task boards</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[var(--sea-ink-soft)] sm:text-xl">
          Point AI agents at your Trello boards, GitHub issues, or GitLab
          projects. They read the tasks, make code changes, and check items
          off as they go. From your browser or your terminal.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://account.task-pilot.dev/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--lagoon)] px-6 py-3 text-base font-semibold text-white no-underline shadow-lg shadow-[var(--lagoon)]/20 hover:opacity-90"
          >
            Get Started
            <ArrowRight size={18} />
          </a>
          <a
            href="#cli"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-6 py-3 text-base font-semibold text-[var(--sea-ink)] no-underline hover:bg-[var(--foam)]"
          >
            Use the CLI
          </a>
        </div>

        {/* Terminal preview */}
        <div className="mx-auto mt-20 max-w-2xl overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--code-bg)] shadow-2xl">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 text-xs text-[var(--code-text)]/40">
              terminal
            </span>
          </div>
          <pre className="overflow-x-auto p-6 text-left text-sm leading-relaxed text-[var(--code-text)]/80">
            <code>
              <span className="text-[var(--lagoon-light)]">$</span>{" "}
              <span className="text-[var(--code-text)]">
                npx @joshjal/taskpilot run
              </span>
              {"\n\n"}
              <span className="text-[var(--code-text)]/50">
                ? Select a board:
              </span>
              {"\n"}
              <span className="text-[var(--lagoon-light)]">{">"}</span>{" "}
              <span className="text-[var(--code-text)]">
                My Project Board
              </span>
              {"\n\n"}
              <span className="text-[var(--code-text)] font-semibold">
                My Project Board
              </span>
              {"\n"}
              <span className="text-[var(--code-text)]/30">
                {"─".repeat(20)}
              </span>
              {"\n\n"}
              {"  "}
              <span className="text-[var(--lagoon-light)] font-semibold">
                To Do
              </span>
              <span className="text-[var(--code-text)]/40"> (3 cards):</span>
              {"\n"}
              {"    "}
              <span className="text-[var(--code-text)]/60">
                Fix authentication bug [0/4]
              </span>
              {"\n"}
              {"    "}
              <span className="text-[var(--code-text)]/60">
                Add dark mode support [0/3]
              </span>
              {"\n\n"}
              <span className="text-green-400">
                {"  "}Credentials loaded
              </span>
              {"\n"}
              <span className="text-blue-400 font-semibold">
                {"\n  Starting AI agent session..."}
              </span>
              {"\n\n"}
              <span className="text-[var(--code-text)]/50">
                {"  Reading src/lib/auth.ts"}
              </span>
              {"\n"}
              <span className="text-[var(--code-text)]/50">
                {"  Editing src/routes/login.tsx"}
              </span>
              {"\n"}
              <span className="text-green-400">
                {"  Checked item on task board"}
              </span>
              {"\n"}
              <span className="text-green-400 font-semibold">
                {"  Moved card to Done"}
              </span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
