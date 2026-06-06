import { CalendarDays, Image, LayoutDashboard, Scissors, Settings, Users } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const nav = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/appointments", label: "Appointments", icon: CalendarDays },
  { to: "/dashboard/services", label: "Services", icon: Scissors },
  { to: "/dashboard/stylists", label: "Stylists", icon: Users },
  { to: "/dashboard/gallery", label: "Gallery", icon: Image },
  { to: "/dashboard/settings", label: "Settings", icon: Settings }
];

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-salonDark text-salonWhite">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-salonPrimary/30 p-5 lg:min-h-screen lg:border-b-0 lg:border-r">
          <h1 className="font-display text-2xl font-bold text-salonPrimary">Salon Admin</h1>
          <nav className="mt-8 grid gap-2">
            {nav.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} end={to === "/dashboard"} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 text-sm font-semibold ${isActive ? "bg-salonPrimary text-salonDark" : "text-salonWhite/75 hover:bg-salonWhite/10 hover:text-salonWhite"}`}>
                <Icon size={18} aria-hidden="true" />
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
