export function SettingsSection() {
  return (
    <div className="mb-14">
      <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
        Settings
      </h3>
      <div className="card rounded-md p-6">
        <div className="space-y-4 text-sm text-[var(--sea-ink-soft)]">
          <p>
            The <strong className="text-[var(--sea-ink)]">Settings</strong> page
            (accessible from the sidebar) lets you manage all your connections
            and API keys at any time.
          </p>

          <div>
            <h4 className="mb-2 font-semibold text-[var(--sea-ink)]">
              Task Sources
            </h4>
            <ul className="list-inside list-disc space-y-1">
              <li>Connect or disconnect Trello, GitHub, and GitLab</li>
              <li>
                Each source uses OAuth — click to connect and authorize in your
                browser
              </li>
              <li>
                Tokens are stored securely on the server and never exposed to
                the client
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-[var(--sea-ink)]">
              AI Provider Keys
            </h4>
            <ul className="list-inside list-disc space-y-1">
              <li>Add or remove API keys for Claude, OpenAI, and Groq</li>
              <li>
                Keys are validated by prefix before saving (e.g.{" "}
                <code className="rounded border border-[var(--line)] bg-[var(--surface)] px-1 text-xs">
                  sk-ant-api03-
                </code>{" "}
                for Claude)
              </li>
              <li>
                All keys are encrypted with AES-256-GCM — the stored key is
                never displayed, even partially
              </li>
              <li>
                The provider dropdown on the dashboard only shows providers you
                have keys for
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
