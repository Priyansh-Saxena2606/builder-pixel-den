import Layout from "@/components/Layout";
import { FestivalCard } from "@/components/FestivalCard";
import { festivals } from "@/data/festivals";

export default function Index() {
  return (
    <Layout title="Events and Festivals in Sikkim">
      <div className="space-y-6">
        {festivals.map((item) => (
          <FestivalCard key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}
