import { createContext, useEffect, useMemo, useState } from "react";
import { supabase } from "../services/supabaseClient";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session);
      setUser(data.session?.user || null);
      if (data.session?.access_token) {
        localStorage.setItem("salon_access_token", data.session.access_token);
      }
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user || null);
      if (nextSession?.access_token) {
        localStorage.setItem("salon_access_token", nextSession.access_token);
      } else {
        localStorage.removeItem("salon_access_token");
      }
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({
      session,
      user,
      loading,
      isAuthenticated: Boolean(user),
      isAdmin: user?.user_metadata?.role === "admin",
      signOut: () => supabase.auth.signOut()
    }),
    [loading, session, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
