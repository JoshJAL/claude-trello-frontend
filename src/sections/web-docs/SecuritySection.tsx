import { CheckCircle2 } from "lucide-react";

export function SecuritySection() {
  return (
    <div>
      <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
        Security
      </h3>
      <div className="card rounded-md p-6">
        <ul className="space-y-3 text-sm text-[var(--sea-ink-soft)]">
          <li className="flex items-start gap-2">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-green-600 dark:text-green-400"
            />
            <span>
              <strong className="text-[var(--sea-ink)]">
                Passwords hashed with bcrypt
              </strong>{" "}
              — managed by Better Auth, never stored or logged in plaintext
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-green-600 dark:text-green-400"
            />
            <span>
              <strong className="text-[var(--sea-ink)]">
                API keys encrypted at rest
              </strong>{" "}
              (AES-256-GCM) — decrypted only at the moment a session is
              launched, never returned to the browser
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-green-600 dark:text-green-400"
            />
            <span>
              <strong className="text-[var(--sea-ink)]">
                OAuth tokens stored server-side only
              </strong>{" "}
              — Trello, GitHub, and GitLab tokens are never sent to the client
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-green-600 dark:text-green-400"
            />
            <span>
              <strong className="text-[var(--sea-ink)]">
                HTTP-only session cookies
              </strong>{" "}
              — signed and inaccessible to JavaScript
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-green-600 dark:text-green-400"
            />
            <span>
              <strong className="text-[var(--sea-ink)]">
                All server functions authenticated
              </strong>{" "}
              — every API route checks the session before accessing user data
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
