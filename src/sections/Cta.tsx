import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="border-t border-[var(--line)] bg-[var(--foam)]/50 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-5 text-3xl font-extrabold text-[var(--sea-ink)] sm:text-4xl">
          Ready to let AI work through your board?
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-[var(--sea-ink-soft)]">
          Sign up in the browser or go straight from your terminal. Either way,
          you'll be running in under two minutes.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://ct.joshualevine.me/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--lagoon)] px-6 py-3 text-base font-semibold text-white no-underline shadow-lg shadow-[var(--lagoon)]/20 hover:opacity-90"
          >
            Sign Up
            <ArrowRight size={18} />
          </a>
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-6 py-3">
            <code className="text-sm font-semibold text-[var(--sea-ink)]">
              npx @joshjal/taskpilot register
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
