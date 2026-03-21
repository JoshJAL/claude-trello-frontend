import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="border-t border-shore/40 bg-gradient-to-b from-foam/50 to-sand px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-ink sm:text-4xl">
          Ready to let Claude work through your board?
        </h2>
        <p className="mb-8 text-lg text-ink-soft">
          Sign up in the browser or go straight from your terminal. Either way,
          you'll be running in under two minutes.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://ct.joshualevine.me/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-lagoon px-6 py-3 text-base font-semibold text-white shadow-lg shadow-lagoon/20 transition hover:bg-lagoon-light hover:shadow-lagoon/30"
          >
            Sign Up
            <ArrowRight size={18} />
          </a>
          <div className="rounded-xl border border-shore bg-white/60 px-6 py-3">
            <code className="text-sm font-semibold text-ink">
              npx claude-trello-cli register
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
