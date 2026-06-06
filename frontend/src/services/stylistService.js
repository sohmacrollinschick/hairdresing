import api from "./api";

export const stylistService = {
  list: () => api.get("/stylists"),
  create: (payload) => api.post("/stylists", payload),
  update: (id, payload) => api.put(`/stylists/${id}`, payload),
  remove: (id) => api.delete(`/stylists/${id}`)
};
