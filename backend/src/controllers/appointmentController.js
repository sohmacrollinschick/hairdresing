import { supabase } from "../config/supabase.js";

export async function createAppointment(req, res) {
  const payload = {
    ...req.body,
    user_id: req.user?.id,
    status: "pending"
  };
  const { data, error } = await supabase.from("appointments").insert(payload).select().single();

  if (error) return res.status(400).json({ message: error.message });

  return res.status(201).json({ appointment: data });
}

export async function getAppointments(req, res) {
  const query = supabase
    .from("appointments")
    .select("*, services(name, category, price), stylists(name, phone, location)");

  const { data, error } = req.user?.user_metadata?.role === "admin"
    ? await query.order("created_at", { ascending: false })
    : await query.eq("user_id", req.user.id).order("created_at", { ascending: false });

  if (error) return res.status(400).json({ message: error.message });

  return res.json({ appointments: data });
}

export async function updateAppointment(req, res) {
  const { data, error } = await supabase.from("appointments").update(req.body).eq("id", req.params.id).select().single();

  if (error) return res.status(400).json({ message: error.message });

  return res.json({ appointment: data });
}

export async function deleteAppointment(req, res) {
  const { error } = await supabase.from("appointments").delete().eq("id", req.params.id);

  if (error) return res.status(400).json({ message: error.message });

  return res.status(204).send();
}
