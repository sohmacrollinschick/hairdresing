import { supabase } from "./supabase.js";

export async function healthCheckDatabase() {
  const { error } = await supabase.from("services").select("id").limit(1);
  return { ok: !error, error };
}
