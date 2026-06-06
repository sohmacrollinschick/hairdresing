import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-salonDark text-salonWhite">
      <div className="section grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h2 className="font-display text-3xl font-bold text-salonPrimary">Aurora Luxe Salon</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-salonWhite/70">Premium hair dressing, protective styling, color artistry, and bridal beauty in a calm modern salon experience.</p>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-salonWhite/75">
            <li className="flex items-center gap-2"><Phone size={16} /> +237 690 000 000</li>
            <li className="flex items-center gap-2"><Mail size={16} /> hello@auroraluxe.cm</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Douala, Cameroon</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Hours</h3>
          <p className="mt-4 text-sm leading-6 text-salonWhite/75">Monday - Saturday<br />9:00 - 19:00</p>
          <a href="https://instagram.com" className="mt-4 inline-flex items-center gap-2 text-sm text-salonPrimary"><Instagram size={16} /> Instagram</a>
        </div>
      </div>
    </footer>
  );
}
