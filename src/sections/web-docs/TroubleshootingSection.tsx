export function TroubleshootingSection() {
  return (
    <div className="mb-14">
      <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
        Troubleshooting
      </h3>
      <div className="space-y-3">
        <details className="card-subtle rounded-md">
          <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-[var(--sea-ink)]">
            I connected a source but no boards or repos appear
          </summary>
          <div className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--sea-ink-soft)]">
            Make sure your OAuth token hasn't expired. Go to{" "}
            <strong className="text-[var(--sea-ink)]">Settings</strong>,
            disconnect the source, and reconnect it. For GitHub, ensure the
            OAuth app has access to the repos you expect.
          </div>
        </details>

        <details className="card-subtle rounded-md">
          <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-[var(--sea-ink)]">
            The session started but nothing is happening
          </summary>
          <div className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--sea-ink-soft)]">
            Check that your AI provider API key is valid and has sufficient
            credits. Go to{" "}
            <strong className="text-[var(--sea-ink)]">Settings</strong> to
            verify your key is configured. If using Claude, make sure{" "}
            <code className="rounded border border-[var(--line)] bg-[var(--surface)] px-1 text-xs">
              @anthropic-ai/claude-code
            </code>{" "}
            is installed globally on the server.
          </div>
        </details>

        <details className="card-subtle rounded-md">
          <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-[var(--sea-ink)]">
            Can I run multiple sessions at the same time?
          </summary>
          <div className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--sea-ink-soft)]">
            Each user is limited to one active session at a time. Wait for the
            current session to finish, or stop it before starting another. In
            parallel mode, the concurrency limit controls how many agents run
            simultaneously within a single session.
          </div>
        </details>

        <details className="card-subtle rounded-md">
          <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-[var(--sea-ink)]">
            Parallel mode has merge conflicts
          </summary>
          <div className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--sea-ink-soft)]">
            When multiple agents edit the same files, merge conflicts can occur
            during the sequential merge phase. The summary panel will flag
            these. Resolve them manually in your working directory after the
            session finishes.
          </div>
        </details>

        <details className="card-subtle rounded-md">
          <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-[var(--sea-ink)]">
            The provider dropdown only shows Claude
          </summary>
          <div className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--sea-ink-soft)]">
            The dropdown only appears when you have two or more provider keys
            configured. Go to{" "}
            <strong className="text-[var(--sea-ink)]">Settings</strong> and add
            API keys for OpenAI or Groq to see additional options.
          </div>
        </details>

        <details className="card-subtle rounded-md">
          <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-[var(--sea-ink)]">
            Where is my data stored?
          </summary>
          <div className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--sea-ink-soft)]">
            TaskPilot uses Turso (cloud SQLite) for all persistent data.
            Passwords are hashed with bcrypt. API keys are encrypted with
            AES-256-GCM. OAuth tokens are stored server-side and never sent to
            the client. Session cookies are HTTP-only and signed.
          </div>
        </details>
      </div>
    </div>
  );
}
