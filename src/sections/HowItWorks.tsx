import { UserPlus, LayoutList, Cpu, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign up and connect",
    description:
      "Create an account, connect a task source (Trello, GitHub, or GitLab) and add an AI provider key. Takes about two minutes.",
  },
  {
    icon: LayoutList,
    title: "Pick a board",
    description:
      "Select one of your Trello boards. The app shows all cards and their checklist items.",
  },
  {
    icon: Cpu,
    title: "Claude gets to work",
    description:
      "Claude Code launches in your project directory, reads each card, and starts making the code changes.",
  },
  {
    icon: CheckCircle2,
    title: "Items get checked off",
    description:
      "As Claude completes each task, it marks the checklist item done on Trello. Finished cards move to Done.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="mb-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--kicker)]">
            How It Works
          </p>
          <h2 className="text-3xl font-extrabold text-[var(--sea-ink)] sm:text-4xl">
            Four steps, then Claude takes over
          </h2>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--lagoon)]/10 text-[var(--lagoon)]">
                <step.icon size={26} />
              </div>
              <div className="mb-2 text-xs font-bold text-[var(--kicker)]">
                Step {i + 1}
              </div>
              <h3 className="mb-3 text-lg font-bold text-[var(--sea-ink)]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
