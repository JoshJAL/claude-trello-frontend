import { CheckCircle, Clock, Circle } from "lucide-react";

type Status = "done" | "in-progress" | "planned";

interface RoadmapItem {
  title: string;
  description: string;
  status: Status;
}

interface RoadmapCategory {
  name: string;
  items: RoadmapItem[];
}

const ROADMAP: RoadmapCategory[] = [
  {
    name: "Legal & Compliance",
    items: [
      {
        title: "Privacy Policy",
        description:
          "A clear privacy policy explaining what data we collect, how it's stored, and how it's used.",
        status: "done",
      },
      {
        title: "Terms of Service",
        description:
          "User agreement covering acceptable use, liability, and service terms.",
        status: "done",
      },
      {
        title: "Cookie Policy & Consent Banner",
        description:
          "Documentation of cookies used (session auth, preferences) and a GDPR-compliant consent popup.",
        status: "done",
      },
      {
        title: "Data Collection Explainer",
        description:
          "User-facing page explaining exactly what we collect, why, and how long it's retained.",
        status: "done",
      },
    ],
  },
  {
    name: "User Experience",
    items: [
      {
        title: "Feature Request Form",
        description:
          "In-app form for users to submit feature ideas and vote on existing requests.",
        status: "done",
      },
      {
        title: "UI Polish & Consistency",
        description:
          "Visual refinements, animation improvements, responsive fixes, and design system cleanup across all pages.",
        status: "in-progress",
      },
      {
        title: "Bug Fixes & Stability",
        description:
          "Ongoing fixes for reported issues, edge cases, and error handling improvements.",
        status: "in-progress",
      },
    ],
  },
  {
    name: "Core Features",
    items: [
      {
        title: "Multi-AI Provider Support",
        description:
          "Run sessions with Claude, OpenAI (GPT-4o), or Groq (Llama 3.3) — each with their own API key.",
        status: "done",
      },
      {
        title: "Parallel Agents",
        description:
          "Run one agent per card/issue concurrently in isolated git worktrees with configurable concurrency.",
        status: "done",
      },
      {
        title: "GitHub & GitLab Integration",
        description:
          "Use GitHub issues and GitLab issues as task sources alongside Trello boards.",
        status: "done",
      },
      {
        title: "Branch Selection",
        description:
          "Select an existing branch before starting a session instead of always auto-generating one.",
        status: "done",
      },
      {
        title: "Session History & Replay",
        description:
          "Browse past sessions, view event logs, filter by source/status, and retry failed sessions.",
        status: "done",
      },
      {
        title: "Cost Tracking & Budget",
        description:
          "Per-session cost breakdown, monthly spending analytics, and configurable budget limits.",
        status: "done",
      },
      {
        title: "PR/MR Automation",
        description:
          "Automatically create pull requests or merge requests after sessions complete.",
        status: "done",
      },
      {
        title: "Real-Time Webhooks",
        description:
          "Webhook-driven updates from Trello, GitHub, and GitLab with polling fallback.",
        status: "done",
      },
      {
        title: "Cloud Mode",
        description:
          "Run sessions entirely via GitHub/GitLab APIs without a local checkout.",
        status: "done",
      },
      {
        title: "Desktop Application",
        description:
          "A native desktop app with the same interface as the web app, enabling local development without needing the CLI.",
        status: "planned",
      },
      {
        title: "Google Drive Workspace",
        description:
          "Connect a Google Drive folder as a workspace. Agents can read, write, and edit files — including Google Sheets — directly in your Drive.",
        status: "planned",
      },
      {
        title: "OneDrive Workspace",
        description:
          "Connect a OneDrive folder as a workspace. Agents can read, write, and edit files — including Excel workbooks — directly in your OneDrive.",
        status: "planned",
      },
    ],
  },
];

const STATUS_CONFIG: Record<
  Status,
  { icon: typeof CheckCircle; label: string; color: string; bg: string }
> = {
  done: {
    icon: CheckCircle,
    label: "Done",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  "in-progress": {
    icon: Clock,
    label: "In Progress",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  planned: {
    icon: Circle,
    label: "Planned",
    color: "text-[var(--shore-line)]",
    bg: "bg-[var(--foam)]",
  },
};

function StatusBadge({ status }: { status: Status }) {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${config.color} ${config.bg}`}
    >
      <Icon size={12} />
      {config.label}
    </span>
  );
}

export function Roadmap() {
  let done = 0;
  let total = 0;
  for (const cat of ROADMAP) {
    for (const item of cat.items) {
      total++;
      if (item.status === "done") done++;
    }
  }
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;
  const inProgress = ROADMAP.flatMap((c) => c.items).filter(
    (i) => i.status === "in-progress",
  ).length;
  const planned = total - done - inProgress;

  return (
    <section id="roadmap" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--kicker)]">
            Roadmap
          </p>
          <h2 className="mb-4 text-3xl font-extrabold text-[var(--sea-ink)] sm:text-4xl">
            What we've shipped and what's next
          </h2>
          <p className="text-lg text-[var(--sea-ink-soft)]">
            Track our progress and see what's coming.
          </p>
        </div>

        {/* Progress bar */}
        <div className="card mb-10 rounded-2xl p-6">
          <div className="mb-3 flex items-baseline justify-between">
            <span className="text-sm font-semibold text-[var(--sea-ink)]">
              Overall progress
            </span>
            <span className="text-sm text-[var(--sea-ink-soft)]">
              {done}/{total} complete
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-[var(--foam)]">
            <div
              className="h-full rounded-full bg-[var(--lagoon)] transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="mt-3 flex gap-4 text-xs text-[var(--sea-ink-soft)]">
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              {done} done
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
              {inProgress} in progress
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--shore-line)]" />
              {planned} planned
            </span>
          </div>
        </div>

        {/* Categories */}
        {ROADMAP.map((category) => (
          <div key={category.name} className="mb-8">
            <h3 className="mb-3 text-lg font-bold text-[var(--sea-ink)]">
              {category.name}
            </h3>
            <div className="space-y-2">
              {category.items.map((item) => (
                <div
                  key={item.title}
                  className="card flex items-start gap-4 rounded-xl p-4"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-semibold text-[var(--sea-ink)]">
                        {item.title}
                      </h4>
                      <StatusBadge status={item.status} />
                    </div>
                    <p className="mt-1 text-sm text-[var(--sea-ink-soft)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="card rounded-2xl p-6 text-center">
          <p className="text-sm text-[var(--sea-ink-soft)]">
            Have a feature request?{" "}
            <a
              href="https://github.com/JoshJAL/claude-trello/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--lagoon)] hover:underline"
            >
              Open an issue on GitHub
            </a>{" "}
            and let us know what you'd like to see.
          </p>
        </div>
      </div>
    </section>
  );
}
