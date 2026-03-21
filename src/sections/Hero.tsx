import { ArrowRight, Package } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-lagoon/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-shore bg-surface px-4 py-1.5 text-sm font-medium text-ink-soft">
          <Package size={14} className="text-lagoon" />
          Now available on npm
        </div>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Let Claude Code work through{" "}
          <span className="text-lagoon">your Trello boards</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-ink-soft sm:text-xl">
          Point Claude at a Trello board and a codebase. It reads the cards,
          makes the code changes, and checks off items as it finishes them.
          From your browser or your terminal.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://ct.joshualevine.me/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-lagoon px-6 py-3 text-base font-semibold text-white shadow-lg shadow-lagoon/20 transition hover:bg-lagoon-light hover:shadow-lagoon/30"
          >
            Get Started
            <ArrowRight size={18} />
          </a>
          <a
            href="#cli"
            className="inline-flex items-center gap-2 rounded-xl border border-shore bg-white/60 px-6 py-3 text-base font-semibold text-ink transition hover:bg-foam"
          >
            Use the CLI
          </a>
        </div>

        {/* Terminal preview */}
        <div className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-2xl border border-shore/60 bg-ink shadow-2xl shadow-ink/10">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 text-xs text-white/40">terminal</span>
          </div>
          <pre className="overflow-x-auto p-5 text-left text-sm leading-relaxed text-white/80">
            <code>
              <span className="text-lagoon-light">$</span>{" "}
              <span className="text-white">npx claude-trello-cli run</span>
              {"\n\n"}
              <span className="text-white/50">? Select a board:</span>
              {"\n"}
              <span className="text-lagoon-light">{">"}</span>{" "}
              <span className="text-white">My Project Board</span>
              {"\n\n"}
              <span className="text-white font-semibold">
                My Project Board
              </span>
              {"\n"}
              <span className="text-white/30">
                {"─".repeat(20)}
              </span>
              {"\n\n"}
              {"  "}
              <span className="text-lagoon-light font-semibold">To Do</span>
              <span className="text-white/40"> (3 cards):</span>
              {"\n"}
              {"    "}
              <span className="text-white/60">
                {"  Fix authentication bug [0/4]"}
              </span>
              {"\n"}
              {"    "}
              <span className="text-white/60">
                {"  Add dark mode support [0/3]"}
              </span>
              {"\n\n"}
              <span className="text-green-400">
                {"  "}
                {"  Credentials loaded"}
              </span>
              {"\n"}
              <span className="text-blue-400 font-semibold">
                {"\n  Starting Claude Code session..."}
              </span>
              {"\n\n"}
              <span className="text-white/60">
                {"  Reading src/lib/auth.ts"}
              </span>
              {"\n"}
              <span className="text-white/60">
                {"  Editing src/routes/login.tsx"}
              </span>
              {"\n"}
              <span className="text-green-400">
                {"  Checked item on Trello"}
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
