import { useState, useCallback } from "react";
import {
  Server,
  Database,
  Key,
  Shield,
  Terminal,
  Copy,
  Check,
  Globe,
  ExternalLink,
  Github,
} from "lucide-react";

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

function Code({ children, copyText }: { children: React.ReactNode; copyText?: string }) {
  const text = copyText ?? (typeof children === "string" ? children : "");
  return (
    <div className="group relative">
      <pre className="overflow-x-auto rounded-xl border border-[var(--line)] bg-[var(--code-bg)] p-5 text-sm leading-relaxed text-[var(--code-text)]">
        <code>{children}</code>
      </pre>
      {text && <CopyButton text={text} />}
    </div>
  );
}

function Step({
  number,
  icon: Icon,
  title,
  children,
}: {
  number: number;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card rounded-xl p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--lagoon)]/15 text-sm font-bold text-[var(--lagoon)]">
          {number}
        </span>
        <Icon size={18} className="text-[var(--lagoon)]" />
        <h3 className="text-lg font-semibold text-[var(--sea-ink)]">{title}</h3>
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
        {children}
      </div>
    </div>
  );
}

function EnvRow({ name, required, desc }: { name: string; required: string; desc: string }) {
  return (
    <tr className="border-b border-[var(--line)]/50">
      <td className="py-2 pr-4 font-mono text-xs text-[var(--lagoon)]">{name}</td>
      <td className="py-2 pr-4 text-xs">{required}</td>
      <td className="py-2 text-xs">{desc}</td>
    </tr>
  );
}

export function SelfHosting() {
  return (
    <section id="self-hosting" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--kicker)]">
            Self-Hosting
          </p>
          <h2 className="mb-4 text-3xl font-extrabold text-[var(--sea-ink)] sm:text-4xl">
            Run your own instance
          </h2>
          <p className="text-lg text-[var(--sea-ink-soft)]">
            TaskPilot is open source and designed to be self-hosted. Every user
            brings their own API keys — there is no shared server-side AI key.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/JoshJAL/claude-trello"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#24292f] px-4 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-[#1b1f23] dark:bg-[#f0f6fc] dark:text-[#24292f] dark:hover:bg-[#d0d7de]"
            >
              <Github size={16} />
              View on GitHub
              <ExternalLink size={14} />
            </a>
            <a
              href="https://account.task-pilot.dev/docs/self-hosting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline hover:bg-[var(--foam)]"
            >
              <Globe size={14} />
              Full Guide in App
            </a>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-8 card rounded-xl p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[var(--sea-ink)]">
            <Terminal size={18} className="text-[var(--lagoon)]" />
            Prerequisites
          </h3>
          <ul className="ml-4 list-disc space-y-1.5 text-sm text-[var(--sea-ink-soft)]">
            <li><strong>Node.js 20+</strong> and <strong>pnpm</strong></li>
            <li>A <a href="https://turso.tech" target="_blank" rel="noopener noreferrer" className="text-[var(--lagoon)] underline">Turso</a> database (free tier works)</li>
            <li>OAuth credentials for at least one task source (Trello, GitHub, or GitLab)</li>
            <li>A domain with HTTPS for production (localhost for dev)</li>
          </ul>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          <Step number={1} icon={Terminal} title="Clone & Install">
            <Code copyText="git clone https://github.com/JoshJAL/claude-trello.git && cd claude-trello && pnpm install && cp .env.example .env">
{`git clone https://github.com/JoshJAL/claude-trello.git
cd claude-trello
pnpm install
cp .env.example .env`}
            </Code>
          </Step>

          <Step number={2} icon={Database} title="Create Database">
            <p>
              TaskPilot uses <strong>Turso</strong> (hosted SQLite). Create a free
              database and grab your credentials:
            </p>
            <Code copyText="turso db create taskpilot && turso db show taskpilot --url && turso db tokens create taskpilot">
{`turso db create taskpilot
turso db show taskpilot --url      # → TURSO_DATABASE_URL
turso db tokens create taskpilot   # → TURSO_AUTH_TOKEN`}
            </Code>
          </Step>

          <Step number={3} icon={Key} title="Configure Environment">
            <p>
              Edit <code className="rounded bg-[var(--code-bg)] px-1.5 py-0.5 text-[var(--code-text)]">.env</code> and
              fill in your values. Generate secrets with{" "}
              <code className="rounded bg-[var(--code-bg)] px-1.5 py-0.5 text-[var(--code-text)]">openssl rand -hex 32</code>.
            </p>

            <div className="overflow-x-auto rounded-lg border border-[var(--line)]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[var(--line)] bg-[var(--foam)]/50">
                    <th className="px-3 py-2 text-xs font-semibold text-[var(--sea-ink)]">Variable</th>
                    <th className="px-3 py-2 text-xs font-semibold text-[var(--sea-ink)]">Required</th>
                    <th className="px-3 py-2 text-xs font-semibold text-[var(--sea-ink)]">Source</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--sea-ink-soft)]">
                  <EnvRow name="BETTER_AUTH_SECRET" required="Yes" desc="openssl rand -hex 32" />
                  <EnvRow name="TURSO_DATABASE_URL" required="Yes" desc="turso db show" />
                  <EnvRow name="TURSO_AUTH_TOKEN" required="Yes" desc="turso db tokens create" />
                  <EnvRow name="ENCRYPTION_KEY" required="Yes" desc="openssl rand -hex 32" />
                  <EnvRow name="TRELLO_API_KEY" required="For Trello" desc="trello.com/app-key" />
                  <EnvRow name="GITHUB_CLIENT_ID" required="For GitHub" desc="github.com/settings/developers" />
                  <EnvRow name="GITLAB_CLIENT_ID" required="For GitLab" desc="gitlab.com/-/user_settings/applications" />
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--sea-ink-soft)]">
              See <code className="rounded bg-[var(--code-bg)] px-1.5 py-0.5 text-[var(--code-text)]">.env.example</code> for
              the full list including OAuth secrets, callback URLs, and optional webhook secrets.
            </p>
          </Step>

          <Step number={4} icon={Database} title="Push Schema & Run">
            <Code copyText="pnpm db:push && pnpm dev">
{`pnpm db:push    # Create database tables
pnpm dev        # Start dev server on port 3000`}
            </Code>
            <p>
              For production, build and run the Node server:
            </p>
            <Code copyText="pnpm build && node .output/server/index.mjs">
{`pnpm build
node .output/server/index.mjs`}
            </Code>
            <p>
              Deploys to Vercel, any Node.js host, or Docker. Built on Nitro.
            </p>
          </Step>
        </div>

        {/* Security callout */}
        <div className="mt-8 card rounded-xl p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[var(--sea-ink)]">
            <Shield size={18} className="text-[var(--lagoon)]" />
            Security
          </h3>
          <ul className="ml-4 list-disc space-y-1.5 text-sm text-[var(--sea-ink-soft)]">
            <li><strong>No shared AI key</strong> — every user enters their own API key, encrypted at rest with AES-256-GCM</li>
            <li><strong>OAuth tokens</strong> stored server-side only, never sent to the client</li>
            <li><strong>Passwords</strong> bcrypt-hashed by Better Auth</li>
            <li><strong>Sessions</strong> are HTTP-only cookies signed with your secret</li>
            <li>Never commit <code className="rounded bg-[var(--code-bg)] px-1.5 py-0.5 text-[var(--code-text)]">.env</code></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
