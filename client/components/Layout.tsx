import { Link, useLocation } from "react-router-dom";

export default function Layout({ title, children }: { title: string; children: React.ReactNode }) {
  const location = useLocation();
  const isEventsPage = location.pathname === "/events";

  return (
    <main className="min-h-screen w-full bg-brand-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <header className="flex items-center justify-between mb-6 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-semibold text-brand-yellow drop-shadow-md tracking-wide">
            {title}
          </h1>
          {!isEventsPage && (
            <Link
              to="/events"
              className="text-brand-yellow hover:underline underline-offset-4 text-sm md:text-base"
            >
              View All
            </Link>
          )}
        </header>
        {children}
      </div>
    </main>
  );
}
