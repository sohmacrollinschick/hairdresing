import ServiceCard from "../../components/cards/ServiceCard";
import SectionHeader from "../../components/common/SectionHeader";
import ServiceCategoryList from "../../components/services/ServiceCategoryList";
import { featuredServices } from "../../constants/salonData";

export default function Services() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Services" title="Luxury hair and beauty menu" description="Each service stores name, description, price, duration, category, and image for Supabase-backed management." />
      <ServiceCategoryList />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {featuredServices.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>
    </section>
  );
}
