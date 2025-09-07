import Layout from "@/components/Layout";
import { FestivalCard } from "@/components/FestivalCard";
import { festivals } from "@/data/festivals";

export default function Events() {
  return (
    <Layout title="Events and Festivals in Sikkim">
      <div className="grid grid-cols-1 gap-6">
        {festivals.map((item) => (
          <FestivalCard key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}
