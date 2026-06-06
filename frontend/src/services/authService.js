import api from "./api";
import { supabase } from "./supabaseClient";

export const authService = {
  register: (payload) => api.post("/auth/register", payload),
  login: (payload) => api.post("/auth/login", payload),
  profile: () => api.get("/auth/profile"),
  signOut: () => supabase.auth.signOut()
};
