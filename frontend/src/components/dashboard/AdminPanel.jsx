import { CheckCircle2, ImagePlus, Scissors, Trash2, UserPlus, Video } from "lucide-react";

const actions = [
  { label: "Add services", icon: Scissors },
  { label: "Approve bookings", icon: CheckCircle2 },
  { label: "Add hairstylists", icon: UserPlus },
  { label: "Add images", icon: ImagePlus },
  { label: "Upload videos", icon: Video },
  { label: "Delete content", icon: Trash2 }
];

export default function AdminPanel({ section = "Dashboard Overview" }) {
  return (
    <div>
      <p className="eyebrow">Admin panel</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-salonWhite">{section}</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["Appointments", "Services", "Stylists", "Users", "Images", "Videos"].map((label, index) => (
          <div key={label} className="border border-salonPrimary/30 bg-salonWhite/5 p-5">
            <p className="text-sm text-salonWhite/60">{label}</p>
            <strong className="mt-2 block text-3xl text-salonPrimary">{[24, 13, 8, 142, 56, 9][index]}</strong>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {actions.map(({ label, icon: Icon }) => (
          <button key={label} className="flex items-center gap-3 border border-salonPrimary/40 bg-salonWhite p-5 text-left font-bold text-salonDark">
            <Icon size={20} className="text-salonAccent" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
