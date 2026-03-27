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
      <pre className="overflow-x-auto rounded-md border border-[var(--line)] bg-[var(--code-bg)] p-5 text-sm leading-relaxed text-[var(--code-text)]">
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
    <div className="card rounded-md p-5">
      <div className="flex flex-wrap items-baseline gap-3">
        <code className="rounded-md bg-[var(--code-bg)] px-2.5 py-1 text-sm font-semibold text-[var(--code-text)]">
          {command}
        </code>
        <span className="text-sm text-[var(--sea-ink-soft)]">
          {description}
        </span>
      </div>
      {flags && flags.length > 0 && (
        <div className="mt-4 space-y-2 border-t border-[var(--line)] pt-4">
          {flags.map((f) => (
            <div key={f.flag} className="flex items-baseline gap-2 text-sm">
              <code className="shrink-0 text-[var(--lagoon)]">{f.flag}</code>
              <span className="text-[var(--sea-ink-soft)]">{f.desc}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function CliDocs() {
  return (
    <section id="cli" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--kicker)]">
            CLI Tool
          </p>
          <h2 className="mb-4 text-3xl font-extrabold text-[var(--sea-ink)] sm:text-4xl">
            Work entirely from your terminal
          </h2>
          <p className="text-lg text-[var(--sea-ink-soft)]">
            No install needed. Runs instantly with{" "}
            <code className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-2 py-0.5 text-sm font-semibold text-[var(--sea-ink)]">
              npx
            </code>
            . Supports Trello, GitHub, and GitLab with multiple AI providers.
          </p>
          <a
            href="https://www.npmjs.com/package/@joshjal/taskpilot"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--sea-ink)] no-underline hover:bg-[var(--foam)]"
          >
            View on npm
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Quick start */}
        <div className="mb-14">
          <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
            Quick Start
          </h3>
          <Code
            copyText={`npx @joshjal/taskpilot register\nnpx @joshjal/taskpilot setup\ncd ~/my-project\nnpx @joshjal/taskpilot run`}
          >{`# Create an account (or "login" if you have one)
npx @joshjal/taskpilot register

# Connect a task source + save your AI provider API key
npx @joshjal/taskpilot setup

# Navigate to your project and go
cd ~/my-project
npx @joshjal/taskpilot run`}</Code>
          <p className="mt-4 text-sm text-[var(--sea-ink-soft)]">
            Or install globally for a shorter command:{" "}
            <code className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-1.5 py-0.5 text-xs text-[var(--sea-ink)]">
              npm i -g @joshjal/taskpilot
            </code>
          </p>
        </div>

        {/* Commands */}
        <div className="mb-14">
          <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
            Commands
          </h3>
          <div className="space-y-4">
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
              description="Connect a task source and save your AI provider API key (interactive wizard)"
            />
            <CommandCard
              command="run"
              description="Select a task source and start an AI coding session"
              flags={[
                {
                  flag: "-b, --board <id>",
                  desc: "Board/repo ID — skip interactive selection",
                },
                {
                  flag: "-d, --dir <path>",
                  desc: "Working directory (default: cwd)",
                },
                {
                  flag: "-m, --message <text>",
                  desc: "Initial instructions for the AI agent",
                },
                {
                  flag: "-s, --source <name>",
                  desc: "Task source: trello, github, or gitlab (default: trello)",
                },
                {
                  flag: "-P, --provider <name>",
                  desc: "AI provider: claude, openai, or groq (default: claude)",
                },
                {
                  flag: "-p, --parallel",
                  desc: "Run one agent per card/issue in parallel (uses git worktrees)",
                },
                {
                  flag: "-c, --concurrency <n>",
                  desc: "Max concurrent agents in parallel mode (1-5, default: 3)",
                },
                {
                  flag: "--branch <name>",
                  desc: "Git branch to work on (local: checks out the branch; cloud: commits to it)",
                },
                {
                  flag: "--workspace <target>",
                  desc: "Cloud storage workspace — available in the web app only",
                },
                {
                  flag: "--pr",
                  desc: "Auto-create a pull request after the session completes",
                },
                {
                  flag: "--no-pr",
                  desc: "Skip PR creation even if enabled in settings",
                },
              ]}
            />
            <CommandCard
              command="history"
              description="View past AI agent sessions"
              flags={[
                {
                  flag: "--all",
                  desc: "Show sessions across all projects (default: current directory only)",
                },
                {
                  flag: "--source <name>",
                  desc: "Filter by task source: trello, github, or gitlab",
                },
                {
                  flag: "--status <state>",
                  desc: "Filter by status: completed, failed, or cancelled",
                },
                {
                  flag: "--events",
                  desc: "Include the full event log for each session",
                },
              ]}
            />
            <CommandCard
              command="usage"
              description="Show current month spending summary"
            />
            <CommandCard
              command="boards"
              description="List your Trello boards with IDs"
            />
            <CommandCard
              command="repos"
              description="List your connected GitHub repositories"
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

        {/* Examples */}
        <div className="mb-14">
          <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
            Task Sources
          </h3>
          <Code
            copyText="npx @joshjal/taskpilot run --source github"
          >{`# Trello (default)
npx @joshjal/taskpilot run

# GitHub issues
npx @joshjal/taskpilot run --source github

# GitLab issues
npx @joshjal/taskpilot run --source gitlab`}</Code>
        </div>

        <div className="mb-14">
          <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
            AI Providers
          </h3>
          <Code
            copyText="npx @joshjal/taskpilot run --provider openai"
          >{`# Claude via Claude Code SDK (default)
npx @joshjal/taskpilot run

# OpenAI (gpt-4o)
npx @joshjal/taskpilot run --provider openai

# Groq (llama-3.3-70b) — fast inference
npx @joshjal/taskpilot run --provider groq`}</Code>
        </div>

        <div className="mb-14">
          <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
            Parallel Mode
          </h3>
          <Code
            copyText="npx @joshjal/taskpilot run --parallel"
          >{`# Run one agent per card/issue (default: 3 concurrent)
npx @joshjal/taskpilot run --parallel

# Up to 5 concurrent agents
npx @joshjal/taskpilot run --parallel --concurrency 5

# Combine with any source and provider
npx @joshjal/taskpilot run --source github --provider openai --parallel`}</Code>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
            Full Scripted Workflow
          </h3>
          <Code
            copyText={'npx @joshjal/taskpilot run --source github --provider claude --parallel --dir ~/projects/my-api --message "Just go"'}
          >{`# Login once
npx @joshjal/taskpilot login

# Then run from anywhere with all options
npx @joshjal/taskpilot run \\
  --source github \\
  --provider claude \\
  --parallel \\
  --dir ~/projects/my-api \\
  --message "Just go"`}</Code>
        </div>
      </div>
    </section>
  );
}
