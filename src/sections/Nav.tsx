import { useState, useEffect, useRef } from "react";
import { Terminal, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "../router";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#web", label: "Web App" },
  { href: "#cli", label: "CLI" },
  { href: "#self-hosting", label: "Self-Host" },
  { href: "#roadmap", label: "Roadmap" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between py-3 sm:py-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-[var(--sea-ink)] no-underline"
        >
          <Terminal size={20} className="text-[var(--lagoon)]" />
          TaskPilot
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://account.task-pilot.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[var(--lagoon)] px-4 py-2 text-sm font-semibold text-white no-underline hover:opacity-90"
          >
            Open App
          </a>
          <ThemeToggle />

          <div ref={menuRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="rounded-md border border-[var(--chip-line)] bg-[var(--chip-bg)] p-2 text-[var(--sea-ink)] transition hover:-translate-y-0.5"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-2 min-w-[180px] rounded-md border border-[var(--line)] bg-[var(--header-bg)] py-2 shadow-lg backdrop-blur-xl">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={close}
                    className="block px-4 py-2.5 text-sm font-semibold text-[var(--sea-ink-soft)] no-underline hover:bg-[var(--foam)] hover:text-[var(--sea-ink)]"
                  >
                    {label}
                  </a>
                ))}
                <Link
                  to="/ai-models"
                  onClick={close}
                  className="block px-4 py-2.5 text-sm font-semibold text-[var(--sea-ink-soft)] no-underline hover:bg-[var(--foam)] hover:text-[var(--sea-ink)]"
                >
                  AI Models
                </Link>
                <Link
                  to="/other-tools"
                  onClick={close}
                  className="block px-4 py-2.5 text-sm font-semibold text-[var(--sea-ink-soft)] no-underline hover:bg-[var(--foam)] hover:text-[var(--sea-ink)]"
                >
                  Other Tools
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
