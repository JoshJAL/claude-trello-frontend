import {
  Terminal,
  Globe,
  ShieldCheck,
  Zap,
  GitBranch,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "CLI or Web App",
    description:
      "Use the web dashboard for a visual experience, or the CLI to work entirely from your terminal. Your choice.",
  },
  {
    icon: Zap,
    title: "Fully Automated",
    description:
      "Claude reads cards, makes code changes, checks off items, and moves cards to Done. You watch it happen.",
  },
  {
    icon: ShieldCheck,
    title: "Your Keys, Encrypted",
    description:
      "Your Anthropic API key is encrypted at rest with AES-256-GCM. It's only decrypted for the duration of a session.",
  },
  {
    icon: Globe,
    title: "Zero Setup Hosting",
    description:
      "The app is deployed and ready to use. No server to run, no Docker, no infra. Just sign up and go.",
  },
  {
    icon: GitBranch,
    title: "Works on Any Codebase",
    description:
      "Point Claude at any local directory. It has full read/write access to your files during a session.",
  },
  {
    icon: MessageCircle,
    title: "Give Claude Context",
    description:
      'Send initial instructions like "check the dev branch for comparison" or "focus on backend cards first".',
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-y border-shore/40 bg-gradient-to-b from-foam/50 to-sand px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-lagoon">
            Features
          </p>
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            Everything you need, nothing you don't
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-shore/50 bg-white/70 p-6 backdrop-blur-sm transition hover:shadow-lg hover:shadow-lagoon/5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-lagoon/10 text-lagoon">
                <feature.icon size={20} />
              </div>
              <h3 className="mb-2 text-base font-bold text-ink">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
