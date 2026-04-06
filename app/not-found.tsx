import Link from "next/link";

export default function NotFound() {
  return (
    <section className="border border-border bg-surface p-8 text-center">
      <h1 className="font-display text-2xl font-semibold text-text">Page Not Found</h1>
      <p className="mt-2 text-muted">This page does not exist.</p>
      <Link href="/" className="mt-4 inline-block border border-border px-4 py-2 font-medium text-text transition hover:border-accent hover:text-accent">
        Go Home
      </Link>
    </section>
  );
}
