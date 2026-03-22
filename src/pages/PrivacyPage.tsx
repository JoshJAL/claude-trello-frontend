import { Nav } from "../sections/Nav";
import { Footer } from "../sections/Footer";
import { Link } from "../router";
import { ArrowLeft } from "lucide-react";

export function PrivacyPage() {
  return (
    <div className="min-h-screen font-sans">
      <Nav />
      <main className="px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--lagoon)] no-underline hover:underline"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          <h1 className="mb-3 text-3xl font-extrabold text-[var(--sea-ink)] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mb-10 text-sm text-[var(--sea-ink-soft)]">
            Last updated: March 22, 2026
          </p>

          <div className="space-y-8 text-[var(--sea-ink-soft)] leading-relaxed">
            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                Overview
              </h2>
              <p>
                TaskPilot ("we", "us", "our") is an open-source tool that
                connects AI coding agents to your task boards. This policy
                explains what data we collect, why, and how we protect it.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                What We Collect
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong className="text-[var(--sea-ink)]">
                    Account information
                  </strong>{" "}
                  — email address and password (bcrypt-hashed) when you register.
                </li>
                <li>
                  <strong className="text-[var(--sea-ink)]">
                    OAuth tokens
                  </strong>{" "}
                  — when you connect Trello, GitHub, or GitLab, we store OAuth
                  tokens server-side to access your boards and repositories on
                  your behalf. These tokens are never sent to the client.
                </li>
                <li>
                  <strong className="text-[var(--sea-ink)]">
                    AI provider API keys
                  </strong>{" "}
                  — your keys for Claude, OpenAI, or Groq are encrypted at rest
                  with AES-256-GCM and only decrypted for the duration of a
                  session.
                </li>
                <li>
                  <strong className="text-[var(--sea-ink)]">Session data</strong>{" "}
                  — we log session metadata (timestamps, task source, status,
                  token usage) to provide history and cost tracking.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                What We Do Not Collect
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>We do not store your source code.</li>
                <li>We do not read or log AI conversation content.</li>
                <li>
                  We do not use analytics trackers, advertising pixels, or
                  third-party tracking scripts.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                How We Store Your Data
              </h2>
              <p>
                All data is stored in a Turso (libSQL) database. Sensitive
                fields — API keys — are encrypted with AES-256-GCM before being
                written. Passwords are hashed with bcrypt via Better Auth.
                Sessions use HTTP-only cookies signed with a server-side secret.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                Third-Party Services
              </h2>
              <p>
                When you run a session, your tasks and code context are sent to
                the AI provider you selected (Anthropic, OpenAI, or Groq) using
                your own API key. Refer to each provider's privacy policy for how
                they handle that data.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                Data Retention
              </h2>
              <p>
                Account data and session history are retained as long as your
                account is active. You can delete your account at any time, which
                removes all stored data including encrypted keys and OAuth
                tokens.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                Your Rights
              </h2>
              <p>
                You can request a copy of your data or ask us to delete your
                account by emailing us. If you self-host TaskPilot, you control
                all data directly.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                Changes
              </h2>
              <p>
                We may update this policy from time to time. Changes will be
                reflected on this page with an updated date.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
