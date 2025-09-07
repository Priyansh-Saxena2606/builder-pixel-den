import Layout from "@/components/Layout";
import { FestivalCard } from "@/components/FestivalCard";
import { festivals } from "@/data/festivals";
import ArchiveSection from "@/components/ArchiveSection";

export default function Index() {
  return (
    <>
      <Layout title="Events and Festivals in Sikkim">
        <div className="space-y-6">
          {festivals.slice(0, 3).map((item) => (
            <FestivalCard key={item.id} item={item} />
          ))}
        </div>
      </Layout>
      <ArchiveSection />
    </>
  );
}
