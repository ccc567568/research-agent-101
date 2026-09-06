import Link from "next/link";
import { SearchCommand, SearchNavButton } from "@/components/learning/search-command";
import { ThemeToggle } from "@/components/learning/theme-toggle";

const NAV_ITEMS = [
  { href: "/learn/start-here", label: "Learn" },
  { href: "/research", label: "Research" },
  { href: "/agents", label: "Agents" },
  { href: "/tools", label: "Tools" },
  { href: "/cheatsheets", label: "Cheatsheets" },
  { href: "/glossary", label: "Glossary" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center gap-4 px-4 lg:px-6">
        <Link
          href="/"
          className="shrink-0 font-semibold tracking-tight hover:opacity-80"
        >
          Research Agent 101
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <SearchNavButton />
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <SearchCommand />
          <ThemeToggle />
          <Link
            href="#"
            className="hidden rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:block"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
