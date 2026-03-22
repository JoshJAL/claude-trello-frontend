import {
  History,
  BarChart3,
  GitPullRequest,
  Workflow,
  Radio,
} from "lucide-react";
import { FeatureCard } from "./cards";

export function AdvancedFeatures() {
  return (
    <div className="mb-14">
      <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
        Advanced Features
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <FeatureCard icon={History} title="Session History">
          <p>
            The <strong className="text-[var(--sea-ink)]">/history</strong> page
            lets you review every past AI agent session. Filter by task source,
            status, or date range. Expand any session to replay the full event
            log and see exactly what the agent did, which tasks it completed, and
            how long each step took.
          </p>
        </FeatureCard>
        <FeatureCard icon={BarChart3} title="Analytics & Budget">
          <p>
            The <strong className="text-[var(--sea-ink)]">/analytics</strong>{" "}
            page provides a spending dashboard with per-provider cost breakdowns,
            monthly totals, and usage trends. Set budget limits per provider to
            prevent runaway spending — sessions will pause automatically when a
            budget threshold is reached.
          </p>
        </FeatureCard>
        <FeatureCard icon={Workflow} title="Task Dependencies">
          <p>
            TaskPilot automatically detects{" "}
            <code className="rounded border border-[var(--line)] bg-[var(--surface)] px-1 text-xs">
              Depends on #N
            </code>{" "}
            references in your task descriptions. Dependent tasks are
            topologically ordered so the agent works through prerequisites first.
            Blocked tasks show a visual indicator on the board panel until their
            dependencies are resolved.
          </p>
        </FeatureCard>
        <FeatureCard icon={GitPullRequest} title="PR Automation">
          <p>
            After a session completes, TaskPilot can automatically create a pull
            request (or merge request on GitLab) with the agent's changes.
            Enable this globally in{" "}
            <strong className="text-[var(--sea-ink)]">Settings</strong> or
            per-session with the{" "}
            <code className="rounded border border-[var(--line)] bg-[var(--surface)] px-1 text-xs">
              --pr
            </code>{" "}
            flag. PR titles and descriptions are generated from the completed
            tasks.
          </p>
        </FeatureCard>
        <FeatureCard icon={Radio} title="Real-Time Updates">
          <p>
            When available, TaskPilot registers webhooks with your task source
            for instant updates — no polling delay. A connection status indicator
            in the dashboard header shows whether the real-time link is active.
            Falls back gracefully to polling if webhooks are unavailable.
          </p>
        </FeatureCard>
      </div>
    </div>
  );
}
