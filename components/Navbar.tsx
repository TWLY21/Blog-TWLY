import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" }
];

export default function Navbar() {
  return (
    <header className="sticky top-3 z-30">
      <nav className="surface-solid mx-auto flex max-w-[1680px] flex-col gap-3 border border-border px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display inline-flex h-7 w-7 items-center justify-center border border-border bg-bg text-xs font-bold text-text">
            IT
          </span>
          <span className="font-display text-lg font-semibold leading-none text-text sm:text-xl">Ives Tan Kian Hang</span>
        </Link>

        <div className="flex w-full items-center justify-between gap-3 text-xs text-muted sm:w-auto sm:justify-end sm:gap-4 sm:text-sm md:gap-5">
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
