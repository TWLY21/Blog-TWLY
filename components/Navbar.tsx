import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" }
];

export default function Navbar() {
  return (
    <header className="sticky top-3 z-20">
      <nav className="surface-solid mx-auto flex max-w-[1680px] items-center justify-between border border-border bg-surface px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display inline-flex h-7 w-7 items-center justify-center border border-border bg-bg text-xs font-bold text-text">
            IT
          </span>
          <span className="font-display text-xl font-semibold text-text">Ives Tan Kian Hang</span>
        </Link>

        <div className="flex items-center gap-3 md:gap-5 text-sm text-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="border-b border-transparent pb-0.5 transition hover:border-accent hover:text-text">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
