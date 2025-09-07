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
          {isEventsPage ? (
            <Link
              to="/"
              aria-label="Back to home"
              className="cta-button text-sm md:text-base"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              <span>Home</span>
            </Link>
          ) : (
            <Link
              to="/events"
              aria-label="View all festivals and events"
              className="cta-button text-sm md:text-base"
            >
              <span>View All</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          )}
        </header>
        {children}
      </div>
    </main>
  );
}
