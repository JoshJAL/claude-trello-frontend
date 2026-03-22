import { ArrowRight } from "lucide-react";

export function SessionFlow() {
  return (
    <div className="mb-14">
      <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
        Running a Session
      </h3>
      <div className="card rounded-2xl p-6">
        <div className="space-y-4 text-sm text-[var(--sea-ink-soft)]">
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--foam)] text-xs font-bold text-[var(--lagoon)]">
              1
            </div>
            <p>
              <strong className="text-[var(--sea-ink)]">
                Select your tasks
              </strong>{" "}
              — Pick a Trello board, GitHub repo, or GitLab project from the
              dashboard. Review the active cards or issues that the agent will
              work through.
            </p>
          </div>
          <div className="flex justify-center">
            <ArrowRight size={16} className="text-[var(--shore-line)]" />
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--foam)] text-xs font-bold text-[var(--lagoon)]">
              2
            </div>
            <p>
              <strong className="text-[var(--sea-ink)]">
                Choose a mode
              </strong>{" "}
              — Select{" "}
              <strong className="text-[var(--sea-ink)]">Sequential</strong>{" "}
              (one card at a time) or{" "}
              <strong className="text-[var(--sea-ink)]">Parallel</strong>{" "}
              (one agent per card, running concurrently in isolated git
              worktrees). Adjust the concurrency slider if using parallel mode.
            </p>
          </div>
          <div className="flex justify-center">
            <ArrowRight size={16} className="text-[var(--shore-line)]" />
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--foam)] text-xs font-bold text-[var(--lagoon)]">
              3
            </div>
            <p>
              <strong className="text-[var(--sea-ink)]">
                Pick your AI provider
              </strong>{" "}
              — If you have multiple provider keys configured, a dropdown lets
              you choose which model to use. Defaults to Claude.
            </p>
          </div>
          <div className="flex justify-center">
            <ArrowRight size={16} className="text-[var(--shore-line)]" />
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--foam)] text-xs font-bold text-[var(--lagoon)]">
              4
            </div>
            <p>
              <strong className="text-[var(--sea-ink)]">
                Start the session
              </strong>{" "}
              — Click{" "}
              <strong className="text-[var(--sea-ink)]">Start Session</strong>.
              The session log streams AI output in real time. In sequential
              mode you see a single log. In parallel mode each agent gets its
              own tab with a status grid showing progress.
            </p>
          </div>
          <div className="flex justify-center">
            <ArrowRight size={16} className="text-[var(--shore-line)]" />
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--foam)] text-xs font-bold text-[var(--lagoon)]">
              5
            </div>
            <p>
              <strong className="text-[var(--sea-ink)]">
                Tasks update automatically
              </strong>{" "}
              — As the agent finishes items, your task source updates in real
              time. Trello cards move to Done. GitHub/GitLab task list items
              get checked off. The board panel refreshes automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
