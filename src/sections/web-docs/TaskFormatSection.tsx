import { Trello, Github, Gitlab } from "lucide-react";

export function TaskFormatSection() {
  return (
    <div className="mb-14">
      <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
        Task Format by Source
      </h3>
      <div className="space-y-4">
        <div className="card rounded-md p-5">
          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-[var(--sea-ink)]">
            <Trello size={16} className="text-[var(--lagoon)]" />
            Trello
          </h4>
          <p className="mb-3 text-sm text-[var(--sea-ink-soft)]">
            Cards with checklists. Each checklist item becomes a task for the
            agent. Structure your board with lists like "To Do", "In
            Progress", and "Done".
          </p>
          <pre className="overflow-x-auto rounded-md border border-[var(--line)] bg-[var(--code-bg)] p-5 text-sm leading-relaxed text-[var(--code-text)]">
            <code>{`Board: My Project
├── To Do
│   ├── Card: Fix auth bug
│   │   └── Checklist:
│   │       ├── [ ] Fix token refresh logic
│   │       ├── [ ] Add error handling
│   │       └── [ ] Write tests
│   └── Card: Add dark mode
│       └── Checklist:
│           ├── [ ] Add theme toggle
│           └── [ ] Update color variables
└── Done
    └── (completed cards moved here)`}</code>
          </pre>
        </div>

        <div className="card rounded-md p-5">
          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-[var(--sea-ink)]">
            <Github size={16} className="text-[var(--lagoon)]" />
            GitHub /{" "}
            <Gitlab size={16} className="text-[var(--lagoon)]" />
            GitLab
          </h4>
          <p className="mb-3 text-sm text-[var(--sea-ink-soft)]">
            Issues with markdown task lists. Write task lists in the issue body
            and the agent will check them off as it works.
          </p>
          <pre className="overflow-x-auto rounded-md border border-[var(--line)] bg-[var(--code-bg)] p-5 text-sm leading-relaxed text-[var(--code-text)]">
            <code>{`Issue #42: Fix authentication bug

Description:
The token refresh flow is broken. Fix the following:

- [ ] Fix token refresh logic in auth.ts
- [ ] Add error handling for expired tokens
- [ ] Write unit tests for the refresh flow
- [ ] Update API docs with new error codes`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
