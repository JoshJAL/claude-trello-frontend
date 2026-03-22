import { Trello, Github, Gitlab } from "lucide-react";
import { SourceCard } from "./cards";

export function DashboardSources() {
  return (
    <div className="mb-14">
      <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
        Dashboard
      </h3>
      <div className="space-y-4">
        <SourceCard icon={Trello} title="Trello">
          <p>
            Navigate to <strong className="text-[var(--sea-ink)]">Trello</strong> in
            the sidebar to see your connected boards. Select a board to view
            its lists and cards.
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>Cards are grouped by list (To Do, In Progress, etc.)</li>
            <li>
              Each card shows its checklist items and completion progress
            </li>
            <li>Done cards are greyed out and excluded from sessions</li>
            <li>
              When all checklist items are complete, the card automatically
              moves to your Done list
            </li>
          </ul>
        </SourceCard>

        <SourceCard icon={Github} title="GitHub">
          <p>
            Navigate to <strong className="text-[var(--sea-ink)]">GitHub</strong> in
            the sidebar to browse your repositories. Select a repo to view
            its open issues.
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Issues with markdown task lists (
              <code className="rounded border border-[var(--line)] bg-[var(--surface)] px-1 text-xs">
                - [ ] item
              </code>
              ) are parsed into checkable items
            </li>
            <li>
              The agent checks off task list items in the issue body as it
              works
            </li>
            <li>
              The agent can close issues, leave comments, and create pull
              requests
            </li>
          </ul>
        </SourceCard>

        <SourceCard icon={Gitlab} title="GitLab">
          <p>
            Navigate to <strong className="text-[var(--sea-ink)]">GitLab</strong> in
            the sidebar to see your projects. Select a project to view its
            open issues.
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Works the same as GitHub — task lists in issue descriptions
              become checkable items
            </li>
            <li>
              The agent can close issues, add notes, and create merge requests
            </li>
          </ul>
        </SourceCard>
      </div>
    </div>
  );
}
