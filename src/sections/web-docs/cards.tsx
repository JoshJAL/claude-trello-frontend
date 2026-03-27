export function StepCard({
  number,
  icon: Icon,
  title,
  children,
}: {
  number: number;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card rounded-md p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--lagoon)] text-sm font-bold text-white">
          {number}
        </span>
        <Icon size={20} className="text-[var(--lagoon)]" />
        <h4 className="text-base font-semibold text-[var(--sea-ink)]">
          {title}
        </h4>
      </div>
      <div className="ml-11 space-y-3 text-sm text-[var(--sea-ink-soft)]">
        {children}
      </div>
    </div>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-flat rounded-sm p-5">
      <div className="mb-2 flex items-center gap-2">
        <Icon size={18} className="text-[var(--lagoon)]" />
        <h4 className="text-sm font-semibold text-[var(--sea-ink)]">
          {title}
        </h4>
      </div>
      <div className="text-sm text-[var(--sea-ink-soft)]">{children}</div>
    </div>
  );
}

export function SourceCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card rounded-md p-6">
      <h4 className="mb-3 flex items-center gap-2 text-base font-semibold text-[var(--sea-ink)]">
        <Icon size={18} className="text-[var(--lagoon)]" />
        {title}
      </h4>
      <div className="space-y-2 text-sm text-[var(--sea-ink-soft)]">
        {children}
      </div>
    </div>
  );
}
