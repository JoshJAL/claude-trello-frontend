import { Nav } from "../sections/Nav";
import { Footer } from "../sections/Footer";
import { Link } from "../router";
import { ArrowLeft, ExternalLink } from "lucide-react";

const tools = [
  {
    name: "Agent Maker",
    description:
      "Build, customize, and deploy AI agents with a visual editor. Define tools, prompts, and workflows — then publish your agent for others to use.",
    appUrl: "https://agent.task-pilot.dev",
    docsUrl: "https://agent.task-pilot.dev/docs",
  },
];

export function OtherToolsPage() {
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
            Other Tools
          </h1>
          <p className="mb-10 text-sm text-[var(--sea-ink-soft)]">
            Explore other tools in the TaskPilot ecosystem.
          </p>

          <div className="space-y-6">
            {tools.map((tool) => (
              <div key={tool.name} className="card rounded-md p-6 space-y-3">
                <h2 className="text-xl font-bold text-[var(--sea-ink)]">
                  {tool.name}
                </h2>
                <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">
                  {tool.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={tool.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-[var(--lagoon)] px-4 py-2 text-sm font-semibold text-white no-underline hover:opacity-90"
                  >
                    Open App
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={tool.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--chip-bg)] px-4 py-2 text-sm font-semibold text-[var(--sea-ink)] no-underline hover:bg-[var(--foam)]"
                  >
                    Documentation
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
