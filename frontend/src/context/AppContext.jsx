import { createContext, useMemo, useState } from "react";

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [bookingDraft, setBookingDraft] = useState({});

  const value = useMemo(
    () => ({
      bookingDraft,
      updateBookingDraft: (updates) => setBookingDraft((current) => ({ ...current, ...updates })),
      clearBookingDraft: () => setBookingDraft({})
    }),
    [bookingDraft]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
