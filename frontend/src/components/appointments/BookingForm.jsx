import { CalendarDays, Clock, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../buttons/PrimaryButton";
import { appointmentService } from "../../services/appointmentService";
import { featuredServices, serviceCategories, stylists } from "../../constants/salonData";

export default function BookingForm() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  const onSubmit = async (values) => {
    await appointmentService.create(values);
    reset();
    alert("Appointment request submitted.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 border border-salonPrimary/50 bg-salonWhite p-6 text-salonDark shadow-luxe">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Service category
          <select className="input" {...register("category", { required: true })}>
            {serviceCategories.map((category) => <option key={category}>{category}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Hairstyle
          <select className="input" {...register("service_id", { required: true })}>
            {featuredServices.map((service) => <option key={service.id} value={service.id}>{service.name}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Stylist
          <select className="input" {...register("stylist_id", { required: true })}>
            {stylists.map((stylist) => <option key={stylist.id} value={stylist.id}>{stylist.name}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Date
          <input className="input" type="date" {...register("appointment_date", { required: true })} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Time
          <input className="input" type="time" {...register("appointment_time", { required: true })} />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Phone
          <input className="input" placeholder="+237..." {...register("phone")} />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold">
        Notes
        <textarea className="input min-h-32" placeholder="Hair length, preferred look, special requests" {...register("notes")} />
      </label>
      <div className="grid gap-4 bg-salonSecondary p-4 text-sm text-salonText md:grid-cols-3">
        <span className="inline-flex items-center gap-2"><UserRound size={16} /> Choose a specialist</span>
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> Confirm date</span>
        <span className="inline-flex items-center gap-2"><Clock size={16} /> Get approval</span>
      </div>
      <PrimaryButton type="submit" icon={false}>{isSubmitting ? "Submitting..." : "Submit booking"}</PrimaryButton>
    </form>
  );
}
