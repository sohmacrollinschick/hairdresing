import BookingForm from "../../components/appointments/BookingForm";
import SectionHeader from "../../components/common/SectionHeader";
import StylistCard from "../../components/cards/StylistCard";
import { stylists } from "../../constants/salonData";

export default function BookAppointment() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Appointments" title="Book your salon visit" description="Select a category, hairstyle, stylist, date, time, and notes. Requests can be approved or cancelled from the admin dashboard." />
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <BookingForm />
        <div className="grid gap-5">
          {stylists.map((stylist) => <StylistCard key={stylist.id} stylist={stylist} />)}
        </div>
      </div>
    </section>
  );
}
