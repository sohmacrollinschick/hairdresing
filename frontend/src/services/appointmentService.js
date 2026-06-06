import api from "./api";

export const appointmentService = {
  create: (payload) => api.post("/appointments", payload),
  list: () => api.get("/appointments"),
  update: (id, payload) => api.put(`/appointments/${id}`, payload),
  remove: (id) => api.delete(`/appointments/${id}`)
};
