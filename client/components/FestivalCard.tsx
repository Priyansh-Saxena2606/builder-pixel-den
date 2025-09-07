import { cn } from "@/lib/utils";

export interface FestivalItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export function FestivalCard({ item, className }: { item: FestivalItem; className?: string }) {
  return (
    <div className={cn("festival-card rounded-xl overflow-hidden bg-transparent relative", className)}>
      <div className="flex flex-col sm:flex-row items-stretch pointer-events-auto">
        <img
          src={item.image}
          alt={item.title}
          className="w-full sm:w-56 h-40 sm:h-40 object-cover sm:rounded-l-xl"
          loading="eager"
        />
        <div className="flex-1 p-5 text-neutral-200">
          <h3 className="text-xl md:text-2xl font-semibold text-white">{item.title}</h3>
          <p className="text-sm md:text-base text-brand-yellow mt-1">{item.date}</p>
          <p className="mt-2 text-sm md:text-base leading-relaxed text-neutral-300">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
