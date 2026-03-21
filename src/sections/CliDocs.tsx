import { useState, useCallback } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="absolute right-3 top-3 rounded-md border border-white/10 bg-white/5 p-1.5 text-white/40 opacity-0 transition group-hover:opacity-100 hover:text-white/80"
      title="Copy"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

function Code({
  children,
  copyText,
}: {
  children: React.ReactNode;
  copyText?: string;
}) {
  const text =
    copyText ?? (typeof children === "string" ? children : "");

  return (
    <div className="group relative">
      <pre className="overflow-x-auto rounded-xl border border-white/10 bg-ink p-4 text-sm leading-relaxed text-white/80">
        <code>{children}</code>
      </pre>
      {text && <CopyButton text={text} />}
    </div>
  );
}

function CommandCard({
  command,
  description,
  flags,
}: {
  command: string;
  description: string;
  flags?: Array<{ flag: string; desc: string }>;
}) {
  return (
    <div className="rounded-xl border border-shore/50 bg-white/70 p-4">
      <div className="flex flex-wrap items-baseline gap-3">
        <code className="rounded-md bg-ink px-2.5 py-1 text-sm font-semibold text-sand">
          {command}
        </code>
        <span className="text-sm text-ink-soft">{description}</span>
      </div>
      {flags && flags.length > 0 && (
        <div className="mt-3 space-y-1.5 border-t border-shore/30 pt-3">
          {flags.map((f) => (
            <div key={f.flag} className="flex items-baseline gap-2 text-sm">
              <code className="shrink-0 text-lagoon">{f.flag}</code>
              <span className="text-ink-soft">{f.desc}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function CliDocs() {
  return (
    <section id="cli" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-lagoon">
            CLI Tool
          </p>
          <h2 className="mb-4 text-3xl font-extrabold text-ink sm:text-4xl">
            Work entirely from your terminal
          </h2>
          <p className="text-lg text-ink-soft">
            No install needed. Runs instantly with{" "}
            <code className="rounded bg-foam px-1.5 py-0.5 text-sm font-semibold">
              npx
            </code>
            .
          </p>
          <a
            href="https://www.npmjs.com/package/claude-trello-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-shore bg-white/60 px-3 py-1.5 text-sm font-semibold text-ink transition hover:bg-foam"
          >
            View on npm
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Quick start */}
        <div className="mb-12">
          <h3 className="mb-4 text-xl font-bold text-ink">Quick Start</h3>
          <Code copyText="npx claude-trello-cli register
npx claude-trello-cli setup
cd ~/my-project
npx claude-trello-cli run">{`# Create an account (or "login" if you have one)
npx claude-trello-cli register

# Connect Trello + save your Anthropic API key
npx claude-trello-cli setup

# Navigate to your project and go
cd ~/my-project
npx claude-trello-cli run`}</Code>
          <p className="mt-3 text-sm text-ink-soft">
            Or install globally for a shorter command:{" "}
            <code className="rounded bg-foam px-1.5 py-0.5 text-xs">
              npm i -g claude-trello-cli
            </code>
          </p>
        </div>

        {/* Commands */}
        <div className="mb-12">
          <h3 className="mb-4 text-xl font-bold text-ink">Commands</h3>
          <div className="space-y-3">
            <CommandCard
              command="register"
              description="Create a new account"
              flags={[
                {
                  flag: "-s, --server <url>",
                  desc: "Self-hosted server URL",
                },
              ]}
            />
            <CommandCard
              command="login"
              description="Sign in to an existing account"
              flags={[
                {
                  flag: "-s, --server <url>",
                  desc: "Self-hosted server URL",
                },
              ]}
            />
            <CommandCard
              command="setup"
              description="Connect Trello and save your API key (interactive wizard)"
            />
            <CommandCard
              command="run"
              description="Select a board and start a Claude Code session"
              flags={[
                { flag: "-b, --board <id>", desc: "Skip board selection" },
                {
                  flag: "-d, --dir <path>",
                  desc: "Working directory (default: cwd)",
                },
                {
                  flag: "-m, --message <text>",
                  desc: "Initial instructions for Claude",
                },
              ]}
            />
            <CommandCard
              command="boards"
              description="List your Trello boards with IDs"
            />
            <CommandCard
              command="status"
              description="Check auth and integration status"
            />
            <CommandCard
              command="logout"
              description="Clear your stored session"
            />
          </div>
        </div>

        {/* Example with message */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-ink">
            Give Claude extra context
          </h3>
          <Code
            copyText='npx claude-trello-cli run --message "Check the development branch for comparison"'
          >{`# Pass initial instructions
npx claude-trello-cli run --message "Check the development branch for comparison"

# Combine all flags for a scripted workflow
npx claude-trello-cli run \\
  --board 60d5e2a3f1a2b40017c3d4e5 \\
  --dir ~/projects/my-api \\
  --message "Focus on backend cards first"`}</Code>
        </div>
      </div>
    </section>
  );
}
