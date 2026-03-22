export function ParallelModeSection() {
  return (
    <div className="mb-14">
      <h3 className="mb-5 text-xl font-bold text-[var(--sea-ink)]">
        Parallel Mode
      </h3>
      <div className="card rounded-2xl p-6">
        <div className="space-y-3 text-sm text-[var(--sea-ink-soft)]">
          <p>
            Parallel mode launches{" "}
            <strong className="text-[var(--sea-ink)]">
              one agent per card or issue
            </strong>
            , each in an isolated git worktree. This lets multiple tasks be
            worked on simultaneously without conflicts.
          </p>
          <div className="rounded-lg border border-[var(--line)] p-3">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[var(--line)]">
                  <th className="pb-2 text-left font-semibold text-[var(--sea-ink)]">
                    Setting
                  </th>
                  <th className="pb-2 text-left font-semibold text-[var(--sea-ink)]">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--sea-ink-soft)]">
                <tr className="border-b border-[var(--line)]">
                  <td className="py-1.5">Max concurrency</td>
                  <td>1 to 5 agents (default: 3)</td>
                </tr>
                <tr className="border-b border-[var(--line)]">
                  <td className="py-1.5">Per-agent cost budget</td>
                  <td>$2 (Claude provider)</td>
                </tr>
                <tr className="border-b border-[var(--line)]">
                  <td className="py-1.5">Isolation</td>
                  <td>Each agent runs in its own git worktree</td>
                </tr>
                <tr>
                  <td className="py-1.5">Merge strategy</td>
                  <td>Sequential merge after agents complete</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            After all agents finish, changes are merged back one at a time. If
            two agents modify the same files, a merge conflict may occur. The
            summary panel reports any conflicts so you can resolve them
            manually.
          </p>
        </div>
      </div>
    </div>
  );
}
