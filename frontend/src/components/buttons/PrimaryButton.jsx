import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrimaryButton({ children, to, type = "button", icon = true, className = "" }) {
  const classes =
    "inline-flex items-center justify-center gap-2 bg-salonAccent px-5 py-3 text-sm font-bold text-salonWhite transition hover:bg-salonPrimary hover:text-salonDark " +
    className;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon && <ArrowRight size={18} aria-hidden="true" />}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
      {icon && <ArrowRight size={18} aria-hidden="true" />}
    </button>
  );
}
