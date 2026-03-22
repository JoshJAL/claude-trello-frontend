import { LogIn, Link2, Key, LayoutDashboard } from "lucide-react";
import { StepCard } from "./cards";

export function GettingStarted() {
  return (
    <div className="mb-14">
      <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
        Getting Started
      </h3>
      <div className="space-y-4">
        <StepCard number={1} icon={LogIn} title="Create an account">
          <p>
            Register with your email and password on the sign-in page. If you
            already have an account, just sign in.
          </p>
        </StepCard>

        <StepCard number={2} icon={Link2} title="Connect a task source">
          <p>
            After signing in you'll land on the onboarding page. Connect at
            least one task source:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong className="text-[var(--sea-ink)]">Trello</strong> —
              authorize via OAuth to access your boards
            </li>
            <li>
              <strong className="text-[var(--sea-ink)]">GitHub</strong> —
              authorize via OAuth to access your repositories
            </li>
            <li>
              <strong className="text-[var(--sea-ink)]">GitLab</strong> —
              authorize via OAuth to access your projects
            </li>
          </ul>
          <p>
            You can connect multiple sources and switch between them from the
            sidebar.
          </p>
        </StepCard>

        <StepCard number={3} icon={Key} title="Add an AI provider API key">
          <p>
            Paste your API key for at least one AI provider. Keys are
            encrypted (AES-256-GCM) before being stored — they're never
            visible after saving.
          </p>
          <div className="rounded-lg border border-[var(--line)] p-3">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[var(--line)]">
                  <th className="pb-2 text-left font-semibold text-[var(--sea-ink)]">
                    Provider
                  </th>
                  <th className="pb-2 text-left font-semibold text-[var(--sea-ink)]">
                    Key prefix
                  </th>
                  <th className="pb-2 text-left font-semibold text-[var(--sea-ink)]">
                    Get it from
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--sea-ink-soft)]">
                <tr className="border-b border-[var(--line)]">
                  <td className="py-1.5">Claude</td>
                  <td>
                    <code className="text-xs">sk-ant-api03-</code>
                  </td>
                  <td>
                    <a
                      href="https://console.anthropic.com/settings/keys"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--lagoon)] hover:underline"
                    >
                      console.anthropic.com
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-[var(--line)]">
                  <td className="py-1.5">OpenAI</td>
                  <td>
                    <code className="text-xs">sk-</code>
                  </td>
                  <td>
                    <a
                      href="https://platform.openai.com/api-keys"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--lagoon)] hover:underline"
                    >
                      platform.openai.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-1.5">Groq</td>
                  <td>
                    <code className="text-xs">gsk_</code>
                  </td>
                  <td>
                    <a
                      href="https://console.groq.com/keys"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--lagoon)] hover:underline"
                    >
                      console.groq.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </StepCard>

        <StepCard
          number={4}
          icon={LayoutDashboard}
          title="Launch a session"
        >
          <p>
            Once onboarding is complete you'll land on the dashboard. Select
            a board or repo, review the cards/issues, and hit{" "}
            <strong className="text-[var(--sea-ink)]">Start Session</strong>{" "}
            to begin.
          </p>
        </StepCard>
      </div>
    </div>
  );
}
