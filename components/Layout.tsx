import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 pb-12 pt-4 md:px-6 xl:px-8">
      <Navbar />
      <main className="mx-auto mt-8 w-full max-w-[1680px]">{children}</main>
      <footer className="mx-auto mt-12 w-full max-w-[1680px] border-t border-border py-6">
        <div className="text-sm text-muted">
          <p>&copy; 2026 Ives Tan Kian Hang. Software Development Engineer.</p>
        </div>
      </footer>
    </div>
  );
}
