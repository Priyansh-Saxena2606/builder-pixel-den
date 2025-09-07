import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Slide {
  key: string;
  title: string;
  description: string;
  image: string;
}

const SLIDES: Slide[] = [
  {
    key: "manuscripts",
    title: "Manuscripts",
    description:
      "Digitized palm-leaf and paper manuscripts documenting the cultural and spiritual heritage of Sikkim.",
    image:
      "https://images.pexels.com/photos/8957697/pexels-photo-8957697.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    key: "chants",
    title: "Chants",
    description:
      "Recordings and texts of sacred mantras and liturgies preserved from monasteries and local communities.",
    image:
      "https://images.pexels.com/photos/31454402/pexels-photo-31454402.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    key: "murals",
    title: "Murals",
    description:
      "High‑resolution images of monastery murals and sacred art, restored and catalogued for study.",
    image:
      "https://images.pexels.com/photos/8348265/pexels-photo-8348265.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function ArchiveSection() {
  const slides = useMemo(() => SLIDES, []);
  const [index, setIndex] = useState(0);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section aria-label="Digital Archive" className="w-full min-h-screen bg-brand-black text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-16 md:mb-20 flex items-center justify-between gap-8">
          <div className="flex items-baseline flex-wrap gap-x-8 gap-y-2">
            <h2 className="text-3xl md:text-5xl font-semibold text-brand-yellow drop-shadow-md">
              Digital Archive
            </h2>
            <span className="text-white text-base md:text-xl">Cultural Library For Sikkim</span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const query = q.trim();
              if (query) navigate(`/events?query=${encodeURIComponent(query)}`);
            }}
            className="hidden sm:flex items-center gap-2"
            role="search"
            aria-label="Search cultural content"
          >
            <div className="relative">
              <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-yellow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search manuscripts, murals, chants, monasteries..."
                className="pl-10 pr-3 py-2 rounded-lg bg-[hsl(var(--brand-black))] text-white border border-[var(--brand-yellow-hex)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow-hex)]/70 placeholder:text-neutral-400 w-80"
              />
            </div>
            <button type="submit" className="px-3 py-2 rounded-lg bg-[var(--brand-yellow-hex)] text-[hsl(var(--brand-black))] font-semibold hover:brightness-110 transition">
              Search
            </button>
          </form>
        </header>
        <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s) => (
              <ArchiveSlide key={s.key} slide={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchiveSlide({ slide }: { slide: Slide }) {
  return (
    <div className="w-full shrink-0 group rounded-2xl transition-all duration-300 transform-gpu hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,193,7,0.6)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className="relative h-72 md:h-[22rem] rounded-xl overflow-hidden border-2 border-[var(--brand-red-hex)] shadow-[0_0_15px_rgba(213,0,0,0.6)] transition-shadow duration-300 group-hover:shadow-[0_0_25px_rgba(255,193,7,0.9)]">
          <div className="absolute inset-0 scale-[1.01] transition-transform duration-300 group-hover:scale-105">
            {/* marquee track with two copies to create seamless pan */}
            <div className="archive-marquee h-full w-[200%]">
              <img src={slide.image} alt={slide.title} className="h-full w-1/2 object-cover" />
              <img src={slide.image} alt="" aria-hidden className="h-full w-1/2 object-cover" />
            </div>
          </div>
        </div>
        <div className="p-4 md:p-0 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-yellow drop-shadow md:ml-2">{slide.title}</h2>
          <p className="mt-5 text-neutral-300 leading-relaxed max-w-prose">
            {slide.description}
          </p>
        </div>
      </div>
    </div>
  );
}
