import { Nav } from "../sections/Nav";
import { Footer } from "../sections/Footer";
import { Link } from "../router";
import { ArrowLeft } from "lucide-react";

export function DataPolicyPage() {
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
            Cookie Policy
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
                TaskPilot uses a minimal number of browser storage mechanisms.
                We do not use advertising, analytics, or third-party tracking of
                any kind.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                What We Use
              </h2>
              <div className="overflow-x-auto rounded-md border border-[var(--line)]">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--line)] bg-[var(--foam)]/50">
                      <th className="px-4 py-3 font-semibold text-[var(--sea-ink)]">
                        Name
                      </th>
                      <th className="px-4 py-3 font-semibold text-[var(--sea-ink)]">
                        Type
                      </th>
                      <th className="px-4 py-3 font-semibold text-[var(--sea-ink)]">
                        Purpose
                      </th>
                      <th className="px-4 py-3 font-semibold text-[var(--sea-ink)]">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--line)]">
                      <td className="px-4 py-3 font-mono text-xs text-[var(--lagoon)]">
                        session
                      </td>
                      <td className="px-4 py-3">HTTP-only cookie</td>
                      <td className="px-4 py-3">
                        Keeps you signed in. Set by Better Auth, signed with
                        a server-side secret.
                      </td>
                      <td className="px-4 py-3">Session / 30 days</td>
                    </tr>
                    <tr className="border-b border-[var(--line)]">
                      <td className="px-4 py-3 font-mono text-xs text-[var(--lagoon)]">
                        theme
                      </td>
                      <td className="px-4 py-3">localStorage</td>
                      <td className="px-4 py-3">
                        Remembers your light/dark/auto theme preference.
                      </td>
                      <td className="px-4 py-3">Persistent</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-[var(--lagoon)]">
                        consent
                      </td>
                      <td className="px-4 py-3">localStorage</td>
                      <td className="px-4 py-3">
                        Records that you dismissed the consent banner so it
                        does not reappear.
                      </td>
                      <td className="px-4 py-3">Persistent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                What We Do Not Use
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>No advertising or retargeting trackers.</li>
                <li>No analytics services (Google Analytics, Mixpanel, etc.).</li>
                <li>No third-party tracking pixels or scripts.</li>
                <li>No cross-site tracking of any kind.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                Managing Storage
              </h2>
              <p>
                You can clear localStorage entries at any time through your
                browser's developer tools. The session authentication is
                HTTP-only and can be cleared by logging out or clearing your
                browser's stored data for this site.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-[var(--sea-ink)]">
                Self-Hosted Instances
              </h2>
              <p>
                If you run your own TaskPilot instance, the same storage
                mechanisms apply. No additional telemetry or tracking is sent
                back to us.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
