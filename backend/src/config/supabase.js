import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl || "", serviceRoleKey || anonKey || "", {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});
