import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-salonPrimary/30 bg-salonDark/95 text-salonWhite backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="inline-flex items-center gap-3 font-display text-xl font-bold">
          <span className="grid h-10 w-10 place-items-center bg-salonPrimary text-salonDark">
            <Sparkles size={20} aria-hidden="true" />
          </span>
          Aurora Luxe
        </NavLink>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-sm font-semibold ${isActive ? "text-salonPrimary" : "text-salonWhite/80 hover:text-salonWhite"}`}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/dashboard" className="text-sm font-semibold text-salonWhite/80 hover:text-salonWhite">
            Admin
          </NavLink>
          <PrimaryButton to="/book" className="py-2.5">Book</PrimaryButton>
        </div>
        <button className="grid h-10 w-10 place-items-center border border-salonPrimary/40 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-salonPrimary/30 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {[...links, { to: "/dashboard", label: "Admin" }, { to: "/book", label: "Book Appointment" }].map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-sm font-semibold text-salonWhite/85">
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
