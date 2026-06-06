import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";
import { supabase } from "../../services/supabaseClient";

export default function AuthForm({ mode }) {
  const isRegister = mode === "register";
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

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
        <input className="input" type="password" placeholder="Password" {...register("password", { required: true, minLength: 6 })} />
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
