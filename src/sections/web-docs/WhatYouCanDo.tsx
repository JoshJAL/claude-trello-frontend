import { Link2, Cpu, LayoutDashboard, GitBranch } from "lucide-react";
import { FeatureCard } from "./cards";

export function WhatYouCanDo() {
  return (
    <div className="mb-14">
      <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
        What You Can Do
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <FeatureCard icon={Link2} title="Connect Task Sources">
          <p>
            Link your Trello, GitHub, or GitLab accounts to pull in boards,
            repos, and issues as tasks for the AI to work through.
          </p>
        </FeatureCard>
        <FeatureCard icon={Cpu} title="Choose AI Providers">
          <p>
            Configure API keys for Claude, OpenAI, or Groq. Switch between
            providers per session depending on your needs.
          </p>
        </FeatureCard>
        <FeatureCard icon={LayoutDashboard} title="Run Sessions">
          <p>
            Select a board or repo, review the tasks, and launch an AI coding
            session. Watch progress in real time as items get checked off.
          </p>
        </FeatureCard>
        <FeatureCard icon={GitBranch} title="Parallel Agents">
          <p>
            Run multiple agents simultaneously — one per card or issue — in
            isolated git worktrees. Changes merge back automatically.
          </p>
        </FeatureCard>
      </div>
    </div>
  );
}
