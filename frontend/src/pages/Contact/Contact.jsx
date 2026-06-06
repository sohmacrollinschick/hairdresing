import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SectionHeader from "../../components/common/SectionHeader";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = () => {
    reset();
    alert("Message sent.");
  };

  return (
    <section className="section">
      <SectionHeader eyebrow="Contact" title="Plan your salon visit" />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {[
            { icon: Phone, label: "+237 690 000 000" },
            { icon: MessageCircle, label: "WhatsApp booking available" },
            { icon: Mail, label: "hello@auroraluxe.cm" },
            { icon: MapPin, label: "Bonapriso, Douala" }
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 border border-salonPrimary/50 bg-salonWhite p-5">
              <Icon size={20} className="text-salonAccent" />
              <span className="font-semibold text-salonDark">{label}</span>
            </div>
          ))}
          <div className="border border-salonPrimary/50 bg-salonWhite p-5">
            <h2 className="font-display text-2xl font-bold text-salonDark">Business Hours</h2>
            <p className="mt-3 text-sm leading-6 text-salonText">Monday - Saturday: 9:00 - 19:00<br />Sunday: Bridal bookings only</p>
          </div>
          <div className="grid h-64 place-items-center bg-salonDark text-center text-sm font-semibold text-salonPrimary">Google Map Embed Placeholder</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 border border-salonPrimary/50 bg-salonWhite p-6 shadow-luxe">
          <input className="input" placeholder="Full name" {...register("name", { required: true })} />
          <input className="input" type="email" placeholder="Email" {...register("email", { required: true })} />
          <input className="input" placeholder="Phone" {...register("phone")} />
          <textarea className="input min-h-40" placeholder="Message" {...register("message", { required: true })} />
          <PrimaryButton type="submit" icon={false}>Send message</PrimaryButton>
        </form>
      </div>
    </section>
  );
}
