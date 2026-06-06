import { supabase } from "../config/supabase.js";

export async function getGallery(_req, res) {
  const [{ data: images, error: imageError }, { data: videos, error: videoError }] = await Promise.all([
    supabase.from("gallery_images").select("*").order("uploaded_at", { ascending: false }),
    supabase.from("gallery_videos").select("*").order("uploaded_at", { ascending: false })
  ]);

  if (imageError || videoError) {
    return res.status(400).json({ message: imageError?.message || videoError?.message });
  }

  return res.json({ images, videos });
}

export async function uploadImage(req, res) {
  const { image_url, category } = req.body;
  const { data, error } = await supabase.from("gallery_images").insert({ image_url, category }).select().single();
  if (error) return res.status(400).json({ message: error.message });
  return res.status(201).json({ image: data });
}

export async function uploadVideo(req, res) {
  const { video_url, category } = req.body;
  const { data, error } = await supabase.from("gallery_videos").insert({ video_url, category }).select().single();
  if (error) return res.status(400).json({ message: error.message });
  return res.status(201).json({ video: data });
}

export async function deleteGalleryItem(req, res) {
  const { id } = req.params;
  const { type = "image" } = req.query;
  const table = type === "video" ? "gallery_videos" : "gallery_images";
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) return res.status(400).json({ message: error.message });
  return res.status(204).send();
}
