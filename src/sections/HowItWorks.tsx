import {
  UserPlus,
  LayoutList,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign up and connect",
    description:
      "Create an account, connect your Trello, and add your Anthropic API key. Takes about two minutes.",
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
    <section id="how-it-works" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-lagoon">
            How It Works
          </p>
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            Four steps, then Claude takes over
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-lagoon/10 text-lagoon">
                <step.icon size={26} />
              </div>
              <div className="mb-2 text-xs font-bold text-lagoon">
                Step {i + 1}
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
