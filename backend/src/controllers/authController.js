import { supabase } from "../config/supabase.js";

export async function register(req, res) {
  const { email, password, full_name, phone } = req.body;
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name, phone, role: "client" }
  });

  if (error) return res.status(400).json({ message: error.message });

  await supabase.from("users").insert({
    id: data.user.id,
    full_name,
    email,
    phone,
    role: "client"
  });

  return res.status(201).json({ user: data.user });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(401).json({ message: error.message });

  return res.json({ session: data.session, user: data.user });
}

export async function profile(req, res) {
  const { data, error } = await supabase.from("users").select("*").eq("id", req.user.id).single();

  if (error) return res.status(404).json({ message: error.message });

  return res.json({ user: data });
}
