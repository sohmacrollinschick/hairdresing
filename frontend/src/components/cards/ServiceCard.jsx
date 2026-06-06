import { Clock } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

export default function ServiceCard({ service }) {
  return (
    <article className="overflow-hidden border border-salonPrimary/50 bg-salonWhite shadow-sm">
      <img src={service.image} alt={service.name} className="h-56 w-full object-cover" />
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-salonAccent">{service.category}</p>
        <h3 className="mt-2 font-display text-2xl font-bold text-salonDark">{service.name}</h3>
        <p className="mt-3 text-sm leading-6 text-salonText">{service.description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-salonPrimary/50 pt-4">
          <span className="font-bold text-salonDark">{formatCurrency(service.price)}</span>
          <span className="inline-flex items-center gap-2 text-sm text-salonText">
            <Clock size={16} aria-hidden="true" />
            {service.duration}
          </span>
        </div>
      </div>
    </article>
  );
}
