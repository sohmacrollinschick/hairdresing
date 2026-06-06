import SectionHeader from "../../components/common/SectionHeader";
import StylistCard from "../../components/cards/StylistCard";
import { stylists } from "../../constants/salonData";

export default function About() {
  return (
    <section className="section">
      <SectionHeader eyebrow="About" title="A modern salon built around care, craft, and calm." description="Aurora Luxe Salon blends premium hair dressing with a thoughtful client experience, from consultation to final styling." />
      <div className="grid gap-6 lg:grid-cols-3">
        {["Salon Story", "Mission", "Vision"].map((title) => (
          <article key={title} className="border border-salonPrimary/50 bg-salonWhite p-6">
            <h2 className="font-display text-2xl font-bold text-salonDark">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-salonText">We create elegant, healthy, long-lasting styles with respectful consultation, clean technique, and premium products.</p>
          </article>
        ))}
      </div>
      <div className="mt-16">
        <SectionHeader eyebrow="Team" title="Meet the stylists" />
        <div className="grid gap-6 md:grid-cols-2">
          {stylists.map((stylist) => <StylistCard key={stylist.id} stylist={stylist} />)}
        </div>
      </div>
      <div className="mt-16 bg-salonDark p-8 text-salonWhite">
        <h2 className="font-display text-3xl font-bold text-salonPrimary">Why choose us</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {["Premium products", "Textured hair expertise", "Clean scheduling", "Luxury finish"].map((item) => <p key={item} className="border border-salonPrimary/30 p-4 text-sm">{item}</p>)}
        </div>
      </div>
    </section>
  );
}
