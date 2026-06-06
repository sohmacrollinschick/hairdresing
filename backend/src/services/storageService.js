import { supabase } from "../config/supabase.js";

export async function uploadToStorage(bucket, path, fileBuffer, contentType) {
  const { data, error } = await supabase.storage.from(bucket).upload(path, fileBuffer, {
    contentType,
    upsert: true
  });

  if (error) throw error;

  return data;
}
