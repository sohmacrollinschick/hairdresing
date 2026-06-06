import PrimaryButton from "../../components/buttons/PrimaryButton";
import SectionHeader from "../../components/common/SectionHeader";
import ServiceCard from "../../components/cards/ServiceCard";
import StylistCard from "../../components/cards/StylistCard";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import { featuredServices, stylists, testimonials } from "../../constants/salonData";

export default function Home() {
  return (
    <>
      <section className="bg-salonDark text-salonWhite">
        <div className="section grid min-h-[76vh] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Premium beauty salon</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight md:text-7xl">Aurora Luxe Salon</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-salonWhite/75">Modern hair artistry for braids, color, wigs, bridal styling, men cuts, kids hairstyles, and luxury treatment packages.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton to="/book">Book appointment</PrimaryButton>
              <PrimaryButton to="/services" className="border border-salonPrimary/40 bg-transparent text-salonWhite hover:bg-salonWhite hover:text-salonDark">View services</PrimaryButton>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1100&q=80" alt="Luxury salon interior" className="h-[520px] w-full object-cover shadow-luxe" />
        </div>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Services preview" title="Signature salon rituals" description="A focused menu for protective styling, color, cuts, treatments, and event-ready beauty." />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
      </section>
      <section className="bg-salonWhite">
        <div className="section">
          <SectionHeader eyebrow="Featured stylists" title="Specialists with a polished hand" />
          <div className="grid gap-6 md:grid-cols-2">
            {stylists.map((stylist) => <StylistCard key={stylist.id} stylist={stylist} />)}
          </div>
        </div>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Testimonials" title="Loved by regulars and brides" />
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="border border-salonPrimary/50 bg-salonWhite p-6 text-lg leading-8 text-salonText shadow-sm">
              "{item.quote}"
              <footer className="mt-4 text-sm font-bold text-salonAccent">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
      <section className="bg-salonDark text-salonWhite">
        <div className="section grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">Booking</p>
            <h2 className="mt-3 font-display text-4xl font-bold">Reserve your next transformation.</h2>
          </div>
          <PrimaryButton to="/book">Choose a time</PrimaryButton>
        </div>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Gallery preview" title="Recent finishes" />
        <GalleryGrid />
      </section>
    </>
  );
}
