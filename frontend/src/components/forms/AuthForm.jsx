import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";
import { supabase } from "../../services/supabaseClient";

function PasswordToggle({ isVisible, onToggle, label }) {
  const Icon = isVisible ? EyeOff : Eye;

  return (
    <button
      type="button"
      onClick={onToggle}
      className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center text-salonText/70 transition duration-300 hover:text-salonAccentHover focus:outline-none focus:ring-2 focus:ring-salonAccent/40"
      aria-label={label}
      title={label}
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}

export default function AuthForm({ mode }) {
  const isRegister = mode === "register";
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, getValues, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (values) => {
    setError("");
    const response = isRegister
      ? await supabase.auth.signUp({
          email: values.email,
          password: values.password,
          options: { data: { full_name: values.full_name, phone: values.phone, role: "client" } }
        })
      : await supabase.auth.signInWithPassword({ email: values.email, password: values.password });

    if (response.error) {
      setError(response.error.message);
      return;
    }

    navigate(isRegister ? "/login" : "/book");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-lg border border-salonPrimary/50 bg-salonWhite p-6 shadow-luxe">
      <p className="eyebrow">{isRegister ? "Create account" : "Welcome back"}</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-salonDark">{isRegister ? "Join Aurora Luxe" : "Sign in"}</h1>
      <div className="mt-8 grid gap-4">
        {isRegister && (
          <>
            <input className="input" placeholder="Full name" {...register("full_name", { required: true })} />
            <input className="input" placeholder="Phone number" {...register("phone")} />
          </>
        )}
        <input className="input" type="email" placeholder="Email" {...register("email", { required: true })} />
        <div>
          <div className="relative">
            <input
              className="input pr-12"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
            />
            <PasswordToggle
              isVisible={showPassword}
              onToggle={() => setShowPassword((value) => !value)}
              label={showPassword ? "Hide password" : "Show password"}
            />
          </div>
          {errors.password && <p className="mt-2 text-sm font-semibold text-salonAccentHover">{errors.password.message}</p>}
        </div>
        {isRegister && (
          <div>
            <div className="relative">
              <input
                className="input pr-12"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                {...register("confirm_password", {
                  required: "Please confirm your password",
                  validate: (value) => value === getValues("password") || "Passwords do not match"
                })}
              />
              <PasswordToggle
                isVisible={showConfirmPassword}
                onToggle={() => setShowConfirmPassword((value) => !value)}
                label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
              />
            </div>
            {errors.confirm_password && <p className="mt-2 text-sm font-semibold text-salonAccentHover">{errors.confirm_password.message}</p>}
          </div>
        )}
      </div>
      {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
      <PrimaryButton type="submit" className="mt-6 w-full" icon={false}>
        {isSubmitting ? "Please wait..." : isRegister ? "Create account" : "Sign in"}
      </PrimaryButton>
      <p className="mt-5 text-center text-sm text-salonText">
        {isRegister ? "Already have an account? " : "New to Aurora Luxe? "}
        <Link to={isRegister ? "/login" : "/register"} className="font-bold text-salonAccent">
          {isRegister ? "Sign in" : "Create account"}
        </Link>
      </p>
    </form>
  );
}
