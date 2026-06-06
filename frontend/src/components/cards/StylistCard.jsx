import { MapPin, Phone } from "lucide-react";

export default function StylistCard({ stylist }) {
  return (
    <article className="border border-salonPrimary/50 bg-salonWhite p-4 shadow-sm">
      <img src={stylist.photo} alt={stylist.name} className="h-72 w-full object-cover" />
      <div className="pt-5">
        <h3 className="font-display text-2xl font-bold text-salonDark">{stylist.name}</h3>
        <p className="mt-2 text-sm font-semibold text-salonAccent">{stylist.specialization}</p>
        <p className="mt-4 flex items-center gap-2 text-sm text-salonText">
          <MapPin size={16} aria-hidden="true" />
          {stylist.location}
        </p>
        <p className="mt-2 flex items-center gap-2 text-sm text-salonText">
          <Phone size={16} aria-hidden="true" />
          {stylist.phone}
        </p>
      </div>
    </article>
  );
}
