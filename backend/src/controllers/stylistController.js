import { supabase } from "../config/supabase.js";

export async function getStylists(_req, res) {
  const { data, error } = await supabase.from("stylists").select("*").order("name");
  if (error) return res.status(400).json({ message: error.message });
  return res.json({ stylists: data });
}

export async function createStylist(req, res) {
  const { data, error } = await supabase.from("stylists").insert(req.body).select().single();
  if (error) return res.status(400).json({ message: error.message });
  return res.status(201).json({ stylist: data });
}

export async function updateStylist(req, res) {
  const { data, error } = await supabase.from("stylists").update(req.body).eq("id", req.params.id).select().single();
  if (error) return res.status(400).json({ message: error.message });
  return res.json({ stylist: data });
}

export async function deleteStylist(req, res) {
  const { error } = await supabase.from("stylists").delete().eq("id", req.params.id);
  if (error) return res.status(400).json({ message: error.message });
  return res.status(204).send();
}
