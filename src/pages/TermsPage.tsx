import { Nav } from "../sections/Nav";
import { Footer } from "../sections/Footer";
import { Link } from "../router";
import { ArrowLeft } from "lucide-react";

export function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mb-10 text-sm text-[var(--sea-ink-soft)]">
            Last updated: March 22, 2026
          </p>

          <div className="space-y-8 text-[var(--sea-ink-soft)] leading-relaxed">
            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                1. Acceptance
              </h2>
              <p>
                By using TaskPilot — whether through the hosted web app, the CLI
                tool, or a self-hosted instance — you agree to these terms. If
                you do not agree, do not use the service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                2. What TaskPilot Does
              </h2>
              <p>
                TaskPilot connects AI coding agents to task boards (Trello,
                GitHub Issues, GitLab Issues). It reads your tasks, sends them to
                an AI provider using your API key, and applies the resulting code
                changes to your project. You are responsible for reviewing all
                changes the agent makes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                3. Your Responsibilities
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You provide your own AI provider API keys. You are responsible
                  for any costs incurred with those providers.
                </li>
                <li>
                  You are responsible for the code changes made by AI agents in
                  your repositories. Always review changes before merging.
                </li>
                <li>
                  You must not use TaskPilot for any unlawful purpose or to
                  violate the terms of any connected third-party service.
                </li>
                <li>
                  You are responsible for keeping your account credentials
                  secure.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                4. API Keys & Security
              </h2>
              <p>
                Your AI provider API keys are encrypted at rest with AES-256-GCM
                and are only decrypted during active sessions. OAuth tokens for
                task sources are stored server-side and never exposed to the
                client. Despite these measures, you use the service at your own
                risk and should rotate keys if you suspect a compromise.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                5. Service Availability
              </h2>
              <p>
                TaskPilot is provided "as is" without warranty. We do our best to
                keep the hosted service available but do not guarantee uptime. The
                CLI tool and self-hosted option are available as alternatives if
                the hosted service is down.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                6. Limitation of Liability
              </h2>
              <p>
                TaskPilot is not liable for any damages resulting from AI-generated
                code changes, data loss, API costs, or service interruptions. You
                are solely responsible for reviewing and approving all changes
                made by AI agents.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                7. Open Source
              </h2>
              <p>
                TaskPilot's source code is available on GitHub. The software is
                provided under its repository license. Self-hosted instances are
                your responsibility to maintain and secure.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                8. Account Termination
              </h2>
              <p>
                You may delete your account at any time. We reserve the right to
                suspend or terminate accounts that violate these terms. Upon
                deletion, all stored data — including encrypted keys and OAuth
                tokens — is permanently removed.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                9. Changes
              </h2>
              <p>
                We may update these terms from time to time. Continued use of
                TaskPilot after changes constitutes acceptance of the new terms.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
