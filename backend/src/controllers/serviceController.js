import { supabase } from "../config/supabase.js";

export async function getServices(_req, res) {
  const { data, error } = await supabase.from("services").select("*").order("category");
  if (error) return res.status(400).json({ message: error.message });
  return res.json({ services: data });
}

export async function createService(req, res) {
  const { data, error } = await supabase.from("services").insert(req.body).select().single();
  if (error) return res.status(400).json({ message: error.message });
  return res.status(201).json({ service: data });
}

export async function updateService(req, res) {
  const { data, error } = await supabase.from("services").update(req.body).eq("id", req.params.id).select().single();
  if (error) return res.status(400).json({ message: error.message });
  return res.json({ service: data });
}

export async function deleteService(req, res) {
  const { error } = await supabase.from("services").delete().eq("id", req.params.id);
  if (error) return res.status(400).json({ message: error.message });
  return res.status(204).send();
}
