import { useEffect, useMemo, useState } from "react";

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

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section aria-label="Digital Archive" className="w-full min-h-screen bg-brand-black text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-brand-yellow drop-shadow-md">Digital Archive</h2>
            <p className="text-sm md:text-base text-neutral-300">Cultural Library for Sikkim</p>
          </div>
        </header>
        <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
          <div
            className="flex transition-transform duration-700 ease-out"
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
    <div className="w-full shrink-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <div className="group relative h-72 md:h-[22rem] rounded-xl overflow-hidden ring-2 ring-[color:var(--brand-red-hex)] shadow-[0_0_15px_rgba(213,0,0,0.6)]">
          <div className="absolute inset-0 scale-[1.01] transition-transform duration-300 group-hover:scale-105">
            {/* marquee track with two copies to create seamless pan */}
            <div className="archive-marquee h-full w-[200%]">
              <img src={slide.image} alt={slide.title} className="h-full w-1/2 object-cover" />
              <img src={slide.image} alt="" aria-hidden className="h-full w-1/2 object-cover" />
            </div>
          </div>
        </div>
        <div className="p-4 md:p-0">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-yellow drop-shadow">{slide.title}</h2>
          <p className="mt-3 text-neutral-300 leading-relaxed max-w-prose">
            {slide.description}
          </p>
        </div>
      </div>
    </div>
  );
}
